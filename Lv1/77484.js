// https://programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    const correct = lottos.filter(l=>win_nums.indexOf(l)>-1).length;
    const zeros = lottos.filter(l=>l===0).length;
        
    return [(correct+zeros)<2?6:7-(correct+zeros), correct<2?6:7-correct];
}