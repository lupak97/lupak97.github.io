<button id="comprarBtn">Ir para Compras</button>

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
