import { getProduct, getCart } from "./api";
// 產品外層
const productWrap = document.querySelector(".productWrap");
// 購物車外層
const cartTable = document.querySelector(".shoppingCart-table");

init();
function init() {
  getProduct();
  getCart();
}

// 數字加上 ,
function numberComma(num) {
  let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return Number(num).toString().replace(comma, ",");
}

// 將NT$的價格轉換成數字
function strToNumber(str) {
  return parseInt(str.replace(/\D/g, ""));
}

export { productWrap, cartTable, numberComma, strToNumber };
