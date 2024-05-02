var matriz_a = new Array(3);


function quebraLinha(){
    return document.write("<br>");
} 




for (var i = 0; i < 3; i++) {
    matriz_a[i] = [];
    for (var j = 0; j < 4; j++) {            
        matriz_a[i][j] = +prompt("Digite o valor linha["+ i +"]" + "coluna[" + j + "]: ");           
    }
}

document.write("Matriz Principal: <br>");
for(var i=0 ; i<3 ; i++){
 for(var j=0; j<4 ; j++){
  document.write(matriz_a[i][j] + " ");
}
quebraLinha();      
}
quebraLinha();
 
document.write("Matriz Modificada: <br>");
for (var i = 0; i < 3; i++) {            
  for (var j = 0; j < 4; j++) {
    if (matriz_a[i][j] < 0) {
        matriz_a[i][j] = 0;
    }
    document.write(matriz_a[i][j] + " ");
  }
  quebraLinha()
}