import axios from "axios";
import { renderOrders } from "./render";
import { calculateRevenue } from "./chart";

const { VITE_SITE, VITE_PATH_ADMIN, VITE_TOKEN } = import.meta.env;

const orderPageList = document.querySelector(".orderPage-list");

// 產品資料
let ordersData = [];

orderPageList.addEventListener("click", (e) => {
  if (e.target.classList.contains("discardAllBtn")) {
    e.preventDefault();
    deleteAllOrder();
  } else if (e.target.hasAttribute("data-id")) {
    e.preventDefault();
    let id = e.target.dataset.id;
    deleteOrder(id);
  }
});

init();
function init() {
  getOrder();
}

// 獲取產品資料
async function getOrder() {
  try {
    const res = await axios.get(`${VITE_SITE}${VITE_PATH_ADMIN}/orders`, {
      headers: {
        Authorization: VITE_TOKEN,
      },
    });
    ordersData = res.data.orders;
    console.log(ordersData);
    renderOrders();
    calculateRevenue();
  } catch (error) {
    console.log("getOrder", error.response);
  }
}

// 刪除全部訂單
async function deleteAllOrder() {
  try {
    const res = await axios.delete(`${VITE_SITE}${VITE_PATH_ADMIN}/orders`, {
      headers: {
        Authorization: VITE_TOKEN,
      },
    });
    ordersData = res.data.orders;
    console.log(ordersData);
    renderOrders();
    calculateRevenue();
  } catch (error) {
    console.log("delAllCart", error.response.data.message);
  }
}

// 刪除訂單
async function deleteOrder(orderId) {
  try {
    const res = await axios.delete(
      `${VITE_SITE}${VITE_PATH_ADMIN}/orders/${orderId}`,
      {
        headers: {
          Authorization: VITE_TOKEN,
        },
      }
    );
    ordersData = res.data.orders;
    console.log(ordersData);
    renderOrders();
    calculateRevenue();
  } catch (error) {
    console.log("deleteOrder", error.response.data.message);
  }
}

export { ordersData, getOrder };
