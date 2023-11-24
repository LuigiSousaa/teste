// Estrutura de Decisão Switch

var diaSemana = parseInt(prompt ("Informe o dia (número): "));
var nomeDoDiaDaSemana;
switch(diaSemana) {
case 1: nomeDoDiaDaSemana = "Domingo";
break;
case 2: nomeDoDiaDaSemana = "Segunda-feira";
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
default: nomeDoDiaDaSemana = "[Não encontrado!]";
}
document.write("O dia da semana é: " + nomeDoDiaDaSemana);