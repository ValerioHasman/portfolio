import APIs from './modelos/APIs.js';
import Configuracoes from './modelos/Configuracoes.js';
import FerramentaDica from './modelos/FerramentaDica.js';
import Formulario from './modelos/Formulario.js';
import Modais from './modelos/Modais.js';
import Pessoa from './modelos/Pessoa.js';
import Tabela2 from './modelos/Tabela2.js';

export default function AdmRoot(elemento){
  
  if(!(elemento instanceof Element)){
    console.error('erro');
  };
  
  const txtjson = elemento.querySelector('#json');
  const tabela = elemento.querySelector('#tabela');
  const tb = new Tabela2(tabela, txtjson);
  const api = new APIs();
  const confgs = new Configuracoes(api);

  elemento.querySelector('#voltar').onclick = voltar;
  elemento.querySelector('#configuracao').onclick = configuracao;
  elemento.querySelector('#ler').onclick = ler;
  elemento.querySelector('#gravarObj').onclick = gravarObj;
  elemento.querySelector('#formulario').onsubmit = submitForm;
  elemento.querySelector('#nomeNovo').oninput = (e)=>{ 
    e.target.value = Pessoa.tratarEspacosELetras(e.target.value);
  }

  FerramentaDica.carregarDicas(elemento);

  function voltar(){
    history.go(-1);
  }

  function ler(){
    api.ler(this, tb);
  }

  function gravarObj(){
    api.gravarObj(this, tb);
  }

  function submitForm(e){

    const formulario = new Formulario(e);

    const input = formulario.target[0];

    formulario.desabilitado = true;

    function focar(){
      formulario.desabilitado = false;
      input.focus();
    }

    const pessoa = new Pessoa();

    try {
      pessoa.nome = input.value;
      tb.novaPessoa(pessoa.nome);
      input.value = '';
      focar();
    } catch (err) {
      new Modais('<i class="bi bi-exclamation-octagon"></i> Nome inválido', err.message, focar).exibe();
    }
  }

  function configuracao(){
    confgs.tela.exibe();
  }

}

