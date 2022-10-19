// https://programmers.co.kr/learn/courses/30/lessons/120815
// 피자 나눠 먹기 (2)

function solution(n) {
    let pizza = 1;
    while(true) {
        if (pizza*6%n == 0) return pizza;
        pizza++;
    }
}