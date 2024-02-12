-- problem 1
SELECT email FROM customers ORDER BY email;

-- problem 2
SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 
'Crocker');

-- problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

-- problem 4
SELECT name, SUM(num_cupcakes) FROM cupcakes LEFT JOIN orders ON (cupcakes.id = orders.cupcake_id) GROUP B
Y name ORDER BY name;

-- problem 5
SELECT email, SUM(num_cupcakes) FROM customers JOIN orders ON (customers.id = orders.customer_id) GROUP BY
 customers.email ORDER BY SUM(num_cupcakes) DESC;

 -- problem 6
SELECT customers.fname, customers.lname, customers.email FROM customers JOIN orders ON (customers.id = ord
ers.customer_id) WHERE orders.processed = 't' AND cupcake_id = 5 GROUP BY customers.id;

