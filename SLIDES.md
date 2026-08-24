# Slide plan · AI from the front line

The editable text of every slide, one section per slide, numbered to match the
deck (and the `Images/NN Title/` folders, and the `?review` badge).

**How to use this file**
- Edit any text here, save, commit and push (or just tell Claude what you changed),
  then say **"pull from plan"** — Claude diffs this file against the deck and applies
  your changes to the HTML.
- Say **"push to plan"** — Claude regenerates this file from the current deck so it
  matches what's live (do this after slides have been edited directly).
- A ` · ` between sentences in a **Sub** means each sentence is its own bulleted line, never a wrapped paragraph.
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
- **Headline:** The narrative is *relentless.*
- **Press cards:**
  1. AAT — Two in five — would consider leaving accountancy (`AAT.png`)
  2. Fortune — Mustafa Suleyman — CEO, Microsoft AI (`Suleyman.png`)
  3. TheStreet — The Big Four — cutting benefits and hiring (`big four.png`)

## 04 · Anthropic's prediction

- **Section tag:** The hype
- **Headline:** Anthropic's *prediction.*
- **Sub:** Business & finance: in theory, *GenAI can do almost all of our job.*
- **Overlay:** periwinkle ring around the Business & finance sector, magnified in a matching loupe under the headline
- **Image:** `Images/04 Anthropic's prediction/chart.png` — caption: Anthropic · theoretical capability vs observed usage, by occupation

## 05 · Hype bubble

- **Section tag:** The hype
- **Headline:** But I think *they're wrong.*
- **Sub:** You're fine. · We're in a hype bubble. · *And they're already backtracking.*
- **Image:** `Images/05 Hype bubble/reversal.png`

## 06 · Why listen

- **Section tag:** Side note
- **Headline:** Why listen to *me?*
- **Claims:**
  1. I’m an obsessive *early adopter.*
  2. If it worked, *I'd be doing it.*
- **Permission card:** So, officially — You have permission *to simplify.* — quieter line under it: Ignore the hype. Focus on what matters.

## 07 · The meter

- **Section tag:** The hype
- **Headline:** If full autonomy worked, *I'd be using it.*
- **Sub:** Nothing to sell. *I just use it, a lot.*
- **Mock (usage card, "a normal week"):**
  - Frontier models, hands on — ~12 hrs / day
  - Claude Max subscription — limit hit · weekly
  - Fully autonomous, unreviewed — 0 · not worth the risk yet

## 08 · Why so strong

- **Section tag:** The hype
- **Headline:** So why so much *hype?*
- **Cards:**
  1. **The GenAI mirage** — It looks great *from afar.* — Mind-blowing demo. Different reality.
  2. **The money** — The hype pays *their bills.* — Hundreds of billions bet. It has to be right.
  3. **The tech is actually good** — Good enough to *believe.* — People are losing jobs. Just not to AI.

## 09 · What is it? (divider)

- **Headline:** So what actually *is* it?
- **Prompt bar:** Generative AI, specifically. *How does it actually work?*

## 10 · Hype curve

- **Section tag:** The reality
- **Headline:** From quiet utility *to mass hype.*
- **Sub:** The newest form of AI generates from scratch. *It hits awe, dopamine and fear at once.*
- **Graphic (curve, 2000 → 2025):** Pre-2015 — ML and OCR, *quietly improving.* · 2015 — Cloud apps *embedding AI, unnoticed.* · 2023 — GenAI. *Text, images, video, code, from scratch.*

## 11 · An LLM

- **Section tag:** The reality
- **Kicker:** ‘AI’, as most people mean it, is GenAI:
- **Headline:** Transformer-based *LLMs.*
- **Sub:** Large language models. · A very advanced autocomplete, *based on pattern recognition.*
- **Mock (phone keyboard, predictive text):**
  - Them: Can you send over the Q1 figures before Friday?
  - Me (typing): Sure, I'll send the|
  - Suggestions: file · **figures** · invoice

## 12 · Probabilistic

- **Section tag:** The reality
- **Headline:** It's probabilistic. *By design.*
- **Pipeline:** "What should I prioritise?" → [ 3923 · 1129 · 358 · … ] → Transformer → a *plausible* next token
- **Popover (under the last chip):** cashflow 34% · the VAT return 22% · a holiday 1.8%
- **Sub:** Confidently, *probably* correct.

## 13 · Why a problem? (beat)

- **Section tag:** The reality
- **Headline:** OK, so why is that a problem, *particularly in accounting?*

## 14 · Two answers

