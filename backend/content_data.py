from datetime import datetime, timezone


def iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


SITE_CONTENT = {
    "slug": "silvercore-site-content",
    "updated_at": iso_now(),
    "brand": {
        "name": "Silvercore Partners",
        "tagline": "Cross-border M&A clarity across India, the United States, Europe and the United Kingdom.",
        "mission": "Silvercore Partners advises founders, family businesses, growth-stage companies, investors and strategic buyers on sell-side advisory, buy-side support, growth capital advisory, capital structuring, investor positioning and disciplined cross-border execution support. We stay selective so every mandate receives founder-level attention, thoughtful market mapping and senior-led judgment from preparation through negotiation.",
        "description": "Boutique M&A advisory firm focused on sell-side, buy-side, growth capital and cross-border execution support across India, the United States, Europe and the United Kingdom.",
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
            "headline": "Connecting strategic sellers, buyers and capital partners across four core markets.",
            "subheadline": "We support sell-side advisory, buy-side evaluation, growth capital strategy, investor positioning, diligence preparation and cross-border execution with disciplined pacing and senior-led judgment.",
            "image": "https://images.unsplash.com/photo-1766923939514-71397ab6d658?auto=format&fit=crop&w=1400&q=80"
        },
        "pillars": [
            {
                "title": "Strategic clarity",
                "body": "We define the transaction objective early—sale, growth capital, acquisition, strategic partnership or readiness work—so the process is shaped around value creation rather than generic deal activity."
            },
            {
                "title": "Selective coverage",
                "body": "Silvercore accepts a limited number of mandates at a time. That selectivity keeps buyer and investor outreach focused, materials sharper and management time protected."
            },
            {
                "title": "Cross-border judgment",
                "body": "We help clients bridge expectations across India, the U.S., Europe and the U.K. by anticipating diligence questions, pacing differences and counterpart priorities before they slow execution."
            }
        ],
        "regional_summary": "Our practice sits at the intersection of India’s operating depth, U.S. capital markets, European strategic appetite and U.K. investor networks. That coverage helps us frame sell-side narratives, test buyer fit, support capital strategy and manage cross-border execution with greater precision.",
        "featured_quotes": [
            "Disciplined preparation improves valuation conversations, diligence confidence and buyer or investor fit.",
            "Cross-border advisory works best when strategy, process and stakeholder expectations are translated with care."
        ],
        "who_we_work_with": [
            {
                "title": "Founders",
                "body": "Entrepreneurs evaluating a sale, secondary liquidity, growth capital or strategic partnership and looking for grounded advice before market outreach begins."
            },
            {
                "title": "Family businesses",
                "body": "Multi-generational businesses considering succession, recapitalization, strategic sale or selective capital partnerships with long-term alignment in mind."
            },
            {
                "title": "Growth-stage companies",
                "body": "Leadership teams preparing for transaction readiness, investor positioning, diligence preparation or expansion into new cross-border markets."
            },
            {
                "title": "Investors",
                "body": "Private investors, family offices and funds seeking buy-side support, market mapping, capital structuring input and cross-border transaction screening."
            },
            {
                "title": "Strategic buyers",
                "body": "Corporates assessing acquisitions, partnerships, carve-outs or market entry opportunities that require disciplined execution across multiple jurisdictions."
            }
        ],
        "typical_situations": [
            "Preparing for a sale, partial exit or recapitalization",
            "Raising growth capital while preserving strategic optionality",
            "Evaluating cross-border acquisitions or bolt-on opportunities",
            "Identifying strategic partners or investor relationships",
            "Preparing management teams and materials for due diligence"
        ],
        "why_silvercore": [
            {
                "title": "Senior-led execution",
                "body": "Founders and advisors stay directly involved through positioning, outreach, diligence preparation and negotiation support."
            },
            {
                "title": "Selective mandate coverage",
                "body": "We limit active mandates so every process receives focus, calm pacing and direct decision support."
            },
            {
                "title": "Disciplined process",
                "body": "Clear materials, targeted market mapping and steady follow-through help reduce noise and improve transaction quality."
            },
            {
                "title": "Cross-border judgment",
                "body": "We help clients navigate buyer and investor expectations across regions with sharper preparation and clearer communication."
            }
        ]
    },
    "global_coverage": {
        "eyebrow": "Global coverage",
        "title": "Operating markets with active cross-border execution support.",
        "description": "Silvercore Partners supports transactions and strategic capital conversations across four core operating markets. Each market matters differently in sell-side positioning, buyer outreach, investor fit, diligence preparation and cross-border execution.",
        "markets": [
            {
                "name": "India",
                "summary": "India remains central to our cross-border M&A and growth capital advisory work, especially for founder-led businesses, strategic buyers and investors seeking operating depth, sector expertise and well-prepared transaction opportunities. We support market mapping, investor positioning and cross-border execution for mandates connected to India’s mid-market and growth ecosystem."
            },
            {
                "name": "United States",
                "summary": "The United States continues to be a critical market for strategic acquirers, institutional capital and transaction benchmarking. We help clients frame opportunities for U.S. buyers and investors with stronger diligence readiness, clearer positioning and disciplined support through outreach and negotiation."
            },
            {
                "name": "Europe",
                "summary": "Europe offers deep sector specialization, strategic buyer activity and long-term capital relationships across multiple industries. Silvercore supports cross-border transactions involving Europe with careful attention to buyer fit, governance expectations and market-specific execution considerations."
            },
            {
                "name": "United Kingdom",
                "summary": "The United Kingdom remains an important market for strategic investors, international capital and advisory-led transactions with global reach. We help companies and investors navigate U.K.-linked opportunities through sharper process discipline, transaction readiness and cross-border coordination."
            }
        ]
    },
    "about": {
        "history": "Silvercore Partners was built to give cross-border M&A and strategic capital mandates the level of senior attention they often lose inside broader advisory platforms. The firm works across India, the United States, Europe and the United Kingdom, focusing on sell-side advisory, buy-side support, growth capital strategy, strategic partnerships and transaction readiness. Silvercore’s philosophy is simple: clear thinking should come before process, and good execution should feel disciplined rather than theatrical. That means honest conversations around valuation expectations, buyer or investor fit, diligence preparation and the timing required for a credible outcome. The team works selectively so every engagement benefits from close founder involvement, careful market mapping and balanced cross-border judgment. Clients turn to Silvercore when they need experienced support navigating a sale, capital raise, acquisition or strategic partnership with a process that is direct, thoughtful and grounded in real execution support.",
        "philosophy_blocks": [
            "We believe strong transaction outcomes come from preparation, candor and disciplined pacing. Clients benefit when their advisor helps test the story, identify buyer or investor fit and prepare management for diligence before momentum becomes fragile.",
            "Silvercore is built around selective mandate coverage and practical judgment. We focus on clarity, readiness and cross-border execution support so founders, investors and strategic buyers can make better decisions with less noise."
        ],
        "partners": [
            {
                "name": "Nidhi Arora",
                "role": "Founder & M&A Advisor",
                "bio": "Nidhi advises founders, family businesses and growth-stage companies on sell-side positioning, growth capital strategy and cross-border transaction readiness. Her work focuses on building clear narratives, improving investor positioning and guiding management teams through diligence preparation, counterpart outreach and senior-level decision points."
            },
            {
                "name": "Sameer",
                "role": "Founder & M&A Advisor",
                "bio": "Sameer works across buy-side support, strategic partnerships and cross-border execution mandates where disciplined process matters as much as transaction strategy. He helps clients assess buyer and investor fit, structure outreach thoughtfully and manage cross-border pacing through negotiation and execution support."
            },
            {
                "name": "Sam",
                "role": "M&A Advisor",
                "bio": "Sam supports transaction preparation, market mapping and investor communication across mandates involving strategic sales, capital structuring and cross-border opportunities. His focus is on helping clients present materials clearly, anticipate diligence questions and maintain process discipline through each stage of the mandate."
            }
        ]
    },
    "services": {
        "items": [
            {
                "title": "M&A Advisory",
                "description": "We support sell-side advisory and strategic transaction processes with sharper positioning, disciplined buyer mapping and thoughtful pacing. Our work helps clients prepare for valuation discussions, diligence requests and negotiation inflection points with more confidence. The objective is a credible process that improves counterparty fit and execution quality."
            },
            {
                "title": "Strategic Capital Advisory",
                "description": "Not every mandate should lead to a full sale. We advise on growth capital, minority investments and selective capital partnerships with a focus on investor positioning, structure and long-term optionality. That helps boards and founders compare capital routes with more clarity before they commit to a process."
            },
            {
                "title": "Cross-Border Transactions",
                "description": "Cross-border mandates require more than introductions across markets. We help clients bridge buyer expectations, investor questions, diligence preparation and execution pacing across India, the U.S., Europe and the U.K. That support reduces friction and keeps strategic conversations moving with clearer context."
            },
            {
                "title": "Growth & Founder Advisory",
                "description": "Founders often need transaction judgment before they formally enter a sale or capital process. We help evaluate timing, readiness, strategic options and partner fit so future decisions are better prepared. This work improves transaction readiness and reduces reactive decision-making later."
            },
            {
                "title": "Capital Structuring",
                "description": "Headline value rarely tells the whole story in a transaction or capital raise. We work through liquidity, dilution, rollover, governance and incentive alignment so structure supports the strategic objective behind the mandate. Better structure helps preserve value when negotiations become detailed."
            },
            {
                "title": "Investor Relations",
                "description": "Investor communication shapes how seriously a company is evaluated long before diligence intensifies. We help management teams present their case with clearer materials, more consistent messaging and stronger investor positioning. That improves engagement quality across both capital and strategic dialogues."
            }
        ],
        "process": [
            {
                "phase": "01",
                "title": "Mandate clarity",
                "body": "We define the objective, readiness gaps, counterparty profile and key execution constraints before taking a mandate to market."
            },
            {
                "phase": "02",
                "title": "Selective market mapping",
                "body": "We map likely buyers, investors and strategic partners by fit, mandate logic and cross-border execution relevance rather than relying on broad outreach."
            },
            {
                "phase": "03",
                "title": "Execution discipline",
                "body": "We support materials, diligence preparation, process pacing and negotiation discipline so momentum stays credible through the critical stages of a transaction."
            }
        ]
    },
    "investments": {
        "intro": "Our mandates span sell-side advisory, buy-side support, growth capital, strategic partnerships and private investment situations where cross-border context matters. Filter the categories below by geography, sector and deal size to explore how Silvercore typically supports each type of mandate.",
        "categories": [
            {
                "slug": "ma-transactions",
                "title": "M&A Transactions",
                "deal_size": "$25M – $250M",
                "deal_size_band": "mid-market",
                "geographies": ["India", "United States", "Europe", "United Kingdom"],
                "sectors": ["Technology", "Healthcare", "Industrials"],
                "outcome": "Clients can expect sharper sell-side positioning, more focused buyer mapping, disciplined diligence preparation and stronger cross-border execution support through negotiation."
            },
            {
                "slug": "growth-capital",
                "title": "Growth Capital",
                "deal_size": "$10M – $75M",
                "deal_size_band": "growth",
                "geographies": ["India", "United States", "United Kingdom"],
                "sectors": ["Technology", "Consumer", "Financial Services"],
                "outcome": "The objective is to align companies with the right investors, improve investor positioning and structure capital conversations around long-term flexibility rather than short-term momentum."
            },
            {
                "slug": "cross-border-expansion",
                "title": "Cross-Border Expansion",
                "deal_size": "$15M – $120M",
                "deal_size_band": "expansion",
                "geographies": ["India", "Europe", "United Kingdom"],
                "sectors": ["Healthcare", "Consumer", "Industrial Tech"],
                "outcome": "Companies gain strategic support around partner selection, market entry logic, investor fit and cross-border transaction sequencing as they evaluate new growth pathways."
            },
            {
                "slug": "strategic-partnerships",
                "title": "Strategic Partnerships",
                "deal_size": "$5M – $50M equivalent",
                "deal_size_band": "selective",
                "geographies": ["India", "United States", "Europe"],
                "sectors": ["Enterprise Software", "Logistics", "Advanced Manufacturing"],
                "outcome": "These situations focus on identifying partner fit, clarifying commercial logic and supporting disciplined execution for alliances that unlock market access or capability expansion."
            },
            {
                "slug": "private-investments",
                "title": "Private Investments",
                "deal_size": "$20M – $150M",
                "deal_size_band": "private-capital",
                "geographies": ["United States", "Europe", "United Kingdom"],
                "sectors": ["Business Services", "Financial Services", "Technology"],
                "outcome": "Investors and companies receive more structured screening, clearer capital structuring discussions and better alignment on governance, diligence readiness and execution pacing."
            }
        ]
    },
    "insights": {
        "clusters": [
            {"title": "India–U.S. deals", "description": "Themes shaping founder liquidity, strategic sales, growth capital and acquisition appetite across one of the most active cross-border corridors."},
            {"title": "Capital structuring signals", "description": "How governance rights, rollover mechanics, minority capital terms and transaction pacing are evolving in 2026."},
            {"title": "Europe and U.K. investor perspectives", "description": "What European and U.K. investors are prioritizing in diligence readiness, sector selection and cross-border execution support."}
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
                "answer": "Cross-border transactions involve more than extra documents or time zones. Buyers and investors often view governance, diligence readiness, integration risk and decision authority differently across regions, so preparation has to address both market fit and execution support from the start."
            },
            {
                "question": "When should a founder start preparing for a strategic sale or growth capital process?",
                "answer": "Preparation usually works best well before a live process begins. Founders benefit from early work on reporting quality, management depth, investor positioning, diligence preparation and transaction objectives so conversations start from readiness rather than urgency."
            },
            {
                "question": "How do advisors identify the right buyers or investors across regions?",
                "answer": "A disciplined market map looks beyond brand names. It weighs sector logic, transaction history, strategic fit, capital appetite, geographic relevance and cross-border execution capability so outreach is focused on serious counterparties with the right mandate logic."
            }
        ]
    },
    "contact": {
        "intro": "If you are evaluating a sale, growth capital raise, strategic partnership, buy-side opportunity or transaction readiness project, send us a concise note. Enquiries are reviewed directly by the founders, with follow-up shaped around your transaction objectives, capital goals and cross-border context.",
        "review_note": "A short summary of your business, sector, size range and transaction or capital goals will help us respond more constructively.",
        "emails": [
            {
                "label": "Primary contact",
                "address": "info@silvercorepartner.com"
            },
            {
                "label": "Secondary contact",
                "address": "contact@silvercorepartner.com"
            }
        ],
        "whatsapp": {
            "display": "+1 (367) 219-6085",
            "message": "Hi, I’d like to discuss a cross-border M&A / strategic advisory opportunity with Silvercore Partners.",
            "url": "https://wa.me/13672196085?text=Hi%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20cross-border%20M%26A%20%2F%20strategic%20advisory%20opportunity%20with%20Silvercore%20Partners."
        }
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
                    "heading": "M&A Advisor Disclaimer",
                    "body": "Any chatbot or AI-generated output available through this website is intended solely for general information. It does not constitute legal, tax, investment or regulatory advice and should not be treated as a substitute for professional judgment tailored to your circumstances."
                },
                {
                    "heading": "Limitation of Liability",
                    "body": "To the fullest extent permitted by law, Silvercore Partners disclaims liability for losses arising from use of this website, reliance on its content or temporary service interruptions. Use of the website is at your own risk and subject to applicable law."
                }
            ]
        }
    },
    "chat": {
        "disclaimer": "This chat provides general information only and does not constitute legal, tax, investment or regulatory advice.",
        "welcome_message": "Welcome to Silvercore Partners. I’m the M&A Advisor and can help with general questions on process, capital strategy, buyer or investor fit, transaction pacing and cross-border advisory. To begin, what kind of business are you working with, which sector are you in, what size range are you considering, and what is your main goal?",
        "suggested_prompts": [
            "Summarize the typical steps in a cross-border M&A process between India and the U.S.",
            "Explain the difference between growth capital and private equity investment.",
            "Highlight three considerations when structuring an M&A deal between a European investor and a UK target."
        ]
    }
}