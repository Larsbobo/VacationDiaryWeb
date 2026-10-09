# Privacy Policy

**Last updated:** 03.10.2026 (Android version)

Thank you for your interest in VacationDiary. Protecting your personal data is important to us. This privacy policy informs you in accordance with Art. 13 GDPR about the nature, scope, and purpose of data processing in the Android app.

## 1. Data Controller

The data controller within the meaning of the GDPR is:

Lars Till Neumann
Schönefelder Str. 179
12355 Berlin

Email: larsneumann112@gmail.com

## 2. What Data Is Processed?

### a) When signing in

To use the Pro version you create an account with us. You sign in with email address and password:

- **Email address** and **password** — entered by you. The password is stored only in hashed form at our auth provider Supabase.
- **Nickname** — display name chosen by you, shown to co-travelers in shared vacations.

We additionally store the **timestamp of your consent** to this privacy policy plus its version identifier, so we can request renewed consent when the policy changes.

### b) During use

- **Vacation and travel data** — destinations, start and end dates, activities (trips), notes, budget items, bucket list items, prep tasks, packing lists, travel documents, accommodations
- **Journal entries** — text, date, mood (emoji), optional weather snapshot (symbol, temperature, description), and optional attached photo references
- **Voice transcripts** — the text generated from a recorded voice memo. Audio is neither stored nor transmitted (see Section 8)
- **Location data** — coordinates of destinations, activities, and accommodations, if you enter them or pick them via the map search
- **Photos** — images you upload, including the capture location if the photo contains it in its metadata (see Section 7)
- **Memberships** — information about which travel groups you belong to
- **Subscription status** — whether your Google account holds an active Pro subscription (`app.vacationdiary.pro.monthly`). Purchase and billing run exclusively through Google Play; we receive **no payment data, no billing address, and no credit-card details** (see Section 12).

We do **not** access your device location. The app does not request a location permission; location data only comes from your explicit input or from the metadata of photos you pick yourself.

## 3. Purposes and Legal Bases

| Purpose | Legal Basis |
|-------|-----------------|
| Providing the app's features | Art. 6 (1) (b) GDPR (contract) |
| Syncing your data across devices | Art. 6 (1) (b) GDPR |
| Sharing vacations with co-travelers | Art. 6 (1) (b) GDPR |
| Showing maps, weather, routes, place search, and exchange rates via external services (Section 4) | Art. 6 (1) (b) GDPR |
| Managing your Pro subscription (unlocking and locking cloud-based features based on the subscription status at Google Play) | Art. 6 (1) (b) GDPR |
| Security and abuse prevention | Art. 6 (1) (f) GDPR (legitimate interest) |

## 4. Recipients

We only share your data with the following processors and services:

