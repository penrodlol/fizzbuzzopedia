(() => {
  const persisted = localStorage.getItem('theme');
  const perfersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const doc = document.documentElement;

  if (persisted) return doc.setAttribute('data-theme', persisted);

  const theme = perfersDark.matches ? 'dark' : 'light';

  doc.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
})();
