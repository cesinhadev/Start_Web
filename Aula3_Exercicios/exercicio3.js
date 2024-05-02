


do{
 let x = parseInt(prompt("Informe o valor de X:"))

 let y = parseInt(prompt("Informe o valor de Y:"))

 if((x > 0) && (y > 0)){
    alert("Primeiro quadrante")

}else if((x < 0) && (y > 0)){
     alert("Segundo quadrante")

}else if ((x < 0) & (y < 0)) {
    alert("Terceiro Quadrante");
}
else if ((x > 0) & (y < 0)) {
    alert("Quarto Quadrante");
}

}while(( x!=0 && y!=0))
