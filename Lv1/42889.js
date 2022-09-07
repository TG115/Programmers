// https://programmers.co.kr/learn/courses/30/lessons/42889
// 실패율

function solution(N, stages) {
    stages = stages.sort((a,b)=>a-b);
    const set = new Set(stages);
    let answer = Array.from({length: N}, (v,i) => i+1);
    let clear = stages.length;
    
    let arr = [];
    [...set].forEach(s => {
        if (s <= N) {
            let count = stages.filter(e => s === e).length;
            arr.push({
                'stage':s,
                'fail':count/clear
            });
            clear -= count;
        }
    });
    
    arr.sort((a, b) => b.fail - a.fail)
       .reverse()
       .forEach(v => {
        answer.splice(answer.indexOf(v.stage),1);
        answer.unshift(v.stage);
    });
    
    return answer;
}