<button id="comprarBtn">Ir para Compras</button>
$(document).ready(function() {
    $('.carrossel').slick({
        dots: true,                // Exibe os pontos de navegação abaixo do carrossel
        infinite: true,            // O carrossel irá se mover infinitamente
        speed: 500,                // Velocidade da transição (em milissegundos)
        slidesToShow: 1,           // Exibe 1 imagem por vez
        slidesToScroll: 1,         // Número de slides para rolar de cada vez
        autoplay: true,            // O carrossel vai rodar automaticamente
        autoplaySpeed: 2000,       // Intervalo entre cada slide (em milissegundos)
        arrows: true,              // Exibe as setas de navegação
        responsive: [
            {
                breakpoint: 768,   // Para dispositivos menores que 768px (tablets e celulares)
                settings: {
                    slidesToShow: 1,  // Mostra apenas 1 imagem
                    slidesToScroll: 1
                }
            }
        ]
    });
});

<script>
    document.getElementById('comprarBtn').onclick = function() {
        window.location.href = 'compras.html'; // Altere para a URL correta
    };
</script>
const mouseFollower = document.getElementById('mouse-follower');

document.addEventListener('mousemove', (e) => {
  mouseFollower.style.top = `${e.clientY - 20}px`; // Desloca o círculo
  mouseFollower.style.left = `${e.clientX - 20}px`; // Desloca o círculo
});
document.addEventListener('mousemove', function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  
  document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
