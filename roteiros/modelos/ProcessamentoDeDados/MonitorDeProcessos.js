export default class MonitorDeProcessos {

  #processo = 0;
  #limite = 0;
  #funcao = Function();
  
  constructor(){}

  set limite(valor){
    this.#limite = Number(valor);
  }
  set funcao(valor){
    if(typeof Function() === typeof valor){
      this.#funcao = valor;
    }
  }

  get limite(){
    return this.#limite;
  }
  get funcao(){
    return this.#funcao;
  }

  incrementarProcesso(){
    this.#processo++;
    if(this.#limite === this.#processo){
      this.#funcao();
    }
  }

  decrementarProcesso(){
    this.#processo--;
  }
}