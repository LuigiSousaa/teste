// vetor A 10 nº inteiros, mostrar soma dos quadrados
var A = [];
var somaQuadrado = 0;

for(let i=0;i<10;i++){
    A[i]=prompt("Digite um Valor");
    somaQuadrado += A[i]*A[i];
}

document.write("A Soma dos Quadrados é "+somaQuadrado);