import{S as J,i as K,s as O,T as Q,a2 as U,k as b,q as y,a as V,v as A,l as g,m as k,r as w,h,c as x,w as M,n as I,b as E,D as u,x as R,a3 as X,f as S,t as T,y as q,a8 as N,ab as P,u as Y}from"../../../chunks/index-055277d2.js";import{T as Z,a as ee,C as te}from"../../../chunks/TabBar-a7fa55d0.js";function B(_,t,e){const l=_.slice();return l[5]=t[e],l}function C(_,t,e){const l=_.slice();return l[8]=t[e],l}function H(_,t,e){const l=_.slice();return l[5]=t[e],l}function L(_,t,e){const l=_.slice();return l[8]=t[e],l}function le(_){let t=_[15]+"",e;return{c(){e=y(t)},l(l){e=w(l,t)},m(l,f){E(l,e,f)},p(l,f){f&32768&&t!==(t=l[15]+"")&&Y(e,t)},d(l){l&&h(e)}}}function ae(_){let t,e;return t=new te({props:{$$slots:{default:[le]},$$scope:{ctx:_}}}),{c(){A(t.$$.fragment)},l(l){M(t.$$.fragment,l)},m(l,f){R(t,l,f),e=!0},p(l,f){const c={};f&98304&&(c.$$scope={dirty:f,ctx:l}),t.$set(c)},i(l){e||(S(t.$$.fragment,l),e=!0)},o(l){T(t.$$.fragment,l),e=!1},d(l){q(t,l)}}}function se(_){let t,e;return t=new ee({props:{tab:_[15],$$slots:{default:[ae]},$$scope:{ctx:_}}}),{c(){A(t.$$.fragment)},l(l){M(t.$$.fragment,l)},m(l,f){R(t,l,f),e=!0},p(l,f){const c={};f&32768&&(c.tab=l[15]),f&98304&&(c.$$scope={dirty:f,ctx:l}),t.$set(c)},i(l){e||(S(t.$$.fragment,l),e=!0)},o(l){T(t.$$.fragment,l),e=!1},d(l){q(t,l)}}}function ne(_){let t,e=[],l=new Map,f=_[2];const c=r=>r[5].name;for(let r=0;r<f.length;r+=1){let i=B(_,f,r),n=c(i);l.set(n,e[r]=z(n,i))}return{c(){t=b("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=g(r,"DIV",{class:!0});var i=k(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(h),this.h()},h(){I(t,"class","flex flex-col gap-4")},m(r,i){E(r,t,i);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(r,i){i&4&&(f=r[2],e=N(e,i,c,1,r,f,l,t,P,z,null,B))},d(r){r&&h(t);for(let i=0;i<e.length;i+=1)e[i].d()}}}function re(_){let t,e=[],l=new Map,f=_[1];const c=r=>r[5].name;for(let r=0;r<f.length;r+=1){let i=H(_,f,r),n=c(i);l.set(n,e[r]=G(n,i))}return{c(){t=b("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=g(r,"DIV",{class:!0});var i=k(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(h),this.h()},h(){I(t,"class","flex flex-col gap-4")},m(r,i){E(r,t,i);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(r,i){i&2&&(f=r[1],e=N(e,i,c,1,r,f,l,t,P,G,null,H))},d(r){r&&h(t);for(let i=0;i<e.length;i+=1)e[i].d()}}}function W(_,t){let e,l,f,c,r=t[8].user+"",i,n,m,p,d,$=t[8].text+"",s;return{key:_,first:null,c(){e=b("div"),l=b("span"),f=y("Vartotojas: "),c=b("b"),i=y(r),n=V(),m=b("hr"),p=V(),d=b("p"),s=y($),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=k(e);l=g(o,"SPAN",{});var v=k(l);f=w(v,"Vartotojas: "),c=g(v,"B",{});var D=k(c);i=w(D,r),D.forEach(h),v.forEach(h),n=x(o),m=g(o,"HR",{}),p=x(o),d=g(o,"P",{});var j=k(d);s=w(j,$),j.forEach(h),o.forEach(h),this.h()},h(){I(e,"class","space-y-4 border p-4"),this.first=e},m(a,o){E(a,e,o),u(e,l),u(l,f),u(l,c),u(c,i),u(e,n),u(e,m),u(e,p),u(e,d),u(d,s)},p(a,o){t=a},d(a){a&&h(e)}}}function z(_,t){let e,l,f=t[5].name+"",c,r,i,n=[],m=new Map,p,d=t[5].reviews;const $=s=>s[8].text;for(let s=0;s<d.length;s+=1){let a=C(t,d,s),o=$(a);m.set(o,n[s]=W(o,a))}return{key:_,first:null,c(){e=b("p"),l=y("Nuomininkas: "),c=y(f),r=V(),i=b("div");for(let s=0;s<n.length;s+=1)n[s].c();p=V(),this.h()},l(s){e=g(s,"P",{class:!0});var a=k(e);l=w(a,"Nuomininkas: "),c=w(a,f),a.forEach(h),r=x(s),i=g(s,"DIV",{class:!0});var o=k(i);for(let v=0;v<n.length;v+=1)n[v].l(o);p=x(o),o.forEach(h),this.h()},h(){I(e,"class","text-lg"),I(i,"class","border rounded p-4 space-y-4 bg-gray-100"),this.first=e},m(s,a){E(s,e,a),u(e,l),u(e,c),E(s,r,a),E(s,i,a);for(let o=0;o<n.length;o+=1)n[o].m(i,null);u(i,p)},p(s,a){t=s,a&4&&(d=t[5].reviews,n=N(n,a,$,1,t,d,m,i,P,W,p,C))},d(s){s&&h(e),s&&h(r),s&&h(i);for(let a=0;a<n.length;a+=1)n[a].d()}}}function F(_,t){let e,l,f,c,r=t[8].renter+"",i,n,m,p,d,$=t[8].text+"",s;return{key:_,first:null,c(){e=b("div"),l=b("span"),f=y("Nuomininkas: "),c=b("b"),i=y(r),n=V(),m=b("hr"),p=V(),d=b("p"),s=y($),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=k(e);l=g(o,"SPAN",{});var v=k(l);f=w(v,"Nuomininkas: "),c=g(v,"B",{});var D=k(c);i=w(D,r),D.forEach(h),v.forEach(h),n=x(o),m=g(o,"HR",{}),p=x(o),d=g(o,"P",{});var j=k(d);s=w(j,$),j.forEach(h),o.forEach(h),this.h()},h(){I(e,"class","space-y-4 border p-4"),this.first=e},m(a,o){E(a,e,o),u(e,l),u(l,f),u(l,c),u(c,i),u(e,n),u(e,m),u(e,p),u(e,d),u(d,s)},p(a,o){t=a},d(a){a&&h(e)}}}function G(_,t){let e,l,f=t[5].name+"",c,r,i,n=[],m=new Map,p,d=t[5].reviews;const $=s=>s[8].text;for(let s=0;s<d.length;s+=1){let a=L(t,d,s),o=$(a);m.set(o,n[s]=F(o,a))}return{key:_,first:null,c(){e=b("p"),l=y("Vartotojas: "),c=y(f),r=V(),i=b("div");for(let s=0;s<n.length;s+=1)n[s].c();p=V(),this.h()},l(s){e=g(s,"P",{class:!0});var a=k(e);l=w(a,"Vartotojas: "),c=w(a,f),a.forEach(h),r=x(s),i=g(s,"DIV",{class:!0});var o=k(i);for(let v=0;v<n.length;v+=1)n[v].l(o);p=x(o),o.forEach(h),this.h()},h(){I(e,"class","text-lg"),I(i,"class","border rounded p-4 space-y-4 bg-gray-100"),this.first=e},m(s,a){E(s,e,a),u(e,l),u(e,c),E(s,r,a),E(s,i,a);for(let o=0;o<n.length;o+=1)n[o].m(i,null);u(i,p)},p(s,a){t=s,a&2&&(d=t[5].reviews,n=N(n,a,$,1,t,d,m,i,P,F,p,L))},d(s){s&&h(e),s&&h(r),s&&h(i);for(let a=0;a<n.length;a+=1)n[a].d()}}}function ie(_){let t,e,l,f,c,r,i,n;function m(a){_[4](a)}let p={tabs:["Vartotojai","Nuomininkai"],$$slots:{default:[se,({tab:a})=>({15:a}),({tab:a})=>a?32768:0]},$$scope:{ctx:_}};_[0]!==void 0&&(p.active=_[0]),c=new Z({props:p}),Q.push(()=>U(c,"active",m));function d(a,o){return a[0]==="Vartotojai"?re:ne}let $=d(_),s=$(_);return{c(){t=b("div"),e=b("h1"),l=y("Atsiliepimai"),f=V(),A(c.$$.fragment),i=V(),s.c(),this.h()},l(a){t=g(a,"DIV",{class:!0});var o=k(t);e=g(o,"H1",{class:!0});var v=k(e);l=w(v,"Atsiliepimai"),v.forEach(h),f=x(o),M(c.$$.fragment,o),i=x(o),s.l(o),o.forEach(h),this.h()},h(){I(e,"class","text-center text-xl"),I(t,"class","flex flex-col gap-4 mb-10")},m(a,o){E(a,t,o),u(t,e),u(e,l),u(t,f),R(c,t,null),u(t,i),s.m(t,null),n=!0},p(a,[o]){const v={};o&98304&&(v.$$scope={dirty:o,ctx:a}),!r&&o&1&&(r=!0,v.active=a[0],X(()=>r=!1)),c.$set(v),$===($=d(a))&&s?s.p(a,o):(s.d(1),s=$(a),s&&(s.c(),s.m(t,null)))},i(a){n||(S(c.$$.fragment,a),n=!0)},o(a){T(c.$$.fragment,a),n=!1},d(a){a&&h(t),q(c),s.d()}}}function oe(_,t,e){let{data:l}=t;const f=l.usersWithReviews,c=[];for(const n of f)for(const m of n.reviews){const p=c.findIndex(d=>d.name===m.renter);p===-1?c.push({name:m.renter,reviews:[{user:n.name,text:m.text}]}):c[p].reviews.push({user:n.name,text:m.text})}let r="Vartotojai";function i(n){r=n,e(0,r)}return _.$$set=n=>{"data"in n&&e(3,l=n.data)},[r,f,c,l,i]}class _e extends J{constructor(t){super(),K(this,t,oe,ie,O,{data:3})}}export{_e as default};
