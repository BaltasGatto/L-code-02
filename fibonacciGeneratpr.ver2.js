/*
function fibonacciGenerator(n) {
    let fibonnaciNumber = [];
  
    if (n == 1) {
      fibonnaciNumber = [0];
    } else if (n == 2) {
      fibonnaciNumber = [0, 1];
    } else {
      fibonnaciNumber = [0, 1];
  
      for (let i = 2; i < n; i++) {
        let newNumber = fibonnaciNumber[i - 2] + fibonnaciNumber[i - 1];
        fibonnaciNumber.push(newNumber);
      }
    }
  
    return fibonnaciNumber;
  }
  console.log(fibonacciGenerator(10));
  
  */

function fibonacciGenerator(n) {
  let output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]); // prideda paskutinis skaitmeni
    }
  }

  return output;
}
output = fibonacciGenerator(20);
console.log(output);
