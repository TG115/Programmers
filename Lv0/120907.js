// https://programmers.co.kr/learn/courses/30/lessons/120907
// OX퀴즈

function solution(quiz) {
    return quiz.map(q=>eval(q.split('=')[0])==eval(q.split('=')[1])?'O':'X');
}