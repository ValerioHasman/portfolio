export default class Root{
  #DOMNode = Object();
  #pagina = Object();

  constructor(domNode){
    this.#DOMNode = domNode;
  }

  set domNode(valor){
    this.#DOMNode.innerHTML = '';

    if(typeof valor == typeof {}){
      this.#DOMNode.appendChild(valor);
    } else {
      this.#DOMNode.innerHTML = valor;
    }
  }

  get domNode(){
    return this.#DOMNode;
  }
}