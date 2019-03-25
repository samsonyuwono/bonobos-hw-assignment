const API_URL = "https://floating-refuge-12864.herokuapp.com";
const output = document.getElementById("output");
// output.innerHTML = "new content";

fetch(`${API_URL}/products/inventory`)
  .then(res => res.json())
  .then(json => {
    console.log(json[57].product_description);
    renderResults(json);
  });

function renderResults(productInventory) {
  let product = formatResults(productInventory);
  product = removeCommas(product);
  document.getElementById("output").innerHTML = product;
}

function removeCommas(product) {
  return product.replace(/,/g, "");
}

function formatResults(productInventory) {
  return `${productInventory.map(
    products =>
      "<div class='product-container'>" +
      productImage(products) +
      productName(products) +
      "<p>" +
      waistLength(products) +
      style(products) +
      count(products) +
      "</p>" +
      "</div>"
  )}`;
}

function productImage(products) {
  return "<img src=" + products.product_image + ">" + "</img>";
}

function productName(products) {
  return "<h1>" + products.product_name + "</h1>";
}

function waistLength(products) {
  return products.waist + "W" + "/" + products.length + "L ";
}

function style(products) {
  return "Style-" + products.style;
}

function count(products) {
  return " Count-" + products.count;
}
