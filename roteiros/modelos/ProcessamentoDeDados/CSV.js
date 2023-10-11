export default class CSV extends EventTarget{

  #linhasColunas = Array();

  csvParaArray(arquivo){

    const leitor = new FileReader();

    leitor.readAsText(arquivo);

    leitor.onload = ()=>{
      let stringDoArquivo = leitor.result.replaceAll('"','');
      
      this.#linhasColunas = stringDoArquivo.split("\n");

      this.#linhasColunas.forEach((element, index) => {
        const linha = element.split(";");

        if(linha != ''){
          this.#linhasColunas[index] = linha
        } else {
          this.#linhasColunas.splice(index, 1);
        }
      });

      this.dispatchEvent(new Event("load"));

    };
    
  }

  get linhasColunas(){
    return this.#linhasColunas;
  }

}