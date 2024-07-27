document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el video
    const video = document.getElementById('faq-video');
    
    // Crea un observador de intersección
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agrega la clase visible cuando el video entra en el viewport
                video.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Cambia esto para ajustar el porcentaje del video visible antes de aplicar la animación
    });

    // Observa el video
    observer.observe(video);
});

