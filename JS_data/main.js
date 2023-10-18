"use strict";
// 구구단
// for 문으로 a 의 값을 초기화 한 뒤 a의 범위는 10 미만의 수까지만 증가하며 돌기
// a = 1일때 부터 b가 포함된 for문은 10 미만의 수까지 증가하며
// 결과값인 result 를 통해 a의 현재 값과 b의 현재 값을
// document.write 를 통해 출력

for (let a = 1; a < 10; a++) {
	for (let b = 1; b < 10; b++) {
		let result = a * b;
		document.write(a + " * " + b + " = " + result + "<br />");
	}
}

// 등급 구하기
// jumSu 변수에 값을 대입.
let jumSu = 65;
// naMuGi 변수에 jumSu를 10으로 나눈 나머지의 값을 대입.
let naMuGi = jumSu % 10;
// finalJumSu 에 변수들의 차를 대입.
let finalJumSu = jumSu - naMuGi;
// switch 문을 돌면서 finalJumSu 의 값에 따라
// 각 등급을 출력한다.
// 각 등급에 맞는 입력값에 대한 출력값이 나오면
// break 문을 통해 더이상 반복문을 돌지 않는다.
switch (finalJumSu) {
	case 90:
		document.write("A등급입니다.<br />");
		break;
	case 80:
		document.write("B등급 입니다.<br />");
		break;
	case 70:
		document.write("C등급 입니다.<br />");
		break;
	case 60:
		document.write("D등급 입니다.<br />");
		break;
	default:
		document.write("F등급 입니다.<br />");
		break;
}

// 3개의 값중 가운데 값 구하기.
// arr 에 배열 변수를 초기화
// 가운데 값은 0,1,2 중 1이므로 1을 출력.
const arr = [1, 2, 3];
document.write(arr[1] + "<br />");

// 삼각형 모양 별찍기
// ret에는 빈문자열로 변수를 초기화.
let ret = "";
// size 에는 5라는 홀수 값을 대입.
let size = 5;

// for 문을 돌며 i 가 1로 초기화 되고 i 는 5 이하라면
// 다시 밑의 for문을 돌고 j 의 값은 5 - i 라면
// ret에 공백을 더한값을 넣고 j 를 1 증가시킨 뒤
// 세 번째 for문으로 들어간다.
for (let i = 1; i <= size; i++) {
	for (let j = 1; j <= size - i; j++) {
		ret += " ";
	}
	// 공백이 더해진 상태에 k 라는 변수를 초기화 하고
	// k 의 값이 2 * i-1 보다 작을 경우
	// ret의 값에 *를 더한 값을 출력한 뒤 k 를 1 증가시키고
	// 첫번째 for문으로 들어가서 반복 작업을 수행한다.
	for (let k = 1; k <= 2 * i - 1; k++) {
		ret += "*";
	}
	// i의 첫번째 반복이 마치게 되면 한줄 띄어서 출력한다.
	ret += "<br/>";
}
document.write(ret);

// 10 개의 값 중에서 가운데 값 구하기
// function 으로 함수 클래스를 구현한다.
function minOfArray(nums) {
	// nums의 배열에서 최소값을 찾기 위해 Infinity 로 초기화를 한다.
	let min = Infinity;
	// for문을 사용해 배열의 가장 최소값을 반환한다.
	for (let i = 0; i < nums.length; i++) {
		if (min > nums[i]) {
			min = nums[i];
		}
	}
	return min;
}
// for문을 사용해 배열의 가장 최대값을 반환한다.
function maxOfArray(nums) {
	// 반복문에서 최대값을 찾기위해 음의 무한대로 초기화 한다.
	let max = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (max < nums[i]) {
			max = nums[i];
		}
	}
	return max;
}
// 배열 대입
const nums = [11, 123, 27, 49, 63, 85, 42, 72, 51, 36];
// 배열의 오름차순으로 정렬
const sortedNums = nums.sort((a, b) => a - b);
// 정렬된 배열을 출력
document.write(sortedNums + "<br/>");
// 최소값을 구한다.
const min = minOfArray(nums);
// 최대값을 구한다.
const max = maxOfArray(nums);
// sum 을 초기화한다.
let sum = 0;
// for문을 돌며 배열의 모든 값의 합을 구한다.
for (let i = 0; i < nums.length; i++) {
	sum += nums[i];
}
// middle 이라는 변수에 정렬된 nums의 중간 값을 구한다.
const middle = (nums[4] + nums[5]) / 2;
// 중간값 출력
document.write(middle + "<br/>");
// 모든 합 출력
document.write(sum + "<br/>");
// 최소값 출력
document.write(min + "<br/>");
// 최대값 출력
document.write(max + "<br/>");

// const min = Math.min.apply(null, nums);
// const max = Math.max.apply(null, nums);
// document.write(min);
// document.write(max);
