export default class BarraDeProgresso {

  #barra;
  #valor;
  
  constructor(){
    this.iniciaBarra();
    this.valor = 0;
  }

  set valor(valor){
    valor = Number(valor);
    if (valor < 0 || valor == NaN){
      valor = 0;
    }
    if (valor > 100){
      valor = 100;
    }
    this.#valor = valor;
    
    this.#barra.setAttribute('aria-valuenow', this.#valor);
    this.#barra.querySelector('.progress-bar').style.width = `${this.#valor}%`;
    this.#barra.querySelector('.progress-bar').innerText = `${this.#valor}%`;
  } 
  get valor(){
    return this.#valor;
  }
  get barra(){
    return this.#barra;
  }

  iniciaBarra(){
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="progress" role="progressbar" aria-label="progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: 0%"></div>
    </div>
    `;

    this.#barra = div.querySelector('.progress');
  }

}