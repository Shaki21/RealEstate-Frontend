import{_ as A,a as u,r as Y,o as p,d as $,e,F as K,E as J,q as G,t as i,f as r,i as R,h as M,T as E,p as B,k as V,g as m,v as g,b as W,C as X,u as Z,s as ee,x as T,c as F,H as se}from"./index-b6e35920.js";import{s as Q}from"./filter-11b0747a.js";import{A as S}from"./AppButton-e905976c.js";import{S as U}from"./sweetalert2.all-4088fd79.js";import{h as L}from"./housesService-ab3a7ea6.js";const te="/assets/user-ante-1-1-b239f318.jpeg";const oe={class:"wrapper"},le={class:"gallery"},ae=["src"],ne={class:"thumbnails"},ce=["src","onClick"],ie=["onClick"],de=["src"],_e={class:"remaining"},re={key:0,class:"modal"},ue={class:"modal-top__btn"},pe=["src"],ve={class:"image-count"},me={__name:"ImageGallery",setup(o){const c=u(["https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_2_1681458848.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_9_1681458850.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_5_1681458849.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_4_1681458849.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_19_1681458852.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_17_1681458852.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_6_1681458849.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_8_1681458850.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_15_1681458851.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_11_1681458850.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_12_1681458850.jpg","https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_18_1681458852.jpg"]),f=c.value[3],a=u(0),y=u(!1),b=u(c.value.length),l=u(a.value+1),d=u(c.value[a.value]),v=u(c.value.slice(1,4)),O=u(c.value.length-v.value.length);function s(_){a.value=_,d.value=c.value[a.value],l.value=a.value+1,y.value=!0,window.addEventListener("keydown",q)}function t(){y.value=!1,window.removeEventListener("keydown",q)}function n(){a.value=(a.value+1)%c.value.length,d.value=c.value[a.value],l.value=a.value+1}function P(){a.value=(a.value-1+c.value.length)%c.value.length,d.value=c.value[a.value],l.value=a.value+1}function q(_){_.key==="ArrowRight"?n():_.key==="ArrowLeft"?P():_.key==="Escape"&&t()}async function N(){try{const I=await(await fetch(d.value)).blob(),j=document.createElement("a");j.href=URL.createObjectURL(I),j.download="image.jpg",j.click(),URL.revokeObjectURL(j.href)}catch(_){console.error("Error downloading image:",_)}}function x(){const _=document.querySelector(".gallery img");_.requestFullscreen?_.requestFullscreen():_.mozRequestFullScreen?_.mozRequestFullScreen():_.webkitRequestFullscreen?_.webkitRequestFullscreen():_.msRequestFullscreen&&_.msRequestFullscreen()}return(_,I)=>{const j=Y("font-awesome-icon");return p(),$("div",oe,[e("div",le,[e("img",{class:"gallery-img",src:d.value,onClick:I[0]||(I[0]=k=>s(a.value))},null,8,ae)]),e("div",ne,[(p(!0),$(K,null,J(v.value,(k,w)=>(p(),$("div",{class:"thumbnails-img",key:w},[w<v.value.length-1?(p(),$("img",{key:0,src:k,onClick:z=>s(w+1)},null,8,ce)):(p(),$("div",{key:1,class:"overlay",onClick:z=>s(w+1)},[e("img",{src:G(f),style:{overflow:"hidden"}},null,8,de),e("div",_e,"+"+i(O.value),1)],8,ie))]))),128))]),r(E,{name:"fade"},{default:R(()=>[y.value?(p(),$("div",re,[e("span",{class:"close",onClick:t},"×"),e("div",ue,[r(j,{icon:"fa-solid fa-circle-down",size:"2xl",style:{color:"#ffffff"},onClick:N}),r(j,{icon:"fa-solid fa-up-right-and-down-left-from-center",size:"2xl",style:{color:"#ffffff"},onClick:x})]),e("img",{src:d.value,class:"modal-content",onClick:n},null,8,pe),e("div",{class:"arrows"},[e("div",{class:"modal-arrow modal-arrow-left",onClick:P}," ❮ "),e("div",{class:"modal-arrow modal-arrow-right",onClick:n}," ❯ ")]),e("div",ve,i(l.value)+" of "+i(b.value),1)])):M("",!0)]),_:1})])}}},he=A(me,[["__scopeId","data-v-af404945"]]);const H=o=>(B("data-v-84bd254b"),o=o(),V(),o),ge={class:"overview__table"},be=H(()=>e("div",{class:"c1-r1"},[e("b",null,"Property ID")],-1)),fe={class:"c2-r1"},ye=H(()=>e("div",{class:"c1-r2"},[e("b",null,"Price")],-1)),$e={class:"c2-r2"},we=H(()=>e("div",{class:"c1-r3"},[e("b",null,"Property Type")],-1)),je={class:"c2-r3"},ke=H(()=>e("div",{class:"c1-r4"},[e("b",null,"Property status")],-1)),Ce={class:"c2-r4"},Se=H(()=>e("div",{class:"c3-r1"},[e("b",null,"Bedrooms")],-1)),He={class:"c4-r1"},qe=H(()=>e("div",{class:"c3-r2"},[e("b",null,"Bathrooms")],-1)),xe={class:"c4-r2"},Ie=H(()=>e("div",{class:"c3-r3"},[e("b",null,"Size")],-1)),ze={class:"c4-r3"},Me=H(()=>e("div",{class:"c3-r4"},[e("b",null,"Land area")],-1)),Ue={class:"c4-r4"},Ae={__name:"OverviewTable",props:{currentHouse:Object},setup(o){return(c,f)=>(p(),$("div",ge,[be,e("div",fe,i(o.currentHouse.id),1),ye,e("div",$e,i(G(Q)(o.currentHouse.price))+" $",1),we,e("div",je,i(o.currentHouse.property_type),1),ke,e("div",Ce,i(o.currentHouse.property_status),1),Se,e("div",He,i(o.currentHouse.bedroom),1),qe,e("div",xe,i(o.currentHouse.bathroom),1),Ie,e("div",ze,i(o.currentHouse.quadrature)+" m²",1),Me,e("div",Ue,i(o.currentHouse.garden_quadrature)+" m²",1)]))}},Be=A(Ae,[["__scopeId","data-v-84bd254b"]]);const D=o=>(B("data-v-6a20947a"),o=o(),V(),o),Ve={class:"background"},De={class:"wrapper"},Oe=D(()=>e("div",{class:"modal__heading"},[e("h1",{class:"modal__title"},"Contact Ante Bruno Šakić"),e("p",{class:"modal__subtitle"}," Please complete the form below and our agent will respond to your query shortly: "),e("br"),e("p",{class:"modal__subtitle"},"All fields must be filled.")],-1)),Pe={class:"modal__groups"},Fe={class:"modal__group"},Re=D(()=>e("label",{class:"modal__label"},"Name",-1)),Ee={class:"modal__group"},Ne=D(()=>e("label",{class:"modal__label"},"E-mail address",-1)),Te={class:"modal__group"},Le=D(()=>e("label",{class:"modal__label"},"Telephone",-1)),Ge={class:"modal__group"},Ye=D(()=>e("label",{class:"modal__label"},"Enquiry",-1)),Ke={class:"modal__action"},Qe={__name:"ContactModal",props:{isModalOpen:Boolean},emits:["close"],setup(o,{emit:c}){const f=()=>{U.fire({icon:"success",title:"Request sent successfully",text:"The agent will contact you soon",showCloseButton:!0,didOpen:()=>{U.getPopup().style.fontSize="1.8rem"}})},a=u({name:"",email:"",telephone:null,enquiry:""}),y=()=>{f(),c("close")},b=()=>{c("close")};return(l,d)=>(p(),$("div",Ve,[e("div",De,[Oe,e("form",Pe,[e("div",Fe,[Re,m(e("input",{class:"modal__input","onUpdate:modelValue":d[0]||(d[0]=v=>a.value.name=v)},null,512),[[g,a.value.name]])]),e("div",Ee,[Ne,m(e("input",{class:"modal__input","onUpdate:modelValue":d[1]||(d[1]=v=>a.value.email=v)},null,512),[[g,a.value.email]])]),e("div",Te,[Le,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":d[2]||(d[2]=v=>a.value.telephone=v)},null,512),[[g,a.value.telephone]])]),e("div",Ge,[Ye,m(e("textarea",{class:"modal__input modal__input--last","onUpdate:modelValue":d[3]||(d[3]=v=>a.value.enquiry=v)},null,512),[[g,a.value.enquiry]])])]),e("div",Ke,[r(S,{label:"Send",whiteSquare:"",onClick:y}),r(S,{label:"Cancel",transparentSquare:"",onClick:b})])])]))}},Je=A(Qe,[["__scopeId","data-v-6a20947a"]]);const C=o=>(B("data-v-9993db64"),o=o(),V(),o),We={class:"background"},Xe={class:"wrapper"},Ze={class:"modal__heading"},es={class:"modal__title"},ss={class:"modal__wrapper"},ts={class:"modal__left-side"},os={class:"modal__groups"},ls={class:"modal__group"},as=C(()=>e("label",{class:"modal__label"},"Title",-1)),ns={class:"modal__group"},cs=C(()=>e("label",{class:"modal__label"},"Price",-1)),is={class:"modal__group modal__group--double"},ds={class:"modal__group"},_s=C(()=>e("label",{class:"modal__label"},"Bedrooms",-1)),rs={class:"modal__group"},us=C(()=>e("label",{class:"modal__label"},"Bathrooms",-1)),ps={class:"modal__group modal__group--double"},vs={class:"modal__group"},ms=C(()=>e("label",{class:"modal__label"},"Quadrature",-1)),hs={class:"modal__group"},gs=C(()=>e("label",{class:"modal__label"},"Garden quadrature",-1)),bs={class:"modal__right-side"},fs={class:"modal__groups"},ys={class:"modal__group"},$s=C(()=>e("label",{class:"modal__label"},"Floors",-1)),ws={class:"modal__group"},js=C(()=>e("label",{class:"modal__label"},"Address",-1)),ks={class:"modal__group"},Cs=C(()=>e("label",{class:"modal__label"},"Property type",-1)),Ss={class:"modal__group"},Hs=C(()=>e("label",{class:"modal__label"},"Property status",-1)),qs={class:"modal__action"},xs={__name:"HouseSetModal",props:{isSetModalOpen:Boolean,selectedHouse:{type:Object,default:null}},emits:["add","edit","close"],setup(o,{emit:c}){const f=o,a=()=>{U.fire({icon:"success",title:"Successful Edited",text:"You have successfully edited house!",showConfirmButton:!1,timer:3e3,didOpen:()=>{U.getPopup().style.fontSize="1.8rem"}})},y=u(null),b=(s=null)=>({title:(s==null?void 0:s.title)??"",price:(s==null?void 0:s.price)??null,bedroom:(s==null?void 0:s.bedroom)??null,bathroom:(s==null?void 0:s.bathroom)??null,quadrature:(s==null?void 0:s.quadrature)??null,floors:(s==null?void 0:s.floors)??null,garden_quadrature:(s==null?void 0:s.garden_quadrature)??null,address:(s==null?void 0:s.address)??"",property_type:(s==null?void 0:s.property_type)??"",property_status:(s==null?void 0:s.property_status)??"",description:(s==null?void 0:s.description)??"",cityName:(s==null?void 0:s.cityName)??"",countryName:(s==null?void 0:s.countryName)??""}),l=u(b()),d=async()=>{try{const{data:s}=await L.updateHouse(f.selectedHouse.id,{...l.value});c("edit",s.house),a()}catch(s){console.log(s)}},v=()=>{c("close")};return(()=>{f.selectedHouse&&(l.value=b(f.selectedHouse),y.value="Edit")})(),(s,t)=>(p(),$("div",We,[e("div",Xe,[e("div",Ze,[e("h1",es,i(y.value)+" house",1)]),e("form",ss,[e("div",ts,[e("div",os,[e("div",ls,[as,m(e("input",{class:"modal__input","onUpdate:modelValue":t[0]||(t[0]=n=>l.value.title=n)},null,512),[[g,l.value.title]])]),e("div",ns,[cs,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[1]||(t[1]=n=>l.value.price=n)},null,512),[[g,l.value.price]])]),e("div",is,[e("div",ds,[_s,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[2]||(t[2]=n=>l.value.bedroom=n)},null,512),[[g,l.value.bedroom]])]),e("div",rs,[us,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[3]||(t[3]=n=>l.value.bathroom=n)},null,512),[[g,l.value.bathroom]])])]),e("div",ps,[e("div",vs,[ms,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[4]||(t[4]=n=>l.value.quadrature=n)},null,512),[[g,l.value.quadrature]])]),e("div",hs,[gs,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[5]||(t[5]=n=>l.value.garden_quadrature=n)},null,512),[[g,l.value.garden_quadrature]])])])])]),e("div",bs,[e("div",fs,[e("div",ys,[$s,m(e("input",{class:"modal__input",type:"number","onUpdate:modelValue":t[6]||(t[6]=n=>l.value.floors=n)},null,512),[[g,l.value.floors]])]),e("div",ws,[js,m(e("input",{class:"modal__input","onUpdate:modelValue":t[7]||(t[7]=n=>l.value.address=n)},null,512),[[g,l.value.address]])]),e("div",ks,[Cs,m(e("input",{class:"modal__input","onUpdate:modelValue":t[8]||(t[8]=n=>l.value.property_type=n)},null,512),[[g,l.value.property_type]])]),e("div",Ss,[Hs,m(e("input",{class:"modal__input","onUpdate:modelValue":t[9]||(t[9]=n=>l.value.property_status=n)},null,512),[[g,l.value.property_status]])])])])]),e("div",qs,[r(S,{label:"Close",whiteSquare:"",onClick:v}),r(S,{label:"Save",transparentSquare:"",onClick:d})])])]))}},Is=A(xs,[["__scopeId","data-v-9993db64"]]);const zs=o=>(B("data-v-2b90c98b"),o=o(),V(),o),Ms={class:"background"},Us={class:"wrapper"},As={class:"modal"},Bs=zs(()=>e("h3",{class:"modal__title"}," Are you sure you want to delete the house? ",-1)),Vs={class:"modal__action"},Ds={__name:"DeleteConfirmationModal",emits:["close","confirm"],setup(o,{emit:c}){const f=()=>{c("close")},a=()=>{c("confirm")};return(y,b)=>(p(),$("div",Ms,[e("div",Us,[e("div",As,[Bs,e("div",Vs,[r(S,{label:"Close",whiteSquare:"",onClick:f}),r(S,{label:"Delete",transparentSquare:"",onClick:a})])])])]))}},Os=A(Ds,[["__scopeId","data-v-2b90c98b"]]);const h=o=>(B("data-v-832ac735"),o=o(),V(),o),Ps={class:"header"},Fs={class:"left-side"},Rs={class:"header-title"},Es={class:"groups-specs"},Ns={class:"group-specs"},Ts={class:"right"},Ls={class:"specs"},Gs=h(()=>e("p",{class:"specs-title"},"Property ID",-1)),Ys={class:"group-specs"},Ks={class:"right"},Qs={class:"specs"},Js=h(()=>e("p",{class:"specs-title"},"Size",-1)),Ws={class:"group-specs"},Xs={class:"right"},Zs={class:"specs"},et=h(()=>e("p",{class:"specs-title"},"Bedrooms",-1)),st={class:"group-specs"},tt={class:"right"},ot={class:"specs"},lt=h(()=>e("p",{class:"specs-title"},"Bathroom",-1)),at={class:"right-side"},nt={class:"price-title"},ct={class:"two-col"},it={class:"wrapper"},dt={class:"section description"},_t=h(()=>e("div",{class:"box__head description__heading"},"Description",-1)),rt={class:"description__title"},ut={class:"section location"},pt=h(()=>e("div",{class:"box__head location__heading"},"Location",-1)),vt={class:"location__title"},mt={class:"title title-address"},ht=h(()=>e("b",null,"Address:",-1)),gt={class:"title title-city"},bt=h(()=>e("b",null,"City:",-1)),ft={class:"title title-country"},yt=h(()=>e("b",null,"Country:",-1)),$t={class:"section overview"},wt=h(()=>e("div",{class:"box__head overview__heading"},"Overview",-1)),jt={class:"aside"},kt={key:0,class:"conctact__card"},Ct=h(()=>e("h1",{class:"card__header"},"Contact an agent",-1)),St=h(()=>e("div",null,[e("img",{class:"card__img",src:te,alt:"Agent"})],-1)),Ht=h(()=>e("h1",{class:"contetn-heading"},"Ante Bruno Šakić",-1)),qt=h(()=>e("p",{class:"content-city"},"Mostar",-1)),xt=h(()=>e("p",{class:"content-number"},"+387 63 123 456",-1)),It={__name:"HouseDetailsPage",setup(o){const c=W(),f=X(),a=Z(),y=u(null),b=u(!1),l=()=>{U.fire({icon:"success",title:"House delete successful",text:"You have successfully delete house!",showConfirmButton:!1,timer:3e3,didOpen:()=>{U.getPopup().style.fontSize="1.8rem"}})},d=u(!1),v=()=>{d.value=!0},O=()=>{d.value=!1},s=u(f.params.id),t=u({});(async k=>{const{data:w}=await L.getHouseId(k);t.value=w})(s.value);function P(){y.value=t.value,q.value=!0}const q=u(!1),N=k=>{t.value=k,q.value=!1},x=u(!1),_=()=>{x.value=!0},I=async k=>{try{await L.deleteHouse(k),x.value=!1,l(),a.push({name:"HousesPage"})}catch(w){console.log(w)}};function j(){q.value=!1,x.value=!1}return ee(()=>{c.currentUser.is_admin===1?b.value=!0:b.value=!1}),(k,w)=>{const z=Y("font-awesome-icon");return p(),$(K,null,[e("div",Ps,[e("div",Fs,[e("h1",Rs,i(t.value.title),1),e("div",Es,[e("div",Ns,[r(z,{class:"specs-icon",icon:"fa-solid fa-barcode",size:"xl",style:{color:"#0a66ca"}}),e("div",Ts,[e("h4",Ls,i(t.value.id),1),Gs])]),e("div",Ys,[r(z,{class:"specs-icon",icon:"fa-solid fa-house",size:"xl",style:{color:"#0a66ca"}}),e("div",Ks,[e("h4",Qs,i(t.value.quadrature)+" m²",1),Js])]),e("div",Ws,[r(z,{class:"specs-icon",icon:"fa-solid fa-bed",size:"xl",style:{color:"#0a66ca"}}),e("div",Xs,[e("h4",Zs,i(t.value.bedroom),1),et])]),e("div",st,[r(z,{class:"specs-icon",icon:"fa-solid fa-bath",size:"xl",style:{color:"#0a66ca"}}),e("div",tt,[e("h4",ot,i(t.value.bathroom),1),lt])])])]),e("div",at,[e("h1",nt,i(G(Q)(t.value.price))+" $ ",1)])]),e("div",ct,[e("div",it,[r(he),e("section",dt,[_t,e("div",rt,i(t.value.description),1)]),e("section",ut,[pt,e("div",vt,[e("h3",mt,[ht,T("   "+i(t.value.address),1)]),e("h3",gt,[bt,T("   "+i(t.value.cityName),1)]),e("h3",ft,[yt,T("   "+i(t.value.countryName),1)])])]),e("section",$t,[wt,r(Be,{currentHouse:t.value},null,8,["currentHouse"])])]),e("div",jt,[b.value?M("",!0):(p(),$("div",kt,[Ct,e("div",{class:"card__content"},[St,e("div",null,[Ht,qt,xt,e("a",{class:"content-link",onClick:v},"Contact now →")])])])),b.value?(p(),F(S,{key:1,label:"edit",blue:"",onClick:P})):M("",!0),b.value?(p(),F(S,{key:2,label:"delete",blue:"",onClick:_})):M("",!0)])]),r(E,{name:"fade"},{default:R(()=>[d.value?(p(),F(Je,{key:0,onClose:O})):M("",!0)]),_:1}),r(E,{name:"fade"},{default:R(()=>[q.value?(p(),F(Is,{key:0,onClose:j,onAdd:k.onAdd,onEdit:N,selectedHouse:y.value},null,8,["onAdd","selectedHouse"])):M("",!0)]),_:1}),r(E,{name:"fade"},{default:R(()=>[m(r(Os,{onClose:j,onConfirm:w[0]||(w[0]=zt=>I(t.value.id))},null,512),[[se,x.value]])]),_:1})],64)}}},Dt=A(It,[["__scopeId","data-v-832ac735"]]);export{Dt as default};