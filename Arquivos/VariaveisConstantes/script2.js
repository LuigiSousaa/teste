// Exercicios Java Script Variaveis e Constantes

var horasTrabalhas; //Horas Trabalhadas 
var valorHora; // variavel Valor Hora de Trabalho
var percertualDesconto; // Percentual de Desconto INSS
var totalDesconto; // Total de Desconto do Salário
var salarioBruto; // Salario Bruto(sem Descontos)
var salarioLiquido; // Salário Líquido (com Descontos)

// Obter do Usuário as Informações 
// Horas Trabalhas , Valor Hora, Percentual de Descontos INSS
horasTrabalhas = parseInt(prompt('Digite o Total de Horas Trabalhas'));
valorHora = parseFloat(prompt('Digite o Valor da Hora Trabalhada:'));
percentualDesconto = parseInt(prompt("Digite o Percentual de Desconto"));

salarioBruto = parseFloat(horasTrabalhas*valorHora).toFixed(2);
totalDesconto = parseFloat(salarioBruto*percertualDesconto/100).toFixed(2);
salarioLiquido = parseFloat(salarioBruto-totalDesconto).toFixed(2);

document.write('<br/>Salario Bruto: <br/>', salarioBruto);
document.write('<br/>Total de Descontos: <br/>', totalDesconto);
document.write('<br/>Salario Líquido: <br/>', salarioLiquido);

