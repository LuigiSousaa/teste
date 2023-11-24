//Exercicio 1 - Comparar Numeros

//Obter 1º Numero
var primeroNumero = prompt("digite o 1º Numero:");
//obter 2º Numero
var segundoNumero = prompt("digite o 2º Numero:");
//comparar qual é maior 
if (primeroNumero>segundoNumero){
    // se 1º> print(1º valor);
    document.write("O 1º é o Maior Número ", primeroNumero);
}else if(primeroNumero==segundoNumero){
    // Quando Números são Iguais
    document.write("Os Números são Iguais", segundoNumero);
}else{
    // senão print(2º valor);
    document.write("O 2º é o Maior Número ", segundoNumero);
}
