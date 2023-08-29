export default function Portfolio(){

  const elemento = document.createElement('div');
  elemento.classList.add('container-xxl');

  fetch('https://valeriohasman.github.io/portfolio/Porta-Fólio.html',{
    method: 'GET',
  }).then(resp => resp.text())
  .then((data) => {
    elemento.innerHTML = data;
    elemento.innerHTML = elemento.querySelector(".container-xxl").innerHTML;
    for (const carousel of elemento.querySelectorAll('[data-bs-ride="carousel"]')) {
      bootstrap.Carousel.getOrCreateInstance(carousel);
    }
    elemento.insertAdjacentHTML('beforeend', `<div class="py-5 my-4"></div>`);
  }).catch(err=>{
    console.error(err);
  });

  return elemento;
}