import x from"./PsLabel.dd7b9156.js";import w from"./PsRouteLink.ab373f40.js";import k from"./PsButton.81d0ce1f.js";import A from"./PsIcon.c404b5b9.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{d as C,o as n,c,a as o,b as r,w as d,q as a,t,H as b,F as $,s as I,m as P,r as i,C as S}from"./app.72d9fe45.js";const D=C({name:"OrderItem",components:{PsLabel:x,PsRouteLink:w,PsButton:k,PsIcon:A},props:{order:Object},setup(e,{emit:l}){function m(f){window.location.href="api/v1.0/vendor/download-pdf?login_user_id=1&order_id="+f}return{downloadClick:m}}}),B={class:"w-full rounded-lg border p-6 dark:bg-feAchromatic-800 dark:border-feAchromatic-700"},N={class:"flex justify-between items-start pb-4 border-b-2 dark:border-feAchromatic-700"},O={class:""},j={class:"flex mt-3"},q={class:"sm:flex gap-4 hidden"},z={class:"mt-2 grid sm:grid-cols-6 md:grid-cols-10 grid-cols-3 gap-2"},L={alt:"Placeholder",class:"overflow-hidden object-cover w-full h-24 rounded",width:"640px",height:"360px"},U={class:"flex gap-4 sm:hidden w-full mt-4"},V={class:"w-10 h-10 p-2 cursor-pointer border rounded dark:border-feAchromatic-500 hover:bg-fePrimary-500 hover:text-feAchromatic-50"};function F(e,l,m,f,E,H){const s=i("ps-label"),p=i("ps-icon"),h=i("ps-button"),u=i("ps-route-link"),v=S("lazy");return n(),c("div",B,[o("div",N,[o("div",O,[r(s,{textColor:"text-lg font-semibold text-feAchromatic-800 dark:text-feAchromatic-200"},{default:d(()=>[a(t(e.$t("Order ID:"))+" "+t(e.order.orderCode)+" ",1),o("span",{class:"ms-3 border px-4 py-1 rounded",style:b("color: "+e.order.orderStatusColor+";border:1px solid "+e.order.orderStatusColor)},t(e.order.orderStatus),5)]),_:1}),o("div",j,[r(s,{textColor:"text-sm font-normal text-feAchromatic-800 dark:text-feAchromatic-200 pe-2"},{default:d(()=>[a(t(e.order.orderDate),1)]),_:1}),r(s,{textColor:"text-sm font-normal text-feAchromatic-800 dark:text-feAchromatic-200 px-2 border-x-2"},{default:d(()=>[a(t(e.order.itemCount)+" Items",1)]),_:1}),r(s,{textColor:"text-sm font-normal text-feAchromatic-800 dark:text-feAchromatic-200 ps-2"},{default:d(()=>[a(t(e.order.total)+" ",1),o("span",{class:"text-xs font-medium p-1 rounded",style:b("color:"+e.order.paymentStatusColor+";background-color:"+e.order.paymentStatusColor+"20")},t(e.order.paymentStatus),5)]),_:1})])]),o("div",q,[o("div",{class:"w-10 h-10 p-2 cursor-pointer border rounded dark:border-feAchromatic-500 hover:bg-fePrimary-500 hover:text-feAchromatic-50",onClick:l[0]||(l[0]=_=>e.downloadClick(e.order.id))},[r(p,{textColor:"dark:text-feAchromatic-200",name:"fileDownload",w:"24",h:"24",viewBox:"0 0 24 26"})]),r(u,{to:{name:"fe_order_history_detail",query:{orderId:e.order.id}}},{default:d(()=>[r(h,{colors:"hover:text-white",border:"rounded border dark:text-feAchromatic-200 dark:border-feAchromatic-500"},{default:d(()=>[a(t(e.$t("core_fe__view_order_details")),1)]),_:1})]),_:1},8,["to"])])]),r(s,{textColor:"text-xl font-semibold text-feAchromatic-800 dark:text-feAchromatic-200 pt-4"},{default:d(()=>[a(t(e.order.vendorName),1)]),_:1}),o("div",z,[(n(!0),c($,null,I(e.order.itemInfo,(_,g)=>(n(),c("div",{class:"col-span-1",key:g},[P(o("img",L,null,512),[[v,{src:e.$page.props.thumb1xUrl+"/"+_.defaultPhoto.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]))),128))]),o("div",U,[o("div",V,[r(p,{textColor:"dark:text-feAchromatic-200",name:"fileDownload",w:"24",h:"24",viewBox:"0 0 24 26"})]),r(u,{to:{name:"fe_order_history_detail",query:{orderId:e.order.id}},class:"w-full"},{default:d(()=>[r(h,{colors:"hover:text-white w-full",border:"rounded border dark:text-feAchromatic-200 dark:border-feAchromatic-500"},{default:d(()=>[a(t(e.$t("core_fe__view_order_details")),1)]),_:1})]),_:1},8,["to"])])])}var Q=y(D,[["render",F]]);export{Q as default};
