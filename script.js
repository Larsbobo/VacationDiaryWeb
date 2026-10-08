const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const legalContent = document.querySelector('#legal-content');
const documentStatus = document.querySelector('.document-status');
const documentLanguage = document.querySelector('.document-language');
const planControl = document.querySelector('.plan-control');

const translations = {
  de: {
    navFeatures: 'Was dich erwartet', navSupport: 'Support', navDownload: 'App Store <span aria-hidden="true">↗</span>', navDownloadPlay: 'Google Play <span aria-hidden="true">↗</span>',
    appKicker: 'Gerade unterwegs', appTitle: 'Willkommen in Miami', appSummary: '1 Reise · 0 geplant · 0 erinnert', tripCurrent: 'Aktuell', tripActive: 'Aktiv',
    filterAll: 'Alle', filterUpcoming: 'Kommend', filterPast: 'Vergangen', emptyTrips: 'Noch keine weiteren Urlaube.', tabTrips: 'Urlaube', tabToday: 'Aktuell', tabMap: 'Karte', tabBucket: 'Bucketlist', tabSettings: 'Einstellungen',
    heroEyebrow: 'Dein persönliches Reisetagebuch', heroTitle: 'Halte fest,<br><em>was bleibt.</em>',
    heroText: 'Vacation Diary macht aus kleinen Momenten große Erinnerungen. Sammle Orte, Gedanken und Bilder in deinem ganz persönlichen Reisetagebuch.',
    downloadSmall: 'Jetzt laden im', appStore: 'App Store', downloadSmallPlay: 'Jetzt bei', googlePlay: 'Google Play', discover: 'Mehr entdecken', microCopy: 'Kostenlos starten · Für iPhone und Android',
    featuresEyebrow: 'Für unterwegs gemacht', featuresTitle: 'Planen, teilen, <em>abrechnen.</em>',
    featuresText: 'Vacation Diary begleitet dich vom ersten Plan bis zur letzten Ausgabe, alleine oder gemeinsam mit Freunden.', proLabel: 'PRO', freeFeatureLabel: 'FREE',
    featureOneTitle: 'Urlaub planen', featureOneText: 'Sammle Orte, Aktivitäten, Packlisten und Budgets an einem übersichtlichen Reiseort.',
    featureTwoTitle: 'Gemeinsam reisen', featureTwoText: 'Lade Freunde ein, plant zusammen und behaltet gemeinsame Aufgaben und Erinnerungen im Blick.',
    featureThreeTitle: 'Fair abrechnen', featureThreeText: 'Erfasse Ausgaben, teile Kosten automatisch auf und sieh jederzeit, wer wem noch etwas schuldet.',
    featureFourTitle: 'Einfach festhalten', featureFourText: 'Notiere Gedanken, füge Fotos hinzu und gib jedem Eintrag deinen eigenen Ton.',
    featureFiveTitle: 'Orte wiederfinden', featureFiveText: 'Alle Lieblingsorte auf einen Blick. Deine persönliche Karte voller Geschichten.',
    featureSixTitle: 'Erinnerungen bewahren', featureSixText: 'Deine Sammlung wächst mit jedem Abenteuer und bleibt immer bei dir.',
    supportEyebrow: 'Wir sind für dich da', supportTitle: 'Fragen?<br><em>Schreib uns.</em>',
    supportText: 'Du hast Feedback, brauchst Hilfe oder möchtest einfach Hallo sagen? Unser kleines Team freut sich auf deine Nachricht.',
    legalEyebrow: 'Rechtliches', legalTitle: 'Klarheit für<br><em>jede Reise.</em>', documentLabel: 'Dokument', versionLabel: 'Version', platformLabel: 'Plattform',
    privacyLabel: 'Datenschutz', termsLabel: 'AGB', imprintLabel: 'Impressum', premiumLabel: 'Premium', freeLabel: 'Free',
    documentStatus: 'Datenschutzerklärung · Premium', footerTagline: 'Gemacht für die Momente dazwischen.', deleteAccountLabel: 'Konto löschen'
  },
  en: {
    navFeatures: 'What to expect', navSupport: 'Support', navDownload: 'App Store <span aria-hidden="true">↗</span>', navDownloadPlay: 'Google Play <span aria-hidden="true">↗</span>',
    appKicker: 'Currently traveling', appTitle: 'Welcome to Miami', appSummary: '1 trip · 0 planned · 0 remembered', tripCurrent: 'Current', tripActive: 'Active',
    filterAll: 'All', filterUpcoming: 'Upcoming', filterPast: 'Past', emptyTrips: 'No more trips yet.', tabTrips: 'Trips', tabToday: 'Today', tabMap: 'Map', tabBucket: 'Bucket list', tabSettings: 'Settings',
    heroEyebrow: 'Your personal travel diary', heroTitle: 'Keep what<br><em>stays with you.</em>',
    heroText: 'Vacation Diary turns small moments into lasting memories. Collect places, thoughts, and photos in your own personal travel diary.',
    downloadSmall: 'Download on the', appStore: 'App Store', downloadSmallPlay: 'Get it on', googlePlay: 'Google Play', discover: 'Discover more', microCopy: 'Start for free · For iPhone and Android',
    featuresEyebrow: 'Made for the road', featuresTitle: 'Plan, share, <em>settle up.</em>',
    featuresText: 'Vacation Diary takes you from the first plan to the last expense, solo or together with friends.', proLabel: 'PRO', freeFeatureLabel: 'FREE',
    featureOneTitle: 'Plan your trip', featureOneText: 'Collect places, activities, packing lists, and budgets in one clear trip space.',
    featureTwoTitle: 'Travel together', featureTwoText: 'Invite friends, plan together, and keep shared tasks and memories in sync.',
    featureThreeTitle: 'Settle up fairly', featureThreeText: 'Track expenses, split costs automatically, and always know who owes whom.',
    featureFourTitle: 'Capture simply', featureFourText: 'Write down thoughts, add photos, and give every entry your own voice.',
    featureFiveTitle: 'Find your places', featureFiveText: 'All your favorite places at a glance. Your personal map full of stories.',
    featureSixTitle: 'Keep the memories', featureSixText: 'Your collection grows with every adventure and stays with you.',
    supportEyebrow: 'We are here for you', supportTitle: 'Questions?<br><em>Write to us.</em>',
    supportText: 'Have feedback, need help, or simply want to say hello? Our small team would love to hear from you.',
    legalEyebrow: 'Legal', legalTitle: 'Clarity for<br><em>every journey.</em>', documentLabel: 'Document', versionLabel: 'Version', platformLabel: 'Platform',
    privacyLabel: 'Privacy', termsLabel: 'Terms', imprintLabel: 'Imprint', premiumLabel: 'Premium', freeLabel: 'Free',
    documentStatus: 'Privacy Policy · Premium', footerTagline: 'Made for the moments in between.', deleteAccountLabel: 'Delete account'
  }
};

