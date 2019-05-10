// Program to find the greatest common divisor of two integers

function greatestDivisor(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  if (a % b === 0) {
    return b;
  } else return greatestDivisor(b, a % b)
}
