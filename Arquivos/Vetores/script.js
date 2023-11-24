var precoProdutos = new Array();
var precoUnitario = precoProdutos[0];

document.write("O preço do primeiro produto é "
    + precoUnitario);
precoProdutos[0] = 200.0;
document.write("<br>O primeiro produto teve seu preço alterado.");
document.write("<br>O preço do primeiro produto é "
    + precoProdutos[0]);
document.write("<br>Fim!");
document.write("<br>===============================");
