import CSV from "../FormularioProcessamento/CSV.js";

export default function ArrayParaHTML(csvarray){

  if(csvarray.constructor !== CSV){
    throw new TypeError('Tipo CSV é esperado');
  }

  let tabela = `<table class="table table-sm table-bordered">`;

  csvarray.linhasColunas.forEach((linha, index)=>{
    if(index !== 0 && index !== 1){
      tabela += `<tr>`;
      linha.forEach((valor)=>{
        tabela += `<td>${valor}</td>`;
      });
      tabela += `</tr>`;
    } else if(index === 1) {
      tabela += `<tbody><tr>`;
      linha.forEach((valor)=>{
        tabela += `<td>${valor}</td>`;
      });
      tabela += `</tr>`;
    } else {
      tabela += `<thead><tr>`;
      linha.forEach((valor)=>{
        tabela += `<th scope="col">${valor}</th>`;
      });
      tabela += `</tr></thead>`;
    }
  });
  tabela += `</tbody></table>`;

  return tabela;

}