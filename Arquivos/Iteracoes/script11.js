//3 - apresentar o quadrado de todos os nº inteiros de 2 até 200. (while e for)
var i;
var quadrado=0;
i=2;
document.write("com while<br>");
while(i<=200){
    quadrado = i*i;
    document.write("<br>o quadrado do nº "+i+" é "+quadrado);
    i++;
}
//com o for
document.write("com for<br>");
for(i=2;i<=200;i++){
    quadrado = i*i;
    document.write("<br>o quadrado do nº "+i+" é "+quadrado);
}
document.write("<br>===== FIM =====");

