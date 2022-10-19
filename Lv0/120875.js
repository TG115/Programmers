// https://programmers.co.kr/learn/courses/30/lessons/120875
// 평행

function solution(dots) {
    let angles = [];
    for (let i = 0; i < 3; i++) {
        for (let j = i+1; j <= 3; j++) {
            angles.push(Math.atan2(Math.abs(dots[j][1] - dots[i][1]), Math.abs(dots[j][0] - dots[i][0])));
        }
    }
    return angles.length>new Set(angles).size?1:0;
}