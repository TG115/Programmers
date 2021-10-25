// https://programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기

function solution(s) {
    return s.split(' ').map(v=>v.split('').map((el,i)=>i%2?el.toLowerCase():el.toUpperCase()).join('')).join(' ');
}