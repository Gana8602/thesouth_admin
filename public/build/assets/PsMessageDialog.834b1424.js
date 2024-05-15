import w from"./PsModal.49a87bcd.js";import B from"./PsLabel.dd7b9156.js";import $ from"./PsButton.81d0ce1f.js";import{d as P,i as a,z as i,o as S,f as z,w as t,b as n,a as v,q as d,t as m,r as f}from"./app.72d9fe45.js";import M from"./PsIcon.c404b5b9.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";const A=P({name:"PsMessageDialog",components:{PsModal:w,PsLabel:B,PsButton:$,PsIcon:M},setup(){const e=a(),o=a(i("ps_confirm_dialog__confirm")),u=a(i("ps_confirm_dialog__are_you_confirm")),p=a(i("ps_confirm_dialog__yes")),_=a(i("ps_confirm_dialog__no"));let x,l;function r(s){s=="yes"?x():l(),e.value.toggle(!1)}function c(s,k,h,y,C,b){o.value=s,u.value=k.toString(),p.value=h,_.value=y,e.value.toggle(!0),x=C,l=b}function g(){e.value.toggle(!1)}return{psmodal:e,title:o,message:u,openModal:c,actionClicked:r,okButton:p,cancelButton:_,close:g}}}),D={class:"flex flex-col text-center justify-center items-center text-feAchromatic-300"},N={class:"w-full text-center mt-4"},V={class:"flex flex-row justify-center mt-6"};function q(e,o,u,p,_,x){const l=f("ps-icon"),r=f("ps-label"),c=f("ps-button"),g=f("ps-modal");return S(),z(g,{ref:"psmodal",maxWidth:"450px",line:"hidden",isClickOut:!1,theme:" px-6 py-7 rounded-lg shadow-xl",class:"z-20"},{title:t(()=>[n(l,{onClick:o[0]||(o[0]=s=>e.close()),name:"close",class:"text-sm text-feSecondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"}),v("div",D,[n(l,{class:"flex-grow-0",name:"checkCircle",w:"86",h:"86"}),n(r,{class:"font-medium text-xl lg:text-2xl mt-3"},{default:t(()=>[d(m(e.title),1)]),_:1})])]),body:t(()=>[v("div",N,[n(r,{class:"font-normal text-feSecondary-700 text-sm"},{default:t(()=>[d(m(e.message),1)]),_:1})])]),footer:t(()=>[v("div",V,[n(c,{rounded:"rounded",onClick:o[1]||(o[1]=s=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-3",border:"border border-feAchromatic-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-feAchromatic-100"},{default:t(()=>[d(m(e.cancelButton),1)]),_:1}),n(c,{rounded:"rounded",onClick:o[2]||(o[2]=s=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:""},{default:t(()=>[d(m(e.okButton),1)]),_:1})])]),_:1},512)}var H=j(A,[["render",q]]);export{H as default};
