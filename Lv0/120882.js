// https://programmers.co.kr/learn/courses/30/lessons/120882
// 등수 매기기

function solution(score) {
    return score.map(v=>[...score].map(v=>v[0]+v[1]).sort((a,b)=>b-a).indexOf(v[0]+v[1])+1);
}