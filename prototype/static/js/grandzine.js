const lightModeBtn = document.querySelector(`[data-set-theme='light']`);
const darkModeBtn = document.querySelector(`[data-set-theme='dark']`);
const html = document.documentElement;

const setTheme = (theme) => {
    // Clear all custom classes and attributes
    document.documentElement.removeAttribute('data-theme');

    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    }

    localStorage.setItem('theme', theme);
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    }
};

// Event listeners for theme buttons
lightModeBtn.addEventListener('click', () => setTheme('light'));
darkModeBtn.addEventListener('click', () => setTheme('dark'));

// Load the theme when the page loads
loadTheme();