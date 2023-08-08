export default class Carousel {
  constructor(){

  }

  exibe(){
    const template = document.createElement('div');

    template.insertAdjacentHTML('beforeend',
`
<div class="container-xxl py-5 my-5">
  <div class="row justify-content-between">
    <div class="col-md-7 col-12 p-2">
      <div id="carouselUm" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="false">
        <div class="carousel-inner rounded-3 border border-secondary-subtle">
          <div class="carousel-item active">
            <img src="https://valeriohasman.github.io/portfolio/imagens/gerenciador0.png" class="d-block w-100" alt="Gerenciador">
          </div>
          <div class="carousel-item">
            <img src="https://valeriohasman.github.io/portfolio/imagens/gerenciador1.png" class="d-block w-100" alt="Gerenciador">
          </div>
          <div class="carousel-item">
            <img src="https://valeriohasman.github.io/portfolio/imagens/gerenciador2.png" class="d-block w-100" alt="Gerenciador">
          </div>
          <div class="carousel-item">
            <img src="https://valeriohasman.github.io/portfolio/imagens/gerenciador3.png" class="d-block w-100" alt="Gerenciador">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 col-12 p-2">
      <p>Gerenciador <img src="https://raw.githubusercontent.com/ValerioHasman/Gerenciador/main/midias/ICONE.ico" alt="" class="emojiIco" /> é um projeto PHP com MySql do lado servidor e JS, CSS, Bootstrep e HTML para o lado do cliente, usando uma estrutura MVC <span lang="en" class="fst-italic">(Model–view–controller)</span>, Tendo sido um teste (prova) para LiaX Tecnologia da Informação de Lorena/SP.</p>
      <p>O projeto tem ideia de de auxiliar na gestão da imunização do nosso país, considerando a esfera nacional.</p>
      <a href="https://github.com/ValerioHasman/Gerenciador" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>
    </div>
  </div>
</div>

`);
  }
}