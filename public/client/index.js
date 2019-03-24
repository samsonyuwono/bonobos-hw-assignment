const API_URL = "https://floating-refuge-12864.herokuapp.com";

fetch(`${API_URL}/products/inventory`)
  .then(res => res.json())
  .then(json => {
    console.log(json);
  });

console.log("hit");
