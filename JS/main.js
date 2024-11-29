let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function () {
  let desplazamientoActual = window.pageYOffset; //180
  if (ubicacionPrincipal >= desplazamientoActual) {
    // 200 > 180
    document.getElementsByTagName("nav")[0].style.top = "0px";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  ubicacionPrincipal = desplazamientoActual; //200
});

document.querySelectorAll('#icon').forEach(vid =>{
  vid.onclick = () =>{
      document.querySelector('.popup_video').style.display = 'block';
      document.querySelector('.popup_video video').src = vid.getAttribute('src');
  }
});
document.querySelector('.popup_video span').onclick = () =>{
  document.querySelector('.popup_video').style.display = 'none';
}

let currentSlide = 1;
const totalSlides = 4;

function changeSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById('slide' + currentSlide).checked = true;
}

setInterval(changeSlide, 3000); // Cambia cada 3 segundos