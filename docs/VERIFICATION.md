# Verification — v0.2.0

## Completed

- `npm test`: 10 automated tests passed.
- `npm run check`: syntax checks passed for all runtime JavaScript modules and the service worker.
- Tests cover resource metadata, topic/language/bookmark filters, urgent routing, professional-support prompts, storage failures, data limits, state round trips, source references, DOM binding IDs and offline asset completeness.
- Official landing pages reviewed for the curated resources; see FREE_RESOURCES.md for retrieval limits.

## Limits

No browser automation, real iPhone/Android testing, visual screenshot review, hosting deployment, accessibility audit or clinical validation was performed. Service worker installation, offline reload, keyboard operation, export/download, delete confirmation and mobile layout require browser/device checks before release. Unit checks do not establish clinical effectiveness.

## Device review checklist

1. Serve on HTTPS or localhost. Check library filters and publisher links, including the WHO Urdu language option.
2. Start/stop the breathing timer; background the page and confirm it pauses. Check reduced-motion preferences.
3. Use grounding next/reset through every step. No step should require unsafe sensory contact.
4. Add a reflection with saving off, reload and confirm it disappears. Enable saving, reload and confirm it returns. Switch saving off and confirm browser storage is removed.
5. Export data and inspect the JSON; confirm it is local and contains no hidden fields. Clear data and confirm both stored and displayed state reset.
6. After a successful initial visit and service-worker activation, disconnect and reload. App tools should remain usable; publisher links require connectivity.
7. Select urgent help in the check-in: no reading cards should be recommended; the human-support section should receive focus.
8. Check small screens, zoom, keyboard focus, readable contrast and screen-reader labels. Test installation per browser; SVG-only manifest icons may limit install support on some devices.
