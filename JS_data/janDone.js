"use strict";

// 잔돈의 갯수를 구하라

const arr = [10, 50, 100, 500, 1000, 5000, 10000, 50000];
const num = 39820;

var num2 = num % 10000;
console.log(num2);
var finalNum = (num - num2) * 0.0001;
console.log(finalNum);
