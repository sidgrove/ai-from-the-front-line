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
- **Flow:** Claude (the copilot) → → Fetch invoices (code) → Match (code) → Report (code) → You (exceptions, sign-off)

## 25 · Recommend

- **Section tag:** How to use it *· my answer*
- **Headline:** What I *actually* recommend.
- **Column 1 — 👋 For most people — Start in *chat.***
  - Use claude.ai for *thinking.*
  - Try Claude for Excel. *Check its work.*
  - Talk to it. *Dictation beats typing.*
  - Put it *one keypress* away.
- **Column 2 — 🏗️ If you build, or pay someone who does — Build with *Code.***
  - Build with Claude Code, *daily.*
  - *Deterministic* core. GenAI at the edges.
  - A *human* signs off on anything that posts.

## 26 · Five ways

- **Section tag:** How to use it *· five ways*
- **Headline:** Five ways to *use it.*
- **Cards (verdict pill — line):**
  1. Chat. — Use daily
  2. In your apps. — Sparingly
  3. Agents. — Last resort
  4. Vibe coding. — Use to build
  5. Note takers. — Small wins

## 27 · Chat

- **Section tag:** How to use it *· five ways*
- **Headline:** Chat. *The daily driver.* — verdict: Use daily
- **Mock (claude.ai · new chat):**
  - User: How do I explain this VAT position to a nervous client?
  - AI: Plainly: nothing is owed today. Three ways to say it, **calmest first…**
  - Input: Ask anything… · One keypress
- **The rule:** Talk to it like a colleague. *Check it like a junior.*
- **What I use:** Claude · Gemini
- **Also out there:** ChatGPT · Microsoft Copilot · Perplexity · Mistral · DeepSeek

## 28 · In apps

- **Section tag:** How to use it *· five ways*
- **Headline:** In your apps. *Check everything.* — verdict: Sparingly
- **Mock (creditors.xlsx · Claude for Excel):**
  - Rows: Stationery Ltd £84.20 20% ✓ · Hosting GmbH £220.00 RC ✓ · Deel Inc £1,240.00 20% · reverse charge?
- **The stat:** Best system tested: *12%* at fixing errors in real workbooks.
- **What I use:** Claude for Excel · Microsoft 365 Copilot · Xero + Claude
- **Also out there:** Xero JAX · Gemini in Sheets · Intuit Assist · Sage Copilot · Notion AI

## 29 · Agents

- **Section tag:** How to use it *· five ways*
- **Headline:** Agents. *The last resort.* — verdict: Last resort
- **Mock (acme · month-end agent · autopilot on):**
  - ✓ Pulled 214 invoices
  - ✓ Matched 196 of them
  - ⚠ Matched 18 differently to last run
  - ✗ Posted the same accrual twice
  - Halt: Paused. Needs a human. · Step 4 of 9
- **The stat:** Given a whole job to do unwatched, the best agents *still fail most of the time.*
- **What I use:** Claude Cowork
- **Also out there:** ChatGPT Work · Gemini Spark · Copilot agents · Basis
- **Note:** Reviewing an agent means redoing the job. *Reviewing exceptions doesn't.*

## 30 · Vibe coding

- **Section tag:** How to use it *· five ways*
- **Headline:** Vibe coding. *Where it shines.* — verdict: Use to build
- **Mock (terminal · recon-tool · built with Claude Code):**
  - ❯ claude "build me a reconciliation tool"
  - ✓ Built.
  - ❯ recon-tool --client acme
  - ✓ 214 matched · same answer every run
  - ⚠ 3 exceptions flagged · over to you
- **The point:** Code isn't probabilistic. *Test once, stays tested.*
- **What I use:** Claude Code · Codex in ChatGPT
- **Also out there:** Cursor · Lovable · Replit

## 31 · AI note takers

- **Section tag:** How to use it *· five ways*
- **Headline:** AI *note takers.* — verdict: Small wins
- **Mock (meeting notes):** Fees agreed: £1,850 a month from April · Client sends the payroll CSV by Friday
- **What I use:** Fireflies
- **Also out there:** Loom AI · Granola · Otter · Fathom · Teams recap

## 32 · Other tools

- **Section tag:** How to use it *· five ways*
- **Headline:** Other GenAI tools *I use.*
- **Rows:**
  1. Dictation. *Wispr Flow.*
  2. Creating slides, like these. *Claude Code.*
  3. Branding and brand assets. *Claude Design.*

## 33 · Takeaways

- **Section tag:** Wrapping up
- **Headline:** Key *takeaways.*
- **Rows:**
  1. 😌 The work isn't going away. *Someone has to rip the asbestos out.*
  2. 💸 The narrative is hype, powered by *massive financial bets.*
  3. 🏗️ Build with it. Use it. *Don't let it run your accounting.*
- **Sign-off:** Or at least, that's what I think.

## 34 · Thank you

- **Headline:** Thank *you.*
- **Line:** Questions welcome, now or after.
- **Contact card:** Dave Sellick — Founder, Sidgrove — LinkedIn /in/davesellick
