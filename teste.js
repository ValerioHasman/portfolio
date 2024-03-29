(() => {
  'use strict'

  let printar = true;
  const elementos = preElem();

  window.addEventListener('error', erros);

  function erros(e){
    if(printar){
      printe();
      printar = false;
    }

    const err = {
      erros: {
        message: e.error.message,
        stack: e.error.stack
      },
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      message: e.message
    }

    elementos.pre.innerHTML += tratarEscapes(JSON.stringify(err, 0, 2)) + "\n\n";
  }

  function printe(){
    window.addEventListener('load', ()=>{
      document.body.insertAdjacentElement('beforeend', elementos.pre);
    })
  }

  function tratarEscapes(texto){
    texto = String(texto);
    let textoR = texto;

    do{
      textoR = texto;
      texto = texto.replace('\\n', '\n&nbsp&nbsp');
      texto = texto.replace('<', '&lt;');
      texto = texto.replace('>', '&gt;');
      texto = texto.replace('\\"', '&quot;');
      texto = texto.replace("\\'", '&apos;');
    } while(texto != textoR)

    return `${texto}`;
  }

  function preElem(){
    const div = document.createElement('div');

    div.innerHTML = `
    <pre class="bg-body p-5 m-2 rounded-5"></pre>
    `;

    return {
      pre: div.querySelector('pre')
    }
  }

})();