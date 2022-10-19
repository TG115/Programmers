// https://programmers.co.kr/learn/courses/30/lessons/120862
// 최댓값 만들기 (2)

function solution(n) {
    n.sort((a,b)=>b-a);
    return n[0]*n[1]>n[n.length-1]*n[n.length-2]?n[0]*n[1]:n[n.length-1]*n[n.length-2];
}