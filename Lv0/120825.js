// https://programmers.co.kr/learn/courses/30/lessons/120825
// 문자 반복 출력하기

function solution(my_string, n) {
    return my_string.split('').map(s=>s.repeat(n)).join('');
}