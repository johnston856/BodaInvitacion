document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('background-music');
    
    document.getElementById('play-music').addEventListener('click', function() {
      audio.play();
      this.style.display = 'none'; // Ocultar el botón después de iniciar la música
    });
  });