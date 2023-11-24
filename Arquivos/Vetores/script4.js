// exercicio 3 - 4 notas, imprimir, e calcular a média

var nNotas = new Array();
var mediaNotas = 0;
var i;

// solicitar para o usuario preencher 4 notas
for(i=0;i<4;i++){
    nNotas[i]=prompt("Digite a nota:");
}
for(i=0;i<4;i++){
    document.write((i+1)+"° Nota: "+nNotas[i]+"<br>");
}
for(i=0;i<4;i++){
    mediaNotas += parseFloat(nNotas[i]);
}
mediaNotas /= 4;
document.write("A média é ",mediaNotas);


