// https://programmers.co.kr/learn/courses/30/lessons/120868
// 삼각형의 완성조건 (2)

function solution(sides) {
    return Math.min(...sides)*2-1;
}