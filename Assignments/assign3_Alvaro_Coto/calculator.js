/*
Establishes disInput as a function.
This function displays the input and output of the calculator.
*/
function disInput(val) {
	document.getElementById("inputOutput").value += val;
}
/*
Establishes the solve function
This function goes through a series of else if statments to determine if the trig functions
'Sin', 'Cos', or 'Tan' are present before it program proceeds with its calculation.
*/
function solve() {
	var inputValue = document.getElementById("inputOutput").value;

	if (inputValue.includes("Sin")) {
		var calcValue = inputValue.substr(4, inputValue.length);
		document.getElementById("inputOutput").value = Math.sin(calcValue);
	}
	else if (inputValue.includes("Cos")) {
		var calcValue = inputValue.substr(4, inputValue.length);
		document.getElementById("inputOutput").value = Math.cos(calcValue);
	}
	else if (inputValue.includes("Tan")) {
		var calcValue = inputValue.substr(4, inputValue.length);
		document.getElementById("inputOutput").value = Math.tan(calcValue);
	}
	else {
		var output = eval(inputValue);
		document.getElementById("inputOutput").value = output;
	}

}
/*
Estbalishes the clr funstion.
This fuunction clears the display field of whether it be an input or output
*/
function clr() {
	document.getElementById("inputOutput").value = "";
}