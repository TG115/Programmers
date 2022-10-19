// https://programmers.co.kr/learn/courses/30/lessons/120891
// 369게임

function solution(order) {
    return (order+'').split('').filter(n=>n==3||n==6||n==9).length;
}