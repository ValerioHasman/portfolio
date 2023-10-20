import Rotas from "./modelos/Rotas.js";

const rotas = new Rotas();

window.onload = () => {
  rotas.irParaUrl(window.location.href);
};
window.onhashchange = (evHash) => {
  rotas.irParaUrl(evHash.newURL);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};

//history.go(-1);