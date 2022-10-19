// https://programmers.co.kr/learn/courses/30/lessons/120831
// 짝수의 합

function solution(n,t=0) {
    return n?solution(n-1,n%2?t:n+t):t;
}