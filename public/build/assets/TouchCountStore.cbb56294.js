import{a as f,P as m}from"./PsApiService.74841eb2.js";import{A as p}from"./ApiStatus.5720ba0b.js";import{bD as l,u as o,i as S}from"./app.72d9fe45.js";import{m as h}from"./PsSepetetedStore.9a31ac47.js";const A=h(e=>l(`touchCountStore/${e}`,()=>{const a=o(new f),t=o({value:!1});let s=S(10),r=0,u="";async function i(n,c){t.value=!0,await m.postTouchCount(new p,n,c.toMap()),t.value=!1}return{postTouchCount:i,touchcount:a,loading:t,limit:s,offset:r,id:u}}));export{A as u};
