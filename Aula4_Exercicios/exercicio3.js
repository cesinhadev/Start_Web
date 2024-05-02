


function fibonacci(n1, n2) {
  var fib = n1 + " - " + n2;
  var cont = 1;
  var n3= 0;

  while (cont <= 10) {
      n3 = n2 + n1;
      n1 = n2;
      n2 = n3;
      fib += " - " + n3;
      cont++;
  }
  document.writeln(fib)
}

const n1 = 0;
const n2 = 1;

fibonacci(n1,n2);