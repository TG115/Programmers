// https://programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬

function solution(nums) {
    const max = nums.length / 2;
    const unique_nums = [...new Set(nums)].length;
    return unique_nums > max ? max : unique_nums;
}