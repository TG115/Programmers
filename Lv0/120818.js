// https://programmers.co.kr/learn/courses/30/lessons/120818
// 옷가게 할인 받기

function solution(price) {
    return parseInt(price<100000?price:price<300000?price*0.95:price<500000?price*0.9:price*0.8);
}