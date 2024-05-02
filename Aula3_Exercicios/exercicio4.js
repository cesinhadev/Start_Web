let totalItem = 0;
let produto1 = 0;
let produto2 = 0;
let produto3 = 0;
 
while(totalItem < 4){
    let opcao = parseInt(prompt(`
    [1] Produto A
    [2] Produto B
    [3] Produto C
    [4] Sair
    Qual o produto escolhido:
`))
switch (opcao){
    case 1:
        
        produto1++;
        totalItem = opcao;
        break;
    case 2:
        
        produto2++;
        totalItem = opcao;
        break;
    case 3:
        produto3++;
        totalItem = opcao;
        break;
    default:
        document.writeln(`Muito obrigado pela compra de produtos foram um total de ${produto1} 
        Produto A, ${produto2} Produto B e ${produto3} Produto C`)
        totalItem = opcao;
        break;

}

}

