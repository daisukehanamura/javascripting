const numbers = [...Array(100).keys()];
const result = numbers.filter(x => isPrime(x)).map(x => Number(x).toString(16))
console.log(result);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }