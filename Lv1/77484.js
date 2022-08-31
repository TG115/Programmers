// https://programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    const min = lottos.filter(l=>win_nums.indexOf(l)>-1).length;
    const max = lottos.filter(l=>l===0).length + min;
        
    return [max<2?6:7-max, min<2?6:7-min];
}