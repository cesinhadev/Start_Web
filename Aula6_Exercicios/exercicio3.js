var altura = new Array(5);
	var sexo = new Array(5);
	var cont = 1;
	var maior = 0;
    var menor = 10;
    var Nhomens = 0;
    var Nmulher = 0;
    var Amulher = 0;
    var Ahomem = 0;

    do{
    	altura[cont] = +prompt("Digite a altura: ");
    	sexo[cont] = prompt("Digite o sexo m[masc] ou f(fem): ");

    	//Analise de altura
    	if (altura[cont]>maior) {
    		maior = altura[cont];
    	}
    	if (altura[cont]<menor) {
    		menor = altura[cont];
    	}

    	//determinação do sexo
    	if (sexo[cont] == "m") {
    		Nhomens = Nhomens + 1;
            Ahomem = Ahomem + altura[cont];
    	} else {
    		Nmulher = Nmulher + 1;
            Amulher = Amulher + altura[cont];
    	}        
    	cont = cont + 1;
    }while(cont < 6);
    
    mediaM = Amulher/Nmulher;
    mediaH = Ahomem/Nhomens;

    


    document.write("O número de homens: " + Nhomens + "<br>");
    document.write("O número de mulheres: " + Nmulher + "<br>");
    document.write("O menor valor é: " + menor + "<br>");
    document.write("O maior valor é: " + maior + "<br>");
    document.write("A media da altura dos homens é: " + mediaH.toFixed(2) + "<br>");
    document.write("A media da altura das mulheres é: " + mediaM.toFixed(2) + "<br>");