
let num = parseInt(prompt("Digite um numero:"))

ParOuImpar(num);



function ParOuImpar(n){
    if(n % 2 == 0){
        return document.write(`o numero ${num} é Par`)
    }else{
        return document.write(`o numero ${num} é Impar`)
    }
}