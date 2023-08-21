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
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      message: e.message
    }

    elementos.pre.innerHTML += JSON.stringify(err, 0, 2) + "\n\n";
  }

  function printe(){
    window.addEventListener('load', ()=>{
      document.body.insertAdjacentElement('beforeend', elementos.pre);
    })
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