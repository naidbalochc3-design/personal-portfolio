// Theme Toggle (Dark / Light Mode)
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');

// Show the profile photo when the image file is available.
const profilePhoto = document.getElementById('profile-photo');
const profileImage = document.getElementById('profile-image');

profileImage.addEventListener('load', () => profilePhoto.classList.add('has-image'));
profileImage.addEventListener('error', () => profilePhoto.classList.remove('has-image'));
if (profileImage.complete && profileImage.naturalWidth > 0) {
    profilePhoto.classList.add('has-image');
}

themeBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
});

// Mobile Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu on link click
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.querySelector('i').className = 'fas fa-bars';
    });
});

// Modal Logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        modalTitle.innerText = card.querySelector('h3').innerText;
        modalDesc.innerText = card.querySelector('p').innerText + "\n\n[Yahan aap is project ki mazeed tafseel ya GitHub ki link daal sakte hain.]";
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});