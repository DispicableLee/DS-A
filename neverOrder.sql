
--determine which column in each entry in the Customer's table
select customers.name as 'Customers'
-- from customers
from customers
--where the customer's id is not in the customerid column in the orders table
where customers.id not in
(
    select customerid from orders
);