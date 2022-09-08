// https://programmers.co.kr/learn/courses/30/lessons/68935
// 3진법 뒤집기 

function solution(n) {
    var answer = [];
    while(n/3 >= 1) {
        answer.push(n%3);
        n = Math.floor(n/3);
    }
    answer.push(n);
    
    var result = 0;
    answer.forEach((v,k)=>{
        result += v*Math.pow(3,answer.length-k-1);
    });
    return result;
}