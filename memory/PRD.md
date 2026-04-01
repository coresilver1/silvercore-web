# Silver Core Partners PRD

## Original Problem Statement
Build a boutique M&A advisory website called Silver Core Partners for cross-border deals across India, the U.S., Europe and the U.K. The site must include Home, About, Services, Investments, Insights/blog, Contact, Privacy Policy and Terms pages; SEO-friendly content blocks; JSON-LD structured data; a bottom-corner AI M&A advisor chat; backend pseudocode and API route guidance for OpenAI chat; and a full README. Tone: professional, approachable, precise and free from buzzwords.

## User Choices
- OpenAI GPT-5.2 selected for the AI advisor
- User will provide their own API key later
- Contact flow should save submissions in database and be prepared for future email notifications
- Visual direction: deep navy premium finance
- Partner bios: build now with best judgment

## Architecture Decisions
- Frontend: React + React Router + Tailwind + existing shadcn/ui components
- Backend: FastAPI with MongoDB via existing `MONGO_URL`
- Content strategy: structured site content served from `/api/site-content` and seeded into MongoDB on startup
- Contact workflow: POST `/api/contact` stores inquiries in MongoDB with `pending_email_setup` notification status
- AI advisor workflow: POST `/api/chat` logs transcripts in MongoDB and uses OpenAI GPT-5.2 when `OPENAI_API_KEY` is configured; otherwise returns a graceful activation message
- SEO strategy: dynamic page titles/meta descriptions plus JSON-LD for Organization, Services and Articles

## User Personas
- Founder exploring a sale, minority raise or strategic partner
- Mid-market company executive evaluating cross-border expansion or acquisition targets
- Private investor or family office reviewing partnership and private investment opportunities
- Corporate strategy leader comparing capital structuring and cross-border transaction options

## Core Requirements
- Premium advisory website with strong hierarchy, whitespace and accessible contrast
- Clear content for services, investment categories, blog insights and legal pages
- Interactive filters on Investments page
- Functional contact form and AI chat widget
- AI assistant must provide educational guidance only and show a disclaimer
- README must explain local setup and OpenAI integration path

## What’s Been Implemented
### 2026-04-01
- Built full Silver Core Partners frontend with routes for Home, About, Services, Investments, Insights, Contact, Privacy Policy and Terms of Service
- Wrote bespoke advisory copy, partner bios, 10 insight summaries, FAQs, office details and legal content
- Implemented deep navy premium visual system with editorial typography, premium imagery and purposeful animations
- Added JSON-LD structured data for organization, services and article content
- Built FastAPI backend endpoints: `GET /api/`, `GET /api/site-content`, `POST /api/contact`, `POST /api/chat`
- Seeded structured content into MongoDB and added Mongo-backed chat transcript + contact submission storage
- Added OpenAI-ready chat integration using `OPENAI_API_KEY` and `OPENAI_MODEL`, with graceful fallback when key is absent
- Updated README with local run instructions, chat pseudocode, route summary and security notes
- Fixed chatbot launcher overlap discovered in testing by repositioning the floating widget and verifying the full UI flow

### 2026-04-01 — Content and contact refinement update
- Removed all office addresses, city cards and location-based phone references from the site
- Replaced location sections with a Global Coverage / Operating Markets section for India, United States, Europe and United Kingdom
- Updated team profiles to Nidhi Arora, Sameer and Sam, and replaced photos with premium illustrated avatar placeholders
- Renamed the chatbot experience to “M&A Advisor” across launcher, panel text, helper copy and fallback responses
- Added floating WhatsApp contact, WhatsApp CTAs in the contact page and footer, and prominent email contact links for `info@silvercorepartner.com` and `contact@silvercorepartner.com`
- Enriched homepage messaging with Who We Work With, Typical Situations We Support and Why Silver Core sections using stronger M&A-specific language
- Refocused the contact page around the enquiry form, direct founder-reviewed contact channels and operating markets

### 2026-04-01 — Final branding alignment update
- Updated the public-facing company name across the site from “Silvercore Partners” to “Silver Core Partners” including navigation, logo, metadata, contact copy and chatbot welcome text
- Simplified the floating WhatsApp button to an icon-only launcher while preserving WhatsApp CTAs in the contact page and footer

## Validation Notes
- Self-tested backend endpoints through the external API URL
- Self-tested frontend routing and chatbot open/send behavior using Playwright screenshots
- Testing agent iteration 1 found a chatbot overlap blocker; fixed successfully
- Testing agent iteration 2 confirmed chatbot regression passed

## Prioritized Backlog
### P0
- Add real OpenAI API key in `backend/.env` to activate live advisor responses

### P1
- Add editor-managed CMS or admin interface for blog posts, partner bios and legal content
- Add optional email notification delivery for new contact submissions
- Add richer article detail pages and internal linking between topic clusters
- Revisit optional platform-controlled external branding only if a non-code setting becomes available

### P2
- Add case studies and deal tombstones section
- Add analytics dashboard for inbound advisory inquiries and chat usage patterns
- Add multilingual content variants for cross-border audiences

## Next Tasks List
- Configure the OpenAI API key to switch the chat from placeholder mode to live responses
- Expand insights into full article pages if editorial publishing is needed
- Add email delivery integration for contact submissions when ready
