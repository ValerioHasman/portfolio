import Portfolio from "./Portfolio.js";
import MenuDeContexto from "./MenuDeContexto.js";
import TransicaoGradienteLinear from "./TransicaoGradienteLinear.js";
import AdmResponsavel from "./AdmResponsavel.js";
import ProcessamentoDeDados from "./ProcessamentoDeDados.js";
import Root from "./Root.js";
import BarraNavegacaoOff from "./BarraNavegacaoOff.js";

export default class Paginas {
  #Portfolio = Portfolio();
  #MenuDeContexto = MenuDeContexto();
  #TransicaoGradienteLinear = TransicaoGradienteLinear();
  #AdmResponsavel = AdmResponsavel();
  #ProcessamentoDeDados = ProcessamentoDeDados();

  constructor(){
    BarraNavegacaoOff();
  }

  Portfolio() {
    Root.domNode(this.#Portfolio);
  }
  MenuDeContexto() {
    Root.domNode(this.#MenuDeContexto);
  }
  TransicaoGradienteLinear() {
    Root.domNode(this.#TransicaoGradienteLinear);
  }
  AdmResponsavel() {
    Root.domNode(this.#AdmResponsavel);
  }
  ProcessamentoDeDados() {
    Root.domNode(this.#ProcessamentoDeDados);
  }

}