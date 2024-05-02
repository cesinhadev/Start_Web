const num = parseInt(prompt('Informe um numero:'))
let divisor = 0;

for(let cont = 1; cont <= num; cont++){
    if(num % cont == 0){
        divisor++;        
    }
}
if(divisor == 2){
    document.writeln(`O numero ${num} é primo`)
}else{
    document.writeln(`O numero ${num} não é primo`)
}