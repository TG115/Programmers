// https://programmers.co.kr/learn/courses/30/lessons/120860
// 직사각형 넓이 구하기

function solution(dots) {
    const minX = Math.min(...[...dots].map(v=>v[0]));
    const maxX = Math.max(...[...dots].map(v=>v[0]));
    const minY = Math.min(...[...dots].map(v=>v[1]));
    const maxY = Math.max(...[...dots].map(v=>v[1]));
    return (maxX-minX)*(maxY-minY);
}