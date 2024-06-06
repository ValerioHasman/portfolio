import BarraNavegacao from "./BarraNavegacaoOff.js";

/** @abstract */
export default class Root {

  static #raiz = document.getElementById('root');

  /**
   * @param {Element|string} valor
   * @param {BarraNavegacao|Element} alvo
   */
  static domNode(valor, alvo = Root.#raiz) {

    if (alvo instanceof BarraNavegacao) {

      alvo.rootnav.innerHTML = '';
      alvo.rootnav.appendChild(valor);

    } else if (alvo !== Root.#raiz) {

      Root.#raiz.appendChild(alvo);
      alvo.innerHTML = '';
      alvo.appendChild(valor);

    } else if (alvo === Root.#raiz) {

      alvo.innerHTML = '';
      if (valor instanceof Element) {
        alvo.appendChild(valor);
      } else {
        alvo.innerHTML = String(valor);
      }

    }
  }
}