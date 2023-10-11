export default async function ArrayParaCsv(array){

  arrayParaString(array);
}

function arrayParaString(arrtabela){


  Object.keys(arrtabela).forEach((uf) => {

    let emtexto = `NCM;Exp_jan;Imp_jan;Net_jan;Exp_fev;Imp_fev;Net_fev;Exp_mar;Imp_mar;Net_mar;Exp_abr;Imp_abr;Net_abr;Exp_mai;Imp_mai;Net_mai;Exp_jun;Imp_jun;Net_jun;Exp_jul;Imp_jul;Net_jul;Exp_ago;Imp_ago;Net_ago;Exp_set;Imp_set;Net_set;Exp_out;Imp_out;Net_out;Exp_nov;Imp_nov;Net_nov;Exp_dez;Imp_dez;Net_dez;Exp_;Imp_;Net_\n`;
    
    arrtabela[uf].forEach((ncm)=>{
      emtexto += `${ncm['Exp_jan']};${ncm['Imp_jan']};${ncm['Net_jan']};${ncm['Exp_fev']};${ncm['Imp_fev']};${ncm['Net_fev']};${ncm['Exp_mar']};${ncm['Imp_mar']};${ncm['Net_mar']};${ncm['Exp_abr']};${ncm['Imp_abr']};${ncm['Net_abr']};${ncm['Exp_mai']};${ncm['Imp_mai']};${ncm['Net_mai']};${ncm['Exp_jun']};${ncm['Imp_jun']};${ncm['Net_jun']};${ncm['Exp_jul']};${ncm['Imp_jul']};${ncm['Net_jul']};${ncm['Exp_ago']};${ncm['Imp_ago']};${ncm['Net_ago']};${ncm['Exp_set']};${ncm['Imp_set']};${ncm['Net_set']};${ncm['Exp_out']};${ncm['Imp_out']};${ncm['Net_out']};${ncm['Exp_nov']};${ncm['Imp_nov']};${ncm['Net_nov']};${ncm['Exp_dez']};${ncm['Imp_dez']};${ncm['Net_dez']};${ncm['Exp_2023']};${ncm['Imp_2023']};${ncm['Net_2023']};\n`;
    });

    baixar(emtexto, uf + '.csv');
    
  });

}

function baixar(texto, nomeArquivo){
  const link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link);

  const blob = new Blob([texto], { type: 'octet/stream'});
  const url = window.URL.createObjectURL(blob);
  link.href = url;
  link.download = nomeArquivo;
  link.click();
  window.URL.revokeObjectURL(url);


}