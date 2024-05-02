function pulaLinha() {
  document.write("<br><br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

let numeroTabuada = parseInt(
  prompt("Deseja ver o resultado da tabuada de qual número?")
);

// valida se o numero informado e valido
if(numeroTabuada >=1 || numeroTabuada <= 10){
    Tabuada(numeroTabuada);
}

function Tabuada(n) {
  mostra(`<big>Tabuada do número ${n}: </big>`);

  for (var contador = 1; contador <= 10; contador++) {
    mostra(`${n} x ${contador} = ${n * contador}`);
  }

  mostra("Fim");
}
