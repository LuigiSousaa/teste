/* Algoritmo Para Cálculo de Velocidade Média e Custo da Viagem*/

var DistanciaPercorrida;
DistanciaPercorrida = prompt('Digite a Distância Percorrida:','Digite a Distância em KM');

var TempoGasto;
TempoGasto = prompt('Tempo gasto na Viagem:', 'Digite o Tempo em Horas');

var VelocidadeMedia;
VelocidadeMedia = parseFloat(DistanciaPercorrida) / parseFloat(TempoGasto);

document.write('A velocidade média da Viagem foi de ' +VelocidadeMedia + ' km/h');

var ConsumoCarro;
ConsumoCarro = prompt('Qual é o Consumo do Carro:');

var LitrosCombustivel;
LitrosCombustivel = parseFloat(DistanciaPercorrida)/parseFloat(ConsumoCarro);

var CustoCombustivel;
CustoCombustivel = prompt('Digite o Valor do Combustível');

var GastoViagem;
GastoViagem = parseFloat(LitrosCombustivel)*parseFloat(CustoCombustivel);

document.write(' O Custo da Viagem foi de R$'+GastoViagem);