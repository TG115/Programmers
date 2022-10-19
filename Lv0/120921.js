// https://programmers.co.kr/learn/courses/30/lessons/120921
// 문자열 밀기

function solution(A, B) {
    let answer = -1;
    for (let i = 0; i < A.length; i++) {
        if (A==B) return i;
        A = [A.split('').pop(), ...A.split('')].join('').slice(0,B.length);
    }
    return answer;
}