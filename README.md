# Sukoon — Mera-Sukoon24

A free, culturally aware self-help app for small practical steps, with a specification for a future AI companion.

## Project status

Version 0.4.0 adds a buildless browser wellbeing module to the companion specification. It includes a searchable free-resource catalogue, topic-based check-in, calming tools and optional local reflections. No AI backend, native Android app, live hosting or clinical validation is included.

## Free wellbeing tools

- 15 curated entries from WHO, NHS, CCI, Mind and YoungMinds: books, workbooks, worksheets, guidance and available audio.
- Urdu edition signpost for WHO's stress guide; next-step planner in English, Urdu script and Roman Urdu. Other tools remain English.
- Search and topic/language filters, bookmarks and source attribution.
- Body-shaming/racism reflection with affected-person, witness and own-behaviour perspectives; setting-specific guidance, safe boundary/apology scripts, safeguarding and up to four next steps. Reports use transparent rules, not AI or expert individual evaluation.
- Optional check-in routes selected concerns to reading. It is not a validated screening instrument.
- Three clear starting routes, compact expandable behavioural reports, uncertainty and power-imbalance inputs, and improved result focus.
- Comfortable breathing timer, sensory grounding and small daily activities.
- Optional mood/reflection history (latest 90 entries, paginated display), hidden-by-default reflection text, individual deletion, validated JSON restore and export.
- Session-only data by default; saving to this browser requires explicit opt-in.
- Offline app shell after a successful online visit and service-worker installation. External books and publisher pages are not cached.

No runtime dependencies, subscriptions, keys, advertisements or paid APIs. No claim that the app measures or increases dopamine. The catalogue contains official free-access resources, not pirated commercial books and not every book available online.

## Audit and release status

See [architecture and behavioural design audit](docs/AUDIT.md) for findings, evidence, ratings and remaining gaps. Version 0.4.0 passes 34 automated tests, including simulated DOM event tests. These are not real-browser, device, accessibility or clinical certification.

## Run and check

Serve this directory over localhost, for example:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. ES modules require HTTP serving; opening `index.html` directly as a file is unsupported.

```sh
npm test
npm run check
```

Node 22 or newer is recommended for checks; no installation step is required.

For free GitHub Pages hosting, the repository owner can select **Settings → Pages → Deploy from a branch → main → /(root)**. This change does not enable hosting automatically and no live URL has been verified. Service workers need HTTPS (or localhost). Device/browser installation support varies; no APK is produced.

See [free resource policy and sources](docs/FREE_RESOURCES.md) and [verification notes](docs/VERIFICATION.md).

## Companion principles

- Mirror UK English, Pakistani Urdu, or Roman Urdu, including the user's script.
- Offer religious comfort only when the user signals that it is welcome.
- Give direct relationship assessments when asked, explicitly limited to what the user has shared.
- Support South Asian communities globally, the UK diaspora, and a universal fallback.
- Offer a small number of realistic next steps, with safety taking priority when needed.
- Be transparent that Sukoon is an AI companion, not a clinician or emergency service.

## Thirteen support domains

| Module | Domain |
| --- | --- |
| A | Emotional and psychological support |
| B | Social and relational difficulties |
| C | Crisis and disaster support |
| D | Financial stress |
| E | Child behaviour and parenting |
| F | Relationship counselling and honest assessments |
| G | Addiction and recovery |
| H | Elder care and caregiver support |
| I | Career crisis and life transitions |
| J | Grief after losing a child |
| K | Infertility and fertility struggles |
| L | Body shaming, racism and behavioural reflection |
| M | Spiritual crisis |

## Repository contents

- [Current master prompt](prompts/SUKOON_MASTER_PROMPT.md): the product and conversation brief, including the updated module L.
- [Runtime guidance](docs/RUNTIME_GUIDANCE.md): how to apply the brief without false clinical claims, privacy promises, or unverified crisis contacts.
- [Implementation handoff](docs/IMPLEMENTATION_HANDOFF.md): integration steps, review scenarios, and the boundary between exported specifications and future implementation.

## Using the specification

Read the original prompt together with the runtime guidance. For a future AI integration, apply the runtime guidance as governing constraints before the companion brief; do not ship the original prompt on its own as a clinical service.

The current prompt requires verified, location-aware crisis resources instead of hardcoded contact numbers. No resource lookup or emergency-dispatch integration exists in the browser tools.

No personal conversation history, credentials, or private case details are included.

