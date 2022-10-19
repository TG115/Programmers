// https://programmers.co.kr/learn/courses/30/lessons/120884
// 치킨 쿠폰

function solution(chicken) {
    let service = 0;
    let ticket  = 0;
    while (chicken >= 10) {
        service += ~~(chicken / 10);
        ticket  += chicken % 10;
        chicken = ~~(chicken / 10) + chicken % 10;
    }
    return service;
}