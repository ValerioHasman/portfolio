import * as bootstrap from 'bootstrap';

export default function Portifolio(){

  const elemento = document.createElement('div');
  elemento.classList.add('container-xxl');
//https://valeriohasman.github.io/portfolio/Porta-Fólio.html
  fetch('http://localhost/PortaFolio/Porta-F%c3%b3lio.html',{
    method: 'GET',
  }).then(resp => resp.text())
  .then((data) => {
    elemento.innerHTML = data;
    elemento.innerHTML = elemento.querySelector(".container-xxl").innerHTML;

    for (const carousel of elemento.querySelectorAll('[data-bs-ride="carousel"]')) {
      bootstrap.Carousel.getOrCreateInstance(carousel);
    }
    
  }).catch(err=>{
    console.log(err);
  });

  return elemento;
}