import * as bootstrap from 'bootstrap'
import Rotas from "./modelos/Rotas.js";
import Root from "./modelos/Root.js";

const root = new Root(document.getElementById('root'));
const rotas = new Rotas();

window.onload = ()=>{
  root.domNode = rotas.irPara(window.location.href);
};
window.onhashchange = (evHash)=>{
  root.domNode = rotas.irPara(evHash.newURL);
};

//history.go(-1);