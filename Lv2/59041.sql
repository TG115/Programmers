-- https://school.programmers.co.kr/learn/courses/30/lessons/59041
-- 동명 동물 수 찾기

SELECT NAME, COUNT(*)
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
GROUP BY NAME
HAVING COUNT(*) > 1
ORDER BY NAME