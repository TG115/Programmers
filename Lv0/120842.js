// https://programmers.co.kr/learn/courses/30/lessons/120842
// 2차원으로 만들기

function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length; i+=n) {
        answer.push(num_list.slice(i,i+n));
    }
    return answer;
}