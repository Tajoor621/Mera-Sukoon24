# Accessibility engineering record — v0.5.0

Target: WCAG 2.2 AA. **Conformance is not established.** Static checks and simulated interactions do not replace assistive-technology or user testing.

Implemented: skip link with focusable main target; labelled native forms and selects; named result regions plus short polite result announcements; result focus; native details/summary controls; voluntary non-modal tour with skip/close and return focus; visible focus on all interactive elements; minimum 44px control/summary treatment; no fixed overlays; narrower-screen wrapping; forced-colours, increased-contrast and reduced-motion CSS.

Collapsed secondary sections expand on recognised fragment navigation. “Keep all tools open” restores the full view. Without JavaScript, native disclosures are open and no onboarding blocks content. Form tools require JavaScript; publisher reading links remain available in noscript content.

Selected specified colour pairs are tested algorithmically: primary text/background, muted text/paper, button text/default, button text/hover and focus/background. This does not check every rendered state or image. Control borders have been darkened. Branding lettering is part of the supplied image, not a text-size/conformance claim.

Mixed-language labels have explicit `lang` and `dir`; the document remains English because detailed guidance remains English. The planner supports Urdu RTL and Roman Urdu. Independent linguistic and pronunciation review is pending.

Still required: actual keyboard traversal, TalkBack and VoiceOver output, 200% zoom/reflow, high-contrast rendering, touch targets in context, pointer/switch input, reading order, browser/native-dialog behaviour and cognitive usability with participants. Record evidence in DEVICE_TESTS.md. No screen-reader pass is claimed.

References consulted:

- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
