import Botoes from "../AdmResponsavel/modelos/Botoes.js";
import Processar from "./Processar.js";

export default function Formulario(){
  const formulario = document.createElement('form');

  formulario.innerHTML = `
  <div class="row">
    <div class="col-md-auto col-12">
      <label for="formFileExport" class="col-form-label">Arquivo de exportação:</label>
    </div>
    <div class="col">
      <input class="form-control" type="file" id="formFileExport">
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-auto col-12">
      <label for="formFileImport" class="col-form-label">Arquivo de importação:</label>
    </div>
    <div class="col">
      <input class="form-control" type="file" id="formFileImport">
    </div>
  </div>
  <div class="col-12 mt-3">
    <button type="submit" class="btn btn-primary bg-gradient">Executar<i class="bi ms-2 bi-caret-right-fill"></i></button>
  </div>
`;

  const elemBotao = formulario.querySelector('button');

  const objBotao = new Botoes(elemBotao);

  formulario.onsubmit = Processar;

  return formulario;

}