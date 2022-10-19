// https://programmers.co.kr/learn/courses/30/lessons/120851
// 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
    return my_string.split('').filter(n=>+n==n).reduce((a,b)=>+b+a,0);
}