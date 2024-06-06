import Saudacao from "https://valeriohasman.github.io/TI/roteiro/uteis/Saudacao.js"

export default function Portfolio(){

  const elemento = document.querySelector(".container-xxl");

  elemento.querySelector("a#envelopelink").href = `mailto:valerio.hasman@gmail.com?subject=Desenvolvedor&body=${ Saudacao.apresentarEmURI() }`
  elemento.querySelector("a#whatsapplink").href = `https://wa.me/5512997329785?text=${ Saudacao.apresentarEmURI() }`
  elemento.querySelector("#saudacao").textContent = `Olá, ${ Saudacao.saudar() }, sou o Valério`;

  return elemento;
}