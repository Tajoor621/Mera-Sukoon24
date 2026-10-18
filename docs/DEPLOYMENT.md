# GitHub Pages deployment — v0.5.0

GitHub Pages is the sole production hosting target. No alternative service, AI backend or server-side user storage is added. Source remains on `main`; `dist/` is generated and ignored by Git.

The new `pages.yml` workflow runs tests, checks JavaScript syntax, packages an explicit static-file allowlist, uploads the Pages artifact and deploys it. No notes, user records, credentials, tests or local data are included in that artifact. GitHub Actions are build/deployment tooling only, not runtime web dependencies.

Repository setup: in GitHub **Settings → Pages**, select **GitHub Actions** as the source. If legacy branch-based Pages is configured, switch to Actions so two deployment sources do not compete. Repository policy/environment approval may also apply. The connected tool used in this session could not read or modify the Pages settings endpoint.

Use the URL returned by the successful workflow's deployment step as the verified live address. Do not assume the conventional URL is live merely because its form can be predicted. HTTPS, actual manifest responses, icon responses and service-worker control still require live verification.

Local checks:

```sh
npm test
npm run check
npm run package:site
python3 -m http.server --directory dist 8000
```

Localhost is useful for developer checks; it does not prove phone installation over HTTPS. Do not commit generated `dist/`.

## Update and incomplete-cache behaviour

The worker installs a complete version-scoped shell. Failed installs delete the partial new cache and retain the older cache. No live individual-module replacement or skipWaiting is used. A waiting update displays non-blocking instructions to finish/export work, close every Sukoon tab and reopen. Health messages contain only cache status, never form inputs.

If required files are missing or storage is unavailable, navigation serves a small dependency-free recovery page. Dynamic application startup failures reveal the static error notice. Neither recovery path deletes localStorage or forces a reload. Browser/OS cache eviction can still make full offline use impossible until connectivity and a complete installed shell return. This cannot be guaranteed away by a web app.

External publisher URLs and non-GET requests are not intercepted or cached. The strict application CSP remains unchanged.

## Optional Android wrapper

No TWA APK is produced in this release. First verify the live HTTPS origin and device behaviour. A signed wrapper also needs a signing identity, a matching Digital Asset Links declaration on that origin and build verification. Keep the signing key outside this public repository. A packaged PWA must be described as a PWA packaged for Android, not a native implementation. The pure web path must remain independent of any optional wrapper tooling.

## Verified GitHub deployment evidence — 18 October 2026

Code commit: `89f0d344e28b742e3affb1b54054d0b673b06d21`.

- Custom workflow: https://github.com/Tajoor621/Mera-Sukoon24/actions/runs/39127778876 — completed successfully, including tests, syntax checks, packaging and deploy.
- Check workflow: https://github.com/Tajoor621/Mera-Sukoon24/actions/runs/39127778883 — completed successfully.
- Deployment job output confirmed: https://tajoor621.github.io/Mera-Sukoon24/
- GitHub also ran the legacy branch Pages workflow successfully: https://github.com/Tajoor621/Mera-Sukoon24/actions/runs/39127778935

The GitHub deployment result confirms publication; it does not verify a phone install, screen-reader experience, rendered page or clinical content. Both workflows used the same code commit and target origin. To avoid duplicate future deployment pipelines, the repository owner should select **Settings → Pages → GitHub Actions**. The connected tool could not change this administration setting; its completion is not claimed.
