// 10 alunos com 4 notas, tirar a média e contar o nº de médias>=7
var medias = new Array();
var i, j;
var nMedias;
var calculoMedia;

for(i=0;i<10;i++){
    calculoMedia=0
    for(j=0;j<4;j++){
        calculoMedia += parseFloat(prompt("Digite a Nota:"));
    }
    calculoMedia/=4;
    medias[i]=calculoMedia;
    if(medias[i]>=7){
        nMedias++;
    }
}
document.write("O nº de Notas >=7 é "+nMedias);