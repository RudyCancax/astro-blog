import{p as a}from"./hooks.module.D9Sbrd7S.js";import{l as f}from"./preact.module.5IcniKGG.js";var s=0;function i(o,t,l,d,c,u){var r,n,e={};for(n in t)n=="ref"?r=t[n]:e[n]=t[n];var _={type:o,props:e,key:l,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--s,__i:-1,__u:0,__source:c,__self:u};if(typeof o=="function"&&(r=o.defaultProps))for(n in r)e[n]===void 0&&(e[n]=r[n]);return f.vnode&&f.vnode(_),_}function h({messages:o}){const t=()=>o[Math.floor(Math.random()*o.length)],[l,d]=a(o[0]);return i("div",{class:"text-center",children:[i("h3",{class:"font-bold text-3xl",children:[l,"! Thank you for visiting! (island)"]}),i("button",{class:"bg-[#f59e0b] text-[#0d0d1d] font-bold text-xl px-4 py-2 rounded-md mt-4",onClick:()=>d(t()),children:"New Greeting"})]})}export{h as default};
