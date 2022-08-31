// https://programmers.co.kr/learn/courses/30/lessons/64601
// 크레인 인형뽑기 게임

function solution(board, moves) {
    var answer = 0;
    let stack = [];
    moves.forEach(m => {
        for (let i = 0; i < board.length; i++) {
            let p = board[i][m-1];
            if (p !== 0) {
                if (stack.length) {
                    if (stack[stack.length-1] === p) {
                        stack.pop();
                        answer += 2;
                    } else stack.push(p);
                } else stack.push(p);
                board[i][m-1] = 0;
                break;
            }
        }
    });
    return answer;
}