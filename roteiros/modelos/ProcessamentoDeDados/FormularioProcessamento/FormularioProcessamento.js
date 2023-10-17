import Processar from "./Processar.js";

export default function FormularioProcessamento(){

  const formulario = document.createElement('div');
  formulario.classList.add('container-fluid');

  formulario.innerHTML = `
  <form>
    <div class="row">
      <div class="col-md-auto col-12">
        <label for="formFileExport" class="col-form-label">Arquivo de exportação:</label>
      </div>
      <div class="col">
        <input required class="form-control" type="file" accept="text/csv" id="formFileExport">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-auto col-12">
        <label for="formFileImport" class="col-form-label">Arquivo de importação:</label>
      </div>
      <div class="col">
        <input required class="form-control" type="file" accept="text/csv" id="formFileImport">
      </div>
    </div>
    <div class="form-check mt-3">
      <input class="form-check-input" type="checkbox" id="radio1" checked>
      <label class="form-check-label user-select-none" for="radio1">
        Exibir em tabela.
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="radio2">
      <label class="form-check-label user-select-none" for="radio2">
        Baixar ao terminar.
      </label>
    </div>
    <div class="col-12 mt-3">
      <button type="submit" class="btn btn-primary bg-gradient">Executar<i class="bi ms-2 bi-caret-right-fill"></i></button>
    </div>
  </form>
  <div id="resultados" class="mt-5">
  </div>
`;

  checkboxs(
    formulario.querySelector('#radio1'),
    formulario.querySelector('#radio2')
  );

  const despejo = new Saida(formulario.querySelector('#resultados'));

  formulario.onsubmit = (e)=>{ Processar(e, despejo) };

  return formulario;

}

function checkboxs(check1, check2){
  check1.oninput = ()=>{ if(!check2.checked){ check1.checked = true } };
  check2.oninput = ()=>{ if(!check1.checked){ check2.checked = true } };
}

class Saida{

  #despejo;

  constructor(resultados){
    this.#despejo = resultados;
  }

  insertHtmlElement(valor = ''){
    this.#despejo.innerHTML = '';

    if (typeof valor == typeof '') {
      this.#despejo.innerHTML = valor;
    }
    if ( valor instanceof Element ) {
      this.#despejo.insertAdjacentElement('beforeend', valor);
    }

  }

}