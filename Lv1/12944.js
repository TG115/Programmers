// https://programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기 

function solution(arr, sum=0, i=0) {
    return i<arr.length?solution(arr,sum+arr[i],++i):sum/arr.length;
}