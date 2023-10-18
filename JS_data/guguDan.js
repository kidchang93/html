'use strict';

// num1을 2로 초기화
var num1 = 2;
// while 문 시작 -> num1 은 9보다 작거나 같을 동안
// 1 로 초기화된 num2도 9보다 작거나 같을 동안
// 반복하며 num1과 num2 의 결과값을 증가시키며 계속 출력한다
while (num1 <= 9) {
  var num2 = 1;
  while (num2 <= 9) {
    document.write(num1 + ' X ' + num2 + ' = ' + num1 * num2 + '<br/>');
    num2++;
  }
  num1++;
}
