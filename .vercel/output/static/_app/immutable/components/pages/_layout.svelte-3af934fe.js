import{S as Q,i as G,s as R,B as K,C as T,m as A,h as i,n as m,b as d,D as h,A as O,k as j,v as k,a as I,l as D,w,c as N,x as y,f as _,t as p,y as C,E as ee,e as P,q as E,r as q,F as z,G as W,H as X,I as Y,o as te,J as re,K as ne}from"../../chunks/index-055277d2.js";import{B as x}from"../../chunks/Button-d0b64eb8.js";import{L as S}from"../../chunks/index-f3176728.js";import{A as le}from"../../chunks/index-dd56c048.js";import{p as se}from"../../chunks/stores-9c0b9124.js";import{Q as ae,M as oe,a as fe,q as ue}from"../../chunks/query-77f2d5d9.js";import"../../chunks/logger-312c5320.js";import"../../chunks/preload-helper-aa6bc0ce.js";function ie(s){let e,r;return{c(){e=K("svg"),r=K("path"),this.h()},l(t){e=T(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var n=A(e);r=T(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),A(r).forEach(i),n.forEach(i),this.h()},h(){m(r,"stroke-linecap","round"),m(r,"stroke-linejoin","round"),m(r,"d","M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill","none"),m(e,"viewBox","0 0 24 24"),m(e,"stroke-width","1.5"),m(e,"stroke","currentColor"),m(e,"class","w-6 h-6")},m(t,n){d(t,e,n),h(e,r)},p:O,i:O,o:O,d(t){t&&i(e)}}}class ce extends Q{constructor(e){super(),G(this,e,null,ie,R,{})}}function $e(s){let e,r,t,n,l;e=new x({props:{variant:"unelevated",href:`/${s[1]}`,$$slots:{default:[he]},$$scope:{ctx:s}}});let o=s[1]==="renter"&&ge(s),f=s[1]==="user"&&ye(s);return{c(){k(e.$$.fragment),r=I(),o&&o.c(),t=I(),f&&f.c(),n=P()},l(a){w(e.$$.fragment,a),r=N(a),o&&o.l(a),t=N(a),f&&f.l(a),n=P()},m(a,u){y(e,a,u),d(a,r,u),o&&o.m(a,u),d(a,t,u),f&&f.m(a,u),d(a,n,u),l=!0},p(a,u){const c={};u&8&&(c.$$scope={dirty:u,ctx:a}),e.$set(c)},i(a){l||(_(e.$$.fragment,a),_(o),_(f),l=!0)},o(a){p(e.$$.fragment,a),p(o),p(f),l=!1},d(a){C(e,a),a&&i(r),o&&o.d(a),a&&i(t),f&&f.d(a),a&&i(n)}}}function me(s){let e;return{c(){e=E("Nuomojami produktai")},l(r){e=q(r,"Nuomojami produktai")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function _e(s){let e;return{c(){e=E("Moderuoti")},l(r){e=q(r,"Moderuoti")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function pe(s){let e;return{c(){e=E("Nuomuotis")},l(r){e=q(r,"Nuomuotis")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function de(s){let e;function r(l,o){if(l[1]==="user")return pe;if(l[1]==="mod")return _e;if(l[1]==="renter")return me}let t=r(s),n=t&&t(s);return{c(){n&&n.c(),e=P()},l(l){n&&n.l(l),e=P()},m(l,o){n&&n.m(l,o),d(l,e,o)},p:O,d(l){n&&n.d(l),l&&i(e)}}}function he(s){let e,r;return e=new S({props:{$$slots:{default:[de]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ge(s){let e,r,t,n;return e=new x({props:{variant:"unelevated",href:"/renter/requests",$$slots:{default:[ve]},$$scope:{ctx:s}}}),t=new x({props:{variant:"unelevated",href:"/renter/analytics",$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),r=I(),k(t.$$.fragment)},l(l){w(e.$$.fragment,l),r=N(l),w(t.$$.fragment,l)},m(l,o){y(e,l,o),d(l,r,o),y(t,l,o),n=!0},i(l){n||(_(e.$$.fragment,l),_(t.$$.fragment,l),n=!0)},o(l){p(e.$$.fragment,l),p(t.$$.fragment,l),n=!1},d(l){C(e,l),l&&i(r),C(t,l)}}}function be(s){let e;return{c(){e=E("U\u017Esakymai")},l(r){e=q(r,"U\u017Esakymai")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function ve(s){let e,r;return e=new S({props:{$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ke(s){let e;return{c(){e=E("Analitika")},l(r){e=q(r,"Analitika")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function we(s){let e,r;return e=new S({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ye(s){let e,r;return e=new x({props:{variant:"unelevated",href:"/user/returns",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Ce(s){let e;return{c(){e=E("Gra\u017Einti")},l(r){e=q(r,"Gra\u017Einti")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function Ee(s){let e,r;return e=new S({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function qe(s){let e,r,t,n,l,o,f,a,u,c,H;return c=new x({props:{color:"secondary",$$slots:{default:[Me]},$$scope:{ctx:s}}}),c.$on("click",Ie),{c(){e=j("div"),r=j("p"),t=E(s[0]),n=I(),l=j("span"),o=E("("),f=E(s[1]),a=E(")"),u=I(),k(c.$$.fragment),this.h()},l(g){e=D(g,"DIV",{class:!0});var v=A(e);r=D(v,"P",{});var $=A(r);t=q($,s[0]),n=N($),l=D($,"SPAN",{class:!0});var V=A(l);o=q(V,"("),f=q(V,s[1]),a=q(V,")"),V.forEach(i),$.forEach(i),u=N(v),w(c.$$.fragment,v),v.forEach(i),this.h()},h(){m(l,"class","font-bold text-orange-400"),m(e,"class","flex flex-col items-center")},m(g,v){d(g,e,v),h(e,r),h(r,t),h(r,n),h(r,l),h(l,o),h(l,f),h(l,a),h(e,u),y(c,e,null),H=!0},p(g,v){const $={};v&8&&($.$$scope={dirty:v,ctx:g}),c.$set($)},i(g){H||(_(c.$$.fragment,g),H=!0)},o(g){p(c.$$.fragment,g),H=!1},d(g){g&&i(e),C(c)}}}function Ae(s){let e,r;return e=new x({props:{component:le,variant:"unelevated",href:"/auth",$$slots:{default:[je]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Me(s){let e;return{c(){e=E("Atsijungti")},l(r){e=q(r,"Atsijungti")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function je(s){let e;return{c(){e=E("Prisijungti")},l(r){e=q(r,"Prisijungti")},m(r,t){d(r,e,t)},d(r){r&&i(e)}}}function De(s){let e,r,t,n,l,o,f,a,u,c,H,g,v;l=new ce({});let $=s[1]&&$e(s);const V=[Ae,qe],U=[];function Z(b,M){return b[0]===null?0:1}return u=Z(s),c=U[u]=V[u](s),{c(){e=j("header"),r=j("div"),t=j("div"),n=j("a"),k(l.$$.fragment),o=I(),$&&$.c(),f=I(),a=j("div"),c.c(),H=I(),g=j("hr"),this.h()},l(b){e=D(b,"HEADER",{class:!0});var M=A(e);r=D(M,"DIV",{class:!0});var B=A(r);t=D(B,"DIV",{class:!0});var L=A(t);n=D(L,"A",{href:!0,class:!0});var F=A(n);w(l.$$.fragment,F),F.forEach(i),o=N(L),$&&$.l(L),L.forEach(i),f=N(B),a=D(B,"DIV",{class:!0});var J=A(a);c.l(J),J.forEach(i),B.forEach(i),H=N(M),g=D(M,"HR",{class:!0}),M.forEach(i),this.h()},h(){m(n,"href","/"),m(n,"class",""),m(t,"class","grow flex gap-8 items-center"),m(a,"class","flex items-center gap-2 md:gap-4"),m(r,"class","flex items-center"),m(g,"class","mt-4"),m(e,"class","my-4 mx-5 text-sm md:text-base")},m(b,M){d(b,e,M),h(e,r),h(r,t),h(t,n),y(l,n,null),h(t,o),$&&$.m(t,null),h(r,f),h(r,a),U[u].m(a,null),h(e,H),h(e,g),v=!0},p(b,[M]){b[1]&&$.p(b,M),c.p(b,M)},i(b){v||(_(l.$$.fragment,b),_($),_(c),v=!0)},o(b){p(l.$$.fragment,b),p($),p(c),v=!1},d(b){b&&i(e),C(l),$&&$.d(),U[u].d()}}}async function Ie(){await fetch("/api/auth/login",{method:"DELETE"}),location.replace("/auth")}function Ne(s,e,r){let t;ee(s,se,o=>r(2,t=o));const n=t.data.username,l=t.data.role;return[n,l]}class He extends Q{constructor(e){super(),G(this,e,Ne,De,R,{})}}function Ve(s){let e;const r=s[5].default,t=z(r,s,s[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,l){t&&t.m(n,l),e=!0},p(n,[l]){t&&t.p&&(!e||l&16)&&W(t,r,n,n[4],e?Y(r,n[4],l,null):X(n[4]),null)},i(n){e||(_(t,n),e=!0)},o(n){p(t,n),e=!1},d(n){t&&t.d(n)}}}function xe(s,e,r){let{$$slots:t={},$$scope:n}=e,{queryCache:l=new ae}=e,{mutationCache:o=new oe}=e,{defaultOptions:f={}}=e,{client:a=new fe({queryCache:l,mutationCache:o,defaultOptions:f})}=e;return te(()=>{a.mount()}),re("queryClient",a),ne(()=>{a.unmount()}),s.$$set=u=>{"queryCache"in u&&r(0,l=u.queryCache),"mutationCache"in u&&r(1,o=u.mutationCache),"defaultOptions"in u&&r(2,f=u.defaultOptions),"client"in u&&r(3,a=u.client),"$$scope"in u&&r(4,n=u.$$scope)},[l,o,f,a,n,t]}class Be extends Q{constructor(e){super(),G(this,e,xe,Ve,R,{queryCache:0,mutationCache:1,defaultOptions:2,client:3})}}function Le(s){let e,r,t,n;e=new He({});const l=s[0].default,o=z(l,s,s[1],null);return{c(){k(e.$$.fragment),r=I(),t=j("main"),o&&o.c(),this.h()},l(f){w(e.$$.fragment,f),r=N(f),t=D(f,"MAIN",{class:!0});var a=A(t);o&&o.l(a),a.forEach(i),this.h()},h(){m(t,"class","mx-5")},m(f,a){y(e,f,a),d(f,r,a),d(f,t,a),o&&o.m(t,null),n=!0},p(f,a){o&&o.p&&(!n||a&2)&&W(o,l,f,f[1],n?Y(l,f[1],a,null):X(f[1]),null)},i(f){n||(_(e.$$.fragment,f),_(o,f),n=!0)},o(f){p(e.$$.fragment,f),p(o,f),n=!1},d(f){C(e,f),f&&i(r),f&&i(t),o&&o.d(f)}}}function Oe(s){let e,r;return e=new Be({props:{client:ue,$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,[n]){const l={};n&2&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Pe(s,e,r){let{$$slots:t={},$$scope:n}=e;return s.$$set=l=>{"$$scope"in l&&r(1,n=l.$$scope)},[t,n]}class Te extends Q{constructor(e){super(),G(this,e,Pe,Oe,R,{})}}export{Te as default};
