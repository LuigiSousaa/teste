/* Script de valor real*/

var Numero1;
var Numero2;
var Resposta;

Numero1 = parseFloat(prompt('Entre com o 1º valor:'));
Numero2 = parseFloat(prompt('Entre com o 2º valor:'));

Resposta = (Numero1+Numero2).toFixed(2);

document.write("o Resultado é: ",Resposta);