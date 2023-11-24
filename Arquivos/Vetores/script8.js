// 5 valores,  soma, multiplicação e Imprimir
var nInteiros = [];
var i;
var soma = 0;
var multi = 1;

for(i=0;i<5;i++){
    nInteiros[i]=prompt("Dite um valor:");
    soma += parseInt(nInteiros[i]);
    multi *= parseInt(nInteiros[i]);
}
document.write("<br>a Soma do vetor é "+ soma);
document.write("<br> A Multiplicação do vetor é "+multi);
document.write("<br> O vetor é");
for(i=0;i<5;i++){
    document.write("<br>"+(i+1)+"º posição: "+nInteiros[i]);
}
