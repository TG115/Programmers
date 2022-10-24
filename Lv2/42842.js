// https://programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

function solution(brown, yellow) {
    const sum = brown + yellow;
    const sqrt = Math.sqrt(sum);
    
    if (sqrt == ~~sqrt) return [sqrt, sqrt];
    else {
        for (let i = ~~sqrt; i > 1; i--) {
            if (sum % i === 0 && (sum/i-2)*(i-2) == yellow) return [sum/i, i];
        }
    }
}