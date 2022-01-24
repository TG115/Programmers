// https://programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값

function solution(s) {
    let mM = [];
    s.split(' ').map(v => {
        mM[0] === undefined ? mM[0] = +v : +v < mM[0] ? mM[0] = +v : false;
        mM[1] === undefined ? mM[1] = +v : +v > mM[1] ? mM[1] = +v : false;
    });
    return mM.join(' ');
}