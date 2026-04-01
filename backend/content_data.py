from datetime import datetime, timezone


def iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


SITE_CONTENT = {
    "slug": "silvercore-site-content",
    "updated_at": iso_now(),
    "brand": {
        "name": "Silvercore Partners",
        "tagline": "One advisory lens across India, the U.S., Europe and the U.K.",
        "mission": "Silvercore Partners helps founders, families, investors and strategic buyers navigate cross-border decisions with clear judgment, disciplined process and senior-led execution. We work selectively so every mandate receives the attention, preparation and candor required to move from first conversation to credible outcome.",
        "description": "Boutique M&A advisory firm focused on cross-border deals across India, the U.S., Europe and the U.K.",
        "regions": ["India", "United States", "Europe", "United Kingdom"],
        "metrics": [
            {"label": "Strategic engagements", "value": "50+"},
            {"label": "Capital corridors covered", "value": "4"},
            {"label": "Sectors mapped annually", "value": "14"},
            {"label": "Senior-led mandates", "value": "100%"}
        ],
        "cta_primary": "Speak with an M&A advisor",
        "cta_secondary": "Partner with us"
    },
    "home": {
        "hero": {
            "eyebrow": "Cross-border M&A advisory",
            "headline": "Connecting Indian ambition with U.S., European and U.K. capital.",
            "subheadline": "We advise on strategic sales, growth capital, capital structuring and investor positioning with calm execution and selective mandate coverage.",
            "image": "https://images.unsplash.com/photo-1766923939514-71397ab6d658?auto=format&fit=crop&w=1400&q=80"
        },
        "pillars": [
            {
                "title": "Strategic clarity",
                "body": "We start by defining the real objective behind a transaction—liquidity, growth, control, succession or new market access—so the process is shaped around the outcome instead of generic market noise."
            },
            {
                "title": "Selective coverage",
                "body": "Silvercore takes on a limited number of mandates at a time. That selectivity keeps preparation, investor mapping and outreach precise, and ensures senior advisors remain close to every discussion."
            },
            {
                "title": "Senior-led execution",
                "body": "Our partners stay involved from positioning through diligence and negotiation. Clients benefit from experienced judgment at the moments where tone, timing and structure matter most."
            }
        ],
        "regional_summary": "Our practice sits at the intersection of India’s operating depth, U.S. capital markets, European strategic appetite and the U.K.’s global investor networks. That geography is not a slogan; it shapes how we identify buyers, frame opportunities and anticipate cross-border friction before it slows a process.",
        "featured_quotes": [
            "We believe disciplined preparation creates negotiating leverage.",
            "Good cross-border advice translates not just language, but incentives, pace and expectations."
        ]
    },
    "about": {
        "history": "Silvercore Partners was founded to serve companies and investors operating between India, the United States, Europe and the United Kingdom with more precision than broad-market advisory platforms typically offer. The firm began with a simple conviction: cross-border transactions work best when senior advisors stay close to the work, explain trade-offs honestly and resist process for its own sake. Over time, Silvercore developed a reputation for thoughtful mandate selection, careful buyer and investor mapping, and a style of communication that is direct without being theatrical. The team works across founder-led businesses, corporate divestitures, growth financings and strategic partnerships, always balancing ambition with realism. Its philosophy is rooted in transparency, preparation and respect for counterparties. Clients turn to Silvercore when they want seasoned judgment, clear pacing and an advisor who understands both the numbers and the human dynamics behind a transaction.",
        "philosophy_blocks": [
            "We prefer informed conversations over exaggerated promises. That means setting expectations early, testing assumptions and helping clients understand how different counterparties will view the same opportunity.",
            "Our credibility comes from consistency: concise materials, honest feedback, disciplined outreach and a willingness to say no when timing or positioning is not yet right."
        ],
        "partners": [
            {
                "name": "Anika Rao",
                "role": "Partner, Cross-Border M&A",
                "bio": "Anika spent fourteen years advising founder-led and sponsor-backed businesses on India–U.S. and India–Europe transactions. Her background includes mid-market sell-side mandates, carve-outs and strategic partnership negotiations in industrial, software and healthcare services. She is known for translating complex transaction issues into calm, practical guidance for boards and management teams.",
                "image": "https://images.pexels.com/photos/35964820/pexels-photo-35964820.jpeg?auto=compress&cs=tinysrgb&w=900"
            },
            {
                "name": "Julian Mercer",
                "role": "Partner, Strategic Capital Advisory",
                "bio": "Julian previously worked in London and New York advising growth companies, family offices and institutional investors on capital raises, minority investments and structured solutions. He brings particular experience in aligning investor expectations with founder priorities across cross-border situations. Clients value his measured style and strong preparation through diligence and documentation.",
                "image": "https://images.unsplash.com/photo-1758600587730-a11917c13b85?auto=format&fit=crop&w=900&q=80"
            },
            {
                "name": "Elise Hartmann",
                "role": "Partner, Founder & Growth Advisory",
                "bio": "Elise has advised scaling businesses entering new markets across Europe and the U.K., with a focus on investor readiness, governance and strategic partnering. Before Silvercore, she supported expansion and financing work for technology and consumer businesses operating across multiple jurisdictions. Her approach combines operational empathy with disciplined capital strategy.",
                "image": "https://images.pexels.com/photos/10657877/pexels-photo-10657877.jpeg?auto=compress&cs=tinysrgb&w=900"
            }
        ]
    },
    "services": {
        "items": [
            {
                "title": "M&A Advisory",
                "description": "We help clients prepare for acquisitions, disposals and strategic combinations with a process that starts from objectives rather than templates. That means sharper positioning, better counterpart selection and fewer wasted conversations. Our role is to keep decision-making grounded as valuation, diligence and deal terms evolve."
            },
            {
                "title": "Strategic Capital Advisory",
                "description": "Not every company needs a full sale to unlock its next phase. We advise on growth capital, minority investments and strategic financing paths that preserve flexibility while bringing in the right capital partner. The emphasis is on fit, pacing and structure—not just fundraising momentum."
            },
            {
                "title": "Cross-Border Transactions",
                "description": "Cross-border deals succeed when regulatory, cultural and process differences are addressed early. We help clients frame their opportunity for counterparties in India, the U.S., Europe and the U.K. without losing the substance behind the story. That creates a smoother path through outreach, diligence and negotiation."
            },
            {
                "title": "Growth & Founder Advisory",
                "description": "Founders often face strategic choices before they are ready for a formal transaction. We help assess capital options, partnership routes, timing and readiness so leaders can make informed moves without being rushed. The result is clearer decision-making and stronger positioning when opportunities appear."
            },
            {
                "title": "Capital Structuring",
                "description": "A good deal can still underperform if the structure is misaligned with the business and stakeholders. We work through ownership, dilution, liquidity, governance and incentive considerations so terms support long-term outcomes. That discipline helps avoid value leakage after the headline price is agreed."
            },
            {
                "title": "Investor Relations",
                "description": "Investor communication influences credibility long before a boardroom meeting. We help shape materials, narratives and outreach priorities so management teams speak with clarity and consistency. That improves engagement quality and makes follow-up discussions more productive."
            }
        ],
        "process": [
            {
                "phase": "01",
                "title": "Mandate clarity",
                "body": "We define the objective, constraints, decision criteria and internal readiness needed for a credible process. Clear scope at the start prevents confusion later."
            },
            {
                "phase": "02",
                "title": "Selective market mapping",
                "body": "We map counterparties by strategic fit, capital profile and transaction appetite across the relevant geographies. Focused coverage improves signal quality and saves management time."
            },
            {
                "phase": "03",
                "title": "Execution discipline",
                "body": "We manage materials, timing, diligence flow and negotiation rhythm with steady communication. The goal is controlled momentum, not unnecessary theater."
            }
        ]
    },
    "investments": {
        "intro": "Our mandates span strategic and capital-led situations where cross-border context matters. The categories below reflect common client needs and can be filtered by geography, sector and deal size.",
        "categories": [
            {
                "slug": "ma-transactions",
                "title": "M&A Transactions",
                "deal_size": "$25M – $250M",
                "deal_size_band": "mid-market",
                "geographies": ["India", "United States", "Europe", "United Kingdom"],
                "sectors": ["Technology", "Healthcare", "Industrials"],
                "outcome": "Clients can expect a structured path to strategic sale, acquisition or merger discussions with clearer valuation framing and stronger buyer fit."
            },
            {
                "slug": "growth-capital",
                "title": "Growth Capital",
                "deal_size": "$10M – $75M",
                "deal_size_band": "growth",
                "geographies": ["India", "United States", "United Kingdom"],
                "sectors": ["Technology", "Consumer", "Financial Services"],
                "outcome": "The objective is to match businesses with patient capital that supports expansion, governance development and optionality for future strategic events."
            },
            {
                "slug": "cross-border-expansion",
                "title": "Cross-Border Expansion",
                "deal_size": "$15M – $120M",
                "deal_size_band": "expansion",
                "geographies": ["India", "Europe", "United Kingdom"],
                "sectors": ["Healthcare", "Consumer", "Industrial Tech"],
                "outcome": "Companies gain partner and market-entry pathways that reduce friction around capital, local relationships and transaction sequencing."
            },
            {
                "slug": "strategic-partnerships",
                "title": "Strategic Partnerships",
                "deal_size": "$5M – $50M equivalent",
                "deal_size_band": "selective",
                "geographies": ["India", "United States", "Europe"],
                "sectors": ["Enterprise Software", "Logistics", "Advanced Manufacturing"],
                "outcome": "These mandates aim to unlock distribution, co-development, market access or capital-light growth through carefully aligned counterparties."
            },
            {
                "slug": "private-investments",
                "title": "Private Investments",
                "deal_size": "$20M – $150M",
                "deal_size_band": "private-capital",
                "geographies": ["United States", "Europe", "United Kingdom"],
                "sectors": ["Business Services", "Financial Services", "Technology"],
                "outcome": "Investors and companies receive sharper screening, clearer structure discussions and better alignment on governance and exit expectations."
            }
        ]
    },
    "insights": {
        "clusters": [
            {"title": "India–U.S. deals", "description": "Themes shaping founder liquidity, capital raising and strategic acquisitions across the busiest corridor."},
            {"title": "Capital structuring signals", "description": "How preferred instruments, governance rights and timing decisions are evolving in 2026."},
            {"title": "Europe and U.K. investor perspectives", "description": "What regional investors are prioritizing in diligence, sector selection and transaction pacing."}
        ],
        "posts": [
            {
                "slug": "india-us-mid-market-ma-2026",
                "title": "Why India–U.S. Mid-Market M&A Is Becoming More Selective in 2026",
                "summary": "Deal appetite remains healthy, but buyers are underwriting execution risk more carefully. The strongest outcomes are going to companies that can show durable margins, customer concentration discipline and management depth."
            },
            {
                "slug": "european-buyers-india-tech",
                "title": "How European Buyers Are Reframing India Technology Targets",
                "summary": "European acquirers are increasingly looking past growth headlines and focusing on integration readiness, recurring revenue quality and jurisdiction-specific compliance. Preparation is becoming a larger share of value creation."
            },
            {
                "slug": "uk-investors-cross-border-governance",
                "title": "Three Governance Questions U.K. Investors Now Ask Earlier",
                "summary": "Board rights, reporting cadence and founder decision authority are moving into earlier conversations. That shift is compressing timelines for companies that have not clarified governance in advance."
            },
            {
                "slug": "growth-capital-vs-private-equity-2026",
                "title": "Growth Capital vs. Private Equity: What Boards Need to Clarify First",
                "summary": "Capital can look similar on paper while creating very different expectations around control, pace and exit planning. Boards are benefiting from sharper internal alignment before investor outreach begins."
            },
            {
                "slug": "capital-structuring-cross-border",
                "title": "Capital Structuring Signals to Watch in Cross-Border Deals",
                "summary": "Earn-outs, liquidation preferences and rollover design are being used more deliberately as valuation expectations remain uneven. Structure is becoming a negotiation tool, not a cleanup exercise."
            },
            {
                "slug": "india-europe-healthcare-partnerships",
                "title": "What Is Driving India–Europe Healthcare Strategic Partnerships",
                "summary": "Healthcare transactions increasingly blend commercial access with operational capability. Buyers and partners want clarity on regulatory readiness, quality systems and long-term scaling assumptions."
            },
            {
                "slug": "founder-readiness-cross-border-sale",
                "title": "Founder Readiness Before a Cross-Border Sale Process",
                "summary": "The biggest gaps before market outreach are often internal: reporting quality, management delegation and clarity on post-deal roles. Addressing them early improves both pace and negotiating confidence."
            },
            {
                "slug": "private-investors-uk-targets-2026",
                "title": "Why Private Investors Are Revisiting U.K. Targets in 2026",
                "summary": "The U.K. remains attractive for investors seeking global management teams, sector depth and flexible deal structures. The differentiator is how well targets articulate resilience beyond short-term macro narratives."
            },
            {
                "slug": "cross-border-diligence-translation",
                "title": "Cross-Border Diligence Is Now a Translation Exercise, Not Just a Checklist",
                "summary": "Strong diligence processes translate business context across jurisdictions and investor expectations. Teams that can explain nuance clearly are finding fewer surprises later in negotiations."
            },
            {
                "slug": "strategic-buyers-deal-pace-2026",
                "title": "How Strategic Buyers Are Managing Deal Pace in 2026",
                "summary": "Corporate acquirers are staging conviction more carefully, with internal approvals and market testing happening earlier. Sellers who understand that rhythm can plan outreach and information flow more effectively."
            }
        ],
        "faqs": [
            {
                "question": "What makes a cross-border M&A process different from a domestic process?",
                "answer": "Cross-border transactions involve more than additional documents or time zones. Buyers and investors often interpret risk, governance and decision authority differently across jurisdictions, so preparation must address communication style, regulatory friction and integration expectations from the beginning."
            },
            {
                "question": "When should a founder start preparing for a strategic sale or capital raise?",
                "answer": "Preparation usually works best well before an active process begins. Founders benefit from early work on reporting quality, internal decision rights, management depth and investor narrative so discussions start from confidence rather than urgency."
            },
            {
                "question": "How do firms evaluate the right buyers or investors across regions?",
                "answer": "A strong market map looks beyond brand names. It weighs sector fit, transaction history, capital appetite, geographic relevance and cultural compatibility so outreach is focused on parties who can engage seriously and move with the right intent."
            }
        ]
    },
    "contact": {
        "intro": "If you are evaluating a transaction, partnership or capital strategy, send us a short note. We review every inquiry directly and respond with clear next steps.",
        "offices": [
            {
                "region": "India",
                "city": "Mumbai",
                "address": "Silvercore Partners, 11th Floor, One BKC Annex, Bandra Kurla Complex, Mumbai 400051, India",
                "phone": "+91 22 6112 4800",
                "image": "https://images.unsplash.com/photo-1652106032456-fc4ce369b1c9?auto=format&fit=crop&w=900&q=80"
            },
            {
                "region": "United States",
                "city": "New York",
                "address": "Silvercore Partners, 350 Park Avenue, Suite 1200, New York, NY 10022, United States",
                "phone": "+1 212 555 0188",
                "image": "https://images.pexels.com/photos/31710856/pexels-photo-31710856.jpeg?auto=compress&cs=tinysrgb&w=900"
            },
            {
                "region": "Europe",
                "city": "Frankfurt",
                "address": "Silvercore Partners, Taunusanlage 8, 60329 Frankfurt am Main, Germany",
                "phone": "+49 69 1532 7440",
                "image": "https://images.pexels.com/photos/18852209/pexels-photo-18852209.jpeg?auto=compress&cs=tinysrgb&w=900"
            },
            {
                "region": "United Kingdom",
                "city": "London",
                "address": "Silvercore Partners, 24 St James's Square, London SW1Y 4JH, United Kingdom",
                "phone": "+44 20 4518 2206",
                "image": "https://images.unsplash.com/photo-1758216863138-96ec40dac9c4?auto=format&fit=crop&w=900&q=80"
            }
        ]
    },
    "legal": {
        "privacy": {
            "title": "Privacy Policy",
            "updated": "April 2026",
            "sections": [
                {
                    "heading": "Information We Collect",
                    "body": "Silvercore Partners collects the information you choose to provide through contact forms, advisory inquiries and website interactions. This may include your name, email address, company or fund name, region and message content, along with limited technical usage data required for security and analytics."
                },
                {
                    "heading": "How We Use Information",
                    "body": "We use submitted information to respond to inquiries, understand potential mandates, improve website performance and maintain records of communications. We do not sell personal information, and we only use the data necessary to support legitimate business, legal and operational purposes."
                },
                {
                    "heading": "Data Storage and Security",
                    "body": "Information is stored using reasonable technical and organizational safeguards designed to reduce unauthorized access, misuse or loss. While no digital system is completely risk free, we limit access to relevant personnel and review security practices on a continuing basis."
                },
                {
                    "heading": "Third-Party Services",
                    "body": "Our website may rely on hosting, analytics, communication or AI service providers to operate effectively. These providers process data on our behalf under contractual or operational controls appropriate to the relevant service."
                },
                {
                    "heading": "Your Choices",
                    "body": "You may request access, correction or deletion of personal information we hold about you, subject to applicable law and legitimate record-keeping obligations. To make a request, please contact us through the details listed on the Contact page."
                }
            ]
        },
        "terms": {
            "title": "Terms of Service",
            "updated": "April 2026",
            "sections": [
                {
                    "heading": "Website Purpose",
                    "body": "This website provides general information about Silvercore Partners and its advisory capabilities. Content is offered for informational purposes only and does not constitute financial, legal, tax or investment advice, nor does it create an advisory relationship."
                },
                {
                    "heading": "No Reliance or Offer",
                    "body": "Website materials should not be relied upon as the basis for any transaction, investment decision or legal interpretation. Nothing on this site constitutes an offer, solicitation or commitment to provide services in any jurisdiction where such activity would be restricted."
                },
                {
                    "heading": "Intellectual Property",
                    "body": "Unless otherwise noted, website text, design, branding and related materials are the property of Silvercore Partners and may not be reproduced or distributed without prior written permission. Limited personal, non-commercial use is permitted for informational review."
                },
                {
                    "heading": "AI Assistant Disclaimer",
                    "body": "Any chatbot or AI-generated output available through this website is intended solely for general educational guidance. It is not financial, legal, tax or transactional advice and should not be treated as a substitute for professional judgment tailored to your circumstances."
                },
                {
                    "heading": "Limitation of Liability",
                    "body": "To the fullest extent permitted by law, Silvercore Partners disclaims liability for losses arising from use of this website, reliance on its content or temporary service interruptions. Use of the website is at your own risk and subject to applicable law."
                }
            ]
        }
    },
    "chat": {
        "disclaimer": "Educational guidance only. Not financial or legal advice.",
        "welcome_message": "Welcome to Silvercore Partners. I can help with general cross-border M&A questions. To start, what kind of business are you working with, which sector are you in, what size range are you considering, and what is your main goal?",
        "suggested_prompts": [
            "Summarize the typical steps in a cross-border M&A process between India and the U.S.",
            "Explain the difference between growth capital and private equity investment.",
            "Highlight three considerations when structuring an M&A deal between a European investor and a UK target."
        ]
    }
}