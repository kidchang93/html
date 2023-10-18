"use strict";
// 삼각형 모양 별찍기
// ret에는 빈문자열로 변수를 초기화.
let ret = "";
// size 에는 5라는 홀수 값을 대입.
let size = 5;
// for 문을 돌며 i 가 1로 초기화 되고 i 는 5 이하라면
// 다시 밑의 for문을 돌고 j 의 값은 5 - i 라면
// ret에 공백을 더한값을 넣고 j 를 1 증가시킨 뒤
// 세 번째 for문으로 들어간다.
for (let i = size - 1; i > 0; i--) {
	for (let j = size; j > i; j--) {
		ret += " ";
	}
	// 공백이 더해진 상태에 k 라는 변수를 초기화 하고
	// k 의 값이 2 * i-1 보다 작을 경우
	// ret의 값에 *를 더한 값을 출력한 뒤 k 를 1 증가시키고
	// 첫번째 for문으로 들어가서 반복 작업을 수행한다.
	for (let k = 1; k <= 2 * i - 1; k++) {
		ret += "*";
	} // i의 첫번째 반복이 마치게 되면 한줄 띄어서 출력한다.
	ret += "<br />";
}

document.write(ret);