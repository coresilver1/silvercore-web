# Silver Core Partners

Silver Core Partners is a premium boutique M&A advisory website built with a React frontend, FastAPI backend and MongoDB. It includes a multi-page editorial-style experience, structured content for services and insights, a database-backed contact workflow and an AI advisor chat interface ready for OpenAI GPT-5.2.

## Features

- Home, About, Services, Investments, Insights, Contact, Privacy Policy and Terms pages
- Cross-border M&A content tailored to India, the U.S., Europe and the U.K.
- Interactive investment filters by geography, sector and deal size
- Contact form that stores submissions in MongoDB and is prepared for future email notifications
- Bottom-corner AI advisor chat with transcript logging, suggested prompts and educational-only disclaimer
- JSON-LD structured data for the organization, services and insights articles

## Project Structure

```text
/app
├── backend
│   ├── content_data.py
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── frontend
│   ├── package.json
│   └── src
│       ├── App.js
│       ├── App.css
│       ├── index.css
│       ├── lib/api.js
│       ├── components/site/
│       └── pages/
└── README.md
```

## How to Run Locally

### Backend

1. Make sure MongoDB is available via the existing `MONGO_URL` in `backend/.env`.
2. Install backend dependencies:

```bash
cd /app/backend
pip install -r requirements.txt
```

3. Start the FastAPI server if you are running outside the managed environment:

```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend

1. Install frontend dependencies:

```bash
cd /app/frontend
yarn install
```

2. Start the React app:

```bash
yarn start
```

The frontend uses `REACT_APP_BACKEND_URL` from `frontend/.env` for all API requests.

## OpenAI Chat Integration

Add your key in `backend/.env`:

```env
OPENAI_API_KEY="your-openai-key"
OPENAI_MODEL="gpt-5.2"
```

### `/api/chat` behavior

- Accepts a user message, optional session ID and optional business context
- Uses an M&A-focused system prompt for general educational guidance only
- Logs chat transcripts to MongoDB in a `chat_sessions` collection
- Returns suggested follow-up prompts and a clear disclaimer
- Falls back gracefully if the API key is not configured or a provider error occurs

### Pseudocode for the chat route

```python
load_dotenv()
api_key = os.environ.get("OPENAI_API_KEY")

@router.post("/api/chat")
async def chat(payload):
    session_id = payload.session_id or generate_uuid()
    history = await db.chat_sessions.find_one({"session_id": session_id}, {"_id": 0})
    prompt = build_system_prompt(
        role="Silver Core M&A advisory assistant",
        guardrails="educational guidance only, no financial or legal advice"
    )

    if not api_key:
        return fallback_not_configured_message(session_id)

    llm = LlmChat(api_key=api_key, session_id=session_id, system_message=prompt)
    llm = llm.with_model("openai", "gpt-5.2")
    reply = await llm.send_message(UserMessage(text=compose_context(payload, history)))

    await save_transcript(session_id, payload.message, reply)
    return {
        "session_id": session_id,
        "reply": reply,
        "disclaimer": "Educational guidance only. Not financial or legal advice."
    }
```

## Suggested Database Collections

- `site_content`: brand copy, services, legal content, FAQs and page sections
- `contact_messages`: inbound contact requests with region and company details
- `chat_sessions`: chat transcripts, user context, timestamps and configuration status
- Future extension suggestion: `blog_posts`, `case_studies`, `team_bios` if content becomes editor-managed

## API Routes

- `GET /api/` — service status
- `GET /api/site-content` — all structured website content
- `POST /api/contact` — save advisory inquiry
- `POST /api/chat` — AI advisor chat endpoint with transcript logging

## Security Notes

- Keep API keys in environment variables only
- Serve the site over HTTPS in production
- Restrict allowed origins in `CORS_ORIGINS` for live environments
- Review logs and database access controls before production use

## AI Assistant Disclaimer

The AI advisor is designed to provide general educational guidance only. It must not be used as financial, legal, tax or investment advice.
