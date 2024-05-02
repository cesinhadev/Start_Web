let matriz = new Array(3)



var somaTotal = 0;
var somaLinha3 = 0;
var somaColuna2 = 0;
var somaDiag = 0;

for (var i = 0; i < 3; i++) {
    matriz[i] = [];
    for (var j = 0; j < 3; j++) {            
        matriz[i][j] = +prompt("Digite o valor coluna["+ i +"]" + "linha[" + j + "]: ");
        somaTotal = matriz[i][j] + somaTotal;
        if (i == 2) {
            somaLinha3 = matriz[i][j] + somaLinha3;
        }
        if (j == 1) {
            somaColuna2 = matriz[i][j] + somaColuna2;
        }
        if (i == j) {
            somaDiag = matriz[i][j] + somaDiag;
        }
    }
}

for(var i=0 ; i<3 ; i++){
   for(var j=0; j<3 ; j++){
      document.write(matriz[i][j] + "  ");
  }
  document.write("<br>");      
} 
document.write("A soma total é: " + somaTotal + "<br>");
document.write("A soma da linha 3 é: " + somaLinha3 + "<br>");
document.write("A soma da coluna 2 é: " + somaColuna2 + "<br>");
document.write("A soma da diagonal Principal é: " + somaDiag + "<br>"); 
