// ler um vetor de 10 caracteres e contar as consoantes

var letras = ["j","a","v","a","s","c","r","i","p","t"];
var i;
var nConsoantes=0;
// ler caracter por caracter e determinar se é consoante
for(i=0;i<10;i++){
    switch(letras[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        break;
        default: nConsoantes++;
    }
}
document.write("o Nº de Consoantes é: "+nConsoantes);
