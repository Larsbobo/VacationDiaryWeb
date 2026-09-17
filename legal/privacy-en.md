# Privacy Policy

**Last updated:** 17.09.2026

Thank you for your interest in VacationDiary. Protecting your personal data is important to us. This privacy policy informs you in accordance with Art. 13 GDPR about the nature, scope, and purpose of data processing in our app.

## 1. Data Controller

The data controller within the meaning of the GDPR is:

Lars Till Neumann
Schönefelder Str. 179
12355 Berlin

Email: larsneumann112@gmail.com

## 2. What Data Is Processed?

### a) When signing in

To use the Pro version you create an account with us. You have two options:

**Sign-in with email and password:**

- **Email address** and **password** — entered by you. The password is stored only in hashed form at our auth provider Supabase.
- **Nickname** — display name chosen by you, shown to co-travelers in shared vacations.

**Sign in with Apple:**

- **Apple user identifier (sub claim)** — a pseudonymous ID provided by Apple.
- **Email address** — verified by Apple. If you choose "Hide My Email", we only receive an Apple relay address.
- **First and last name** — only if you grant Apple permission on first login.
- **Nickname** — display name chosen by you, shown to co-travelers in shared vacations.

In both cases we additionally store the **timestamp of your consent** to this privacy policy plus its version identifier, so we can request renewed consent when the policy changes.

### b) During use

- **Vacation and travel data** — destinations, start and end dates, activities (trips), notes, budget items, bucket list items, prep tasks, packing lists, travel documents, accommodations
- **Journal entries** — text, date, mood (emoji), optional weather snapshot (symbol, temperature, description), and optional attached photo references
- **Voice transcripts** — the text generated from a recorded voice memo. The underlying audio is never stored on our servers (see Section 8)
- **Location data** — coordinates of destinations and activities, if you enter them or pick them via the map search
- **Photos** — images you upload
- **Memberships** — information about which travel groups you belong to
- **APNs device token** — provided by your device once you enable push notifications for assigned tasks. We store the token together with your user ID so pushes can be routed to your specific device (see Section 11).
- **Subscription status** — the information whether your Apple account holds an active Pro subscription (`app.vacationdiary.pro.monthly`). The purchase and monthly billing itself run exclusively through Apple; we receive **no payment data, no billing address, and no credit-card details**.

We do **not** access your device location. Location data only comes from your explicit input.

## 3. Purposes and Legal Bases

| Purpose | Legal Basis |
|-------|-----------------|
| Providing the app's features | Art. 6 (1) (b) GDPR (contract) |
| Syncing your data across devices | Art. 6 (1) (b) GDPR |
| Sharing vacations with co-travelers | Art. 6 (1) (b) GDPR |
| Managing your Pro subscription (unlocking and locking cloud-based features based on the Apple-side subscription status) | Art. 6 (1) (b) GDPR |
| Security and abuse prevention | Art. 6 (1) (f) GDPR (legitimate interest) |

## 4. Recipients

We only share your data with the following processors and services:

- **Apple Inc.** — optional "Sign in with Apple", app distribution, weather service (WeatherKit), maps (MapKit), push delivery via the Apple Push Notification service (APNs). Apple processes your data according to its own privacy policy: [apple.com/legal/privacy](https://www.apple.com/legal/privacy/)
- **Supabase Inc.** — authentication, database, and photo hosting on EU-based servers. Data processing agreement in place.

No transfer to third countries takes place as long as Supabase and Apple EU servers are used.

## 5. Storage Period

Your data is stored as long as your account exists. When you delete your account:

- Personal data (Apple user identifier or email address, password hash, nickname, device tokens) is **physically deleted**
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

If you upload photos that depict other people, you are responsible for ensuring those people consent to the storage in the app. Uploaded photos are only visible to co-travelers of the respective vacation.

## 8. Voice Recordings and Speech Recognition

For journal voice memos, the app uses Apple's on-device **Speech framework**. We always set `requiresOnDeviceRecognition = true`, so that:

- **no audio data** ever leaves your device — neither to Apple nor to our servers,
- only the resulting **text transcript** stays in the app.

Using this feature requires one-time permission for microphone and speech recognition. You can revoke it at any time in iOS Settings.

## 9. Apple Intelligence (FoundationModels)

If your device supports Apple Intelligence, the app can offer optional AI suggestions (journal drafts, trip ideas, packing lists, travel-document categorization). In this case:

- processing runs **exclusively on your device** through Apple's **FoundationModels** framework,
- **only text data you have entered** (e.g. destination, trip duration, trip titles, expense titles) is passed to the model — **no photos, no biometric data, no contact data**,
- the generated suggestions never leave your device.

AI suggestions are non-binding. You decide whether to accept them.

## 10. Siri and Shortcuts

The app integrates Siri and the Shortcuts app via **App Intents**. Available actions:

- "Next vacation" — reads a local snapshot of your trips from the on-device App Group container and answers with the destination.
- "Open today's plan" — opens the Today view of the app.
- "Add expense" — opens a pre-filled form in the app.

**No additional trip data is transmitted to Apple servers** beyond the usual Siri request handling. Voice requests to Siri are subject to Apple's own privacy policy.

## 11. Local and Server-Delivered Notifications

Countdown, anniversary, settlement reminder, and the evening journal prompt are **scheduled locally** on your device and are not delivered via any server.

Push notifications for task assignments (prep task or packing item) are delivered via **Apple Push Notification service (APNs)**. For this, we store your device token at Supabase and, when triggered, transmit the message title + body plus the vacation and task IDs. Trip content is **not transmitted to Apple** — only the task title you already entered.

All notifications can be disabled at any time in the app's settings or in iOS system settings.

## 12. Pro Subscription and Payment Processing

Pro features (cloud sync, travel groups, shared photos, push notifications for assigned tasks) are available only with an active Pro subscription. The subscription is auto-renewable and billed monthly (product ID `app.vacationdiary.pro.monthly`).

**Payment processing**

- Purchase, renewal, and billing are handled **exclusively by Apple** via the App Store. Apple's privacy policy applies: [apple.com/legal/privacy](https://www.apple.com/legal/privacy/).
- From Apple we only receive an **anonymous entitlement status** via StoreKit ("subscription active / not active"). Payment data, billing address, credit-card details, or your Apple ID are **not** transferred to us.

**Renewal and cancellation**

- The subscription automatically renews for another month unless it is cancelled at least 24 hours before the end of the current period.
- You can manage and cancel your subscription at any time in your Apple account's **App Store settings**. After cancellation, your access to Pro features ends when the paid period expires.

**Effect on your data after the subscription ends**

- Your existing trips remain in the app and are downgraded to **local mode**. Cloud sync and travel-group features are then no longer available; your data is not automatically deleted from our servers but remains inactive until you delete your account or renew the subscription.
- To delete your account, follow Section 6.

## 13. Security

Communication with our servers is encrypted (TLS). Data and photos are stored encrypted at our hosting provider Supabase.

## 14. Changes to This Privacy Policy

We reserve the right to adapt this privacy policy. If material changes occur, you will be informed on the next app launch and asked for renewed consent.

## 15. Contact

For privacy questions, reach us at larsneumann112@gmail.com.
