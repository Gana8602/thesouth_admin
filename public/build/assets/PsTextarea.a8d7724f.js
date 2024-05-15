import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{i as l,o as f,c,a as u,n as s}from"./app.72d9fe45.js";const i={name:"PsTextArea",props:{rows:{type:Number,default:3},placeholder:{type:String,default:""},value:{type:String,default:""},theme:{type:String,default:"text-feSecondary-500 dark:text-feSecondary-400"},rounded:{type:String,default:"rounded"},disabled:{type:Boolean,default:!1},disabledTheme:{type:String,default:" text-feSecondary-300 border-feSecondary-300 dark:border-feSecondary-800 dark:text-feSecondary-700 shadow-none placeholder-feSecondary-300 dark:placeholder-feSecondary-600"},defaultBorder:{type:String,default:"border border-feSecondary-200 hover:border-feSecondary-400 dark:border-feSecondary-400 hover:dark:border-feSecondary-50 focus:outline-none focus:border-none focus:ring-2 focus:ring-fePrimary-300 ring-fePrimary-300 placeholder-feSecondary-500 dark:placeholder-feSecondary-400"},errorBorder:{type:String,default:"border border-fePrimary-500 focus:border-fePrimary-500 focus:outline-none focus:border-none focus:ring-1 focus:ring-fePrimary-500-500 ring-fePrimary-500-500 placeholder-feSecondary-500 dark:placeholder-feSecondary-400"}},setup(o,{emit:r}){const e=l(!1);function a(d){r("update:value",d)}return{handleInput:a,isError:e}}},y={class:"w-full block"},S=["disabled","rows","value","placeholder"];function h(o,r,e,a,d,b){return f(),c("div",y,[u("textarea",{disabled:e.disabled,class:s(["w-full px-4 py-2 text-sm shadow-sm bg-transparent placeholder-feSecondary-500",e.disabled?[e.rounded,e.disabledTheme]:a.isError?[e.theme,e.rounded,e.errorBorder]:[e.theme,e.rounded,e.defaultBorder]]),rows:e.rows,value:e.value,placeholder:e.placeholder,onInput:r[0]||(r[0]=n=>a.handleInput(n.target.value))},null,42,S)])}var x=t(i,[["render",h]]);export{x as default};
