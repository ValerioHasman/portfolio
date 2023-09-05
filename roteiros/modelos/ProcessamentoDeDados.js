import Formulario from "./ProcessamentoDeDados/Formulario.js";

export default function ProcessamentoDeDados(){
  const elemento = document.createElement('div');

  elemento.innerHTML = `
  <div class="bg-body" style="min-height: 100vh; min-height: 100dvh">
    <div class="container mt-5">
    </div>
  </div>
  `;

  elemento.querySelector(".container").insertAdjacentElement('beforeend', Formulario())

  return elemento.querySelector(".bg-body");
}