 // efetua a leitura do raio
 const raio = parseFloat(window.prompt("Informe o raio do círculo:"));
 // calcula a área
 let area = Math.PI * Math.pow(raio, 2);
 // mostra o resultado
 document.writeln(
   `A area do círculo de raio ${raio} é igual a ${area.toFixed(2)}`
 );