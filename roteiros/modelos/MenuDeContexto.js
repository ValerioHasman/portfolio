import * as bootstrap from 'bootstrap';

export default function MenuDeContexto(){

  const elemento = document.createElement('div');

  body();

  function body(){
    fetch('https://valeriohasman.github.io/MenuContexto/contexto.html',{
      method: 'GET',
    }).then(resp => resp.text())
    .then((data) => {
      const pagina = document.createElement('div');
      pagina.innerHTML = data;
      elemento.insertAdjacentElement('beforeend', pagina.querySelector("style"));
      elemento.insertAdjacentElement('beforeend', pagina.querySelector(".container"));
    }).catch(err=>{
      console.error(err);
    }).finally(()=>{
      script();
    });
  }

  function script(){
    fetch('https://valeriohasman.github.io/MenuContexto/MenuContexto.js',{
      method: 'GET',
    }).then(resp => resp.text())
    .then((data) => {
      const script = document.createElement('script');
      script.innerHTML = data;
      elemento.insertAdjacentElement('beforeend', script);
    }).catch(err=>{
      console.error(err);
    }).finally(()=>{
      script2();
    });
  }

  function script2(){
    fetch('https://valeriohasman.github.io/MenuContexto/contexto.js',{
      method: 'GET',
    }).then(resp => resp.text())
    .then((data) => {
      const script = document.createElement('script');
      script.innerHTML = data;
      elemento.insertAdjacentElement('beforeend', script);
      elemento.insertAdjacentHTML('beforeend', `<div class="py-5 my-4"></div>`);
    }).catch(err=>{
      console.error(err);
    });
  }

  return elemento;

}