import { renderProducts, renderCarts } from "./render";
import { orderInfoForm } from "./form";

import axios from "axios";

const { VITE_SITE, VITE_PATH_CUSTOMER } = import.meta.env;
// 產品資料
let productsData = [];
// 購物車資料
let cartData = [];

init();
function init() {
  getProduct();
  getCart();
}

// 獲取產品資料
async function getProduct() {
  try {
    const res = await axios.get(`${VITE_SITE}${VITE_PATH_CUSTOMER}/products`);
    productsData = res.data.products;
    renderProducts(productsData);
  } catch (error) {
    console.log("getProduct", error);
  }
}

// 獲取購物車資料
async function getCart() {
  try {
    const res = await axios.get(`${VITE_SITE}${VITE_PATH_CUSTOMER}/carts`);
    cartData = res.data.carts;
    renderCarts();
  } catch (error) {
    console.log("getCart", error);
  }
}

// 增加購物車數量
async function patchCart(patchData) {
  try {
    const res = await axios.patch(
      `${VITE_SITE}${VITE_PATH_CUSTOMER}/carts`,
      patchData
    );
    cartData = res.data.carts;
    renderCarts();
  } catch (error) {
    console.log("patchCart", error.response.data.message);
  }
}

// 加入購物車
async function postCart(postCart) {
  try {
    const res = await axios.post(
      `${VITE_SITE}${VITE_PATH_CUSTOMER}/carts`,
      postCart
    );
    cartData = res.data.carts;
    renderCarts();
  } catch (error) {
    console.log("postCart", error.response.data.message);
  }
}

// 刪除購物車全部商品
async function delAllCart() {
  try {
    const res = await axios.delete(`${VITE_SITE}${VITE_PATH_CUSTOMER}/carts`);
    cartData = res.data.carts;
    renderCarts();
  } catch (error) {
    console.log("delAllCart", error.response.data.message);
  }
}

// 刪除購物車商品
async function delCart(cartId) {
  try {
    const res = await axios.delete(
      `${VITE_SITE}${VITE_PATH_CUSTOMER}/carts/${cartId}`
    );
    cartData = res.data.carts;
    renderCarts();
  } catch (error) {
    console.log("delAllCart", error.response.data.message);
  }
}

// 提交表單
async function submitOrder(submitInfo) {
  try {
    await axios.post(`${VITE_SITE}${VITE_PATH_CUSTOMER}/orders`, submitInfo);
    orderInfoForm.reset();
    getCart();
    window.alert("已收到您的預訂資料");
  } catch (error) {
    console.log("submitOrder", error);
  }
}

export {
  productsData,
  cartData,
  getProduct,
  getCart,
  patchCart,
  postCart,
  delAllCart,
  delCart,
  submitOrder,
};
