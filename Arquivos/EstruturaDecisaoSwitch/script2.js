// Estrutura de Decisão Switch Meses do Ano

var nMes = parseInt(prompt ("Informe o Mês (número): "));
var nomeDoMes;
switch(nMes) {
case 1: nomeDoMes = "Janeiro";
break;
case 2: nomeDoMes = "Fevereiro";
break;
case 3: nomeDoDiaDaSemana = "Terça-feira";
break;
case 4: nomeDoDiaDaSemana = "Quarta-feira";
break;
case 5: nomeDoDiaDaSemana = "Quinta-feira";
break;
case 6: nomeDoDiaDaSemana = "Sexta-feira";
break;
case 7: nomeDoDiaDaSemana = "Sábado";
break;
default: nomeDoMes = "[Não encontrado!]";
}
document.write("O dia da semana é: " + nomeDoMes);