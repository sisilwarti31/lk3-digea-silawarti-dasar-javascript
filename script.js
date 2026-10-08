const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

// Buka/tutup menu saat hamburger diklik
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Tutup menu otomatis saat salah satu link diklik
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});