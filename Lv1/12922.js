// https://programmers.co.kr/learn/courses/30/lessons/12922
// 수박수박수박수박수박수? 

// 런타임 에러
// function solution(n, ch='', i=0) {
//     return i<n?solution(n,i%2?ch+'박':ch+'수',++i):ch;
// }

function solution(n) {
    for (var i = 0, ch = ''; i < n; ch += i++ % 2 ? '박' : '수') {}
    return ch;
}