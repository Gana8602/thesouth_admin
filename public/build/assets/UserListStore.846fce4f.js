import{a as O,P as n}from"./PsApiService.74841eb2.js";import{U as i}from"./User.0c3ba1a8.js";import{U as F}from"./UserStore.e188dd03.js";import{U as b}from"./UserListParameterHolder.d110b747.js";import{bD as k,u as m,i as x}from"./app.72d9fe45.js";import{m as A}from"./PsSepetetedStore.9a31ac47.js";const C=A(v=>k(`userListProvider/${v}`,()=>{const d=m({value:!1}),e=m(new O),s=m({value:!1});let o=x(6),r=0,g="",p=m(new F),w=m(new b);function L(){return(e==null?void 0:e.data)!=null&&e.data.length>0}function f(a){var t,l;e!=null&&e.data!=null&&e.data.length>0&&r!=0?(a.data!=null&&a.data.length>0?(((t=a.data)==null?void 0:t.length)<o.value?d.value=!0:d.value=!1,e.data.push(...a.data)):d.value=!0,e.code=a.code,e.status=a.status,e.message=a.message):(((l=a.data)==null?void 0:l.length)<o.value||a.data==null?d.value=!0:d.value=!1,e.data=a.data,e.code=a.code,e.status=a.status,e.message=a.message),e!=null&&e.data!=null&&(r=e.data.length)}async function h(a,t){s.value=!0;const l=await n.getUserList(new i,a,o.value,r,t.toMap());f(l),s.value=!1}async function U(a,t){r=0,s.value=!0;const l=await n.getUserSearchList(new i,o.value,r,a,t.toMap());f(l),s.value=!1}async function S(a){r=0,s.value=!0;const t=await n.getTopRatedSellerList(new i,a,o.value,r);f(t),s.value=!1}async function y(a){s.value=!0;const t=await n.getTopRatedSellerList(new i,a,o.value,r);f(t),s.value=!1}async function R(a){s.value=!0;const t=0,l=e.data.length,c=await n.getTopRatedSellerList(new i,a,l,t);e.data=c.data,e.code=c.code,e.status=c.status,e.message=c.message,s.value=!1}async function M(a,t){s.value=!0;const l=0,c=e.data.length,u=await n.getUserSearchList(new i,c,l,a,t.toMap());e.data=u.data,e.code=u.code,e.status=u.status,e.message=u.message,s.value=!1}async function P(a,t){r=0,s.value=!0;const l=await n.getUserSearchList(new i,o.value,r,a,t.toMap());f(l),s.value=!1}async function T(a,t){r=0,s.value=!0;const l=await n.getUserList(new i,a,o.value,r,t.toMap());f(l),s.value=!1}async function H(a,t){s.value=!0;const l=0,c=e.data.length,u=await n.getUserList(new i,a,c,l,t.toMap());e.data=u.data,e.code=u.code,e.status=u.status,e.message=u.message,s.value=!1}return{isNoMoreRecord:d,userList:e,loading:s,limit:o,offset:r,id:g,paramHolder:p,userparamHolder:w,loadUserList:h,loadUserSearchList:U,refleshUserSearchList:M,resetUserSearchList:P,resetUserList:T,resetTopRatedSellerList:S,loadTopRatedSellerList:y,refleshUserFollowerFollowingList:H,refleshTopRatedSellerList:R,hasData:L}}));export{C as u};
