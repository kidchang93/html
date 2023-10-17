"use strict";
// 구구단
for (let a = 1; a < 10; a++) {
	for (let b = 1; b < 10; b++) {
		let result = a * b;
		console.log(a + " * " + b + " = " + result);
	}
}
// 등급 구하기
let jumSu = 65;
let naMuGi = jumSu % 10;
let finalJumSu = jumSu - naMuGi;

switch (finalJumSu) {
	case 90:
		console.log("A등급입니다.");
		break;
	case 80:
		console.log("B등급 입니다");
		break;
	case 70:
		console.log("C등급 입니다");
		break;
	case 60:
		console.log("D등급 입니다.");
		break;
	default:
		console.log("F등급 입니다.");
		break;
}
// 3개의 값중 가운데 값 구하기
const arr = [1, 2, 3];
console.log(arr[1]);
// 삼각형 모양 별찍기

let ret = "";
let size = 5;

for (let i = 1; i <= size; i++) {
	for (let j = 1; j <= size - i; j++) {
		ret += " ";
	}
	for (let k = 1; k <= 2 * i - 1; k++) {
		ret += "*";
	}
	ret += "\n";
}

// for (let i = size - 1; i > 0; i--) {
// 	for (let j = size; j > i; j--) {
// 		ret += " ";
// 	}
// 	for (let k = 1; k <= 2 * i - 1; k++) {
// 		ret += "*";
// 	}
// 	ret += "\n";
// }

console.log(ret);

// 10 개의 값 중에서 가운데 값 구하기
