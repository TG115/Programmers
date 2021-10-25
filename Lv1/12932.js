// https://programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 뒤집어 배열로 만들기

function solution(n) {
    return (n+'').split('').reverse().map(x=>+x);
}