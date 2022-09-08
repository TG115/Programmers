// https://programmers.co.kr/learn/courses/30/lessons/12901
// 2016년 

function solution(a, b) {
    var dow = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var dom = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var idx = b;
    a--;
    while(a--) idx += dom[a];
    return dow[(idx+4)%7];
}