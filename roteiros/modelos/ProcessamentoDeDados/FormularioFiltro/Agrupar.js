export default class Agrupar {
  
  #arrayAgrupado = Array();
  #limite = 100;

  constructor(){}

  set limite(valor){
    this.#limite = Number(valor);
  }
  get limite(){
    this.#limite;
  }

  adiciona(valor) {
    if (!Agrupar.valorExiste( this.#arrayAgrupado, valor) && this.#limite > this.#arrayAgrupado.length){
      this.#arrayAgrupado.push(valor);
    }
  }

  /**
   * @param {array} arrayl 
   * @param {*} novo 
   * @returns 
   */
  static valorExiste(arrayl, novo){

    if (!Array.isArray(arrayl)) {
      throw new TypeError('Esperado um array');
    }

    let jaTem = false;

    for( let i = 0 ; i < arrayl.length ; i++ ){
      if (arrayl[i] == novo) {
        jaTem = true;
        return true;
      }
    }

    return false;
  }

  get arrayAgrupado(){
    return this.#arrayAgrupado;
  }

}