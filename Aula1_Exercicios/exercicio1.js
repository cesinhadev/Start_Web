const alunoNome = window.prompt("Informe o nome do aluno:");


let nota1 = parseFloat(window.prompt("Informe a primeira nota do aluno " + alunoNome + ":"))

let nota2 = parseFloat(window.prompt("Informe a segunda nota do aluno "+ alunoNome + ":"))

let nota3 = parseFloat(window.prompt("Informe a terceira nota do aluno "+ alunoNome + ":"))


let media = (nota1 + nota2 + nota3) / 2


document.writeln(
    `A media do ${alunoNome}  é  ${media.toFixed(1)}`
  );