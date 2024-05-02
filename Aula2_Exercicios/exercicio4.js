

alert(`Programa Solidario

Escolha a opção que deseja fazer:

[1] para doar R$10
[2] para doar R$25
[3] para doar R$50
[4] para doar outros valores
[5] para cancelar
`)

let opcao = parseInt(prompt('digite sua opção escolhida:'))


switch(opcao){
    case 1:
        document.writeln("obrigado pela doação de R$10.00")
    break
    
    case 2:    
        document.writeln("obrigado pela doação de R$25.00")
    break
        
    case 3:
        document.writeln("obrigado pela doação de R$50.00")
    break
    
    case 4:
        const valor = parseFloat(prompt('Digite o valor que você deseja doar:'))
        document.writeln(`Obrigado pela sua doação no valor de R$ ${valor.toFixed(2)}`)
    break;

    case 5:
        document.writeln("Cancelamento da doação feito com sucesso...")
    break    

}





