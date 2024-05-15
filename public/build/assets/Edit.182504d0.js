import{d as h,Z as w,i as G,E as P,G as C,z as b,o as k,c as B,b as n,w as d,f as U,q as r,t as o,g as N,a as t,h as D,F as E,r as i}from"./app.72d9fe45.js";import{P as H}from"./PsLayout.847d3bb7.js";import{P as L}from"./PsBreadcrumb2.c233a04a.js";import{P as T}from"./PsInput.afea411a.js";import{P as V}from"./PsLabel.9b145d71.js";import{P as S}from"./PsButton.75e226c0.js";import{P as z}from"./PsTextarea.b6da5576.js";import{P as F}from"./PsLabelHeader4.cfe9ad61.js";import{P as I}from"./PsBannerIcon.ba5a991b.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsIcon1.56bc2bff.js";const q=h({name:"Edit",components:{Head:w,PsInput:T,PsLabel:V,PsButton:S,PsTextarea:z,PsLabelHeader4:F,PsBreadcrumb2:L,PsBannerIcon:I},layout:H,props:["errors","backend_setting","status","can"],setup(e){const l=G(!1);let p=P({dyn_link_key:e.backend_setting.dyn_link_key,dyn_link_domain:e.backend_setting.dyn_link_domain,dyn_link_url:e.backend_setting.dyn_link_url,dyn_link_deep_url:e.backend_setting.dyn_link_deep_url,dyn_link_package_name:e.backend_setting.dyn_link_package_name,ios_boundle_id:e.backend_setting.ios_boundle_id,ios_appstore_id:e.backend_setting.ios_appstore_id});function u(){this.$inertia.get(route("deeplink_generator.index"))}return C(()=>e.status,()=>{l.value=!0,setTimeout(()=>{l.value=!1},3e3)}),{form:p,handleCancel:u,visible:l}},computed:{breadcrumb(){return[{label:b("core__be_dashboard_label"),url:route("admin.index")},{label:b("deeplink_generator_module"),color:"text-primary-500"}]}},methods:{handleDeeplink(){this.$inertia.put(route("deeplink_generator.update"))}}}),x={class:"rounded-xl"},M={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Z={class:"px-4 pt-6 dark:bg-backgroundDark"},A={class:"grid w-full sm:w-1/2 gap-6"},J=["href"],K={class:"px-4 py-3 flex flex-row justify-end mb-2.5 mt-4"};function O(e,l,p,u,Q,R){const y=i("Head"),g=i("ps-breadcrumb-2"),f=i("ps-banner-icon"),c=i("ps-label-header-6"),s=i("ps-label"),_=i("ps-input"),m=i("ps-button"),v=i("ps-card"),$=i("ps-layout");return k(),B(E,null,[n(y,{title:e.$t("deeplink_generator_module")},null,8,["title"]),n($,null,{default:d(()=>[n(g,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(k(),U(f,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:d(()=>[r(o(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):N("",!0),n(v,{class:"w-full h-auto"},{default:d(()=>[t("div",x,[t("div",M,[n(c,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:d(()=>[r(o(e.$t("deeplink_generator_module")),1)]),_:1})]),t("div",Z,[t("form",{onSubmit:l[8]||(l[8]=D(a=>e.handleDeeplink(),["prevent"]))},[t("div",A,[t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_key")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_key"),value:e.form.dyn_link_key,"onUpdate:value":l[0]||(l[0]=a=>e.form.dyn_link_key=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_domain")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_domain"),value:e.form.dyn_link_domain,"onUpdate:value":l[1]||(l[1]=a=>e.form.dyn_link_domain=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_url")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_url"),value:e.form.dyn_link_url,"onUpdate:value":l[2]||(l[2]=a=>e.form.dyn_link_url=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_deep_link_url")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_deep_link_url"),value:e.form.dyn_link_deep_url,"onUpdate:value":l[3]||(l[3]=a=>e.form.dyn_link_deep_url=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_pkg_name")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_pkg_name"),value:e.form.dyn_link_package_name,"onUpdate:value":l[4]||(l[4]=a=>e.form.dyn_link_package_name=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_ios_pkg_name")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_ios_pkg_name"),value:e.form.ios_boundle_id,"onUpdate:value":l[5]||(l[5]=a=>e.form.ios_boundle_id=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),t("div",null,[n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_dyn_link_ios_appstore_id")),1)]),_:1}),n(_,{type:"text",placeholder:e.$t("deeplinkGenerator__be_dyn_link_ios_appstore_id"),value:e.form.ios_appstore_id,"onUpdate:value":l[6]||(l[6]=a=>e.form.ios_appstore_id=a),class:"rounded flex-1 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-800",disabled:""},null,8,["placeholder","value"])]),n(s,null,{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_note"))+" ",1),t("a",{href:e.route("backend_setting.index"),target:"_blank",class:"text-blue-600"},o(e.$t("deeplinkGenerator__be_goto_be_setting")),9,J)]),_:1}),t("div",K,[n(m,{padding:"py-1 px-2",onClick:l[7]||(l[7]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:d(()=>[r(o(e.$t("core__be_btn_cancel")),1)]),_:1}),n(m,{disabled:!e.can.updateGenerateDeepLink,padding:"p-1 px-2"},{default:d(()=>[r(o(e.$t("deeplinkGenerator__be_generate_deeplink")),1)]),_:1},8,["disabled"])])])],32)])])]),_:1})]),_:1})],64)}var Ue=j(q,[["render",O]]);export{Ue as default};
