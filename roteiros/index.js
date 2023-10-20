import Rotas from "./modelos/Rotas.js";

const rotas = new Rotas();

window.onload = ()=>{
  rotas.irParaUrl(window.location.href);
};
window.onhashchange = (evHash)=>{
  rotas.irParaUrl(evHash.newURL);
};

//history.go(-1);