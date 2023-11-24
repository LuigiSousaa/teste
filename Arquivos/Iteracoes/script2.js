var iteracao = 0;
var resposta = true;

while(resposta == true || iteracao<10){
    document.write("mensagem "+iteracao +"<br>");
    iteracao +=1;
    resposta=confirm('Deseja Continuar?');
}

document.write("====== FIM ======")