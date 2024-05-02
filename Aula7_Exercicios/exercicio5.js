var num = new Array(7);
function QuebraLinha() {
  return document.write("<br>");
}

function SorteNumeros(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 1; i < 8; i++) {
  num[i] = SorteNumeros(-200, 200);
  document.write(num[i] + "<br>");
}

for (var i = 1; i < 8; i++) {
  for (var j = i + 1; j < 8; j++) {
    if (num[i] > num[j]) {
      var aux = num[i];
      num[i] = num[j];
      num[j] = aux;
    }
  }
}

QuebraLinha();

document.write("============= LISTA DE NUMEROS ORDENADAS ====================");

QuebraLinha();
QuebraLinha();

for (var i = 1; i < 8; i++) {
  document.write(num[i] + " , ");
}
