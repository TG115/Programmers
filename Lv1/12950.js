// https://programmers.co.kr/learn/courses/30/lessons/12950
// 행렬의 덧셈 

function solution(arr1, arr2) {
    for (var i in arr1) 
        for (var j in arr1[i])
            arr1[i][j] += arr2[i][j];
    
    return arr1;
}