- **Supabase Inc.** — authentication, database, and photo hosting on EU-based servers. Data processing agreement in place.
- **Google Ireland Limited** — app distribution and subscription handling via Google Play. The app also uses Android's system geocoding service to determine the country and local currency from your destination's coordinates; on devices with Google services, the coordinates are sent to Google for this. Google processes your data according to its own privacy policy: [policies.google.com/privacy](https://policies.google.com/privacy)

For maps, weather, routes, place search, and exchange rates, the app queries public services directly from your device. For technical reasons they receive your **IP address** and the requested **coordinates, search terms, or currency codes** — but **no account data and no other content of your trips**:

- **OpenStreetMap Foundation** (United Kingdom) — map tiles of the standard map as well as place search and reverse geocoding (Nominatim). [osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
- **Esri** (Environmental Systems Research Institute, Inc., USA) — satellite imagery and labels when you choose the "Satellite" or "Hybrid" map style in Settings.
- **Open-Meteo** (open-meteo.com) — weather forecasts for the coordinates of your destination.
- **Project OSRM** (router.project-osrm.org) — travel times and routes between the trips of a day in the Today view.
- **ExchangeRate-API** (open.er-api.com) — current exchange rates for your home currency.

When satellite imagery is loaded (Esri) and with Google services, a transfer to a third country, in particular the USA, cannot be ruled out. For the United Kingdom, an adequacy decision of the EU Commission exists.

## 5. Storage Period

Your data is stored as long as your account exists. When you delete your account:

- Personal data (email address, password hash, nickname) is **physically deleted**
- Data in solo vacations is **fully deleted**
- Data in shared vacations is **anonymized** (your contributions remain anonymously so that settlements and content of other co-travelers continue to function)

## 6. Your Rights

You have the right at any time to:

- **Access** the data we have about you (Art. 15 GDPR)
- **Rectification** of inaccurate data (Art. 16 GDPR) — directly editable in the app
- **Erasure** of your account (Art. 17 GDPR) — via *Settings → Account → Delete account*
- **Data portability** (Art. 20 GDPR) — via *Settings → Privacy → Export my data* (JSON format)
- **Objection** to processing (Art. 21 GDPR)
- **Complaint** to a data protection authority

Authority responsible for us: Berliner Beauftragte für Datenschutz und Informationsfreiheit (BlnBDI)
Address: Alt-Moabit 59-61, 10555 Berlin

## 7. Photo Upload and Personality Rights

You pick photos via Android's photo picker; the app only gets access to the images you select. If a photo contains its capture location in its metadata, the app reads it (Android asks for the "Access media location" permission for this) and shows the photo on the vacation's photo map. The capture location is stored together with the photo and is visible to the co-travelers of the vacation. Without this permission, photos are stored without location.

If you upload photos that depict other people, you are responsible for ensuring those people consent to the storage in the app. Uploaded photos are only visible to co-travelers of the respective vacation.

## 8. Voice Recordings and Speech Recognition

For journal voice memos, the app exclusively uses **Android's on-device speech recognition**. If your device offers no on-device recognition, the feature is disabled — the app does not fall back to an online service. As a result:

- **no audio data** ever leaves your device — neither to Google nor to our servers,
- only the resulting **text transcript** stays in the app.

Using this feature requires permission for the microphone. You can revoke it at any time in Android Settings.

## 9. On-Device AI Suggestions (Gemini Nano)

If your device supports the on-device language model **Gemini Nano**, the app can offer optional AI suggestions (journal drafts, trip ideas, packing lists, travel-document categorization). In this case:

- processing runs **exclusively on your device** through the Android system component AICore (interface: Google's ML Kit GenAI),
- **only text data you have entered** (e.g. destination, trip duration, trip titles, expense titles) is passed to the model — **no photos, no biometric data, no contact data**,
- the generated suggestions never leave your device.

AI suggestions are non-binding. You decide whether to accept them.

## 10. App Shortcuts and Widget

A long press on the app icon offers **shortcuts** ("Today", "Add expense", "Next vacation"). They only open the corresponding view of the app.

The **home-screen widget** shows a countdown or today's plan. The data it needs (destination, dates, today's trips, accommodation, weather) is stored locally in the app's storage and not transmitted to us or third parties.

## 11. Notifications

Countdown, anniversary, settlement reminder, the evening journal prompt, and notices about assigned tasks are **generated locally** on your device. The app detects assigned tasks (prep task or packing item) while syncing with our server; **no push service** is used and **no device token** is stored.

All notifications can be disabled at any time in the app's settings or in Android system settings.

## 12. Pro Subscription and Payment Processing

Pro features (cloud sync, travel groups, shared photos, notifications for assigned tasks) are available only with an active Pro subscription. The subscription is billed monthly, every three months, or yearly, as you choose, and renews automatically for the selected term (product ID `app.vacationdiary.pro.monthly`).

**Payment processing**

- Purchase, renewal, and billing are handled **exclusively by Google** via Google Play. Google's privacy policy applies: [policies.google.com/privacy](https://policies.google.com/privacy).
- From Google Play the app only receives information about the purchase status ("subscription active / not active") and a purchase confirmation used to acknowledge the purchase with Google Play. This information is only used on your device and is not stored on our servers. Payment data, billing address, credit-card details, or your Google account are **not** transferred to us.

**Renewal and cancellation**

- The subscription automatically renews for the selected term (1 month, 3 months, or 1 year) unless it is cancelled at least 24 hours before the end of the current period.
- You can manage and cancel your subscription at any time in the **Google Play Store** under *Profile → Payments & subscriptions → Subscriptions*. After cancellation, your access to Pro features ends when the paid period expires.

**Effect on your data after the subscription ends**

- Your existing trips remain in the app and are downgraded to **local mode**. Cloud sync and travel-group features are then no longer available; your data is not automatically deleted from our servers but remains inactive until you delete your account or renew the subscription.
- To delete your account, follow Section 6.

## 13. Security and Device Backup

Communication with our servers is encrypted (TLS). Data and photos are stored encrypted at our hosting provider Supabase.

If you have enabled Android backup on your device, the app data stored locally may be part of that backup in your Google account. You set up the backup yourself in Android Settings; it is subject to Google's terms.

## 14. Changes to This Privacy Policy

We reserve the right to adapt this privacy policy. If material changes occur, you will be informed on the next app launch and asked for renewed consent.

## 15. Contact

For privacy questions, reach us at larsneumann112@gmail.com.
