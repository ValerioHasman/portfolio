import Paginas from "./Paginas.js";

export default class Rotas{

  #pagina = new Paginas();

  irParaUrl(url){

    let destino = url.split('#')[1];

    if(this.#pagina[destino] === undefined){
      this.#pagina['Portfolio']();
    } else {
      this.#pagina[destino]();
    }
  }
}