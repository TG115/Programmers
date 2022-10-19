// https://programmers.co.kr/learn/courses/30/lessons/120894
// 영어가 싫어요

function solution(numbers) {
    const num = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for (let i = 0; i < 10; i++) {
        numbers = numbers.split(num[i]).join(i);
    }
    return +numbers;
}