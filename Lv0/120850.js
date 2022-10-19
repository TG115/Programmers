// https://programmers.co.kr/learn/courses/30/lessons/120850
// 문자열 정렬하기 (1)

function solution(my_string) {
    return my_string.split('').filter(n=>+n==n).map(n=>+n).sort((a,b)=>a-b);
}