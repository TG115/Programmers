// https://programmers.co.kr/learn/courses/30/lessons/120836
// 순서쌍의 개수

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n%i == 0) {
            answer += 2;
            if (n/i == i) answer--;
        }
    }
    return answer;
}