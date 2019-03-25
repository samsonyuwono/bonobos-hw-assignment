# Bonobos Homework assignment

## Samson Yuwono

## Instructions

Simply download the zip or clone this repo above. Open `index.html` in your browser and enjoy! A live heroku server is up and running at https://floating-refuge-12864.herokuapp.com/products/inventory

To run tests run `npm install` then `npm tests` in terminal.

##My approach

In working backwards and understanding that I had to display a single list of product and inventory together grouped by product, I set out to create a mySQL db, then created a API endpoint on Node Express to fetch the data. I picked mySQL for it's relative ease of use and performance.

Once I got the mySQL db running, I created an API endpoint for `/products/inventory` which linked the product and inventory table together based on their shared `product_id`. In order to make the db usable from other machines, I decided to deploy my server to Heroku.

Since it was a simple task that didn't require many moving parts, I decided to use Vanilla JS to display the information from the API endpoint `/products/inventory`. Within the `script.js` file, I fetched the JSON api from the live endpoint then used helper functions to format and display the results onto the DOM. I chose a functional programming approach because I knew the data I was fetching was fixed. This approach helped keep my code DRY and reusable within `scripts.js`.

##What I would improve

Since the list of product inventory data displayed onto the DOM is extensive, I would add a search feature in the future to make it more user friendly. This search feature will allow the user to filter and search for any term including name, waist, style, and product_id.

In regards to the design of the webpage, I would like to make the table header sticky so when the user scrolls down, they know what each column's data is.

As for my code, there might be an opportunity to add more error handling in my fetchAPI to account for an outdated or non-existent API endpoint.
