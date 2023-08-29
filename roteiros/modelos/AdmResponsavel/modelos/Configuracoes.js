import Modais from "./Modais.js";

export default class Configuracoes{

  #tela = Object();
  #formulario = Object();
  #api = Object();

  constructor(apis){
    this.#api = apis;
    this.#formularioNode();
    this.#isSetlocalStorage();
    this.#tela = new Modais('<i class="bi me-2 bi-database-fill-gear"></i>Armazenamento',
    this.#formulario);
  }

  set armazenamento(valor){
    valor = String(valor);
    this.#formulario.querySelector('input').value = valor;
    this.#api.servidor = valor;
    localStorage.setItem('armazenamento', valor);
  }
  get armazenamento(){
    return localStorage.getItem('armazenamento');
  }
  get tela(){
    return this.#tela;
  }

  #isSetlocalStorage = () => {
    if(!this.armazenamento){
      this.armazenamento = 'localStorage';
    }
    this.#api.servidor = this.armazenamento;
  }

  #formularioNode = () => {
    const form = document.createElement('form');
    form.innerHTML = `
<div class="row">
  <div class="col-auto">
    <label for="servidor" class="col-form-label">Servidor:</label>
  </div>
  <div class="col">
    <input spellcheck="false" placeholder="http://localhost/backend" value="localStorage" class="form-control"
      id="servidor" />
  </div>
</div>
<div class="row mt-3">
  <div class="col-6">
    <div class="d-grid gap-2">
      <button type="reset" class="btn btn-secondary bg-gradient"><i class="bi bi-arrow-counterclockwise"></i></button>
    </div>
  </div>
  <div class="col-6">
    <div class="d-grid gap-2">
      <button type="submit" class="btn btn-primary bg-gradient"><i class="bi bi-check2"></i></button>
    </div>
  </div>
</div>
`;

    this.#formulario = form;

    const input = this.#formulario.querySelector('input')

    input.value = this.armazenamento;

    this.#formulario.onsubmit = (e) => {
      e.preventDefault();
      this.armazenamento = input.value;
      this.#tela.fecha();
    }

  }
}