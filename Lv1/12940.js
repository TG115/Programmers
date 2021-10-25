// https://programmers.co.kr/learn/courses/30/lessons/12940
// 최대공약수와 최소공배수

function solution(n, m) {
    var answer = [];
    var i = n, j = 0;
    while(i) { if(m%i==0 && n%i==0) { answer[0]=i; break; } i-- }
    while(j+=m) if(j%n==0) { answer[1]=j; break; }
    return answer;
}