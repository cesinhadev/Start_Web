let vetor = new Array(11);


for(var i = 0; i < vetor.length; i++){
    vetor[i] = +prompt("Informe um numero:")
}

console.log(vetor.values);

for(var i = 0; i < 10; i++){
    for (let j = i+1; j < vetor.length; j++) {
        if(vetor[i] > vetor[j]){
            var aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux;

        }
        
    }
}

for(var i = 0; i < vetor.length; i++){
	document.write(vetor[i] + " ,  ");
	
}



