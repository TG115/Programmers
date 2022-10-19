// https://programmers.co.kr/learn/courses/30/lessons/120849
// 모음 제거

function solution(my_string) {
    return my_string.split('').filter(s=>!s.match(/a|e|i|o|u/g)).join('');
}