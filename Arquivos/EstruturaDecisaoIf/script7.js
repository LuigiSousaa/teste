// 1- feminino e 2-masculino
//Fórmulas: - para homens: (72.7*Altura)– 58; - para mulheres: (62.1*Altura)– 44.7;

var sgenero = prompt("Escolha o Gênero: 1-Feminino e 2-Masculino");
var alturaDigitada = prompt("digite sua Altura:");
var formulaCalculada;
// Tomada de Decisão não Encadeada
if(sgenero==1){
    formulaCalculada = parseFloat((62.1*alturaDigitada)-44.7);
    document.write("O Peso Ideal Para Sua Altura é ", formulaCalculada);
}
if(sgenero==2){
    formulaCalculada = parseFloat((72.7*alturaDigitada)-58);
    document.write("O Peso Ideal Para Sua Altura é ", formulaCalculada);
}
if(sgenero!=1 && sgenero!=2){
    document.write("Digite um nº Válido para o Gênero");
}








//Tomada de decisão encadeada
if(sgenero==1){  // se Feminino
    formulaCalculada = parseFloat((62.1*alturaDigitada)-44.7);
    document.write("O Peso Ideal Para Sua Altura é ", formulaCalculada);
}else if(sgenero==2){ // se masculino
    formulaCalculada = parseFloat((72.7*alturaDigitada)-58);
    document.write("O Peso Ideal Para Sua Altura é ", formulaCalculada);
}else{
    document.write("Digite um nº Válido para o Gênero");
}




