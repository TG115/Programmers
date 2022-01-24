// https://programmers.co.kr/learn/courses/30/lessons/12951
// JadenCase 문자열 만들기

function solution(s) {
    return s.split('').map((v,i) => i?s[i-1]===' '?v.toUpperCase():v.toLowerCase():v.toUpperCase()).join('');
}