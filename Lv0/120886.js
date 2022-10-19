// https://programmers.co.kr/learn/courses/30/lessons/120886
// A로 B 만들기

function solution(before, after) {
    return before.split('').sort().join('') == after.split('').sort().join('') ? 1 : 0;
}