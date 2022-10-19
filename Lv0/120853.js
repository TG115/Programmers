// https://programmers.co.kr/learn/courses/30/lessons/120853
// 컨트롤 제트

function solution(s) {
    let buf = [];
    let tot = 0;
    s.split(' ').forEach(v=>{
        if (v=='Z') {
            tot -= buf.pop();
        } else {
            tot += +v;
            buf.push(v);
        }
    });
    return tot;
}