// exemplo 2 - Vetor dias da semana
var hoje = new Date();//pega a data do dia
var dia = hoje.getDay();//getDay - transforma a data em dias da semana(de 0 a 6)
var semana = new Array(6);//Criação de um array de tamanho "7"

semana[0]="Domingo";
semana[1]="Segunda-feira";
semana[2]="Terça-feira";
semana[3]="Quarta-feira";
semana[4]="Quinta-feira";
semana[5]="Sexta-feira";
semana[6]="Sábado";

document.write(semana[dia]);