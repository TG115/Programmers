// https://programmers.co.kr/learn/courses/30/lessons/120906
// 자릿수 더하기

function solution(n) {
    return (n+'').split('').reduce((a,b)=>+a + +b,0);
}