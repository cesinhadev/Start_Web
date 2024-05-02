let a = parseInt(window.prompt(`Informe o primeiro numero:`))

let b = parseInt(window.prompt(`Informe a segunda numero:`))

let c = parseInt(window.prompt(`Informe a terceira numero`))


if(a === b){
    document.writeln(`o valor de  a  eh igual ao valor de b </br>`)
}else if(a>=b){
    document.writeln(`o valor de  a  eh maior que valor de b </br>`)
}

if(c<=b){
    document.writeln(`o valor de  c  eh menor que o valor de b`)
}else if(c!=b){
    document.writeln(`o valor de  c  eh diferente que valor de b`)
}