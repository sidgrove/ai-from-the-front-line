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

- **Section tag:** The Narrative
- **Headline:** Tick *Tock.*
- **Sub:** ...we're doomed, right?
- **Mock (redundancy pop-up):**
  - Title: Accountant Detected.
  - Rows: Data entry — AUTOMATABLE · Reconciliation — AUTOMATABLE · Tax preparation — AUTOMATABLE
  - Button: I Accept My Redundancy

## 03 · The headlines

- **Section tag:** The Narrative
- **Headline:** The *headlines.*
- **Sub:** The doomsaying, *in print.*
- **Press cards:**
  1. The Telegraph — Tom Blomfield — Monzo founder (`Blomfield.png`)
  2. Fortune — Mustafa Suleyman — CEO, Microsoft AI (`Suleyman.png`)
  3. TheStreet — The Big Four — cutting benefits and hiring (`big four.png`)

## 04 · Why so strong

- **Section tag:** The Narrative
- **Headline:** So why so much *hype?*
- **Cards:**
  1. **The GenAI mirage** — It looks great *from afar.* — Mind-blowing demo. Different reality.
  2. **The money** — The hype pays *their bills.* — Hundreds of billions bet. It has to be right.
  3. **The tech is actually good** — Good enough to *believe.* — People are losing jobs. Just not to AI. (AI" / "the accounts say — over-hired · rates · margins")

## 05 · Why listen

- **Section tag:** Side note
- **Headline:** Why listen to *me?*
- **Claims:**
  1. I try *all of it.*
  2. If it worked, *I'd be doing it.*
- **Permission card:** So, officially — You have permission to simplify. *Ignore the hype. Focus on what matters.*

## 06 · The meter

- **Section tag:** The Narrative
- **Headline:** If full autonomy worked, *I'd be using it.*
- **Sub:** Nothing to sell. *I just use it, a lot.*
- **Mock (usage card, "a normal week"):**
  - Frontier models, hands on — ~12 hrs / day
  - Claude Max subscription — limit hit · weekly
  - Fully autonomous, unreviewed — 0 · not worth the risk yet

## 07 · What is it? (divider)

- **Headline:** So what actually *is* it?
- **Prompt bar:** Generative AI, specifically. *How does it actually work?*

## 08 · An LLM

- **Section tag:** The reality
- **Headline:** Transformer-based *LLMs.*
- **Sub:** A very advanced autocomplete. *Prediction, not understanding.*
- **Mock (phone keyboard, predictive text):**
  - Them: Can you send over the Q1 figures before Friday?
  - Me (typing): Sure, I'll send the|
  - Suggestions: file · **figures** · invoice

## 09 · Probabilistic

- **Section tag:** The reality
- **Headline:** It's probabilistic. *By design.*
- **Pipeline:** "What should I prioritise?" → [ 3923 · 1129 · 358 · … ] → Transformer → a *plausible* next token
- **Popover:** Candidates / p(next): cashflow 34% · the VAT return 22% · a holiday 1.8% — Nothing is checked.
- **Sub:** Confidently, *probably* correct.

## 10 · Why a problem? (beat)

- **Section tag:** The reality
- **Headline:** OK, so why is that a problem, *particularly in accounting?*

## 11 · Two answers

- **Section tag:** The reality
- **Headline:** Same question. *Two answers.*
- **Mock (two Claude runs, same prompt "Add up this quarter's invoices for me."):**
  - Run A: Done. 206 fall in Q1, total *£128,400*. 8 look like next quarter.
  - Run B: Done. 209 fall in Q1, total *£129,150*. 5 look like next quarter.
  - Delta sticker: £750 apart
- **Sub:** It can't be relied on for *consistent, high-integrity output.*

## 12 · Just use it (beat)

- **Section tag:** The reality
- **Headline:** Just *use* it.
- **Sub:** It makes mistakes, *all the time.*

## 13 · Not intelligent

- **Section tag:** The reality
- **Headline:** It isn't *intelligent.*
- **Sub:** Pretend it is, and you'll trust it *too much.*
- **Rows:**
  1. It won't always do what you tell it. *That's the maths.*
  2. It can't check its own work. *It'll say it did.*
  3. A probably-correct review of a probably-correct answer. *Someone has to look.*
- **Sign-off:** Hold that thought. *Act three.*

## 14 · Better than a human?

- **Section tag:** The reality
- **Headline:** "But it's better than *a human."*
- **Sub:** Maybe. *But it's different.*
- **Rows:**
  1. Unpredictable, *unlike a person.*
  2. Confident *either way.*
  3. Hides its errors *well.*
  4. Replacing tools *that already work.*
  5. Not better than a human *using it properly.*

## 15 · Added to that (beat)

- **Section tag:** The reality
- **Headline:** And *added* to that…

## 16 · The economics

- **Section tag:** The reality
- **Headline:** Sold below *cost.*
- **Sub:** Heavy seats are subsidised. They don't raise the price. *They shrink the limit.*
- **Mock (receipt · GenAI Ltd · a heavy seat):**
  - What you pay — flat fee
  - What you cost them — more than that
  - Who covers the gap — investors, for now
  - How they get it back — shrink the limit

## 17 · The environment

- **Section tag:** The reality
- **Headline:** And it's not exactly *green.*
- **Stats:**
  1. *×2* — Data-centre electricity by 2030. *AI is the main reason.*
  2. *+37%* — Google's electricity use, in one year. *"Faster than the grid is decarbonizing."*

## 18 · How to use it (divider)

- **Headline:** So how should we *use* it?
- **Prompt bar:** It's brilliant. How do I use it *without handing it the keys?*

## 19 · Asbestos era

- **Section tag:** How to use it *· the pitch*
- **Lead-in:** Well… let's start with *what everyone's selling right now.*
- **Headline:** The ~~agentic~~ *asbestos* era.
- **Sub:** Embedded everywhere today. *Years ripping it out.*

## 20 · Hooked

- **Section tag:** How to use it *· the pitch*
- **Headline:** They want you *hooked.*
- **Sub:** The flat plan gets you in. *The agent bills you by the token.*
- **Mock (⬢ AgentSuite Pro · Autopilot on):**
  - Month-end close — 82%
  - Tokens remaining — 41k of 3.0M
  - Button: Top up · £299
  - Fine print: auto-top-up on · pricing subject to change

## 21 · Pre-authorised mistakes

- **Section tag:** How to use it *· the pitch*
- **Headline:** Pre-authorised *mistakes.*
- **Sub:** It improvises the steps, *then marks its own homework.*
- **Mock (permission dialog · "Agent" wants to run your month-end · Full autonomy · no review):**
  - Fetch the invoices
  - Match & reconcile
  - Post the journals
  - Decide it's all correct
  - Button: Approve future mistakes

## 22 · It's toxic

- **Section tag:** How to use it *· the pitch*
- **Headline:** It's *toxic.*
- **Sub:** It'll need ripping out, at huge cost. *Like asbestos.*

## 23 · Better approach (divider)

- **Headline:** So what's a *better* approach?
- **Prompt bar:** In my opinion, *anyway.*

## 24 · Copilot, never the pilot

- **Section tag:** How to use it *· my answer*
- **Headline:** A copilot. *Never the pilot.*
- **Sub:** Don't put it in the process. *Have it write the tools that run the process.*
- **Visual (two cards):** ✗ The pilot — Claude → runs the close → posts it — Autonomous. *Marks its own work.* · ✓ The copilot — Claude → builds the tool → You sign off — Augments. *You stay in charge.*

## 25 · How I use it (divider)

- **Headline:** Here's how I *use* GenAI.
- **Prompt bar:** Daily drivers first. *Then the ones I use with caution.*

## 26 · Chat

- **Section tag:** How I use it *· daily driver*
- **Headline:** Chat. *The daily driver.* — verdict: Use daily
- **Mock (claude.ai · new chat):**
  - User: How do I explain this VAT position to a nervous client?
  - AI: Plainly: nothing is owed today. Three ways to say it, **calmest first…**
  - Input: Ask anything… · One keypress
- **The rule:** Talk to it like a colleague. *Check it like a junior.*
- **What I use:** Claude · Gemini
- **Also out there:** ChatGPT · Microsoft Copilot · Perplexity · Mistral · DeepSeek

## 27 · Vibe coding

- **Section tag:** How I use it *· daily driver*
- **Headline:** Vibe coding. *Where it shines.* — verdict: Use to build
- **Best uses:** Internal tools and *prototype apps.* · Slides, *like this deck.* · Simple websites, *like sidgrove.com.* · Brand assets, *with Claude Design.*
- **Words of caution:** Nothing ships until *you've read it.* · Test it on known numbers. *Once.* · Keep it off *live client data.* · It's still an agent. *Review, then trust.*

## 28 · Claude Code (divider)

- **Headline:** Spotlight: *Claude Code.*
- **Prompt bar:** What I've *actually built* with it.

## 29 · Sidgrove Intelligence

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Sidgrove *Intelligence.*
- **Line:** The app that sits between my clients and the work. *Built with Claude Code.*
- **Mock (app shell, Sidgrove Intelligence design tokens):** sidebar nav (Bookkeeping · Cashflow · Deadlines · **Month end** · Management accounts · Payroll · VAT) · eyebrow "Client · Acme Ltd" · title Month *end* · KPIs: Accruals 12 posted · Prepayments 8 posted · Deferred revenue £42,300 review · rows: Payroll postings (Posted) · Direct cost reallocations (Posted) · Corporation tax accrual (Needs review) · Loan postings (Scheduled)

## 30 · What it does

- **Section tag:** Claude Code *· spotlight*
- **Headline:** What it *does.*
- **Rows:**
  1. Daily cashflow, *driven by API.*
  2. Bookkeeping workflow *and comms.*
  3. Deadline management and alerts, *integrated with the government platforms.*
  4. Management accounts *hosting and notifications.*
  5. Payroll reviews *and client review workflows.*
  6. VAT reviews *and client review workflows.*

## 31 · Month end

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Month-end schedules *and postings.*
- **Rows:**
  1. Accruals *and prepayments.*
  2. Deferred *and accrued revenue.*
  3. Payroll postings *and reallocations.*
  4. Direct cost *reallocations.*
  5. Corporation tax *and R&D credit accruals.*
  6. Loan *postings.*

## 32 · The hub

- **Section tag:** Claude Code *· spotlight*
- **Headline:** And *much more.*
- **Sub:** The central app between my clients and the work I do.
- **Visual:** Clients ⇄ Sidgrove Intelligence ⇄ Me — alongside *Slack* for live comms

## 33 · In practice

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Sidgrove Intelligence, *in practice.*
- **Line:** One of the live screens. *Every line of it written in Claude Code.*
- **Screenshot:** `Images/33 In practice/screenshot.png` — caption: Sidgrove Intelligence · live

## 34 · Slides

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Slides. *Like this deck.*
- **Line:** Every slide you are looking at *was built in Claude Code.*
- **Screenshot:** `Images/34 Slides/screenshot.png` — caption: Claude Code · building this deck

## 35 · Websites

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Simple websites. *Like sidgrove.com.*
- **Line:** Described, built, deployed. *No agency, no template.*
- **Screenshot:** `Images/35 Websites/screenshot.png` — caption: sidgrove.com · built with Claude Code

## 36 · Brand assets

- **Section tag:** Claude Code *· spotlight*
- **Headline:** Brand assets. *With Claude Design.*
- **Line:** The Claude Code engine, *tailored for design.*
- **Screenshot:** `Images/36 Brand assets/screenshot.png` — caption: Claude Design · brand assets

## 37 · AI note takers

- **Section tag:** How I use it *· daily driver*
- **Headline:** AI *note takers.* — verdict: Small wins
- **Mock (meeting notes):** Fees agreed: £1,850 a month from April · Client sends the payroll CSV by Friday
- **What I use:** Fireflies
- **Also out there:** Loom AI · Granola · Otter · Fathom · Teams recap

## 38 · Other tools

- **Section tag:** How I use it *· daily driver*
- **Headline:** Other GenAI tools *I use.*
- **Rows:**
  1. Dictation. *Wispr Flow.*
  2. Creating slides, like these. *Claude Code.*
  3. Branding and brand assets. *Claude Design.*

## 39 · With caution (beat)

- **Section tag:** How I use it *· with caution*
- **Headline:** Sparingly, *with caution.*

## 40 · Claude Cowork

- **Section tag:** How I use it *· with caution*
- **Headline:** Claude Cowork. *With caution.* — verdict: With caution
- **Sub:** I barely touch it.
- **Rows:**
  1. The product that does whole tasks, *end to end.*
  2. *Niche* use cases.
  3. Lots of *hype.*

## 41 · Spreadsheets

- **Section tag:** How I use it *· with caution*
- **Headline:** In your spreadsheets. *Check everything.* — verdict: Sparingly
- **Mock (creditors.xlsx · Claude for Excel):**
  - Rows: Stationery Ltd £84.20 20% ✓ · Hosting GmbH £220.00 RC ✓ · Deel Inc £1,240.00 20% · reverse charge?
- **The stat:** Best system tested: *12%* at fixing errors in real workbooks.
- **What I use:** Claude for Excel · ChatGPT for Sheets · Xero + Claude
- **Also out there:** Xero JAX · Gemini in Sheets · Intuit Assist · Sage Copilot

## 42 · Do and don't

- **Section tag:** How to use it *· my answer*
- **Headline:** Do and *don't.*
- **Do — Use it *every day.*:** Chat, for *thinking.* · Talk to it. *Dictate.* · Build tools with *Claude Code.* · *Check* its work.
- **Don't — Hand it *the keys.*:** Let it *run the close.* · Post anything *unreviewed.* · Client data on a *personal plan.* · Buy the *agent pitch.*

## 43 · Takeaways

- **Section tag:** Wrapping up
- **Headline:** Key *takeaways.*
- **Rows:**
  1. 😌 The work isn't going away. *Someone has to rip the asbestos out.*
  2. 💸 The narrative is hype, powered by *massive financial bets.*
  3. 🏗️ Build with it. Use it. *Don't let it run your accounting.*
- **Sign-off:** Or at least, that's what I think.

## 44 · Thank you

- **Headline:** Thank *you.*
- **Line:** Questions welcome, now or after.
- **Contact card:** Dave Sellick — Founder, Sidgrove — LinkedIn /in/davesellick
