import Baixar from "../../../utilitarios/Baixar.js";
import Formulario from "../../AdmResponsavel/modelos/Formulario.js";
import Agrupar from "./Agrupar.js";

export default class OpcoesFiltro {

  /**
   * @type {array}
   */
  #arrayAgrupado = Array();
  static #naoAgrupar = 'Não agrupar';

  get arrayAgrupado(){
    return this.#arrayAgrupado;
  }

  opcoes(arrayCsv = Array(Array())) {
    if (typeof arrayCsv !== typeof [] || typeof arrayCsv[0] !== typeof []) {
      throw new TypeError('Tipo esperado é Array de Array');
    }

    const agrupados = [];

    this.#arrayAgrupado.push(arrayCsv[0]);

    arrayCsv.forEach((valorLinha, indexLinha) => {
      if (indexLinha != 0) {
        valorLinha.forEach((valorColuna, indexColuna) => {
          if (!(agrupados[indexColuna] instanceof Agrupar)) {
            agrupados[indexColuna] = new Agrupar();
          }
          agrupados[indexColuna].adiciona(valorColuna);
        });
      }
    });

    const form = document.createElement('form');
    form.classList.add('row');

    form.insertAdjacentHTML('beforeend', '<p class="h4">Agrupar por:</p>');

    agrupados.forEach((coluna, index)=>{
      form.appendChild( OpcoesFiltro.selectHTML(coluna.arrayAgrupado, arrayCsv[0][index]) );
    });

    const input = document.createElement('input');
    input.classList.add('form-control', 'mt-3');
    input.placeholder = 'Nome do arquivo';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'mt-3');
    button.innerText = 'Reduzir';
    button.type = 'submit';

    form.appendChild(input);
    form.appendChild(button);

    form.onsubmit = (e)=>{

      this.#arrayAgrupado.splice(1, this.#arrayAgrupado.length);

      const formAgrupa = new Formulario(e);
      formAgrupa.desabilitado = true;

      formAgrupa.target.forEach((select, index)=>{
        if(select.tagName === 'SELECT'){
          if(select.selectedOptions[0].value !== OpcoesFiltro.#naoAgrupar){
            arrayCsv.forEach((linha)=>{
              if(linha[index] === select.value){
                if (!Agrupar.valorExiste( this.#arrayAgrupado, linha)){
                  this.#arrayAgrupado.push(linha);
                }
              }
            });
          }
        }
      });

      setTimeout(() => {
        formAgrupa.desabilitado = false;
      }, 2400);

      Baixar.ArrayDeArrayEmCSV(this.#arrayAgrupado, `${input.value != '' ? input.value : 'ArquivoAgrupado' }.csv`);

    }

    return form;

  }

  static selectHTML(arrayStr = [], id){

    arrayStr.sort(function(a, b){
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    })

    const div = document.createElement('div');
    div.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'col-xl-2');

    const label = document.createElement('label');
    label.classList.add('col-form-label');
    label.innerText = `${id}: `;
    label.htmlFor = id;

    const select = document.createElement('select');
    select.classList.add('form-select');
    select.ariaLabel = id;
    select.id = id;

    const option = document.createElement('option');
    option.selected = true;
    option.innerText = this.#naoAgrupar;

    div.appendChild(label);
    div.appendChild(select);
    select.appendChild(option);

    arrayStr.forEach((valor)=>{
      const options = document.createElement('option');
      options.value = valor;
      options.innerText = valor;
      select.appendChild(options);
    });

    return div;

  }
}