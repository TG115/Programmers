// https://programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

function solution(answers) {
    const pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    let score = [0,0,0];
    let answer = [];
    
    answers.forEach((a,i) => {
        for (let n = 0; n < 3; n++) {
            score[n] += +(a === pattern[n][i%pattern[n].length]);
        }
    })
    
    score.forEach((s,i) => s == Math.max(...score) ? answer.push(i+1) : 0);
    return answer;
}