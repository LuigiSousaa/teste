// Exemplo Do While

var iteracao = 0;
var resposta = true;

do{
    document.write("Mensagem "+iteracao +"<br");
    iteracao +=1;
    resposta = confirm("Deseja Continuar?");
}
while(resposta == true)

document.write("===== FIM =====");