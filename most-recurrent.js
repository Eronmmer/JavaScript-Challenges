// Function to return the most recurrent number in an array

function mostRecurrent(array) {
	let element = 0;
	let count = 0;
	for(let i = 0; i < array.length; i++) {
		let tempElement = array[i];
		let tempCount = 0;
		for(let j = 0; j < array.length; j++) {
			if(array[j] === tempElement) {
				tempCount++;
			}
			if(tempCount > count) {
				element = tempElement;
				count = tempCount;
			}
		}
	}
	return element;
}

// Example 
// mostRecurrent([1, 2, 3, 4, 3]) gives //-> 3
