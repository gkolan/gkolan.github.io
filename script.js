document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(useDarkTheme) {
        document.body.classList.toggle('light-theme', !useDarkTheme);
        themeToggle.textContent = useDarkTheme ? '☽' : '☼';
        themeToggle.setAttribute('aria-label', useDarkTheme ? 'Switch to light theme' : 'Switch to dark theme');
        themeToggle.title = useDarkTheme ? 'Switch to light theme' : 'Switch to dark theme';
    }

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark.matches);

    prefersDark.addEventListener('change', (event) => {
        if (!localStorage.getItem('theme')) applyTheme(event.matches);
    });

    themeToggle.addEventListener('click', () => {
        const useDarkTheme = document.body.classList.contains('light-theme');
        applyTheme(useDarkTheme);
        localStorage.setItem('theme', useDarkTheme ? 'dark' : 'light');
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
