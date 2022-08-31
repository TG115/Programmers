// https://programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

function solution(n, lost, reserve) {
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);
    lost.forEach((l,i) => {
        if (reserve.indexOf(l) > -1) {
            reserve.splice(reserve.indexOf(l), 1);
            delete lost[i];
        }
    });
    lost.forEach((l,i) => {
        if (reserve.indexOf(l-1) > -1) reserve.splice(reserve.indexOf(l-1), 1);
        else if (reserve.indexOf(l+1) > -1) reserve.splice(reserve.indexOf(l+1), 1);
        else n--;
    });
    
    return n;
}