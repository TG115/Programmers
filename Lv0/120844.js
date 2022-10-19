// https://programmers.co.kr/learn/courses/30/lessons/120844
// 배열 회전시키기

function solution(numbers, direction) {
    return direction=='left'?[...numbers,numbers[0]].splice(1):[numbers[numbers.length-1],...numbers].splice(0,numbers.length);
}