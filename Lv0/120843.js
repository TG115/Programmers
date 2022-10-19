// https://programmers.co.kr/learn/courses/30/lessons/120843
// 공 던지기

function solution(numbers, k) {
    return numbers[(k-1)*2%numbers.length];
}