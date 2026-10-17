# Sukoon architecture and behavioural design audit — v0.4.0

## Verdict and scope

Sukoon is a useful early self-help web module, not yet the complete companion described by its thirteen-domain specification. It runs free of paid APIs and has a small, understandable codebase. Its most valuable current functions are free-resource discovery, calming tools, personal reflection and structured body-shaming/racism guidance.

Audit baseline: commit `abbd95f5b0df5b7e34c14fc43dca06b1e01813d9` (v0.3.0). This review inspected the tracked code, content, tests, documentation, CI and install manifest. It did not involve interviews, outcome measurements, clinical assessment, a legal audit or a real-device session. Psychological, sociological and behavioural observations below are design analysis by an AI, not a licensed specialist's endorsement.

Subjective overall product-readiness rating: **5.5/10 before fixes; 7/10 after code-level improvements**, with limited confidence until actual browser and user testing. These are qualitative reviewer judgements, not calculated health or clinical accuracy scores.

| Dimension | Before | After code review | Basis and remaining limit |
| --- | --- | --- | --- |
| Architecture and maintainability | 6/10 | 8/10 | Small modules, transparent rules, no runtime dependencies; still lacks browser-based integration coverage |
| Ease of use | 5/10 | 7/10 | Three starting routes, compact reports and a short planner; long page and small-screen usability need user testing |
| Behavioural support design | 6/10 | 7/10 | Manageable actions, user agency, uncertainty and power-context support; no clinical review |
| Cultural and language fit | 4/10 | 6/10 | Urdu and Roman Urdu planner; other tools remain English and translations need independent review |
| Privacy and user control | 6/10 | 7/10 | Honest failure states, hidden notes, individual deletion and validated restore; local storage/export remains unencrypted |
| Resource traceability | 7/10 | 8/10 | Official sources, review dates and explicit reuse limits; every download is not independently verified |
| Offline and installation resilience | 5/10 | 7/10 | Version-consistent shell cache, PNG and Apple icons; no real PWA lifecycle/device test |
| Coverage of the full companion vision | 3/10 | 4/10 | Five-topic planner plus existing tools; no conversational AI and most domain modules remain specification-only |
| Clinical effectiveness and diagnostic accuracy | Not established | Not established | No clinical trial, validation dataset, validated screening instrument or independent clinical sign-off |

## Findings and implemented changes

### High priority

1. **Specification overstated professional identity and support guarantees.** The prompt combined human-like identity, professional roles, guaranteed confidentiality and continuous crisis availability. Revised it to state AI identity, educational scope, actual privacy limits and no monitoring/rescue promise. Removed hardcoded crisis contacts from the current prompt. The browser does not provide a verified contact lookup.
2. **Offline code could mix releases.** v0.3.0 fetched individual modules from the network and updated their cached copies independently. A deployment could therefore produce inconsistent imports. The worker now installs a complete shell and serves its own release cache without live per-module replacement. Updates wait for open clients to close; a message explains the next step.
3. **Storage consent and failure handling were misleading in edge cases.** Any stored value enabled saving and startup immediately rewrote it. Unreadable records are now left untouched at startup. Failed removal no longer falsely shows saving as disabled. Clearing saved data in another tab clears this tab too.
4. **Behavioural verdicts could overstate certainty.** A topic choice is not a full account. Added an explicit uncertain-pattern route and power-imbalance input, keeping safety override first. The result distinguishes reported conduct from inferred motives and legal findings. No diagnosis or character label is assigned.

### Medium priority

