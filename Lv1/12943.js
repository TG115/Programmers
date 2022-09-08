// https://programmers.co.kr/learn/courses/30/lessons/12943
// 콜라츠 추측 

function solution(num) {
    var answer = 0;
    while(answer++ < 500) {
        if (num == 1) break;
        num = num%2?num*3+1:num/2;
    }
    return answer>=500?-1:answer-1;
}