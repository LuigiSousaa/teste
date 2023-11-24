// Operadores Relacionais

var numeroSorteio1 = prompt('Informe um número em 1 e 10');
var numeroSorteio2 = prompt('Informe um número em 1 e 10');
var numeroSorteado1 = Math.round(Math.random()*9+1);
var numeroSorteado2 = Math.round(Math.random()*9+1);

document.write("<br/>Numero Sorteado", numeroSorteado1);
document.write("<br/>Numero Sorteado", numeroSorteado2);
if ((numeroSorteio1==numeroSorteado1 && 
    numeroSorteio2==numeroSorteado2) ||
    (numeroSorteio1==numeroSorteado2 && 
    numeroSorteio2==numeroSorteado1)){
    document.write("<br/>Acertou");
}else{
    document.write("<br/>Errou");
}



if(condição){
    verdadeira;
}else{
    falsa;
}

if(){}
else{}