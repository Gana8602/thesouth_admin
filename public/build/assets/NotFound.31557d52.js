import{d as c,Z as l,o as p,c as i,b as t,a as m,w as n,q as a,t as s,F as u,O as f,r as e}from"./app.72d9fe45.js";import b from"./PsLabel.dd7b9156.js";import g from"./PsButton.81d0ce1f.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const $=c({name:"NotFoundView",components:{PsLabel:b,PsButton:g,Head:l},setup(){function o(){f.get(route("dashboard"))}return{goToDashboard:o}}}),x={class:"mt-36 flex flex-col items-center"};function C(o,N,k,B,F,V){const r=e("Head"),_=e("ps-label"),d=e("ps-button");return p(),i(u,null,[t(r,{title:o.$t("not_found__page_does_not_exit")},null,8,["title"]),m("div",x,[t(_,{class:""},{default:n(()=>[a(s(o.$t("not_found__page_does_not_exit")),1)]),_:1}),t(d,{onClick:o.goToDashboard,class:"mt-12 mb-20"},{default:n(()=>[a(s(o.$t("not_found__go_to_dashboard")),1)]),_:1},8,["onClick"])])],64)}var T=h($,[["render",C]]);export{T as default};
