// https://programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    return A.map((v,i)=>v*B[i]).reduce((a,b)=>a+b);
}