function imprimirFibonacci(n) {
  let a = 0;
  let b = 1;

  console.log("Serie de Fibonacci:");

  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}

const n = 7;
imprimirFibonacci(n);
