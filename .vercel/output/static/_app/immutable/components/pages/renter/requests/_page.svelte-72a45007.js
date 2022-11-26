import{S as pe,i as de,s as me,k as y,l as Q,m as I,h as p,b as _,t as O,d as G,f as $,E as _e,g as J,n as w,a8 as he,a9 as $e,q as E,r as C,D as b,A as L,e as S,v as R,a as q,w as D,c as A,x as P,y as H,a1 as te,u as F,a7 as ve}from"../../../../chunks/index-055277d2.js";import{S as be,c as X,w as se,x as ge}from"../../../../chunks/logger-312c5320.js";import"../../../../chunks/preload-helper-aa6bc0ce.js";import{r as Oe}from"../../../../chunks/index-ca34a969.js";import{Q as ke,u as we}from"../../../../chunks/useQueryClient-977cb811.js";import{_ as ye}from"../../../../chunks/index-default-728b491c.js";import{l as Qe,A as Ee,C as ce,P as Ce,H as Ie}from"../../../../chunks/Header-6fed1335.js";import{U as fe}from"../../../../chunks/UserIcon-2d31419b.js";import{C as qe}from"../../../../chunks/ActionIcons-b3098cee.js";import{A as re}from"../../../../chunks/ActionButton-d85b6509.js";class Ae extends be{constructor(e,t){super(),this.client=e,this.queries=[],this.result=[],this.observers=[],this.observersMap={},t&&this.setQueries(t)}onSubscribe(){this.listeners.length===1&&this.observers.forEach(e=>{e.subscribe(t=>{this.onUpdate(e,t)})})}onUnsubscribe(){this.listeners.length||this.destroy()}destroy(){this.listeners=[],this.observers.forEach(e=>{e.destroy()})}setQueries(e,t){this.queries=e,this.updateObservers(t)}getCurrentResult(){return this.result}getOptimisticResult(e){return this.findMatchingObservers(e).map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions))}findMatchingObservers(e){const t=this.observers,r=e.map(u=>this.client.defaultQueryObserverOptions(u)),n=r.flatMap(u=>{const d=t.find(f=>f.options.queryHash===u.queryHash);return d!=null?[{defaultedQueryOptions:u,observer:d}]:[]}),l=n.map(u=>u.defaultedQueryOptions.queryHash),i=r.filter(u=>!l.includes(u.queryHash)),o=t.filter(u=>!n.some(d=>d.observer===u)),s=i.map((u,d)=>{if(u.keepPreviousData){const f=o[d];if(f!==void 0)return{defaultedQueryOptions:u,observer:f}}return{defaultedQueryOptions:u,observer:this.getObserver(u)}}),a=(u,d)=>r.indexOf(u.defaultedQueryOptions)-r.indexOf(d.defaultedQueryOptions);return n.concat(s).sort(a)}getObserver(e){const t=this.client.defaultQueryObserverOptions(e),r=this.observersMap[t.queryHash];return r!=null?r:new ke(this.client,t)}updateObservers(e){X.batch(()=>{const t=this.observers,r=this.findMatchingObservers(this.queries);r.forEach(s=>s.observer.setOptions(s.defaultedQueryOptions,e));const n=r.map(s=>s.observer),l=Object.fromEntries(n.map(s=>[s.options.queryHash,s])),i=n.map(s=>s.getCurrentResult()),o=n.some((s,a)=>s!==t[a]);t.length===n.length&&!o||(this.observers=n,this.observersMap=l,this.result=i,this.hasListeners()&&(se(t,n).forEach(s=>{s.destroy()}),se(n,t).forEach(s=>{s.subscribe(a=>{this.onUpdate(s,a)})}),this.notify()))})}onUpdate(e,t){const r=this.observers.indexOf(e);r!==-1&&(this.result=ge(this.result,r,t),this.notify())}notify(){X.batch(()=>{this.listeners.forEach(e=>{e(this.result)})})}}function Me(c){const e=we();function t(o){return o.map(s=>{const a=e.defaultQueryObserverOptions(s);return a.optimisticResults=!0,a})}const r=t(c),n=new Ae(e,r),{subscribe:l}=Oe(n.getCurrentResult(),o=>n.subscribe(X.batchCalls(o)));return{subscribe:l,setQueries:o=>{if(n.hasListeners()){const s=t(o);n.setQueries(s,{listeners:!1})}}}}function ne(c,e,t){const r=c.slice();return r[9]=e[t],r}function le(c,e,t){const r=c.slice();return r[12]=e[t],r}function Re(c){let e,t=[],r=new Map,n,l=c[0];const i=o=>o[9].id;for(let o=0;o<l.length;o+=1){let s=ne(c,l,o),a=i(s);r.set(a,t[o]=ue(a,s))}return{c(){e=y("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=Q(o,"DIV",{class:!0});var s=I(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(p),this.h()},h(){w(e,"class","flex flex-col gap-8 mb-10")},m(o,s){_(o,e,s);for(let a=0;a<t.length;a+=1)t[a].m(e,null);n=!0},p(o,s){s&11&&(l=o[0],J(),t=he(t,s,i,1,o,l,r,e,$e,ue,null,ne),G())},i(o){if(!n){for(let s=0;s<l.length;s+=1)$(t[s]);n=!0}},o(o){for(let s=0;s<t.length;s+=1)O(t[s]);n=!1},d(o){o&&p(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function De(c){let e,t;return{c(){e=y("p"),t=E("\u0160iuo metu u\u017Esakym\u0173 n\u0117ra!")},l(r){e=Q(r,"P",{});var n=I(e);t=C(n,"\u0160iuo metu u\u017Esakym\u0173 n\u0117ra!"),n.forEach(p)},m(r,n){_(r,e,n),b(e,t)},p:L,i:L,o:L,d(r){r&&p(e)}}}function ie(c){let e,t,r,n,l,i;return t=new qe({props:{variant:"outlined",padded:!0,$$slots:{default:[Ve]},$$scope:{ctx:c}}}),n=new Ee({props:{$$slots:{default:[Le]},$$scope:{ctx:c}}}),{c(){e=y("div"),R(t.$$.fragment),r=q(),R(n.$$.fragment),l=q(),this.h()},l(o){e=Q(o,"DIV",{class:!0});var s=I(e);D(t.$$.fragment,s),r=A(s),D(n.$$.fragment,s),l=A(s),s.forEach(p),this.h()},h(){w(e,"class","space-y-2")},m(o,s){_(o,e,s),P(t,e,null),b(e,r),P(n,e,null),b(e,l),i=!0},p(o,s){const a={};s&32769&&(a.$$scope={dirty:s,ctx:o}),t.$set(a);const u={};s&32771&&(u.$$scope={dirty:s,ctx:o}),n.$set(u)},i(o){i||($(t.$$.fragment,o),$(n.$$.fragment,o),i=!0)},o(o){O(t.$$.fragment,o),O(n.$$.fragment,o),i=!1},d(o){o&&p(e),H(t),H(n)}}}function Pe(c){let e;return{c(){e=E("Priimti")},l(t){e=C(t,"Priimti")},m(t,r){_(t,e,r)},d(t){t&&p(e)}}}function He(c){let e;return{c(){e=E("Atmesti")},l(t){e=C(t,"Atmesti")},m(t,r){_(t,e,r)},d(t){t&&p(e)}}}function Ne(c){let e,t,r,n,l=c[9].rentee+"",i,o,s,a,u,d=c[9].itemName+"",f,h,g,k,B,T,M,N,W,V,j;t=new fe({props:{class:"w-6 h-6"}});function Y(){return c[6](c[9])}N=new re({props:{class:"w-full",onClick:Y,$$slots:{default:[Pe]},$$scope:{ctx:c}}});function Z(){return c[7](c[9])}return V=new re({props:{class:"w-full",onClick:Z,$$slots:{default:[He]},$$scope:{ctx:c}}}),{c(){e=y("div"),R(t.$$.fragment),r=q(),n=y("span"),i=E(l),o=E(" nori nuomuotis:"),s=q(),a=y("div"),u=y("p"),f=E(d),h=q(),g=y("div"),k=y("img"),T=q(),M=y("div"),R(N.$$.fragment),W=q(),R(V.$$.fragment),this.h()},l(m){e=Q(m,"DIV",{class:!0});var v=I(e);D(t.$$.fragment,v),r=A(v),n=Q(v,"SPAN",{});var K=I(n);i=C(K,l),o=C(K," nori nuomuotis:"),K.forEach(p),v.forEach(p),s=A(m),a=Q(m,"DIV",{class:!0});var U=I(a);u=Q(U,"P",{class:!0});var x=I(u);f=C(x,d),x.forEach(p),h=A(U),g=Q(U,"DIV",{class:!0});var ee=I(g);k=Q(ee,"IMG",{class:!0,src:!0,alt:!0}),ee.forEach(p),U.forEach(p),T=A(m),M=Q(m,"DIV",{class:!0});var z=I(M);D(N.$$.fragment,z),W=A(z),D(V.$$.fragment,z),z.forEach(p),this.h()},h(){w(e,"class","flex gap-2 text-xl border-b pb-4"),w(u,"class","text-lg text-gray-700"),w(k,"class","w-40 aspect-square rounded"),te(k.src,B=c[9].image_url)||w(k,"src",B),w(k,"alt","product"),w(g,"class","inline-block border p-4"),w(a,"class","space-y-4"),w(M,"class","flex gap-16 border-t pt-4")},m(m,v){_(m,e,v),P(t,e,null),b(e,r),b(e,n),b(n,i),b(n,o),_(m,s,v),_(m,a,v),b(a,u),b(u,f),b(a,h),b(a,g),b(g,k),_(m,T,v),_(m,M,v),P(N,M,null),b(M,W),P(V,M,null),j=!0},p(m,v){c=m,(!j||v&1)&&l!==(l=c[9].rentee+"")&&F(i,l),(!j||v&1)&&d!==(d=c[9].itemName+"")&&F(f,d),(!j||v&1&&!te(k.src,B=c[9].image_url))&&w(k,"src",B);const K={};v&1&&(K.onClick=Y),v&32768&&(K.$$scope={dirty:v,ctx:c}),N.$set(K);const U={};v&1&&(U.onClick=Z),v&32768&&(U.$$scope={dirty:v,ctx:c}),V.$set(U)},i(m){j||($(t.$$.fragment,m),$(N.$$.fragment,m),$(V.$$.fragment,m),j=!0)},o(m){O(t.$$.fragment,m),O(N.$$.fragment,m),O(V.$$.fragment,m),j=!1},d(m){m&&p(e),H(t),m&&p(s),m&&p(a),m&&p(T),m&&p(M),H(N),H(V)}}}function Ve(c){let e,t;return e=new ce({props:{class:"flex flex-col gap-4",$$slots:{default:[Ne]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){P(e,r,n),t=!0},p(r,n){const l={};n&32769&&(l.$$scope={dirty:n,ctx:r}),e.$set(l)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){H(e,r)}}}function Ue(c){let e,t=c[9].rentee+"",r;return{c(){e=E("Atsiliepimai apie "),r=E(t)},l(n){e=C(n,"Atsiliepimai apie "),r=C(n,t)},m(n,l){_(n,e,l),_(n,r,l)},p(n,l){l&1&&t!==(t=n[9].rentee+"")&&F(r,t)},d(n){n&&p(e),n&&p(r)}}}function Se(c){let e;return{c(){e=E("Kraunama...")},l(t){e=C(t,"Kraunama...")},m(t,r){_(t,e,r)},p:L,i:L,o:L,d(t){t&&p(e)}}}function je(c){let e,t,r,n=c[1][c[9].rentee].data.reviews.length===0&&ae(),l=c[1][c[9].rentee].data.reviews,i=[];for(let s=0;s<l.length;s+=1)i[s]=oe(le(c,l,s));const o=s=>O(i[s],1,1,()=>{i[s]=null});return{c(){n&&n.c(),e=q();for(let s=0;s<i.length;s+=1)i[s].c();t=S()},l(s){n&&n.l(s),e=A(s);for(let a=0;a<i.length;a+=1)i[a].l(s);t=S()},m(s,a){n&&n.m(s,a),_(s,e,a);for(let u=0;u<i.length;u+=1)i[u].m(s,a);_(s,t,a),r=!0},p(s,a){if(s[1][s[9].rentee].data.reviews.length===0?n||(n=ae(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),a&3){l=s[1][s[9].rentee].data.reviews;let u;for(u=0;u<l.length;u+=1){const d=le(s,l,u);i[u]?(i[u].p(d,a),$(i[u],1)):(i[u]=oe(d),i[u].c(),$(i[u],1),i[u].m(t.parentNode,t))}for(J(),u=l.length;u<i.length;u+=1)o(u);G()}},i(s){if(!r){for(let a=0;a<l.length;a+=1)$(i[a]);r=!0}},o(s){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)O(i[a]);r=!1},d(s){n&&n.d(s),s&&p(e),ve(i,s),s&&p(t)}}}function ae(c){let e;return{c(){e=E("Atsiliepim\u0173 apie \u0161\u012F vartotoj\u0105 n\u0117ra.")},l(t){e=C(t,"Atsiliepim\u0173 apie \u0161\u012F vartotoj\u0105 n\u0117ra.")},m(t,r){_(t,e,r)},d(t){t&&p(e)}}}function oe(c){let e,t,r,n,l=c[12].fk_reviewer+"",i,o,s,a=c[12].review+"",u,d,f;return r=new fe({props:{class:"w-6 h-6"}}),{c(){e=y("div"),t=y("div"),R(r.$$.fragment),n=q(),i=E(l),o=E(":"),s=q(),u=E(a),d=q(),this.h()},l(h){e=Q(h,"DIV",{class:!0});var g=I(e);t=Q(g,"DIV",{class:!0});var k=I(t);D(r.$$.fragment,k),n=A(k),i=C(k,l),o=C(k,":"),k.forEach(p),s=A(g),u=C(g,a),d=A(g),g.forEach(p),this.h()},h(){w(t,"class","flex gap-2"),w(e,"class","flex items-center gap-8")},m(h,g){_(h,e,g),b(e,t),P(r,t,null),b(t,n),b(t,i),b(t,o),b(e,s),b(e,u),b(e,d),f=!0},p(h,g){(!f||g&3)&&l!==(l=h[12].fk_reviewer+"")&&F(i,l),(!f||g&3)&&a!==(a=h[12].review+"")&&F(u,a)},i(h){f||($(r.$$.fragment,h),f=!0)},o(h){O(r.$$.fragment,h),f=!1},d(h){h&&p(e),H(r)}}}function Ke(c){let e,t,r,n;const l=[je,Se],i=[];function o(s,a){return s[1][s[9].rentee]&&s[1][s[9].rentee].status==="success"?0:1}return e=o(c),t=i[e]=l[e](c),{c(){t.c(),r=S()},l(s){t.l(s),r=S()},m(s,a){i[e].m(s,a),_(s,r,a),n=!0},p(s,a){let u=e;e=o(s),e===u?i[e].p(s,a):(J(),O(i[u],1,1,()=>{i[u]=null}),G(),t=i[e],t?t.p(s,a):(t=i[e]=l[e](s),t.c()),$(t,1),t.m(r.parentNode,r))},i(s){n||($(t),n=!0)},o(s){O(t),n=!1},d(s){i[e].d(s),s&&p(r)}}}function Be(c){let e,t,r,n;return e=new Ie({props:{$$slots:{default:[Ue]},$$scope:{ctx:c}}}),r=new ce({props:{$$slots:{default:[Ke]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment),t=q(),R(r.$$.fragment)},l(l){D(e.$$.fragment,l),t=A(l),D(r.$$.fragment,l)},m(l,i){P(e,l,i),_(l,t,i),P(r,l,i),n=!0},p(l,i){const o={};i&32769&&(o.$$scope={dirty:i,ctx:l}),e.$set(o);const s={};i&32771&&(s.$$scope={dirty:i,ctx:l}),r.$set(s)},i(l){n||($(e.$$.fragment,l),$(r.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),O(r.$$.fragment,l),n=!1},d(l){H(e,l),l&&p(t),H(r,l)}}}function Le(c){let e,t;return e=new Ce({props:{color:"secondary",$$slots:{default:[Be]},$$scope:{ctx:c}}}),{c(){R(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){P(e,r,n),t=!0},p(r,n){const l={};n&32771&&(l.$$scope={dirty:n,ctx:r}),e.$set(l)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){H(e,r)}}}function ue(c,e){let t,r,n,l=e[9].status==="pending"&&ie(e);return{key:c,first:null,c(){t=S(),l&&l.c(),r=S(),this.h()},l(i){t=S(),l&&l.l(i),r=S(),this.h()},h(){this.first=t},m(i,o){_(i,t,o),l&&l.m(i,o),_(i,r,o),n=!0},p(i,o){e=i,e[9].status==="pending"?l?(l.p(e,o),o&1&&$(l,1)):(l=ie(e),l.c(),$(l,1),l.m(r.parentNode,r)):l&&(J(),O(l,1,1,()=>{l=null}),G())},i(i){n||($(l),n=!0)},o(i){O(l),n=!1},d(i){i&&p(t),l&&l.d(i),i&&p(r)}}}function Te(c){let e,t,r,n,l;const i=[De,Re],o=[];function s(a,u){return u&1&&(t=null),t==null&&(t=a[0].filter(Fe).length===0),t?0:1}return r=s(c,-1),n=o[r]=i[r](c),{c(){e=y("div"),n.c()},l(a){e=Q(a,"DIV",{});var u=I(e);n.l(u),u.forEach(p)},m(a,u){_(a,e,u),o[r].m(e,null),l=!0},p(a,[u]){let d=r;r=s(a,u),r===d?o[r].p(a,u):(J(),O(o[d],1,1,()=>{o[d]=null}),G(),n=o[r],n?n.p(a,u):(n=o[r]=i[r](a),n.c()),$(n,1),n.m(e,null))},i(a){l||($(n),l=!0)},o(a){O(n),l=!1},d(a){a&&p(e),o[r].d()}}}const Fe=c=>c.status==="pending";function Ge(c,e,t){let r,{data:n}=e,l=n.requests;const i=ye.uniq(l,!1,f=>f.rentee).map(f=>f.rentee),o=Me(i.map(f=>({queryKey:[f,"Reviews"],queryFn:()=>fetch(`/api/db/reviews?${Qe.stringify({user:f})}`).then(h=>h.json())})));_e(c,o,f=>t(5,r=f));const s={};async function a(f,h,g,k,B){return(await fetch("/api/db/requests",{method:"PUT",body:JSON.stringify({requestId:f,action:h,itemId:g,renter:k,rentee:B})})).ok?(setTimeout(()=>{t(0,l=l.filter(M=>M.id!=f))},3e3),{state:"success",text:h==="accept"?"Priimta!":"Atmesta!"}):{state:"error",text:"Klaida!"}}const u=f=>a(f.id,"accept",f.itemId,f.renter,f.rentee),d=f=>a(f.id,"refuse",f.itemId,f.renter,f.rentee);return c.$$set=f=>{"data"in f&&t(4,n=f.data)},c.$$.update=()=>{if(c.$$.dirty&32)for(let f=0;f<i.length;++f)t(1,s[i[f]]=r[f],s)},[l,s,o,a,n,r,u,d]}class rt extends pe{constructor(e){super(),de(this,e,Ge,Te,me,{data:4})}}export{rt as default};