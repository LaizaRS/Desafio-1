var virado = document.getElementsByClassName('virado');
var menor = document.getElementsByClassName('menor');

function setScreenSize() {
  if (window.innerWidth >= 900) {
    for (var i = 0; i < virado.length; i++) {
      virado[i].classList.remove('virado');
    }
    for (var i = 0; i < menor.length; i++) {
      menor[i].classList.remove('menor');
    }
  } else if (window.innerWidth >= 700) {
    for (var i = 0; i < virado.length; i++) {
      virado[i].classList.remove('virado');
    }
    for (var i = 0; i < menor.length; i++) {
      menor[i].classList.add('menor');
    }
  } else if (window.innerWidth > 500) {
    for (var i = 0; i < virado.length; i++) {
      virado[i].classList.add('virado');
    }
    for (var i = 0; i < menor.length; i++) {
      menor[i].classList.remove('menor');
    }
  }
}

// Chame a função quando a página for carregada e quando a janela for redimensionada
window.addEventListener('load', setScreenSize);
window.addEventListener('resize', setScreenSize);