- **Section tag:** The reality
- **Headline:** It’s not correct *every time.*
- **Mock (two Claude runs, same prompt "Add up this quarter's invoices for me."):**
  - Run A: Done. 206 fall in Q1, total *£128,400*. 8 look like next quarter.
  - Run B: Done. 209 fall in Q1, total *£129,150*. 5 look like next quarter.
  - Delta sticker: £750 apart
- **Sub:** It hallucinates by design, *not by mistake.*

## 15 · Not intelligent

- **Section tag:** The reality
- **Headline:** It isn’t intelligent. *In the true sense.*
- **Sub:** Pretend it is, and you’ll trust it too much.
- **Rows:** 🗣️ It doesn’t understand what you’re asking it. · 🪞 It can’t check its own work. · 🎲 It won’t always do what you tell it.

## 16 · Better than a human?

- **Section tag:** The reality
- **Headline:** “But it’s better than *a human.”*
- **Sub:** Maybe. *But it's different.*
- **Rows:**
  1. More unpredictable than a human.
  2. Confident - regardless of whether it's correct.
  3. Incredible at hiding errors.
  4. Not better than a human + GenAI used properly.

## 17 · Just use it (beat)

- **Section tag:** The reality
- **Headline:** Just *use* it.
- **Sub:** Don't take my word for it. *It makes mistakes, all the time.*

## 18 · Added to that (beat)

- **Section tag:** The reality
- **Headline:** And *added* to that…

## 19 · The economics

- **Section tag:** The reality
- **Headline:** Sold below *cost.*
- **Sub:** This isn't a software business. · *What happens when they raise prices and cut the limits?*
- **Cutting:** `Images/19 The economics/openai-losses.png` — caption: Quartz · OpenAI's leaked 2025 financials · a $38.5B loss

## 20 · Environment

- **Section tag:** The reality
- **Headline:** Don't mention the *environment.*
- **Sub:** Or the *societal* impacts.
- **Rows:**
  1. 💧 It haemorrhages *power and water.*
  2. 🔌 It hoards components. *Your electricity, and your electronics, cost more.*
  3. 🏘️ It's disrupting *local communities.*

## 21 · Environment press

- **Section tag:** The reality
- **Headline:** It's not just me *saying it.*
- **Press cards (2×2):**
  1. The Economist — Consumer electronics — prices rocketing for memory (`economist-cut.png`)
  2. Climate Home News — The UN — asks AI firms to reveal emissions, water and energy use (`un-cut.png`)
  3. EESI — Public health — data centres as hotbeds of health risks (`eesi-cut.png`)
  4. Civicus Lens — Communities — taking on data centres over energy and water (`civicus-cut.png`)

## 22 · How to use it (divider)

- **Headline:** So how should we *use* it?
- **Prompt bar:** And yet *I use it all day.*

## 23 · Asbestos era

- **Section tag:** What works *· the pitch*
- **Lead-in:** Well… let's start with *what everyone's selling right now.*
- **Headline:** The ~~agentic~~ *asbestos* era.

## 24 · Hooked

- **Section tag:** What works *· the pitch*
- **Headline:** They want you *hooked.*
- **Sub:** Using agents to perform end to end work creates reliance on *high token usage.*
- **Mock (⬢ AgentSuite Pro · Autopilot on):**
  - Month-end close — 82%
  - Tokens remaining — 41k of 3.0M
  - Button: Top up · £299
  - Fine print: auto-top-up on · pricing subject to change

## 25 · Pre-authorised mistakes

- **Section tag:** What works *· the pitch*
- **Headline:** Pre-authorised *mistakes.*
- **Sub:** Mistakes are guaranteed. · We’re pre-authorising incompetence *before we’ve even started the work.*
- **Mock (permission dialog · "Agent" wants to run your month-end · Full autonomy · no review):**
  - Fetch the invoices
  - Match & reconcile
  - Post the journals
  - Decide it's all correct
  - Button: Approve future mistakes

## 26 · It's toxic

- **Section tag:** What works *· the pitch*
- **Headline:** It's *toxic.*
- **Sub:** It'll need ripping out, at huge cost. *Like asbestos.*

## 27 · Better approach (divider)

- **Headline:** So what's *my* approach?

## 28 · Copilot, never the pilot

- **Section tag:** What works *· my answer*
- **Headline:** A copilot. *Never the pilot.*
- **Visual (two cards):** ✗ The pilot — Claude → runs the close → posts it — Agentic AI autonomously completing end-to-end task completion. · ✓ The copilot — Claude → builds the tool → You sign off — Augments. *We stay in charge.*

## 29 · 01 Chat (beat)

- **Section tag:** What works *· 01 AI chat interfaces*
- **Headline:** *AI Chat Interfaces.*

## 30 · Chat

