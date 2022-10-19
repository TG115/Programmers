// https://programmers.co.kr/learn/courses/30/lessons/120861
// 캐릭터의 좌표

function solution(keyinput, board) {
    const maxX = parseInt(board[0]/2);
    const maxY = parseInt(board[1]/2);
    let pos = [0,0];
    
    keyinput.forEach(k => {
        if (k == 'up')    pos[1] += Math.abs(pos[1]+1)<=maxY?1:0;
        if (k == 'down')  pos[1] -= Math.abs(pos[1]-1)<=maxY?1:0;
        if (k == 'left')  pos[0] -= Math.abs(pos[0]-1)<=maxX?1:0;
        if (k == 'right') pos[0] += Math.abs(pos[0]+1)<=maxX?1:0;
        
    });
    return pos;
}