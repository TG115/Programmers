// https://programmers.co.kr/learn/courses/30/lessons/120883
// 로그인 성공?

function solution(id_pw, db) {
    return  db.filter(a=>a[0]==id_pw[0]&&a[1]==id_pw[1]).length ? 'login': db.filter(a=>a[0]==id_pw[0]).length ? 'wrong pw':'fail';
}