import Rotas from "./modelos/Rotas.js";
import subirNaPagina from "./utilitarios/subirNaPagina.js";

const rotas = new Rotas();

window.onload = () => {
  rotas.irParaUrl(window.location.href);
};

window.onhashchange = (evHash) => {
  rotas.irParaUrl(evHash.newURL);
};

document.querySelector(".para-top").addEventListener('click', subirNaPagina);