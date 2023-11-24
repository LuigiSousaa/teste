// desafio 3 valor em ordem crescente
var n1 = prompt('Digite o 1º valor:');
var n2 = prompt('Digite o 2º valor:');
var n3 = prompt('Digite o 3º valor:');

// escrever em onderm crescente
if(n1<n2 && n2<n3){ //n1,n2,n3
    document.write(n1 +" " +n2 +" "+n3);
}else if(n1<n2 && n3<n2){ //n1,n3,n2
    document.write(n1 +" " +n3 +" "+n2);
}else if(n2<n1 && n1<n3){ //n2,n1,n3
    document.write(n2 +" " +n1 +" "+n3);
}else if(n2<n3 && n3<n1){ //n2,n3,n1
    document.write(n2 +" " +n3 +" "+n1);
}else if(n3<n1 && n1<n2){ //n3,n1,n2
    document.write(n3 +" " +n1 +" "+n2);
}else{ //n3, n2, n1
    document.write(n3 +" " +n2 +" "+n1);
}