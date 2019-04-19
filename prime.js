// A function that checks if a number is prime or not and returns true or false 

function isPrime(num) {
  let count = 0;
  if (num <= 1) {
    return false;
  } else {
    for (let i = 1; i <= (num - 2); i++) {
      if (num % (num - i) === 0) count++
    }
    if (count > 0) {
      return false;
    } else return true;
  }
}

// Examples 
// isPrime(1) gives => false;
// isPrime(5) gives => true
