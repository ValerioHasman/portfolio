import Portifolio from "./Portifolio.js";
import MenuDeContexto from "./MenuDeContexto.js";
import TransicaoGradienteLinear from "./TransicaoGradienteLinear.js";
import AdmResponsavel from "./AdmResponsavel.js";

export default class Rotas{

  #rota = Object();

  constructor(){}

  irPara(url){
    let destino = url.split('#')[1];
    switch(destino){
      case 'MenuDeContexto':
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = MenuDeContexto();
        }
        break;
      case 'TransicaoGradienteLinear':
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = TransicaoGradienteLinear();
        }
        break;
      case 'AdmResponsavel':
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = AdmResponsavel();
        }
        break;
      default:
        this.#rota[destino] = Portifolio();
        break;
    }
    return this.#rota[destino];
  }
}