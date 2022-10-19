// https://programmers.co.kr/learn/courses/30/lessons/120869
// 외계어 사전

function solution(spell, dic) {
    return dic.filter(d=>d.split('').sort().join('')==spell.sort().join('')).length?1:2;
}