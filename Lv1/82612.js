// https://programmers.co.kr/learn/courses/30/lessons/82612
// 부족한 금액 계산하기 
function solution(price, money, count, n=1) {
    return count>0?solution(price,money-price*n,--count,++n):money>0?0:money*-1;
}