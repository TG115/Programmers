// https://programmers.co.kr/learn/courses/30/lessons/120896
// 한 번만 등장한 문자

function solution(s) {
    return s.split('').filter(v=>s.split('').filter(vv=>vv==v).length==1).sort().join('');
}