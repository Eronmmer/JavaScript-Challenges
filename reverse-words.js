// A function that takes a string parameter and reverses each word in the string retaining space(s) also.

function reverseMe(str) {
	let one = str.split(' ');
	return one.map(words => words.split('').reverse().join('')).join(' ');
}

// Examples 
// reverseWords('eronmonsele') gives => "elesnomnore"
// reverseWords('one two three') gives => "eno owt eerht"
//reverseWords('   This    has          multiple spaces        ') gives => "    sihT    sah          elpitlum secaps        "