- **Section tag:** What works *· 01 AI chat interfaces*
- **Headline:** AI Chat Interfaces. *The daily driver.* — verdict: Use daily
- **Sub:** The expert co-pilot you can use *on the fly at any time.*
- **Screenshot:** `Images/30 Chat/claude-chat.png` — caption: claude.ai
- **What I use:** Claude · Gemini · ChatGPT
- **Other options:** Microsoft Copilot · Perplexity · DeepSeek

## 31 · 02 Build (beat)

- **Section tag:** What works *· 02 build*
- **Headline:** *Build.*
- **Sub:** Build tools that run without GenAI. *With AI.*

## 32 · Deterministic

- **Section tag:** What works *· 02 build*
- **Headline:** Build deterministic, *wherever possible.*
- **Sub:** Probabilistic *augments* it. It doesn't replace it.
- **Cards:** ⚙️ Deterministic — Pre-set logic. Predictable. *Same answer every run.* · vs · 🎲 Probabilistic — Pattern-matched. Plausible. *Different answer every run.*

## 33 · Vibe coding

- **Section tag:** What works *· 02 build*
- **Headline:** Vibe coding. *Where it shines.* — verdict: Use to build
- **Use it for:** 🛠️ Internal tools *and prototypes.* · 🖥️ Slides. · 🌐 Simple *websites.* · 🎨 Brand *assets.*
- **Warnings:** 🔒 Security. *Get an engineer if it holds sensitive data.* · 🐇 Rabbit holes. *Don't overbuild.* · 🛒 If an app already does it, *buy it.*

## 34 · Sidgrove Intelligence

- **Section tag:** What works *· 02 build*
- **Kicker:** Built with Claude Code
- **Headline:** Sidgrove *Intelligence.*
- **Line:** The app that sits between *my clients and the work.*
- **Layout:** ink hero slide; kicker, headline and line centred, the practice-overview window below running off the bottom edge
- **Screenshot:** `Images/34 Sidgrove Intelligence/practice-overview.png` — the real practice overview in demo mode — window title: Sidgrove Intelligence · practice overview · demo mode

## 35 · Daily cashflow

- **Section tag:** What works *· 02 build*
- **Headline:** Daily cashflow. *Straight from the bank.*
- **Screenshot:** `Images/35 Daily cashflow/cashflow.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 36 · Bookkeeping

- **Section tag:** What works *· 02 build*
- **Headline:** Bookkeeping workflow *and comms.*
- **Screenshot:** `Images/36 Bookkeeping/bookkeeping.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 37 · Deadlines

- **Section tag:** What works *· 02 build*
- **Headline:** Deadlines *and alerts.*
- **Screenshot:** `Images/37 Deadlines/deadlines.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 38 · Management accounts

- **Section tag:** What works *· 02 build*
- **Headline:** Management accounts. *With notifications.*
- **Screenshot:** `Images/38 Management accounts/management-accounts.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 39 · Payroll reviews

