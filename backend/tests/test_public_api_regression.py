import os
from pathlib import Path

import pytest
import requests


# Public API base URL sourced from frontend env to match real user-facing endpoint.
def _load_public_base_url() -> str:
    env_value = os.environ.get("REACT_APP_BACKEND_URL")
    if env_value:
        return env_value.rstrip("/")

    env_file = Path("/app/frontend/.env")
    if not env_file.exists():
        raise RuntimeError("REACT_APP_BACKEND_URL missing and /app/frontend/.env not found")

    for raw_line in env_file.read_text().splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        if key.strip() == "REACT_APP_BACKEND_URL":
            cleaned = value.strip().strip('"').strip("'")
            if not cleaned:
                raise RuntimeError("REACT_APP_BACKEND_URL is empty")
            return cleaned.rstrip("/")

    raise RuntimeError("REACT_APP_BACKEND_URL not found in /app/frontend/.env")


BASE_URL = _load_public_base_url()


@pytest.fixture
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Core backend route checks for Silvercore public API.
def test_get_site_content_structure(api_client):
    response = api_client.get(f"{BASE_URL}/api/site-content", timeout=20)
    assert response.status_code == 200

    data = response.json()
    assert data["brand"]["name"] == "Silvercore Partners"
    assert data["brand"]["regions"] == ["India", "United States", "Europe", "United Kingdom"]

    # Team and contact updates requested in latest scope.
    partner_names = [member["name"] for member in data["about"]["partners"]]
    assert partner_names == ["Nidhi Arora", "Sameer", "Sam"]

    partner_roles = [member["role"] for member in data["about"]["partners"]]
    assert partner_roles == [
        "Founder & M&A Advisor",
        "Founder & M&A Advisor",
        "M&A Advisor",
    ]

    contact_emails = [item["address"] for item in data["contact"]["emails"]]
    assert contact_emails == ["info@silvercorepartner.com", "contact@silvercorepartner.com"]

    assert "offices" not in data["contact"]

    market_names = [market["name"] for market in data["global_coverage"]["markets"]]
    assert market_names == ["India", "United States", "Europe", "United Kingdom"]


# Contact workflow check for storage-ready backend behavior.
def test_post_contact_submission_success(api_client):
    payload = {
        "name": "TEST QA Reviewer",
        "email": "qa.reviewer+silvercore@example.com",
        "company": "TEST Silvercore QA",
        "region": "India",
        "message": "TEST contact submission for backend regression.",
    }
    response = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
    assert response.status_code == 200

    data = response.json()
    assert data["success"] is True
    assert "submission_id" in data and isinstance(data["submission_id"], str) and len(data["submission_id"]) > 10
    assert "Silvercore advisor" in data["message"]


# Chat endpoint fallback check when OPENAI_API_KEY is intentionally blank.
def test_post_chat_not_configured_fallback(api_client):
    payload = {
        "message": "What should I prepare before cross-border M&A outreach?",
        "context": {
            "business": "Founder-led SaaS",
            "sector": "Technology",
            "size": "$20M-$50M",
            "goals": "Strategic sale preparation",
        },
    }
    response = api_client.post(f"{BASE_URL}/api/chat", json=payload, timeout=25)
    assert response.status_code == 200

    data = response.json()
    assert data["success"] is True
    assert data["configured"] is False
    assert isinstance(data["session_id"], str) and len(data["session_id"]) > 10
    assert "m&a advisor" in data["reply"].lower()
    assert "api key" in data["reply"].lower()
    for token in ["general information", "legal", "tax", "investment", "regulatory advice"]:
        assert token in data["disclaimer"].lower()
    assert isinstance(data["suggested_prompts"], list) and len(data["suggested_prompts"]) >= 1
