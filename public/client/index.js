const API_URL = "https://floating-refuge-12864.herokuapp.com";
const output = document.getElementById("output");
// output.innerHTML = "new content";

fetch(`${API_URL}/products/inventory`)
  .then(res => res.json())
  .then(json => {
    console.log(json[0].Waist);
  });

function renderResults() {
  document.getElementById("output").innerHTML = "this";
}
