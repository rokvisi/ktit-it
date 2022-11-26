import{Z as b,_ as E,$ as j,a0 as O}from"./index-055277d2.js";function D(r){return Object.entries(r).filter(([t,i])=>t!==""&&i).map(([t])=>t).join(" ")}const m=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,P=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function x(r){let t,i=[];r.$on=(e,n)=>{let f=e,s=()=>{};return t?s=t(f,n):i.push([f,n]),f.match(m)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',f),()=>{s()}};function o(e){E(r,e)}return e=>{const n=[],f={};t=(s,g)=>{let l=s,d=g,a=!1;const y=l.match(m),M=l.match(P),w=y||M;if(l.match(/^SMUI:\w+:/)){const u=l.split(":");let c="";for(let p=0;p<u.length;p++)c+=p===u.length-1?":"+u[p]:u[p].split("-").map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join("");console.warn(`The event ${l.split("$")[0]} has been renamed to ${c.split("$")[0]}.`),l=c}if(w){const u=l.split(y?":":"$");l=u[0];const c=Object.fromEntries(u.slice(1).map(p=>[p,!0]));c.passive&&(a=a||{},a.passive=!0),c.nonpassive&&(a=a||{},a.passive=!1),c.capture&&(a=a||{},a.capture=!0),c.once&&(a=a||{},a.once=!0),c.preventDefault&&(d=j(d)),c.stopPropagation&&(d=O(d))}const $=b(e,l,d,a),h=()=>{$();const u=n.indexOf(h);u>-1&&n.splice(u,1)};return n.push(h),l in f||(f[l]=b(e,l,o)),h};for(let s=0;s<i.length;s++)t(i[s][0],i[s][1]);return{destroy:()=>{for(let s=0;s<n.length;s++)n[s]();for(let s of Object.entries(f))s[1]()}}}}function T(r,t){let i=[];if(t)for(let o=0;o<t.length;o++){const e=t[o],n=Array.isArray(e)?e[0]:e;Array.isArray(e)&&e.length>1?i.push(n(r,e[1])):i.push(n(r))}return{update(o){if((o&&o.length||0)!=i.length)throw new Error("You must not change the length of an actions array.");if(o)for(let e=0;e<o.length;e++){const n=i[e];if(n&&n.update){const f=o[e];Array.isArray(f)&&f.length>1?n.update(f[1]):n.update()}}},destroy(){for(let o=0;o<i.length;o++){const e=i[o];e&&e.destroy&&e.destroy()}}}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C=function(){function r(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();export{C as M,D as c,x as f,T as u};
