# Sukoon — Mera-Sukoon24

A warm, culturally aware AI companion for clarity, comfort, and practical next steps through difficult moments.

## Project status

Version 0.2.0 adds a buildless browser wellbeing module to the companion specification. It includes a searchable free-resource catalogue, topic-based check-in, calming tools and optional local reflections. No AI backend, native Android app, live hosting or clinical validation is included.

## Free wellbeing tools

- 13 curated entries from WHO, NHS and the Centre for Clinical Interventions (CCI): books, workbooks, worksheets, guidance and available audio.
- Urdu edition signpost for WHO's stress guide; the interface itself is currently English.
- Search and topic/language filters, bookmarks and source attribution.
- Optional check-in routes selected concerns to reading. It is not a validated screening instrument.
- Comfortable breathing timer, sensory grounding and small daily activities.
- Optional mood/reflection history (latest 90 entries; last seven shown), JSON export and deletion.
- Session-only data by default; saving to this browser requires explicit opt-in.
- Offline app shell after a successful online visit and service-worker installation. External books and publisher pages are not cached.

No runtime dependencies, subscriptions, keys, advertisements or paid APIs. No claim that the app measures or increases dopamine. The catalogue contains official free-access resources, not pirated commercial books and not every book available online.

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
| L | LGBTQ+ support with cultural and personal safety |
| M | Spiritual crisis |

## Repository contents

- [Original master prompt](prompts/SUKOON_MASTER_PROMPT.md): the supplied product and conversation brief, preserved as the source specification.
- [Runtime guidance](docs/RUNTIME_GUIDANCE.md): how to apply the brief without false clinical claims, privacy promises, or unverified crisis contacts.
- [Implementation handoff](docs/IMPLEMENTATION_HANDOFF.md): integration steps, review scenarios, and the boundary between exported specifications and future implementation.

## Using the specification

Read the original prompt together with the runtime guidance. For a future AI integration, apply the runtime guidance as governing constraints before the companion brief; do not ship the original prompt on its own as a clinical service.

The original brief includes user-supplied helpline numbers. These are archived reference text, **not a verified resource directory**. Verify current location, service scope, and availability before displaying any crisis contact.

No personal conversation history, credentials, or private case details are included.

