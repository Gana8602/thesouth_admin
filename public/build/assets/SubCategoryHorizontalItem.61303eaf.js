import{u as i}from"./SubCategoryStore.3f10dbcb.js";import u from"./PsLabel.dd7b9156.js";import n from"./CustomCheckbox.b2bbb7de.js";import{S as m}from"./SubCategory.1b4176e0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{d as p,u as b,o as r,c as g,a as o,f,g as h,b as C,w as y,q as S,t as k,r as a}from"./app.72d9fe45.js";import"./PsApiService.74841eb2.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./DefaultIcon.e76b39a5.js";const v=p({name:"SubCategoryHorizontalItem",props:{subCategory:{type:m},scribe:{type:Boolean,default:!1},onClick:Function},components:{PsLabel:u,CustomCheckbox:n},setup(){const e=i(),t=b([]);return{subCategoryStore:e,checkedSelectedList:t}}}),_={class:"flex flex-col mt-2 w-full h-auto cursor-pointer"},x={class:"relative bg-feAchromatic-900 lg:h-40 sm:h-28 h-20 rounded-md"},V={class:"absolute opacity-50"},w=["src"],B={class:"relative justify-end flex"},I={class:"mx-auto lg:pt-16 sm:pt-12 pt-10 relative"};function L(e,t,N,P,$,j){const l=a("custom-checkbox"),c=a("ps-label");return r(),g("div",_,[o("div",x,[o("div",V,[o("img",{alt:"Placeholder",width:"150px",height:"100px",class:"w-screen block mx-auto lg:h-40 sm:h-28 h-20 object-cover rounded-md",src:e.subCategoryStore.imageUrl(e.subCategory?e.subCategory.defaultPhoto.imgPath:"",3),onError:t[0]||(t[0]=(...s)=>e.subCategoryStore.defaultCarImage&&e.subCategoryStore.defaultCarImage(...s))},null,40,w)]),o("div",B,[e.scribe?(r(),f(l,{key:0,isScribe:e.subCategory.isSubScribe,checked:e.subCategory.id,value:e.subCategory.isSubScribe,selectedValue:e.checkedSelectedList,"onUpdate:selectedValue":t[1]||(t[1]=s=>e.checkedSelectedList=s)},null,8,["isScribe","checked","value","selectedValue"])):h("",!0)]),o("div",I,[C(c,{class:"absolute w-full lg:text-lg sm:text-sm text-xs text-center leading-4",textColor:"text-feAchromatic-50"},{default:y(()=>[S(k(e.subCategory?e.subCategory.name:""),1)]),_:1})])])])}var K=d(v,[["render",L]]);export{K as default};
