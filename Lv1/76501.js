// https://programmers.co.kr/learn/courses/30/lessons/76501
// 음양 더하기

function solution(absolutes, signs) {
    return absolutes.reduce((a,v,i) => { return signs[i]?a+=v:a-=v }, 0);
}