- **Section tag:** What works *· 02 build*
- **Headline:** Payroll reviews *and client sign-off.*
- **Screenshot:** `Images/39 Payroll reviews/payroll.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 40 · VAT reviews

- **Section tag:** What works *· 02 build*
- **Headline:** VAT reviews *and client sign-off.*
- **Screenshot:** `Images/40 VAT reviews/vat.png` — window bar only, no caption (Circle is the demo client; say so out loud)

## 41 · Month end

- **Section tag:** What works *· 02 build*
- **Headline:** Month end. *Schedules to cover all postings.*
- **Grid (4×2, seven thumbnails, eighth cell empty):** Accruals & prepayments (`Images/41 Month end/accruals.png`) · Deferred & accrued revenue (`accrued-income.png`) · Payroll reallocations (`payroll-realloc.png`) · Direct cost reallocations (`direct-costs.png`) · Corporation tax (`Images/41 Month end/corp-tax.png`) · R&D credits (`rd.png`) · Loan notes (`cln.png`)

## 42 · The hub

- **Section tag:** What works *· 02 build*
- **Headline:** Your tools in. *One Slack message out.*
- **Sub:** The GenAI is in how it was built. *Not in what it posts.* *Slack for live comms.*
- **Visual (from sidgrove.com):** Your tools (Xero · Excel · Sheets · Apron · Pleo · Paycircle) → Sidgrove Intelligence (window titled "Circle · month end": synced & checked · month-end review · accruals & prepayments · building your report pack…) → Back to you (#your-finances Slack message · Management Accounts PDF · Ready)

## 43 · Slides

- **Section tag:** What works *· 02 build*
- **Kicker:** Built with Claude Code
- **Headline:** This deck. *No PowerPoint.*
- **Sub:** Every slide here was built in Claude Code. *You're looking at it.*

## 44 · Websites

- **Section tag:** What works *· 02 build*
- **Kicker:** Built with Claude Code
- **Headline:** Simple websites. *Like my own, sidgrove.com.*
- **Screenshot:** `Images/44 Websites/screenshot.png` — caption: sidgrove.com

## 45 · Brand assets

- **Section tag:** What works *· 02 build*
- **Kicker:** Built with Claude Design
- **Headline:** Brand assets. *With Claude Design.*
- **Line:** The Claude Code engine, *tailored for design.*
- **Screenshot:** `Images/45 Brand assets/screenshot.png` — caption: Claude Design

## 46 · 03 Small stuff (beat)

- **Section tag:** What works *· 03 other daily (Gen)AI tools*
- **Headline:** *Other Daily (Gen)AI Tools.*

## 47 · AI note takers

- **Section tag:** What works *· 03 other daily (Gen)AI tools*
- **Headline:** AI *note takers.*
- **Mock (Loom · Acme catch-up · 32 min):** Summary ready · 2 action items — Fees agreed: £1,850 a month from April · Client sends the payroll CSV by Friday
- **What I use:** Loom
- **Other options:** Fireflies · Vinyl · Granola · Fathom

## 48 · Dictation

- **Section tag:** What works *· 03 other daily (Gen)AI tools*
- **Headline:** Dictation. *Talk instead of type.*
- **Sub:** The quickest way to *write a prompt.*
- **Mock (Aqua Voice · dictating):** “Summarise this thread into three bullets and draft a reply”
- **What I use:** Aqua Voice
- **Other options:** Wispr Flow · superwhisper

## 49 · 04 Non-daily (beat)

- **Section tag:** What works *· 04 non-daily*
- **Headline:** Non-daily *use cases.*

## 50 · Spreadsheets

- **Section tag:** What works *· 04 non-daily*
- **Headline:** Spreadsheet add-ons. *Used mindfully.* — verdict: Non-daily
- **Image:** `Images/50 Spreadsheets/claude-for-excel.png` — Anthropic's Claude for Excel product shot, orange background replaced with paper (sidebar on the right)
  - Rows: Stationery Ltd £84.20 20% ✓ · Hosting GmbH £220.00 RC ✓ · Deel Inc £1,240.00 Reverse charge?
- **What I use:** Claude for Excel · ChatGPT for Sheets

## 51 · MCP connections

- **Section tag:** What works *· 04 non-daily*
- **Headline:** MCP *connections.* — verdict: Non-daily
- **Sub:** Model context protocol. *I barely touch these too.*
- **Rows:**
  1. 🔌 A mechanism that allows GenAI chat interfaces and agents to access APIs.
  2. 🎯 Nice for niche ad hoc data pulls where it’s not mission critical.
  3. ⚠️ Pointless for recurring data connections that we need to be correct. MCPs just add risk for no reason.

## 52 · Claude Cowork

- **Section tag:** What works *· 04 non-daily*
- **Headline:** Oh, and *Claude Cowork.* — verdict: Non-daily
- **Sub:** I barely touch it. · Cowork and orchestration layers are a shortcut with shortcomings, IMO. *Like junk food, or Ozempic.*
- **Rows:**
  1. The product that does whole tasks, end to end.
  2. Probably correctly. *Sometimes not.*
  3. Niche use cases *(I think so anyway).*
  4. Lots of *hype.*
- **Other options:** ChatGPT Work · Copilot agents · Orchestration layer products
- **Right column:** one big Claude chat box reading "Grab the year end working papers file and perform the entire year end review."

## 53 · Takeaways

- **Section tag:** Wrapping up
- **Headline:** Key *takeaways.*
- **Cards (icon tiles):** 🫧 It won’t replace us. — Not as claimed, anyway. It’s being oversold. · 🎲 Probabilistic, not intelligent. — Not correct every time. It hallucinates by design. · 🛠️ Copilot, never the pilot. — Never autonomous, end to end. Nothing posted unreviewed. · ✅ Use it every day. — Chat. Build tools with Claude Code. Dictation and note takers.
  1. The work isn't going away. *Someone has to rip the asbestos out.*
  2. The narrative is hype, powered by *massive financial bets.*
  3. Build with it. Use it. *Don't let it run your accounting.*

## 54 · Thank you

- **Headline:** Thank *you.*
- **Contact card:** Dave Sellick — Founder, Sidgrove — LinkedIn /in/davesellick — QR: Scan for the AI walkthrough recordings (`Images/54 Thank you/qr.png`)
