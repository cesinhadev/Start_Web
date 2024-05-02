let cateto_a = parseInt(window.prompt(`Informe o primeiro valor:`))

let cateto_b = parseInt(window.prompt(`Informe o segundo valor:`))

let hipotenusa = parseInt(window.prompt(`Informe o terceiro valor:`))


if((cateto_a + cateto_b)> hipotenusa && ((cateto_a + hipotenusa) > cateto_b) && (cateto_b + hipotenusa)>cateto_a){    

    document.writeln(`Isso eh um tringulo`)
    
}else{
    
    document.writeln(`Isso não eh um tringulo`)
}  

if(cateto_a === cateto_b === hipotenusa){

    document.writeln(`</br>Isso eh um tringulo Equilatero`)

}else if(cateto_a != cateto_b != hipotenusa){
    
    document.writeln(`</br>Isso eh um tringulo Escaleno`)

}else {
    
    document.writeln(`</br>Isso eh um tringulo Isosceles`)
}
