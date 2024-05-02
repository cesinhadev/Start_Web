var num = new Array(20);
function QuebraLinha(){
    return document.write("<br>")
}

for (var i = 1; i < 21; i++) {
  num[i] = Math.floor(Math.random() * 1000);
  document.write(num[i] + "<br>");
}
for (var i = 2; i < 21; i++) {
  var aux = num[i];
  var j = i - 1;
  while (aux < num[j]) {
    num[j + 1] = num[j];
    j = j - 1;
    if (j == 0) {
      break;
    }
  }
  num[j + 1] = aux;
}

QuebraLinha()

document.write("============= LISTA DE NUMEROS ORDENADAS ====================")

QuebraLinha()
QuebraLinha()

for (var i = 1; i < 21; i++) {
    document.write(num[i] + " - ");
}


