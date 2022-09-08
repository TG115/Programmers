// https://programmers.co.kr/learn/courses/30/lessons/12969
// 직사각형 별찍기 

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    let result = '';
    while(b--) {
        for(var i = 0; i < a; i++) {
            result += '*';
        }
        result += '\n';
    }

    console.log(result);
});