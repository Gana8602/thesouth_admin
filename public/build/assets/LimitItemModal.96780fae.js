import"https://checkout.razorpay.com/v1/checkout.js";import X from"./PsModal.49a87bcd.js";import ee from"./PsLabel.dd7b9156.js";import te from"./PsButton.81d0ce1f.js";import oe from"./PsRadio.35e3d07e.js";import ae from"./PsRadio2.c2a5011d.js";import ne from"./PsErrorDialog.0ec3813f.js";import le from"./PsWarningDialog2.ce49da0c.js";import ie from"./PsIcon.c404b5b9.js";import re from"./StripePaymentModal.1d349521.js";import se from"./PaypalPaymentModal.610584c9.js";import pe from"./OfflinePaymentModal.e3283ab0.js";import me from"./InputEmailModal.e2c08ccb.js";import{u as de}from"./AppInfoStore.3eac0301.js";import{P as ce}from"./PsValueStore.46e374fe.js";import{u as fe}from"./UserStore.e188dd03.js";import{u as ue}from"./PackageStore.130d755f.js";import{I as _e}from"./ItemLimitParameterHolder.a3bfbb51.js";import{A as ye}from"./AppInfoParameterHolder.e24d894d.js";import{u as ge}from"./LimitAdItemStore.3f4283a6.js";import{b as W}from"./PsApiService.74841eb2.js";import{d as Pe,i as c,o as P,c as j,b as r,w as a,a as k,f as E,q as m,t as l,g as M,F as ke,s as Ie,z as N,r as f}from"./app.72d9fe45.js";import{P as L}from"./ps_constants.ea9d0b33.js";import{s as G}from"./inline.d0ef9675.js";import{P as T}from"./PsUtils.eb7a8002.js";import{f as Se}from"./format.min.1a01be2e.js";import{_ as Ae}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./stripe.esm.b93e9b50.js";import"./PsLabelHeader4.8f645119.js";import"./PsLoadingDialog.52bc8b7d.js";import"./TokenStore.65782713.js";import"./ApiStatus.5720ba0b.js";import"./PsObject.a17ef38f.js";import"./PsSepetetedStore.9a31ac47.js";import"./dropin.b1745c03.js";import"./PsLabelTitle3.305e016a.js";import"./PsLabelHeader6.98bb71e1.js";import"./OfflinePaymentStore.fcade32b.js";import"./DefaultIcon.e76b39a5.js";import"./PsInput.5af8d533.js";import"./DefaultPhoto.cc755f93.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./Package.5254ef20.js";import"./PaymentInfo.5aa268a0.js";import"./LimitAdTransaction.68a62e95.js";const ve=Pe({name:"LimitItemModal",components:{PsModal:X,PsIcon:ie,PsLabel:ee,PsButton:te,PsErrorDialog:ne,PsRadio2:ae,PsRadio:oe,StripePaymentModal:re,PaypalPaymentModal:se,OfflinePaymentModal:pe,PsWarningDialog2:le,InputEmailModal:me},setup(){const e=c(),o=c(),z=c(),x=c(),O=c(),H=c(),u=c(),_=c(),y=ue(),I=ge(),g=new _e,i=de(),B=new ye,R=fe(),S=ce().getLoginUserId(),Y=c(0),n=c(""),s=c("");async function v(){e.value.toggle(!0),await I.resetPaidAdItemList(S),await y.resetPackageList(S),b();const t=await i.loadAppInfo(B);n.value=t.data.razorKey,t.status==W.SUCCESS?Y.value=parseInt(t.data.oneDay,10):Y.value=0}function b(){y.packageList!=null&&y.packageList.data!=null&&y.packageList.data.length>0&&(_.value=y.packageList.data[0])}function h(t){if(_.value==null||_.value.paymentInfo==null){O.value.openModal("",$t("select_package"));return}i.appInfo.data.mobileSetting.is_demo_for_payment==1?u.value.openModal(N("payment__warning_title"),N("payment__confirm_message"),N("payment__ok"),N("credit_card_modal__cancel"),()=>{t=="PAYPAL"?F():t=="STRIPE"?C():t=="RAZOR"?V():t=="PAYSTACK"?K():t=="OFFLINE"&&U()},()=>{T.log("Cancel")}):t=="PAYPAL"?F():t=="STRIPE"?C():t=="RAZOR"?V():t=="PAYSTACK"?K():t=="OFFLINE"&&U()}function C(){e.value.toggle(!1),o.value.openModal(()=>{const t=L.PAYMENT_STRIPE_METHOD.toString();w(t)},()=>{T.log("Cancel")})}async function w(t){var d;g.userId=S,g.packageId=(d=_.value.paymentInfo)==null?void 0:d.id,g.paymentMethod=t,g.paymentMethodNounce=localStorage.paymentNonce||"",g.price=_.value.paymentAttributes.price,g.razorId=s.value||"";const p=await y.postPackageBought(S,g);e.value.toggle(!1),p.status==W.ERROR?O.value.openModal("",y.limititem.message):(localStorage.paymentNonce="",location.reload())}function F(){e.value.toggle(!1),z.value.openModal(()=>{const t=L.PAYMENT_PAYPAL_METHOD.toString();w(t)},()=>{T.log("Cancel")})}async function V(){const p=(await R.loadUser(S)).data,d={key:n.value,name:"Test Company",prefill:{email:p.userEmail,name:p.userName,contact:p.userPhone},theme:{color:"#0e9f6e"},handler:async function($){s.value=$.razorpay_payment_id,w(L.PAYMENT_RAZOR_METHOD.toString())}},A=new window.Razorpay(d);A.open(),A.on("payment.failed",function($){})}async function K(){var A;const p=(await R.loadUser(S)).data;let d=p.userEmail;p.userEmail==""||p.userEmail==null?H.value.openModal($=>{var q;d=$,G.setup({key:(q=i==null?void 0:i.appInfo)==null?void 0:q.data.payStackKey,email:d,amount:_.value.price,callback:async function(Q){T.log(Q),w(L.PAYMENT_PAY_STACK_METHOD.toString())},onClose:function(){}}).openIframe()},()=>{console.log("cancel")}):G.setup({key:(A=i==null?void 0:i.appInfo)==null?void 0:A.data.payStackKey,email:d,amount:_.value.paymentAttributes.price,callback:async function(Z){T.log(Z),w(L.PAYMENT_PAY_STACK_METHOD.toString())},onClose:function(){}}).openIframe()}function U(){e.value.toggle(!1),x.value.openModal(()=>{const t=L.PAYMENT_OFFLINE_METHOD.toString();w(t)},()=>{T.log("Cancel")})}function J(t){var p,d,A;return t.toString()=="0"?N("item_price__free"):Se((A=(d=(p=i==null?void 0:i.appInfo)==null?void 0:p.data)==null?void 0:d.mobileSetting)==null?void 0:A.price_format,t)}return{psmodal:e,openModal:v,packageprovider:y,appInfoStore:i,limitProvider:I,ps_error_dialog:O,stripe_payment_modal:o,paypal_payment_modal:z,offline_payment_modal:x,selected:_,ps_warning_dialog:u,paymentClicked:h,input_email:H,formatPrice:J}}}),be={class:"flex justify-between items-start"},Ce={class:"flex flex-wrap"},Ee={class:"flex flex-col mt-6 sm:mt-7"},we={class:""},Me={class:"flex flex-col w-full"},Le={class:"flex flex-col w-full mt-6 gap-2 sm:gap-4",id:"r1"},Te={class:"font-light"},he={class:"grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"};function $e(e,o,z,x,O,H){const u=f("ps-label"),_=f("ps-icon"),y=f("ps-radio-2"),I=f("ps-button"),g=f("ps-modal"),i=f("stripe-payment-modal"),B=f("paypal-payment-modal"),R=f("ps-warning-dialog-2"),D=f("offline-payment-modal"),S=f("ps-error-dialog"),Y=f("input-email-modal");return P(),j("div",null,[r(g,{ref:"psmodal",line:"hidden",maxWidth:"534px",isClickOut:!1,class:"h-full",bodyHeight:"max-h-72",theme:"px-4 py-8 sm:p-8 rounded-lg"},{title:a(()=>{var n,s,v,b;return[k("div",be,[((n=e.limitProvider.buyadList)==null?void 0:n.data)!=null&&((b=(v=(s=e.limitProvider.buyadList)==null?void 0:s.data[0])==null?void 0:v.user)==null?void 0:b.remainingPost)==0?(P(),E(u,{key:0,textColor:"text-lg font-semibold text-feSecondary-800 mb-2"},{default:a(()=>[m(l(e.$t("limit_item_modal__quota_running_out.")),1)]),_:1})):M("",!0),k("div",Ce,[r(u,{class:"text-lg font-semibold text-feSecondary-800 me-2"},{default:a(()=>[m(l(e.$t("limit_item_modal__limit")),1)]),_:1}),r(u,{class:"text-lg"},{default:a(()=>[m(l(e.$t("limit_item_modal__limit_post_buy")),1)]),_:1})]),r(_,{class:"cursor-pointer dark:text-feSecondary-500",name:"close",w:"24",h:"24",onClick:o[0]||(o[0]=h=>e.psmodal.toggle(!1))})])]}),body:a(()=>[k("div",Ee,[k("div",we,[k("div",Me,[r(u,{class:"font-medium text-base"},{default:a(()=>[m(l(e.$t("promote_item_modal__choose_package")),1)]),_:1}),k("div",Le,[(P(!0),j(ke,null,Ie(e.packageprovider.packageList.data,n=>(P(),E(y,{class:"",key:n.packageId,value:n,selectedValue:e.selected,"onUpdate:selectedValue":o[1]||(o[1]=s=>e.selected=s)},{title:a(()=>[k("div",null,[r(u,{class:"ms-2 text-sm text-feSecondary-800"},{default:a(()=>[m(l(n.paymentInfo.value)+" - "+l(n.paymentAttributes.count)+" "+l(e.$t("limit_item_modal__post")),1)]),_:2},1024)])]),price:a(()=>[r(u,{class:"font-semibold text-base"},{default:a(()=>{var s;return[k("span",Te,l((s=n.paymentAttributes)==null?void 0:s.currencySymbol),1),m(" "+l(e.formatPrice(n.paymentAttributes.price)),1)]}),_:2},1024)]),_:2},1032,["value","selectedValue"]))),128))])])])])]),footer:a(()=>{var n,s,v,b,h;return[r(u,{class:"mt-6 sm:mt-7 font-medium text-base"},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with")),1)]),_:1}),k("div",he,[((n=e.appInfoStore.appInfo.data)==null?void 0:n.paypalEnable)=="1"?(P(),E(I,{key:0,colors:"bg-feBrand-paypal text-feAchromatic-50",class:"",padding:"px-8 py-4",rounded:"rounded-lg",onClick:o[2]||(o[2]=C=>e.paymentClicked("PAYPAL"))},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with_paypal")),1)]),_:1})):M("",!0),((s=e.appInfoStore.appInfo.data)==null?void 0:s.stripeEnable)=="1"?(P(),E(I,{key:1,colors:"bg-feBrand-stripe text-feAchromatic-50",class:"",padding:"px-8 py-4",rounded:"rounded-lg",onClick:o[3]||(o[3]=C=>e.paymentClicked("STRIPE"))},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with_stripe")),1)]),_:1})):M("",!0),((v=e.appInfoStore.appInfo.data)==null?void 0:v.razorEnable)=="1"?(P(),E(I,{key:2,colors:"bg-feBrand-razor text-feAchromatic-50",class:"",padding:"px-8 py-4",rounded:"rounded-lg",onClick:o[4]||(o[4]=C=>e.paymentClicked("RAZOR"))},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with_razor")),1)]),_:1})):M("",!0),((b=e.appInfoStore.appInfo.data)==null?void 0:b.payStackEnabled)=="1"?(P(),E(I,{key:3,colors:"bg-feBrand-paystack text-feAchromatic-50",class:"",padding:"px-8 py-4",rounded:"rounded-lg",onClick:o[5]||(o[5]=C=>e.paymentClicked("PAYSTACK"))},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with_stack")),1)]),_:1})):M("",!0),((h=e.appInfoStore.appInfo.data)==null?void 0:h.offlineEnabled)=="1"?(P(),E(I,{key:4,class:"",padding:"px-8 py-4",rounded:"rounded-lg",onClick:o[6]||(o[6]=C=>e.paymentClicked("OFFLINE"))},{default:a(()=>[m(l(e.$t("promote_item_modal__pay_with_offline")),1)]),_:1})):M("",!0)])]}),_:1},512),r(i,{ref:"stripe_payment_modal"},null,512),r(B,{ref:"paypal_payment_modal"},null,512),r(R,{ref:"ps_warning_dialog"},null,512),r(D,{ref:"offline_payment_modal"},null,512),r(S,{ref:"ps_error_dialog"},null,512),r(Y,{ref:"input_email"},null,512)])}var Tt=Ae(ve,[["render",$e]]);export{Tt as default};
