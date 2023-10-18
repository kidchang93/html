"use strict";

// 잔돈의 갯수를 구하라
// 잔돈을 바꿔주는 사용자 정의 함수를 만든다. 매개변수를 money로 생성.
function coinChange(money) {
	// 대한민국 기준 통용되는 화폐의 정보를 배열로 생성한다.
	const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
	// 잔돈의 정보를 넣을 빈 배열을 생성.
	const change = [];
	// for 문을 실행.
	for (let i = 0; money !== 0; i++) {
		// money가 0이 될 때까지 반복하고 i는 동전 배열의 자릿값을 나타냅니다.
		// Math.floor 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다.
		// 따라서 count 라는 변수는 배열의 인덱스가 1보다 크거나 같은 경우 참이라면 Math.floor 함수를 통해
		// money 라는 매개변수를 현재 배열값으로 나눈다.
		// 참이 아니라면 0을 반환한다.
		const count = money / (coins[i] >= 1) ? Math.floor(money / coins[i]) : 0;
		// change 배열의 값에 현재 배열 값이 들어가며 현재 잔돈의 정보를 객체로 저장한다.
		change[i] = {
			value: coins[i], // 동전의 가치
			count: count, // 필요한 동전의 개수
		};
		// money 라는 매개변수를 정의.
		// count 의 값이 0보다 크면(참이라면) money의 값은
		// value 에 count 를 곱한 값을 반환하고
		// 참이 아니라면 매개변수 그대로를 반환한다.
		money = count > 0 ? (money -= coins[i] * count) : money;
	}
	// 거스름돈 정보가 담긴 배열을 반환.
	return change;
}
// coinChange 함수를 호출하여 405620원의 거스름돈을 계산하고 출력.
console.log(coinChange(405620));
