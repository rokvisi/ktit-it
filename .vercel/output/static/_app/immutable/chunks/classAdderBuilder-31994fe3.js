import{S as F,i as G,s as H,v as C,e as O,w as I,x as j,b as J,L as K,M,t as h,d as L,f as b,h as Q,y as P,N,P as R,O as T,J as U,K as z,Q as d,R as V,g as W,T as X,F as Y,G as Z,H as $,I as x}from"./index-055277d2.js";import{b as ss}from"./index-dd56c048.js";import{c as k,f as es}from"./foundation-f9a59d90.js";function ts(n){let s;const t=n[10].default,o=Y(t,n,n[12],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,l){o&&o.m(a,l),s=!0},p(a,l){o&&o.p&&(!s||l&4096)&&Z(o,t,a,a[12],s?x(t,a[12],l,null):$(a[12]),null)},i(a){s||(b(o,a),s=!0)},o(a){h(o,a),s=!1},d(a){o&&o.d(a)}}}function ns(n){let s,t,o;const a=[{use:[n[7],...n[0]]},{class:k({[n[1]]:!0,[n[5]]:!0,...n[4]})},n[6],n[8]];var l=n[2];function f(e){let r={$$slots:{default:[ts]},$$scope:{ctx:e}};for(let i=0;i<a.length;i+=1)r=d(r,a[i]);return{props:r}}return l&&(s=new l(f(n)),n[11](s)),{c(){s&&C(s.$$.fragment),t=O()},l(e){s&&I(s.$$.fragment,e),t=O()},m(e,r){s&&j(s,e,r),J(e,t,r),o=!0},p(e,[r]){const i=r&499?K(a,[r&129&&{use:[e[7],...e[0]]},r&50&&{class:k({[e[1]]:!0,[e[5]]:!0,...e[4]})},r&64&&M(e[6]),r&256&&M(e[8])]):{};if(r&4096&&(i.$$scope={dirty:r,ctx:e}),l!==(l=e[2])){if(s){W();const m=s;h(m.$$.fragment,1,0,()=>{P(m,1)}),L()}l?(s=new l(f(e)),e[11](s),C(s.$$.fragment),b(s.$$.fragment,1),j(s,t.parentNode,t)):s=null}else l&&s.$set(i)},i(e){o||(s&&b(s.$$.fragment,e),o=!0)},o(e){s&&h(s.$$.fragment,e),o=!1},d(e){n[11](null),e&&Q(t),s&&P(s,e)}}}const u={component:ss,class:"",classMap:{},contexts:{},props:{}};function os(n,s,t){const o=["use","class","component","getElement"];let a=N(s,o),{$$slots:l={},$$scope:f}=s,{use:e=[]}=s,{class:r=""}=s,i;const m=u.class,_={},w=[],p=u.contexts,B=u.props;let{component:E=u.component}=s;Object.entries(u.classMap).forEach(([c,v])=>{const g=R(v);g&&"subscribe"in g&&w.push(g.subscribe(y=>{t(4,_[c]=y,_)}))});const D=es(T());for(let c in p)p.hasOwnProperty(c)&&U(c,p[c]);z(()=>{for(const c of w)c()});function S(){return i.getElement()}function q(c){X[c?"unshift":"push"](()=>{i=c,t(3,i)})}return n.$$set=c=>{s=d(d({},s),V(c)),t(8,a=N(s,o)),"use"in c&&t(0,e=c.use),"class"in c&&t(1,r=c.class),"component"in c&&t(2,E=c.component),"$$scope"in c&&t(12,f=c.$$scope)},[e,r,E,i,_,m,B,D,a,S,l,q,f]}class as extends F{constructor(s){super(),G(this,s,os,ns,H,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const A=Object.assign({},u);function is(n){return new Proxy(as,{construct:function(s,t){return Object.assign(u,A,n),new s(...t)},get:function(s,t){return Object.assign(u,A,n),s[t]}})}export{is as c};
