

-- delete a row from Person table
DELETE p1 FROM Person p1,
    Person p2
    -- where p1's email and p2's email are the same 
        --AND where p2's id is greater than p1's id (if p2 comes after p1 in the table)
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id