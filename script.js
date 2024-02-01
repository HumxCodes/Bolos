document.addEventListener('DOMContentLoaded', function() {
// Seleciona o elemento HTML com a classe "carousel" e os elementos com a classe "slide"
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");
  const slidesToShow = 2; // Define quantos slides são mostrados de cada vez
  let currentSlide = 0; // Controla o índice do slide atual

  // Função para avançar para o próximo conjunto de slides
  function nextSlide() {
    // Calcula o novo índice do slide com base no número de slides visíveis
    currentSlide = (currentSlide + slidesToShow) % (slides.length - slidesToShow + 1);
    updateCarousel(); // Atualiza o carrossel com o novo conjunto de slides
  }

  // Função para atualizar a exibição do carrossel
  function updateCarousel() {
    // Calcula a largura de cada slide com base no número de slides visíveis
    const slideWidth = 100 / slidesToShow;
    // Move o carrossel para a posição do novo conjunto de slides
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  }

  // Define um intervalo para chamar a função "nextSlide" a cada 3 segundos, criando a animação do carrossel
  setInterval(nextSlide, 3000);
  });