function calcularFatorial (fatorial) {

    if (fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    let resultado = fatorial;
    let primeiroMultipicador = fatorial - 1;
    for (let i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}

let f = parseInt(prompt("Digite um valor:"))
document.write(` ${f}! = ${calcularFatorial(f)}`);