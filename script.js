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

    const toolbar = document.querySelector('.directory-toolbar');
    const filters = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project-row');
    const projectCount = document.querySelector('.project-count');

    function filterProjects(category) {
        let visibleCount = 0;
        projects.forEach((project) => {
            const matches = category === 'all' || project.dataset.categories.split(' ').includes(category);
            project.hidden = !matches;
            if (matches) visibleCount++;
        });

        filters.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.filter === category));
        });
        projectCount.textContent = `${visibleCount} of ${projects.length} projects`;
    }

    filters.forEach((button) => {
        button.addEventListener('click', () => filterProjects(button.dataset.filter));
    });

    filterProjects('all');
    toolbar.hidden = false;
});
