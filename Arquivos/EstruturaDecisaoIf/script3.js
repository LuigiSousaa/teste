// Desafio Par ou Impar
//Obter um Valor do Usuário
var numero = prompt('Digite um Número');
var parImpar = numero%2;

if(parImpar==1){
    document.write('o Número é Impar');
}else if(numero==0){
    document.write('o Número é Zero');
}else{
    document.write('o Número é Par');
}
