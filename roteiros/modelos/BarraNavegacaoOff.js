import Temas from "./Temas.js";

export default class BarraNavegacaoOff{
  
  #barra;
  #rootnav;

  constructor(){

    this.#barra = document.querySelector('nav');

    const bsOffcanvas = new bootstrap.Offcanvas(
      this.#barra.querySelector('#offcanvasMenu')
    )

    window.addEventListener('hashchange', ()=>{
      setTimeout(() => {
        bsOffcanvas.hide();
      }, 1);
    });

    this.#rootnav = document.querySelector('#root');

    Temas(this.#barra);
  }
  
  get rootnav(){
    return this.#rootnav;
  }

  get barra(){
    return this.#barra;
  }

}