// (0.25 > 12) e (0.30 <12)

var nMacas = prompt('Digite o Número de Maças: ');
var custoTotal;

//se >= 12 cobrar 25centavos p/ maça
if(nMacas>=12){
    custoTotal = parseFloat(nMacas*0.25);
    document.write("O Total da Compra é ",custoTotal);
}else{
    custoTotal = parseFloat(nMacas*0.30);
    document.write("O Total da Compra é ",custoTotal);
}

