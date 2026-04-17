function saibaMais() {
    window.open("https://faculdadesaovicente.edu.br", "_blank");
}

// animação geral ao rolar
window.addEventListener("scroll", () => {

    // CARDS
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
        }
    });

    // SOBRE
    const container = document.querySelector(".sobre .container");

    if (container) {
        const top = container.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
        } else {
            container.style.opacity = "0";
            container.style.transform = "translateY(30px)";
        }
    }
});

// dispara a animação ao carregar a página
window.dispatchEvent(new Event("scroll"));