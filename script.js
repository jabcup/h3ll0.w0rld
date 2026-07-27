document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');

            if (navLinks.classList.contains('open')) {
                navToggle.textContent = 'cerrar';
            } else {
                navToggle.textContent = 'menu';
            }
        });
    }
});
// Para que el la gestion sea auto en el footer
document.getElementById('year').textContent = new Date().getFullYear();