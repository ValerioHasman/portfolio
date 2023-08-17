import AdmRoot from "./AdmResponsavel/AdmRoot.js";

export default function AdmResponsavel(){
  const elemento = document.createElement('div');
  elemento.style.minHeight = '100vh';
  elemento.classList.add('bg-body');
  elemento.insertAdjacentHTML('beforeend',`
<style>
.filho .nome {
  text-indent: 1ch;
}
</style>
<div class="py-2 container-fluid">
  <div class="row">
    <div class="px-1 col-auto">
      <button id="voltar" type="button" class="btn btn-auto rounded-5 "><i class="bi bi-arrow-left"></i></button>
    </div>
    <div class="px-0 col-auto">
      <button id="configuracao" type="button" class="btn btn-auto rounded-5 "><i class="bi bi-gear-fill"></i></button>
    </div>
    <div class="px-2 col d-grid gap-2">
      <button id="gravarObj" type="button" class="btn btn-warning bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Gravar dados"><i class="bi bi-upload"></i></button>
    </div>
    <div class="px-2 col d-grid gap-2">
      <button id="ler" type="button" class="btn btn-success bg-gradient" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Carregar dados"><i class="bi bi-download"></i></button>
    </div>
    <div class="px-2 col-auto col-sm-6 col-md-7 col-lg-8">
      <a target="_blank" class="btn btn-link" href="https://github.com/ValerioHasman/TurimRTE" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="GitHub Do projeto"><i class="bi bi-github"></i></a>
    </div>
  </div>  
  <form id="formulario" class="row mt-2">
    <div class="px-2 col-auto"><label class="col-form-label" for="nomeNovo">Nome:</label></div>
    <div class="px-2 col col-md-8 col-lg-5">
      <input required class="form-control" type="text" id="nomeNovo" />
    </div>
    <div class="px-2 col-auto"><button class="btn btn-primary bg-gradient px-sm-5" type="submit" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Inserir responsável"><i class="bi bi-plus-lg"></i></button></div>
  </form>
</div>
<div class="container-fluid">
  <div class="row">
    <div class="col-md">
        <table class="table table-sm align-middle table-borderless" id="tabela">
        <thead>
          <tr>
            <th colspan="2" scope="col">Pessoas</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="col">
      <textarea readonly id="json" class="form-control font-monospace" rows="20"></textarea>
    </div>
  </div>
</div>
  `);

  AdmRoot(elemento);

  return elemento;
}