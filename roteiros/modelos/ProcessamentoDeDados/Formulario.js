import Botoes from "../AdmResponsavel/modelos/Botoes.js";
import Processar from "./Processar.js";

export default function Formulario(){
  const formulario = document.createElement('form');

  formulario.innerHTML = `
  <div class="row">
    <label for="formFileExport" class="col-form-label col-12 col-md-auto">Arquivo de exportação:</label>
    <input class="form-control col" type="file" id="formFileExport">
  </div>
  <div class="row mt-3">
    <label for="formFileImport" class="col-form-label col-12 col-md-auto">Arquivo de importação:</label>
    <input class="form-control col" type="file" id="formFileImport">
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