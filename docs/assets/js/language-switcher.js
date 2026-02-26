document.addEventListener("DOMContentLoaded", () => {
  const enLink = document.querySelector('a[hreflang="en"]');
  const esLink = document.querySelector('a[hreflang="es"]');

  if (!enLink || !esLink) return;

  const container = document.createElement("div");
  container.className = "lang-switcher";

  const currentLang = (document.documentElement.lang || "en").toLowerCase();

  const makeButton = (label, href, langCode) => {
    const a = document.createElement("a");
    a.className = "lang-switcher__btn";
    if (currentLang.startsWith(langCode)) {
      a.classList.add("lang-switcher__btn--active");
    }
    a.href = href;
    a.setAttribute("lang", langCode);
    a.textContent = label;
    return a;
  };

  container.appendChild(makeButton("EN", enLink.getAttribute("href"), "en"));
  container.appendChild(makeButton("ES", esLink.getAttribute("href"), "es"));

  document.body.appendChild(container);
});
