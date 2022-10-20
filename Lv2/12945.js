// https://programmers.co.kr/learn/courses/30/lessons/12495
// 피보나치 수

function solution(n) {
    let fiv = [0,1];
    for (let i = 1; i < n; i++) {
        fiv.push((fiv[fiv.length-1]+fiv[fiv.length-2])%1234567);
    }
    return fiv.pop();
}