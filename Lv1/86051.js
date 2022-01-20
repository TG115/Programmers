// https://programmers.co.kr/learn/courses/30/lessons/86051
// 없는 숫자 더하기

function solution(numbers) {
    return 45-numbers.reduce((s,c)=>{return s+c},0);
}