# Free resources and wellbeing module — v0.3.0

## Selection and cost

The catalogue links to official, free-access WHO, NHS and CCI materials. It is a curated starting collection, not an exhaustive index of every online book. Books are not copied, scraped into a model or rehosted. There are no required accounts, API keys, subscriptions or paid services for the built-in tools or the listed reading materials. Internet/data charges and access restrictions can still depend on the reader's provider and location.

Free to read is different from openly licensed. Publisher licences govern reuse, translations and redistribution. The application contains original short descriptions and links. Users can use a publisher's own download options for personal offline reading where offered. No third-party PDFs, audio or logos are bundled or cached by Sukoon. WHO and CCI are not sponsors of this project.

## Sources reviewed on 17 October 2026

| Publisher | Official source | Included purpose |
| --- | --- | --- |
| WHO | https://www.who.int/publications/i/item/9789240003927 | Illustrated stress guide, language editions, accompanying audio links |
| CCI / WA Health | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself | Broader self-help workbook and worksheet directory |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Depression | Low mood reading and activity/thought worksheets |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Worry-and-Rumination | Worry workbook |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Anxiety | Anxiety resources |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Panic | Panic workbook |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Self-Compassion | Self-compassion workbook |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Self-Esteem | Self-esteem workbook |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Tolerating-Distress | Distress tolerance workbook |
| CCI | https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Procrastination | Task avoidance workbook |
| NHS | https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/ | Comfortable breathing guidance |
| NHS | https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/ | Small wellbeing activity suggestions |
| NHS | https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/ | Sleep information |

Review means the official landing page was inspected, not that every linked file or exercise has been clinically reviewed by this project. WHO lists an Urdu edition; its specific download target could not be independently retrieved during this work. The app therefore points to the language list, not an unverified PDF URL. Availability can change. UI text is English; full Urdu/Roman Urdu localisation is not implemented in this module.

## Dopamine and improvement claims

The application supports manageable activities and subjective reflection, not neurotransmitter optimisation. It cannot measure dopamine, prescribe supplements, promise chemical changes or infer recovery from activity completion. The NHS wellbeing source supports activity-based wellbeing ideas; it does not validate this app. No dopamine score, reset, detox, gambling-like reward or punitive streak is implemented.

## Check-in and support

The check-in uses only the user's selected topic plus flags for ongoing distress, interference with daily life and urgent safety needs. It uses no clinical questionnaire, diagnostic cut-off, hidden risk inference or language-model call. Recommendations explain their limits. Urgent selection suppresses reading suggestions and focuses the human-support section; it does not dispatch help or assess safety reliably.

The original master prompt's archived contact numbers are not used in the interface. No unverified suicide/self-harm helplines are shipped in this module. Human support guidance remains available regardless of check-in selections. Severe, persistent or impairing symptoms need appropriate professional assessment.

## Privacy and offline behaviour

No analytics, remote fonts, advertising SDKs, CDNs or third-party scripts are loaded. Resource links only open after a user action, with no referrer sent. Page hosting still involves ordinary server requests. Third-party publishers apply their own privacy rules when opened.

Data begins in tab memory. Opt-in writes bookmarks, activity completion dates and reflections to localStorage; switching it off removes the saved copy while keeping the current session available. Browser storage is not app-encrypted and is unsuitable for guaranteed confidentiality. Clear removes the app's state; exports and operating-system/browser backups remain outside its control. JSON exports are plain text. No automatic import or server synchronisation is implemented.

The service worker caches only local app assets. It does not cache external books, requests to publishers, reflections, notes or arbitrary URLs. Use a private browser profile if needed; this does not guarantee privacy against device monitoring.

## Maintaining the catalogue

Edit `resources.mjs` to add an official HTTPS URL, publisher, languages actually offered, format, topic tags, original short description, access/rights note and review date. Verify access and download terms before adding a resource. Do not add paywalled books, unauthorised mirrors, diagnoses disguised as quizzes or unsupported dopamine claims. Recheck links periodically; no automatic link-monitoring service is configured.

The companion's thirteen domain specifications remain intact. These browser tools do not yet implement the full AI companion.

## Body shaming and racism — v0.3.0

Module L now covers body shaming, colourism, racism and behavioural reflection. The dedicated previous module has been replaced in the current specification and documentation. Prior commits remain in Git history.

The form asks about topic, perspective, setting, recurrence, everyday impact, under-18 involvement, eating-related concerns and immediate safety. It requests no photographs, weight, BMI, racial classification or incident narrative. Responses explain the selected pattern, offer context and scripts, and provide up to four next steps. They do not label people, infer motives, prescribe body change or decide legal guilt. Threats override ordinary reports. Reports and form selections are not included in localStorage or JSON exports; reset clears the result.

Additional official sources reviewed on 17 October 2026:

- YoungMinds body image: https://www.youngminds.org.uk/young-person/coping-with-life/body-image/ — young-person-focused, free reading; services may have age/geographic restrictions.
- Mind racism and mental health: https://www.mind.org.uk/information-support/tips-for-everyday-living/racism-and-mental-health/ — free reading; linked services and legal information may be UK-specific.

These publishers did not author, validate or endorse the app's response rules. Text is original educational guidance informed by the topics above, not a clinical assessment. The interface remains English and the workflow remains free of paid APIs.
