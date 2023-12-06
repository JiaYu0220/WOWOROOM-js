import { ordersData } from "./api";
import { dateReg } from "../config";

const orderList = document.querySelector(".js-orderList");

function renderOrders() {
  let orderHtml = "";
  ordersData.forEach((order) => {
    let productHtml = "";
    order.products.forEach((product) => {
      productHtml += `<p>${product.title} × ${product.quantity}</p>`;
    });
    orderHtml += `<tr>
        <td>${order.id}</td>
        <td>
          <p>${order.user.name}</p>
          <p>${order.user.tel}</p>
        </td>
        <td>${order.user.address}</td>
        <td>${order.user.email}</td>
        <td>
          ${productHtml}
        </td>
        <td>${
          // 原本為10碼(s)，要轉成13碼(ms)
          dateReg
            .exec(new Date(order.createdAt * 1000).toISOString())[1]
            .replace(/-/g, "/")
        }</td>
        <td class="orderStatus">
          <a href="#">${order.paid ? "已處理" : "未處裡"}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" value="刪除" data-id=${
            order.id
          } />
        </td>
      </tr>`;
  });
  orderList.innerHTML = orderHtml;
}

export { renderOrders };
