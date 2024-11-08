// Código para o carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Configura o intervalo para o carrossel
setInterval(moveToNextSlide, 3000); // Troca de slide a cada 3 segundos
