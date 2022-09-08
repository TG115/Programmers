// https://programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열 

function solution(arr, divisor) {
    var answer = [];
    arr.forEach(el => {
        if (el % divisor == 0) answer.push(el);
    });
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}