// https://programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기
// ref) 아리스토테네스의 체

function solution(n) {
    let prime = new Array();
    let count = 0;
    
    for (let i = 0; i <= n; i++) prime.push(true);
    prime[0] = false;
    prime[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (prime[i])
            for (let j = i * i; j <= n; j += i)
                prime[j] = false;
    }
    
    prime.map(v => v?count++:false);
    return count;
}