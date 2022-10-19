// https://programmers.co.kr/learn/courses/30/lessons/120835
// 진료 순서 정하기

function solution(emergency) {
    let e = [...emergency].sort((a,b)=>b-a);
    return emergency.map(n=>e.indexOf(n)+1);
}