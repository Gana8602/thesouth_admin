import{P as b}from"./PsLayout.847d3bb7.js";import{d as f,Z as _,z as s,o as a,c as g,b as o,w as r,f as P,q as n,t as i,g as h,a as w,F as y,r as t}from"./app.72d9fe45.js";import{P as k}from"./PsButton.75e226c0.js";import{b as v,d as D}from"./PsDangerDialog.4a7cc4cb.js";import{P as j}from"./PsBannerIcon.ba5a991b.js";import{P as B}from"./PsBreadcrumb2.c233a04a.js";import{P as C}from"./PsIcon.8d64a589.js";import{P as O}from"./PsDropdown.dd6513b3.js";import{P as S}from"./PsDropdownSelect.2cfdee10.js";import{D as V}from"./PsTableSearch.2a5042b8.js";import{P as $}from"./PsIconButton.92987408.js";import{P as F}from"./PsLabel.9b145d71.js";import{P as I}from"./PsLink1.1f7b38a0.js";import{P as N}from"./PsToggle.8b891384.js";import{P as x}from"./PsTable2.07283736.js";import{P as U}from"./PsRating.ee14a9a4.js";import{D as H}from"./DatePicker.af815a5d.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";import"./moment.9709ab41.js";import"./main.09d396a4.js";import"./index.bb4ebfff.js";const z=f({name:"Index",components:{Head:_,PsButton:k,PsTextButton:v,PsBannerIcon:j,PsBreadcrumb2:B,PsDangerDialog:D,PsIcon:C,PsDropdown:O,PsDropdownSelect:S,Dropdown:V,PsIconButton:$,PsLabel:F,PsLink1:I,PsToggle:N,PsTable2:x,PsRating:U,DatePicker:H},layout:b,props:{can:Object,status:Object,users:Object,roles:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedRole:{type:String,default:""},authUser:Object,usrIsVerifyBlueMark:String,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},methods:{handleVersionUpdate(){this.$inertia.post(route("versionUpdate.handleVersionUpdate"))}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("version_update"),color:"text-primary-500"}]}},setup(e){return{}}}),A={class:""};function L(e,R,q,E,M,Z){const m=t("Head"),p=t("ps-breadcrumb-2"),l=t("ps-banner-icon"),d=t("ps-label"),c=t("ps-button"),u=t("ps-layout");return a(),g(y,null,[o(m,{title:e.$t("user_module")},null,8,["title"]),o(u,null,{default:r(()=>[o(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(a(),P(l,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[n(i(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),w("div",A,[o(c,{onClick:e.handleVersionUpdate,class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[o(d,{textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[n(i(e.$t("version_update")),1)]),_:1})]),_:1},8,["onClick"])])]),_:1})],64)}var $e=T(z,[["render",L]]);export{$e as default};
