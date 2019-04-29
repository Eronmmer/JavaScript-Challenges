// Function to return the square root of a number using the Babylonain method
function squareRoot(radicand) {
  if (radicand < 0 || isNaN(radicand)) {
    return NaN;
  } else if (radicand == 0) {
    return 0;
  } else {
    let testNum = radicand / 2;
    let error = 0.000001;
    while (testNum > 0) {
      let nextNum = radicand / testNum;
      if (Math.abs(nextNum - testNum) <= error && testNum - nextNum < 1e-7) {
        return parseFloat(nextNum.toFixed(6));
      }
      if (Math.abs(nextNum - testNum) <= error) {
        return nextNum;
      }
      let average = (nextNum + testNum) / 2;
      testNum = average;
    }
  }
}
