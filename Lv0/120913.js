// https://programmers.co.kr/learn/courses/30/lessons/120913
// 잘라서 배열로 저장하기

function solution(my_str, n) {
    var answer = [];
    for (let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.split('').slice(i,i+n).join(''));
    }
    return answer;
}