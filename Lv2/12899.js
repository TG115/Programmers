// https://programmers.co.kr/learn/courses/30/lessons/12899
// 124 나라의 숫자

function solution(n) {
    var answer = '';
    var arr = [];

    do {
        n = parseInt(n);
        arr.push(n % 3);
        if (n % 3 == 0) n--;
        n /= 3;
    } while (n > 1);

    for (var k in arr) {
        var v = arr[arr.length-1 - k];
        if (v == 0) v = 4;
        answer += v;
    }
    return answer;
}