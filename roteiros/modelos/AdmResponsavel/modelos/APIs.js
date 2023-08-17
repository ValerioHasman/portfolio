import Botoes from "./Botoes.js";
import Notificacoes from "./Notificacoes.js";

export default class APIs {
  #servidor;

  constructor(){
    localStorage.getItem("APIs") ?? localStorage.setItem("APIs", `{"pessoas":[{"nome":"Fernado Berg Taylor","filhos":["Mariana Berg Taylor"]},{"nome":"Maria Fernandez Bray","filhos":["Pedro Fernandez Bray"]},{"nome":"Pedro Holland Schroeder","filhos":["Carlos Holland Schroeder","Regina Holland Schroeder"]},{"nome":"Camila Pierce Cline","filhos":["João Pierce Cline","Ana Pierce Cline"]}]}`);
  };

  set servidor(valor) {
    this.#servidor = String(valor);
  }
  get servidor() {
    return this.#servidor;
  }

  ler(btn, tb) {
    const botao = new Botoes(btn);
    botao.desabilitado = true;

    switch (this.#servidor) {
      case "localStorage":
      case "":
        tb.dados = JSON.parse(localStorage.getItem("APIs"));
        tb.atualiza();
        new Notificacoes('primary', 'Lido com sucesso!').exibe();
        botao.desabilitado = false;
        break;
      default:
        fetch(this.#servidor + 'home/json',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(resp => resp.json())
          .then(data => {
            tb.dados = data;
            tb.atualiza();
            new Notificacoes('primary', 'Lido com sucesso!').exibe();
          })
          .catch((err) => {
            new Notificacoes('danger', `Erro ao ler: ${err.message}!`).exibe();
          })
          .finally(() => {
            botao.desabilitado = false;
          });
        break;
    }

  }
  gravarObj(btn, tb) {
    const botao = new Botoes(btn);
    botao.desabilitado = true;

    switch (this.#servidor) {
      case "localStorage":
      case "":
        localStorage.setItem("APIs", JSON.stringify(tb.dados));
        new Notificacoes('success', 'Gravado com sucesso!').exibe();
        botao.desabilitado = false;
        break;
      default:
        fetch(this.#servidor + 'home/gravarObj',
          {
            method: 'POST',
            body: JSON.stringify(tb.dados),
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(resp => {
            if (resp.status == 200) {
              new Notificacoes('success', 'Gravado com sucesso!').exibe();
            } else {
              new Notificacoes('danger', `Erro: Não foi possível gravar`).exibe();
            }
          })
          .catch((err) => {
            new Notificacoes('danger', `Erro ao gravar: ${err.message}`).exibe();
          })
          .finally(() => {
            botao.desabilitado = false;
          });
        break;
    }
  }
}