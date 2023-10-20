import Portfolio from "./Portfolio.js";
import MenuDeContexto from "./MenuDeContexto.js";
import TransicaoGradienteLinear from "./TransicaoGradienteLinear.js";
import AdmResponsavel from "./AdmResponsavel.js";
import BarraNavegacao from "./BarraNavegacaoOff.js";
import ProcessamentoDeDados from "./ProcessamentoDeDados.js";
import Root from "./Root.js";

export default class Paginas {
  #Portfolio = Portfolio();
  #MenuDeContexto = MenuDeContexto();
  #TransicaoGradienteLinear = TransicaoGradienteLinear();
  #AdmResponsavel = AdmResponsavel();
  #ProcessamentoDeDados = ProcessamentoDeDados();
  #BarraNavegacao = new BarraNavegacao();

  Portfolio() {
    Root.domNode(this.#Portfolio, this.#BarraNavegacao);
  }
  MenuDeContexto() {
    Root.domNode(this.#MenuDeContexto, this.#BarraNavegacao);
  }
  TransicaoGradienteLinear() {
    Root.domNode(this.#TransicaoGradienteLinear, this.#BarraNavegacao);
  }
  AdmResponsavel() {
    Root.domNode(this.#AdmResponsavel);
  }
  ProcessamentoDeDados() {
    Root.domNode(this.#ProcessamentoDeDados);
  }

}