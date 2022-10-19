// https://programmers.co.kr/learn/courses/30/lessons/120846
// 합성수 찾기

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i%j==0) {
                cnt += 2;
                if (i==j) cnt--;
            }
        }
        if (cnt >= 3) answer++;
    }
    return answer;
}