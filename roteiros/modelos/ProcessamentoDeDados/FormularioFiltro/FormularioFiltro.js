import Formulario from "../../AdmResponsavel/modelos/Formulario.js";
import ArrayParaHTML from "../FormularioCSVHTML/ArrayParaHTML.js";
import CSV from "../FormularioProcessamento/CSV.js";
import OpcoesFiltro from "./OpcoesFiltro.js";

export default function FormularioFiltro(){

  const formulario = document.createElement('div');
  formulario.classList.add('container-fluid');

  formulario.innerHTML = `
<form>
  <div class="row">
    <div class="col-md-auto col-12">
      <label for="filtrarcsv" class="col-form-label">Arquivo CSV:</label>
    </div>
    <div class="col">
      <input required class="form-control" type="file" accept=".csv" id="filtrarcsv" />
    </div>
  </div>
  <div class="form-check mt-3">
    <input class="form-check-input" type="checkbox" id="radio3" checked>
    <label class="form-check-label user-select-none" for="radio3">
      Exibir em tabela.
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="radio4">
    <label class="form-check-label user-select-none" for="radio4">
      Baixar ao terminar.
    </label>
  </div>
  <div class="col-12 mt-3">
    <button type="submit" class="btn btn-primary bg-gradient">Filtrar<i class="bi ms-2 bi-caret-right-fill"></i></button>
  </div>  
</form>
<div id="filtros" class="mt-5">
</div>
`;

  checkboxs(
    formulario.querySelector('#radio3'),
    formulario.querySelector('#radio4')
  );

  const despejo = formulario.querySelector('#filtros');

  formulario.onsubmit = (e)=>{
    const form = new Formulario(e);
    form.desabilitado = true;

    const arquivo = form.target[0].files[0];
    const exibir = form.target[1].checked;
    const baixar = form.target[2].checked;

    const arrayCsv = new CSV();

    arrayCsv.csvParaArray(arquivo);

    arrayCsv.addEventListener('load', ()=>{

      if(baixar){

      }
      if(exibir){


        const opcoes = new OpcoesFiltro();

        despejo.appendChild(opcoes.opcoes(arrayCsv.linhasColunas));
      }
      form.desabilitado = false;

    });
  }

  return formulario;
}

function checkboxs(check1, check2){
  check1.oninput = ()=>{ if(!check2.checked){ check1.checked = true } };
  check2.oninput = ()=>{ if(!check1.checked){ check2.checked = true } };
}
