export default function Temas(elemento){

  const getTemaArmazem = () => localStorage.getItem('theme');
  const setTemaArmazem = theme => localStorage.setItem('theme', theme);

  const startSetTema = () => {
    botoesAtivar(temaPreferido());
    elemento.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          setTemaArmazem(theme);
          setTemaVerifica(theme);
          botoesAtivar(theme, true);
        })
      })
  }

  const setTemaVerifica = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }

  const botoesAtivar = (theme, foco = false) => {

    const dropdown = elemento.querySelector('#tema');

    elemento.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    })

    const btnToActive = elemento.querySelector(`[data-bs-theme-value="${theme}"]`);
    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');

    const button = dropdown.querySelector(`button`);

    if (foco) {
      button.focus();
    }

    switch(theme){
      case 'dark':
        button.innerHTML = '<i class="bi me-2 bi-moon-stars-fill"></i>';
        break;
      case 'light':
        button.innerHTML = '<i class="bi me-2 bi-sun-fill"></i>';
        break;
      default:
        button.innerHTML = '<i class="bi me-2 bi-circle-half"></i>';
        break;
    }
  }

  function temaPreferido(){
    const tema = getTemaArmazem();
    if (tema) {
      return tema;
    }

  }

  setTemaVerifica(temaPreferido());
  startSetTema();


}