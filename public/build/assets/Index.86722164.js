import{P as z}from"./PsLayout.847d3bb7.js";import{d as B,Z as D,i as s,z as l,O as T,o as u,c as C,b as t,w as n,a as g,f as S,q as h,t as f,g as v,F as V,s as R,n as I,r as a}from"./app.72d9fe45.js";import{P as E}from"./PsInput.afea411a.js";import{P as L}from"./PsLabel.9b145d71.js";import{P as q}from"./PsButton.75e226c0.js";import{P as G}from"./PsTextarea.b6da5576.js";import{P as U}from"./PsLabelHeader4.cfe9ad61.js";import{P as Z}from"./PsIcon.8d64a589.js";import{P as J}from"./PsAlert.d611cdbe.js";import{N as K}from"./NewPsDataTable.46bd1eb8.js";import{d as Q}from"./PsDangerDialog.4a7cc4cb.js";import{P as W}from"./PsToggle.8b891384.js";import{P as X}from"./PsBreadcrumb2.c233a04a.js";import{P as Y}from"./PsTable2.07283736.js";import{P as x}from"./PsBannerIcon.ba5a991b.js";import{P as ee}from"./PsDropdown.dd6513b3.js";import{P as oe}from"./PsDropdownSelect.2cfdee10.js";import{_ as re}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./Icons.c01eddd9.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./toggle.11911129.js";import"./PsIcon1.56bc2bff.js";const te=B({name:"Index",components:{Head:D,PsInput:E,PsLabel:L,PsButton:q,PsTextarea:G,PsLabelHeader4:U,PsIcon:Z,PsAlert:J,NewPsDataTable:K,PsDangerDialog:Q,PsToggle:W,PsBreadcrumb2:X,PsTable2:Y,PsBannerIcon:x,PsDropdownSelect:oe,PsDropdown:ee},layout:z,props:{status:Object,language:Object,sub_menu_groups:Object,checkPermission:Object,showSubMenuGroupCols:Object,menu_groups:Object,selectedMenu:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const i=["sub_menu_name"],H="Search Sub Menu",P=s(),A=s(),N=s();let w=e.search?s(e.search):s(""),y=e.sort_field?s(e.sort_field):s(""),k=e.sort_order?s(e.sort_order):s("desc"),m=s(!1),p=e.selectedMenu?s(e.selectedMenu):s("");function $(r){P.value.openModal(l("core__be_delete_sub_menugroup"),l("core__be_delete_sub_menugroup_info"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{this.$inertia.delete(route("vendor_sub_menu_group.destroy",r),{onSuccess:()=>{m.value=!0,setTimeout(()=>{m.value=!1},3e3)},onError:()=>{m.value=!0,setTimeout(()=>{m.value=!1},3e3)}})},()=>{})}function c(r){this.$inertia.get(route("vendor_sub_menu_group.edit",r))}function b(r,_){_&&this.$inertia.put(route("vendor_sub_menu_group.statusChange",r))}function F(){this.$inertia.get(route("vendor_sub_menu_group.create"))}function O(r){y.value=r.field,k.value=r.sort_order,d()}function j(r){w.value=r,d(1)}function M(r){d(1,r)}function o(r){p.value=r,d(1)}function d(r=null,_=null){T.get(route("vendor_sub_menu_group.index"),{sort_field:y.value,sort_order:k.value,page:r!=null?r:e.sub_menu_groups.meta.current_page,row:_!=null?_:e.sub_menu_groups.meta.per_page,search:w.value,menu_filter:p.value},{preserveScroll:!0,preserveState:!0})}return{handleEdit:c,ps_danger_dialog:P,confirmClicked:$,handleEdit:c,globalSearchFields:i,globalSearchPlaceholder:H,columns:N,handlePublish:b,handleCreate:F,colFilterOptions:A,handleSorting:O,handleSearching:j,handleRow:M,visible:m,handleMenuFilter:o,selected_menu:p}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("vendor_sub_menu_group_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){T.post(route("vendor_sub_menu_group.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.sub_menu_groups.per_page,search:this.search.value,current_page:this.sub_menu_groups.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),ne={class:""},se={class:"rounded-md shadow-xs w-56"},ae={class:"pt-2 z-30"},le=["onClick"],ie={key:0},de={class:"flex"};function ue(e,i,H,P,A,N){const w=a("Head"),y=a("ps-breadcrumb-2"),k=a("ps-banner-icon"),m=a("ps-dropdown-select"),p=a("ps-label"),$=a("ps-dropdown"),c=a("ps-icon"),b=a("ps-button"),F=a("ps-toggle"),O=a("ps-table2"),j=a("ps-danger-dialog"),M=a("ps-layout");return u(),C(V,null,[t(w,{title:e.$t("vendor_sub_menu_group_module")},null,8,["title"]),t(M,null,{default:n(()=>[g("div",ne,[t(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(u(),S(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:n(()=>[h(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):v("",!0),t(O,{row:e.row,search:e.search,object:e.sub_menu_groups,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{searchRight:n(()=>[t($,{onOnClick:e.dropdownClick,align:"",class:"me-2 w-56 h-10"},{select:n(()=>[t(m,{placeholder:e.$t("core__be_menu_group_name"),border:e.selected_menu!==""&&e.selected_menu!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_menu==""||e.selected_menu=="all"?"":e.menu_groups.filter(o=>o.id==e.selected_menu)[0].group_name},null,8,["placeholder","border","selectedValue"])]),list:n(()=>[g("div",se,[g("div",ae,[g("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[0]||(i[0]=o=>e.handleMenuFilter("all"))},[t(p,{class:"text-gray-200 ms-2"},{default:n(()=>[h(f(e.$t("core__be_select_all")),1)]),_:1})]),(u(!0),C(V,null,R(e.menu_groups,o=>(u(),C("div",{key:o.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d=>e.handleMenuFilter(o.id)},[t(p,{class:I(["ms-2",o.id==e.selected_menu?" font-bold":""])},{default:n(()=>[h(f(o.group_name),1)]),_:2},1032,["class"])],8,le))),128))])])]),_:1},8,["onOnClick"])]),button:n(()=>[e.can.createCoreSubMenu?(u(),S(b,{key:0,onClick:i[1]||(i[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[t(c,{name:"plus",class:"me-1 font-semibold"}),h(f(e.$t("add_vendor_sub_menu_group")),1)]),_:1})):v("",!0)]),responsive_button:n(()=>[e.can.createCoreSubMenu?(u(),S(b,{key:0,onClick:i[2]||(i[2]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[t(c,{name:"plus",class:"me-1 font-semibold"}),h(" "+f(e.$t("add_vendor_sub_menu_group")),1)]),_:1})):v("",!0)]),tableActionRow:n(o=>[o.field=="action"?(u(),C("span",ie,[g("div",de,[t(b,{disabled:!o.row.authorizations.update,onClick:d=>e.handleEdit(o.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:n(()=>[t(c,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),t(b,{disabled:!o.row.authorizations.delete,onClick:d=>e.confirmClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:n(()=>[t(c,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])])):v("",!0)]),tableRow:n(o=>[o.field=="is_show_on_menu"?(u(),S(F,{key:0,disabled:!o.row.authorizations.update,selectedValue:o.row.is_show_on_menu==1,onClick:d=>e.handlePublish(o.row.id,o.row.authorizations.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):v("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),t(j,{ref:"ps_danger_dialog"},null,512)])]),_:1})],64)}var Je=re(te,[["render",ue]]);export{Je as default};
