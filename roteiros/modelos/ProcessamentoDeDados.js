import FormularioProcessamento from "./ProcessamentoDeDados/FormularioProcessamento/FormularioProcessamento.js";
import FormularioCSVHTML from "./ProcessamentoDeDados/FormularioCSVHTML/FormularioCSVHTML.js";
import FormularioFiltro from "./ProcessamentoDeDados/FormularioFiltro/FormularioFiltro.js";

export default function ProcessamentoDeDados(){
  const elemento = document.createElement('div');
  elemento.classList.add("bg-body", "pt-1", "container-fluid");
  elemento.setAttribute("style", "min-height: 100vh; min-height: 100dvh");

  elemento.innerHTML = `
<nav>
  <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-lercsv-tab" data-bs-toggle="tab" data-bs-target="#nav-lercsv" type="button" role="tab" aria-controls="nav-lercsv" aria-selected="true">Ler CSV</button>
    <button class="nav-link" id="nav-filtro-resume-tab" data-bs-toggle="tab" data-bs-target="#nav-filtro-resume" type="button" role="tab" aria-controls="nav-filtro-resume" aria-selected="false">Filtrar Dados do CSV</button>
    <button class="nav-link" id="nav-processamento-tab" data-bs-toggle="tab" data-bs-target="#nav-processamento" type="button" role="tab" aria-controls="nav-processamento" aria-selected="false">Processamento de dados</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-lercsv" role="tabpanel" aria-labelledby="nav-lercsv-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="nav-filtro-resume" role="tabpanel" aria-labelledby="nav-filtro-resume-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="nav-processamento" role="tabpanel" aria-labelledby="nav-processamento-tab" tabindex="0"></div>
</div>
`;

  elemento.querySelector('#nav-lercsv').insertAdjacentElement('beforeend', FormularioCSVHTML());
  elemento.querySelector('#nav-filtro-resume').insertAdjacentElement('beforeend', FormularioFiltro());
  elemento.querySelector('#nav-processamento').insertAdjacentElement('beforeend', FormularioProcessamento());

  return elemento;
}