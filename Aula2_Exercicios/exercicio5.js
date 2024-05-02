const peso = parseFloat(prompt("Insira o seu peso:"));

const altura = parseFloat(prompt("Insira a sua altura:"));

let IMC = peso / (altura * altura);

IMC = IMC.toFixed(2);

if (IMC < 16) {
  document.writeln("Magreza grave");
} else if (IMC >= 16 && IMC < 17) {
  document.writeln("Magreza moderada");
} else if (IMC >= 17 && IMC < 18.5) {
  document.writeln("Magreza leve");
}else if (IMC >= 18.5 && IMC < 25){
    document.writeln("Saudavel");
}else if (IMC >= 25 && IMC < 30){
    document.writeln("Sobrepeso");
}else if (IMC >= 30 && IMC < 35){
    document.writeln("Obesidade Grau I");
}else if(IMC >= 35 && IMC < 40){
    document.writeln("Obesidade Grau II");
}else if(IMC >=40){
    document.writeln("Obesidade Grau III");
}
