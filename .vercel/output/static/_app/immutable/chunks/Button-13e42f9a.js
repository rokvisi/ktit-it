import{S as ae,i as oe,s as ie,v as G,e as C,w as le,x as H,b,L as se,M as k,g as ce,t as M,y as J,d as re,f as j,h as f,N as L,O as ue,P as de,J as N,Q as P,R as Q,T as fe,F as me,k as X,a as _e,l as Y,m as Z,c as be,n as w,G as he,H as ge,I as ye}from"./index-055277d2.js";import{c as T,f as pe}from"./foundation-df9fccee.js";import{R as z,d as ke}from"./Ripple-35c8d717.js";import{B as Ce,A as Se}from"./index-ab2e5613.js";function K(n){let t;return{c(){t=X("div"),this.h()},l(o){t=Y(o,"DIV",{class:!0}),Z(t).forEach(f),this.h()},h(){w(t,"class","mdc-button__touch")},m(o,c){b(o,t,c)},d(o){o&&f(t)}}}function Be(n){let t,o,c,u;const r=n[27].default,l=me(r,n,n[29],null);let e=n[6]&&K();return{c(){t=X("div"),o=_e(),l&&l.c(),e&&e.c(),c=C(),this.h()},l(a){t=Y(a,"DIV",{class:!0}),Z(t).forEach(f),o=be(a),l&&l.l(a),e&&e.l(a),c=C(),this.h()},h(){w(t,"class","mdc-button__ripple")},m(a,s){b(a,t,s),b(a,o,s),l&&l.m(a,s),e&&e.m(a,s),b(a,c,s),u=!0},p(a,s){l&&l.p&&(!u||s&536870912)&&he(l,r,a,a[29],u?ye(r,a[29],s,null):ge(a[29]),null),a[6]?e||(e=K(),e.c(),e.m(c.parentNode,c)):e&&(e.d(1),e=null)},i(a){u||(j(l,a),u=!0)},o(a){M(l,a),u=!1},d(a){a&&f(t),a&&f(o),l&&l.d(a),e&&e.d(a),a&&f(c)}}}function Ee(n){let t,o,c;const u=[{use:[[z,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:T({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions",...n[11]})},{style:Object.entries(n[12]).map(W).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var r=n[9];function l(e){let a={$$slots:{default:[Be]},$$scope:{ctx:e}};for(let s=0;s<u.length;s+=1)a=P(a,u[s]);return{props:a}}return r&&(t=new r(l(n)),n[28](t),t.$on("click",n[21])),{c(){t&&G(t.$$.fragment),o=C()},l(e){t&&le(t.$$.fragment,e),o=C()},m(e,a){t&&H(t,e,a),b(e,o,a),c=!0},p(e,[a]){const s=a&6289919?se(u,[a&6094873&&{use:[[z,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[22].disabled,addClass:e[18],removeClass:e[19],addStyle:e[20]}],e[16],...e[0]]},a&133490&&{class:T({[e[1]]:!0,"mdc-button":!0,"mdc-button--raised":e[5]==="raised","mdc-button--unelevated":e[5]==="unelevated","mdc-button--outlined":e[5]==="outlined","smui-button--color-secondary":e[4]==="secondary","mdc-button--touch":e[6],"mdc-card__action":e[17]==="card:action","mdc-card__action--button":e[17]==="card:action","mdc-dialog__button":e[17]==="dialog:action","mdc-top-app-bar__navigation-icon":e[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":e[17]==="top-app-bar:action","mdc-snackbar__action":e[17]==="snackbar:actions","mdc-banner__secondary-action":e[17]==="banner"&&e[8],"mdc-banner__primary-action":e[17]==="banner"&&!e[8],"mdc-tooltip__action":e[17]==="tooltip:rich-actions",...e[11]})},a&4100&&{style:Object.entries(e[12]).map(W).concat([e[2]]).join(" ")},a&32768&&k(e[15]),a&16384&&k(e[14]),a&8192&&k(e[13]),a&128&&{href:e[7]},a&4194304&&k(e[22])]):{};if(a&536870976&&(s.$$scope={dirty:a,ctx:e}),r!==(r=e[9])){if(t){ce();const h=t;M(h.$$.fragment,1,0,()=>{J(h,1)}),re()}r?(t=new r(l(e)),e[28](t),t.$on("click",e[21]),G(t.$$.fragment),j(t.$$.fragment,1),H(t,o.parentNode,o)):t=null}else r&&t.$set(s)},i(e){c||(t&&j(t.$$.fragment,e),c=!0)},o(e){t&&M(t.$$.fragment,e),c=!1},d(e){n[28](null),e&&f(o),t&&J(t,e)}}}const W=([n,t])=>`${n}: ${t};`;function Ae(n,t,o){let c,u,r;const l=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let e=L(t,l),{$$slots:a={},$$scope:s}=t;const h=pe(ue());let{use:U=[]}=t,{class:D=""}=t,{style:O=""}=t,{ripple:R=!0}=t,{color:V="primary"}=t,{variant:q="text"}=t,{touch:v=!1}=t,{href:S=void 0}=t,{action:g="close"}=t,{defaultAction:B=!1}=t,{secondary:E=!1}=t,y,d={},m={},_=de("SMUI:button:context"),{component:F=S==null?Ce:Se}=t,A=e.disabled;N("SMUI:label:context","button"),N("SMUI:icon:context","button");function x(i){d[i]||o(11,d[i]=!0,d)}function $(i){(!(i in d)||d[i])&&o(11,d[i]=!1,d)}function ee(i,p){m[i]!=p&&(p===""||p==null?(delete m[i],o(12,m)):o(12,m[i]=p,m))}function te(){_==="banner"&&ke(I(),E?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function I(){return y.getElement()}function ne(i){fe[i?"unshift":"push"](()=>{y=i,o(10,y)})}return n.$$set=i=>{o(30,t=P(P({},t),Q(i))),o(22,e=L(t,l)),"use"in i&&o(0,U=i.use),"class"in i&&o(1,D=i.class),"style"in i&&o(2,O=i.style),"ripple"in i&&o(3,R=i.ripple),"color"in i&&o(4,V=i.color),"variant"in i&&o(5,q=i.variant),"touch"in i&&o(6,v=i.touch),"href"in i&&o(7,S=i.href),"action"in i&&o(23,g=i.action),"defaultAction"in i&&o(24,B=i.defaultAction),"secondary"in i&&o(8,E=i.secondary),"component"in i&&o(9,F=i.component),"$$scope"in i&&o(29,s=i.$$scope)},n.$$.update=()=>{o(15,c=_==="dialog:action"&&g!=null?{"data-mdc-dialog-action":g}:{action:t.action}),o(14,u=_==="dialog:action"&&B?{"data-mdc-dialog-button-default":""}:{default:t.default}),o(13,r=_==="banner"?{}:{secondary:t.secondary}),A!==e.disabled&&(I().blur(),o(26,A=e.disabled))},t=Q(t),[U,D,O,R,V,q,v,S,E,F,y,d,m,r,u,c,h,_,x,$,ee,te,e,g,B,I,A,a,ne,s]}class Ue extends ae{constructor(t){super(),oe(this,t,Ae,Ee,ie,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}export{Ue as B};