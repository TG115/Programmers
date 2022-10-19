// https://programmers.co.kr/learn/courses/30/lessons/120903
// 배열의 유사도

function solution(s1, s2) {
    return s1.map(v=>s2.indexOf(v)).filter(s=>s>-1).length;
}