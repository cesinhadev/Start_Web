let TempF = parseFloat(window.prompt("Informe uma temperatura: "))


let TempC = parseFloat((TempF-32) * 5 / 9);



document.writeln(
    `Sua temperatura em Fahrenheit: ${TempF} F 
    </br>Sua Temperatura convertida para Celsius:${TempC.toFixed(1)}C`
  );