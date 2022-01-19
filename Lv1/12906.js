// https://programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어

function solution(arr)
{
    let answer = [];
    
    arr.map(v => v == answer[answer.length-1]?false:answer.push(v));
    
    return answer;
}