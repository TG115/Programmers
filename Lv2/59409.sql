-- https://school.programmers.co.kr/learn/courses/30/lessons/59409
-- 중성화 여부 파악하기

SELECT ANIMAL_ID, NAME, IF(SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%', 'O', 'X')
FROM ANIMAL_INS