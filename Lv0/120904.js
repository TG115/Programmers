// https://programmers.co.kr/learn/courses/30/lessons/120904
// 숫자 찾기

function solution(num, k) {
    return (num+'').indexOf(k)>-1?(num+'').indexOf(k)+1:-1;
}