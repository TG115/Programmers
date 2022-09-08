// https://programmers.co.kr/learn/courses/30/lessons/87389
// 나머지가 1이 되는 수 찾기 

// 런타임 에러
// function solution(n, x=1) {
//     return n%x===1?x:solution(n,++x);
// }

function solution(n) {
    var x = 1;
    while(n%x!==1) ++x;
    return x;
}