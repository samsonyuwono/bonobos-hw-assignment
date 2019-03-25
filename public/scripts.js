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

function formatResults(productInventory) {
  return `${productInventory.map(
    products =>
      "<tr class='product-row'>" +
      productImage(products) +
      productName(products) +
      waistLength(products) +
      style(products) +
      count(products) +
      "</tr>"
  )}`;
}

function removeCommas(str) {
  return str.replace(/,/g, "");
}

function productImage(products) {
  return (
    "<td class='product-table-cell' ><img src=" +
    products.product_image +
    "/></td>"
  );
}

function productName(products) {
  return (
    "<td class='product-table-cell'>" +
    capitalize(products.product_name) +
    "</td>"
  );
}

function waistLength(products) {
  return (
    "<td class='product-table-cell'>" +
    products.waist +
    "W" +
    "/" +
    products.length +
    "L </td>"
  );
}

function style(products) {
  return (
    "<td class='product-table-cell'>" + capitalize(products.style) + "</td>"
  );
}

function count(products) {
  return "<td class='product-table-cell'> " + products.count + "</td>";
}

function capitalize(str) {
  return str.replace(/\b\w/g, l => {
    return l.toUpperCase();
  });
}
