import{d as s,Z as n,z as e,o as l,c as u,b as o,w as c,F as d,r}from"./app.72d9fe45.js";import{P as _}from"./PsLayout.847d3bb7.js";import{P as b}from"./PsBreadcrumb2.c233a04a.js";import{P as f}from"./PsDataTable.9a60ba74.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsLabel.9b145d71.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsButton.75e226c0.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./ps_constants.ea9d0b33.js";const P=s({name:"Index",components:{Head:n,PsBreadcrumb2:b,PsDataTable:f},layout:_,props:["favourites"],setup(){return{columns:[{label:"Product Name",field:"item_id",relation:"item",type:"String",relationField:"title"},{label:e("user_name_label"),field:"user_id",relation:"user",type:"String",relationField:"name"}]}},computed:{breadcrumb(){return[{label:e("core__be_dashboard_label"),url:route("admin.index")},{label:e("favourite_module"),color:"text-primary-500"}]}}});function h(t,v,g,x,$,w){const m=r("Head"),a=r("ps-breadcrumb-2"),i=r("ps-data-table"),p=r("ps-layout");return l(),u(d,null,[o(m,{title:t.$t("fvourite_module")},null,8,["title"]),o(p,null,{default:c(()=>[o(a,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(i,{rows:this.favourites,columns:t.columns,searchRightHide:!0},null,8,["rows","columns"])]),_:1})],64)}var mt=y(P,[["render",h]]);export{mt as default};
