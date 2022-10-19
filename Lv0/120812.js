// https://programmers.co.kr/learn/courses/30/lessons/120812
// 최빈값 구하기

function solution(array) {
    array.sort((a,b)=>[...array].filter(v=>v==b).length-[...array].filter(v=>v==a).length);
    return [...array].filter(v=>v==[...new Set(array)][0]).length==[...array].filter(v=>v==[...new Set(array)][1]).length?-1:[...new Set(array)][0];
}