var times = new Array(10)

for(var z = 0; z < 10; z++){
    times[z] = prompt("Informe o nome do time:");
}
document.write("------------------- <br>");
document.write("  COPA DE FUTEBOL   <br>");
document.write("TABELA DAS PARTIDAS <br>");
document.write("------------------- <br>");

for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++){
     
        if (i != j){
            document.write(times[i] + "[ ] x [ ] " + times[j] + "<br>");                 
        }           
    }
}             

