import Botoes from "./Botoes.js";

export default class Formulario {
  #formulario = Object();
  #target = Array();
  #desabilitado = Boolean();

  constructor(formulario){
    formulario.preventDefault();
    this.formulario = formulario;
  }

  set formulario (valor){
    if (valor.target.tagName == 'FORM' && valor.target instanceof Element){
      this.#formulario = valor;
      Object.keys(valor.target).forEach((item)=>{
        if(valor.target[item].tagName == 'BUTTON'){
          this.#target.push(new Botoes(valor.target[item]));
        } else {
          this.#target.push(valor.target[item]);
        }
      });
    } else {
      throw new TypeError('Tipo esperado FORM, de um submit!');
    }
  }

  get formulario(){
    return Object(this.#formulario);
  }

  set desabilitado(valor){
    this.#desabilitado = Boolean(valor);

    Object.keys(this.target).forEach((item)=>{
      this.target[item].disabled = this.#desabilitado;
    });

  }

  get desabilitado(){
    return Boolean(this.#desabilitado);
  }

  get target(){
    return this.#target;
  }
}