document.addEventListener("DOMContentLoaded", function () {
    const serviceTitles = document.querySelectorAll('.service-title');

    serviceTitles.forEach((title) => {
        title.addEventListener('click', () => {
            const desc = title.nextElementSibling;

            // Fecha todos os outros
            document.querySelectorAll('.service-desc').forEach(el => {
                if (el !== desc) el.classList.remove('open');
            });

            // Toggle a classe 'open' no clicado
            desc.classList.toggle('open');
        });
    });
});