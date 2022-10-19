// https://programmers.co.kr/learn/courses/30/lessons/120880
// 특이한 정렬

function solution(numlist, n) {
    return numlist.sort((a,b)=>b-a).sort((a,b)=>Math.abs(a-n)-Math.abs(b-n));
}