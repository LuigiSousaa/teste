//Exercicio 1 - Mostrar 5 números inteiros
var nInteiros = new Array(4);

for(var i=0;i<5;i++){
    nInteiros[i]=prompt("Digite um Nº:");
}

//sem laço de repetição
document.write(nInteiros[0]+"<br>");
document.write(nInteiros[1]+"<br>");
document.write(nInteiros[2]+"<br>");
document.write(nInteiros[3]+"<br>");
document.write(nInteiros[4]+"<br>");

// com laço de repetição
document.write("<br>Com Laço While<br>");
var i = 0;
while(i<5){
    document.write(nInteiros[i]+"<br>");
    i++;
}
//com laço de repetição
document.write("<br>Com Laço For<br>");
for(i=0;i<5;i++){
    document.write(nInteiros[i]+"<br>");
}