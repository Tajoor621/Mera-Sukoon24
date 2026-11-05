# Mera-Sukoon24 — Sukoon

**Live app:** [tajoor621.github.io/Mera-Sukoon24](https://tajoor621.github.io/Mera-Sukoon24/)

A free, quiet place for reading, small wellbeing steps and calming tools, in English, Urdu and Roman Urdu. Sukoon means a settled, peaceful pause. The app is a self-help companion. It is not a clinician, not a diagnosis, and not an emergency service.

Version 0.8.0 is a buildless browser app. There is no account, no paid API, no advertising and no AI chat. GitHub Pages is the only deployment target. Real-device and independent language review remain pending; nothing here is a clinical certification.

## What you can do

- **In-app consultation.** Thirteen support domains, with a complete starting explanation, practical steps, adaptable scripts and a reflection question. Optional life contexts cover joint-family living, marriage consent, exams, remittances, diaspora belonging, heat, disasters and other situations, without assuming anyone’s identity. Safety, coercion and minor flags keep unsuitable joint discussions off the page.
- **A next step.** A short plan in English, Urdu or Roman Urdu. Faith-based comfort appears only when you ask for it. An urgent-safety choice replaces the plan with human-support guidance.
- **Check-in.** A topic reflection for stress, worry, low mood, sleep, motivation, self-kindness or connection. It is not a screening test.
- **Respect and dignity.** A structured reflection on body shaming, racism and colourism, from the person affected, a witness, or your own behaviour, including uncertainty and power imbalance.
- **Reading shelf.** Search, topic and language filters, bookmarks, and Sukoon’s own guidance first. Publisher pages stay optional and are not stored offline.
- **Calm.** A one-minute comfortable breathing timer, a sensory grounding sequence, and a three-minute reading pause. Stop any of them whenever you wish. Nothing is scored.
- **Small activities.** Movement, connection, learning, kindness, notice and rest. No streaks, supplements or “dopamine” claims.
- **Reflection.** An optional mood note and up to 90 entries. Notes stay hidden until you show them. You can delete one entry, export, or restore a validated JSON file.
- **A line for today.** One original sentence in the interface language you choose. It changes with the local date and is not advice about your situation.
- **Comfort.** Text size (comfortable, larger, largest) and appearance (match this device, paper, or dusk). These stay in this browser tab for the visit. They are not written into the journal.
- **Support path.** If you are in immediate danger, the app asks you to seek local emergency help or someone trusted nearby. Sukoon cannot monitor you or contact services for you.

The supplied Mera-Sukoon24 artwork is the welcome image, favicon and home-screen icon. Its original lettering is unchanged. That lettering is branding; the app does not claim clinical credentials or guaranteed relief. Details are in [docs/BRANDING.md](docs/BRANDING.md).

## Languages

The critical interface — navigation, hero, start paths, form labels, safety text, the daily line, the reading pause and result summaries — can be shown in English, Urdu or Roman Urdu. Detailed consultation, behaviour and reading texts remain English and are labelled as such. Translations are drafted and have not had an independent native-speaker review.

Urdu uses a right-to-left direction on the translated text and a Nastaliq-capable font stack when the device has one. The page does not flip the English guidance into a right-to-left layout.

## Privacy

Saving is off until you opt in. With it off, bookmarks, activities and reflections live in the tab and disappear on reload. With it on, they stay in this browser only. Sukoon does not encrypt that storage. Consultation choices, plans and comfort settings are not part of the export. Publisher links leave this site and follow that publisher’s rules. The hosting provider still sees ordinary page requests.

## Run and check

ES modules need a local server. Opening `index.html` as a file is unsupported.

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

```sh
npm test
npm run check
npm run package:site
```

Node 22 or newer is recommended. There is no install step and there are no runtime dependencies. `npm test` is an automated check of the tools, interface events, offline shell and comfort settings. It is not a browser, device, screen-reader or clinical certification.

## GitHub Pages

In **Settings → Pages**, choose **GitHub Actions** as the source. The workflow runs the tests, packages an allowlist into `dist/` and deploys that directory. `dist/` is not committed. Notes, tests and credentials are not in the package.

Service workers need HTTPS or localhost. After a successful online visit the app shell can open offline; publisher books still need the internet. To take an update, finish or export unsaved work, close every Sukoon tab and reopen. The app does not force an update while you are writing.

A project site’s `robots.txt` is published with the app. Crawlers that only read `https://tajoor621.github.io/robots.txt` will not see this file.

Earlier deployment evidence is in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Device checks you can run yourself are in [docs/DEVICE_TESTS.md](docs/DEVICE_TESTS.md).

## What this version adds

- A clearer reading layout, sticky section navigation on wider screens, a visible support link, and print styles for a plan or a page of guidance.
- Session-only text size and a paper or dusk appearance, including a match-this-device setting. Dusk text, links, buttons, focus and field borders are checked against contrast thresholds.
- A daily line and a three-minute reading pause, with the same stop-at-any-time pattern as the breathing timer.
- Hero, start paths, consultation link and footer summary in all three interface languages.
- Landmarks, a named navigation region, the current section on in-page links, and a footer outside the main content.
- Canonical URL, social metadata, a sitemap and a robots file. The content security policy still blocks inline scripts and remote sources, so there is no inline structured-data script.

## What Sukoon will not do

- It will not diagnose, treat, or tell you that you are safe.
- It will not pretend to be an emergency service, a helpline, or a clinician.
- It will not offer joint mediation when control, retaliation, a minor, or immediate danger makes that unsuitable.
- It will not store your words on a Sukoon server. There is no server for that.
- It will not claim that a breathing timer, a book or a small plan will fix a crisis.

If distress continues, gets worse, or gets in the way of daily life, a qualified mental health professional is the right next person. Self-help can sit beside that support. It does not replace it.

## Companion specification

The repository also holds the brief for a future AI companion. The running app does not include that companion.

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

- [Master prompt](prompts/SUKOON_MASTER_PROMPT.md)
- [Runtime guidance](docs/RUNTIME_GUIDANCE.md) — apply this before the brief. Do not ship the prompt alone as a clinical service.
- [Implementation handoff](docs/IMPLEMENTATION_HANDOFF.md)
- [In-app guidance scope](docs/IN_APP_GUIDANCE.md)
- [Optional contexts](docs/SOUTH_ASIAN_CONTEXTS.md)
- [Free resources and their limits](docs/FREE_RESOURCES.md)
- [Accessibility record](docs/ACCESSIBILITY.md)
- [Architecture audit](docs/AUDIT.md)
- [Verification notes](docs/VERIFICATION.md)

The prompt asks for verified, location-aware crisis resources instead of hardcoded numbers. This app does not look up local services and does not dispatch help.

No personal conversation history, credentials or private case details are in the repository.

## Repository map

| Path | Role |
| --- | --- |
| `index.html`, `styles.css`, `manifest.webmanifest` | The Pages app, its appearance and install metadata |
| `app.mjs` and the neighbouring modules | Tools, language, navigation, plans, consultations and comfort |
| `sw.js` | Versioned offline shell. It does not update itself mid-session |
| `tests/` | Automated checks |
| `docs/` | Scope, review limits and earlier release records |
| `branding/`, `icons/` | Owner-supplied artwork and the icons made from it |
| `prompts/` | Future companion brief |

Earlier release notes in `docs/` describe the versions they were written for. They are records, not a claim that this version has passed a new clinical or device review.
