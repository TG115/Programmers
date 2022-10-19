// https://programmers.co.kr/learn/courses/30/lessons/120876
// 겹치는 선분의 길이

function solution(lines) {
    let array = Array.from({length: 201}, () => 0);
    lines.forEach(l => {
        for (let i = Math.min(...l)+1; i <= Math.max(...l); i++) {
            array[100+i] = array[100+i]?array[100+i]+1:1;
        }
    });
    return array.filter(n=>n>1).length;
}