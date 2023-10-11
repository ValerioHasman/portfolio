export default class JuntarPorUF {

  #array = Array();
  #ano;
  
  constructor(exp, imp){
    this.#ano = exp[1][0];
    this.#processa(exp, 'Exp');
    this.#processa(imp, 'Imp');
  }

  get array(){
    return this.#array;
  }
  get ano(){
    return this.#ano;
  }

  #processa = function(arr, tipo){
    for(let i = 1; i < arr.length; i++){
      const uf = arr[i][5];
      const ncm = arr[i][2];
      const mes = arr[i][1];
      const valor = Number(arr[i][10]);

      if(this.#array[uf] === undefined){
        this.#array[uf] = [];
      }
      if(this.#array[uf][ncm] === undefined){
        this.#array[uf][ncm] = this.objetoBasico(ncm);
      }

      this.#array[uf][ncm][`${tipo}_${this.pegarMes(mes)}`] += valor;
      this.#array[uf][ncm][`Net_${this.pegarMes(mes)}`] += (tipo == 'Exp' ? valor : -valor);
      this.#array[uf][ncm][`${tipo}_${this.#ano}`] += valor;
      this.#array[uf][ncm][`Net_${this.#ano}`] += valor;
    }
  }

  pegarMes(mes = 0){
    switch(Number(mes)){
      case 1:
        return 'jan';
      case 2:
        return 'fev';
      case 3:
        return 'mar';
      case 4:
        return 'abr';
      case 5:
        return 'mai';
      case 6:
        return 'jun';
      case 7:
        return 'jul';
      case 8:
        return 'ago';
      case 9:
        return 'set';
      case 10:
        return 'out';
      case 11:
        return 'nov';
      case 12:
        return 'dez';
      default:
        throw new Error(`Erro na tabela: mês não existênte! ${mes}`);
    }
  }

  objetoBasico(ncm){
    const obj = [];
    obj['NCM'] = ncm;
    obj['Exp_jan'] = 0;
    obj['Imp_jan'] = 0;
    obj['Net_jan'] = 0;
    obj['Exp_fev'] = 0;
    obj['Imp_fev'] = 0;
    obj['Net_fev'] = 0;
    obj['Exp_mar'] = 0;
    obj['Imp_mar'] = 0;
    obj['Net_mar'] = 0;
    obj['Exp_abr'] = 0;
    obj['Imp_abr'] = 0;
    obj['Net_abr'] = 0;
    obj['Exp_mai'] = 0;
    obj['Imp_mai'] = 0;
    obj['Net_mai'] = 0;
    obj['Exp_jun'] = 0;
    obj['Imp_jun'] = 0;
    obj['Net_jun'] = 0;
    obj['Exp_jul'] = 0;
    obj['Imp_jul'] = 0;
    obj['Net_jul'] = 0;
    obj['Exp_ago'] = 0;
    obj['Imp_ago'] = 0;
    obj['Net_ago'] = 0;
    obj['Exp_set'] = 0;
    obj['Imp_set'] = 0;
    obj['Net_set'] = 0;
    obj['Exp_out'] = 0;
    obj['Imp_out'] = 0;
    obj['Net_out'] = 0;
    obj['Exp_nov'] = 0;
    obj['Imp_nov'] = 0;
    obj['Net_nov'] = 0;
    obj['Exp_dez'] = 0;
    obj['Imp_dez'] = 0;
    obj['Net_dez'] = 0;
    obj[`Exp_${this.#ano}`] = 0;
    obj[`Imp_${this.#ano}`] = 0;
    obj[`Net_${this.#ano}`] = 0;
    return obj;
  }

}