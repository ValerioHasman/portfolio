import Temas from "./Temas.js";

export default class BarraNavegacaoOff{
  
  #barra;
  #rootnav;

  constructor(){

    const dropdownAutoClose = (document.body.clientWidth >= 992) ? 'true' : 'false';

    this.#barra = document.createElement('div');
    this.#barra.innerHTML = `
    <div class="imgbg">
      <div></div>
    </div>
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary py-1">
    <div class="container-fluid">
      <a class="navbar-brand" href="#Portfolio">
        <img class="icone" src="https://icons.getbootstrap.com/assets/icons/journal-code.svg" alt="Porta-fólio"
          width="30" height="24">
        Porta-fólio
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="#Portfolio">
            <img class="icone" src="https://icons.getbootstrap.com/assets/icons/journal-code.svg" alt="Porta-fólio"
              width="30" height="24">
            Porta-fólio
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bg-grad-nav rounded p-2 mx-lg-1" href="#" role="button"
                data-bs-toggle="dropdown" data-bs-auto-close="${dropdownAutoClose}" aria-expanded="false">
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
              <a class="nav-link dropdown-toggle bg-grad-nav rounded p-2 mx-lg-1" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="${dropdownAutoClose}" aria-expanded="false">
                <i class="bi me-2 bi-filetype-js"></i>Projetos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#MenuDeContexto"><i class="bi me-2 bi-menu-button-wide"></i>Menu De Contexto</a></li>
                <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#TransicaoGradienteLinear"><i class="bi me-2 bi-palette2"></i>Transição de Gradiente Linear</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#AdmResponsavel"><i class="bi me-2 bi-people"></i>Adm Responsavel</a></li>
                <li><a class="dropdown-item bg-grad-nav rounded text-dark-emphasis" href="#ProcessamentoDeDados"><i class="bi me-2 bi-table"></i>Processamento De Dados</a></li>
              </ul>
            </li>
          </ul>
          <div class="nav-item dropdown" id="tema">
            <button class="btn btn-link bg-grad-nav nav-link p-2 dropdown-toggle mx-lg-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="${dropdownAutoClose}" aria-expanded="false">
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
      </div>
    </div>
  </nav>
  <div id="rootnav"></div>
    `;

    const bsOffcanvas = new bootstrap.Offcanvas(
      this.#barra.querySelector('#offcanvasMenu')
    )

    window.addEventListener('hashchange', ()=>{
      setTimeout(() => {
        bsOffcanvas.hide();
      }, 1);
    });

    this.#rootnav = this.#barra.querySelector('#rootnav');

    Temas(this.#barra);

  }
  
  get rootnav(){
    return this.#rootnav;
  }

  get barra(){
    return this.#barra;
  }

}