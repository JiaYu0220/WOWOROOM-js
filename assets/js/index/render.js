import { cartData } from "./api";
import { numberComma, strToNumber, productWrap, cartTable } from "../config";

function renderProducts(products) {
  let productHtml = "";
  if (products.length) {
    products.forEach((product) => {
      productHtml += `
      <li class="productCard">
            <h4 class="productType">新品</h4>
            <img
              src="${product.images}"
              alt="產品圖片"
            />
            <a href="#" class="addCardBtn" data-product="${
              product.id
            }" >加入購物車</a>
            <h3>${product.title}</h3>
            <del class="originPrice">NT$${numberComma(
              product.origin_price
            )}</del>
            <p class="nowPrice">NT$${numberComma(product.price)}</p>
          </li>
      `;
    });
    productWrap.innerHTML = productHtml;
  }
}

function renderCarts() {
  let cartHtml = "";
  if (cartData.length) {
    cartHtml = `<tr>
    <th width="40%">品項</th>
    <th width="15%">單價</th>
    <th width="15%">數量</th>
    <th width="15%">金額</th>
    <th width="15%"></th>
  </tr>`;

    cartData.forEach((item) => {
      cartHtml += `<tr data-cart="${item.id}">
    <td>
      <div class="cardItem-title">
        <img src="${item.product.images}" alt="產品圖片" />
        <p>${item.product.title}</p>
      </div>
    </td>
    <td>NT$${numberComma(item.product.price)}</td>
    <td>${item.quantity}</td>
    <td class="js-subTotal">NT$${numberComma(
      item.product.price * item.quantity
    )}</td>
    <td class="discardBtn">
      <a href="#" class="material-icons"> clear </a>
    </td>
  </tr>`;
    });
    cartHtml += `
    <tr>
    <td>
      <a href="#" class="discardAllBtn">刪除所有品項</a>
    </td>
    <td></td>
    <td></td>
    <td>
      <p>總金額</p>
    </td>
    <td class="js-total">NT$0</td>
  </tr>`;
    cartTable.innerHTML = cartHtml;
    calculateTotal();
  } else {
    cartHtml += `<tr>
      <th>購物車沒有商品</th>`;
    cartTable.innerHTML = cartHtml;
  }
}
// 計算總價格
function calculateTotal() {
  const allSubTotal = document.querySelectorAll(".js-subTotal");
  const total = document.querySelector(".js-total");
  let sum = 0;
  allSubTotal.forEach((item) => (sum += strToNumber(item.innerText)));
  total.innerHTML = `NT$${numberComma(sum)}`;
}

export { renderProducts, renderCarts };
