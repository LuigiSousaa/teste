//Exercicio com for
// Ler 4 valores referente a quatro notas escolares 
//e imprimir a nota do aluno, que é a média dessas 4 notas

var notas = 0;
var i;

for(i=0;i<4;i++){
    notas += parseFloat(prompt("Digite a Nota "));
}
notas/=i
document.write("A Média é: "+notas);