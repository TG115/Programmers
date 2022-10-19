// https://programmers.co.kr/learn/courses/30/lessons/120837
// 개미 군단

function solution(hp) {
    return ~~(hp/5) + ~~(hp%5/3) + (hp%5%3);
}