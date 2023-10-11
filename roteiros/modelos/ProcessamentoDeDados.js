import FormularioProcessamento from "./ProcessamentoDeDados/FormularioProcessamento/FormularioProcessamento.js";
import FormularioCSVHTML from "./ProcessamentoDeDados/FormularioCSVHTML/FormularioCSVHTML.js";

export default function ProcessamentoDeDados(){
  const elemento = document.createElement('div');
  elemento.classList.add("bg-body", "pt-1", "container-fluid");
  elemento.setAttribute("style", "min-height: 100vh; min-height: 100dvh");

  elemento.innerHTML = `
<nav>
  <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-lercsv-tab" data-bs-toggle="tab" data-bs-target="#nav-lercsv" type="button" role="tab" aria-controls="nav-lercsv" aria-selected="true">Ler CSV</button>
    <button class="nav-link" id="nav-processamento-tab" data-bs-toggle="tab" data-bs-target="#nav-processamento" type="button" role="tab" aria-controls="nav-processamento" aria-selected="false">Processamento de dados</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-lercsv" role="tabpanel" aria-labelledby="nav-lercsv-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="nav-processamento" role="tabpanel" aria-labelledby="nav-processamento-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
`;

  elemento.querySelector('#nav-lercsv').insertAdjacentElement('beforeend', FormularioCSVHTML());
  elemento.querySelector('#nav-processamento').insertAdjacentElement('beforeend', FormularioProcessamento());

  return elemento;
}