// A function that determines all possible number of squares that are in a true rectangle(one which is not a square)
function sqrInRec(length, width) {
  let result = [];
  if (length === width) {
    return null;
  } else {
    while (length !== width) {
      let smaller = length < width ? length : width;
      let bigger = length > width ? length : width;
      result.push(smaller);
      length = smaller;
      width = bigger - smaller;
    }
    result.push(length);
    return result;
  }
}

// Eg sqrInRec(3, 3) => null
// sqrInRec(5, 3) => [3, 2, 1, 1]
// sqrInRec(20, 14) => [14, 6, 6, 2, 2, 2]
