import{a as l,P as m}from"./PsApiService.74841eb2.js";import{A as c}from"./ApiStatus.5720ba0b.js";import{bD as p,u as t,i as S}from"./app.72d9fe45.js";import{m as k}from"./PsSepetetedStore.9a31ac47.js";const A=k(o=>p(`TokenStore/${o}`,()=>{const a=t(new l),e=t({value:!1});let r=S(10),s=0,n="";async function i(u){e.value=!0;const f=await m.getToken(new c,u);return e.value=!1,f}return{token:a,loading:e,limit:r,offset:s,id:n,loadToken:i}}));export{A as u};
