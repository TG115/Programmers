// https://programmers.co.kr/learn/courses/30/lessons/120887
// k의 개수

function solution(i, j, k) {
    let answer = 0;
    while (i <= j) {
        (i+'').split('').map(n=>+n===k?answer++:0);
        i++;
    }
    return answer;
}