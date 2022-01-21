// https://programmers.co.kr/learn/courses/30/lessons/70128
// 내적

function solution(a, b) {
    return a.reduce((r,v,i) => {return r+v*b[i]},0);
}