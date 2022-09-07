// https://programmers.co.kr/learn/courses/30/lessons/67256
// 키패드 누르기

function solution(numbers, hand) {
    var answer = '';
    let K = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
    let L = '*';
    let R = '#';
    numbers.forEach((n,i) => {
        if (n % 3 == 1) {
            answer += 'L';
            L = n;
        } else if (n && n % 3 == 0) {
            answer += 'R';
            R = n;
        } else {
            let left = Math.abs(K.indexOf(n) - K.indexOf(L));
            let right = Math.abs(K.indexOf(n) - K.indexOf(R));
            left = parseInt(left / 3) + (left % 3);
            right = parseInt(right / 3) + (right % 3);
            if (left < right) {
                answer += 'L';
                L = n;
            } else if (right < left) {
                answer += 'R';
                R = n;
            } else {
                if (hand == 'left') {
                    answer += 'L';
                    L = n;
                } else if (hand == 'right') {
                    answer += 'R';
                    R = n;
                }   
            }
        }
    });
    return answer;
}