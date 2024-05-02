function OrdemDecresente(n1,n2,n3){
    var aux = n1;

    if(n2 > n1){
     aux=n2;
     n2=n1;
     n1=aux;
    }

    if(n3 > n1){
     aux=n3;
     n3=n1;
     n1=aux;
    }

    if(n3 > n2){
     aux=n3;
     n3=n2;
     n2=aux;
    }
    document.writeln(num1 +" - "+ num2 +" - "+ num3);
}

var num1 = prompt("Informe o primeiro numero:")
var num2 = prompt("Informe o segundo numero:")
var num3 = prompt("Informe o terceiro numero:")

OrdemDecresente(num1,num2,num3)