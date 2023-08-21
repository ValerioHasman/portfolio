(() => {
  'use strict'

  let exibir = true;
  const elementos = paratela();

  window.addEventListener('error', erros);

  function erros(e){
    if(exibir){
      exibe();
      exibir = false;
    }

    const err = {
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      message: e.message
    }

    elementos.pre.innerHTML += JSON.stringify(err, 0, 2) + "\n\n";
  }

  function exibe(){
    window.addEventListener('load', ()=>{
      document.body.insertAdjacentElement('beforeend', elementos.button);
      document.body.insertAdjacentElement('beforeend', elementos.div);
    })
  }

  function paratela(){
    const div = document.createElement('div');

    div.innerHTML = `<!-- Button trigger modal -->
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch bug demo modal
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Erros:</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <pre></pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;

    return {
      button: div.querySelector('button'),
      div: div.querySelector('.modal'),
      pre: div.querySelector('pre')
    }
  }

})();