// https://programmers.co.kr/learn/courses/30/lessons/120823
// 직각삼각형 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 0; i < input[0]; i++) console.log('*'.repeat(i+1));
});