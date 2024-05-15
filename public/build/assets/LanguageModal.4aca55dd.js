import{P as w}from"./PsModal.9ecdc9db.js";import{P as C}from"./PsLabel.9b145d71.js";import{P as $}from"./PsButton.75e226c0.js";import{P}from"./PsToggle.8b891384.js";import{P as M}from"./PsIcon.8d64a589.js";import{d as S,i as k,u as N,o as B,f as L,w as o,a as t,b as a,q as s,t as n,E as T,r as f}from"./app.72d9fe45.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./toggle.11911129.js";import"./Icons.c01eddd9.js";const E=S({name:"LanguageModal",components:{PsModal:w,PsLabel:C,PsButton:$,PsToggle:P,PsIcon:M},setup(){const e=k(),d=k(""),g=N({data:{}});let p;function h(m,b){d.value=m;let y=T({key:d.value,symbol:localStorage.activeLanguage});p=b,axios.post(route("language.languageTable",y)).then(r=>{g.data=r.data,e.value.toggle(!0)}).catch(r=>{})}function x(){e.value.toggle(!1),p(d.value)}function l(){e.value.toggle(!1)}return{psmodal:e,openModal:h,closeModal:l,key:d,table:g,handleEdit:x}}}),V={class:"w-full flex flex-row justify-between"},A={class:"table-auto w-full mt-6"},D={class:"bg-primary-500 text-white dark:text-black text-2xl justify-content"},q={class:"bg-white divide-y divide-gray-200 dark:bg-secondaryDark-black dark:divide-white border-b border-t"},z={class:"hover:bg-gray-100 dark:hover:bg-gray-700"},H={class:"py-2 ps-4"},I=s(n(1)),O={class:"py-2 ps-4"},W={class:"py-2 ps-4"},F={class:"py-2 ps-4"},G={class:"py-2 ps-4"},J={class:"py-2 ps-4"},K=t("div",{class:"flex flex-row justify-end"},null,-1);function Q(e,d,g,p,h,x){const l=f("ps-label"),m=f("ps-icon"),b=f("ps-button"),y=f("ps-modal");return B(),L(y,{ref:"psmodal",maxWidth:"960px",bodyHeight:"max-h-full",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:o(()=>[t("div",V,[a(l,{class:"text-lg font-semibold"},{default:o(()=>[s(n(e.$t("core__be_language_string_label")),1)]),_:1}),a(m,{onClick:d[0]||(d[0]=r=>e.closeModal()),name:"cross",class:"me-1 font-semibold",theme:"text-secondary-400"})])]),body:o(()=>[t("table",A,[t("thead",D,[t("tr",null,[t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_no_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_language_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_key_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_value_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_select_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_action_label")),1)]),_:1})])])]),t("tbody",q,[t("tr",z,[t("td",H,[a(l,null,{default:o(()=>[I]),_:1})]),t("td",O,[a(l,null,{default:o(()=>{var r,i,c,u,_,v;return[s(n((c=(i=(r=e.table.data)==null?void 0:r.languageString)==null?void 0:i.language)!=null&&c.name?(v=(_=(u=e.table.data)==null?void 0:u.languageString)==null?void 0:_.language)==null?void 0:v.name:"N.A"),1)]}),_:1})]),t("td",W,[a(l,null,{default:o(()=>[s(n(e.key),1)]),_:1})]),t("td",F,[a(l,null,{default:o(()=>{var r,i,c,u,_;return[s(n((c=(i=(r=e.table)==null?void 0:r.data)==null?void 0:i.languageString)!=null&&c.value?(_=(u=e.table.data)==null?void 0:u.languageString)==null?void 0:_.value:"N.A"),1)]}),_:1})]),t("td",G,[a(l,{textColor:"text-secondary-300"},{default:o(()=>[s(n(e.$t("core__be_btn_selected")),1)]),_:1})]),t("td",J,[a(b,{onClick:d[1]||(d[1]=r=>e.handleEdit()),class:"me-4",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[a(m,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:1})])])])])]),footer:o(()=>[K]),_:1},512)}var se=j(E,[["render",Q]]);export{se as default};
