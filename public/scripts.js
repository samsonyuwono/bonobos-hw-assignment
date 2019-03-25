const API_URL = "https://floating-refuge-12864.herokuapp.com";

function fetchProductInventory() {
  fetch(`${API_URL}/products/inventory`)
    .then(res => res.json())
    .then(json => {
      renderResults(json);
    });
}

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
      "<div class='product-row'>" +
      productImage(products) +
      "<div class='product-info'>" +
      productName(products) +
      waistLength(products) +
      style(products) +
      count(products) +
      "</div>" +
      "</div>"
  )}`;
}

function productImage(products) {
  return (
    "<div class='table-body-cell'><img src=" +
    products.product_image +
    ">" +
    "</img></div>"
  );
}

function productName(products) {
  return "<div class='table-body-cell'>" + products.product_name + "</div>";
}

function waistLength(products) {
  return (
    "<div class='table-body-cell'><b>Size</b> " +
    products.waist +
    "W" +
    "/" +
    products.length +
    "L </div>"
  );
}

function style(products) {
  return (
    "<div class='table-body-cell'><b>Style:</b>" + products.style + "</div>"
  );
}

function count(products) {
  return (
    "<div class='table-body-cell'><b>Count:</b> " + products.count + "</div>"
  );
}
