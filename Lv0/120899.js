// https://programmers.co.kr/learn/courses/30/lessons/120899
// 가장 큰 수 찾기

function solution(array) {
    return [Math.max(...array),array.indexOf(Math.max(...array))];
}