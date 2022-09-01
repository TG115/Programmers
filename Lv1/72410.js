// https://programmers.co.kr/learn/courses/30/lessons/72410
// 신규 아이디 추천

function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^a-z0-9\-\_\.]/g, '').replace(/\.+/g, '.').replace(/^\.|\.$/g, '').replace(/^$/, 'a');
    return new_id.length >= 16 ? new_id.substr(0,15).replace(/\.$/g, '') : (new_id.length <= 2 ? new_id.padEnd(3,new_id[new_id.length-1]) : new_id);
}