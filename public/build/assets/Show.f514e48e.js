import{A as u}from"./AppLayout.7d9782bb.js";import h from"./DeleteUserForm.2b59a68e.js";import{J as g}from"./SectionBorder.6488644e.js";import w from"./LogoutOtherBrowserSessionsForm.da7c9e75.js";import F from"./TwoFactorAuthenticationForm.9c976310.js";import y from"./UpdatePasswordForm.0f7d21af.js";import $ from"./UpdateProfileInformationForm.6d25e73a.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{d as v,f as b,w as p,r as t,o as r,a as n,c as a,b as o,g as m,F as j}from"./app.72d9fe45.js";import"./ActionSection.a7e1dd1e.js";import"./SectionTitle.ed5ec384.js";import"./DialogModal.b696a932.js";import"./Modal.fc651f73.js";import"./DangerButton.3cfb83d8.js";import"./Input.ddf9edd3.js";import"./InputError.62ee6c53.js";import"./SecondaryButton.bfa2d643.js";import"./ActionMessage.2eb3d358.js";import"./Button.315592c9.js";import"./FormSection.8d6e3316.js";import"./Label.41f2d628.js";const x=v({props:["sessions"],components:{AppLayout:u,DeleteUserForm:h,JetSectionBorder:g,LogoutOtherBrowserSessionsForm:w,TwoFactorAuthenticationForm:F,UpdatePasswordForm:y,UpdateProfileInformationForm:$}}),B=n("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),P={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},A={key:0},U={key:1},C={key:2};function N(e,S,V,D,I,J){const i=t("update-profile-information-form"),s=t("jet-section-border"),c=t("update-password-form"),_=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),f=t("delete-user-form"),l=t("app-layout");return r(),b(l,{title:"Profile"},{header:p(()=>[B]),default:p(()=>[n("div",null,[n("div",P,[e.$page.props.jetstream.canUpdateProfileInformation?(r(),a("div",A,[o(i,{user:e.$page.props.user},null,8,["user"]),o(s)])):m("",!0),e.$page.props.jetstream.canUpdatePassword?(r(),a("div",U,[o(c,{class:"mt-10 sm:mt-0"}),o(s)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),a("div",C,[o(_,{class:"mt-10 sm:mt-0"}),o(s)])):m("",!0),o(d,{sessions:e.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(r(),a(j,{key:3},[o(s),o(f,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}var ao=k(x,[["render",N]]);export{ao as default};
