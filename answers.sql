-- problem 1
SELECT email FROM customers ORDER BY email;

-- problem 2
SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 
'Crocker');

-- problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

-- problem 4
