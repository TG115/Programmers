// https://programmers.co.kr/learn/courses/30/lessons/12928
// 약수의 합 

function solution(n, sum=0, x=n) {
    return x>0?(n%x?solution(n,sum,--x):solution(n,sum+x,--x)):sum;
}