const documentNames = {
  privacy: { de: { premium: 'legal/privacy-de.md', free: 'legal/privacy-free-de.md' }, en: { premium: 'legal/privacy-en.md', free: 'legal/privacy-free-en.md' } },
  terms: { de: { premium: 'legal/terms-de.md', free: 'legal/terms-free-de.md' }, en: { premium: 'legal/terms-en.md', free: 'legal/terms-free-en.md' } },
  imprint: { de: { premium: 'legal/imprint-de.md', free: 'legal/imprint-de.md' }, en: { premium: 'legal/imprint-en.md', free: 'legal/imprint-en.md' } }
};

// Android texts live in legal/android/ under the same file names. The imprint is the
// same for both platforms.
const platformNames = { ios: 'iOS', android: 'Android' };

function documentPath(type, language, plan, platform) {
  const file = documentNames[type][language][plan];
  return platform === 'android' && type !== 'imprint' ? file.replace('legal/', 'legal/android/') : file;
}

let currentLanguage = 'de';
let currentType = 'privacy';
let currentPlan = 'premium';
let currentPlatform = 'ios';

// Deep links such as ?platform=android&doc=privacy&plan=free&lang=en#legal, so each
// document has its own URL (e.g. for the Google Play privacy policy field).
const params = new URLSearchParams(window.location.search);
if (params.get('platform') in platformNames) currentPlatform = params.get('platform');
if (['privacy', 'terms', 'imprint'].includes(params.get('doc'))) currentType = params.get('doc');
if (['premium', 'free'].includes(params.get('plan'))) currentPlan = params.get('plan');
if (params.get('lang') in translations) currentLanguage = params.get('lang');
// Only reflect the selection in the address once the visitor works with the legal
// section (or arrived through such a link) — a plain visit keeps a clean URL.
let legalUrlActive = ['platform', 'doc', 'plan'].some((key) => params.has(key));