5. **High cognitive load on first use.** Added direct routes to calm, a short plan and behavioural reflection. Reports show the short summary and actions first, with additional explanation in expandable sections.
6. **Bilingual vision was not implemented.** Added an English/Urdu/Roman Urdu five-topic planner with appropriate script direction and language attributes. The remaining interface is explicitly identified as English; this is partial localisation, not an app-wide translation claim.
7. **Saved reflections were hard to manage.** Added access to older retained records, individual deletion, notes hidden by default and user-confirmed restore of validated JSON exports. No automatic import, cloud sync or data transfer was introduced.
8. **Bookmark controls disagreed across views.** Bookmark updates now synchronise matching cards in both the library and recommendation views.
9. **Timer announcements were excessive.** Kept routine second-by-second countdown updates outside a live region. Started/completed/paused messages remain available separately. Result panels receive focus after submission.
10. **Activities and install assets had gaps.** Daily completion state refreshes when returning to the app. Added PNG 192/512 icons and an Apple touch icon derived from the existing geometric brand mark. No native APK or installation guarantee is implied.

## Psychological and behavioural assessment

Helpful design choices include voluntary exercises, no shame for skipping, no punitive streaks, no dopamine scores and no claim that a mood rating diagnoses a condition. The short planner offers two practical actions, an optional faith-based addition, and a follow-up support message. WHO's stress guide supports practical self-help skills; the NHS breathing source describes comfortable unforced breathing. Neither source validates this application or its outcomes.

The behavioural form should be understood as guided reflection. It does not hear the full story, infer intention, perform psychotherapy or assess danger reliably. The new uncertainty route reduces premature judgement. Qualified support remains appropriate when difficulties continue, worsen or interfere with daily life. Review of sensitive topics by qualified clinicians remains necessary before claiming clinical quality.

## Sociological and cultural assessment

Context matters: a worker dependent on a manager, a child dependent on a caregiver and a person facing online harassment do not have identical choices. The module distinguishes settings and now explicitly allows non-confrontational routes where work, housing, safety or support could be at risk. It avoids equating culture with an obligation to endure humiliation.

South Asian and diaspora users are not a single group. Do not infer beliefs, family structure, gender, literacy, class or nationality from a name or language. Faith comfort remains opt-in. Urdu-script and Roman Urdu planner options improve access but do not replace community language testing. UK-focused resources may contain services or legal details unavailable elsewhere; they are labelled accordingly.

## Verification

34 automated tests pass, including unit tests and seven simulated DOM event tests. Coverage includes all 45 behavioural topic/role/setting combinations, three planner language modes, safety precedence, optional faith, malformed storage, removal failure, restore validation, bookmark synchronisation, note visibility, individual deletion, urgent/result focus and cross-tab clearing. JavaScript syntax checks pass. PNG dimensions, cache-file presence and remote repository content are also checked during the release.

No real browser, screenshot review, screen-reader session, accessibility conformance test, iPhone/Android install test, service-worker lifecycle test or clinical evaluation was performed. Simulated DOM tests execute event handlers but are not browser tests. See VERIFICATION.md for the device checklist.

## What is still needed for a defensible high-quality release

1. Test actual iPhone Safari/home-screen and Android Chrome behaviour: install, offline revisit, waiting update, interruption, import/export and erasure. Fix observed issues.
2. Conduct keyboard, screen-reader, zoom, contrast and cognitive-accessibility testing with users, including people under stress and people with disabilities.
3. Obtain qualified review of sensitive content and independent Urdu/Roman Urdu review. Evaluate the planner and behavioural form with representative South Asian and diaspora users without treating a small sample as clinical validation.
4. Choose an explicit conversational AI strategy if the full companion remains the goal. The app currently has no such runtime. Do not claim a hosted $0 AI service is available indefinitely or label static responses as expert assessment.
5. Co-design and review the remaining domain experiences rather than turning their specification headings into unreviewed advice. Define intended users, exclusions, outcome measures and professional referral boundaries.
6. If region-specific crisis contacts are introduced, integrate a maintained, verified source with clear service scope and failure handling. No numbers should be guessed or copied from old prompt text.

## Sources consulted

- WHO, Doing What Matters in Times of Stress: https://www.who.int/publications/i/item/9789240003927
- NHS, Breathing exercises for stress: https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/
- Resource publishers and review limits: FREE_RESOURCES.md

The audit does not certify 10/10 readiness. The appropriate next milestone is verified real-world usability and independent content review, not a higher self-awarded score.
