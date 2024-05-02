let salario = parseFloat(window.prompt('Informe o seu salario:'));

let financiamento = parseFloat(window.prompt('Informe o seu financiamento:'));

if(financiamento <= (salario * 5)){

    document.writeln(`Financiamento Concedido</br>`);

}else{

    document.writeln(`Financiamento Negado</br>`);
}

document.writeln(`Obrigado por nos consultar`)
