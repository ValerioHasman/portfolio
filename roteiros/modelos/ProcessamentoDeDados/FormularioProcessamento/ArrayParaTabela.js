import JuntarPorUF from "./JuntarPorUF.js";

export default class ArrayParaTabela{

  juntadoPorUF;

  constructor(juntadoPorUF){

    if (juntadoPorUF.constructor !== JuntarPorUF) {
      throw new TypeError('Argumento JuntarPorUF é esperado');
    }

    this.juntadoPorUF = juntadoPorUF;

  }

  tabelasEmAcondeoes(){
    let strTabela = '';
    
    Object.keys(this.juntadoPorUF.array).forEach((uf) => {
  
      strTabela += `
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${uf}" aria-expanded="true" aria-controls="collapse${uf}">
              ${uf}
            </button>
          </h2>
          <div id="collapse${uf}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body table-responsive p-0">
              ${this.tabelaUf(uf)}
            </div>
          </div>
        </div>
      </div>
      `
    });

    return strTabela;

  }

  tabelaUf(uf){

    let htmltabela = `
    <table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th scope="col">NCM</th>
          <th scope="col">Exp_jan</th>
          <th scope="col">Imp_jan</th>
          <th scope="col">Net_jan</th>
          <th scope="col">Exp_fev</th>
          <th scope="col">Imp_fev</th>
          <th scope="col">Net_fev</th>
          <th scope="col">Exp_mar</th>
          <th scope="col">Imp_mar</th>
          <th scope="col">Net_mar</th>
          <th scope="col">Exp_abr</th>
          <th scope="col">Imp_abr</th>
          <th scope="col">Net_abr</th>
          <th scope="col">Exp_mai</th>
          <th scope="col">Imp_mai</th>
          <th scope="col">Net_mai</th>
          <th scope="col">Exp_jun</th>
          <th scope="col">Imp_jun</th>
          <th scope="col">Net_jun</th>
          <th scope="col">Exp_jul</th>
          <th scope="col">Imp_jul</th>
          <th scope="col">Net_jul</th>
          <th scope="col">Exp_ago</th>
          <th scope="col">Imp_ago</th>
          <th scope="col">Net_ago</th>
          <th scope="col">Exp_set</th>
          <th scope="col">Imp_set</th>
          <th scope="col">Net_set</th>
          <th scope="col">Exp_out</th>
          <th scope="col">Imp_out</th>
          <th scope="col">Net_out</th>
          <th scope="col">Exp_nov</th>
          <th scope="col">Imp_nov</th>
          <th scope="col">Net_nov</th>
          <th scope="col">Exp_dez</th>
          <th scope="col">Imp_dez</th>
          <th scope="col">Net_dez</th>
          <th scope="col">Exp_${this.juntadoPorUF.ano}</th>
          <th scope="col">Imp_${this.juntadoPorUF.ano}</th>
          <th scope="col">Net_${this.juntadoPorUF.ano}</th>
        </tr>
      </thead>
      <tbody>
    `;
  
    this.juntadoPorUF.array[uf].forEach((ncm) => {
      htmltabela += `
          <tr>
            <th scope="row">${ncm['NCM']}</th>
            <td>${ncm['Exp_jan']}</td>
            <td>${ncm['Imp_jan']}</td>
            <td>${ncm['Net_jan']}</td>
            <td>${ncm['Exp_fev']}</td>
            <td>${ncm['Imp_fev']}</td>
            <td>${ncm['Net_fev']}</td>
            <td>${ncm['Exp_mar']}</td>
            <td>${ncm['Imp_mar']}</td>
            <td>${ncm['Net_mar']}</td>
            <td>${ncm['Exp_abr']}</td>
            <td>${ncm['Imp_abr']}</td>
            <td>${ncm['Net_abr']}</td>
            <td>${ncm['Exp_mai']}</td>
            <td>${ncm['Imp_mai']}</td>
            <td>${ncm['Net_mai']}</td>
            <td>${ncm['Exp_jun']}</td>
            <td>${ncm['Imp_jun']}</td>
            <td>${ncm['Net_jun']}</td>
            <td>${ncm['Exp_jul']}</td>
            <td>${ncm['Imp_jul']}</td>
            <td>${ncm['Net_jul']}</td>
            <td>${ncm['Exp_ago']}</td>
            <td>${ncm['Imp_ago']}</td>
            <td>${ncm['Net_ago']}</td>
            <td>${ncm['Exp_set']}</td>
            <td>${ncm['Imp_set']}</td>
            <td>${ncm['Net_set']}</td>
            <td>${ncm['Exp_out']}</td>
            <td>${ncm['Imp_out']}</td>
            <td>${ncm['Net_out']}</td>
            <td>${ncm['Exp_nov']}</td>
            <td>${ncm['Imp_nov']}</td>
            <td>${ncm['Net_nov']}</td>
            <td>${ncm['Exp_dez']}</td>
            <td>${ncm['Imp_dez']}</td>
            <td>${ncm['Net_dez']}</td>
            <td>${ncm[`Exp_${this.juntadoPorUF.ano}`]}</td>
            <td>${ncm[`Imp_${this.juntadoPorUF.ano}`]}</td>
            <td>${ncm[`Net_${this.juntadoPorUF.ano}`]}</td>
          </tr>
    `;
    });

    htmltabela += `
        </tbody>
      </table>
    `;

    return htmltabela;
  }

}