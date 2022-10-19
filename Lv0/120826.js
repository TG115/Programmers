// https://programmers.co.kr/learn/courses/30/lessons/120826
// 특정 문자 제거하기

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}