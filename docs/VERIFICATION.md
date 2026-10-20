# Verification — v0.5.0

## Completed

- `npm test`: 52 automated tests passed (including the original 34).
- `npm run check`: syntax checks passed for all runtime JavaScript modules and the service worker.
- Tests cover resource metadata, topic/language/bookmark filters, urgent routing, professional-support prompts, storage failures, data limits, state round trips, source references, DOM binding IDs and offline asset completeness.
- Official landing pages reviewed for the curated resources; see FREE_RESOURCES.md for retrieval limits.

## Limits

No browser automation, real iPhone/Android testing, visual screenshot review, real-device accessibility audit or clinical validation was performed. Service worker installation, offline reload, keyboard operation, export/download, delete confirmation and mobile layout require browser/device checks before release. Unit checks do not establish clinical effectiveness.

## Device review checklist

1. Serve on HTTPS or localhost. Check library filters and publisher links, including the WHO Urdu language option.
2. Start/stop the breathing timer; background the page and confirm it pauses. Check reduced-motion preferences.
3. Use grounding next/reset through every step. No step should require unsafe sensory contact.
4. Add a reflection with saving off, reload and confirm it disappears. Enable saving, reload and confirm it returns. Switch saving off and confirm browser storage is removed.
5. Export data and inspect the JSON; confirm it is local and contains no hidden fields. Clear data and confirm both stored and displayed state reset.
6. After a successful initial visit and service-worker activation, disconnect and reload. App tools should remain usable; publisher links require connectivity.
7. Select urgent help in the check-in: no reading cards should be recommended; the human-support section should receive focus.
8. Check small screens, zoom, keyboard focus, readable contrast and screen-reader labels. Test installation per browser; PNG icons (192/512) and an Apple touch icon are included; installation still requires real-device checks.

## Body-shaming and racism review

Automated tests cover all 45 topic/perspective/setting combinations, threat overrides, distinct victim/witness/accountability guidance, recurrence, minors, eating-related concerns, context-specific guidance, source references, invalid input fallback and retention of thirteen master-prompt modules.

Before release, manually check each form selection, report rendering/reset, safety-section focus, Clear all data clearing the form/report, and offline availability of behaviour.mjs. The reports have not been reviewed by a clinician and no full conversational AI assessment exists.

## v0.4.0 audit improvements

- Planner tests cover all five topics across English, Urdu and Roman Urdu, opt-in faith content, urgent overrides and invalid input fallback.
- Storage tests cover unreadable data without writes, consent restoration, removal failures, backup structure/limits and round trips.
- Simulated DOM tests execute real app event handlers for journal saving, hidden notes, individual deletion, restore, duplicate bookmark states, failed deletion, Urdu RTL output, uncertainty, urgent-result focus and cross-tab erasure.
- Cache-policy checks confirm that a release does not fetch replacement modules individually; icon assets and all shell files exist.
- Syntax checks cover planner.mjs and session.mjs as well as existing modules.

The simulated DOM implements a limited set of browser APIs. It does not prove layout, native form semantics, screen-reader output, service-worker lifecycle, download behaviour or Safari/Android installation. No browser was installed or launched for these checks.

## v0.5.0 evidence update

The original 34 tests remain present. New tests cover critical translations and direction attributes, session preference failure handling, native disclosure/navigation behaviour, optional tour and return focus, semantic result regions, specified contrast ratios, failed SW installation, partial caches, storage failure recovery, external-request exclusion and privacy-minimal cache-health messages. Simulated UI checks also exercise global language switching, tour controls and unavailable update checks.

`npm run check` now checks every project JavaScript file, including new modules and tests. `npm run package:site` builds an allowlisted static artifact. See TEST_RESULTS.txt for the actual automated test run.

Not performed: real phones, native installation, standalone mode, real SW lifecycle, browser screenshots, keyboard/AT sessions, rendered 200% zoom/high contrast, independent language/community review or clinical review. No such test is marked passed. DEVICE_TESTS.md and INDEPENDENT_REVIEW.md hold explicit pending records. ACCESSIBILITY.md records engineering checks, not certification.

The Pages settings API was unavailable through the connector, and the conventional live URL could not be verified via retrieval. A workflow deployment result is required before claiming hosting success. No TWA APK was generated.

Final v0.5.0 local run: **52/52 tests passed**, all JavaScript syntax checks passed, and the static site package built successfully. These include the preserved original 34 test cases. HTML ID/heading references and package exclusions were also checked. No physical or independent review status has changed.

## Final remote release verification

All 46 uploaded repository files matched local hashes after the code release. The master prompt and runtime guidance retained their previous blob hashes. GitHub's check workflow and Pages test/package/deploy workflow both completed successfully for code commit `89f0d344e28b742e3affb1b54054d0b673b06d21`. Deployment evidence and URL are in DEPLOYMENT.md. Earlier notes that live publication was unverified describe the state before that successful workflow, not its final status. Real-device and independent-review gates remain pending.

## v0.6.0 verified release — 20 October 2026

Code commit: `47db5cb4a46845a853a65fa6347757d0278f432f`. GitHub ran **63 tests: 63 passed, 0 failed**, and all JavaScript syntax checks passed. Candidate verification: https://github.com/Tajoor621/Mera-Sukoon24/actions/runs/39456672959 . The main-branch test and Pages package/deploy workflow also succeeded: https://github.com/Tajoor621/Mera-Sukoon24/actions/runs/39456773964 .

This iteration used GitHub CI because no local execution environment was available. No new real-device or independent clinical review is claimed. The master prompt and runtime guidance retained their previous blob hashes. Publisher links are optional; the in-app guidance is original educational text, not rehosted books.

## v0.7.0 context expansion — verification scope

New tests exercise sixteen situations across thirteen domains and three response styles, while preserving all existing tests. Additional cases cover safety-sensitive contexts, urgent overrides, universal fallback, faith opt-in, module caching and real application handlers in the simulated DOM. GitHub CI is the execution environment for this iteration; final evidence will be recorded below after completion. Device, screen-reader, cultural, translation and clinical review remain pending.
