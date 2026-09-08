document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    let savedTheme;
    try { savedTheme = localStorage.getItem('theme'); } catch (error) {}
    let chosenTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;

    function applyTheme(useDarkTheme) {
        document.documentElement.classList.toggle('light-theme', !useDarkTheme);
        themeOptions.forEach((option) => {
            option.setAttribute('aria-pressed', String(option.dataset.theme === (useDarkTheme ? 'dark' : 'light')));
        });
    }

    applyTheme(chosenTheme ? chosenTheme === 'dark' : prefersDark.matches);

    prefersDark.addEventListener('change', (event) => {
        if (!chosenTheme) applyTheme(event.matches);
    });

    themeOptions.forEach((option) => {
        option.addEventListener('click', () => {
            chosenTheme = option.dataset.theme;
            applyTheme(chosenTheme === 'dark');
            try { localStorage.setItem('theme', chosenTheme); } catch (error) {}
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
