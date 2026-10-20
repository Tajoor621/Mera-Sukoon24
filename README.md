# Mera-Sukoon24 — Sukoon

A free, culturally aware self-help app for small practical steps, with a specification for a future AI companion.

## Project status

Version 0.6.0 adds a buildless browser wellbeing module to the companion specification. It includes a searchable free-resource catalogue, topic-based check-in, calming tools and optional local reflections. No AI backend, native Android app or clinical validation is included. GitHub Pages is the only deployment target; GitHub deployment has succeeded; real-device verification remains pending.

## Complete guidance inside the app

- A dedicated thirteen-domain consultation screen provides complete starting explanations, four practical steps, adaptable scripts and reflection questions.
- Advice and voluntary mediation outlines are displayed in-app; safety/coercion/minor flags restrict unsuitable joint discussions.
- Check-in and planner results now include substantial built-in guidance.
- Library cards open Sukoon guidance first. Publisher originals remain optional secondary links.
- The original pre-written guidance is available offline after the initial successful visit, with no paid API, AI backend or server storage of choices.

Detailed new responses are English, not yet independently clinically reviewed, and cannot guarantee accuracy for every personal situation. [Scope, privacy and sources](docs/IN_APP_GUIDANCE.md).

## Brand assets

The owner-supplied Mera-Sukoon24 artwork is integrated into app-header and welcome-page branding, favicons, PWA icons, a maskable icon and the Apple home-screen icon. The unmodified source is retained at `branding/mera-sukoon24-original.png`. [Asset details](docs/BRANDING.md).

## v0.5.0 improvements and release gates

- Optional skippable tour, native collapsible secondary tools, open-all control and direct anchor navigation.
- Critical navigation, form labels/options, safety messages and result summaries in English, Urdu and Roman Urdu; session-only language preference. Detailed content remains labelled as English.
- Named result regions, short status announcements, visible focus, stronger control borders, forced-colour styling and reflow improvements.
- Atomic shell update notices, cache-health checks, failed-install cleanup and readable incomplete-cache/startup recovery.
- Test-gated GitHub Pages artifact packaging with no runtime dependencies.

**Pre-production:** physical device tests, TalkBack/VoiceOver tests, independent native-speaker/community review and qualified clinical review are pending. No screenshots, reviewer sign-offs, signed APK or WCAG certification are claimed. The thirteen-domain master prompt and runtime guidance are unchanged in this iteration. No AI chat backend was added.

See [device evidence](docs/DEVICE_TESTS.md), [independent review handoff](docs/INDEPENDENT_REVIEW.md), [accessibility record](docs/ACCESSIBILITY.md) and [deployment](docs/DEPLOYMENT.md).

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

See [architecture and behavioural design audit](docs/AUDIT.md) for findings, evidence, ratings and remaining gaps. Version 0.5.0 passes 52 automated tests, including simulated DOM event tests. These are not real-browser, device, accessibility or clinical certification.

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

For free GitHub Pages hosting, the repository owner can select **Settings → Pages → GitHub Actions**. The release includes a test-gated Pages workflow. GitHub verified successful deployment of v0.5.0; see deployment evidence in `docs/DEPLOYMENT.md`. Select Actions as the Pages source to avoid the observed duplicate legacy branch pipeline. Actual device installation remains unverified. Service workers need HTTPS (or localhost). Device/browser installation support varies; no APK is produced.

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


## How to verify on your own device

Use the successful GitHub Pages deployment URL. Install from the available Chrome menu on Android or Safari Share → Add to Home Screen on iPhone. Open online until offline-ready status appears, then try every tool in airplane mode with synthetic notes. Publisher books still require internet. For a waiting update, finish/export work, close all Sukoon tabs and reopen. See DEVICE_TESTS.md for exact evidence requirements.
