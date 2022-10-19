// https://programmers.co.kr/learn/courses/30/lessons/120924
// 다음에 올 숫자

function solution(c) {
    return c.at(-1)-c.at(-2) == c.at(-2)-c.at(-3)?c.at(-1)+(c.at(-1)-c.at(-2)):c.at(-1)*(c.at(-1)/c.at(-2));
}