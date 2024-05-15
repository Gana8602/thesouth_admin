import{Z as I,i as _,o as v,c as K,b as o,a as m,f as k,w as l,q as a,t as i,g as L,K as R,F as M,z as g,r}from"./app.72d9fe45.js";import{u as V}from"./UserProvider.d1be650d.js";import{P as B}from"./PsValueStore.46e374fe.js";import{b as h}from"./PsApiService.74841eb2.js";import W from"./PsLabel.dd7b9156.js";import j from"./PsButton.81d0ce1f.js";import F from"./PsInput.5af8d533.js";import D from"./PsCheckboxValue.6199e430.js";import N from"./PsLine.c7f2ab42.js";import Z from"./PsErrorDialog.0ec3813f.js";import H from"./PsRouteLink.ab373f40.js";import $ from"./PrivacyModal.b28b8f5e.js";import q from"./PsSuccessDialog2.72acd4e7.js";import G from"./PsLoadingDialog.52bc8b7d.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.ea9d0b33.js";import"./UserRegisterParameterHolder.c0325365.js";import"./PhoneLoginParameterHolder.e6dad0ed.js";import"./ApiStatus.5720ba0b.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLabelTitle.8e337e9e.js";import"./AboutUsStore.37881ff8.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsIcon.c404b5b9.js";const J={name:"LoginView",components:{PsLabel:W,PsButton:j,PsInput:F,PsCheckboxValue:D,PsLine:N,PsErrorDialog:Z,PsRouteLink:H,PrivacyModal:$,PsSuccessDialog2:q,PsLoadingDialog:G,Head:I},setup(){B.psValueStore.isUserLoggedIn();const t=_(""),c=_(""),p=_(!1),e=_(!1),x=_(),f=_(),b=_(),s=_(),n=V();n.userResource.message="";function d(E){/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(E.target.value)?e.value=!1:e.value=!0}function y(){p.value||f.value.openModal(g("login__privacy_policy"),g("login__need_to_agree_privacy"))}async function C(){p.value?(await n.loginWithFacebookId(),n.userResource.status==h.SUCCESS):f.value.openModal(g("login__privacy_policy"),g("login__need_to_agree_privacy"))}async function P(){p.value?(await n.loginWithGoogleId(),n.userResource.status==h.SUCCESS):f.value.openModal(g("login__privacy_policy"),g("login__need_to_agree_privacy"))}async function w(){p.value?(await n.loginWithAppleSignIn(),n.userResource.status==h.SUCCESS):f.value.openModal(g("login__privacy_policy"),g("login__need_to_agree_privacy"))}async function S(){x.value.openModal(),await n.loginWithEmailId(t.value,c.value),n.userResource.status==h.SUCCESS,x.value.closeModal()}function A(){}function z(){}function u(E){p.value=E}function U(){s.value.openModal(u)}return{normalLoginClicked:S,email:t,password:c,userProvider:n,phoneloginclicked:y,facebookloginclicked:C,googleloginclicked:P,appleloginclicked:w,openRegister:A,openForgotPassword:z,agreePrivacyPolicy:p,ps_error_dialog:f,agreePrivacyPolicyClicked:U,privacy_modal:s,ps_success_dialog:b,validateEmail:d,validationEmail:e,ps_loading_dialog:x}}},O={class:"sm:mt-32 lg:mt-36 mt-28 flex flex-col"},Q={class:"content-center mx-auto w-96"},X={class:"w-55 lg:w-80 flex flex-col mx-auto rounded-lg"},Y={class:"mt-4 lg:mt-5 flex flex-col items-center"},ee={class:"font-medium"},oe={class:"flex flex-row justify-center mt-4"},te={class:"flex flex-row items-start mt-3 lg:mt-4"},le=m("div",{class:"mt-4"},null,-1);function ie(t,c,p,e,x,f){const b=r("Head"),s=r("ps-label"),n=r("ps-input"),d=r("ps-button"),y=r("ps-line"),C=r("ps-checkbox-value"),P=r("ps-route-link"),w=r("ps-loading-dialog"),S=r("ps-error-dialog"),A=r("ps-success-dialog-2"),z=r("privacy-modal");return v(),K(M,null,[o(b,{title:t.$t("login__login_title")},null,8,["title"]),m("div",null,[m("div",O,[m("div",Q,[e.userProvider.userResource.message!=""?(v(),k(s,{key:0,class:"content-center text-general-200 dark:text-feAchromatic-50 px-4 py-4 rounded-md"},{default:l(()=>[a(i(e.userProvider.userResource.message),1)]),_:1})):L("",!0)]),m("div",X,[o(s,{class:"font-medium text-2xl mt-8 mx-auto lg:text-3xl mb-4"},{default:l(()=>[a(i(t.$t("login__login_title")),1)]),_:1}),o(s,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl"},{default:l(()=>[a(i(t.$t("login__email")),1)]),_:1}),o(n,{class:"lg:mt-2 mt-1",type:"email",placeholder:t.$t("login__email_placeholder"),onKeyup:R(e.normalLoginClicked,["enter"]),value:e.email,"onUpdate:value":c[0]||(c[0]=u=>e.email=u),onKeypress:e.validateEmail},null,8,["placeholder","onKeyup","value","onKeypress"]),e.validationEmail?(v(),k(s,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-fePrimary-500"},{default:l(()=>[a(i(t.$t("login__email_required_error")),1)]),_:1})):L("",!0),o(s,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl"},{default:l(()=>[a(i(t.$t("login__password")),1)]),_:1}),o(n,{class:"lg:mt-2 mt-1",type:"password",placeholder:t.$t("login__password_placeholder"),onKeyup:R(e.normalLoginClicked,["enter"]),value:e.password,"onUpdate:value":c[1]||(c[1]=u=>e.password=u),autocomplete:"on"},null,8,["placeholder","onKeyup","value"]),e.userProvider.loading.value?(v(),k(d,{key:1,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 w-full py-3",disabled:!0},{default:l(()=>[a(i(t.$t("login__loading")),1)]),_:1})):(v(),k(d,{key:2,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 py-3",onClick:e.normalLoginClicked,disabled:!1},{default:l(()=>[a(i(t.$t("login__login")),1)]),_:1},8,["onClick"])),m("div",Y,[o(s,{textColor:"text-feSecondary-400 dark:text-feAchromatic-500",class:"cursor-pointer font-light text-xs lg:text-sm",onClick:e.openForgotPassword},{default:l(()=>[a(i(t.$t("login__forgot_password")),1)]),_:1},8,["onClick"]),o(s,{textColor:"text-feSecondary-400 dark:text-feAchromatic-500",class:"cursor-pointer mt-3 font-light text-xs lg:text-sm",onClick:e.openRegister},{default:l(()=>[a(i(t.$t("login__new_here"))+" ",1),m("span",ee,i(t.$t("login__sign_up")),1)]),_:1},8,["onClick"])]),m("div",oe,[o(y,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feAchromatic-500"}),o(s,{class:"px-1 font-medium text-sm lg:text-base"},{default:l(()=>[a(i(t.$t("login__or")),1)]),_:1}),o(y,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feAchromatic-500"})]),m("div",te,[o(C,{title:"",class:"lg:mt-1 mt-0.5",value:e.agreePrivacyPolicy,"onUpdate:value":c[2]||(c[2]=u=>e.agreePrivacyPolicy=u),onClick:e.agreePrivacyPolicyClicked},null,8,["value","onClick"]),o(s,{class:"me-2 font-medium text-sm lg:text-base"},{default:l(()=>[a(i(t.$t("login__check_privacy_policy")),1)]),_:1}),o(P,{to:{name:"privacy"},class:"underline cursor-pointer text-sm"},{default:l(()=>[o(s,{class:"font-medium text-sm lg:text-base"},{default:l(()=>[a(i(t.$t("login__privacy_policy")),1)]),_:1})]),_:1})]),o(d,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",onClick:e.phoneloginclicked},{default:l(()=>[a(i(t.$t("login__login_with_phone")),1)]),_:1},8,["onClick"]),o(d,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",theme:"bg-feInfo-600 hover:bg-feInfo-700 text-feAchromatic-50 px-4 py-2",onClick:e.facebookloginclicked},{default:l(()=>[a(i(t.$t("login__login_with_facebook")),1)]),_:1},8,["onClick"]),o(d,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",theme:"bg-feWarning-600 hover:bg-feWarning-700 text-feAchromatic-50 px-4 py-2",id:"signinBtn",onClick:e.googleloginclicked},{default:l(()=>[a(i(t.$t("login__login_with_google")),1)]),_:1},8,["onClick"]),o(d,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-5",theme:"bg-feAchromatic-900 hover:bg-feAchromatic-700 text-feAchromatic-50 px-4 py-2",onClick:e.appleloginclicked},{default:l(()=>[a(i(t.$t("login__login_with_apple")),1)]),_:1},8,["onClick"]),le])]),o(w,{ref:"ps_loading_dialog",class:"z-40"},null,512),o(S,{ref:"ps_error_dialog"},null,512),o(A,{ref:"ps_success_dialog"},null,512),o(z,{ref:"privacy_modal"},null,512)])],64)}var We=T(J,[["render",ie]]);export{We as default};
