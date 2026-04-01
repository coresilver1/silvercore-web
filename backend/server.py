from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field
from typing import Any, Dict, List, Optional
import uuid
from datetime import datetime, timezone

from content_data import SITE_CONTENT


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
OPENAI_MODEL = os.environ.get("OPENAI_MODEL") or "gpt-5.2"


class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    company: str
    region: str
    message: str


class ContactSubmissionResponse(BaseModel):
    success: bool
    message: str
    submission_id: str


class ChatContext(BaseModel):
    business: Optional[str] = None
    sector: Optional[str] = None
    size: Optional[str] = None
    goals: Optional[str] = None


class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None
    context: Optional[ChatContext] = None


class ChatResponse(BaseModel):
    success: bool
    session_id: str
    configured: bool
    reply: str
    disclaimer: str
    suggested_prompts: List[str]


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


async def seed_site_content() -> None:
    content_to_store = {**SITE_CONTENT, "updated_at": utc_now_iso()}
    await db.site_content.replace_one(
        {"slug": SITE_CONTENT["slug"]},
        content_to_store,
        upsert=True,
    )


async def get_site_content() -> Dict[str, Any]:
    return await db.site_content.find_one({"slug": SITE_CONTENT["slug"]}, {"_id": 0})


def build_chat_system_prompt() -> str:
    return (
        "You are Silver Core Partners' M&A advisory assistant. "
        "Provide general educational guidance only about cross-border M&A, growth capital, "
        "capital structuring, investor relations, strategic partnerships and founder readiness. "
        "Ask clarifying questions when information is missing, especially about business type, "
        "sector, company size, geography and goals. Avoid financial, legal, tax or investment advice. "
        "Do not recommend securities, deal terms or legal positions. Keep answers professional, clear, "
        "measured and concise. When appropriate, suggest speaking directly with an advisor for tailored guidance."
    )


def format_context(context: Optional[ChatContext]) -> str:
    if not context:
        return "No structured context provided."

    return (
        f"Business: {context.business or 'Not provided'}\n"
        f"Sector: {context.sector or 'Not provided'}\n"
        f"Size: {context.size or 'Not provided'}\n"
        f"Goals: {context.goals or 'Not provided'}"
    )


async def fetch_recent_messages(session_id: str) -> List[Dict[str, str]]:
    chat_session = await db.chat_sessions.find_one({"session_id": session_id}, {"_id": 0})
    if not chat_session:
        return []
    return chat_session.get("messages", [])[-6:]


async def save_chat_messages(
    session_id: str,
    context: Optional[ChatContext],
    user_message: str,
    assistant_message: str,
    configured: bool,
) -> None:
    existing = await db.chat_sessions.find_one({"session_id": session_id}, {"_id": 0})
    messages = existing.get("messages", []) if existing else []
    messages.extend(
        [
            {
                "role": "user",
                "content": user_message,
                "timestamp": utc_now_iso(),
            },
            {
                "role": "assistant",
                "content": assistant_message,
                "timestamp": utc_now_iso(),
            },
        ]
    )

    document = {
        "session_id": session_id,
        "configured": configured,
        "context": context.model_dump() if context else {},
        "messages": messages,
        "updated_at": utc_now_iso(),
        "created_at": existing.get("created_at", utc_now_iso()) if existing else utc_now_iso(),
    }
    await db.chat_sessions.replace_one({"session_id": session_id}, document, upsert=True)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {
        "message": "Silver Core Partners API is running.",
        "service": "silvercore-partners",
    }


@api_router.get("/site-content")
async def site_content():
    content = await get_site_content()
    return content or SITE_CONTENT


@api_router.post("/contact", response_model=ContactSubmissionResponse)
async def create_contact_submission(payload: ContactSubmission):
    submission_id = str(uuid.uuid4())
    document = {
        "submission_id": submission_id,
        **payload.model_dump(),
        "submitted_at": utc_now_iso(),
        "notification_status": "pending_email_setup",
    }
    await db.contact_messages.insert_one(document)
    return ContactSubmissionResponse(
        success=True,
        message="Thank you. A Silver Core advisor will review your note and respond with next steps.",
        submission_id=submission_id,
    )


@api_router.post("/chat", response_model=ChatResponse)
async def chat_with_advisor(payload: ChatRequest):
    session_id = payload.session_id or str(uuid.uuid4())
    disclaimer = SITE_CONTENT["chat"]["disclaimer"]
    suggested_prompts = SITE_CONTENT["chat"]["suggested_prompts"]
    formatted_context = format_context(payload.context)
    recent_messages = await fetch_recent_messages(session_id)
    history_text = "\n".join(
        [f"{message['role'].title()}: {message['content']}" for message in recent_messages]
    ) or "No previous messages."

    if not OPENAI_API_KEY:
        reply = (
            "The M&A Advisor is ready to connect, but the OpenAI API key has not been added yet. "
            "Once configured, I can help with general educational guidance on cross-border M&A, growth capital "
            "and deal structuring. In the meantime, tell me your business type, sector, size range and goals so the transcript is ready."
        )
        await save_chat_messages(session_id, payload.context, payload.message, reply, configured=False)
        return ChatResponse(
            success=True,
            session_id=session_id,
            configured=False,
            reply=reply,
            disclaimer=disclaimer,
            suggested_prompts=suggested_prompts,
        )

    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage

        chat = LlmChat(
            api_key=OPENAI_API_KEY,
            session_id=session_id,
            system_message=build_chat_system_prompt(),
        ).with_model("openai", OPENAI_MODEL)

        composed_message = (
            "Client context:\n"
            f"{formatted_context}\n\n"
            "Recent conversation:\n"
            f"{history_text}\n\n"
            "Latest user message:\n"
            f"{payload.message}\n\n"
            "Remember to provide educational guidance only and avoid financial or legal advice."
        )

        response_text = await chat.send_message(UserMessage(text=composed_message))
        reply = str(response_text).strip()
        await save_chat_messages(session_id, payload.context, payload.message, reply, configured=True)
        return ChatResponse(
            success=True,
            session_id=session_id,
            configured=True,
            reply=reply,
            disclaimer=disclaimer,
            suggested_prompts=suggested_prompts,
        )
    except Exception as exc:
        logger.exception("Chat request failed: %s", exc)
        reply = (
            "We hit a temporary issue while preparing a response. Please try again in a moment, "
            "or share your sector, size range and goal so we can continue once the service is available."
        )
        await save_chat_messages(session_id, payload.context, payload.message, reply, configured=True)
        return ChatResponse(
            success=False,
            session_id=session_id,
            configured=True,
            reply=reply,
            disclaimer=disclaimer,
            suggested_prompts=suggested_prompts,
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup_event():
    await seed_site_content()

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()