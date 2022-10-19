// https://programmers.co.kr/learn/courses/30/lessons/120848
// 팩토리얼

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let f = 1;
        let j = i;
        while(j) f *= j--;
        if (f > n) break;
        answer = i;
    }
    return answer;
}