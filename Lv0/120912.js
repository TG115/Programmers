// https://programmers.co.kr/learn/courses/30/lessons/120912
// 7의 개수

function solution(array) {
    return array.reduce((a,b)=>a+(b+'').split('').filter(n=>n==7).length,0);
}