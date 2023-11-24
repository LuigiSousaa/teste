//Exercicio
// Ler 4 valores referente a quatro notas escolares 
//e imprimir a nota do aluno, que é a média dessas 4 notas

var notas = 0;
var iteracao= 0;
var nNotas = prompt("Digite o nº de Notas");
while(iteracao<nNotas){
    notas += parseFloat(prompt("Digite a Nota"));
    iteracao+=1;
}
notas/=iteracao
document.write("A Média é: "+notas);