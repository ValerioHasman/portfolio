import Formulario from "../AdmResponsavel/modelos/Formulario.js";
import CSV from "./CSV.js";
import DespejoProcessado from "./BarraDeProgresso.js";
import JuntarPorUF from "./JuntarPorUF.js";
import MonitorDeProcessos from "./MonitorDeProcessos.js"
import ArrayParaTabela from "./ArrayParaTabela.js";
import ArrayParaCsv from "./ArrayParaCsv.js";

export default function Processar(elemento, eleResultados){

  const formulario = new Formulario(elemento);
  formulario.desabilitado = true;
  elemento = null;

  const despejo = new DespejoProcessado();
  eleResultados.insertHtmlElement( despejo.barra );

  const ArqExprotacao = formulario.target[0].files[0];
  const ArqImprotacao = formulario.target[1].files[0];
  const exibirTabela = formulario.target[2].checked;
  const baixarCsv = formulario.target[3].checked;

  const arryEXP = new CSV();
  const arryIMP = new CSV();

  arryEXP.csvParaArray(ArqExprotacao);
  arryIMP.csvParaArray(ArqImprotacao);

  const monitor = new MonitorDeProcessos();
  monitor.limite = 2;
  monitor.funcao = ()=>{

    const juntado = new JuntarPorUF(arryEXP.linhasColunas, arryIMP.linhasColunas);

    despejo.valor += 30;

    formulario.desabilitado = false;
    
    if(exibirTabela){
      const htmltabela = new ArrayParaTabela(juntado.array);
      let dados = htmltabela.tabelasEmAcondeoes();
      despejo.valor = 99;
      setTimeout(()=>{
        eleResultados.insertHtmlElement( dados );
      }, 700);
    }

    if(baixarCsv){
      ArrayParaCsv(juntado.array);
    }

  };

  arryEXP.addEventListener('load', ()=>{
    despejo.valor += 35;
    monitor.incrementarProcesso();
  });

  arryIMP.addEventListener('load', ()=>{
    despejo.valor += 35;
    monitor.incrementarProcesso();
  });
}