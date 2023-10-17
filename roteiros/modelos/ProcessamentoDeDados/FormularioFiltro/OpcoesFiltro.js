import Agrupar from "./Agrupar.js";

export default class OpcoesFiltro {

  #arrayOpcoes = Array();

  opcoes(arrayCsv = Array(Array())) {
    if (typeof arrayCsv !== typeof [] || typeof arrayCsv[0] !== typeof []) {
      throw new TypeError('Tipo esperado é Array de Array');
    }

    const agrupados = [];

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

    agrupados.forEach((coluna, index)=>{
      console.log(coluna);
      form.appendChild( OpcoesFiltro.selectHTML(coluna.arrayAgrupado, arrayCsv[0][index]) );
    });

    return form;

  }

  static selectHTML(arrayStr = [], id){

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
    option.innerText = 'Não agrupar';

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