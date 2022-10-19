// https://programmers.co.kr/learn/courses/30/lessons/120839
// 가위 바위 보

function solution(rsp) {
    return rsp.split('').map(v=>v==2?0:v==5?2:5).join('');
}