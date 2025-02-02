// Check for saved theme preference, otherwise use system default
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = localStorage.getItem('theme');

// Set initial theme
if (storedTheme === 'dark' || (!storedTheme && prefersDark.matches)) {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').checked = true;
}

// Toggle theme
document.getElementById('theme-toggle').addEventListener('change', function(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}); 