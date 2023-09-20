import{_ as L,u as N,a as p,b as H,w as x,r as b,o as s,d as a,e as n,f as u,g as S,v as $,n as h,h as c,i as E,j as z,p as B,k as A,l as V,m as _,t as C,c as U,q as F,F as D}from"./index-b6e35920.js";import{S as T}from"./sweetalert2.all-4088fd79.js";import{A as I}from"./AppButton-e905976c.js";const R="/assets/login-bg-44619166.jpg";const q=e=>(B("data-v-8dc15aaa"),e=e(),A(),e),O={class:"form"},Y=q(()=>n("div",{class:"form__title-box"},[n("h1",{class:"form__title"},"Login"),n("p",{class:"form__subtitle"},"Please enter your Login and your Password")],-1)),G={class:"form__groups"},J={class:"form__group"},K={key:0,class:"error-message"},Q={class:"form__group"},W={key:0,class:"error-message"},X={key:1,class:"error-message"},Z={class:"form__actions"},ee={__name:"LoginForm",setup(e){const o=()=>{T.fire({icon:"success",title:"Login Successful",text:"You have successfully logged in!",showConfirmButton:!1,timer:3e3,didOpen:()=>{T.getPopup().style.fontSize="1.8rem"}})},i=N(),t=p(""),r=p(""),v=H(),f=async d=>{d.preventDefault();try{const l=await z.logIn(t.value,r.value);l.status===200&&localStorage.setItem("app_token",l.data.access_token);const{data:g}=await z.getMe();v.setCurrentUser(g),o(),i.push({name:"HomePage"})}catch(l){m.value=!0,console.error(l)}},y=p(!1),w=p(!1),m=p(!1);return x(t,d=>{y.value=!d.includes("."),m.value=!1}),x(r,d=>{w.value=d.length<6,m.value=!1}),(d,l)=>{const g=b("font-awesome-icon"),M=b("router-link");return s(),a("form",O,[Y,n("div",G,[n("div",J,[u(g,{class:"form__icon",icon:"fa-regular fa-user",size:"lg",style:{color:"#000000"}}),S(n("input",{class:"form__input",type:"text",placeholder:"email","onUpdate:modelValue":l[0]||(l[0]=k=>t.value=k),style:h({border:y.value?"1px solid red":""})},null,4),[[$,t.value]]),y.value?(s(),a("p",K,' Email is not valid, must contain "@" and ".". ')):c("",!0)]),n("div",Q,[u(g,{class:"form__icon",icon:"fa-solid fa-lock",size:"lg",style:{color:"#000000"}}),S(n("input",{class:"form__input",type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=k=>r.value=k),style:h({border:w.value?"1px solid red":""})},null,4),[[$,r.value]]),w.value?(s(),a("p",W," Password must contain at least 6 characters. ")):c("",!0),m.value?(s(),a("p",X," The entered email or password is incorrect. ")):c("",!0)])]),n("div",Z,[u(I,{style:{width:"100%",height:"7rem",margin:"0","font-size":"2.7rem"},label:"Login",white:"",onClick:f}),u(M,{to:{name:"RegisterPage"}},{default:E(()=>[u(I,{style:{float:"right"},label:"Register?",transparent:""})]),_:1})])])}}},ne=L(ee,[["__scopeId","data-v-8dc15aaa"]]);var j=V({props:{icon:String,iconColor:{type:String,default:"#ffffff"},iconType:String,iconSize:Number},data(){return{viewBox:"0 -50 200 600"}},methods:{checkIcon(e){return this.icon==e},changeViewbox(){switch(this.icon){case"success":{this.viewBox="0 0 512 512";break}case"close":{this.viewBox="-89 0 500 500";break}case"error":{this.viewBox="-89 0 500 500";break}case"info":{this.viewBox="0 -50 180 600";break}case"warning":{this.viewBox="0 -30 192 580";break}}}},created(){this.changeViewbox()},watch:{icon(){this.changeViewbox()}}});const te=["viewBox"],oe=["stroke","fill","stroke-width"],re=["stroke","fill","stroke-width"],se=["stroke","fill","stroke-width"],ae=["stroke","fill","stroke-width"],ie=["stroke","fill","stroke-width"];function le(e,o,i,t,r,v){return s(),a("svg",{style:h("height: "+e.iconSize*.6+"px; width: "+(e.iconSize*.6+2)+"px;"),xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,class:"icon-svg"},[e.checkIcon("success")?(s(),a("path",{key:0,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"40px":"0","stroke-alignment":"inside","stroke-linecap":"round","stroke-linejoin":"round",class:"",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},null,8,oe)):c("",!0),e.checkIcon("info")?(s(),a("path",{key:1,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"50px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",class:"",d:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},null,8,re)):c("",!0),e.checkIcon("error")?(s(),a("path",{key:2,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"30px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"},null,8,se)):c("",!0),e.checkIcon("close")?(s(),a("path",{key:3,stroke:e.iconColor,fill:e.iconColor,"stroke-width":e.iconType=="regular"?"30px":"0","stroke-alignment":"outside","stroke-linecap":"round","stroke-linejoin":"round",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"},null,8,ae)):c("",!0),e.checkIcon("warning")?(s(),a("path",{key:4,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"50px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"},null,8,ie)):c("",!0)],12,te)}j.render=le;var P=V({name:"VueBasicAlert",props:{width:{type:Number},duration:{type:Number,default:300},closeIn:{type:Number,default:null}},components:{Icon:j},data(){return{position:"top right",status:!1,isHide:!1,iconSize:35,iconType:"solid",alertType:"info",header:"Some Information",message:"This is the information of something you may know"}},methods:{showAlert(e,o,i,t){this.alertType=e,this.header=i||e.toUpperCase(),this.message=o,t?(this.position=t.position?t.position:"top right",this.iconSize=t.iconSize?t.iconSize:35,this.iconType=t.iconType==="regular"?"regular":"solid"):this.iconType="solid",setTimeout(()=>{this.status=!0},50),this.closeIn&&setTimeout(()=>this.closeAlert(),this.closeIn)},closeAlert(){this.isHide=!0,setTimeout(()=>{this.isHide=!1,this.status=!1,this.iconSize=40,this.header="",this.message=""},this.duration)}}});const ce={class:"alert-container"},ue={class:"alert-icon"},de={class:"alert-content"},pe={class:"alert-head"},he={class:"alert-message"},fe={class:"alert-close"};function me(e,o,i,t,r,v){const f=b("Icon");return s(),a("div",{class:_(["vue-alert",e.status?`${e.position?e.position:"top right"} ${e.isHide?"":"active"}`:`${e.position?e.position:"top right"}`]),style:h(`width: ${e.width?e.width:400}px;transition: all ${e.status?e.duration:0}ms ease-in-out;`)},[n("div",ce,[n("div",{class:_(["alert-color-bar",e.alertType])},null,2),n("div",ue,[n("div",{class:_(["alert-icon-box",e.alertType]),style:h("width: "+e.iconSize+"px; height: "+e.iconSize+"px;")},[u(f,{icon:e.alertType,iconSize:e.iconSize,iconType:e.iconType},null,8,["icon","iconSize","iconType"])],6)]),n("div",de,[n("h5",pe,C(e.header),1),n("p",he,C(e.message),1)]),n("div",fe,[n("div",{onClick:o[0]||(o[0]=function(){return e.closeAlert&&e.closeAlert(...arguments)}),class:"alert-close-button",style:h("width: "+e.iconSize*.6+"px; height: "+e.iconSize*.6+`px;transition: all ${e.duration}ms ease-in-out;`)},[u(f,{icon:"close",style:{width:"100%"},iconColor:"#bbbbbb"})],4)])])],6)}function ge(e,o){o===void 0&&(o={});var i=o.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ve=`
:root {
  --success-green: #2aa36a;
  --info-blue: #2a79c2;
  --error-red: #eb4e2c;
  --warning-yellow: #ffc600;
}
.vue-alert * {
  font-family: Arial;
}
.vue-alert {
  position: fixed;
  display: block;
  margin: 0px;
  border: none;
  border-radius: 6px;
  opacity: 0;
  background: #fff;
  box-shadow: 0px 0px 16px 0px #d3d3d3;
  text-align: center;
  z-index: 1000000;
  padding: 10px;
}
.vue-alert.top {
  top: 20px;
}
.vue-alert.bottom {
  bottom: 20px;
}
.vue-alert.center {
  right: 50%;
}
.vue-alert.top.center {
  transform: translate(50%, -100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.bottom.center {
  transform: translate(50%, 100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.right {
  transform: translate(100%, 0px);
  max-width: calc(100vw - 60px);
  right: 20px;
}
.vue-alert.left {
  transform: translate(-100%, 0px);
  max-width: calc(100vw - 60px);
  left: 20px;
}
.vue-alert.active {
  opacity: 1;
  transform: translate(0px, 0px);
}
.vue-alert.center.active {
  opacity: 1;
  transform: translate(50%, 0%);
}
.vue-alert > .alert-container {
  display: flex;
  position: relative;
  width: 100%;
}
.vue-alert > .alert-container .alert-color-bar {
  min-height: 65px;
  height: auto;
  min-width: 5px;
  border-radius: 2px;
  margin-right: 10px;
}
.vue-alert > .alert-container .alert-icon {
  display: flex;
  margin: auto 16px auto 6px;
}
.vue-alert > .alert-container .alert-icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: auto;
}
.vue-alert > .alert-container .alert-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
.vue-alert > .alert-container .alert-icon-box.success,
.vue-alert > .alert-container .alert-color-bar.success {
  background-color: var(--success-green);
}
.vue-alert > .alert-container .alert-icon-box.info,
.vue-alert > .alert-container .alert-color-bar.info {
  background-color: var(--info-blue);
}
.vue-alert > .alert-container .alert-icon-box.error,
.vue-alert > .alert-container .alert-color-bar.error {
  background-color: var(--error-red);
}
.vue-alert > .alert-container .alert-icon-box.warning,
.vue-alert > .alert-container .alert-color-bar.warning {
  background-color: var(--warning-yellow);
}
.vue-alert > .alert-container .alert-close {
  display: flex;
  margin: 0px 6px;
}
.vue-alert > .alert-container .alert-close-button {
  padding: 6px;
  margin: auto;
  border-radius: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-alert > .alert-container .alert-close-button:hover {
  background-color: #ffffff;
  filter: drop-shadow(0px 1px 3px gainsboro) brightness(0.95);
}
.vue-alert > .alert-container .alert-content > * {
  text-align: left;
  margin: 2px 4px;
  padding-right: 6px;
}
.vue-alert > .alert-container .alert-content > h5.alert-head {
  font-size: 16px;
  font-weight: 600;
  color: #4b4b4b;
}
.vue-alert > .alert-container .alert-content > p.alert-message {
  font-size: 14px;
  min-width: fit-content;
  font-weight: bold;
  line-height: 1.3;
  color: #bcbcbc;
}
`;ge(ve);P.render=me;var ye=(()=>{const e=P;return e.install=o=>{o.component("VueBasicAlert",e)},e})();const we=e=>(B("data-v-900bc4c2"),e=e(),A(),e),ke={class:"background"},_e=we(()=>n("img",{src:R,alt:"Background"},null,-1)),be={class:"login-container"},xe={__name:"LoginPage",setup(e){function o(){p.alert.showAlert("success",35,"solid","Success 200","This is the information of something you may know Success.")}return(i,t)=>(s(),a(D,null,[n("div",ke,[_e,n("div",be,[u(ne,{onAlert:o})])]),i.showAlert?(s(),U(F(ye),{key:0,duration:3e3,closeIn:3e3,ref:"alert"},null,512)):c("",!0)],64))}},Ce=L(xe,[["__scopeId","data-v-900bc4c2"]]);export{Ce as default};
