// Dark & Light Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// Dark mode is the default; restore light mode only if the visitor selected it.
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.add('fa-moon');
    themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
} else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Icon Change Logic
    if (!body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        localStorage.setItem('theme', 'light');
    }
});

// View Details Buttons interaction
const viewButtons = document.querySelectorAll('.view-btn');
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("This project is currently live on my GitHub repository!");
    });
});

// Compose a message in the visitor's email app.
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const senderEmail = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    const body = `${message}\n\nFrom: ${name}\nEmail: ${senderEmail}`;
    const mailto = `mailto:engrmrzaid007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});