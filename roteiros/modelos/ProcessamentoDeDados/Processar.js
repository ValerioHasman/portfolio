import Formulario from "../AdmResponsavel/modelos/Formulario.js";

export default function Processar(elemento){

  const formulario = new Formulario(elemento);

  formulario.desabilitado = true;

  window.alert("Em breve estará disponível!");

  // console.log({e: elemento.srcElement[0].value});
  // console.log({e: elemento.srcElement[0].files});

  // const leitor = new FileReader();

  // leitor.readAsDataURL(elemento.srcElement[0])

  // leitor.onload = function () {
  //   // Aqui temos a sua imagem convertida em string em base64.
  //   console.log(leitor.result);
  // };
  

  setTimeout(() => {
    formulario.desabilitado = false;
  }, 5000);

}