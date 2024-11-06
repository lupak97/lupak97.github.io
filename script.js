$(document).ready(function() {
    // Inicialização do Carrossel com Slick
    $('.carrossel').slick({
        dots: true, // Mostra os pontos de navegação
        infinite: true, // O carrossel nunca vai parar
        speed: 500, // A velocidade de transição entre as imagens
        slidesToShow: 1, // Exibe 1 slide por vez
        slidesToScroll: 1, // Desliza 1 imagem por vez
        autoplay: true, // Ativa a reprodução automática
        autoplaySpeed: 2000, // Intervalo entre as transições (2 segundos)
        arrows: true, // Adiciona setas para navegação
        adaptiveHeight: true, // Ajusta a altura do carrossel conforme o conteúdo
        pauseOnHover: true, // Pausa a reprodução automática ao passar o mouse
        draggable: true, // Permite arrastar para trocar as imagens
        fade: false, // Desativa o efeito fade (deslize entre as imagens)
        prevArrow: '<button type="button" class="slick-prev">←</button>', // Customiza a seta anterior
        nextArrow: '<button type="button" class="slick-next">→</button>' // Customiza a seta seguinte
    });

    // Efeito de hover no botão de navegação
    $('nav a').hover(
        function() {
            $(this).css('background-color', '#575757'); // Efeito de hover
        },
        function() {
            $(this).css('background-color', ''); // Remove a cor ao tirar o mouse
        }
    );

    // Suaviza o scroll ao clicar nos links de navegação (para navegação dentro da página)
    $('nav a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href'); // Pega o id do link clicado
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // Ajusta para um pequeno espaço acima da seção
        }, 800); // Duração da animação em milissegundos
    });

    // Animação suave de carregamento
    $('body').css('display', 'none'); // Esconde o conteúdo enquanto carrega
    $('body').fadeIn(2000); // Aparece com um efeito fade-in de 2 segundos

    // Efeito de parallax no scroll (opcional e apenas visual)
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop(); // Posição atual do scroll
        $('.hero').css('background-position', 'center ' + (scrollPos * 0.5) + 'px'); // Cria o efeito parallax
    });

    // Interação no botão da seção de contato (exemplo de pop-up)
    $('#contato a').click(function(e) {
        e.preventDefault();
        alert('Entre em contato pelo email: contato@exemplo.com');
    });
});
