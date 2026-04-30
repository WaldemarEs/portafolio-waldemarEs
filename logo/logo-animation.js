// logo-animation.js
document.addEventListener("DOMContentLoaded", () => {
    const mainLogo = document.querySelector('.logo');

    if (mainLogo) {
        const runAnimation = () => {
            mainLogo.classList.remove('active');
            void mainLogo.offsetWidth; // Reinicio forzado de CSS
            mainLogo.classList.add('active');
        };

        // Se ejecuta medio segundo después de entrar a la web
        setTimeout(runAnimation, 500);

        // Si haces clic, se repite (opcional)
        mainLogo.addEventListener('click', runAnimation);
    }
});