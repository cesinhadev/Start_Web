var valor = new Array(50);
var maior = 0;
var menor = 1000;
var soma = 0;

for (var i = 0; i < valor.length; i++) {
  valor[i] = Math.floor(Math.random() * 1000);
  document.write(valor[i] + "<br>");
  if (valor[i] > maior) {
    maior = valor[i];
  }
  if (valor[i] < menor) {
    menor = valor[i];
  }
  soma = soma + valor[i];
}

media = soma / 50;
document.write("O maior valor é: " + maior + "<br>");
document.write("O menor valor é: " + menor + "<br>");
document.write("A média dos valores é: " + media + "<br>");
