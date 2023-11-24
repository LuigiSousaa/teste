// Exercicio 2 - 10 numeros em ordem inversa

var nReais = new Array();
var i;
//Preenchendo o Array
for(i=0;i<10;i++){
    nReais[i]=prompt("Digite um Nº");
}
//Imprimir na ordem inversa
for(i=9;i>=0;i--){
    document.write(nReais[i]+"<br>");
}
