import{P as ee}from"./PsLayout.847d3bb7.js";import{d as te,Z as re,i as l,z as d,G as oe,O as L,o as n,c as f,b as s,w as a,a as g,q as p,t as c,f as j,g as v,F as V,s as G,n as A,r as u}from"./app.72d9fe45.js";import{P as le}from"./PsButton.75e226c0.js";import{b as ae,d as se}from"./PsDangerDialog.4a7cc4cb.js";import{P as ie}from"./PsBannerIcon.ba5a991b.js";import{P as ne}from"./PsBreadcrumb2.c233a04a.js";import{P as de}from"./PsIcon.8d64a589.js";import{P as ce}from"./PsDropdown.dd6513b3.js";import{P as ue}from"./PsDropdownSelect.2cfdee10.js";import{D as pe}from"./PsTableSearch.2a5042b8.js";import{P as me}from"./PsIconButton.92987408.js";import{P as _e}from"./PsLabel.9b145d71.js";import{P as fe}from"./PsLink1.1f7b38a0.js";import{P as he}from"./PsToggle.8b891384.js";import{P as be}from"./PsTable2.07283736.js";import{D as ge}from"./DatePicker.af815a5d.js";import{P as ve}from"./PsBadge.14872902.js";import{a as ye,h as ke}from"./psApiService.abb19e3d.js";import{_ as we}from"./plugin-vue_export-helper.21dcd24c.js";import{P as Oe}from"./PsInputWithRightIcon.e27f7629.js";import{P as E}from"./ps_constants.ea9d0b33.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";import"./moment.9709ab41.js";import"./main.09d396a4.js";import"./index.bb4ebfff.js";const Ce=te({name:"Index",components:{Head:re,PsButton:le,PsTextButton:ae,PsBannerIcon:ie,PsBreadcrumb2:ne,PsDangerDialog:se,PsIcon:de,PsDropdown:ce,PsDropdownSelect:ue,Dropdown:pe,PsIconButton:me,PsLabel:_e,PsLink1:fe,PsToggle:he,PsTable2:be,DatePicker:ge,PsBadge:ve,PsInputWithRightIcon:Oe},layout:ee,props:{status:Object,items:Object,categories:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String,selected_price_type:String},setup(e){let i=l(!1);const N=e.selectedCategory||e.selectedPurchaseOption||e.selectedDate?l(!0):l(!1),U=l(!1),$=l(!0);let T=e.search?l(e.search):l(""),D=e.sort_field?l(e.sort_field):l(""),I=e.sort_order?l(e.sort_order):l("desc"),h=e.selectedCategory?l(e.selectedCategory.id):l(""),O=e.selectedPurchaseOption?l(e.selectedPurchaseOption.id):l(""),P=e.selectedDate?l(e.selectedDate):l(""),k=l([]),b=l(!1),F=l(),y=l(!1),S=l([]),C=l(!1),B=l();const H=l(),t=[{label:d("core__be_item_name"),field:"title",type:"String"},{label:d("core__be_seller_name"),field:"added_user_id@@name",type:"String",sort:!1},{label:d("core__be_email"),field:"added_user_id@@email",type:"String",sort:!1},{label:d("core__be_categories"),field:"category_id@@name",type:"String"},{label:d("core__be_total_offer"),field:"total_offer",type:"String",sort:!1},{label:d("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:d("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:d("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:d("core__be_sold_out_date"),field:"added_date",type:"Timestamp"},{label:d("detail_label"),field:"detail",type:"Action",sort:!1}];function R(r){if(e.selected_price_type==E.PRICE_RANGE){const o=parseFloat(r),m=parseInt(o);return m>5?"$".repeat(5):m<1?"$".repeat(1):"$".repeat(m)}if(e.selected_price_type==E.NORMAL_PRICE)return r}if(e.selected_price_type!=E.NO_PRICE){const r=t.findIndex(m=>m.field==="category_id@@name"),o={label:d("core__be_item_price"),field:"price",type:"Integer",action:"Action"};r!==-1&&t.splice(r+1,0,o)}function q(r){D.value=r.field,I.value=r.sort_order,w()}function M(){h.value="all",O.value="all",P.value="",w(),$.value=!1,setTimeout(()=>{$.value=!0},1)}function W(r){h.value=r,w(1)}function Z(r){P.value=r,w(1)}function J(r){O.value=r,w(1)}function K(r){T.value=r,w(1)}function Q(r){w(1,r)}function w(r=null,o=null){L.get(route("sold_out_item_report.index"),{sort_field:D.value,sort_order:I.value,page:r!=null?r:e.items.meta.current_page,row:o!=null?o:e.items.meta.per_page,search:T.value,category_filter:h.value,purchase_option_filter:O.value,date_filter:P.value},{preserveScroll:!0,preserveState:!0})}function z(r){b.value=!0,y.value=!0,ye(r,F.value,e.authUser.id).then(o=>{o.data.length?o.data.forEach(m=>{k.value.push(m)}):b.value=!1,y.value=!1})}function X(r=null){let o=k.value?k.value.length:0;(o==0||r==!0)&&z(o)}oe(F,_.debounce((r,o)=>{let m=0;k.value=[],z(m)},500));function Y(r){C.value=!0,y.value=!0,ke(r,e.authUser.id).then(o=>{o.data.length?o.data.forEach(m=>{S.value.push(m)}):C.value=!1,y.value=!1}).catch(function(o){o&&(y.value=!1,C.value=!1)})}function x(r=null){let o=S.value?S.value.length:0;(o==0||r==!0)&&Y(o)}return{reRenderDate:$,showFilter:N,clearFilter:U,columns:t,colFilterOptions:H,visible:i,handleSorting:q,handleSearchingSorting:w,handleCategoryfilter:W,handlePurchaseOptionFilter:J,handleDateFilter:Z,handleClearFilter:M,handleRow:Q,handleSearching:K,selected_cat:h,selected_purchase_option:O,selected_date:P,is_loading:y,dropdownClick:X,categories:k,category_loadmore_visible:b,catSearch:F,purchaseOptions:S,purchaseOptions_loadmore_visible:C,purchaseOptionsSearch:B,purchaseOptionDropdownClick:x,checkPriceFormat:R}},created(){},methods:{handleDetail(e){this.$inertia.get(route("sold_out_item_report.show",e))},FilterOptionshandle(e){L.put(route("sold_out_item_report.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("sold_out_item_report_module"),color:"text-primary-500"}]}}}),Pe=["href"],Se={class:"rounded-md shadow-xs w-56"},Fe={class:"pt-2 z-30"},$e=["onClick"],De={class:"flex flex-row items-center justify-between"},Ie={class:"mt-1 mx-1"},Re={class:"rounded-md shadow-xs w-56"},je={class:"pt-2 z-30"},Te=["onClick"],Be={class:"flex flex-row items-center justify-between"},He={key:0},Ve={key:1},Ae={key:2,class:"flex flex-row"},Ee={key:3};function Ne(e,i,N,U,$,T){const D=u("Head"),I=u("ps-breadcrumb-2"),h=u("ps-icon"),O=u("ps-text-button"),P=u("ps-icon-button"),k=u("ps-dropdown-select"),b=u("ps-label"),F=u("ps-input-with-right-icon"),y=u("ps-dropdown"),S=u("date-picker"),C=u("ps-badge"),B=u("ps-table2"),H=u("ps-layout");return n(),f(V,null,[s(D,{title:e.$t("sold_out_item_report_module")},null,8,["title"]),s(H,null,{default:a(()=>[s(I,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(B,{":row":e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_item"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:a(()=>[g("a",{href:e.route("sold_out_item_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[s(h,{name:"fileUpload",class:"mx-0.5 font-semibold"}),p(c(e.$t("core__be_export_btn")),1)],8,Pe)]),searchRight:a(()=>[e.showFilter?(n(),j(O,{key:0,onClick:i[0]||(i[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400",padding:"py-1 px-4"},{default:a(()=>[s(h,{name:"cross",class:"me-3"}),p(" "+c(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),s(P,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:i[1]||(i[1]=t=>e.showFilter=!e.showFilter)},{default:a(()=>[p(c(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:a(()=>[s(y,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:a(()=>[s(k,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:a(()=>[g("div",Se,[g("div",Fe,[g("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[2]||(i[2]=t=>e.handleCategoryfilter("all"))},[s(b,{class:"text-gray-200 ms-2"},{default:a(()=>[p(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(V,null,G(e.categories,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:R=>e.handleCategoryfilter(t.id)},[s(b,{class:A(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:a(()=>[p(c(t.name),1)]),_:2},1032,["class"])],8,$e))),128))])])]),loadmore:a(()=>[e.category_loadmore_visible?(n(),f("div",{key:0,onClick:i[3]||(i[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[g("div",De,[s(b,{class:"ms-2"},{default:a(()=>[p(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),s(h,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),filter:a(()=>[g("div",Ie,[s(F,{class:"w-full h-10",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":i[4]||(i[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:a(()=>[s(h,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),s(y,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:a(()=>[s(k,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:a(()=>[g("div",Re,[g("div",je,[g("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[5]||(i[5]=t=>e.handlePurchaseOptionFilter("all"))},[s(b,{class:"text-gray-200 ms-2"},{default:a(()=>[p(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(V,null,G(e.purchaseOptions,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:R=>e.handlePurchaseOptionFilter(t.id)},[s(b,{class:A(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:a(()=>[p(c(t.name),1)]),_:2},1032,["class"])],8,Te))),128))])])]),loadmore:a(()=>[e.purchaseOptions_loadmore_visible?(n(),f("div",{key:0,onClick:i[6]||(i[6]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[g("div",Be,[s(b,{class:"ms-2"},{default:a(()=>[p(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),s(h,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"]),e.reRenderDate?(n(),j(S,{key:0,onDatepick:e.handleDateFilter,class:A(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":i[7]||(i[7]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0)]),tableRow:a(t=>[t.field==e.itmPurchasedOption+"@@name"?(n(),f("span",He,[t.row[e.itmPurchasedOption+"@@name"]?(n(),j(C,{key:0,theme:"text-green-600 bg-green-50",class:""},{default:a(()=>[p(c(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field==e.itmItemType+"@@name"?(n(),f("span",Ve,[t.row[e.itmItemType+"@@name"]?(n(),j(C,{key:0,theme:"text-red-600 bg-red-50",class:""},{default:a(()=>[p(c(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field=="detail"?(n(),f("div",Ae,[s(O,{onClick:R=>e.handleDetail(t.row.id)},{default:a(()=>[p(c(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):v("",!0),t.field=="price"?(n(),f("div",Ee,c(e.checkPriceFormat(t.row.price)),1)):v("",!0)]),_:1},8,[":row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var St=we(Ce,[["render",Ne]]);export{St as default};
