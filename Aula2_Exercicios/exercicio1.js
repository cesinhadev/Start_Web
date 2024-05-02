
let num = window.prompt('Informe um numero:')

if(num>=0){
    if(num % 2 ==0){
        document.writeln(`o numero ${num} é Par`)
    }else{
        document.writeln(`o numero ${num} é Impar`)
    }
}else{
    document.writeln(`o numero ${num} não é positivo`)
}
