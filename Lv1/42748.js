// https://programmers.co.kr/learn/courses/30/lessons/42748
// K번째수

function solution(array, commands) {
    let answer = [];
    for (let n = 0; n < commands.length; n++) {
        let [i, j, k] = commands[n];
        answer[n] = array.slice(i-1,j).sort((a,b)=>a-b)[k-1];
    }
    return answer;
}