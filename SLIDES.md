# Slide plan · AI from the front line

The editable text of every slide, one section per slide, numbered to match the
deck (and the `Images/NN Title/` folders, and the `?review` badge).

**How to use this file**
- Edit any text here, save, commit and push (or just tell Claude what you changed),
  then say **"pull from plan"** — Claude diffs this file against the deck and applies
  your changes to the HTML.
- Say **"push to plan"** — Claude regenerates this file from the current deck so it
  matches what's live (do this after slides have been edited directly).
- `*italics*` marks the serif accent (`<em>`) inside a heading or line — keep the
  asterisks around whichever words should get the accent treatment.
- Keep the `## NN · Title` headings intact; they're how Claude maps a section to a
  slide. Layout, mocks and logos aren't described here — ask for those changes in chat.

---

## 01 · Cover

- **Title:** AI from the *front line.*
- **Prompt bar:** ...this is what you actually *need to know.*
- **Chips:** 01 The hype. · 02 The reality. · 03 What works.
- **Byline:** Dave Sellick — Founder, Sidgrove

## 02 · Tick Tock

- **Section tag:** The hype
- **Headline:** Tick *Tock.*
- **Sub:** ...AI is coming for us, right?
- **Mock (redundancy pop-up):**
  - Title: Accountant Detected.
  - Rows: Data entry — AUTOMATABLE · Reconciliation — AUTOMATABLE · Tax preparation — AUTOMATABLE
  - Button: I Accept My Redundancy

## 03 · The headlines

- **Section tag:** The hype
- **Headline:** The *headlines.*
- **Sub:** The doomsaying, *in print.*
- **Press cards:**
  1. AAT — Two in five — would consider leaving accountancy (`AAT.png`)
  2. Fortune — Mustafa Suleyman — CEO, Microsoft AI (`Suleyman.png`)
  3. TheStreet — The Big Four — cutting benefits and hiring (`big four.png`)

## 04 · Anthropic's prediction

- **Section tag:** The hype
- **Headline:** Anthropic's *prediction.*
- **Sub:** Business & finance: it could do *nearly all of it.* It's used for *almost none.*
- **Overlay:** periwinkle ring around the Business & finance sector, magnified in a matching loupe under the headline
- **Image:** `Images/04 Anthropic's prediction/chart.png` — caption: Anthropic · theoretical capability vs observed usage, by occupation

## 05 · Hype bubble

- **Section tag:** The hype
- **Headline:** But I think *they're wrong.*
- **Sub:** You're fine. We're in a hype bubble. *And they're already backtracking.*
- **Image:** `Images/05 Hype bubble/reversal.png`

## 06 · Why listen

- **Section tag:** Side note
- **Headline:** Why listen to *me?*
- **Claims:**
  1. I try *all of it.*
  2. If it worked, *I'd be doing it.*
- **Permission card:** So, officially — You have permission to simplify. *Ignore the hype. Focus on what matters.*

## 07 · Why so strong