function updateUrl() {
  if (!legalUrlActive) return;
  const query = new URLSearchParams({ platform: currentPlatform, doc: currentType, lang: currentLanguage });
  if (currentType !== 'imprint') query.set('plan', currentPlan);
  history.replaceState(null, '', `?${query.toString()}${window.location.hash}`);
}

function syncControls() {
  document.querySelectorAll('.legal-platform').forEach((item) => item.classList.toggle('is-active', item.dataset.platform === currentPlatform));
  document.querySelectorAll('.legal-type').forEach((item) => item.classList.toggle('is-active', item.dataset.legalType === currentType));
  document.querySelectorAll('.legal-plan').forEach((item) => item.classList.toggle('is-active', item.dataset.plan === currentPlan));
  planControl.hidden = currentType === 'imprint';
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('.language-button').forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
  loadLegalDocument();
}

function markdownToHtml(markdown) {
  const escaped = markdown.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.split(/\r?\n/).reduce((html, line) => {
    if (line.startsWith('### ')) return `${html}<h3>${line.slice(4)}</h3>`;
    if (line.startsWith('## ')) return `${html}<h2>${line.slice(3)}</h2>`;
    if (line.startsWith('# ')) return `${html}<h1>${line.slice(2)}</h1>`;
    if (line.startsWith('- ')) return `${html}<ul><li>${line.slice(2)}</li></ul>`;
    if (!line.trim()) return `${html}<div class="document-space"></div>`;
    return `${html}<p>${line}</p>`;
  }, '').replace(/<\/ul><ul>/g, '');
}

async function loadLegalDocument() {
  const file = documentPath(currentType, currentLanguage, currentPlan, currentPlatform);
  const statusKey = currentType === 'privacy' ? 'privacyLabel' : currentType === 'terms' ? 'termsLabel' : 'imprintLabel';
  documentStatus.textContent = `${translations[currentLanguage][statusKey]}${currentType === 'imprint' ? '' : ` · ${translations[currentLanguage][currentPlan === 'free' ? 'freeLabel' : 'premiumLabel']} · ${platformNames[currentPlatform]}`}`;
  updateUrl();
  documentLanguage.textContent = currentLanguage.toUpperCase();
  legalContent.innerHTML = `<p>${currentLanguage === 'de' ? 'Dokument wird geladen …' : 'Loading document …'}</p>`;
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error('Document unavailable');
    legalContent.innerHTML = markdownToHtml(await response.text());
  } catch (error) {
    legalContent.innerHTML = `<p>${currentLanguage === 'de' ? 'Das Dokument konnte nicht geladen werden.' : 'The document could not be loaded.'}</p>`;
  }
}

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Menü öffnen');
  });
});

document.querySelectorAll('.language-button').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

document.querySelectorAll('.legal-platform').forEach((button) => {
  button.addEventListener('click', () => {
    currentPlatform = button.dataset.platform;
    legalUrlActive = true;
    syncControls();
    loadLegalDocument();
  });
});

document.querySelectorAll('.legal-type').forEach((button) => {
  button.addEventListener('click', () => {
    currentType = button.dataset.legalType;
    legalUrlActive = true;
    document.querySelectorAll('.legal-type').forEach((item) => item.classList.toggle('is-active', item === button));
    planControl.hidden = currentType === 'imprint';
    loadLegalDocument();
  });
});

document.querySelectorAll('.legal-plan').forEach((button) => {
  button.addEventListener('click', () => {
    currentPlan = button.dataset.plan;
    legalUrlActive = true;
    document.querySelectorAll('.legal-plan').forEach((item) => item.classList.toggle('is-active', item === button));
    loadLegalDocument();
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

syncControls();
applyLanguage(currentLanguage);
