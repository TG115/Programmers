// https://programmers.co.kr/learn/courses/30/lessons/120956
// 옹알이

function solution(babbling) {
    return babbling.map(s=>s.includes('ayaaya')||s.includes('yeye')||s.includes('woowoo')||s.includes('mama')?s:s.split('aya').join('').split('ye').join('').split('woo').join('').split('ma').join('')).filter(s=>s=='').length;
}