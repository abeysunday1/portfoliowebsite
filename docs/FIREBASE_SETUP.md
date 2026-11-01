# Firebase setup for AdisaAbiodunSunday.com

## Current status
- The website remains a static HTML/CSS/JavaScript site in GitHub.
- A separate feature branch contains the initial Firebase Hosting and Firestore configuration.
- No Firebase project is connected yet. Do not add credentials, deploy, or enable public database access until the owner supplies the project details and approves the setup.

## Create the Firebase project
1. Open https://console.firebase.google.com/ and sign in with the Google account that should own the project.
2. Create a project named `adisa-abiodun-sunday` (or choose the existing project if one already exists).
3. Register a Web App inside the project and copy its Firebase web app configuration.
4. Enable Firestore only when ready to create the lead data model. Keep production rules restrictive.
5. For hosting, install the Firebase CLI, run `firebase login`, then `firebase use --add` and select the project.

## Planned first backend feature
A website enquiry form that stores name, email, business, service interest, message, consent timestamp and created timestamp in a `leads` collection. Public users should only be able to submit validated enquiries; public reads and updates must remain blocked. Add App Check and abuse protection before opening the form to production.

## Important security notes
- Never commit service-account private keys or Admin SDK credentials.
- The Firebase web config is not a server secret, but access must be protected by Firestore Security Rules, App Check and appropriate validation.
- Do not deploy until the Firebase project ID and domain authorization have been confirmed.
