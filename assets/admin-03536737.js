import{d as E,a as n}from"./axios-e742d201.js";const $=document.querySelector(".js-orderList");function o(){let t="";s.forEach(e=>{let r="";e.products.forEach(i=>{r+=`<p>${i.title} × ${i.quantity}</p>`}),t+=`<tr data-id=${e.id}>
        <td>${e.id}</td>
        <td>
          <p>${e.user.name}</p>
          <p>${e.user.tel}</p>
        </td>
        <td>${e.user.address}</td>
        <td>${e.user.email}</td>
        <td>
          ${r}
        </td>
        <td>${E.exec(new Date(e.createdAt*1e3).toISOString())[1].replace(/-/g,"/")}</td>
        <td class="orderStatus">
          <a href="#">${e.paid?"已處理":"未處裡"}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" value="刪除"/>
        </td>
      </tr>`}),$.innerHTML=t}function h(t){if(t.length){let e={};t.forEach(d=>{d.products.forEach(a=>{e[a.title]=(e[a.title]||0)+a.quantity*a.price})});let r=Object.entries(e);r.sort((d,a)=>a[1]-d[1]);const i=r.reduce((d,a,f)=>(f>2&&(d+=a[1]),d),0);r.splice(3,r.length-3,["其他",i]),g(r)}else p.unload()}function g(t){p.load({columns:t})}let p=c3.generate({bindto:"#chart",data:{type:"pie",columns:[]}});const{VITE_SITE:c,VITE_PATH_ADMIN:l,VITE_TOKEN:u}={VITE_SITE:"https://livejs-api.hexschool.io",VITE_PATH_CUSTOMER:"/api/livejs/v1/customer/jiayu",VITE_PATH_ADMIN:"/api/livejs/v1/admin/jiayu",VITE_TOKEN:"DR4FyKcdVsXgBXASlhs1pIv49Rm2",BASE_URL:"/WOWOROOM-js/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},O=document.querySelector(".orderPage-list");let s=[];O.addEventListener("click",t=>{if(t.target.classList.contains("discardAllBtn"))t.preventDefault(),v();else if(t.target.closest("[data-id]")){const e=t.target.closest("[data-id]").dataset.id;if(t.target.classList.contains("delSingleOrder-Btn"))t.preventDefault(),A(e);else if(t.target.closest(".orderStatus")){t.preventDefault();const r={data:{id:e,paid:t.target.innerText!=="已處理"}};S(r)}}});y();function y(){T()}async function T(){try{s=(await n.get(`${c}${l}/orders`,{headers:{Authorization:u}})).data.orders,o(),h(s)}catch{}}async function v(){try{s=(await n.delete(`${c}${l}/orders`,{headers:{Authorization:u}})).data.orders,o(),h(s)}catch{}}async function A(t){try{s=(await n.delete(`${c}${l}/orders/${t}`,{headers:{Authorization:u}})).data.orders,o(),h(s)}catch{}}async function S(t){try{s=(await n.put(`${c}${l}/orders`,t,{headers:{Authorization:u}})).data.orders,o()}catch{}}
