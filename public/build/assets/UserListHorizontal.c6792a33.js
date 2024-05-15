import{i as C,o as d,c as v,a as s,b as r,w as l,m as I,g as x,q as c,t as n,f as y,F as P,z as k,O as N,r as _,C as L}from"./app.72d9fe45.js";import F from"./PsCard.c6bb6e2a.js";import H from"./PsLabel.dd7b9156.js";import V from"./PsButton.81d0ce1f.js";import B from"./PsIcon.c404b5b9.js";import z from"./RatingShow.f25d8e9c.js";import D from"./PsLabelCaption.9bd8d857.js";import E from"./PsRouteLink.ab373f40.js";import O from"./PsLoadingDialog.52bc8b7d.js";import{U as R}from"./User.0c3ba1a8.js";import{u as j}from"./UserListStore.846fce4f.js";import{U,u as q}from"./UserStore.e188dd03.js";import{P as M}from"./PsValueStore.46e374fe.js";import{U as T}from"./UserFollowHolder.8b598f9e.js";import{P as G}from"./ps_constants.ea9d0b33.js";import{u as W}from"./ProductStore.017d2a02.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./PsApiService.74841eb2.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./ProductParameterHolder.b9a2d040.js";import"./Phone.45f97258.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const J={name:"UserListHorizontal",components:{PsCard:F,PsLabel:H,PsButton:V,PsIcon:B,Rating:z,PsLabelCaption:D,PsRouteLink:E,PsLoadingDialog:O},props:{user:{type:R},onClick:Function,storeName:{type:String,default:""}},setup(o){const m=W("detail"),t=M().getLoginUserId(),f=C(),p=new T,a=new U().getFollowerUsers(),u=new U().getFollowingUsers();a.loginUserId=t,u.loginUserId=t;const i=j(o.storeName),g=q(o.storeName);async function h(w){t&&t!=G.NO_LOGIN_USER?(f.value.openModal(),w.isFollowed=="1"?f.value.message=k("other_profile__removing_user_from_follower_list"):f.value.message=k("other_profile__adding_user_to_follower_list"),p.userId=t,p.followedUserId=w.userId,await g.postUserFollow(p),S(),f.value.closeModal()):N.get(route("login"))}async function S(){o.storeName=="profile-follower"?await i.refleshUserFollowerFollowingList(t,a):o.storeName=="profile-following"?await i.refleshUserFollowerFollowingList(t,u):o.storeName=="top_rated_seller"?await i.refleshTopRatedSellerList(t):o.storeName=="userSearch"?await g.refleshUserSearchList(t,g.userparamHolder):await m.loadItem(o.storeName,t)}return{userListStore:i,followClick:h,LoginUserId:t,psloading:f}}},K={class:"shadow-sm relative bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg flex flex-col gap-4 p-4 mt-4"},Q={class:"flex gap-4"},X={class:"w-20 h-20 relative cursor-pointer"},Y={alt:"Placeholder",width:"15px",height:"10px",class:"w-full h-full rounded-full object-cover"},Z={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"},$={class:"grow flex flex-col gap-2 justify-center truncate"},ee={class:"flex gap-4 h-6"},oe={key:0,class:"cursor-pointer"},te=["href"],re={key:1,class:"cursor-pointer"},se=["href"],le=s("div",{class:"self-center hidden"},null,-1),ae={class:"grid grid-cols-2"},ie={class:"flex items-center gap-1 col-span-1 md:col-span-2 lg:col-span-1"},ne={class:"flex items-center gap-1"},de={class:"h-9"};function me(o,m,e,t,f,p){const a=_("ps-icon"),u=_("ps-route-link"),i=_("ps-label"),g=_("rating"),h=_("ps-button"),S=_("ps-loading-dialog"),w=L("lazy");return d(),v(P,null,[s("div",K,[s("div",Q,[r(u,{to:{name:"fe_other_profile",params:{userId:e.user.userId}}},{default:l(()=>[s("div",X,[I(s("img",Y,null,512),[[w,{src:o.$page.props.thumb1xUrl+"/"+e.user.userCoverPhoto,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_profile.png"}]]),e.user.isVerifybluemark=="1"?(d(),v("div",Z,[r(a,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):x("",!0)])]),_:1},8,["to"]),s("div",$,[r(u,{to:{name:"fe_other_profile",params:{userId:e.user.userId}},class:"cursor-pointer"},{default:l(()=>[r(i,{textColor:"text-lg font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:l(()=>[c(n(e.user.userName.length>17?e.user.userName.slice(0,17)+"...":e.user.userName),1)]),_:1})]),_:1},8,["to"]),r(u,{to:{name:"fe_review_list",query:{user_id:e.user.userId}}},{default:l(()=>[r(g,{rating:e.user?Number(e.user.overallRating):0,maxStars:5,iconColor:"text-feWarning-500",size:"1x"},null,8,["rating"])]),_:1},8,["to"]),s("div",ee,[e.user.isShowPhone=="1"&&e.user.userPhone?(d(),v("div",oe,[s("a",{href:"tel:"+e.user.userPhone},[r(a,{name:"phone",w:"24",h:"24"})],8,te)])):x("",!0),e.user.isShowEmail=="1"&&e.user.userEmail?(d(),v("div",re,[s("a",{href:"mailto:"+e.user.userEmail},[r(a,{name:"email",w:"24",h:"24"})],8,se)])):x("",!0)])]),le]),s("div",ae,[s("div",ie,[r(a,{class:"text-feSecondary-800 dark:text-feSecondary-50",name:"user-group-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),r(i,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:l(()=>[c(n(e.user?e.user.followerCount:"0")+" "+n(o.$t("profile__followers")),1)]),_:1})]),s("div",ne,[r(a,{class:"text-feSecondary-800 dark:text-feSecondary-50",name:"shoppingCart-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),r(i,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:l(()=>[c(n(e.user?e.user.activeItemCount:"0")+" "+n(o.$t("user__item")),1)]),_:1})])]),s("div",de,[e.user.userId==t.LoginUserId?(d(),y(h,{key:0,class:"absolute bottom-4 right-4 left-4",disabled:""},{default:l(()=>[c(n(o.$t("other_profile__follow")),1)]),_:1})):e.user.isFollowed=="0"?(d(),y(h,{key:1,class:"absolute bottom-4 right-4 left-4",onClick:m[0]||(m[0]=b=>t.LoginUserId==e.user.userId?"":t.followClick(e.user))},{default:l(()=>[c(n(o.$t("other_profile__follow")),1)]),_:1})):(d(),y(h,{key:2,class:"absolute bottom-4 right-4 left-4",onClick:m[1]||(m[1]=b=>t.followClick(e.user))},{default:l(()=>[c(n(o.$t("other_profile__following")),1)]),_:1}))])]),r(S,{ref:"psloading",isClickOut:!1},null,512)],64)}var Xe=A(J,[["render",me]]);export{Xe as default};
