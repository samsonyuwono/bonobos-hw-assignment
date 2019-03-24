CREATE TABLE  products (
    `product_id` INT,
    `product_name` VARCHAR(17) CHARACTER SET utf8,
    `product_image` VARCHAR(179) CHARACTER SET utf8,
    `product_description` VARCHAR(91) CHARACTER SET utf8,
);
INSERT INTO products VALUES (product_id, product_name, product_image, product_description)
    (1,'washed chinos','https://bonobos-prod-s3.imgix.net/products/1503/original/PNT_WC_GreyDogs_category.jpg?1416579508=&w=1200&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=900&h=1', 'All-purpose, 100% cotton chinos with our signature curved waistband for a better, more natural fit. Available in four fits, a full range of colors, and original contrast pocket liners.'),
    (2,'jetsetter jeans','https://bonobos-prod-s3.imgix.net/products/26709/original/hjh9u9m0441y5qv9qlg6qvy4owanulkj.jpg?1477944668=&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=400&h=1', 'Innovative stretch denim for first-class comfort. Designed to be extra soft and resilient, they’re the most comfortable jeans you’ve ever worn.'),
    (3,'travel jeans','https://bonobos-prod-s3.imgix.net/products/971/original/DENIM_TravelJeans_AustinAsphalt_category.jpg?1430943616=&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=400&h=1', 'The comfort of stretch in a full range of colors. If you need a break from chinos, or more colorful denim, Travel Jeans are for you.'),
    (4,'fireside flannels','https://bonobos-prod-s3.imgix.net/products/25887/original/t92qwcahevxivaob92jkm4x9pbsw2yz7.jpg?1475020923=&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=400&h=1','Our signature better-fitting chino with warm, toasty flannel on the inside.');
