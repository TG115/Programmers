// https://programmers.co.kr/learn/courses/30/lessons/81301
// 숫자 문자열과 영단어

function solution(s) {
    let answer = '';
    const words = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    while(s.length) {
        if (s[0] === '0' || +s[0] > 0) {
            answer += s[0];
            s = s.substr(1);
        } else {
            words.forEach((w, k) => {
                if (s.indexOf(w) === 0) {
                    answer += k;
                    s = s.substr(w.length);
                }
            });
        }
    }
    return +answer;
}