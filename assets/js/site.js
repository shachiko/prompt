(function () {
  const STORAGE_KEY = "preferredLanguage";
  const DEFAULT_LANG = "en";
  const SUPPORTED_LANGS = ["en", "vi"];

  function normalizeLang(lang) {
    if (!lang) return DEFAULT_LANG;
    const value = String(lang).toLowerCase().trim();
    return SUPPORTED_LANGS.includes(value) ? value : DEFAULT_LANG;
  }

  function getSavedLang() {
    try {
      return normalizeLang(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return DEFAULT_LANG;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, normalizeLang(lang));
    } catch (error) {
      // Không làm gì nếu trình duyệt chặn localStorage
    }
  }

  function setHtmlLang(lang) {
    document.documentElement.setAttribute("lang", normalizeLang(lang));
  }

  function updateLanguageButtons(activeLang) {
    const selectors = [
      "[data-lang]",
      "[data-set-lang]",
      ".lang-switch button",
      ".language-switch button",
      ".language-toggle button",
      ".lang-toggle button",
      "#lang-en",
      "#lang-vi"
    ];

    const buttons = document.querySelectorAll(selectors.join(","));

    buttons.forEach((button) => {
      let buttonLang = null;

      if (button.dataset.lang) {
        buttonLang = button.dataset.lang;
      } else if (button.dataset.setLang) {
        buttonLang = button.dataset.setLang;
      } else if (button.id === "lang-en") {
        buttonLang = "en";
      } else if (button.id === "lang-vi") {
        buttonLang = "vi";
      } else {
        const text = button.textContent.toLowerCase();
        if (text.includes("en")) buttonLang = "en";
        if (text.includes("vi")) buttonLang = "vi";
      }

      if (!buttonLang) return;

      const isActive = normalizeLang(buttonLang) === activeLang;

      button.classList.toggle("active", isActive);
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyLanguage(lang) {
    const finalLang = normalizeLang(lang);
    setHtmlLang(finalLang);
    saveLang(finalLang);
    updateLanguageButtons(finalLang);
  }

  function bindLanguageButtons() {
    const selectors = [
      "[data-lang]",
      "[data-set-lang]",
      "#lang-en",
      "#lang-vi",
      ".lang-switch button",
      ".language-switch button",
      ".language-toggle button",
      ".lang-toggle button"
    ];

    const buttons = document.querySelectorAll(selectors.join(","));

    buttons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        let selectedLang = null;

        if (this.dataset.lang) {
          selectedLang = this.dataset.lang;
        } else if (this.dataset.setLang) {
          selectedLang = this.dataset.setLang;
        } else if (this.id === "lang-en") {
          selectedLang = "en";
        } else if (this.id === "lang-vi") {
          selectedLang = "vi";
        } else {
          const text = this.textContent.toLowerCase();
          if (text.includes("en")) selectedLang = "en";
          if (text.includes("vi")) selectedLang = "vi";
        }

        if (!selectedLang) return;
        applyLanguage(selectedLang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Mặc định luôn là tiếng Anh khi vào web lần đầu
    const initialLang = getSavedLang() || DEFAULT_LANG;
    applyLanguage(initialLang);
    bindLanguageButtons();
  });

  // Cho phép gọi từ HTML nếu cần: onclick="setSiteLanguage('vi')"
  window.setSiteLanguage = function (lang) {
    applyLanguage(lang);
  };
})();
