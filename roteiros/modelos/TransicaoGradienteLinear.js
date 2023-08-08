import * as bootstrap from 'bootstrap';

export default function TransicaoGradienteLinear(){

  const elemento = document.createElement('div');

  body();

  function body(){
    fetch('https://valeriohasman.github.io/LinearGradientTransition/Transi%C3%A7%C3%A3oLG.html',{
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
      scriptClass();
    });
  }

  function scriptClass(){
    fetch('https://valeriohasman.github.io/LinearGradientTransition/GradienteTransicao.js',{
      method: 'GET',
    }).then(resp => resp.text())
    .then((data) => {
      const script = document.createElement('script');
      script.innerHTML = data;
  
      elemento.insertAdjacentElement('beforeend', script);
      
    }).catch(err=>{
      console.error(err);
    }).finally(()=>{
      script();
    });
  }

  function script(){
    fetch('https://valeriohasman.github.io/LinearGradientTransition/GradLinear.js',{
      method: 'GET',
    }).then(resp => resp.text())
    .then((data) => {
      const script = document.createElement('script');
      let arrdata = data.split('\n');
      arrdata.pop(135);
      arrdata.pop(134);
      data = arrdata.join('\n');
      script.innerHTML = data;
      elemento.insertAdjacentElement('beforeend', script);
      const tooltipTriggerList = elemento.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }).catch(err=>{
      console.error(err);
    });
  }

  return elemento;
}