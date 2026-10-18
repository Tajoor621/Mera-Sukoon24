# Real-device and assistive-technology evidence — v0.5.0

## Current status

**Not performed.** This development session had no physical Android/iOS access, no browser-control skill, no TalkBack/VoiceOver session and no external reviewers. No screenshots or videos are supplied as substitutes for those missing tests. Automated simulations are recorded separately in TEST_RESULTS.txt and VERIFICATION.md.

Use the URL returned by the successful GitHub Pages deployment, not a local development server, for installation evidence. Record the deployed commit, phone model, OS build, exact browser version and test date. “Latest” alone is insufficient evidence. Use synthetic journal text and redact private information from recordings.

| Test | Procedure and expected result | Actual result | Evidence |
| --- | --- | --- | --- |
| Android Chrome install | Open HTTPS origin; install using available browser menu; correct supplied icon and name; standalone display if supported | Not tested | None |
| Android offline | Wait for offline-ready status; airplane mode; reopen installed app; run every local tool; publisher links require internet | Not tested | None |
| Android timer interruption | Start timer; background; return; timer reports paused, no forced breathing pace | Not tested | None |
| Waiting update, two tabs | Open old release in two tabs with synthetic unsaved reflection; publish new release; non-blocking notice; no forced reload; close both; reopen new version | Not tested | None |
| iPhone Safari install | Share → Add to Home Screen; supplied Apple icon; launch installed app | Not tested | None |
| iPhone offline | Repeat offline test in Safari home-screen app; record storage/eviction behaviour | Not tested | None |
| Keyboard only | Navigate skip link, language, tour, disclosure summaries, every form, result and data action; visible focus; no trap | Not tested | None |
| TalkBack | Read labels and options; submit each form; hear result-ready status and named result; navigate expanded report | Not tested | None |
| VoiceOver | Repeat TalkBack scenarios in Safari and installed mode; record any duplicate/missing announcements | Not tested | None |
| Zoom and reflow | 200% zoom and narrow viewport; no lost controls or horizontal content obstruction | Not tested | None |
| High contrast | System forced colours / supported high-contrast preference; readable labels, buttons and focus | Not tested | None |
| Reduced motion | System reduced motion; decorative breathing animation stops while timer and stop button remain usable | Not tested | None |
| Partial cache | With synthetic data, remove one core cache entry in development tools; navigate; readable recovery page; saved storage untouched | Simulated only | VM tests, not device evidence |
| Language session | Select Urdu/Roman Urdu; reload same tab; selection retained when sessionStorage works; detailed English sections labelled | Simulated/unit only | Automated tests |
| Export/restore/erase | Synthetic notes; export; validate restore; delete one; clear all; confirm cross-tab erasure | Simulated only | Automated tests |

## Recording a completed result

For each row replace “Not tested” only after observing it. Include pass/fail, exact steps, observed output, a screenshot/video link or reproducible log, and any issue/fix commit. A screenshot by itself does not demonstrate keyboard or screen-reader behaviour. Retest a failed scenario after its fix. Keep failures visible until resolved.

## How to verify on your own phone

1. Open the verified GitHub Pages HTTPS URL and install using your browser's available menu.
2. Open once online; wait for the offline-ready message. Do not enter private information for testing.
3. Enable airplane mode and reopen; try the planner, check-in, behavioural reflection, timer, grounding, activities and synthetic journal. Books still need internet.
4. Turn connectivity back on. If an update is waiting, finish/export work, close every Sukoon tab and reopen. No automatic refresh should interrupt a reflection.
5. Try your screen reader and larger text. If controls, labels or focus are missing, record the exact device and steps as a bug; do not assume the app is certified accessible.
