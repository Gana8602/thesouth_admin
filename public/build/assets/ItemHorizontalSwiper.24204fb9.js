import{S as b,a as v,b as L}from"./vue-splide.esm.01499f7d.js";/* empty css                        */import x from"./ItemHorizontalItem.1d41cc35.js";import N from"./PsRouteLink.ab373f40.js";import I from"./PsIcon.c404b5b9.js";import P from"./ItemHorizontalSkeletorItem.4a35f291.js";import{u as z}from"./AppInfoStore.3eac0301.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c,b as i,w as a,f as o,g as d,F as w,s as S,a as _,n as T,r as m}from"./app.72d9fe45.js";import"./PsLabel.dd7b9156.js";import"./PsLabelTitle4.90166f3a.js";import"./PsCard.c6bb6e2a.js";import"./ps_constants.ea9d0b33.js";import"./PsAdSense.e3562fb6.js";import"./PsValueStore.46e374fe.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsLoadingDialog.52bc8b7d.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./format.min.1a01be2e.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.64e68efd.js";import"./ProductStore.017d2a02.js";import"./ProductParameterHolder.b9a2d040.js";import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.e64977ef.js";import"./FollowItemParameterHolder.54ad8b57.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./vue-skeletor.esm.437103df.js";/* empty css                     */const C={name:"ItemHorizontalSwiper",components:{Splide:b,SplideSlide:v,SplideTrack:L,ItemHorizontalItem:x,ItemHorizontalSkeletorItem:P,PsRouteLink:N,PsIcon:I},props:{itemList:Object,filteredList:Object,notShowTitle:{type:Boolean,default:!1},storeName:{type:String,default:""},isLoading:{type:Boolean,default:!1}},setup(k){const u=z(),t={rewind:!0,gap:"1.5rem",perPage:4,focus:0,omitEnd:!0,pagination:!1,direction:n(),breakpoints:{1536:{perPage:4},1280:{perPage:3},1024:{perPage:3},768:{perPage:2},640:{perPage:1},200:{perPage:1}}};function n(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{options:t,getDir:n,appInfoStore:u}}},H={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},V={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function O(k,u,t,n,R,j){const s=m("item-horizontal-skeletor-item"),l=m("splide-slide"),p=m("item-horizontal-item"),y=m("splide-track"),f=m("ps-icon"),h=m("splide");return e(),c("div",null,[i(h,{options:n.options,"has-track":!1},{default:a(()=>[i(y,null,{default:a(()=>{var g;return[t.isLoading?(e(),o(l,{key:0},{default:a(()=>[i(s)]),_:1})):d("",!0),t.isLoading?(e(),o(l,{key:1},{default:a(()=>[i(s)]),_:1})):d("",!0),t.isLoading?(e(),o(l,{key:2},{default:a(()=>[i(s)]),_:1})):d("",!0),t.isLoading?(e(),o(l,{key:3},{default:a(()=>[i(s)]),_:1})):d("",!0),(g=n.appInfoStore)!=null&&g.isVendorSettingOn()?(e(!0),c(w,{key:4},S(t.itemList,r=>(e(),o(l,{key:r.id},{default:a(()=>[r.title==""?(e(),o(p,{key:0,item:r},null,8,["item"])):(e(),o(p,{key:1,item:r,notShowTitle:t.notShowTitle,storeName:t.storeName},null,8,["item","notShowTitle","storeName"]))]),_:2},1024))),128)):(e(!0),c(w,{key:5},S(t.filteredList,r=>(e(),o(l,{key:r.id},{default:a(()=>[r.title==""?(e(),o(p,{key:0,item:r},null,8,["item"])):(e(),o(p,{key:1,item:r,notShowTitle:t.notShowTitle,storeName:t.storeName},null,8,["item","notShowTitle","storeName"]))]),_:2},1024))),128))]}),_:1}),_("div",{class:T("splide__arrows splide__arrows--"+n.getDir())},[_("button",H,[i(f,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),_("button",V,[i(f,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])],2)]),_:1},8,["options"])])}var He=B(C,[["render",O],["__scopeId","data-v-672d4e90"]]);export{He as default};
