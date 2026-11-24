document.addEventListener("DOMContentLoaded", () => {

  // Atualiza o ano automaticamente
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Animações suaves ao rolar a página
  const elements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // Vídeo principal
  const video = document.getElementById("heroVideo");

  if (video) {
    video.addEventListener("error", () => {
      console.warn("No se pudo cargar el video principal.");
    });
  }

});