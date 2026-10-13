/* Multiverse Landing Page Scripts */

/* =====================================================================
   PAYPAL — TU WPISZ SWOJE DANE
   =====================================================================
   Podmień PAYPAL_EMAIL na e-mail swojego konta PayPal (albo wpisz
   PAYPAL_HOSTED_ID z przycisku "Donate" utworzonego na paypal.com).
   Gdy oba pola będą puste, przycisk Donate otworzy stronę PayPal.
   ===================================================================== */
const PAYPAL_EMAIL = "twoj-email@paypal.com"; // <-- podmień na Twój e-mail PayPal
const PAYPAL_HOSTED_ID = "";                  // np. "ABCD1234" (opcjonalnie)

function paypalDonateUrl() {
    if (PAYPAL_HOSTED_ID) {
        return "https://www.paypal.com/donate/?hosted_button_id=" + encodeURIComponent(PAYPAL_HOSTED_ID);
    }
    if (PAYPAL_EMAIL && !PAYPAL_EMAIL.startsWith("twoj-email")) {
        return "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=" +
            encodeURIComponent(PAYPAL_EMAIL) + "&item_name=Multiverse&currency_code=PLN";
    }
    return "https://www.paypal.com/";
}
document.addEventListener("DOMContentLoaded", function () {
    const donateBtn = document.getElementById("donate-btn");
    if (donateBtn) {
        donateBtn.href = paypalDonateUrl();
    }
});

