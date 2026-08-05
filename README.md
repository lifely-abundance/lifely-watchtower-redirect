# Lifely Watchtower Redirect

Public, redirect-only launcher for Lifely Watchtower routes. It contains only assets already published by the Render static service and sends private dashboard traffic through Master Hub authentication and SSO.

- Canonical private application source: `lifely-abundance/lifely-watchtower`
- Production static service: Render `lifely-watchtower`
- Production URL: `https://lifely-watchtower.onrender.com`
- Render publish path: `public-redirect`
- Build command: `echo redirect-only`

Do not add private dashboard files, credentials, internal datasets, or server code to this repository. Roll back using the previous successful Render static deploy.
