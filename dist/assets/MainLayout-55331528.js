import{_ as b,u as M,b as I,a as S,s as k,r as p,o as _,d,f as s,i as c,e as o,x as r,q as h,t as U,m as C,j as w,p as A,k as E,y as N,F as T}from"./index-6316a9fc.js";import{A as B}from"./AppButton-ccabc9ec.js";import{S as y}from"./sweetalert2.all-4088fd79.js";const L=a=>(A("data-v-f1ce92d7"),a=a(),E(),a),$={class:"navbar"},z=L(()=>o("div",{class:"logo"},[o("h1",{class:"logo-title"},"REAL ESTATE")],-1)),O={class:"menu__list"},P={key:0,class:"user-logout"},R=L(()=>o("span",null,null,-1)),H={key:1,class:"user-login"},V={__name:"TheNavbar",setup(a){const u=()=>{y.fire({icon:"success",title:"Logout Successful",text:"You have successfully logged out!",showConfirmButton:!1,timer:3e3,didOpen:()=>{y.getPopup().style.fontSize="1.8rem"}})},i=M(),n=I(),t=S(!1);function m(){t.value=!t.value}async function x(){(await w.logOut()).status===200&&(n.clearCurrentUser(),localStorage.removeItem("app_token"),u(),i.push({name:"HomePage"}))}return k(()=>{(async()=>{try{const e=await w.getMe();e.status===200?n.setCurrentUser(e.data):labelUser="LogIn"}catch(e){console.log(e)}})()}),(v,e)=>{const l=p("RouterLink"),g=p("font-awesome-icon");return _(),d("nav",$,[s(l,{to:{name:"HomePage"}},{default:c(()=>[z]),_:1}),o("div",{class:C(["menu-content",t.value?"menu-open":"menu-closed"])},[o("ul",O,[o("li",{class:"menu__list-element",onClick:e[0]||(e[0]=f=>t.value=!1)},[s(l,{to:"/home#home"},{default:c(()=>[r("Home")]),_:1})]),o("li",{class:"menu__list-element",onClick:e[1]||(e[1]=f=>t.value=!1)},[s(l,{to:"/home#about"},{default:c(()=>[r("About")]),_:1})]),o("li",{class:"menu__list-element",onClick:e[2]||(e[2]=f=>t.value=!1)},[s(l,{to:"/home#contact"},{default:c(()=>[r("Contact")]),_:1})]),o("div",{class:"user-status",onClick:e[3]||(e[3]=f=>t.value=!1)},[s(g,{class:"menu__icon",icon:"fa-regular fa-user",size:"lg",style:{color:"#fff"}}),h(n).currentUser.first_name?(_(),d("span",P,[r(U(h(n).currentUser.first_name),1),R,s(B,{label:"Logout",logout:"",onClick:x})])):(_(),d("span",H,[s(l,{to:{name:"LoginPage"}},{default:c(()=>[r("Login")]),_:1})]))])])],2),o("div",{class:"menu-btn",onClick:m},[s(g,{icon:"fa-solid fa-bars",size:"xl"})])])}}},F=b(V,[["__scopeId","data-v-f1ce92d7"]]);const Y={__name:"MainLayout",setup(a){const u=S(!1),i=()=>{u.value=window.pageYOffset>0};return k(()=>{window.addEventListener("scroll",i)}),N(()=>{window.removeEventListener("scroll",i)}),(n,t)=>{const m=p("router-view");return _(),d(T,null,[s(F,{class:C(["navbar",{"navbar-scrolled":u.value}])},null,8,["class"]),s(m)],64)}}},G=b(Y,[["__scopeId","data-v-116ceaab"]]);export{G as default};
