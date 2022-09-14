// https://programmers.co.kr/learn/courses/30/lessons/77884
// 약수의 개수와 덧셈 

function solution(left, right) {
    let answer = 0;
    
    while(left <= right) {
        let y = 1;
        for(let i = 1; i < left; i++) {
            if (left % i === 0) y++;
        }
        answer += y % 2 ? left * -1 : left;
        left++;
    }
    
    return answer;
}