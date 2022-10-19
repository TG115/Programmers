// https://programmers.co.kr/learn/courses/30/lessons/120852
// 소인수분해

function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++) {
        while(n/i===parseInt(n/i)) {
            answer.push(i);
            n/= i;
        }
    }
    return [...new Set(answer)];
}