// https://programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수 

function solution(s){
    var tot = 0;
    s.split('').map(v=>v.toLowerCase()).forEach(el=>{
        if(el == 'p') tot++;
        if(el == 'y') tot--;
    });
    
    return tot==0;
}