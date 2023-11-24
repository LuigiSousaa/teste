//idade e altura de 5 pessoas, imprimir na ordem inversa
var idade = [];
var altura = [];
var i;

for(i=0;i<5;i++){
    idade[i]=prompt("Digite a idade");
    altura[i]=prompt("Digite a Altura");
}
for(i=4;i>=0;i--){
    document.write("<br> a altura da "+(i+1)+" é "+altura[i]);
    document.write("<br> a idade da "+(i+1)+" é "+idade[i]);
}