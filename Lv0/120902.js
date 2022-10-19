// https://programmers.co.kr/learn/courses/30/lessons/120902
// 문자열 계산하기

function solution(my_string) {
    let answer = 0;
    let pm = '';
    my_string.split(' ').forEach(v=> {
        switch(v) {
            case '+': 
            case '-':
                pm = v;
                break;
            default:
                answer += pm == '-' ? +v * -1 : +v;
        }
    });
    return answer;
}

// let solution = eval;