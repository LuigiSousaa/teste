//Apresentar o Total da Soma dos 1.000.000 de números inteiros. (usar While e For)
//com o while
var i;
var soma=0;
document.write("com While<br>");
i=1
while(i<=1000000){
    soma+=i;
    i++;
}
document.writeln("a soma é "+soma);
document.writeln("<br>====================<br>");
soma=0;
// com for
document.writeln("com For<br>");
for(i=0;i<=1000000;i++){
    soma+=i;
}
document.writeln("a soma é "+soma);
document.writeln("<br>====================<br>");