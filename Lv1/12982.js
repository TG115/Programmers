// https://programmers.co.kr/learn/courses/30/lessons/12982
// 예산

function solution(d, budget) {
    let cnt = 0;
    d.sort((a,b)=>a-b).map(v=>{if(budget-v>=0){budget-=v;cnt++}});
    return cnt;
}