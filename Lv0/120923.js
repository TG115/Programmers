// https://programmers.co.kr/learn/courses/30/lessons/120923
// 연속된 수의 합

function solution(num, total) {
    var answer = [];
    const center = ~~(total/num);
    for (let i = 0; i <= ~~(num/2); i++) {
        answer[~~(num/2)+i] = center+i;
        answer[~~(num/2)-i] = center-i;
    }
    return num/2%1?answer:answer.slice(1);
}