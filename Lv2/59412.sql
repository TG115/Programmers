-- https://school.programmers.co.kr/learn/courses/30/lessons/59412
-- 입양 시각 구하기(1)

SELECT HOUR(DATETIME) AS HOUR, COUNT(*)
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 20
ORDER BY HOUR