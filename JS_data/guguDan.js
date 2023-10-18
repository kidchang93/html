"use strict";
var num1 = 2;
while (num1 <= 9) {
	var num2 = 1;
	while (num2 <= 9) {
		document.write(num1 + " X " + num2 + " = " + num1 * num2 + "<br/>");
		num2++;
	}
	num1++;
}
