import{d as D,Z as T,i as h,E as U,z as I,o as t,c as s,b as a,w as m,a as _,q as p,t as i,h as V,F as E,s as L,g as c,f as g,r as u}from"./app.72d9fe45.js";import{P as j}from"./PsLayout.847d3bb7.js";import{P as q}from"./PsBreadcrumb2.c233a04a.js";import{u as M}from"./Validators.f69d3a03.js";import{P as Z}from"./PsInput.afea411a.js";import{P as A}from"./PsLabel.9b145d71.js";import{P as G}from"./PsButton.75e226c0.js";import{a as J}from"./PsDangerDialog.4a7cc4cb.js";import{P as O}from"./PsCard.bbe9c0c8.js";import{P as Q}from"./PsLoading.1f14f5af.js";import{P as R}from"./PsIcon.8d64a589.js";import{P as W}from"./PsLabelCaption.0e118b2b.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const Y=D({name:"Edit",components:{Head:T,PsBreadcrumb2:q,PsInput:Z,PsLabel:A,PsButton:G,PsLabelHeader6:J,PsCard:O,PsLoading:Q,PsIcon:R,PsLabelCaption:W},layout:j,props:["errors","currency","coreFieldFilterSettings"],setup(e){const o=h(!1),k=h(!1),$=h(),P=h(),C=h(),{isEmpty:B,minLength:S}=M(),w=(n,d)=>{e.errors[n]=d?S(n,d,3):B(n,d),n=="currency_short_form"&&($.value.isError=!!Boolean(e.errors.currency_short_form))},f=(n,d)=>{e.errors[n]=d?"":B(n,d),n=="currency_symbol"&&(P.value.isError=!!Boolean(e.errors.currency_symbol)),n=="name"&&(C.value.isError=!!Boolean(e.errors.name))};let y=U({currency_short_form:e.currency.currency_short_form,currency_symbol:e.currency.currency_symbol,name:e.currency.name,_method:"put"});function b(n){this.$inertia.post(route("available_currency.update",n),y,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,k.value=!0,setTimeout(()=>{k.value=!1},2e3)},onError:()=>{o.value=!1,$.value.isError=!!Boolean(e.errors.currency_short_form),P.value.isError=!!Boolean(e.errors.currency_symbol)}})}return{validateCurerncyShortFormInput:w,validateEmptyInput:f,handleSubmit:b,form:y,currency_symbol:P,currency_short_form:$,name:C,loading:o,success:k}},computed:{breadcrumb(){return[{label:I("core__be_dashboard_label"),url:route("admin.index")},{label:I("payment_currency_module"),url:route("available_currency.index")},{label:I("core__edit_payment_currency"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("available_currency.index"))}}}),N={class:"rounded-xl"},x={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},F={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"grid w-full sm:w-1/2 gap-6"},re={key:0,class:"text-red-800 font-medium ms-1"},te={key:0,class:"text-red-800 font-medium ms-1"},oe={key:0,class:"text-red-800 font-medium ms-1"},ne={class:"flex flex-row justify-end mb-2.5"},ae={key:2,class:"transition-all duration-300"},se={key:3,class:""};function le(e,o,k,$,P,C){const B=u("Head"),S=u("ps-breadcrumb-2"),w=u("ps-label-header-6"),f=u("ps-label"),y=u("ps-input"),b=u("ps-label-caption"),n=u("ps-button"),d=u("ps-loading"),K=u("ps-icon"),H=u("ps-card"),z=u("ps-layout");return t(),s(E,null,[a(B,{title:e.$t("core__edit_currency")},null,8,["title"]),a(z,null,{default:m(()=>[a(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(H,{class:"w-full h-auto"},{default:m(()=>[_("div",N,[_("div",x,[a(w,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:m(()=>[p(i(e.$t("core__currency_info")),1)]),_:1})]),_("div",F,[_("form",{onSubmit:o[4]||(o[4]=V(r=>e.handleSubmit(this.currency.id),["prevent"]))},[_("div",ee,[(t(!0),s(E,null,L(e.coreFieldFilterSettings.filter(r=>r.original_field_name==="currency_symbol"&&r.enable===1&&r.is_delete===0),(r,v)=>(t(),s("div",{key:v},[a(f,{class:"text-base"},{default:m(()=>[p(i(e.$t(r.label_name))+" ",1),r.mandatory==1?(t(),s("span",re,"*")):c("",!0)]),_:2},1024),a(y,{ref_for:!0,ref:"currency_symbol",type:"text",value:e.form.currency_symbol,"onUpdate:value":o[0]||(o[0]=l=>e.form.currency_symbol=l),placeholder:e.$t(r.placeholder),onKeyup:l=>r.mandatory==1?e.validateEmptyInput("currency_symbol",e.form.currency_symbol):"",onBlur:l=>r.mandatory==1?e.validateEmptyInput("currency_symbol",e.form.currency_symbol):""},null,8,["value","placeholder","onKeyup","onBlur"]),r.mandatory==1?(t(),g(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:m(()=>[p(i(e.errors.currency_symbol),1)]),_:1})):c("",!0)]))),128)),(t(!0),s(E,null,L(e.coreFieldFilterSettings.filter(r=>r.original_field_name==="currency_short_form"&&r.enable===1&&r.is_delete===0),(r,v)=>(t(),s("div",{key:v},[a(f,{class:"text-base"},{default:m(()=>[p(i(e.$t(r.label_name))+" ",1),r.mandatory==1?(t(),s("span",te,"*")):c("",!0)]),_:2},1024),a(y,{ref_for:!0,ref:"currency_short_form",type:"text",value:e.form.currency_short_form,"onUpdate:value":o[1]||(o[1]=l=>e.form.currency_short_form=l),placeholder:e.$t(r.placeholder),onKeyup:l=>r.mandatory==1?e.validateEmptyInput("currency_short_form",e.form.currency_short_form):"",onBlur:l=>r.mandatory==1?e.validateEmptyInput("currency_short_form",e.form.currency_short_form):""},null,8,["value","placeholder","onKeyup","onBlur"]),r.mandatory==1?(t(),g(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:m(()=>[p(i(e.errors.currency_short_form),1)]),_:1})):c("",!0)]))),128)),(t(!0),s(E,null,L(e.coreFieldFilterSettings.filter(r=>r.original_field_name==="name"&&r.enable===1&&r.is_delete===0),(r,v)=>(t(),s("div",{key:v},[a(f,{class:"text-base"},{default:m(()=>[p(i(e.$t(r.label_name))+" ",1),r.mandatory==1?(t(),s("span",oe,"*")):c("",!0)]),_:2},1024),a(y,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":o[2]||(o[2]=l=>e.form.name=l),placeholder:e.$t(r.placeholder),onKeyup:l=>r.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:l=>r.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),r.mandatory==1?(t(),g(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:m(()=>[p(i(e.errors.name),1)]),_:1})):c("",!0)]))),128)),_("div",ne,[a(n,{onClick:o[3]||(o[3]=r=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:m(()=>[p(i(e.$t("btn_cancel")),1)]),_:1}),a(n,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:m(()=>[e.loading?(t(),g(d,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):c("",!0),e.success?(t(),g(K,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):c("",!0),e.success?(t(),s("span",ae,i(e.$t("core__be_btn_saved")),1)):c("",!0),!e.loading&&!e.success?(t(),s("span",se,i(e.$t("core__be_btn_save")),1)):c("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var qe=X(Y,[["render",le]]);export{qe as default};
