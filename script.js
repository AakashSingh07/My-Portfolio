// Initialize typed.js
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Creator'],
    typeSpeed: 50,
    loop: true
});

// Theme toggle functionality
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

   