var vetor_aluno = new Array(5)
var vetor_nota1 = new Array(5)
var vetor_nota2 = new Array(5)
var vetor_media = new Array(5)
var SMed = 0;




for(var i =0; i < 5; i++){
    alert("----- DADOS DO ALUNO -----");
    vetor_aluno[i] = prompt("Nome: ");            
    vetor_nota1[i] = +prompt("Nota1: ");
    vetor_nota2[i] = +prompt("Nota2: ");           
    vetor_media[i] = (vetor_nota1[i] + vetor_nota2[i]) / 2;
    document.write(vetor_aluno[i] + " Media: " + vetor_media[i] + "<br>");
    SMed = SMed + vetor_media[i];
}

var MTurma = SMed / 5;
document.write("--------------------------------- <br>");
document.write("A media da turma é: " + MTurma + "<br>");
document.write("--------------------------------- <br>");
document.write("Alunos que ficaram acima da media: <br>");
document.write("--------------------------------- <br>");


for (var i = 0; i < 5; i++) {
    if (vetor_media[i] > MTurma) {
        document.write(vetor_nome[i] + " - " + vetor_media[i] + "<br>");
    }
}     


