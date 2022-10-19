// https://programmers.co.kr/learn/courses/30/lessons/120864
// 숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
    return my_string.replace(/[A-Z]|[a-z]/g, ' ').trim().replace(/\s+/g, ' ').split(' ').reduce((a,b)=>+b+a,0);
}