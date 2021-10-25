// https://programmers.co.kr/learn/courses/30/lessons/12926
// 시저 암호

function solution(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lower = alphabet.split('');
    const upper = alphabet.toUpperCase().split('');
    
    return s.split('').map((v)=>{
        if(v == ' ') return ' ';
        if(v == v.toLowerCase()) return lower[(lower.indexOf(v)+n) % lower.length];
        if(v == v.toUpperCase()) return upper[(upper.indexOf(v)+n) % upper.length];
    }).join('');
}