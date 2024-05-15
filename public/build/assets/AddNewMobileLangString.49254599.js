import{U as v}from"./UpdaterLayout.b44453e0.js";import{P as S}from"./PsButton.75e226c0.js";import{P as w}from"./PsLoadingCircleDialog.70b57269.js";import{d as x,p as M,i as a,Q as g,O as l,o as y,c as P,b as o,w as m,a as u,t as f,q as U,z as n,r as s}from"./app.72d9fe45.js";import{P as V}from"./PsErrorDialog.5174f1d4.js";import{P as $}from"./PsSuccessDialog.4b6e8f79.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLabel.9b145d71.js";import"./PsLoading.1f14f5af.js";const C=x({components:{UpdaterLayout:v,Link:M,PsButton:S,PsLoadingCircleDialog:w,PsErrorDialog:V,PsSuccessDialog:$},setup(t){const e=a(),i=a(),_=a(),c=a(0);let p=g().props.logMessages;p=="mb_lang_sync_success"&&l.get(route("NextLaravelUpdater::addNewVendorLangString"));function d(){l.post(route("NextLaravelUpdater::addNewMobileLangString"),{},{onBefore:()=>{e.value.openModal(n("core__be_importing_title2_be"),n("core__be_importing_note2_mb"))},onSuccess:r=>{g().props.logMessages=="mb_lang_sync_success"&&l.get(route("NextLaravelUpdater::addNewVendorLangString"))},onError:r=>{e.value.closeModal(),i.value.openModal(n("ps_error_dialog__error"),n(r.message),"OK")}})}return{toAddNewVendorLangString:d,ps_loading_circle_dialog:e,ps_error_dialog:i,isGoNext:c,ps_success_dialog:_,go_next:p}}}),h={class:"paragraph text-center"},k={class:"buttons"};function D(t,e,i,_,c,p){const d=s("ps-button"),r=s("UpdaterLayout"),b=s("ps-error-dialog"),L=s("ps-success-dialog"),N=s("ps-loading-circle-dialog");return y(),P("div",null,[o(r,{title:"installer_messages.updater.addNewMobileLangString.title"},{container:m(()=>[u("p",h,f(t.$t("installer_messages.updater.addNewMobileLangString.message2")),1),u("div",k,[o(d,{onClick:e[0]||(e[0]=A=>t.toAddNewVendorLangString()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:m(()=>[U(f(t.$t("btn_update")),1)]),_:1})])]),_:1}),o(b,{ref:"ps_error_dialog"},null,512),o(L,{ref:"ps_success_dialog"},null,512),o(N,{ref:"ps_loading_circle_dialog"},null,512)])}var R=B(C,[["render",D]]);export{R as default};
