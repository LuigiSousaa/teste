// exercicio 5 - 20 números dividir par ou impar

var nInteiros = new Array();
var nPar = new Array();
var nImpar = new Array();

var i;

for(i=0;i<5;i++){
    nInteiros[i] = prompt("Um Números");
}

for(i=0;i<nInteiros.length;i++){
    if(nInteiros[i]%2==0){
        nPar.push(nInteiros[i]);
    }else{
        nImpar.push(nInteiros[i]);
    }
}
//imprimir os arrays
document.write("<br>Imprimindo o array nInteiros :");
for(i=0;i<nInteiros.length;i++){
    document.write(nInteiros[i]+", ");
}
// imprimir o array par
document.write("<br>Imprimindo o array nPar :");
for(i=0;i<nPar.length;i++){
    document.write(nPar[i]+", ");
}
// imprimir o array impar
document.write("<br>Imprimindo o array nImpar :");
for(i=0;i<nImpar.length;i++){
    document.write(nImpar[i]+", ");
}
