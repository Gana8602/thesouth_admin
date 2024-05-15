import{d as O,Z as A,i as n,z as l,A as j,O as b,o as s,c as P,b as r,w as t,f as m,q as p,t as f,g as h,F as H,r as d}from"./app.72d9fe45.js";import{P as L}from"./PsLayout.847d3bb7.js";import{P as B}from"./PsLabel.9b145d71.js";import{P as D}from"./PsButton.75e226c0.js";import{P as R}from"./PsTable2.07283736.js";import{P as T}from"./PsAlert.d611cdbe.js";import{P as z}from"./PsBreadcrumb2.c233a04a.js";import{d as I}from"./PsDangerDialog.4a7cc4cb.js";import{P as N}from"./PsToggle.8b891384.js";import{P as E}from"./PsIcon.8d64a589.js";import{P as V}from"./PsBannerIcon.ba5a991b.js";import{P as q}from"./PsIconButton.92987408.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";const M=O({name:"Index",components:{Head:A,PsLabel:B,PsButton:D,PsTable2:R,PsAlert:T,PsBreadcrumb2:z,PsDangerDialog:I,PsToggle:N,PsIcon:E,PsBannerIcon:V,PsIconButton:q},layout:L,props:{status:Object,vendor_languages:Object,checkPermission:Object,showLanguageCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const u=n();let c=n(!1),v=e.search?n(e.search):n(""),w=e.sort_field?n(e.sort_field):n(""),y=e.sort_order?n(e.sort_order):n("desc");const k=n(),C=n();function S(o){u.value.openModal(l("core__be_delete_vendor_language"),l("core__be_delete_vendor_language_info"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{b.delete(route("vendor_language.destroy",o),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}function g(o){w.value=o.field,y.value=o.sort_order,_()}function a(o){v.value=o,_(1)}function $(o){_(1,o)}function _(o=null,i=null){b.get(route("vendor_language.index"),{sort_field:w.value,sort_order:y.value,page:o!=null?o:e.vendor_languages.meta.current_page,row:i!=null?i:e.vendor_languages.meta.per_page,search:v.value},{preserveScroll:!0,preserveState:!0})}function F(){b.post(route("vendor_language.generateall"),{onSuccess:()=>{window.location.reload()}})}return{handleGenetate:F,columns:C,ps_danger_dialog:u,confirmDeleteClicked:S,colFilterOptions:k,handleSorting:g,handleSearching:a,handleRow:$,visible:c}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("vendor_language_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("vendor_language.create"))},handleEdit(e){this.$inertia.get(route("vendor_language.edit",e))},handlePublish(e){this.$inertia.put(route("vendor_language.statusChange",e.id),"",{onSuccess:()=>{j(e.symbol),setTimeout(()=>{window.location.reload()},1e3)}})},handleLanguageString(e){this.$inertia.get(route("vendor_language_string.index",e))},FilterOptionshandle(e){b.post(route("vendor_language.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.vendor_languages.per_page,search:this.search.value,current_page:this.vendor_languages.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key).toLowerCase(),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),U={key:0,class:"flex flex-row"},Z={key:0,class:""};function J(e,u,c,v,w,y){const k=d("Head"),C=d("ps-breadcrumb-2"),S=d("ps-banner-icon"),g=d("ps-icon"),a=d("ps-button"),$=d("ps-danger-dialog"),_=d("ps-table2"),F=d("ps-layout");return s(),P(H,null,[r(k,{title:e.$t("vendor_language_module")},null,8,["title"]),r(F,null,{default:t(()=>[r(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(s(),m(S,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:t(()=>[p(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),r(_,{row:e.row,search:e.search,object:e.vendor_languages,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:t(()=>[e.can.createLanguage?(s(),m(a,{key:0,onClick:u[0]||(u[0]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:t(()=>[r(g,{name:"plus",class:"me-1 font-semibold"}),p(" "+f(e.$t("core__be_add_vendor_language")),1)]),_:1})):h("",!0)]),responsive_button:t(()=>[e.can.createLanguage?(s(),m(a,{key:0,onClick:u[1]||(u[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:t(()=>[r(g,{name:"plus",class:"me-1 font-semibold"}),p(" "+f(e.$t("core__be_add_vendor_language")),1)]),_:1})):h("",!0)]),tableActionRow:t(o=>[o.field=="action"?(s(),P("div",U,[r(a,{disabled:!o.row.authorizations.update,onClick:i=>e.handleEdit(o.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:t(()=>[r(g,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(a,{disabled:!o.row.authorizations.delete,onClick:i=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:t(()=>[r(g,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r($,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:t(o=>[o.field=="status"?(s(),P("div",Z,[o.row.status==1?(s(),m(a,{key:0,disabled:!o.row.authorizations.update,onClick:i=>e.handlePublish(o.row),class:"me-4",colors:"bg-green-500 text-white",rounded:"rounded-md",padding:"px-3 py-2",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:t(()=>[p(f(e.$t("btn_active")),1)]),_:2},1032,["disabled","onClick"])):(s(),m(a,{key:1,disabled:!o.row.authorizations.update,onClick:i=>e.handlePublish(o.row),colors:"bg-red-500 text-white",padding:"px-3 py-2",rounded:"rounded-md",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:t(()=>[p(f(e.$t("btn_inactive")),1)]),_:2},1032,["disabled","onClick"]))])):h("",!0),o.field=="lang_string"?(s(),m(a,{key:1,onClick:i=>e.handleLanguageString(o.row.id),class:"text-white bg-primary-700 text-lg",padding:"p-1",rounded:"rounded"},{default:t(()=>[r(g,{name:"language",w:"16",h:"16"})]),_:2},1032,["onClick"])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Oe=G(M,[["render",J]]);export{Oe as default};
