import { productsData } from "./api";
import { renderProducts } from "./render";
const productSelect = document.querySelector(".productSelect");

// 篩選功能監聽
productSelect.addEventListener("change", (e) => filterProduct(e.target.value));

function filterProduct(value) {
  if (value === "全部") {
    renderProducts(productsData);
  } else {
    const filterProducts = productsData.filter(
      (product) => product.category === value
    );
    renderProducts(filterProducts);
  }
}
