// https://programmers.co.kr/learn/courses/30/lessons/120824
// 짝수 홀수 개수

function solution(num_list) {
    return [num_list.filter(n=>!(n%2)).length, num_list.filter(n=>n%2).length];
}