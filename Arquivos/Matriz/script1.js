var matriz = new Array();
var i;
var j;
document.write("Sorteando números...<br>");
// preenche os 100 elementos da matriz com números de 1 a 9
for (i = 0; i < 10; i++) {
    matriz[i] = new Array();
    for (j = 0; j < 10; j++) {
        // sorteia um número de 1 a 9 e põe na linha l e na coluna c da matriz
        matriz[i][j] = Math.floor(Math.random() * 9) + 1;
    }
}
document.write("Matriz preenchida!<br>");
// exibe o conteúdo da matriz de várias formas
document.write("Conteúdo de cada posição da matriz:<br>");
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        document.write("matriz[" + i + "][" + j + "] = "
            + matriz[i][j] + "<br>");
    }
}
// imprimindo a matriz em seu formato
document.write("Conteúdo da matriz completa: <br>");
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        document.write(matriz[i][j] + " ");
    }
    document.write("<br>");
}
// soma coluna
document.write ("Soma dos elementos coluna: ");
var somaColuna = 0;
for (i = 0; i < 10; i++) {
somaColuna = parseInt(somaColuna) + parseInt(matriz[i][4]);
}
document.write (somaColuna);

