import{P as g}from"./PsLayout.847d3bb7.js";import{d as f,Z as y,p as b,o as n,c as r,b as s,w as i,a as t,F as c,s as w,t as l,q as d,r as a}from"./app.72d9fe45.js";import{P as v}from"./PsInput.afea411a.js";import{P as k}from"./PsLabel.9b145d71.js";import{P}from"./PsButton.75e226c0.js";import{P as C}from"./PsTextarea.b6da5576.js";import{P as $}from"./PsLabelHeader4.cfe9ad61.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsLabelCaption.0e118b2b.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./PsLoadingCircleDialog.70b57269.js";const T=f({name:"Index",components:{Head:y,Link:b,PsInput:v,PsLabel:k,PsButton:P,PsTextarea:C,PsLabelHeader4:$},layout:g,props:["transaction_statuses","status"],methods:{handleDelete(e){this.$inertia.delete(route("transaction_status.destroy",e))},handleEdit(e){this.$inertia.get(route("transaction_status.edit",e))}}}),B={class:"py-12"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},E={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},F={class:"p-6"},H={class:"flex justify-between mb-6"},N=t("h4",null,"Transaction Status List",-1),I=d("Create New Transaction Status"),S=t("hr",null,null,-1),V={class:"flex"},M={class:"overflow-x-auto sm:-mx-6 lg:-mx-8 flex-1"},j={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},q={class:"overflow-hidden"},Z={class:"w-full"},z=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," # "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Title "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Color "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Control ")])],-1),A={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},G={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},K={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},O=d(" Delete "),Q=d(" Edit ");function R(e,U,W,X,Y,tt){const m=a("Head"),h=a("Link"),u=a("FlashMessage"),p=a("ps-button"),_=a("ps-layout");return n(),r(c,null,[s(m,{title:e.$t("transaction_status_module")},null,8,["title"]),s(_,null,{default:i(()=>[t("div",B,[t("div",D,[t("div",E,[t("div",F,[t("div",H,[N,s(h,{href:e.route("transaction_status.create"),type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},{default:i(()=>[I]),_:1},8,["href"])]),S,s(u,{status:e.status},null,8,["status"]),t("div",V,[t("div",M,[t("div",j,[t("div",q,[t("table",Z,[z,t("tbody",null,[(n(!0),r(c,null,w(e.transaction_statuses,o=>(n(),r("tr",{key:o.id,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},[t("td",A,l(o.id),1),t("td",G,l(o.title),1),t("td",J,l(o.color_value),1),t("td",K,[s(p,{onClick:x=>e.handleDelete(o.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-red-600"},{default:i(()=>[O]),_:2},1032,["onClick"]),s(p,{onClick:x=>e.handleEdit(o.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-yellow-500"},{default:i(()=>[Q]),_:2},1032,["onClick"])])]))),128))])])])])])])])])])])]),_:1})],64)}var Et=L(T,[["render",R]]);export{Et as default};
