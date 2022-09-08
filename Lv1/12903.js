// https://programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기 

function solution(s) {
    return s.length%2?s.substr(s.length/2,1):s.substr(s.length/2-1,2);
}