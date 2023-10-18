/** @abstract */
export default class Baixar{

  constructor(){
    throw new Error('Essa é uma classe Abstrata');
  }

  /**
   * @param {Array.<Array>} conteudo 
   * @param {string} nomeArquivo 
   */
  static ArrayDeArrayEmCSV(conteudo, nomeArquivo){
    if(!Array.isArray(conteudo)){
      throw new TypeError('Esperado foi Array');
    }

    let texto = '';

    conteudo.forEach((linha)=>{
      texto += linha.join(';');
      texto += "\n";
    });

    Baixar.textoEmArquivo(texto, nomeArquivo);
  }

  /**
   * @param {string} conteudo 
   * @param {string} nomeArquivo 
   */
  static textoEmArquivo(conteudo, nomeArquivo){
    if(typeof conteudo != typeof String() && typeof nomeArquivo != typeof String()){
      throw new TypeError('Esperado foi String');
    }

    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
  
    const blob = new Blob([conteudo], { type: 'octet/stream'});
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = nomeArquivo;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}