// https://programmers.co.kr/learn/courses/30/lessons/120889
// 삼각형의 완성조건 (1)

function solution(sides) {
    sides.sort((a,b)=>a-b);
    return sides[0]+sides[1]>sides[2]?1:2;
}