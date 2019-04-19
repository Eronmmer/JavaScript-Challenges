// A function that takes a string parameter and reverses each word in the string retaining space(s) also.

function reverseWords(str) {
  let toArray = str.split(' ');
  let reversedArray = [];
  let preventDuplicate = false; // To make one of the if-statements in the following loop run just once
  for (let i = 0; i < toArray.length; i++) {
    function countInArray(array, searchFor) { // Use to function to avoid the anomalous behavior of duplicate array elements
      return array.filter(item => item === searchFor).length;
    }
    if (toArray[i] === '') {
      reversedArray.push(' ');
    } else {
      if (toArray.length > 1 && toArray[i] !== '' && toArray.indexOf(toArray[i]) > 0 && countInArray(toArray, toArray[i]) === 1) {
        reversedArray.push(' ');
      }
      if ((countInArray(toArray, toArray[i]) > 1)) {
        reversedArray.push(' ') 
      }
      if ((countInArray(toArray, toArray[i]) > 1) && (preventDuplicate === false)) {
        reversedArray.shift()
        reversedArray.unshift(reversedArray.shift());
      }
      for (let x = 0; x < toArray[i].length; x++) {
        reversedArray.push(toArray[i][toArray[i].length - 1 - x]);
      }
    }
    preventDuplicate = true;
  }
  return reversedArray.join('');
}

// Examples 
// reverseWords('eronmonsele') gives => "elesnomnore"
// reverseWords('one two three') gives => "eno owt eerht"
//reverseWords('   This    has          multiple spaces        ') gives => "    sihT    sah          elpitlum secaps        "


