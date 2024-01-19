function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Các số nguyên tố trong mảng là:");
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    console.log(numbers[i]);
  }
}