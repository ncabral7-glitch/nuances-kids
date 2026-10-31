function simularCompra() {
    let vestido = Number(prompt("Quantidade de vestidos infantis:"));
    let camiseta = Number(prompt("Quantidade de camisetas juvenis:"));
    let bermuda = Number(prompt("Quantidade de bermudas de sarja:"));
    let festa = Number(prompt("Quantidade de vestidos de festa:"));
    let conjunto = Number(prompt("Quantidade de conjuntos juvenis Brasil:"));

    if (
        !Number.isInteger(vestido) || vestido < 0 ||
        !Number.isInteger(camiseta) || camiseta < 0 ||
        !Number.isInteger(bermuda) || bermuda < 0 ||
        !Number.isInteger(festa) || festa < 0 ||
        !Number.isInteger(conjunto) || conjunto < 0
    ) {
        alert("Informe quantidades válidas, sem números negativos.");
        return;
    }

    let total = vestido * 89.90 +
                camiseta * 33.50 +
                bermuda * 45.00 +
                festa * 129.90 +
                conjunto * 62.50;

    if (total === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    let desconto = total >= 200 ? total * 0.10 : 0;
    let valorFinal = total - desconto;

    alert(
        "NUANCES KIDS - RESUMO DO PEDIDO\n\n" +
        "Vestidos infantis: " + vestido + "\n" +
        "Camisetas juvenis: " + camiseta + "\n" +
        "Bermudas: " + bermuda + "\n" +
        "Vestidos de festa: " + festa + "\n" +
        "Conjuntos Brasil: " + conjunto + "\n\n" +
        "Subtotal: R$ " + total.toFixed(2) + "\n" +
        "Desconto: R$ " + desconto.toFixed(2) + "\n" +
        "Total: R$ " + valorFinal.toFixed(2)
    );
}