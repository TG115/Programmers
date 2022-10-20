-- https://school.programmers.co.kr/learn/courses/30/lessons/131115
-- 카테고리 별 상품 개수 구하기

SELECT LEFT(PRODUCT_CODE, 2) AS CATEGORY, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2)