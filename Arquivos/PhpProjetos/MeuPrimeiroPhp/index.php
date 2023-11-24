<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MeuPrimeiroPHP</title>
</head>
<body>
<?php
define("PHP", "Linguagem Open - Source");
const HTML = "Linguagem de marcação";
echo PHP; // Linguagem Open - Source
echo "<br>";
echo HTML; // Linguagem de marcação
?>
<hr>
<?php
$meuArray = ["Senai","de","limeira",60,"anos"];
// Para exibir um array por completo, usamos o comando vardump
var_dump($meuArray);
?>
<hr>
<?php
$php = array("Zend" => "CERTIFICAÇÃO", 6 => 60);
echo $php["Zend"]; // CERTIFICAÇÃO
echo "<br>";
echo $php[6]; // 60
// Zend é nossa chave e CERTIFICAÇÃO nosso valor
// 6 é nossa chave e 60 é nosso valor
echo "<br>";
var_dump($php);
?>
<hr>
<?php
$minhaMatriz = [
[10,30],
["Diogo","Barbosa"],
["Senai","de","limeira"]
];
// Quero acessar o valor 30 do primeiro array!
// como posso fazer isso?
// Simples!
echo $minhaMatriz[0][1];
// O primeiro 0 significa que eu quero acessar o primeiro array da matriz
// E o segundo número[1] significa que eu quero acessar o segundo elemento do primeiro array
echo "<br>"; //Quebra de linha
echo $minhaMatriz[2][2];
// Neste outro caso, eu estou acessando o último elemento do último array
echo "<br>";
var_dump($minhaMatriz);
?>
<hr>
<?php
$var = 100;
$type_casting = (bool) $var; // torna – se booleano
$type_casting = (int) $var; // torna – se inteiro
$type_casting = (float) $var; // torna – se float
$type_casting = (string) $var; // torna – se string
$type_casting = (array) $var; // torna – se array
echo $type_casting = (bool)$var; // 1
?>
<hr>
<?php
$frase = "O SENAI é a melhor Escola";
$arrayDeTexto = explode(" ", $frase);
/* No Explode, primeiro você define por qual carácter você quer separar a string
pode ser por virgula(,) ponto(.), ou seja por qualquer caracter.
E também pode ser pro espaço( que é representado por um espaço em branco)
Neste caso eu estou separando a string por espaço
Então a cada espaço que encontrar o PHP vai dividir as palavras
Veja o resultado
*/
var_dump($arrayDeTexto);
?>
<hr>
<?php
$arrayDeTexto = ["SENAI","de","Limeira","é","a","melhor","Escola!!"];
$frase = implode(" ",$arrayDeTexto);
// Neste caso, eu quero adicionar um caracter de espaço(" ") a cada palavra do array!
echo $frase;
?>
<hr>
<?php
$a = 3;
$b = 3;
$c = $a * $b; // resultado é 9
$d = $a + $b; // resultado é 6
$e = $c - $d; // resultado é 3
echo $c ." ".$d." ".$e;
?>
<hr>
<?php
$a = 1; // A variável $a é igual a 1
$a += 2; // Somamos 2 ao valor da $a;
echo $a ."<br>";
$a -= 2; // Subtraímos 2 ao valor da variável $a;
echo $a ."<br>";
$a *= 2; // Multiplicamos o valor da variável $a por 2;
echo $a ."<br>";
$a /= 2; // Dividimos o valor da variável $a por 2.
echo $a ."<br>";
echo ++$a ."<br>"; // Incrementamos 1 e retornamos o valor
echo $a++ ."<br>"; // Retornamos o valor e incrementamos 1
echo --$a ."<br>"; // Decrementamos 1 e retornamos o valor
echo $a-- ."<br>"; // Retornamos o valor e decrementamos 1
?>
<hr>
<?php
$idade = 17;
if($idade < 18) {
echo 'Você não pode entrar aqui!';
} else {
echo 'Seja bem – vindo';
}
?>
<hr>
<?php
$nome = 'Fulano';
switch($nome) {
case 'Fulano':
echo 'E ai Fulano!';
break;
case 'Sicrano':
echo 'E ai Sicrano!';
break;
case 'Beltrano':
echo 'E ai Beltrano!';
break;
default:
echo 'Qual é o seu nome?';
break;
}
// Resultado é: E ai Fulano!
?>


</body>
</html>