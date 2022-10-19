// https://programmers.co.kr/learn/courses/30/lessons/120834
// 외계행성의 나이

function solution(age) {
    return (age+'').split('').map(s=>String.fromCharCode(+s+97)).join('');
}