// https://programmers.co.kr/learn/courses/30/lessons/120813
// 짝수는 싫어요

function solution(n) {
    let arr = [];
    while (n) {
        if (n%2) arr.push(n);
        n--;
    };
    return arr.sort((a,b)=>a-b);
}