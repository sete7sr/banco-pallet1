// A função será chamada quando o documento for carregado
document.addEventListener("DOMContentLoaded", function() {
    const overlayText = document.querySelector(".overlay-text");
    const bgImageOverlay = document.querySelector(".bg-image-overlay");

    // Função para verificar se a imagem está na tela
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Evento de scroll para mostrar o texto
    window.addEventListener("scroll", function() {
        if (isInViewport(bgImageOverlay)) {
            overlayText.style.opacity = "1";
        } else {
            overlayText.style.opacity = "0";
        }
    });
});
