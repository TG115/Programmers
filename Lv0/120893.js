// https://programmers.co.kr/learn/courses/30/lessons/120893
// 대문자와 소문자

function solution(my_string) {
    return my_string.split('').map(s=>s.toUpperCase()===s?s.toLowerCase():s.toUpperCase()).join('');
}