// 產品外層
const productWrap = document.querySelector(".productWrap");
// 購物車外層
const cartTable = document.querySelector(".shoppingCart-table");
const dateReg = /^(\d{4}-\d{2}-\d{2})/;

// 數字加上 ,
function numberComma(num) {
  let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return Number(num).toString().replace(comma, ",");
}

// 將NT$的價格轉換成數字
function strToNumber(str) {
  return parseInt(str.replace(/\D/g, ""));
}

export { productWrap, cartTable, numberComma, strToNumber, dateReg };