- **Section tag:** The hype
- **Headline:** So why so much *hype?*
- **Cards:**
  1. **The GenAI mirage** — It looks great *from afar.* — Mind-blowing demo. Different reality.
  2. **The money** — The hype pays *their bills.* — Hundreds of billions bet. It has to be right.
  3. **The tech is actually good** — Good enough to *believe.* — People are losing jobs. Just not to AI. (AI" / "the accounts say — over-hired · rates · margins")

## 08 · The meter

- **Section tag:** The hype
- **Headline:** If full autonomy worked, *I'd be using it.*
- **Sub:** Nothing to sell. *I just use it, a lot.*
- **Mock (usage card, "a normal week"):**
  - Frontier models, hands on — ~12 hrs / day
  - Claude Max subscription — limit hit · weekly
  - Fully autonomous, unreviewed — 0 · not worth the risk yet

## 09 · What is it? (divider)

- **Headline:** So what actually *is* it?
- **Prompt bar:** Generative AI, specifically. *How does it actually work?*

## 10 · An LLM

- **Section tag:** The reality
- **Kicker:** ‘AI’, as most people mean it, is GenAI:
- **Headline:** Transformer-based *LLMs.*
- **Sub:** Large language models. A very advanced autocomplete, *based on pattern recognition.*
- **Mock (phone keyboard, predictive text):**
  - Them: Can you send over the Q1 figures before Friday?
  - Me (typing): Sure, I'll send the|
  - Suggestions: file · **figures** · invoice

## 11 · Hype curve

- **Section tag:** The reality
- **Headline:** From quiet utility *to mass hype.*
- **Sub:** The newest form of AI generates from scratch. *It hits awe, dopamine and fear at once.*
- **Graphic (curve, 2000 → 2025):** Pre-2015 — ML and OCR, *quietly improving.* · 2015 — Cloud apps *embedding AI, unnoticed.* · 2023 — GenAI. *Text, images, video, code, from scratch.*

## 12 · Probabilistic

- **Section tag:** The reality
- **Headline:** It's probabilistic. *By design.*
- **Pipeline:** "What should I prioritise?" → [ 3923 · 1129 · 358 · … ] → Transformer → a *plausible* next token
- **Popover:** Candidates / p(next): cashflow 34% · the VAT return 22% · a holiday 1.8% — Nothing is checked.
- **Sub:** Confidently, *probably* correct.

## 13 · Why a problem? (beat)

- **Section tag:** The reality
- **Headline:** OK, so why is that a problem, *particularly in accounting?*

## 14 · Two answers

- **Section tag:** The reality
- **Headline:** Same question. *Two answers.*
- **Mock (two Claude runs, same prompt "Add up this quarter's invoices for me."):**
  - Run A: Done. 206 fall in Q1, total *£128,400*. 8 look like next quarter.
  - Run B: Done. 209 fall in Q1, total *£129,150*. 5 look like next quarter.
  - Delta sticker: £750 apart
- **Sub:** It can't be relied on for *consistent, high-integrity output.*

## 15 · Just use it (beat)

- **Section tag:** The reality
- **Headline:** Just *use* it.
- **Sub:** It makes mistakes, *all the time.*

## 16 · Not intelligent

- **Section tag:** The reality
- **Headline:** It isn't intelligent. *It's different.*
- **What it can't do:**
  1. 🎲 It won't always do what you tell it. *That's the maths.*
  2. 🪞 It can't check its own work. *It'll say it did.*
  3. 🔍 A probably-correct review of a probably-correct answer. *Someone has to look.*
- **Not better than a human:**
  1. 😎 Confident *either way.*
  2. 🎭 Hides its errors *well.*
  3. 🤝 Not better than a human *using it properly.*

## 17 · Added to that (beat)

- **Section tag:** The reality
- **Headline:** And *added* to that…

## 18 · The economics

- **Section tag:** The reality
- **Headline:** Sold below *cost.*
- **Sub:** This isn't a software business. *What happens when they raise prices and cut the limits?*
- **Cutting:** `Images/18 The economics/openai-losses.png` — caption: OpenAI's leaked 2025 financials · a $38.5B loss

## 19 · Environment press

- **Section tag:** The reality
- **Headline:** Don't mention the *environment.*
- **Sub:** Or the societal impacts. *It's not just me saying it.*
- **Press cards (2×2):**
  1. The Economist — Consumer electronics — prices rocketing for memory (`economist.png`)
  2. Climate Home News — The UN — asks AI firms to reveal emissions, water and energy use (`un.png`)
  3. EESI — Public health — data centres as hotbeds of health risks (`eesi.png`)
  4. Civicus Lens — Communities — taking on data centres over energy and water (`civicus.png`)

## 20 · How to use it (divider)

- **Headline:** So how should we *use* it?
- **Prompt bar:** And yet I use it all day. *So how, without handing it the keys?*

## 21 · Asbestos era

- **Section tag:** What works *· the pitch*
- **Lead-in:** Well… let's start with *what everyone's selling right now.*
- **Headline:** The ~~agentic~~ *asbestos* era.

## 22 · Pre-authorised mistakes

- **Section tag:** What works *· the pitch*
- **Headline:** Pre-authorised *mistakes.*
- **Sub:** It improvises the steps, *then marks its own homework.*
- **Mock (permission dialog · "Agent" wants to run your month-end · Full autonomy · no review):**
  - Fetch the invoices
  - Match & reconcile
  - Post the journals
  - Decide it's all correct
  - Button: Approve future mistakes

## 23 · Hooked

- **Section tag:** What works *· the pitch*
- **Headline:** They want you *hooked.*
- **Sub:** The flat plan gets you in. *The agent bills you by the token.*
- **Mock (⬢ AgentSuite Pro · Autopilot on):**
  - Month-end close — 82%
  - Tokens remaining — 41k of 3.0M
  - Button: Top up · £299
  - Fine print: auto-top-up on · pricing subject to change

## 24 · It's toxic

- **Section tag:** What works *· the pitch*
- **Headline:** It's *toxic.*
- **Sub:** It'll need ripping out, at huge cost. *Like asbestos.*

## 25 · Better approach (divider)

- **Headline:** So what's a *better* approach?
- **Prompt bar:** In my opinion, *anyway.*

## 26 · Copilot, never the pilot

- **Section tag:** What works *· my answer*
- **Headline:** A copilot. *Never the pilot.*
- **Sub:** Don't put it in the process. *Have it write the tools that run the process.*
- **Visual (two cards):** ✗ The pilot — Claude → runs the close → posts it — Autonomous. *Marks its own work.* · ✓ The copilot — Claude → builds the tool → You sign off — Augments. *You stay in charge.*

## 27 · 01 Chat (beat)

- **Section tag:** How I use it *· 01 chat*
- **Headline:** *Chat.*
- **Sub:** Four ways. *Three daily, one not.* First, the daily driver.

## 28 · Chat

- **Section tag:** How I use it *· 01 chat*
- **Headline:** Chat. *The daily driver.* — verdict: Use daily
- **Screenshot:** `Images/28 Chat/claude-chat.png` — caption: claude.ai
- **What I use:** Claude · Gemini
- **Other options:** ChatGPT · Microsoft Copilot · Perplexity · Mistral · DeepSeek

## 29 · 02 Build (beat)

- **Section tag:** How I use it *· 02 build*
- **Headline:** *Build.*
- **Sub:** Vibe coding, and what I've built *with Claude Code.*

## 30 · Deterministic

- **Section tag:** How I use it *· 02 build*
- **Headline:** Build deterministic, *wherever possible.*
- **Sub:** Probabilistic *augments* it. It doesn't replace it.
- **Cards:** ⚙️ Deterministic — Pre-set logic. Predictable. *Same answer every run.* · vs · 🎲 Probabilistic — Pattern-matched. Plausible. *Different answer every run.*

## 31 · Vibe coding

- **Section tag:** How I use it *· 02 build*
- **Headline:** Vibe coding. *Where it shines.* — verdict: Use to build
- **Use it for:** 🛠️ Internal tools *and prototypes.* · 🖥️ Slides. · 🌐 Simple *websites.* · 🎨 Brand *assets.*
- **Warnings:** 🔒 Security. *Get an engineer if it holds sensitive data.* · 🐇 Rabbit holes. *Don't overbuild.* · 🛒 If an app already does it, *buy it.*

## 32 · Sidgrove Intelligence

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Kicker:** Built with Claude Code · 01 of 04
- **Headline:** Sidgrove *Intelligence.*
- **Line:** The app that sits between my clients and the work. *Built with Claude Code.*
- **Mock (app shell, Sidgrove Intelligence design tokens):** sidebar nav (Bookkeeping · Cashflow · Deadlines · **Month end** · Management accounts · Payroll · VAT) · eyebrow "Client · Acme Ltd" · title Month *end* · KPIs: Accruals 12 posted · Prepayments 8 posted · Deferred revenue £42,300 review · rows: Payroll postings (Posted) · Direct cost reallocations (Posted) · Corporation tax accrual (Needs review) · Loan postings (Scheduled)

## 33 · Daily cashflow

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Daily cashflow. *Straight from the bank.*
- **Screenshot:** `Images/33 Daily cashflow/cashflow.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 34 · Bookkeeping

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Bookkeeping workflow *and comms.*
- **Screenshot:** `Images/34 Bookkeeping/bookkeeping.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 35 · Deadlines

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Deadlines *and alerts.*
- **Screenshot:** `Images/35 Deadlines/deadlines.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 36 · Management accounts

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Management accounts. *With notifications.*
- **Screenshot:** `Images/36 Management accounts/management-accounts.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 37 · Payroll reviews

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Payroll reviews *and client sign-off.*
- **Screenshot:** `Images/37 Payroll reviews/payroll.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 38 · VAT reviews

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** VAT reviews *and client sign-off.*
- **Screenshot:** `Images/38 VAT reviews/vat.png` — caption: Sidgrove Intelligence · Circle, the demo client

## 39 · Month end

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Month end. *Schedules to cover all postings.*
- **Grid (4×2, seven thumbnails, eighth cell empty):** Accruals & prepayments (`Images/39 Month end/accruals.png`) · Deferred & accrued revenue (`accrued-income.png`) · Payroll reallocations (`payroll-realloc.png`) · Direct cost reallocations (`direct-costs.png`) · Corporation tax (`Images/40 Corporation tax/corp-tax.png`) · R&D credits (`rd.png`) · Loan notes (`cln.png`)

## 40 · Corporation tax

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Corporation tax. *It proposes, I post.*
- **Screenshot:** `Images/40 Corporation tax/corp-tax.png` — caption: Sidgrove Intelligence · Circle, the demo client · it proposes, I post

## 41 · The hub

- **Section tag:** 02 Build *· Sidgrove Intelligence*
- **Headline:** Your tools in. *One Slack message out.*
- **Sub:** The GenAI is in how it was built. *Not in what it posts.* *Slack for live comms.*
- **Visual (from sidgrove.com):** Your tools (Xero · Excel · Sheets · Apron · Pleo · Paycircle) → Sidgrove Intelligence (synced & checked · month-end review · accruals & prepayments · building your report pack…) → Back to you (#your-finances Slack message · Management Accounts PDF · Ready)

## 42 · Slides

- **Section tag:** 02 Build *· Slides*
- **Kicker:** Built with Claude Code · 02 of 04
- **Headline:** This deck. *No PowerPoint.*
- **Sub:** Every slide here was built in Claude Code. *You're looking at it.*

## 43 · Websites

- **Section tag:** 02 Build *· Websites*
- **Kicker:** Built with Claude Code · 03 of 04
- **Headline:** Simple websites. *Like sidgrove.com.*
- **Line:** Described, built, deployed. *No agency, no template.*
- **Screenshot:** `Images/43 Websites/screenshot.png` — caption: sidgrove.com · built with Claude Code

## 44 · Brand assets

- **Section tag:** 02 Build *· Brand assets*
- **Kicker:** Built with Claude Design · 04 of 04
- **Headline:** Brand assets. *With Claude Design.*
- **Line:** The Claude Code engine, *tailored for design.*
- **Screenshot:** `Images/44 Brand assets/screenshot.png` — caption: Claude Design · brand assets

## 45 · 03 Small stuff (beat)

- **Section tag:** How I use it *· 03 the small stuff*
- **Headline:** *The small stuff.*
- **Sub:** Note takers, dictation, *the everyday wins.*

## 46 · AI note takers

- **Section tag:** How I use it *· 03 the small stuff*
- **Headline:** AI *note takers.*
- **Mock (Loom · Acme catch-up · 32 min):** Summary ready · 2 action items — Fees agreed: £1,850 a month from April · Client sends the payroll CSV by Friday
- **What I use:** Loom
- **Other options:** Fireflies · Vinyl · Granola · Fathom

## 47 · Dictation

- **Section tag:** How I use it *· 03 the small stuff*
- **Headline:** Dictation. *Talk instead of type.*
- **Sub:** A great way to prompt *the GenAI chat interface.*
- **Mock (Aqua Voice · dictating):** “Summarise this thread into three bullets and draft a reply”
- **What I use:** Aqua Voice
- **Other options:** Wispr Flow · superwhisper

## 48 · 04 Non-daily (beat)

- **Section tag:** How I use it *· 04 non-daily*
- **Headline:** Non-daily *use cases.*
- **Sub:** *My reality.* Everything before this, I use daily.

## 49 · Spreadsheets

- **Section tag:** How I use it *· 04 non-daily*
- **Headline:** Spreadsheet add-ons. *Check everything.* — verdict: Non-daily
- **Mock (creditors.xlsx · Claude for Excel):**
  - Rows: Stationery Ltd £84.20 20% ✓ · Hosting GmbH £220.00 RC ✓ · Deel Inc £1,240.00 Reverse charge?
- **What I use:** Claude for Excel · ChatGPT for Sheets

## 50 · MCP connections

- **Section tag:** How I use it *· 04 non-daily*
- **Headline:** MCP connections. *Plugging it into your apps.* — verdict: Non-daily
- **Rows:**
  1. 🔌 Xero, Slack, your inbox. *It can read them all.*
  2. 🔑 I let it read. *I don’t let it post.*
  3. 🪤 Anything it reads can instruct it. *Prompt injection.*

## 51 · Claude Cowork

- **Section tag:** How I use it *· 04 non-daily*
- **Headline:** Oh, and *Claude Cowork.* — verdict: Non-daily
- **Sub:** I barely touch it.
- **Rows:**
  1. The product that does whole tasks, end to end. *Probably correctly. Sometimes not.*
  2. *Niche* use cases.
  3. Lots of *hype.*
- **Other options:** ChatGPT Work · Gemini Spark · Copilot agents · Basis

## 52 · Do and don't

- **Section tag:** What works *· my answer*
- **Headline:** Do and *don't.*
- **Do — Use it *every day.*:** Chat, for *thinking.* · Talk to it. *Dictate.* · Build tools with *Claude Code.* · *Check* its work.
- **Don't — Hand it *the keys.*:** Let it *run the close.* · Post anything *unreviewed.* · Client data on a *personal plan.* · Buy the *agent pitch.*

## 53 · Takeaways

- **Section tag:** Wrapping up
- **Headline:** Key *takeaways.*
- **Rows:**
  1. The work isn't going away. *Someone has to rip the asbestos out.*
  2. The narrative is hype, powered by *massive financial bets.*
  3. Build with it. Use it. *Don't let it run your accounting.*

## 54 · Thank you

- **Headline:** Thank *you.*
- **Contact card:** Dave Sellick — Founder, Sidgrove — LinkedIn /in/davesellick — QR: Scan for the AI walkthrough recordings (`Images/54 Thank you/qr.png`)