/* ============================ TŁUMACZENIA ============================ */
const I18N = {
    pl: {
        "nav.features": "Funkcje",
        "nav.compare": "Porównanie",
        "nav.download": "Pobierz",
        "nav.donate": "Donate",
        "nav.contact": "Kontakt",
        "nav.downloadBtn": "Pobierz",
        "hero.title": "Dziel się głosem z innymi",
        "hero.subtitle": "Program, który dał ci stwórca. Prosty, bez reklam, bez szpiegowania, łatwy. Najlepsza jakość dźwięku, solidny kod i minimalne zużycie zasobów.",
        "hero.downloadBtn": "Pobierz za darmo",
        "hero.featuresBtn": "Zobacz funkcje",
        "hero.stat1": "Latencja",
        "hero.stat2": "RAM",
        "hero.stat3": "Jakość CD",
        "features.title": "Dlaczego Multiverse?",
        "features.subtitle": "Zbudowany od zera pod kątem wydajności i jakości",
        "features.f1.title": "Ultra niska latencja",
        "features.f1.text": "Mniej niż 20 ms opóźnienia dzięki protokołowi UDP i kodekowi Opus 1.6. Idealne do gier e-sportowych.",
        "features.f2.title": "6x lżejszy niż Discord",
        "features.f2.text": "Zajmuje tylko ~20 MB RAM. Zero obciążania CPU w tle. Reszta zasobów idzie do Twojej gry.",
        "features.f3.title": "Szyfrowanie E2E",
        "features.f3.text": "ChaCha20-Poly1305 — takie samo szyfrowanie jak w Signal. Twoje rozmowy są prywatne.",
        "features.f4.title": "Serwer na każdym PC",
        "features.f4.text": "Każdy może uruchomić serwer — do 7 osób. Bez chmur, bez abonamentów, bez ograniczeń.",
        "features.f5.title": "Tryb P2P",
        "features.f5.text": "Połączenie bezpośrednie bez serwera. Działa nawet w LAN bez internetu.",
        "features.f6.title": "Czysta mowa, zero echa",
        "features.f6.text": "Redukcja szumów, eliminacja echa i auto-głośność — Twój głos jest czysty i wyraźny w każdej sytuacji.",
        "compare.title": "Porównanie z konkurencją",
        "compare.col1": "Cecha",
        "compare.r1": "RAM (klient)",
        "compare.r2": "Latencja",
        "compare.r3": "Open source",
        "compare.r4": "Self-hosted",
        "compare.r5": "Szyfrowanie",
        "compare.r6": "Cena",
        "yes": "Tak",
        "no": "Nie",
        "free": "Darmowy",
        "download.title": "Pobierz Multiverse",
        "download.subtitle": "Darmowy komunikator głosowy dla Windows",
        "download.winBtn": "Pobierz dla Windows",
        "download.linuxBtn": "Linux — wkrótce",
        "download.note": "Windows 10/11 · wersja 1.0.0 · bez instalacji, bez Pythona",
        "donate.title": "Wesprzyj projekt",
        "donate.subtitle": "Podoba Ci się Multiverse? Twój datek pomaga w dalszym rozwoju — bez reklam, bez szpiegowania, dla wszystkich.",
        "donate.btn": "Przekaż datek przez PayPal",
        "contact.title": "Kontakt",
        "contact.subtitle": "Masz pytania? Napisz do nas!",
        "contact.name": "Twoje imię",
        "contact.email": "Twój email",
        "contact.message": "Wiadomość",
        "contact.submit": "Wyślij",
        "footer.copyright": "© 2026 Multiverse. Wszelkie prawa zastrzeżone.",
        "alert.thanks": "Dziękujemy za wiadomość! Odpowiemy wkrótce."
    },
    en: {
        "nav.features": "Features",
        "nav.compare": "Compare",
        "nav.download": "Download",
        "nav.donate": "Donate",
        "nav.contact": "Contact",
        "nav.downloadBtn": "Download",
        "hero.title": "Share your voice with others",
        "hero.subtitle": "A gift from the creator. A simple program with no ads, no spying, easy to use. The best sound quality, solid code, and minimal resource usage.",
        "hero.downloadBtn": "Download free",
        "hero.featuresBtn": "See features",
        "hero.stat1": "Latency",
        "hero.stat2": "RAM",
        "hero.stat3": "CD quality",
        "features.title": "Why Multiverse?",
        "features.subtitle": "Built from scratch for performance and quality",
        "features.f1.title": "Ultra-low latency",
        "features.f1.text": "Under 20 ms of latency thanks to the UDP protocol and the Opus 1.6 codec. Perfect for competitive gaming.",
        "features.f2.title": "6x lighter than Discord",
        "features.f2.text": "Uses only ~20 MB of RAM. Zero background CPU load. More power left for your games.",
        "features.f3.title": "End-to-end encryption",
        "features.f3.text": "ChaCha20-Poly1305 — the same encryption used by Signal. Your conversations stay private.",
        "features.f4.title": "A server on every PC",
        "features.f4.text": "Anyone can host a server for up to 7 people. No clouds, no subscriptions, no limits.",
        "features.f5.title": "P2P mode",
        "features.f5.text": "Direct connections without a server. Works even on LAN with no internet.",
        "features.f6.title": "Clean speech, zero echo",
        "features.f6.text": "Noise reduction, echo cancellation and automatic gain keep your voice clean and clear in any situation.",
        "compare.title": "Comparison",
        "compare.col1": "Feature",
        "compare.r1": "RAM (client)",
        "compare.r2": "Latency",
        "compare.r3": "Open source",
        "compare.r4": "Self-hosted",
        "compare.r5": "Encryption",
        "compare.r6": "Price",
        "yes": "Yes",
        "no": "No",
        "free": "Free",
        "download.title": "Download Multiverse",
        "download.subtitle": "Free voice chat for Windows",
        "download.winBtn": "Download for Windows",
        "download.linuxBtn": "Linux — soon",
        "download.note": "Windows 10/11 · version 1.0.0 · standalone, no Python needed",
        "donate.title": "Support the project",
        "donate.subtitle": "Like Multiverse? Your donation keeps it going — no ads, no spying, for everyone.",
        "donate.btn": "Donate via PayPal",
        "contact.title": "Contact",
        "contact.subtitle": "Got questions? Write to us!",
        "contact.name": "Your name",
        "contact.email": "Your email",
        "contact.message": "Message",
        "contact.submit": "Send",
        "footer.copyright": "© 2026 Multiverse. All rights reserved.",
        "alert.thanks": "Thank you for your message! We will reply soon."
    }
};

let currentLang = localStorage.getItem("multiverse-lang") ||
    (navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "pl");

const langBtn = document.getElementById("lang-btn");

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("multiverse-lang", lang);
    document.documentElement.lang = lang;
    langBtn.textContent = lang === "pl" ? "EN" : "PL";
    langBtn.title = lang === "pl" ? "Switch to English" : "Przełącz na polski";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (I18N[lang][key]) {
            el.textContent = I18N[lang][key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (I18N[lang][key]) {
            el.setAttribute("placeholder", I18N[lang][key]);
        }
    });
    document.title = lang === "pl" ? "Multiverse — Dziel się głosem z innymi" : "Multiverse — Share your voice with others";
}

if (langBtn) {
    langBtn.addEventListener("click", () => {
        applyLanguage(currentLang === "pl" ? "en" : "pl");
    });
}
applyLanguage(currentLang);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.9)';
    }
});

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // TODO: Send to backend or email service
    alert(I18N[currentLang]["alert.thanks"]);
    form.reset();
}

// Animate stats on scroll
const stats = document.querySelectorAll('.stat');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'all 0.6s ease';
    observer.observe(stat);
});