// https://programmers.co.kr/learn/courses/30/lessons/120811
// 중앙값 구하기

function solution(array) {
    return array.sort((a,b)=>a-b)[~~(array.length/2)];
}