-- https://school.programmers.co.kr/learn/courses/30/lessons/62284
-- 우유와 요거트가 담긴 장바구니

SELECT A.CART_ID
FROM (
        SELECT CART_ID
        FROM CART_PRODUCTS
        WHERE NAME = 'Milk'
    ) AS A
    JOIN
    (
        SELECT CART_ID
        FROM CART_PRODUCTS
        WHERE NAME = 'Yogurt'
    ) AS B
    ON A.CART_ID = B.CART_ID
GROUP BY A.CART_ID
ORDER BY A.CART_ID