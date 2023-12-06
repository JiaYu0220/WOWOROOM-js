import { productWrap, cartTable } from "../config";
import { cartData, patchCart, postCart, delAllCart, delCart } from "./api";

// 加入購物車監聽
productWrap.addEventListener("click", (e) => handleAddCart(e));

// 加入購物車 function
function handleAddCart(e) {
  const productId = e.target.dataset.product;
  if (productId) {
    e.preventDefault();

    // 找購物車有沒有該商品
    const item = cartData.find((item) => item.product.id == productId);

    // 若有該商品就原數量+1，否則為1
    const quantity = (item ? item.quantity : 0) + 1;
    // 若有該商品就是cart的id，否則為productId
    const addCartItem = {
      data: item
        ? { id: item.id, quantity }
        : {
            productId,
            quantity,
          },
    };
    // 若有該商品就patch，否則為post
    item ? patchCart(addCartItem) : postCart(addCartItem);
  }
}

// 購物車按鈕事件監聽
cartTable.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("discardAllBtn")) {
    e.preventDefault();
    delAllCart();
  } else if (target.closest(".discardBtn")) {
    const cartId = target.closest("[data-cart]").dataset.cart;
    e.preventDefault();
    delCart(cartId);
  }
});
