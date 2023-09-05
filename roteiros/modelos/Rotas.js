import Portfolio from "./Portfolio.js";
import MenuDeContexto from "./MenuDeContexto.js";
import TransicaoGradienteLinear from "./TransicaoGradienteLinear.js";
import AdmResponsavel from "./AdmResponsavel.js";
import BarraNavegacao from "./BarraNavegacao.js";
import ProcessamentoDeDados from "./ProcessamentoDeDados.js";

export default class Rotas{

  #rota = Object();
  #barraNavegacao = new BarraNavegacao();


  /* Forma mais curta com carregamento imediato das páginas
  #pagina = {
    'MenuDeContexto': MenuDeContexto(),
    'TransicaoGradienteLinear': TransicaoGradienteLinear(),
    'AdmResponsavel': AdmResponsavel(),
    'Portfolio': Portfolio()
  }

  irParaUrl(url){
    let destino = url.split('#')[1];
    if(this.#pagina[destino] === undefined){
      return this.#pagina['Portfolio'];
    }
    return this.#pagina[destino] ;
  }
  */

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
        return this.#rota[destino];
      case 'ProcessamentoDeDados':
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = ProcessamentoDeDados();
        }
        return this.#rota[destino];
      default:
        destino = 'Portfolio';
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = Portfolio();
        }
        break;
    }
    this.#barraNavegacao.rootnav = this.#rota[destino];
    return this.#barraNavegacao.rootnav;
  }


  irParas(url){
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
      case 'ProcessamentoDeDados':
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = ProcessamentoDeDados();
        }
        break;
      default:
        destino = 'Portfolio';
        if(this.#rota[destino] === undefined){
          this.#rota[destino] = Portfolio();
        }
        break;
    }
    return this.#rota[destino];
  }
}