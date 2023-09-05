import Formulario from "../AdmResponsavel/modelos/Formulario.js";

export default function Processar(elemento){

  const formulario = new Formulario(elemento);

  formulario.desabilitado = true;

  window.alert("Em breve estará disponível!");

  setTimeout(() => {
    formulario.desabilitado = false;
  }, 5000);

}