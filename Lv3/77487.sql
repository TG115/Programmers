-- https://school.programmers.co.kr/learn/courses/30/lessons/77487
-- 헤비 유저가 소유한 장소

SELECT A.*
FROM PLACES AS A
    JOIN (
        SELECT HOST_ID, COUNT(*) AS CNT
        FROM PLACES
        GROUP BY HOST_ID
    ) AS B
    ON A.HOST_ID = B.HOST_ID AND B.CNT > 1
ORDER BY A.ID