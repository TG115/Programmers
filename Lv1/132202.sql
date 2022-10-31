-- https://school.programmers.co.kr/learn/courses/30/lessons/132202
-- 진료과별 총 예약 횟수 출력하기

SELECT MCDP_CD AS '진료과코드', COUNT(*) AS '5월예약건수'
FROM APPOINTMENT
WHERE LEFT(APNT_YMD, 7) = '2022-05'
GROUP BY MCDP_CD
ORDER BY 2,1