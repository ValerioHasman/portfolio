/** @abstract */
export default class Root {

  static #raiz = document.getElementById('root');

  /**
   * @param {Element|string} valor
   */
  static domNode(valor) {
      Root.#raiz.innerHTML = '';
      if (valor instanceof Element) {
        Root.#raiz.appendChild(valor);
      } else {
        Root.#raiz.innerHTML = String(valor);
      }
  }
}