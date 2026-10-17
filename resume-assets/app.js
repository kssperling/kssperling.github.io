const languageButton = document.getElementById('language');
let language = 'en';
try { language = localStorage.getItem('portfolio-language') === 'ru' ? 'ru' : 'en'; } catch {}
function setLanguage(nextLanguage) {
 language = nextLanguage;
 document.documentElement.lang = language;
 document.querySelectorAll('[data-en][data-ru]').forEach(element => { element.textContent = element.dataset[language]; });
 languageButton.textContent = language === 'en' ? 'Русский' : 'English';
 languageButton.setAttribute('aria-label', language === 'en' ? 'Переключить на русский' : 'Switch to English');
 document.title = language === 'en' ? 'Ksenia Shperling — Developer Portfolio' : 'Ксения Шперлинг — Портфолио разработчика';
 try { localStorage.setItem('portfolio-language', language); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'ru' : 'en'));
setLanguage(language);
