// https://programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기

function solution(numbers) {
    var answer = [];
    numbers.forEach((v,k) => {
        for(var i = k+1; i < numbers.length; i++) {
            if(!answer.includes(numbers[i]+v)) answer.push(numbers[i]+v);
        }
    });
    return answer.sort((a,b)=>a-b);
}