SELECT * 
FROM payments
ORDER BY payment_id DESC
LIMIT 1;

SELECT *
FROM orders
ORDER BY order_id DESC
LIMIT 1;

SELECT *
FROM menu_item_order_jt
WHERE order_id = (SELECT MAX(order_id) FROM orders);