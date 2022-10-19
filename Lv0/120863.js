// https://programmers.co.kr/learn/courses/30/lessons/120863
// 다항식 더하기

function solution(polynomial) {
    let x = polynomial.split(' + ').filter(s=>s.charAt(s.length-1) == 'x').map(s=>s.slice(0,s.length-1)).reduce((a,b)=>b?+b+a:a+1,0);
    x = x==1?'':x;
    let n = polynomial.split(' + ').filter(s=>s.charAt(s.length-1) != 'x').reduce((a,b)=>+b+a,0);
    return x!==0&&n?x+'x + '+n:x!==0?x+'x':n+'';
}