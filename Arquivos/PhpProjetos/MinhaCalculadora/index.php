<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="POST">
        Valor1: <input type="number" name="valor1">
        Valor2: <input type="number" name="valor2">
        <br>
        <input type="radio" name="operacao" value="+">Soma
        <input type="radio" name="operacao" value="-">SUbtração
        <input type="radio" name="operacao" value="*">Multiplicação
        <input type="radio" name="operacao" value="/">Divisão
        <br>
        <input type="submit" value="Calcular">
    </form>
    <?php
    if(isset($_POST["valor1"]) && isset($_POST["valor2"]) && isset($_POST["operacao"])){
        $valor1 = $_POST["valor1"];
        $valor2 = $_POST["valor2"];
        $operacao = $_POST["operacao"];
        $rersultado;
        switch($operacao){
            case("+"):$resultado = $valor1+$valor2;
            break;
            case("-"):$resultado = $valor1-$valor2;
            break;
            case("*"):$resultado = $valor1*$valor2;
            break;
            case("/"):$resultado = $valor1/$valor2;
            break;
            default: $resultado=0;

        }
        echo "O resultado é ".$resultado;
    }
    ?>
    <hr>
    <form action="index.php" method="POST">
        KM da Viagem: <input type="number" name="kmviagem">
        KM/litro: <input type="number" name="kmlitro">
        Preço Combustivel: <input type="number" name="pcombustivel">
        <br>
        <input type="radio" name="caminho" value="Ida">Ida
        <input type="radio" name="caminho" value="IdaVolta">Ida e Volta

        <br>
        <input type="submit" value="Calcular">
    </form>
    <?php
    if(isset($_POST["kmviagem"],$_POST["vkmlitro"],$_POST["pcombustivel"], $_POST["caminho"])){
        
    }
?>
</body>
</html>