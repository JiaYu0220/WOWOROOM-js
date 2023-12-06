import{d as g,a as d}from"./axios-e742d201.js";const h=document.querySelector(".js-orderList");function n(){let e="";s.forEach(t=>{let a="";t.products.forEach(r=>{a+=`<p>${r.title} × ${r.quantity}</p>`}),e+=`<tr>
        <td>${t.id}</td>
        <td>
          <p>${t.user.name}</p>
          <p>${t.user.tel}</p>
        </td>
        <td>${t.user.address}</td>
        <td>${t.user.email}</td>
        <td>
          ${a}
        </td>
        <td>${g.exec(new Date(t.createdAt*1e3).toISOString())[1].replace(/-/g,"/")}</td>
        <td class="orderStatus">
          <a href="#">${t.paid?"已處理":"未處裡"}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" value="刪除" data-id=${t.id} />
        </td>
      </tr>`}),h.innerHTML=e}let o=[];function l(){let e={};s.forEach(a=>{a.products.forEach(r=>{e[r.title]=(e[r.title]||0)+r.quantity*r.price})}),o=Object.entries(e),o.sort((a,r)=>r[1]-a[1]),console.log(o);const t=o.reduce((a,r,p)=>(p>2&&(a+=r[1]),a),0);o.splice(3,o.length-3,["其他",t]),f()}function f(){E.load({columns:o})}let E=c3.generate({bindto:"#chart",data:{type:"pie",columns:[]}});const{VITE_SITE:i,VITE_PATH_ADMIN:c,VITE_TOKEN:u}={VITE_SITE:"https://livejs-api.hexschool.io",VITE_PATH_CUSTOMER:"/api/livejs/v1/customer/jiayu",VITE_PATH_ADMIN:"/api/livejs/v1/admin/jiayu",VITE_TOKEN:"DR4FyKcdVsXgBXASlhs1pIv49Rm2",BASE_URL:"/WOWOROOM-js/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},O=document.querySelector(".orderPage-list");let s=[];O.addEventListener("click",e=>{if(e.target.classList.contains("discardAllBtn"))e.preventDefault(),A();else if(e.target.hasAttribute("data-id")){e.preventDefault();let t=e.target.dataset.id;T(t)}});$();function $(){y()}async function y(){try{s=(await d.get(`${i}${c}/orders`,{headers:{Authorization:u}})).data.orders,console.log(s),n(),l()}catch(e){console.log("getOrder",e.response)}}async function A(){try{s=(await d.delete(`${i}${c}/orders`,{headers:{Authorization:u}})).data.orders,console.log(s),n(),l()}catch(e){console.log("delAllCart",e.response.data.message)}}async function T(e){try{s=(await d.delete(`${i}${c}/orders/${e}`,{headers:{Authorization:u}})).data.orders,console.log(s),n(),l()}catch(t){console.log("deleteOrder",t.response.data.message)}}
