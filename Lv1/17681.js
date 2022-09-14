// https://programmers.co.kr/learn/courses/30/lessons/17681
// 비밀지도

function solution(n, arr1, arr2) {
    return arr1.map((val,idx)=>(val|arr2[idx]).toString(2).padStart(n,'0').split('').map(v=>+v?'#':' ').join(''));
}