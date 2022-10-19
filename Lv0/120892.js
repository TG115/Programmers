// https://programmers.co.kr/learn/courses/30/lessons/120892
// 암호 해독

function solution(cipher, code) {
    return cipher.split('').map((v,i)=>(i+1)%code?'':v).join('');
}