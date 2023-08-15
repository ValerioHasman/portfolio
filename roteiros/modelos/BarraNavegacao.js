import Temas from "./Temas.js";

export default class BarraNavegacao{
  
  #barra;
  #rootnav;

  constructor(){
    this.#barra = document.createElement('div');
    this.#barra.innerHTML = `
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#Portfolio">
        <img class="icone" src="https://icons.getbootstrap.com/assets/icons/journal-code.svg" alt="Porta-fólio"
          width="30" height="24">
        Porta-fólio
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle bg-grad-nav rounded p-2 mx-lg-1" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Endereços
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis"
                  href="https://github.com/ValerioHasman/"><i class="bi me-2 bi-github"></i>GitHub</a></li>
              <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" target="_blank"
                  href="https://www.linkedin.com/in/valerio-hasman/">
                  <div class="row justify-content-between">
                    <div class="col-auto">
                      <i class="bi me-2 bi-linkedin"></i>LinkdIn
                    </div>
                    <div class="col-auto">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </div>
                  </div>
                </a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle bg-grad-nav rounded p-2 mx-lg-1" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi me-2 bi-filetype-js"></i>Projetos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#MenuDeContexto"><i class="bi me-2 bi-menu-button-wide"></i>Menu De Contexto</a></li>
              <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#TransicaoGradienteLinear"><i class="bi me-2 bi-palette2"></i>Transição de Gradiente Linear</a></li>
              <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#AdmResponsavel"><i class="bi me-2 bi-people"></i> Adm Responsavel</a></li>
            </ul>
          </li>
        </ul>
        <div class="nav-item dropdown" id="tema">
          <button class="btn btn-link bg-grad-nav nav-link p-2 dropdown-toggle mx-lg-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi me-2 bi-moon-stars-fill"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><button data-bs-theme-value="light" class="dropdown-item bg-grad-nav" type="button"><i class="bi me-2 bi-sun-fill"></i>Light</button></li>
            <li><button data-bs-theme-value="dark" class="dropdown-item bg-grad-nav" type="button"><i class="bi me-2 bi-moon-stars-fill"></i>Dark</button></li>
            <li><button data-bs-theme-value="auto" class="dropdown-item bg-grad-nav" type="button"><i class="bi me-2 bi-circle-half"></i>Auto</button></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div id="rootnav"></div>
    `;

    this.#rootnav = this.#barra.querySelector('#rootnav');

    Temas(this.#barra);

  }
  
  set rootnav(valor){
    this.#rootnav.innerHTML = '';
    if(typeof valor == typeof {}){
      this.#rootnav.appendChild(valor);
    } else {
      this.#rootnav.innerHTML = valor;
    }
  }

  get rootnav(){
    return this.#barra;
  }

  get barra(){
    return this.#barra;
  }

}