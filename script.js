document.addEventListener("DOMContentLoaded", function () {
    // Muestra u oculta el botón según la posición del scroll
    window.onscroll = function () {
        showScrollButton();
    };
});

function showScrollButton() {
    var scrollButton = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}