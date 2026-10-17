# Sukoon — Mera-Sukoon24

A warm, culturally aware AI companion for clarity, comfort, and practical next steps through difficult moments.

## Project status

This repository currently contains the Sukoon conversation specification and implementation guidance. It does **not** yet contain a working Android app, web app, AI backend, deployed service, or clinically validated product.

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
