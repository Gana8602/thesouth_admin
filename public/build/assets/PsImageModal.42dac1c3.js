import{M as n}from"./vue-neat-modal.d239f4e3.js";import{i as d,D as c,o as u,f as m,w as f,a as _,l as g,n as p,B as v,r as k}from"./app.72d9fe45.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";const B={name:"PsImageModal",components:{Modal:n},props:{maxWidth:{type:String,default:"100%"},isBackdropRemoved:{type:Boolean,default:!1},isMotionDisabled:{type:Boolean,default:!1},isClickOut:{type:Boolean,default:!0},modalTransition:{type:String,default:"scale"},isFullscreen:{type:Boolean,default:!1}},setup(){const t=d(!1),o=v();o.dispatch("loadIsDarkMode");const e=c(()=>o.getters.isDarkMode);function a(s){t.value=s}function l(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{isDarkMode:e,isOpen:t,toggle:a,getDir:l}}},x=["dir"];function y(t,o,e,a,l,s){const i=k("Modal");return u(),m(i,{modelValue:a.isOpen,"onUpdate:modelValue":o[0]||(o[0]=r=>a.isOpen=r),fullscreen:e.isFullscreen,"modal-transition":e.modalTransition,"click-out":e.isClickOut,"disable-motion":e.isMotionDisabled,"max-width":e.maxWidth,"remove-backdrop":e.isBackdropRemoved,class:"mx-auto"},{default:f(()=>[_("div",{class:p([a.isDarkMode?"dark":"","w-screem"]),dir:a.getDir()},[g(t.$slots,"body",{},void 0,!0)],10,x)]),_:3},8,["modelValue","fullscreen","modal-transition","click-out","disable-motion","max-width","remove-backdrop"])}var h=M(B,[["render",y],["__scopeId","data-v-6cc31f72"]]);export{h as default};
