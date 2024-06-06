import Saudacao from "https://valeriohasman.github.io/TI/roteiro/uteis/Saudacao.js"

export default function Portfolio(){

  const elemento = document.createElement('div');
  elemento.classList.add('container-xxl');

  fetch('./index.html',{
    method: 'GET',
  }).then(resp => resp.text())
  .then((data) => {
    elemento.innerHTML = data;
    elemento.innerHTML = elemento.querySelector(".container-xxl").innerHTML;
    elemento.querySelector("#saudacao").textContent = `Olá, ${ Saudacao.saudar() }, sou o Valério`;
    for (const carousel of elemento.querySelectorAll('[data-bs-ride="carousel"]')) {
      bootstrap.Carousel.getOrCreateInstance(carousel);
    }
  }).catch(err=>{
    console.error(err);
  });

  return elemento;
}