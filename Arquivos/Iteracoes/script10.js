//2 - Apresentar todos os nº divisíveis por 7 até 10.000. (usar while e for)
var i;
// com while
i=1;
document.write("com while<br>");
while(i<=10000){
    if(i%7==0){
        document.write(i+"<br>");
        
    }
    i++;
}
document.write("===== FIM =====<br>");

//for
document.write("com for<br>");
for(i=0;i<=10000;i++){
    if(i%7==0){
        document.write(i+"<br>");
    }
}
document.write("===== FIM =====<br>");