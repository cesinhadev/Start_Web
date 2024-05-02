
let ano = parseInt(prompt("Digite o ano atual:"))
let salario = parseFloat(prompt("Digite seu salario atual:"));

let percentual = (1.5/100);

novoSalario = salario + (percentual * salario)

document.writeln(`Primeiro aumento do salario R$ ${novoSalario.toFixed(2)}`)



for(i = 2020; i <= ano; i++){
    percentual = 2 * percentual
    novoSalario = novoSalario + (percentual*novoSalario)
    document.writeln(`</br>Ano: ${i} ,novo salario R$ ${novoSalario.toFixed(2)}`)
    
}