// https://programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기 

function solution(n) {
    return (n+'').split('').map(v=>+v).reduce((a,b)=>a+b);
}