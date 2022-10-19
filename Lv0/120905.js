// https://programmers.co.kr/learn/courses/30/lessons/120905
// n의 배수 고르기

function solution(n, numlist) {
    return numlist.filter(v=>v%n===0);
}