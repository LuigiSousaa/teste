// Estrutura de Decisão IF ELSE
// Exemplo: Calculo de Frete

//obter do usuario o valor da compra
var valorProduto = parseFloat(prompt('Digite o Valor da Compra: '));
//Informar para o Cliente se obteve frete gratis
document.write("O valor da Sua compra foi de ", valorProduto);
var freteGratis = valorProduto>=100;
if (freteGratis){
    document.write("<br/>Frete Grátis para essa Compra =)");
}else{
    document.write("Adicione Mais produtos em Seus Carrinho e Tenha Frete Grátis");
}
document.write("<br/>=========FIM=======");