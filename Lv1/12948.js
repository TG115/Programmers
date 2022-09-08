// https://programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기 

function solution(phone_number) {
    return phone_number.replace(/[0-9]/gi, "*").slice(0, -4) + phone_number.slice(-4);
}