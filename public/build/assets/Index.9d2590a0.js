import{d as F,p as v,Z as w,i as r,u as O,z as o,o as g,c as k,b as i,w as y,f as C,q as H,t as j,g as A,F as B,O as T,r as l}from"./app.72d9fe45.js";import{P as $}from"./PsLayout.847d3bb7.js";import{P as I}from"./PsLabel.9b145d71.js";import{P as N}from"./PsButton.75e226c0.js";import{P as K}from"./PsTable2.07283736.js";import{P as R}from"./PsAlert.d611cdbe.js";import{P as D}from"./PsBreadcrumb2.c233a04a.js";import{d as L}from"./PsDangerDialog.4a7cc4cb.js";import{P as V}from"./PsToggle.8b891384.js";import{P as q}from"./PsIcon.8d64a589.js";import{P as z}from"./PsBannerIcon.ba5a991b.js";import{P as E}from"./PsIconButton.92987408.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";const Z=F({name:"Index",components:{Link:v,Head:w,PsLabel:I,PsButton:N,PsTable2:K,PsAlert:R,PsBreadcrumb2:D,PsDangerDialog:L,PsToggle:V,PsIcon:q,PsBannerIcon:z,PsIconButton:E},layout:$,props:{can:Object,status:Object,coreKeyTypes:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let c=r(!1);const h=r(!1),_=r(!1);let m=e.search?r(e.search):r(""),d=e.sort_field?r(e.sort_field):r(""),n=e.sort_order?r(e.sort_order):r("desc");function p(t){d.value=t.field,n.value=t.sort_order,a()}function u(){selected_cat.value="all",a()}function b(t){m.value=t,a(1)}function f(t){a(1,t)}function a(t=null,s=null){T.get(route("core_key_type.index"),{sort_field:d.value,sort_order:n.value,page:t!=null?t:e.coreKeyTypes.meta.current_page,row:s!=null?s:e.coreKeyTypes.meta.per_page,search:m.value},{preserveScroll:!0,preserveState:!0})}const P=O([{label:o("code"),key:"code",hidden:!1},{label:o("name"),key:"name",hidden:!1},{label:o("description"),key:"description",hidden:!1}]),S=[{label:o("code_label"),field:"code",type:"String",action:"Action"},{label:o("name_label"),field:"name",type:"String",action:"Action"},{label:o("description_label"),field:"description",type:"String",action:"Action"}];return{visible:c,columns:S,colFilterOptions:P,showFilter:h,clearFilter:_,visible:c,handleSorting:p,handleSearchingSorting:a,handleClearFilter:u,handleRow:f,handleSearching:b}},computed:{breadcrumb(){return[{label:o("core__be_dashboard_label"),url:route("admin.index")},{label:o("core_key_type_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("core_key_type.create"))}}});function G(e,c,h,_,m,d){const n=l("Head"),p=l("ps-breadcrumb-2"),u=l("ps-banner-icon"),b=l("ps-table2"),f=l("ps-layout");return g(),k(B,null,[i(n,{title:e.$t("core_key_type_module")},null,8,["title"]),i(f,null,{default:y(()=>[i(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(g(),C(u,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:y(()=>[H(j(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):A("",!0),i(b,{row:e.row,search:e.search,object:this.coreKeyTypes,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},null,8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Ce=U(Z,[["render",G]]);export{Ce as default};
