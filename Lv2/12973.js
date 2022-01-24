// https://programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기
// Stack

function solution(s)
{
    let stack = [];
    s.split('').map(v => stack.length ? stack[stack.length-1] === v ? stack.pop() : stack.push(v) : stack.push(v));
    return stack.length ? 0 : 1;
}