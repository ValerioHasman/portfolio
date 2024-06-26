import Temas from "./Temas.js";

export default function BarraNavegacaoOff() {

  let barra = document.querySelector('nav');
  
  const bsOffcanvas = new bootstrap.Offcanvas(
    barra.querySelector('#offcanvasMenu')
  )

  window.addEventListener('hashchange', ()=>{
    setTimeout(() => {
      bsOffcanvas.hide();
    }, 1);
  });

  Temas(barra);
}
