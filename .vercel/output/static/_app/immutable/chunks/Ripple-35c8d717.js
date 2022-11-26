import{P as B}from"./index-055277d2.js";import{_ as I,a as C,b as g}from"./tslib.es6-61163658.js";import{M as k}from"./foundation-df9fccee.js";function N(n,i,t,e={bubbles:!0},a=!1){if(typeof Event<"u"&&n){const r=new CustomEvent(i,Object.assign(Object.assign({},e),{detail:t}));if(n==null||n.dispatchEvent(r),a&&i.startsWith("SMUI")){const s=new CustomEvent(i.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},e),{detail:t}));n==null||n.dispatchEvent(s),s.defaultPrevented&&r.preventDefault()}return r}}var A;function O(n,i){i===void 0&&(i=!1);var t=n.CSS,e=A;if(typeof A=="boolean"&&!i)return A;var a=t&&typeof t.supports=="function";if(!a)return!1;var r=t.supports("--css-vars","yes"),s=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=r||s,i||(A=e),e}function X(n,i,t){if(!n)return{x:0,y:0};var e=i.x,a=i.y,r=e+t.left,s=a+t.top,d,u;if(n.type==="touchstart"){var v=n;d=v.changedTouches[0].pageX-r,u=v.changedTouches[0].pageY-s}else{var f=n;d=f.pageX-r,u=f.pageY-s}return{x:d,y:u}}/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function q(n){return n===void 0&&(n=window),j(n)?{passive:!0}:!1}function j(n){n===void 0&&(n=window);var i=!1;try{var t={get passive(){return i=!0,!1}},e=function(){};n.document.addEventListener("test",e,t),n.document.removeEventListener("test",e,t)}catch{i=!1}return i}const P=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:q},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
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
 */function W(n,i){if(n.closest)return n.closest(i);for(var t=n;t;){if(U(t,i))return t;t=t.parentElement}return null}function U(n,i){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,i)}function _(n){var i=n;if(i.offsetParent!==null)return i.scrollWidth;var t=i.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var e=t.scrollWidth;return document.documentElement.removeChild(t),e}const V=Object.freeze(Object.defineProperty({__proto__:null,closest:W,matches:U,estimateScrollWidth:_},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Z={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},$={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},M={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var L=["touchstart","pointerdown","mousedown","keydown"],x=["touchend","pointerup","mouseup","contextmenu"],b=[],J=function(n){I(i,n);function i(t){var e=n.call(this,C(C({},i.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(a){e.activateImpl(a)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var a=i.cssClasses,r=a.ROOT,s=a.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,a=e.ROOT,r=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(a),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var e,a;if(t){try{for(var r=g(L),s=r.next();!s.done;s=r.next()){var d=s.value;this.adapter.registerInteractionHandler(d,this.activateHandler)}}catch(u){e={error:u}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var e,a;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=g(x),s=r.next();!s.done;s=r.next()){var d=s.value;this.adapter.registerDocumentInteractionHandler(d,this.deactivateHandler)}}catch(u){e={error:u}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(e)throw e.error}}},i.prototype.deregisterRootHandlers=function(){var t,e;try{for(var a=g(L),r=a.next();!r.done;r=a.next()){var s=r.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(d){t={error:d}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=g(x),r=a.next();!r.done;r=a.next()){var s=r.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(d){t={error:d}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,e=i.strings,a=Object.keys(e);a.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[r],null)})},i.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var r=this.previousActivationEvent,s=r&&t!==void 0&&r.type!==t.type;if(!s){a.isActivated=!0,a.isProgrammatic=t===void 0,a.activationEvent=t,a.wasActivatedByPointer=a.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var d=t!==void 0&&b.length>0&&b.some(function(u){return e.adapter.containsEventTarget(u)});if(d){this.resetActivationState();return}t!==void 0&&(b.push(t.target),this.registerDeactivationHandlers(t)),a.wasElementMadeActive=this.checkElementMadeActive(t),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){b=[],!a.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(a.wasElementMadeActive=e.checkElementMadeActive(t),a.wasElementMadeActive&&e.animateActivation()),a.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,e=i.strings,a=e.VAR_FG_TRANSLATE_START,r=e.VAR_FG_TRANSLATE_END,s=i.cssClasses,d=s.FG_DEACTIVATION,u=s.FG_ACTIVATION,v=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",c="";if(!this.adapter.isUnbounded()){var m=this.getFgTranslationCoordinates(),h=m.startPoint,o=m.endPoint;f=h.x+"px, "+h.y+"px",c=o.x+"px, "+o.y+"px"}this.adapter.updateCssVariable(a,f),this.adapter.updateCssVariable(r,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(d),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},v)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,a=t.wasActivatedByPointer,r;a?r=X(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:s}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,a=this.activationState,r=a.hasDeactivationUXRun,s=a.isActivated,d=r||!s;d&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},M.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(!!e.isActivated){var a=C({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(a),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,a=t.wasElementMadeActive;(e||a)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),a=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:a();var r=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,e=t.VAR_FG_SIZE,a=t.VAR_LEFT,r=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},i}(k);const{applyPassive:S}=P,{matches:K}=V;function T(n,{ripple:i=!0,surface:t=!1,unbounded:e=!1,disabled:a=!1,color:r,active:s,rippleElement:d,eventTarget:u,activeTarget:v,addClass:f=o=>n.classList.add(o),removeClass:c=o=>n.classList.remove(o),addStyle:m=(o,y)=>n.style.setProperty(o,y),initPromise:h=Promise.resolve()}={}){let o,y=B("SMUI:addLayoutListener"),w,R=s,D=u,F=v;function H(){t?(f("mdc-ripple-surface"),r==="primary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):r==="secondary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),o&&R!==s&&(R=s,s?o.activate():s===!1&&o.deactivate()),i&&!o?(o=new J({addClass:f,browserSupportsCssVars:()=>O(window),computeBoundingRect:()=>(d||n).getBoundingClientRect(),containsEventTarget:l=>n.contains(l),deregisterDocumentInteractionHandler:(l,p)=>document.documentElement.removeEventListener(l,p,S()),deregisterInteractionHandler:(l,p)=>(u||n).removeEventListener(l,p,S()),deregisterResizeHandler:l=>window.removeEventListener("resize",l),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s==null?K(v||n,":active"):s,isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!e,registerDocumentInteractionHandler:(l,p)=>document.documentElement.addEventListener(l,p,S()),registerInteractionHandler:(l,p)=>(u||n).addEventListener(l,p,S()),registerResizeHandler:l=>window.addEventListener("resize",l),removeClass:c,updateCssVariable:m}),h.then(()=>{o&&(o.init(),o.setUnbounded(e))})):o&&!i&&h.then(()=>{o&&(o.destroy(),o=void 0)}),o&&(D!==u||F!==v)&&(D=u,F=v,o.destroy(),requestAnimationFrame(()=>{o&&(o.init(),o.setUnbounded(e))})),!i&&e&&f("mdc-ripple-upgraded--unbounded")}H(),y&&(w=y(G));function G(){o&&o.layout()}return{update(l){({ripple:i,surface:t,unbounded:e,disabled:a,color:r,active:s,rippleElement:d,eventTarget:u,activeTarget:v,addClass:f,removeClass:c,addStyle:m,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>n.classList.add(p),removeClass:p=>n.classList.remove(p),addStyle:(p,z)=>n.style.setProperty(p,z),initPromise:Promise.resolve()},l)),H()},destroy(){o&&(o.destroy(),o=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),w&&w()}}}export{T as R,N as d,P as e};
