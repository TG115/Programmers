// https://programmers.co.kr/learn/courses/30/lessons/120897
// 약수 구하기

function solution(n) {
    let arr = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n%i === 0) {
            arr.push(i);
            if (n/i !== i) arr.push(n/i);
        }
    }
    return arr.sort((a,b)=>a-b);
}