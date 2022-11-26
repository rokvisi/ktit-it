import{_ as T}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Me,i as He,s as We,a as Xe,e as z,c as Ye,b as H,g as ie,t as K,d as le,f as x,h as F,j as Qe,o as be,k as Ze,l as et,m as tt,n as ge,p as N,q as rt,r as nt,u as at,v as W,w as Re,x as X,y as Y,z as qe}from"./chunks/index-055277d2.js";import{g as Ce,f as Be,s as M,a as ve,b as st,i as ot}from"./chunks/singletons-fe881faa.js";class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(e,t){this.status=e,this.location=t}}function it(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function lt(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(a,e){const t=new URL(a);for(const c of ct){let i=t[c];Object.defineProperty(t,c,{get(){return e(),i},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,i,p)=>p(a,i),ut(t),t}function ut(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(c)}return Se(a,e)};const oe=new Map;function pt(a,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(i+=`[data-hash="${dt(t.body)}"]`);const p=document.querySelector(i);if(p!=null&&p.textContent){const{body:r,...u}=JSON.parse(p.textContent),y=p.getAttribute("data-ttl");return y&&oe.set(e,{body:r,init:u,ttl:1e3*Number(y)}),Promise.resolve(new Response(r,u))}return Se(a,t)}function ht(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Se(a,e)}const mt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(a){const e=[],t=[];let c=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(gt).map((p,r,u)=>{const y=decodeURIComponent(p),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(y);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=r===u.length-1;return y&&"/"+y.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const D=mt.exec(L);if(!D)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,V,q]=D;return e.push(V),t.push(q),I?"(.*?)":"([^/]+?)"}return b&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function gt(a){return!/^\([^)]+\)$/.test(a)}function wt(a,e,t,c){const i={};for(let p=0;p<e.length;p+=1){const r=e[p],u=t[p],y=a[p+1]||"";if(u){const _=c[u];if(!_)throw new Error(`Missing "${u}" param matcher`);if(!_(y))return}i[r]=y}return i}function yt(a,e,t,c){const i=new Set(e);return Object.entries(t).map(([u,[y,_,b]])=>{const{pattern:L,names:R,types:D}=_t(u),I={id:u,exec:V=>{const q=L.exec(V);if(q)return wt(q,R,D,c)},errors:[1,...b||[]].map(V=>a[V]),layouts:[0,..._||[]].map(r),leaf:p(y)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function p(u){const y=u<0;return y&&(u=~u),[y,a[u]]}function r(u){return u===void 0?u:[i.has(u),a[u]]}}function bt(a){let e,t,c;var i=a[0][0];function p(r){return{props:{data:r[2],form:r[1]}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,u){e&&X(e,r,u),H(r,t,u),c=!0},p(r,u){const y={};if(u&4&&(y.data=r[2]),u&2&&(y.form=r[1]),i!==(i=r[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(r)),W(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function vt(a){let e,t,c;var i=a[0][0];function p(r){return{props:{data:r[2],$$slots:{default:[Et]},$$scope:{ctx:r}}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,u){e&&X(e,r,u),H(r,t,u),c=!0},p(r,u){const y={};if(u&4&&(y.data=r[2]),u&523&&(y.$$scope={dirty:u,ctx:r}),i!==(i=r[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(r)),W(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Et(a){let e,t,c;var i=a[0][1];function p(r){return{props:{data:r[3],form:r[1]}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,u){e&&X(e,r,u),H(r,t,u),c=!0},p(r,u){const y={};if(u&8&&(y.data=r[3]),u&2&&(y.form=r[1]),i!==(i=r[0][1])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(r)),W(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function ze(a){let e,t=a[5]&&Ke(a);return{c(){e=Ze("div"),t&&t.c(),this.h()},l(c){e=et(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=tt(e);t&&t.l(i),i.forEach(F),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(c,i){H(c,e,i),t&&t.m(e,null)},p(c,i){c[5]?t?t.p(c,i):(t=Ke(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&F(e),t&&t.d()}}}function Ke(a){let e;return{c(){e=rt(a[6])},l(t){e=nt(t,a[6])},m(t,c){H(t,e,c)},p(t,c){c&64&&at(e,t[6])},d(t){t&&F(e)}}}function kt(a){let e,t,c,i,p;const r=[vt,bt],u=[];function y(b,L){return b[0][1]?0:1}e=y(a),t=u[e]=r[e](a);let _=a[4]&&ze(a);return{c(){t.c(),c=Xe(),_&&_.c(),i=z()},l(b){t.l(b),c=Ye(b),_&&_.l(b),i=z()},m(b,L){u[e].m(b,L),H(b,c,L),_&&_.m(b,L),H(b,i,L),p=!0},p(b,[L]){let R=e;e=y(b),e===R?u[e].p(b,L):(ie(),K(u[R],1,1,()=>{u[R]=null}),le(),t=u[e],t?t.p(b,L):(t=u[e]=r[e](b),t.c()),x(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,L):(_=ze(b),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(b){p||(x(t),p=!0)},o(b){K(t),p=!1},d(b){u[e].d(b),b&&F(c),_&&_.d(b),b&&F(i)}}}function Rt(a,e,t){let{stores:c}=e,{page:i}=e,{components:p}=e,{form:r}=e,{data_0:u=null}=e,{data_1:y=null}=e;Qe(c.page.notify);let _=!1,b=!1,L=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,L=document.title||"untitled page"))});return t(4,_=!0),R}),a.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,i=R.page),"components"in R&&t(0,p=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,y=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&c.page.set(i)},[p,r,u,y,_,b,L,c,i]}class St extends Me{constructor(e){super(),He(this,e,Rt,kt,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt={},ce=[()=>T(()=>import("./chunks/0-742fa498.js"),["chunks\\0-742fa498.js","components\\pages\\_layout.svelte-66aa4bbd.js","assets\\_layout-3ba9a0e6.css","chunks\\index-055277d2.js","chunks\\Button-13e42f9a.js","chunks\\foundation-df9fccee.js","chunks\\Ripple-35c8d717.js","chunks\\tslib.es6-61163658.js","chunks\\index-ab2e5613.js","chunks\\index-98bda15b.js","chunks\\stores-b6abffbb.js","chunks\\singletons-fe881faa.js","chunks\\index-ca34a969.js","chunks\\query-77f2d5d9.js","chunks\\logger-312c5320.js","chunks\\preload-helper-aa6bc0ce.js"],import.meta.url),()=>T(()=>import("./chunks/1-bc0ea51b.js"),["chunks\\1-bc0ea51b.js","components\\error.svelte-1ed7a298.js","chunks\\index-055277d2.js","chunks\\stores-b6abffbb.js","chunks\\singletons-fe881faa.js","chunks\\index-ca34a969.js"],import.meta.url),()=>T(()=>import("./chunks/2-28fb68cb.js"),["chunks\\2-28fb68cb.js","components\\pages\\_page.svelte-f8d79259.js","chunks\\index-055277d2.js"],import.meta.url),()=>T(()=>import("./chunks/3-6d078da7.js"),["chunks\\3-6d078da7.js","components\\pages\\auth\\_page.svelte-3b4298c6.js","chunks\\index-055277d2.js","chunks\\Textfield-9ed3423a.js","chunks\\Ripple-35c8d717.js","chunks\\tslib.es6-61163658.js","chunks\\foundation-df9fccee.js","chunks\\index-ca34a969.js","chunks\\classAdderBuilder-070e527c.js","chunks\\index-ab2e5613.js","chunks\\Button-13e42f9a.js","chunks\\index-98bda15b.js","chunks\\ActionIcons-2764f915.js","chunks\\CircularProgress-2aa6a19e.js"],import.meta.url),()=>T(()=>import("./chunks/4-1a859a6c.js"),["chunks\\4-1a859a6c.js","components\\pages\\mod\\_page.svelte-76cbddc3.js","chunks\\index-055277d2.js","chunks\\TabBar-a7fa55d0.js","chunks\\tslib.es6-61163658.js","chunks\\stores-b6abffbb.js","chunks\\singletons-fe881faa.js","chunks\\index-ca34a969.js","chunks\\logger-312c5320.js","chunks\\preload-helper-aa6bc0ce.js","chunks\\useQuery-ca1c607a.js","chunks\\useQueryClient-977cb811.js","chunks\\query-77f2d5d9.js","chunks\\ActionButton-5acbbe55.js","chunks\\CircularProgress-2aa6a19e.js","chunks\\foundation-df9fccee.js"],import.meta.url),()=>T(()=>import("./chunks/5-50a64242.js"),["chunks\\5-50a64242.js","components\\pages\\renter\\_page.svelte-1a8a571a.js","chunks\\index-055277d2.js","chunks\\ActionButton-5acbbe55.js","chunks\\CircularProgress-2aa6a19e.js","chunks\\foundation-df9fccee.js","chunks\\tslib.es6-61163658.js","chunks\\Textfield-9ed3423a.js","chunks\\Ripple-35c8d717.js","chunks\\index-ca34a969.js","chunks\\classAdderBuilder-070e527c.js","chunks\\index-ab2e5613.js","chunks\\index-default-728b491c.js"],import.meta.url),()=>T(()=>import("./chunks/6-da1f6ada.js"),["chunks\\6-da1f6ada.js","components\\pages\\renter\\requests\\_page.svelte-3b7e528f.js","chunks\\index-055277d2.js","chunks\\logger-312c5320.js","chunks\\preload-helper-aa6bc0ce.js","chunks\\index-ca34a969.js","chunks\\useQueryClient-977cb811.js","chunks\\index-default-728b491c.js","chunks\\Header-246e6246.js","chunks\\tslib.es6-61163658.js","chunks\\UserIcon-2d31419b.js","chunks\\ActionIcons-2764f915.js","chunks\\foundation-df9fccee.js","chunks\\classAdderBuilder-070e527c.js","chunks\\index-ab2e5613.js","chunks\\ActionButton-5acbbe55.js","chunks\\CircularProgress-2aa6a19e.js"],import.meta.url),()=>T(()=>import("./chunks/7-65f2262f.js"),["chunks\\7-65f2262f.js","components\\pages\\reviews\\_page.svelte-23447bc3.js","chunks\\index-055277d2.js","chunks\\TabBar-a7fa55d0.js","chunks\\tslib.es6-61163658.js"],import.meta.url),()=>T(()=>import("./chunks/8-a69abfef.js"),["chunks\\8-a69abfef.js","components\\pages\\user\\_page.svelte-04bf0a53.js","chunks\\index-055277d2.js","chunks\\singletons-fe881faa.js","chunks\\index-ca34a969.js","chunks\\UserIcon-2d31419b.js","chunks\\logger-312c5320.js","chunks\\preload-helper-aa6bc0ce.js","chunks\\useQuery-ca1c607a.js","chunks\\useQueryClient-977cb811.js","chunks\\stores-b6abffbb.js"],import.meta.url),()=>T(()=>import("./chunks/9-3890e9a7.js"),["chunks\\9-3890e9a7.js","components\\pages\\user\\_id_\\_page.svelte-9a0aea5d.js","chunks\\index-055277d2.js","chunks\\UserIcon-2d31419b.js","chunks\\index-98bda15b.js","chunks\\foundation-df9fccee.js","chunks\\index-ab2e5613.js","chunks\\Header-246e6246.js","chunks\\index-ca34a969.js","chunks\\tslib.es6-61163658.js","chunks\\Ripple-35c8d717.js","chunks\\stores-b6abffbb.js","chunks\\singletons-fe881faa.js","chunks\\logger-312c5320.js","chunks\\preload-helper-aa6bc0ce.js","chunks\\useQuery-ca1c607a.js","chunks\\useQueryClient-977cb811.js","chunks\\query-77f2d5d9.js","chunks\\ActionButton-5acbbe55.js","chunks\\CircularProgress-2aa6a19e.js"],import.meta.url)],$t=[0],Ot={"":[2],auth:[3],mod:[4],renter:[-6],reviews:[-8],user:[8],"renter/requests":[-7],"user/[id]":[-10]},Pt={handleError:({error:a})=>(console.error(a),{message:"Internal Error"})},It="/__data.js",Ge="sveltekit:scroll",J="sveltekit:index",ne=yt(ce,$t,Ot,Lt),Ee=ce[0],ke=ce[1];Ee();ke();let te={};try{te=JSON.parse(sessionStorage[Ge])}catch{}function ye(a){te[a]=ve()}function At({target:a,base:e,trailing_slash:t}){var Te;const c=[],i={id:null,promise:null},p={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},u=!1,y=!0,_=!1,b=1,L=null,R=!1,D,I=(Te=history.state)==null?void 0:Te[J];I||(I=Date.now(),history.replaceState({...history.state,[J]:I},"",location.href));const V=te[I];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let q=!1,C,Le;function $e(){if(!L){const n=new URL(location.href);L=Promise.resolve().then(async()=>{const o=pe(n,!0);await Pe(o,n,[]),L=null,R=!1})}return L}async function fe(n,{noscroll:o=!1,replaceState:d=!1,keepfocus:s=!1,state:l={}},h){return typeof n=="string"&&(n=new URL(n,Ce(document))),he({url:n,scroll:o?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(n){const o=pe(n,!1);if(!o)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i.promise=je(o),i.id=o.id,i.promise}async function Pe(n,o,d,s,l){var v,E;const h=Le={};let m=n&&await je(n);if(!m&&o.origin===location.origin&&o.pathname===location.pathname&&(m=await re({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!m)return await Z(o),!1;if(o=(n==null?void 0:n.url)||o,Le!==h)return!1;if(c.length=0,m.type==="redirect")if(d.length>10||d.includes(o.pathname))m=await re({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return fe(new URL(m.location,o).href,{},[...d,o.pathname]),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await Z(o);if(_=!0,s&&s.details){const{details:w}=s,g=w.replaceState?0:1;w.state[J]=I+=g,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(u){r=m.state,m.props.page&&(m.props.page.url=o);const w=se();D.$set(m.props),w()}else Ie(m);if(s){const{scroll:w,keepfocus:g}=s;if(!g){const k=document.body,A=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),A!==null?k.setAttribute("tabindex",A):k.removeAttribute("tabindex")}if(await qe(),y){const k=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):k?k.scrollIntoView():scrollTo(0,0)}}else await qe();i.promise=null,i.id=null,y=!0,m.props.page&&(C=m.props.page),l&&l(),_=!1}function Ie(n){var l,h;r=n.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),C=n.props.page;const d=se();D=new St({target:a,props:{...n.props,stores:M},hydrate:!0}),d();const s={from:null,to:ae("to",{params:r.params,routeId:(h=(l=r.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};p.after_navigate.forEach(m=>m(s)),u=!0}async function Q({url:n,params:o,branch:d,status:s,error:l,route:h,form:m}){var A;const v=d.filter(Boolean),E={type:"loaded",state:{url:n,params:o,branch:d,error:l,route:h,session_id:b},props:{components:v.map($=>$.node.component)}};m!==void 0&&(E.props.form=m);let w={},g=!C;for(let $=0;$<v.length;$+=1){const j=v[$];w={...w,...j.data},(g||!r.branch.some(U=>U===j))&&(E.props[`data_${$}`]=w,g=g||Object.keys((A=j.data)!=null?A:{}).length>0)}if(g||(g=Object.keys(C.data).length!==Object.keys(w).length),!r.url||n.href!==r.url.href||r.error!==l||g){E.props.page={error:l,params:o,routeId:h&&h.id,status:s,url:n,data:g?w:C.data};const $=(j,U)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ue({loader:n,parent:o,url:d,params:s,routeId:l,server_data_node:h}){var w,g,k,A,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await n();if((w=E.shared)!=null&&w.load){let j=function(...f){for(const S of f){const{href:O}=new URL(S,d);v.dependencies.add(O)}};const U={};for(const f in s)Object.defineProperty(U,f,{get(){return v.params.add(f),s[f]},enumerable:!0});const B={routeId:l,params:U,data:(g=h==null?void 0:h.data)!=null?g:null,url:ft(d,()=>{v.url=!0}),async fetch(f,S){let O;typeof f=="string"?O=f:(O=f.url,S={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...S});const P=new URL(O,d).href;return j(P),u?ht(P,S):pt(O,P,S)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,o()}};Object.defineProperties(B,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(k=await E.shared.load.call(null,B))!=null?k:null}return{node:E,loader:n,server:h,shared:(A=E.shared)!=null&&A.load?{type:"data",data:m,uses:v}:null,data:($=m!=null?m:h==null?void 0:h.data)!=null?$:null}}function Ae(n,o,d){if(R)return!0;if(!d)return!1;if(d.parent&&o||n.url&&d.url)return!0;for(const s of n.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(n,o){var d,s;return(n==null?void 0:n.type)==="data"?{type:"data",data:n.data,uses:{dependencies:new Set((d=n.uses.dependencies)!=null?d:[]),params:new Set((s=n.uses.params)!=null?s:[]),parent:!!n.uses.parent,url:!!n.uses.url}}:(n==null?void 0:n.type)==="skip"&&o!=null?o:null}async function je({id:n,invalidating:o,url:d,params:s,route:l}){var B;if(i.id===n&&i.promise)return i.promise;const{errors:h,layouts:m,leaf:v}=l,E=r.url&&{url:n!==r.url.pathname+r.url.search,params:Object.keys(s).filter(f=>r.params[f]!==s[f])},w=[...m,v];h.forEach(f=>f==null?void 0:f().catch(()=>{})),w.forEach(f=>f==null?void 0:f[1]().catch(()=>{}));let g=null;const k=w.reduce((f,S,O)=>{var G;const P=r.branch[O],ee=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||Ae(E,f.some(Boolean),(G=P.server)==null?void 0:G.uses));return f.push(ee),f},[]);if(k.some(Boolean)){try{g=await xe(d,k)}catch(f){return re({status:500,error:f,url:d,routeId:l.id})}if(g.type==="redirect")return g}const A=g==null?void 0:g.nodes;let $=!1;const j=w.map(async(f,S)=>{var me,De;if(!f)return;const O=r.branch[S],P=(me=A==null?void 0:A[S])!=null?me:null;if((!P||P.type==="skip")&&f[1]===(O==null?void 0:O.loader)&&!Ae(E,$,(De=O.shared)==null?void 0:De.uses))return O;if($=!0,(P==null?void 0:P.type)==="error")throw P;return ue({loader:f[1],url:d,params:s,routeId:l.id,parent:async()=>{var Ne;const Ve={};for(let _e=0;_e<S;_e+=1)Object.assign(Ve,(Ne=await j[_e])==null?void 0:Ne.data);return Ve},server_data_node:de(P,O==null?void 0:O.server)})});for(const f of j)f.catch(()=>{});const U=[];for(let f=0;f<w.length;f+=1)if(w[f])try{U.push(await j[f])}catch(S){if(S instanceof Je)return{type:"redirect",location:S.location};let O=500,P;for(A!=null&&A.includes(S)?(O=(B=S.status)!=null?B:O,P=S.error):S instanceof we?(O=S.status,P=S.body):P=Fe(S,{params:s,url:d,routeId:l.id});f--;)if(h[f]){let ee,G=f;for(;!U[G];)G-=1;try{return ee={node:await h[f](),loader:h[f],data:{},server:null,shared:null},await Q({url:d,params:s,branch:U.slice(0,G+1).concat(ee),status:O,error:P,route:l})}catch{continue}}await Z(d);return}else U.push(void 0);return await Q({url:d,params:s,branch:U,status:200,error:null,route:l,form:o?void 0:null})}async function re({status:n,error:o,url:d,routeId:s}){var w;const l={},h=await Ee();let m=null;if(h.server)try{const g=await xe(d,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(w=g.nodes[0])!=null?w:null}catch{await Z(d);return}const v=await ue({loader:Ee,url:d,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:d,params:l,branch:[v,E],status:n,error:o instanceof we?o.body:Fe(o,{url:d,params:l,routeId:null}),route:null})}function pe(n,o){if(Ue(n))return;const d=decodeURI(n.pathname.slice(e.length)||"/");for(const s of ne){const l=s.exec(d);if(l){const h=new URL(n.origin+it(n.pathname,t)+n.search+n.hash);return{id:h.pathname+h.search,invalidating:o,route:s,params:lt(l),url:h}}}}function Ue(n){return n.origin!==location.origin||!n.pathname.startsWith(e)}async function he({url:n,scroll:o,keepfocus:d,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:E}){var $,j,U,B;let w=!1;const g=pe(n,!1),k={from:ae("from",{params:r.params,routeId:(j=($=r.route)==null?void 0:$.id)!=null?j:null,url:r.url}),to:ae("to",{params:(U=g==null?void 0:g.params)!=null?U:null,routeId:(B=g==null?void 0:g.route.id)!=null?B:null,url:n}),type:h};m!==void 0&&(k.delta=m);const A={...k,cancel:()=>{w=!0}};if(p.before_navigate.forEach(f=>f(A)),w){E();return}ye(I),v(),u&&M.navigating.set(k),await Pe(g,n,s,{scroll:o,keepfocus:d,details:l},()=>{p.after_navigate.forEach(f=>f(k)),M.navigating.set(null)})}function Z(n){return location.href=n.href,new Promise(()=>{})}return{after_navigate:n=>{be(()=>(p.after_navigate.push(n),()=>{const o=p.after_navigate.indexOf(n);p.after_navigate.splice(o,1)}))},before_navigate:n=>{be(()=>(p.before_navigate.push(n),()=>{const o=p.before_navigate.indexOf(n);p.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!u)&&(y=!1)},goto:(n,o={})=>fe(n,o,[]),invalidate:n=>{if(n===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof n=="function")c.push(n);else{const{href:o}=new URL(n,location.href);c.push(d=>d.href===o)}return $e()},invalidateAll:()=>(R=!0,$e()),prefetch:async n=>{const o=new URL(n,Ce(document));await Oe(o)},prefetch_routes:async n=>{const d=(n?ne.filter(s=>n.some(l=>s.exec(l))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(d)},apply_action:async n=>{if(n.type==="error"){const o=new URL(location.href),{branch:d,route:s}=r;if(!s)return;let l=r.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!d[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Q({url:o,params:r.params,branch:d.slice(0,m+1).concat(h),status:500,error:n.error,route:s});r=v.state;const E=se();D.$set(v.props),E();return}catch{continue}}}else if(n.type==="redirect")fe(n.location,{},[]);else{const o={form:n.data};n.status!==C.status&&(o.page={...C,status:n.status});const d=se();D.$set(o),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:ae("from",{params:r.params,routeId:(v=(m=r.route)==null?void 0:m.id)!=null?v:null,url:r.url}),to:null,type:"unload",cancel:()=>l=!0};p.before_navigate.forEach(E=>E(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(I);try{sessionStorage[Ge]=JSON.stringify(te)}catch{}}});const n=s=>{const{url:l,options:h}=Be(s);if(l&&h.prefetch){if(Ue(l))return;Oe(l)}};let o;const d=s=>{clearTimeout(o),o=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",n),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",n),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Be(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[w,g]=h.href.split("#");if(g!==void 0&&w===location.href.split("#")[0]){q=!0,ye(I),M.page.set({...C,url:h}),M.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[J]===I)return;const l=s.state[J]-I;he({url:new URL(location.href),scroll:te[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[J]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&M.navigating.set(null)})},_hydrate:async({status:n,error:o,node_ids:d,params:s,routeId:l,data:h,form:m})=>{var w;const v=new URL(location.href);let E;try{const g=d.map(async(k,A)=>{const $=h[A];return ue({loader:ce[k],url:v,params:s,routeId:l,parent:async()=>{const j={};for(let U=0;U<A;U+=1)Object.assign(j,(await g[U]).data);return j},server_data_node:de($)})});E=await Q({url:v,params:s,branch:await Promise.all(g),status:n,error:o,form:m,route:(w=ne.find(k=>k.id===l))!=null?w:null})}catch(g){const k=g;if(k instanceof Je){await Z(new URL(g.location,location.href));return}E=await re({status:k instanceof we?k.status:500,error:k,url:v,routeId:l})}Ie(E)}}}let jt=1;async function xe(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+It,t.searchParams.set("__invalid",e.map(i=>i?"y":"n").join("")),t.searchParams.set("__id",String(jt++)),await T(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Fe(a,e){var t;return(t=Pt.handleError({error:a,event:e}))!=null?t:{message:"Internal Error"}}const Ut=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(a,e){for(const t of Ut)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)}});return e}function se(){return()=>{}}async function Nt({env:a,hydrate:e,paths:t,target:c,trailing_slash:i}){st(t);const p=At({target:c,base:t.base,trailing_slash:i});ot({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{Nt as start};
