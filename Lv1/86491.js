// https://programmers.co.kr/learn/courses/30/lessons/86491
// 최소직사각형

function solution(sizes) {
    var width = [];
    var height = [];
    sizes.forEach(v => {
        width.push(Math.max(...v));
        height.push(Math.min(...v));
    });
    return Math.max(...width) * Math.max(...height);
}