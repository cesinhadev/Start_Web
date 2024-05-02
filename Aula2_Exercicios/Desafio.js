
const a = parseFloat(prompt("Digite o primeiro valor:")) 

const b = parseFloat(prompt("Digite o segundo valor:")) 

const c = parseFloat(prompt("Digite o terceiro valor:")) 

const I = parseInt(prompt("Digite um valor:")) 

if(I >=0){
    switch (I){
        case 1:
            if (a > b && a > c && b > c){
                document.writeln(`${c} , ${b} , ${a}`)
            }else if (a > b && a > c && c > b){
                document.writeln(`${b},${c},${a}`);
            }
            else if ( b > a && b > c && a > c){
                document.writeln(`${c},${a},${b}`);
            }
            else if ( b > a && b > c && c > a){
                document.writeln(`${a},${c},${b}`);
            }
            else if ( c > a && c > b && b > a){
                document.writeln(`${a},${b},${c}`);
            }
            else if ( c > a && c > b && a > b){
                document.writeln(`${b},${a},${c}`);
            }
        break;

        case 2:
            if (a < b && a < c && b < c){
                document.writeln(`${c},${b},${a}`);
            }
            else if (a < b && a < c && c < b){
                document.writeln(`${b},${c},${a}`);
            }
            else if ( b < a && b < c && a < c){
                document.writeln(`${c},${a},${b}`);
            }
            else if ( b < a && b < c && c < a){
                document.writeln(`${a},${c},${b}`);
            }
            else if ( c < a && c < b && b < a){
                document.writeln(`${a},${b},${c}`);
            }
            else if ( c < a && c < b && a < b){
                document.writeln(`${b},${a},${c}`);
            }
        break;

        case 3:
            if (a < b && a < c && b < c){
                document.writeln(`${b},${c},${a}`);
            }
            else if (a < b && a < c && c < b){
                document.writeln(`${c},${b},${a}`);
            }
            else if ( b < a && b < c && a < c){
                document.writeln(`${a},${c},${b}`);
            }
            else if ( b < a && b < c && c < a){
                document.writeln(`${c},${a},${b}`);
            }
            else if ( c < a && c < b && b < a){
                document.writeln(`${b},${a},${c}`);
            }
            else if ( c < a && c < b && a < b){
                document.writeln(`${a},${b},${c}`);
            }
        break;

        default:
            alert("Digite um valor valido")

        }
    }
else{
    document.writeln("Informe um numero positivo")
}