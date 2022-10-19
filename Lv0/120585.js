// https://programmers.co.kr/learn/courses/30/lessons/120585
// 머쓱이보다 키 큰 사람

function solution(array, height) {
    return array.sort((a,b)=>a-b).filter(n=>n>height).length;
}