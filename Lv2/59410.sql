-- https://school.programmers.co.kr/learn/courses/30/lessons/59412
-- NULL 처리하기

SELECT ANIMAL_TYPE, IF(NAME IS NULL, 'No name', NAME), SEX_UPON_INTAKE
FROM ANIMAL_INS