import{S as le,i as ne,s as se,T as ie,a2 as oe,k as b,v as L,a as T,l as k,m as y,w as R,c as q,h as p,n as N,b as $,x as M,D as m,a3 as ce,t as A,d as J,f as S,y as Q,E as G,g as O,a8 as te,a9 as ae,q as E,r as I,u as V,A as P,e as F,a1 as U}from"../../../chunks/index-055277d2.js";import{T as ue,a as fe,C as _e}from"../../../chunks/TabBar-a7fa55d0.js";import{p as pe}from"../../../chunks/stores-b6abffbb.js";import"../../../chunks/logger-312c5320.js";import"../../../chunks/preload-helper-aa6bc0ce.js";import{u as W}from"../../../chunks/useQuery-ca1c607a.js";import{q as X}from"../../../chunks/query-77f2d5d9.js";import{A as re}from"../../../chunks/ActionButton-5acbbe55.js";function Y(o,e,t){const a=o.slice();return a[14]=e[t],a}function Z(o,e,t){const a=o.slice();return a[11]=e[t],a}function de(o){let e=o[17]+"",t;return{c(){t=E(e)},l(a){t=I(a,e)},m(a,l){$(a,t,l)},p(a,l){l&131072&&e!==(e=a[17]+"")&&V(t,e)},d(a){a&&p(t)}}}function me(o){let e,t;return e=new _e({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,l){M(e,a,l),t=!0},p(a,l){const n={};l&393216&&(n.$$scope={dirty:l,ctx:a}),e.$set(n)},i(a){t||(S(e.$$.fragment,a),t=!0)},o(a){A(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}function he(o){let e,t;return e=new fe({props:{tab:o[17],$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,l){M(e,a,l),t=!0},p(a,l){const n={};l&131072&&(n.tab=a[17]),l&393216&&(n.$$scope={dirty:l,ctx:a}),e.$set(n)},i(a){t||(S(e.$$.fragment,a),t=!0)},o(a){A(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}function ge(o){let e,t=[],a=new Map,l,n=o[2].data.reviews;const i=s=>s[14].review;for(let s=0;s<n.length;s+=1){let r=Y(o,n,s),c=i(r);a.set(c,t[s]=x(c,r))}return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"DIV",{class:!0});var r=y(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(p),this.h()},h(){N(e,"class","flex flex-col gap-6")},m(s,r){$(s,e,r);for(let c=0;c<t.length;c+=1)t[c].m(e,null);l=!0},p(s,r){r&68&&(n=s[2].data.reviews,O(),t=te(t,r,i,1,s,n,a,e,ae,x,null,Y),J())},i(s){if(!l){for(let r=0;r<n.length;r+=1)S(t[r]);l=!0}},o(s){for(let r=0;r<t.length;r+=1)A(t[r]);l=!1},d(s){s&&p(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function $e(o){let e,t,a=o[2].error+"",l;return{c(){e=b("span"),t=E("Klaida: "),l=E(a)},l(n){e=k(n,"SPAN",{});var i=y(e);t=I(i,"Klaida: "),l=I(i,a),i.forEach(p)},m(n,i){$(n,e,i),m(e,t),m(e,l)},p(n,i){i&4&&a!==(a=n[2].error+"")&&V(l,a)},i:P,o:P,d(n){n&&p(e)}}}function ve(o){let e,t;return{c(){e=b("span"),t=E("Kraunama...")},l(a){e=k(a,"SPAN",{});var l=y(e);t=I(l,"Kraunama..."),l.forEach(p)},m(a,l){$(a,e,l),m(e,t)},p:P,i:P,o:P,d(a){a&&p(e)}}}function be(o){let e,t,a,l;const n=[Ie,Ee,we],i=[];function s(r,c){return r[1].isLoading?0:r[1].error?1:2}return e=s(o),t=i[e]=n[e](o),{c(){t.c(),a=F()},l(r){t.l(r),a=F()},m(r,c){i[e].m(r,c),$(r,a,c),l=!0},p(r,c){let d=e;e=s(r),e===d?i[e].p(r,c):(O(),A(i[d],1,1,()=>{i[d]=null}),J(),t=i[e],t?t.p(r,c):(t=i[e]=n[e](r),t.c()),S(t,1),t.m(a.parentNode,a))},i(r){l||(S(t),l=!0)},o(r){A(t),l=!1},d(r){i[e].d(r),r&&p(a)}}}function ke(o){let e;return{c(){e=E("Naikinti")},l(t){e=I(t,"Naikinti")},m(t,a){$(t,e,a)},d(t){t&&p(e)}}}function x(o,e){let t,a,l,n=e[14].fk_reviewer+"",i,s,r=e[14].fk_renter+"",c,d,_,w=e[14].review+"",f,u,v,D,j,K;function H(){return e[9](e[14])}return v=new re({props:{class:"",onClick:H,$$slots:{default:[ke]},$$scope:{ctx:e}}}),{key:o,first:null,c(){t=b("div"),a=b("div"),l=b("p"),i=E(n),s=E(" -> "),c=E(r),d=T(),_=b("p"),f=E(w),u=T(),L(v.$$.fragment),D=T(),j=b("hr"),this.h()},l(h){t=k(h,"DIV",{class:!0});var g=y(t);a=k(g,"DIV",{class:!0});var C=y(a);l=k(C,"P",{class:!0});var B=y(l);i=I(B,n),s=I(B," -> "),c=I(B,r),B.forEach(p),d=q(C),_=k(C,"P",{});var z=y(_);f=I(z,w),z.forEach(p),C.forEach(p),u=q(g),R(v.$$.fragment,g),g.forEach(p),D=q(h),j=k(h,"HR",{}),this.h()},h(){N(l,"class","text-gray-500"),N(a,"class","border rounded shadow grow p-2"),N(t,"class","flex rounded gap-4"),this.first=t},m(h,g){$(h,t,g),m(t,a),m(a,l),m(l,i),m(l,s),m(l,c),m(a,d),m(a,_),m(_,f),m(t,u),M(v,t,null),$(h,D,g),$(h,j,g),K=!0},p(h,g){e=h,(!K||g&4)&&n!==(n=e[14].fk_reviewer+"")&&V(i,n),(!K||g&4)&&r!==(r=e[14].fk_renter+"")&&V(c,r),(!K||g&4)&&w!==(w=e[14].review+"")&&V(f,w);const C={};g&4&&(C.onClick=H),g&262144&&(C.$$scope={dirty:g,ctx:e}),v.$set(C)},i(h){K||(S(v.$$.fragment,h),K=!0)},o(h){A(v.$$.fragment,h),K=!1},d(h){h&&p(t),Q(v),h&&p(D),h&&p(j)}}}function we(o){let e,t=[],a=new Map,l,n=o[1].data.images;const i=s=>s[11].url;for(let s=0;s<n.length;s+=1){let r=Z(o,n,s),c=i(r);a.set(c,t[s]=ee(c,r))}return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"DIV",{class:!0});var r=y(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(p),this.h()},h(){N(e,"class","grid grid-cols-5 gap-10")},m(s,r){$(s,e,r);for(let c=0;c<t.length;c+=1)t[c].m(e,null);l=!0},p(s,r){r&34&&(n=s[1].data.images,O(),t=te(t,r,i,1,s,n,a,e,ae,ee,null,Z),J())},i(s){if(!l){for(let r=0;r<n.length;r+=1)S(t[r]);l=!0}},o(s){for(let r=0;r<t.length;r+=1)A(t[r]);l=!1},d(s){s&&p(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Ee(o){let e,t,a=o[1].error+"",l;return{c(){e=b("span"),t=E("Klaida: "),l=E(a)},l(n){e=k(n,"SPAN",{});var i=y(e);t=I(i,"Klaida: "),l=I(i,a),i.forEach(p)},m(n,i){$(n,e,i),m(e,t),m(e,l)},p(n,i){i&2&&a!==(a=n[1].error+"")&&V(l,a)},i:P,o:P,d(n){n&&p(e)}}}function Ie(o){let e,t;return{c(){e=b("span"),t=E("Kraunama...")},l(a){e=k(a,"SPAN",{});var l=y(e);t=I(l,"Kraunama..."),l.forEach(p)},m(a,l){$(a,e,l),m(e,t)},p:P,i:P,o:P,d(a){a&&p(e)}}}function ye(o){let e;return{c(){e=E("Naikinti")},l(t){e=I(t,"Naikinti")},m(t,a){$(t,e,a)},d(t){t&&p(e)}}}function ee(o,e){let t,a,l,n,i,s,r;function c(){return e[8](e[11])}return i=new re({props:{class:"w-full",onClick:c,$$slots:{default:[ye]},$$scope:{ctx:e}}}),{key:o,first:null,c(){t=b("div"),a=b("img"),n=T(),L(i.$$.fragment),s=T(),this.h()},l(d){t=k(d,"DIV",{class:!0});var _=y(t);a=k(_,"IMG",{class:!0,src:!0,alt:!0}),n=q(_),R(i.$$.fragment,_),s=q(_),_.forEach(p),this.h()},h(){N(a,"class","w-40 aspect-square mx-auto"),U(a.src,l=e[11].url)||N(a,"src",l),N(a,"alt","product"),N(t,"class","rounded space-y-4"),this.first=t},m(d,_){$(d,t,_),m(t,a),m(t,n),M(i,t,null),m(t,s),r=!0},p(d,_){e=d,(!r||_&2&&!U(a.src,l=e[11].url))&&N(a,"src",l);const w={};_&2&&(w.onClick=c),_&262144&&(w.$$scope={dirty:_,ctx:e}),i.$set(w)},i(d){r||(S(i.$$.fragment,d),r=!0)},o(d){A(i.$$.fragment,d),r=!1},d(d){d&&p(t),Q(i)}}}function Ne(o){let e,t,a,l,n,i,s;function r(f){o[7](f)}let c={tabs:["Nuotraukos","Atsiliepimai"],$$slots:{default:[he,({tab:f})=>({17:f}),({tab:f})=>f?131072:0]},$$scope:{ctx:o}};o[0]!==void 0&&(c.active=o[0]),t=new ue({props:c}),ie.push(()=>oe(t,"active",r));const d=[be,ve,$e,ge],_=[];function w(f,u){return f[0]==="Nuotraukos"?0:f[2].isLoading?1:f[2].error?2:3}return n=w(o),i=_[n]=d[n](o),{c(){e=b("div"),L(t.$$.fragment),l=T(),i.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var u=y(e);R(t.$$.fragment,u),l=q(u),i.l(u),u.forEach(p),this.h()},h(){N(e,"class","space-y-8")},m(f,u){$(f,e,u),M(t,e,null),m(e,l),_[n].m(e,null),s=!0},p(f,[u]){const v={};u&393216&&(v.$$scope={dirty:u,ctx:f}),!a&&u&1&&(a=!0,v.active=f[0],ce(()=>a=!1)),t.$set(v);let D=n;n=w(f),n===D?_[n].p(f,u):(O(),A(_[D],1,1,()=>{_[D]=null}),J(),i=_[n],i?i.p(f,u):(i=_[n]=d[n](f),i.c()),S(i,1),i.m(e,null))},i(f){s||(S(t.$$.fragment,f),S(i),s=!0)},o(f){A(t.$$.fragment,f),A(i),s=!1},d(f){f&&p(e),Q(t),_[n].d()}}}function Ae(o,e,t){let a,l,n;G(o,pe,u=>t(10,a=u));const i=W("imagesAPI",()=>fetch(`${a.url.origin}/api/db/images`).then(u=>u.json()));G(o,i,u=>t(1,l=u));const s=W("reviewsAPI",()=>fetch(`${a.url.origin}/api/db/reviews`).then(u=>u.json()));G(o,s,u=>t(2,n=u));let r="Nuotraukos";async function c(u){return(await fetch("/api/db/images",{method:"DELETE",body:JSON.stringify({url:u})})).ok?(setTimeout(()=>X.invalidateQueries("imagesAPI"),2e3),{state:"success",text:"I\u0161trinta!"}):{state:"error",text:"I\u0161trinti nepavyko!"}}async function d(u){return(await fetch("/api/db/reviews",{method:"DELETE",body:JSON.stringify({id:u})})).ok?(setTimeout(()=>X.invalidateQueries("reviewsAPI"),2e3),{state:"success",text:"I\u0161trinta!"}):{state:"error",text:"I\u0161trinti nepavyko!"}}function _(u){r=u,t(0,r)}return[r,l,n,i,s,c,d,_,u=>c(u.url),u=>d(u.id)]}class Le extends le{constructor(e){super(),ne(this,e,Ae,Ne,se,{})}}export{Le as default};