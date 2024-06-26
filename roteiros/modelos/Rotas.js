import subirNaPagina from "../utilitarios/subirNaPagina.js";
import Paginas from "./Paginas.js";

export default class Rotas {

  #pagina = new Paginas();

  irParaUrl(url) {
    try {
      let caminho = url.split('#')[1].split('/')[0];
      this.#pagina[caminho]();
      subirNaPagina();
    } catch (error) { }
  }
}