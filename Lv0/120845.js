// https://programmers.co.kr/learn/courses/30/lessons/120845
// 주사위의 개수

function solution(box, n) {
    return box.reduce((a,b)=>a * ~~(b/n), 1);
}