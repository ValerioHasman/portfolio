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
      <input required class="form-control" type="file" id="formFileExport">
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-auto col-12">
      <label for="formFileImport" class="col-form-label">Arquivo de importação:</label>
    </div>
    <div class="col">
      <input required class="form-control" type="file" id="formFileImport">
    </div>
  </div>
  <div class="form-check mt-3">
    <input class="form-check-input" type="checkbox" name="radio" id="radio1">
    <label class="form-check-label user-select-none" for="radio1">
      Exibir em tabela.
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="radio" id="radio2" checked>
    <label class="form-check-label user-select-none" for="radio2">
      Baixar ao terminar.
    </label>
  </div>
  <div class="col-12 mt-3">
    <button type="submit" class="btn btn-primary bg-gradient">Executar<i class="bi ms-2 bi-caret-right-fill"></i></button>
  </div>
`;

  const elemBotao = formulario.querySelector('button');

  checkboxs(
    formulario.querySelector('#radio1'),
    formulario.querySelector('#radio2')
  );

  const objBotao = new Botoes(elemBotao);

  formulario.onsubmit = Processar;

  return formulario;

}

function checkboxs(check1, check2){
  check1.oninput = ()=>{ if(!check2.checked){ check1.checked = true } };
  check2.oninput = ()=>{ if(!check1.checked){ check2.checked = true } };
}