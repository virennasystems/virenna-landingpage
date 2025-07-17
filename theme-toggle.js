// theme-toggle.js

(function () {
  const storageKey = 'theme';
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const getPreferredTheme = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return darkQuery.matches ? 'dark' : 'light';
  };

  const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  };

  const toggleTheme = () => {
    const current = getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    updateToggleLabel(next);
  };

  const updateToggleLabel = theme => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Darkmode aktiviert' : 'Hellmodus aktiviert');
    btn.innerText = theme === 'dark' ? '☀️ Hell' : '🌙 Dunkel';
  };

  // Initial Setup
  document.addEventListener('DOMContentLoaded', () => {
    setTheme(getPreferredTheme());
    updateToggleLabel(getPreferredTheme());

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
})();
