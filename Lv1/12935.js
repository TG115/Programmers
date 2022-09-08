// https://programmers.co.kr/learn/courses/30/lessons/12935
// 제일 작은 수 제거하기 

function solution(arr) {
    var min=arr[0];
    var idx=0;
    arr.forEach((el, i) => {
        if (el < min) {
            min = el;
            idx = i;
        }
    });
    arr.splice(idx,1);
    return arr.length?arr:[-1];
}