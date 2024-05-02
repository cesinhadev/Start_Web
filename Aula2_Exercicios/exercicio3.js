let nota1 = parseFloat(window.prompt('Informe sua primeira nota:'));

let nota2 = parseFloat(window.prompt('Informe sua segunda nota:'));

let nota3 = parseFloat(window.prompt('Informe sua terceira nota: '));

if((nota1 >= 0 && nota1 <=10) && (nota2 >= 0 && nota2 <=10) && (nota3 >= 0 && nota3 <=10)){

    let media = (nota1 + nota2 + nota3) / 2;
    
    if(media >= 7){
        document.writeln('Aprovado') 
        
    }else{
        if(media < 7 && media >=5){
            
            document.writeln('Recuperação') 
        }
        else{
            if(media < 5){
                document.writeln('Reprovado') 
                
            }
        }
    }









}else{
    document.writeln('nota não é valida') 
}

