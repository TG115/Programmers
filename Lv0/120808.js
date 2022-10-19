// https://programmers.co.kr/learn/courses/30/lessons/120808
// 분수의 덧셈

function solution(denum1, num1, denum2, num2) {
    let answer = [denum1*num2+denum2*num1, num1*num2];
    for (let i = num1*num2; i > 0; i--) {
        if (answer[0] % i == 0 && answer[1] % i == 0) {
            answer = answer.map(v=>v/i);
            break;
        }
    }
    return answer;
}