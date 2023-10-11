import Formulario from "../../AdmResponsavel/modelos/Formulario.js";
import CSV from "../FormularioProcessamento/CSV.js";
import ArrayParaHTML from "./ArrayParaHTML.js";

export default function FormularioCSVHTML(){
  
  const formulario = document.createElement('div');
  formulario.classList.add('container-fluid');

  formulario.innerHTML = `
<form>
  <div class="row">
    <div class="col-md-auto col-12">
      <label for="arquivocsv" class="col-form-label">Arquivo CSV:</label>
    </div>
    <div class="col">
      <input required class="form-control" type="file" accept="text/csv" id="arquivocsv">
    </div>
  </div>
  <div class="col-12 mt-3">
    <button type="submit" class="btn btn-primary bg-gradient">Executar<i class="bi ms-2 bi-caret-right-fill"></i></button>
  </div>  
</form>
<div id="resposta" class="mt-5">
</div>
`;


  const despejo = formulario.querySelector('#resposta');

  formulario.onsubmit = (e)=>{
    const form = new Formulario(e);
    form.desabilitado = true;

    const arquivo = form.target[0].files[0];

    const array = new CSV();

    array.csvParaArray(arquivo)
    
    array.addEventListener('load', ()=>{
      form.desabilitado = false;
      despejo.innerHTML = ArrayParaHTML();
    });

  }
  

  return formulario;
}