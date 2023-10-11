import Formulario from "./ProcessamentoDeDados/Formulario.js";

export default function ProcessamentoDeDados(){
  const elemento = document.createElement('div');
  elemento.classList.add("bg-body", "pt-5");
  elemento.setAttribute("style", "min-height: 100vh; min-height: 100dvh");
  elemento.insertAdjacentElement('beforeend', Formulario())

  return elemento;
}