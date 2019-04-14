//Program to get the factorial of any number
function firstFactorial(num) {
	if(num === 0) return 1;
	else {
		return num * firstFactorial(num - 1);
	}
}
