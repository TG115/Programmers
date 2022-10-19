// https://programmers.co.kr/learn/courses/30/lessons/120890
// 가까운 수

function solution(array, n) {
    return array.sort((a,b)=>a-b).filter(a=>Math.abs(n-a)==Math.min(...array.map(v=>Math.abs(n-v))))[0];
}