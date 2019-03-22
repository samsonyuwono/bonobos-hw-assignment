CREATE TABLE products (
     product_id INTEGER PRIMARY KEY,
     product_name TEXT,
     product_image TEXT,
     product_description TEXT
);

CREATE TABLE inventory (
     product_id INTEGER,
     waist INTEGER,
     length INTEGER,
     style TEXT,
     count INTEGER
);
