let prof = new Array(4);
let hora_aula = new Array(4);
let valor = new Array(4);


var maior = 0
var salario = 0

for(var i =0; i < prof.length; i++){
    prof[i] = prompt("Informe o nome do professor:")
    hora_aula[i] = +prompt("Informe a quantidade de horas:")
    valor[i] = +prompt("Informe o valor da hora trabalhada:")

}


for(var i = 0;i< prof.length; i++ ){
    salario = hora_aula[i] * valor[i]
    document.writeln(`O salário do professor ${prof[i]} é: ${salario}`)

    if(salario > maior){
        maior = salario
    }
}
document.writeln(`O maior salario é: ${maior}`)