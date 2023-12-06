import { cartData, submitOrder } from "./api";

import validate from "validate.js";

const orderInfoForm = document.querySelector(".orderInfo-form");
// 表單驗證
const constraints = {
  name: {
    presence: {
      message: "必填",
    },
  },
  tel: {
    presence: {
      message: "必填",
    },
    numericality: {
      message: "格式錯誤",
    }, // 只能是數字
    length: { is: 10, message: "電話號碼應為 10 碼" }, // 長度只能 10
  },
  email: {
    presence: {
      message: "必填",
    },
    email: {
      message: "格式錯誤",
    },
  },
  address: {
    presence: {
      message: "必填",
    },
  },
};
orderInfoForm.addEventListener("change", (e) => {
  e.preventDefault();
  if (e.target.hasAttribute("name")) {
    writeError(e.target);
  }
});
orderInfoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

// 驗證 input
function writeError(input) {
  const inputName = input.getAttribute("name");
  const reg = RegExp(`${inputName} `, "gi");

  const message = input.nextElementSibling;
  if (message) {
    message.innerText = "";

    const errors = validate(orderInfoForm, constraints);
    // 若有錯誤
    if (errors) {
      // 將每個欄位錯誤訊息變陣列
      const errorsEntries = Object.entries(errors);
      errorsEntries.forEach((err) => {
        if (err[0] === inputName) {
          // 刪除錯誤訊息中出現 input 的 name，並合併錯誤訊息
          const str = err[1].map((value) => value.replace(reg, "")).join("、");
          // 將錯誤訊息寫入 html
          message.innerText = str;
        }
      });
    }
  }
}

// 送出表單
function handleSubmit() {
  if (cartData.length) {
    const inputs = orderInfoForm.querySelectorAll("[name]");
    const errors = validate(orderInfoForm, constraints);
    // 若有錯
    if (errors) {
      inputs.forEach((input) => {
        writeError(input);
      });
    }
    // 若沒錯就提交
    else {
      // 提交格式
      let submitInfo = {
        data: {
          user: {
            name: "",
            tel: "",
            email: "",
            address: "",
            payment: "",
          },
        },
      };
      // 寫入資料
      inputs.forEach((input) => {
        submitInfo.data.user[input.getAttribute("name")] = input.value;
      });
      submitOrder(submitInfo);
    }
  } else {
    window.alert("請先選購產品再提交表單");
  }
}

export { orderInfoForm };
