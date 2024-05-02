let numeros = new Array(8) 


for (var i = 0; i < 9; i++) {
  numeros[i] = +prompt("Digite o" + i + "o número: ");
  document.write(numeros[i] + "   ");
}

document.write("<br>=====ORDEM DECRESCENTE=======<br>");



for (var i = 0; i < 8; i++) {
  for (var j = i + 1; j < 9; j++) {
    if (numeros[i] < numeros[j]) {
      var aux = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = aux;
    }
  }
}
for (var i = 1; i < 9; i++) {
    document.write(numeros[i] + "   ");
}


document.write(" <br>ORDEM CRESCENTE<br> ");



	for (var i=0; i<8; i++) {		
		for (var j=i+1; j<9; j++) {
			if (numeros[i] > numeros[j]) {
				var aux = numeros[i];
				numeros[i] = numeros[j];
				numeros[j] = aux;
			}
		}				
	}
	for (var i = 1; i < 9; i++) {
		document.write(numeros[i] + "  ");
}



