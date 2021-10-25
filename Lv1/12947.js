// https://programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수

function solution(x) {
    var tot = 0;
    x = String(x);
    for (var i in x) tot += Number(x[i]);
    return x % tot == 0;
}