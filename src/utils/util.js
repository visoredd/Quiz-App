export const switchFunc = (val, setFunc) => {
	switch (val) {
		case "Add":
			setFunc("+");
			break;
		case "Subtract":
			setFunc("-");
			break;
		case "Multiply":
			setFunc("*");
			break;
		case "Divide":
			setFunc("/");
			break;
		default:
			setFunc("+");
	}
};

export const calc = (val, operand1, operand2) => {
	switch (val) {
		case "+":
			return operand1 + operand2;
		case "-":
			return operand1 - operand2;
		case "*":
			return operand1 * operand2;
		case "/":
			return operand1 / operand2;
		default:
			return 1;
	}
};
