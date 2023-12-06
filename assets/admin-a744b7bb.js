import{d as g,a as n}from"./axios-e742d201.js";const h=document.querySelector(".js-orderList");function d(){let e="";s.forEach(t=>{let r="";t.products.forEach(a=>{r+=`<p>${a.title} × ${a.quantity}</p>`}),e+=`<tr data-id=${t.id}>
        <td>${t.id}</td>
        <td>
          <p>${t.user.name}</p>
          <p>${t.user.tel}</p>
        </td>
        <td>${t.user.address}</td>
        <td>${t.user.email}</td>
        <td>
          ${r}
        </td>
        <td>${g.exec(new Date(t.createdAt*1e3).toISOString())[1].replace(/-/g,"/")}</td>
        <td class="orderStatus">
          <a href="#">${t.paid?"已處理":"未處裡"}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" value="刪除"/>
        </td>
      </tr>`}),h.innerHTML=e}let o=[];function u(){let e={};s.forEach(r=>{r.products.forEach(a=>{e[a.title]=(e[a.title]||0)+a.quantity*a.price})}),o=Object.entries(e),o.sort((r,a)=>a[1]-r[1]),console.log(o);const t=o.reduce((r,a,p)=>(p>2&&(r+=a[1]),r),0);o.splice(3,o.length-3,["其他",t]),f()}function f(){O.load({columns:o})}let O=c3.generate({bindto:"#chart",data:{type:"pie",columns:[]}});const{VITE_SITE:l,VITE_PATH_ADMIN:i,VITE_TOKEN:c}={VITE_SITE:"https://livejs-api.hexschool.io",VITE_PATH_CUSTOMER:"/api/livejs/v1/customer/jiayu",VITE_PATH_ADMIN:"/api/livejs/v1/admin/jiayu",VITE_TOKEN:"DR4FyKcdVsXgBXASlhs1pIv49Rm2",BASE_URL:"/WOWOROOM-js/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E=document.querySelector(".orderPage-list");let s=[];E.addEventListener("click",e=>{if(e.target.classList.contains("discardAllBtn"))e.preventDefault(),T();else if(e.target.closest("[data-id]")){const t=e.target.closest("[data-id]").dataset.id;if(e.target.classList.contains("delSingleOrder-Btn"))e.preventDefault(),m(t);else if(e.target.closest(".orderStatus")){e.preventDefault();const r={data:{id:t,paid:e.target.innerText!=="已處理"}};A(r)}}});$();function $(){y()}async function y(){try{s=(await n.get(`${l}${i}/orders`,{headers:{Authorization:c}})).data.orders,console.log(s),d(),u()}catch(e){console.log("getOrder",e.response)}}async function T(){try{s=(await n.delete(`${l}${i}/orders`,{headers:{Authorization:c}})).data.orders,console.log(s),d(),u()}catch(e){console.log("deleteAllOrder",e.response.data.message)}}async function m(e){try{s=(await n.delete(`${l}${i}/orders/${e}`,{headers:{Authorization:c}})).data.orders,console.log(s),d(),u()}catch(t){console.log("deleteOrder",t.response.data.message)}}async function A(e){try{s=(await n.put(`${l}${i}/orders`,e,{headers:{Authorization:c}})).data.orders,console.log(s),d()}catch(t){console.log("putOrder",t.response.data.message)}}
