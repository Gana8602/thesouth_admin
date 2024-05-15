import{d as E,i as b,D as i,G as g,k as A,b as o,F as P,J as D,M as N,m as y,v as S,T as h}from"./app.72d9fe45.js";const X=()=>window.innerWidth-document.body.clientWidth,Y={alignX:"center",alignY:"center",noSpacing:!1,clickOut:!0,eager:!1,teleportTarget:"#app",backdropTransition:void 0,modalTransition:"scale",disableMotion:!1,removeBackdrop:!1,width:"auto",maxWidth:"none",fullscreen:!1},a=e=>Y[e],n="vue-neat-modal";var R=E({inheritAttrs:!1,emits:["after-enter","after-leave","update:modelValue"],props:{modelValue:{type:Boolean,default:void 0},alignX:{type:String,validator:e=>["left","center","right"].includes(e),default:()=>a("alignX")},alignY:{type:String,validator:e=>["top","center","bottom"].includes(e),default:()=>a("alignY")},noSpacing:{type:Boolean,default:()=>a("noSpacing")},eager:{type:Boolean,default:()=>a("eager")},clickOut:{type:Boolean,default:()=>a("clickOut")},teleportTarget:{type:[String,HTMLElement],default:()=>a("teleportTarget")},backdropTransition:{type:String,default:()=>a("backdropTransition")},modalTransition:{type:String,default:()=>a("modalTransition")},disableMotion:{type:Boolean,default:()=>a("disableMotion")},removeBackdrop:{type:Boolean,default:()=>a("removeBackdrop")},width:{type:String,default:()=>a("width")},maxWidth:{type:String,default:()=>a("maxWidth")},fullscreen:{type:Boolean,default:()=>a("fullscreen")},wrapperClass:String,modalClass:String,backdropClass:String},setup(e,{slots:r,emit:d}){const s=b(!1),c=b(e.eager),l=i(()=>e.modelValue||s.value),u=t=>{e.modelValue===void 0?s.value=t:d("update:modelValue",t)},T=i(()=>({width:e.width,maxWidth:e.maxWidth})),C=i(()=>[n,e.fullscreen&&`${n}--fullscreen`,e.noSpacing&&`${n}--no-spacing`,e.modalClass]),f=`${n}-wrapper`,w=i(()=>[f,`${f}--x-${e.alignX}`,`${f}--y-${e.alignY}`,e.wrapperClass]),B=i(()=>[`${n}-backdrop`,l.value&&`${n}-backdrop--active`,e.backdropClass]),M=()=>{document.body.classList.add(`${n}-open`),document.body.style.paddingRight=`${X()}px`},v=()=>{document.body.classList.remove(`${n}-open`),document.body.style.paddingRight=""};g([()=>e.modelValue,s],(t,k)=>{!c.value&&(t||k)&&(c.value=!0)}),g(l,t=>{N(()=>{!t||M()})});const $=()=>{!e.clickOut||u(!1)},m=t=>{if(!l.value)return;t.target.closest(`.${n}`)||$()};g(l,t=>{setTimeout(()=>{t?document.addEventListener("click",m):document.removeEventListener("click",m)},0)}),A(()=>{document.removeEventListener("click",m),v()});const V=()=>{v(),d("after-leave")},x=()=>{if(e.removeBackdrop)return null;const t=y(o("div",{class:B.value},null),[[S,l.value]]);return e.disableMotion?t:o(h,{appear:!0,name:e.backdropTransition,onAfterLeave:V},{default:()=>[t]})},L={close:()=>u(!1)},W=()=>{const t=y(o("div",{class:C.value,style:T.value},[r.default(L)]),[[S,l.value]]);return e.disableMotion?t:o(h,{appear:!0,name:e.modalTransition,onAfterEnter:()=>d("after-enter")},{default:()=>[t]})},O=()=>o("div",{class:w.value},[W()]),p=()=>c.value?o(D,{to:e.teleportTarget},{default:()=>[x(),O()]}):null;if(r.activator){const t={onClick:()=>u(!l.value)};return()=>o(P,null,[r.activator(t),p()])}return p}});export{R as M};
