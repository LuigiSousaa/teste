// Resolução de Exercícios
// 1 - Matriz 5x5 / diagonal 1 e restante 0;
var matriz = new Array();
var i, j;
// construção da matriz
document.write("Contruindo a Matriz.... <br>");
for(i=0;i<5;i++){
    matriz[i] = new Array();
    for(j=0;j<5;j++){
        //se i=j {1} senão{0}
        if(i==j){
            matriz[i][j]=1;
        }else{
            matriz[i][j]=0;
        }
    }
}
document.write("Matriz Construida!!!!<br>");
// imprimir a matriz
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        document.write("Matriz["+i+"]["+j+"]="
                        +matriz[i][j]+"<br>");
    }
}
document.write("Matriz Completa!!!!<br>");
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        document.write(matriz[i][j]+"  ");
    }
    document.write("<br>");
}
//2 - Matriz 4x4 aleatória, imprimir e transposta, somar diagonal
var matrizt = new Array();
document.write("Gerando Matriz 4x4 Aleatória");
for(i=0;i<4;i++){
    matrizt[i] = new Array();
    for(j=0;j<4;j++){
        matrizt[i][j]=Math.floor(Math.random()*9+1);
    }
}
document.write("Matriz Completa!!!!<br>");
//imprimindo matriz
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        document.write(matrizt[i][j]+"  ");
    }
    document.write("<br>");
}
document.write("Matriz Transposta!!!!<br>");
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        document.write(matrizt[j][i]+"  ");
    }
    document.write("<br>");
}
// somando a diagonal principal
var somaDiagonal = 0;
var somaTrianguloSup = 0;
var somaTrianguloInf = 0;
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
    if(i==j){
        somaDiagonal +=parseInt(matrizt[i][j]);
    }else if(i<j){
        somaTrianguloSup +=parseInt(matrizt[i][j]);
    }else{
        somaTrianguloInf +=parseInt(matrizt[i][j]);
    }
    }
}
document.write("Soma da Diagonal Principal é "+somaDiagonal);
document.write("Soma da Trinagulo Superior é "+somaTrianguloSup);
document.write("Soma da Triangulo Inferior é "+somaTrianguloInf);



