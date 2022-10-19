// https://programmers.co.kr/learn/courses/30/lessons/120840
// 구슬을 나누는 경우의 수

function factorial(n,m=0) {
    let result = 1;
    while(n>m) {
        result *= n--;
    }
    return result;
}

function solution(n, m) {
    return Math.abs(n-m)<m?factorial(n,m)/factorial(n-m):factorial(n,n-m)/factorial(m);
}