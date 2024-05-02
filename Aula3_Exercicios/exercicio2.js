const codigo = 2023;
let cont = 0;

while (cont < 1) {
  let senha = parseInt(prompt("Informe sua senha:"));

  if (senha === codigo) {
    alert(`Acesso Permitido`);
    cont++;
  } else {
    alert(`Senha Invalida, Tente novamente`);
  }
}
