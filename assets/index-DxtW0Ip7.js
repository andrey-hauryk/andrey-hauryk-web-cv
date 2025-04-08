(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const mt={},zr=[],Vn=()=>{},Wm=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bc=t=>t.startsWith("onUpdate:"),Yt=Object.assign,kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xm=Object.prototype.hasOwnProperty,ot=(t,e)=>Xm.call(t,e),He=Array.isArray,Vr=t=>sa(t)==="[object Map]",ld=t=>sa(t)==="[object Set]",Ve=t=>typeof t=="function",yt=t=>typeof t=="string",gi=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",cd=t=>(vt(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),ud=Object.prototype.toString,sa=t=>ud.call(t),Ym=t=>sa(t).slice(8,-1),fd=t=>sa(t)==="[object Object]",Hc=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jm=/-(\w)/g,yn=oa(t=>t.replace(jm,(e,n)=>n?n.toUpperCase():"")),qm=/\B([A-Z])/g,gr=oa(t=>t.replace(qm,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ta=oa(t=>t?`on${aa(t)}`:""),Ni=(t,e)=>!Object.is(t,e),Ra=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},$m=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Iu;const la=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ca(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=yt(i)?Jm(i):ca(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(t)||vt(t))return t}const Km=/;(?![^(]*\))/g,Zm=/:([^]+)/,Qm=/\/\*[^]*?\*\//g;function Jm(t){const e={};return t.replace(Qm,"").split(Km).forEach(n=>{if(n){const i=n.split(Zm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zc(t){let e="";if(yt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=zc(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const e_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t_=Fc(e_);function dd(t){return!!t||t===""}const pd=t=>!!(t&&t.__v_isRef===!0),rn=t=>yt(t)?t:t==null?"":He(t)||vt(t)&&(t.toString===ud||!Ve(t.toString))?pd(t)?rn(t.value):JSON.stringify(t,md,2):String(t),md=(t,e)=>pd(e)?md(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[wa(i,s)+" =>"]=r,n),{})}:ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wa(n))}:gi(e)?wa(e):vt(e)&&!He(e)&&!fd(e)?String(e):e,wa=(t,e="")=>{var n;return gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class _d{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function n_(t){return new _d(t)}function i_(){return hn}let pt;const Ca=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Ed(this);const e=pt,n=Dn;pt=this,Dn=!0;try{return this.fn()}finally{Sd(this),pt=e,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wc(e);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let vd=0,ys,bs;function xd(t,e=!1){if(t.flags|=8,e){t.next=bs,bs=t;return}t.next=ys,ys=t}function Vc(){vd++}function Gc(){if(--vd>0)return;if(bs){let e=bs;for(bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ys;){let e=ys;for(ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ed(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Wc(i),r_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Md(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Cs))return;t.globalVersion=Cs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sl(t)){t.flags&=-3;return}const n=pt,i=Dn;pt=t,Dn=!0;try{Ed(t);const r=t.fn(t._value);(e.version===0||Ni(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=n,Dn=i,Sd(t),t.flags&=-3}}function Wc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Wc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function r_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dn=!0;const yd=[];function Vi(){yd.push(Dn),Dn=!1}function Gi(){const t=yd.pop();Dn=t===void 0?!0:t}function Nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pt;pt=void 0;try{e()}finally{pt=n}}}let Cs=0;class s_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pt||!Dn||pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pt)n=this.activeLink=new s_(pt,this),pt.deps?(n.prevDep=pt.depsTail,pt.depsTail.nextDep=n,pt.depsTail=n):pt.deps=pt.depsTail=n,bd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pt.depsTail,n.nextDep=void 0,pt.depsTail.nextDep=n,pt.depsTail=n,pt.deps===n&&(pt.deps=i)}return n}trigger(e){this.version++,Cs++,this.notify(e)}notify(e){Vc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gc()}}}function bd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ml=new WeakMap,fr=Symbol(""),yl=Symbol(""),Ps=Symbol("");function Vt(t,e,n){if(Dn&&pt){let i=Ml.get(t);i||Ml.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Xc),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const o=Ml.get(t);if(!o){Cs++;return}const a=l=>{l&&l.trigger()};if(Vc(),e==="clear")o.forEach(a);else{const l=He(t),c=l&&Hc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ps||!gi(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ps)),e){case"add":l?c&&a(o.get("length")):(a(o.get(fr)),Vr(t)&&a(o.get(yl)));break;case"delete":l||(a(o.get(fr)),Vr(t)&&a(o.get(yl)));break;case"set":Vr(t)&&a(o.get(fr));break}}Gc()}function Er(t){const e=st(t);return e===t?e:(Vt(e,"iterate",Ps),Mn(t)?e:e.map(Gt))}function ua(t){return Vt(t=st(t),"iterate",Ps),t}const o_={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,Gt)},concat(...t){return Er(this).concat(...t.map(e=>He(e)?Er(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=Gt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Gt),arguments)},find(t,e){return $n(this,"find",t,e,Gt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Gt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return La(this,"includes",t)},indexOf(...t){return La(this,"indexOf",t)},join(t){return Er(this).join(t)},lastIndexOf(...t){return La(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return Uu(this,"reduce",t,e)},reduceRight(t,...e){return Uu(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return Er(this).toReversed()},toSorted(t){return Er(this).toSorted(t)},toSpliced(...t){return Er(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return Pa(this,"values",Gt)}};function Pa(t,e,n){const i=ua(t),r=i[e]();return i!==t&&!Mn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const a_=Array.prototype;function $n(t,e,n,i,r,s){const o=ua(t),a=o!==t&&!Mn(t),l=o[e];if(l!==a_[e]){const f=l.apply(t,s);return a?Gt(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Gt(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Uu(t,e,n,i){const r=ua(t);let s=n;return r!==t&&(Mn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Gt(a),l,t)}),r[e](s,...i)}function La(t,e,n){const i=st(t);Vt(i,"iterate",Ps);const r=i[e](...n);return(r===-1||r===!1)&&qc(n[0])?(n[0]=st(n[0]),i[e](...n)):r}function us(t,e,n=[]){Vi(),Vc();const i=st(t)[e].apply(t,n);return Gc(),Gi(),i}const l_=Fc("__proto__,__v_isRef,__isVue"),Ad=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi));function c_(t){gi(t)||(t=String(t));const e=st(this);return Vt(e,"has",t),e.hasOwnProperty(t)}class Td{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?x_:Pd:s?Cd:wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=o_[n]))return l;if(n==="hasOwnProperty")return c_}const a=Reflect.get(e,n,Ft(e)?e:i);return(gi(n)?Ad.has(n):l_(n))||(r||Vt(e,"get",n),s)?a:Ft(a)?o&&Hc(n)?a:a.value:vt(a)?r?Dd(a):di(a):a}}class Rd extends Td{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=dr(s);if(!Mn(i)&&!dr(i)&&(s=st(s),i=st(i)),!He(e)&&Ft(s)&&!Ft(i))return l?!1:(s.value=i,!0)}const o=He(e)&&Hc(n)?Number(n)<e.length:ot(e,n),a=Reflect.set(e,n,i,Ft(e)?e:r);return e===st(r)&&(o?Ni(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),a}deleteProperty(e,n){const i=ot(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!gi(n)||!Ad.has(n))&&Vt(e,"has",n),i}ownKeys(e){return Vt(e,"iterate",He(e)?"length":fr),Reflect.ownKeys(e)}}class u_ extends Td{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const f_=new Rd,h_=new u_,d_=new Rd(!0);const bl=t=>t,so=t=>Reflect.getPrototypeOf(t);function p_(t,e,n){return function(...i){const r=this.__v_raw,s=st(r),o=Vr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?bl:e?Al:Gt;return!e&&Vt(s,"iterate",l?yl:fr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function m_(t,e){const n={get(r){const s=this.__v_raw,o=st(s),a=st(r);t||(Ni(r,a)&&Vt(o,"get",r),Vt(o,"get",a));const{has:l}=so(o),c=e?bl:t?Al:Gt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Vt(st(r),"iterate",fr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=st(s),a=st(r);return t||(Ni(r,a)&&Vt(o,"has",r),Vt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?bl:t?Al:Gt;return!t&&Vt(l,"iterate",fr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Yt(n,t?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(r){!e&&!Mn(r)&&!dr(r)&&(r=st(r));const s=st(this);return so(s).has.call(s,r)||(s.add(r),si(s,"add",r,r)),this},set(r,s){!e&&!Mn(s)&&!dr(s)&&(s=st(s));const o=st(this),{has:a,get:l}=so(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ni(s,u)&&si(o,"set",r,s):si(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=so(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&si(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=p_(r,t,e)}),n}function Yc(t,e){const n=m_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ot(n,r)&&r in i?n:i,r,s)}const __={get:Yc(!1,!1)},g_={get:Yc(!1,!0)},v_={get:Yc(!0,!1)};const wd=new WeakMap,Cd=new WeakMap,Pd=new WeakMap,x_=new WeakMap;function E_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S_(t){return t.__v_skip||!Object.isExtensible(t)?0:E_(Ym(t))}function di(t){return dr(t)?t:jc(t,!1,f_,__,wd)}function Ld(t){return jc(t,!1,d_,g_,Cd)}function Dd(t){return jc(t,!0,h_,v_,Pd)}function jc(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=S_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Gr(t){return dr(t)?Gr(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function Mn(t){return!!(t&&t.__v_isShallow)}function qc(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function M_(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&hd(t,"__v_skip",!0),t}const Gt=t=>vt(t)?di(t):t,Al=t=>vt(t)?Dd(t):t;function Ft(t){return t?t.__v_isRef===!0:!1}function Xn(t){return Nd(t,!1)}function Id(t){return Nd(t,!0)}function Nd(t,e){return Ft(t)?t:new y_(t,e)}class y_{constructor(e,n){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Mn(e)||dr(e);e=i?e:st(e),Ni(e,n)&&(this._rawValue=e,this._value=i?e:Gt(e),this.dep.trigger())}}function pn(t){return Ft(t)?t.value:t}const b_={get:(t,e,n)=>e==="__v_raw"?t:pn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ft(r)&&!Ft(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ud(t){return Gr(t)?t:new Proxy(t,b_)}class A_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return xd(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function T_(t,e,n=!1){let i,r;return Ve(t)?i=t:(i=t.get,r=t.set),new A_(i,r,n)}const ao={},$o=new WeakMap;let rr;function R_(t,e=!1,n=rr){if(n){let i=$o.get(n);i||$o.set(n,i=[]),i.push(t)}}function w_(t,e,n=mt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=g=>r?g:Mn(g)||r===!1||r===0?Di(g,1):Di(g);let u,f,h,p,_=!1,E=!1;if(Ft(t)?(f=()=>t.value,_=Mn(t)):Gr(t)?(f=()=>c(t),_=!0):He(t)?(E=!0,_=t.some(g=>Gr(g)||Mn(g)),f=()=>t.map(g=>{if(Ft(g))return g.value;if(Gr(g))return c(g);if(Ve(g))return l?l(g,2):g()})):Ve(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Vi();try{h()}finally{Gi()}}const g=rr;rr=u;try{return l?l(t,3,[p]):t(p)}finally{rr=g}}:f=Vn,e&&r){const g=f,N=r===!0?1/0:r;f=()=>Di(g(),N)}const m=i_(),d=()=>{u.stop(),m&&m.active&&kc(m.effects,u)};if(s&&e){const g=e;e=(...N)=>{g(...N),d()}}let M=E?new Array(t.length).fill(ao):ao;const y=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const N=u.run();if(r||_||(E?N.some((I,R)=>Ni(I,M[R])):Ni(N,M))){h&&h();const I=rr;rr=u;try{const R=[N,M===ao?void 0:E&&M[0]===ao?[]:M,p];l?l(e,3,R):e(...R),M=N}finally{rr=I}}}else u.run()};return a&&a(y),u=new gd(f),u.scheduler=o?()=>o(y,!1):y,p=g=>R_(g,!1,u),h=u.onStop=()=>{const g=$o.get(u);if(g){if(l)l(g,4);else for(const N of g)N();$o.delete(u)}},e?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Di(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ft(t))Di(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)Di(t[i],e,n);else if(ld(t)||Vr(t))t.forEach(i=>{Di(i,e,n)});else if(fd(t)){for(const i in t)Di(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Di(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(t,e,n,i){try{return i?t(...i):t()}catch(r){fa(r,e,n)}}function Yn(t,e,n,i){if(Ve(t)){const r=js(t,e,n,i);return r&&cd(r)&&r.catch(s=>{fa(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Yn(t[s],e,n,i));return r}}function fa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Vi(),js(s,null,10,[t,l,c]),Gi();return}}C_(t,n,r,i,o)}function C_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Zt=[];let Bn=-1;const Wr=[];let wi=null,Ur=0;const Od=Promise.resolve();let Ko=null;function Br(t){const e=Ko||Od;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=Bn+1,n=Zt.length;for(;e<n;){const i=e+n>>>1,r=Zt[i],s=Ls(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function $c(t){if(!(t.flags&1)){const e=Ls(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=Ls(n)?Zt.push(t):Zt.splice(P_(e),0,t),t.flags|=1,Fd()}}function Fd(){Ko||(Ko=Od.then(kd))}function L_(t){He(t)?Wr.push(...t):wi&&t.id===-1?wi.splice(Ur+1,0,t):t.flags&1||(Wr.push(t),t.flags|=1),Fd()}function Ou(t,e,n=Bn+1){for(;n<Zt.length;n++){const i=Zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bd(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,i)=>Ls(n)-Ls(i));if(Wr.length=0,wi){wi.push(...e);return}for(wi=e,Ur=0;Ur<wi.length;Ur++){const n=wi[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wi=null,Ur=0}}const Ls=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kd(t){try{for(Bn=0;Bn<Zt.length;Bn++){const e=Zt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<Zt.length;Bn++){const e=Zt[Bn];e&&(e.flags&=-2)}Bn=-1,Zt.length=0,Bd(),Ko=null,(Zt.length||Wr.length)&&kd()}}let Xt=null,Hd=null;function Zo(t){const e=Xt;return Xt=t,Hd=t&&t.type.__scopeId||null,e}function qs(t,e=Xt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Yu(-1);const s=Zo(e);let o;try{o=t(...r)}finally{Zo(s),i._d&&Yu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $i(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Vi(),Yn(l,n,8,[t.el,a,t,e]),Gi())}}const D_=Symbol("_vte"),I_=t=>t.__isTeleport;function Kc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Jt(t,e){return Ve(t)?Yt({name:t.name},e,{setup:t}):t}function zd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qo(t,e,n,i,r=!1){if(He(t)){t.forEach((_,E)=>Qo(_,e&&(He(e)?e[E]:e),n,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Jc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState,h=st(f),p=f===mt?()=>!1:_=>ot(h,_);if(c!=null&&c!==l&&(yt(c)?(u[c]=null,p(c)&&(f[c]=null)):Ft(c)&&(c.value=null)),Ve(l))js(l,a,12,[o,u]);else{const _=yt(l),E=Ft(l);if(_||E){const m=()=>{if(t.f){const d=_?p(l)?f[l]:u[l]:l.value;r?He(d)&&kc(d,s):He(d)?d.includes(s)||d.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,fn(m,n)):m()}}}la().requestIdleCallback;la().cancelIdleCallback;const Xr=t=>!!t.type.__asyncLoader,Vd=t=>t.type.__isKeepAlive;function N_(t,e){Gd(t,"a",e)}function U_(t,e){Gd(t,"da",e)}function Gd(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ha(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Vd(r.parent.vnode)&&O_(i,e,n,r),r=r.parent}}function O_(t,e,n,i){const r=ha(e,t,i,!0);$s(()=>{kc(i[e],r)},n)}function ha(t,e,n=Ot,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Vi();const a=Zs(n),l=Yn(e,n,t,o);return a(),Gi(),l});return i?r.unshift(s):r.push(s),s}}const vi=t=>(e,n=Ot)=>{(!Us||t==="sp")&&ha(t,(...i)=>e(...i),n)},F_=vi("bm"),as=vi("m"),B_=vi("bu"),k_=vi("u"),H_=vi("bum"),$s=vi("um"),z_=vi("sp"),V_=vi("rtg"),G_=vi("rtc");function W_(t,e=Ot){ha("ec",t,e)}const X_="components",Wd=Symbol.for("v-ndc");function Y_(t){return yt(t)?j_(X_,t,!1)||t:t||Wd}function j_(t,e,n=!0,i=!1){const r=Xt||Ot;if(r){const s=r.type;{const a=Ng(s,!1);if(a&&(a===e||a===yn(e)||a===aa(yn(e))))return s}const o=Fu(r[t]||s[t],e)||Fu(r.appContext[t],e);return!o&&i?s:o}}function Fu(t,e){return t&&(t[e]||t[yn(e)]||t[aa(yn(e))])}function Xd(t,e,n,i){let r;const s=n,o=He(t);if(o||yt(t)){const a=o&&Gr(t);let l=!1;a&&(l=!Mn(t),t=ua(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Gt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(vt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Yd(t,e,n={},i,r){if(Xt.ce||Xt.parent&&Xr(Xt.parent)&&Xt.parent.ce)return e!=="default"&&(n.name=e),Bt(),Bi(Wt,null,[Pt("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),Bt();const o=s&&jd(s(n)),a=n.key||o&&o.key,l=Bi(Wt,{key:(a&&!gi(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function jd(t){return t.some(e=>Is(e)?!(e.type===Kr||e.type===Wt&&!jd(e.children)):!0)?t:null}const Tl=t=>t?pp(t)?Jc(t):Tl(t.parent):null,As=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tl(t.parent),$root:t=>Tl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>{$c(t.update)}),$nextTick:t=>t.n||(t.n=Br.bind(t.proxy)),$watch:t=>pg.bind(t)}),Da=(t,e)=>t!==mt&&!t.__isScriptSetup&&ot(t,e),q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Da(i,e))return o[e]=1,i[e];if(r!==mt&&ot(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ot(c,e))return o[e]=3,s[e];if(n!==mt&&ot(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const u=As[e];let f,h;if(u)return e==="$attrs"&&Vt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==mt&&ot(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ot(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Da(r,e)?(r[e]=n,!0):i!==mt&&ot(i,e)?(i[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==mt&&ot(t,o)||Da(e,o)||(a=s[0])&&ot(a,o)||ot(i,o)||ot(As,o)||ot(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bu(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rl=!0;function $_(t){const e=$d(t),n=t.proxy,i=t.ctx;Rl=!1,e.beforeCreate&&ku(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:E,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:g,render:N,renderTracked:I,renderTriggered:R,errorCaptured:k,serverPrefetch:w,expose:T,inheritAttrs:B,components:Q,directives:q,filters:se}=e;if(c&&K_(c,i,null),o)for(const te in o){const X=o[te];Ve(X)&&(i[te]=X.bind(n))}if(r){const te=r.call(n,n);vt(te)&&(t.data=di(te))}if(Rl=!0,s)for(const te in s){const X=s[te],de=Ve(X)?X.bind(n,n):Ve(X.get)?X.get.bind(n,n):Vn,ge=!Ve(X)&&Ve(X.set)?X.set.bind(n):Vn,Ae=Ct({get:de,set:ge});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Pe=>Ae.value=Pe})}if(a)for(const te in a)qd(a[te],i,n,te);if(l){const te=Ve(l)?l.call(n):l;Reflect.ownKeys(te).forEach(X=>{Fo(X,te[X])})}u&&ku(u,t,"c");function ee(te,X){He(X)?X.forEach(de=>te(de.bind(n))):X&&te(X.bind(n))}if(ee(F_,f),ee(as,h),ee(B_,p),ee(k_,_),ee(N_,E),ee(U_,m),ee(W_,k),ee(G_,I),ee(V_,R),ee(H_,M),ee($s,g),ee(z_,w),He(T))if(T.length){const te=t.exposed||(t.exposed={});T.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:de=>n[X]=de})})}else t.exposed||(t.exposed={});N&&t.render===Vn&&(t.render=N),B!=null&&(t.inheritAttrs=B),Q&&(t.components=Q),q&&(t.directives=q),w&&zd(t)}function K_(t,e,n=Vn){He(t)&&(t=wl(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ku(t,e,n){Yn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,i){let r=i.includes(".")?cp(n,i):()=>n[i];if(yt(t)){const s=e[t];Ve(s)&&Ui(r,s)}else if(Ve(t))Ui(r,t.bind(n));else if(vt(t))if(He(t))t.forEach(s=>qd(s,e,n,i));else{const s=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(s)&&Ui(r,s,t)}}function $d(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Jo(l,c,o,!0)),Jo(l,e,o)),vt(e)&&s.set(e,l),l}function Jo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Jo(t,s,n,!0),r&&r.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Z_={data:Hu,props:zu,emits:zu,methods:xs,computed:xs,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:xs,directives:xs,watch:J_,provide:Hu,inject:Q_};function Hu(t,e){return e?t?function(){return Yt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function Q_(t,e){return xs(wl(t),wl(e))}function wl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?Yt(Object.create(null),t,e):e}function zu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Yt(Object.create(null),Bu(t),Bu(e??{})):e}function J_(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=qt(t[i],e[i]);return n}function Kd(){return{app:null,config:{isNativeTag:Wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(t,e){return function(i,r=null){Ve(i)||(i=Yt({},i)),r!=null&&!vt(r)&&(r=null);const s=Kd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:eg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Og,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Pt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Jc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yr;Yr=c;try{return u()}finally{Yr=f}}};return c}}let Yr=null;function Fo(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function Gn(t,e,n=!1){const i=Ot||Xt;if(i||Yr){const r=Yr?Yr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ve(e)?e.call(i&&i.proxy):e}}const Zd={},Qd=()=>Object.create(Zd),Jd=t=>Object.getPrototypeOf(t)===Zd;function ng(t,e,n,i=!1){const r={},s=Qd();t.propsDefaults=Object.create(null),ep(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Ld(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function ig(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=st(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(t.emitsOptions,h))continue;const p=e[h];if(l)if(ot(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=yn(h);r[_]=Cl(l,a,_,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{ep(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ot(e,f)&&((u=gr(f))===f||!ot(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Cl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ot(e,f))&&(delete s[f],c=!0)}c&&si(t.attrs,"set","")}function ep(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ms(l))continue;const c=e[l];let u;r&&ot(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(n),c=a||mt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Cl(r,l,f,c[f],t,!ot(c,f))}}return o}function Cl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Zs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===gr(n))&&(i=!0))}return i}const rg=new WeakMap;function tp(t,e,n=!1){const i=n?rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ve(t)){const u=f=>{l=!0;const[h,p]=tp(f,e,!0);Yt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,zr),zr;if(He(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);Vu(f)&&(o[f]=mt)}else if(s)for(const u in s){const f=yn(u);if(Vu(f)){const h=s[u],p=o[f]=He(h)||Ve(h)?{type:h}:Yt({},h),_=p.type;let E=!1,m=!0;if(He(_))for(let d=0;d<_.length;++d){const M=_[d],y=Ve(M)&&M.name;if(y==="Boolean"){E=!0;break}else y==="String"&&(m=!1)}else E=Ve(_)&&_.name==="Boolean";p[0]=E,p[1]=m,(E||ot(p,"default"))&&a.push(f)}}const c=[o,a];return vt(t)&&i.set(t,c),c}function Vu(t){return t[0]!=="$"&&!Ms(t)}const np=t=>t[0]==="_"||t==="$stable",Zc=t=>He(t)?t.map(kn):[kn(t)],sg=(t,e,n)=>{if(e._n)return e;const i=qs((...r)=>Zc(e(...r)),n);return i._c=!1,i},ip=(t,e,n)=>{const i=t._ctx;for(const r in t){if(np(r))continue;const s=t[r];if(Ve(s))e[r]=sg(r,s,i);else if(s!=null){const o=Zc(s);e[r]=()=>o}}},rp=(t,e)=>{const n=Zc(e);t.slots.default=()=>n},sp=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},og=(t,e,n)=>{const i=t.slots=Qd();if(t.vnode.shapeFlag&32){const r=e._;r?(sp(i,e,n),n&&hd(i,"_",r,!0)):ip(e,i)}else e&&rp(t,e)},ag=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:sp(r,e,n):(s=!e.$stable,ip(e,r)),o=e}else e&&(rp(t,e),o={default:1});if(s)for(const a in r)!np(a)&&o[a]==null&&delete r[a]},fn=Sg;function lg(t){return cg(t)}function cg(t,e){const n=la();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Vn,insertStaticContent:_}=t,E=(L,D,S,J=null,$=null,j=null,b=void 0,C=null,O=!!D.dynamicChildren)=>{if(L===D)return;L&&!fs(L,D)&&(J=H(L),Pe(L,$,j,!0),L=null),D.patchFlag===-2&&(O=!1,D.dynamicChildren=null);const{type:x,ref:v,shapeFlag:U}=D;switch(x){case Ks:m(L,D,S,J);break;case Kr:d(L,D,S,J);break;case Na:L==null&&M(D,S,J,b);break;case Wt:Q(L,D,S,J,$,j,b,C,O);break;default:U&1?N(L,D,S,J,$,j,b,C,O):U&6?q(L,D,S,J,$,j,b,C,O):(U&64||U&128)&&x.process(L,D,S,J,$,j,b,C,O,ce)}v!=null&&$&&Qo(v,L&&L.ref,j,D||L,!D)},m=(L,D,S,J)=>{if(L==null)i(D.el=a(D.children),S,J);else{const $=D.el=L.el;D.children!==L.children&&c($,D.children)}},d=(L,D,S,J)=>{L==null?i(D.el=l(D.children||""),S,J):D.el=L.el},M=(L,D,S,J)=>{[L.el,L.anchor]=_(L.children,D,S,J,L.el,L.anchor)},y=({el:L,anchor:D},S,J)=>{let $;for(;L&&L!==D;)$=h(L),i(L,S,J),L=$;i(D,S,J)},g=({el:L,anchor:D})=>{let S;for(;L&&L!==D;)S=h(L),r(L),L=S;r(D)},N=(L,D,S,J,$,j,b,C,O)=>{D.type==="svg"?b="svg":D.type==="math"&&(b="mathml"),L==null?I(D,S,J,$,j,b,C,O):w(L,D,$,j,b,C,O)},I=(L,D,S,J,$,j,b,C)=>{let O,x;const{props:v,shapeFlag:U,transition:P,dirs:F}=L;if(O=L.el=o(L.type,j,v&&v.is,v),U&8?u(O,L.children):U&16&&k(L.children,O,null,J,$,Ia(L,j),b,C),F&&$i(L,null,J,"created"),R(O,L,L.scopeId,b,J),v){for(const fe in v)fe!=="value"&&!Ms(fe)&&s(O,fe,null,v[fe],j,J);"value"in v&&s(O,"value",null,v.value,j),(x=v.onVnodeBeforeMount)&&On(x,J,L)}F&&$i(L,null,J,"beforeMount");const V=ug($,P);V&&P.beforeEnter(O),i(O,D,S),((x=v&&v.onVnodeMounted)||V||F)&&fn(()=>{x&&On(x,J,L),V&&P.enter(O),F&&$i(L,null,J,"mounted")},$)},R=(L,D,S,J,$)=>{if(S&&p(L,S),J)for(let j=0;j<J.length;j++)p(L,J[j]);if($){let j=$.subTree;if(D===j||fp(j.type)&&(j.ssContent===D||j.ssFallback===D)){const b=$.vnode;R(L,b,b.scopeId,b.slotScopeIds,$.parent)}}},k=(L,D,S,J,$,j,b,C,O=0)=>{for(let x=O;x<L.length;x++){const v=L[x]=C?Ci(L[x]):kn(L[x]);E(null,v,D,S,J,$,j,b,C)}},w=(L,D,S,J,$,j,b)=>{const C=D.el=L.el;let{patchFlag:O,dynamicChildren:x,dirs:v}=D;O|=L.patchFlag&16;const U=L.props||mt,P=D.props||mt;let F;if(S&&Ki(S,!1),(F=P.onVnodeBeforeUpdate)&&On(F,S,D,L),v&&$i(D,L,S,"beforeUpdate"),S&&Ki(S,!0),(U.innerHTML&&P.innerHTML==null||U.textContent&&P.textContent==null)&&u(C,""),x?T(L.dynamicChildren,x,C,S,J,Ia(D,$),j):b||X(L,D,C,null,S,J,Ia(D,$),j,!1),O>0){if(O&16)B(C,U,P,S,$);else if(O&2&&U.class!==P.class&&s(C,"class",null,P.class,$),O&4&&s(C,"style",U.style,P.style,$),O&8){const V=D.dynamicProps;for(let fe=0;fe<V.length;fe++){const ae=V[fe],_e=U[ae],Le=P[ae];(Le!==_e||ae==="value")&&s(C,ae,_e,Le,$,S)}}O&1&&L.children!==D.children&&u(C,D.children)}else!b&&x==null&&B(C,U,P,S,$);((F=P.onVnodeUpdated)||v)&&fn(()=>{F&&On(F,S,D,L),v&&$i(D,L,S,"updated")},J)},T=(L,D,S,J,$,j,b)=>{for(let C=0;C<D.length;C++){const O=L[C],x=D[C],v=O.el&&(O.type===Wt||!fs(O,x)||O.shapeFlag&70)?f(O.el):S;E(O,x,v,null,J,$,j,b,!0)}},B=(L,D,S,J,$)=>{if(D!==S){if(D!==mt)for(const j in D)!Ms(j)&&!(j in S)&&s(L,j,D[j],null,$,J);for(const j in S){if(Ms(j))continue;const b=S[j],C=D[j];b!==C&&j!=="value"&&s(L,j,C,b,$,J)}"value"in S&&s(L,"value",D.value,S.value,$)}},Q=(L,D,S,J,$,j,b,C,O)=>{const x=D.el=L?L.el:a(""),v=D.anchor=L?L.anchor:a("");let{patchFlag:U,dynamicChildren:P,slotScopeIds:F}=D;F&&(C=C?C.concat(F):F),L==null?(i(x,S,J),i(v,S,J),k(D.children||[],S,v,$,j,b,C,O)):U>0&&U&64&&P&&L.dynamicChildren?(T(L.dynamicChildren,P,S,$,j,b,C),(D.key!=null||$&&D===$.subTree)&&op(L,D,!0)):X(L,D,S,v,$,j,b,C,O)},q=(L,D,S,J,$,j,b,C,O)=>{D.slotScopeIds=C,L==null?D.shapeFlag&512?$.ctx.activate(D,S,J,b,O):se(D,S,J,$,j,b,O):oe(L,D,O)},se=(L,D,S,J,$,j,b)=>{const C=L.component=Cg(L,J,$);if(Vd(L)&&(C.ctx.renderer=ce),Pg(C,!1,b),C.asyncDep){if($&&$.registerDep(C,ee,b),!L.el){const O=C.subTree=Pt(Kr);d(null,O,D,S)}}else ee(C,L,D,S,$,j,b)},oe=(L,D,S)=>{const J=D.component=L.component;if(xg(L,D,S))if(J.asyncDep&&!J.asyncResolved){te(J,D,S);return}else J.next=D,J.update();else D.el=L.el,J.vnode=D},ee=(L,D,S,J,$,j,b)=>{const C=()=>{if(L.isMounted){let{next:U,bu:P,u:F,parent:V,vnode:fe}=L;{const Ee=ap(L);if(Ee){U&&(U.el=fe.el,te(L,U,b)),Ee.asyncDep.then(()=>{L.isUnmounted||C()});return}}let ae=U,_e;Ki(L,!1),U?(U.el=fe.el,te(L,U,b)):U=fe,P&&Ra(P),(_e=U.props&&U.props.onVnodeBeforeUpdate)&&On(_e,V,U,fe),Ki(L,!0);const Le=Wu(L),he=L.subTree;L.subTree=Le,E(he,Le,f(he.el),H(he),L,$,j),U.el=Le.el,ae===null&&Eg(L,Le.el),F&&fn(F,$),(_e=U.props&&U.props.onVnodeUpdated)&&fn(()=>On(_e,V,U,fe),$)}else{let U;const{el:P,props:F}=D,{bm:V,m:fe,parent:ae,root:_e,type:Le}=L,he=Xr(D);Ki(L,!1),V&&Ra(V),!he&&(U=F&&F.onVnodeBeforeMount)&&On(U,ae,D),Ki(L,!0);{_e.ce&&_e.ce._injectChildStyle(Le);const Ee=L.subTree=Wu(L);E(null,Ee,S,J,L,$,j),D.el=Ee.el}if(fe&&fn(fe,$),!he&&(U=F&&F.onVnodeMounted)){const Ee=D;fn(()=>On(U,ae,Ee),$)}(D.shapeFlag&256||ae&&Xr(ae.vnode)&&ae.vnode.shapeFlag&256)&&L.a&&fn(L.a,$),L.isMounted=!0,D=S=J=null}};L.scope.on();const O=L.effect=new gd(C);L.scope.off();const x=L.update=O.run.bind(O),v=L.job=O.runIfDirty.bind(O);v.i=L,v.id=L.uid,O.scheduler=()=>$c(v),Ki(L,!0),x()},te=(L,D,S)=>{D.component=L;const J=L.vnode.props;L.vnode=D,L.next=null,ig(L,D.props,J,S),ag(L,D.children,S),Vi(),Ou(L),Gi()},X=(L,D,S,J,$,j,b,C,O=!1)=>{const x=L&&L.children,v=L?L.shapeFlag:0,U=D.children,{patchFlag:P,shapeFlag:F}=D;if(P>0){if(P&128){ge(x,U,S,J,$,j,b,C,O);return}else if(P&256){de(x,U,S,J,$,j,b,C,O);return}}F&8?(v&16&&xe(x,$,j),U!==x&&u(S,U)):v&16?F&16?ge(x,U,S,J,$,j,b,C,O):xe(x,$,j,!0):(v&8&&u(S,""),F&16&&k(U,S,J,$,j,b,C,O))},de=(L,D,S,J,$,j,b,C,O)=>{L=L||zr,D=D||zr;const x=L.length,v=D.length,U=Math.min(x,v);let P;for(P=0;P<U;P++){const F=D[P]=O?Ci(D[P]):kn(D[P]);E(L[P],F,S,null,$,j,b,C,O)}x>v?xe(L,$,j,!0,!1,U):k(D,S,J,$,j,b,C,O,U)},ge=(L,D,S,J,$,j,b,C,O)=>{let x=0;const v=D.length;let U=L.length-1,P=v-1;for(;x<=U&&x<=P;){const F=L[x],V=D[x]=O?Ci(D[x]):kn(D[x]);if(fs(F,V))E(F,V,S,null,$,j,b,C,O);else break;x++}for(;x<=U&&x<=P;){const F=L[U],V=D[P]=O?Ci(D[P]):kn(D[P]);if(fs(F,V))E(F,V,S,null,$,j,b,C,O);else break;U--,P--}if(x>U){if(x<=P){const F=P+1,V=F<v?D[F].el:J;for(;x<=P;)E(null,D[x]=O?Ci(D[x]):kn(D[x]),S,V,$,j,b,C,O),x++}}else if(x>P)for(;x<=U;)Pe(L[x],$,j,!0),x++;else{const F=x,V=x,fe=new Map;for(x=V;x<=P;x++){const ve=D[x]=O?Ci(D[x]):kn(D[x]);ve.key!=null&&fe.set(ve.key,x)}let ae,_e=0;const Le=P-V+1;let he=!1,Ee=0;const Ie=new Array(Le);for(x=0;x<Le;x++)Ie[x]=0;for(x=F;x<=U;x++){const ve=L[x];if(_e>=Le){Pe(ve,$,j,!0);continue}let Be;if(ve.key!=null)Be=fe.get(ve.key);else for(ae=V;ae<=P;ae++)if(Ie[ae-V]===0&&fs(ve,D[ae])){Be=ae;break}Be===void 0?Pe(ve,$,j,!0):(Ie[Be-V]=x+1,Be>=Ee?Ee=Be:he=!0,E(ve,D[Be],S,null,$,j,b,C,O),_e++)}const Oe=he?fg(Ie):zr;for(ae=Oe.length-1,x=Le-1;x>=0;x--){const ve=V+x,Be=D[ve],ze=ve+1<v?D[ve+1].el:J;Ie[x]===0?E(null,Be,S,ze,$,j,b,C,O):he&&(ae<0||x!==Oe[ae]?Ae(Be,S,ze,2):ae--)}}},Ae=(L,D,S,J,$=null)=>{const{el:j,type:b,transition:C,children:O,shapeFlag:x}=L;if(x&6){Ae(L.component.subTree,D,S,J);return}if(x&128){L.suspense.move(D,S,J);return}if(x&64){b.move(L,D,S,ce);return}if(b===Wt){i(j,D,S);for(let U=0;U<O.length;U++)Ae(O[U],D,S,J);i(L.anchor,D,S);return}if(b===Na){y(L,D,S);return}if(J!==2&&x&1&&C)if(J===0)C.beforeEnter(j),i(j,D,S),fn(()=>C.enter(j),$);else{const{leave:U,delayLeave:P,afterLeave:F}=C,V=()=>i(j,D,S),fe=()=>{U(j,()=>{V(),F&&F()})};P?P(j,V,fe):fe()}else i(j,D,S)},Pe=(L,D,S,J=!1,$=!1)=>{const{type:j,props:b,ref:C,children:O,dynamicChildren:x,shapeFlag:v,patchFlag:U,dirs:P,cacheIndex:F}=L;if(U===-2&&($=!1),C!=null&&Qo(C,null,S,L,!0),F!=null&&(D.renderCache[F]=void 0),v&256){D.ctx.deactivate(L);return}const V=v&1&&P,fe=!Xr(L);let ae;if(fe&&(ae=b&&b.onVnodeBeforeUnmount)&&On(ae,D,L),v&6)me(L.component,S,J);else{if(v&128){L.suspense.unmount(S,J);return}V&&$i(L,null,D,"beforeUnmount"),v&64?L.type.remove(L,D,S,ce,J):x&&!x.hasOnce&&(j!==Wt||U>0&&U&64)?xe(x,D,S,!1,!0):(j===Wt&&U&384||!$&&v&16)&&xe(O,D,S),J&&Ye(L)}(fe&&(ae=b&&b.onVnodeUnmounted)||V)&&fn(()=>{ae&&On(ae,D,L),V&&$i(L,null,D,"unmounted")},S)},Ye=L=>{const{type:D,el:S,anchor:J,transition:$}=L;if(D===Wt){ie(S,J);return}if(D===Na){g(L);return}const j=()=>{r(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(L.shapeFlag&1&&$&&!$.persisted){const{leave:b,delayLeave:C}=$,O=()=>b(S,j);C?C(L.el,j,O):O()}else j()},ie=(L,D)=>{let S;for(;L!==D;)S=h(L),r(L),L=S;r(D)},me=(L,D,S)=>{const{bum:J,scope:$,job:j,subTree:b,um:C,m:O,a:x}=L;Gu(O),Gu(x),J&&Ra(J),$.stop(),j&&(j.flags|=8,Pe(b,L,D,S)),C&&fn(C,D),fn(()=>{L.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},xe=(L,D,S,J=!1,$=!1,j=0)=>{for(let b=j;b<L.length;b++)Pe(L[b],D,S,J,$)},H=L=>{if(L.shapeFlag&6)return H(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const D=h(L.anchor||L.el),S=D&&D[D_];return S?h(S):D};let re=!1;const le=(L,D,S)=>{L==null?D._vnode&&Pe(D._vnode,null,null,!0):E(D._vnode||null,L,D,null,null,null,S),D._vnode=L,re||(re=!0,Ou(),Bd(),re=!1)},ce={p:E,um:Pe,m:Ae,r:Ye,mt:se,mc:k,pc:X,pbc:T,n:H,o:t};return{render:le,hydrate:void 0,createApp:tg(le)}}function Ia({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ki({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function op(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ci(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&op(o,a)),a.type===Ks&&(a.el=o.el)}}function fg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function ap(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ap(e)}function Gu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hg=Symbol.for("v-scx"),dg=()=>Gn(hg);function Ui(t,e,n){return lp(t,e,n)}function lp(t,e,n=mt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Yt({},n),l=e&&i||!e&&s!=="post";let c;if(Us){if(s==="sync"){const p=dg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Vn,p.resume=Vn,p.pause=Vn,p}}const u=Ot;a.call=(p,_,E)=>Yn(p,u,_,E);let f=!1;s==="post"?a.scheduler=p=>{fn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():$c(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=w_(t,e,a);return Us&&(c?c.push(h):l&&h()),h}function pg(t,e,n){const i=this.proxy,r=yt(t)?t.includes(".")?cp(i,t):()=>i[t]:t.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,n=e);const o=Zs(this),a=lp(r,s.bind(i),n);return o(),a}function cp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const mg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${gr(e)}Modifiers`];function _g(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||mt;let r=n;const s=e.startsWith("update:"),o=s&&mg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>yt(u)?u.trim():u)),o.number&&(r=n.map($m)));let a,l=i[a=Ta(e)]||i[a=Ta(yn(e))];!l&&s&&(l=i[a=Ta(gr(e))]),l&&Yn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yn(c,t,6,r)}}function up(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ve(t)){const l=c=>{const u=up(c,e,!0);u&&(a=!0,Yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(vt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):Yt(o,s),vt(t)&&i.set(t,o),o)}function da(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,gr(e))||ot(t,e))}function Wu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:E}=t,m=Zo(t);let d,M;try{if(n.shapeFlag&4){const g=r||i,N=g;d=kn(c.call(N,g,u,f,p,h,_)),M=a}else{const g=e;d=kn(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),M=e.props?a:gg(a)}}catch(g){Ts.length=0,fa(g,t,1),d=Pt(Kr)}let y=d;if(M&&E!==!1){const g=Object.keys(M),{shapeFlag:N}=y;g.length&&N&7&&(s&&g.some(Bc)&&(M=vg(M,s)),y=Zr(y,M,!1,!0))}return n.dirs&&(y=Zr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Kc(y,n.transition),d=y,Zo(m),d}const gg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},vg=(t,e)=>{const n={};for(const i in t)(!Bc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Xu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xu(i,o,c):!0:!!o;return!1}function Xu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!da(n,s))return!0}return!1}function Eg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const fp=t=>t.__isSuspense;function Sg(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):L_(t)}const Wt=Symbol.for("v-fgt"),Ks=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),Ts=[];let dn=null;function Bt(t=!1){Ts.push(dn=t?null:[])}function Mg(){Ts.pop(),dn=Ts[Ts.length-1]||null}let Ds=1;function Yu(t,e=!1){Ds+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function hp(t){return t.dynamicChildren=Ds>0?dn||zr:null,Mg(),Ds>0&&dn&&dn.push(t),t}function pi(t,e,n,i,r,s){return hp(Ke(t,e,n,i,r,s,!0))}function Bi(t,e,n,i,r){return hp(Pt(t,e,n,i,r,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const dp=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||Ft(t)||Ve(t)?{i:Xt,r:t,k:e,f:!!n}:t:null);function Ke(t,e=null,n=null,i=0,r=null,s=t===Wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&Bo(e),scopeId:Hd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Qc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),Ds>0&&!o&&dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dn.push(l),l}const Pt=yg;function yg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Wd)&&(t=Kr),Is(t)){const a=Zr(t,e,!0);return n&&Qc(a,n),Ds>0&&!s&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag=-2,a}if(Ug(t)&&(t=t.__vccOpts),e){e=bg(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=zc(a)),vt(l)&&(qc(l)&&!He(l)&&(l=Yt({},l)),e.style=ca(l))}const o=yt(t)?1:fp(t)?128:I_(t)?64:vt(t)?4:Ve(t)?2:0;return Ke(t,e,n,i,r,o,s,!0)}function bg(t){return t?qc(t)||Jd(t)?Yt({},t):t:null}function Zr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Tg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dp(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Bo(e)):[s,Bo(e)]:Bo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Kc(u,l.clone(u)),u}function Ag(t=" ",e=0){return Pt(Ks,null,t,e)}function kn(t){return t==null||typeof t=="boolean"?Pt(Kr):He(t)?Pt(Wt,null,t.slice()):Is(t)?Ci(t):Pt(Ks,null,String(t))}function Ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function Qc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Jd(e)?e._ctx=Xt:r===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),i&64?(n=16,e=[Ag(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zc([e.class,i.class]));else if(r==="style")e.style=ca([e.style,i.style]);else if(ra(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(t,e,n,i=null){Yn(t,e,7,[n,i])}const Rg=Kd();let wg=0;function Cg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Rg,s={uid:wg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tp(i,r),emitsOptions:up(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_g.bind(null,s),t.ce&&t.ce(s),s}let Ot=null;const Ns=()=>Ot||Xt;let ea,Pl;{const t=la(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Pl=e("__VUE_SSR_SETTERS__",n=>Us=n)}const Zs=t=>{const e=Ot;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},ju=()=>{Ot&&Ot.scope.off(),ea(null)};function pp(t){return t.vnode.shapeFlag&4}let Us=!1;function Pg(t,e=!1,n=!1){e&&Pl(e);const{props:i,children:r}=t.vnode,s=pp(t);ng(t,i,s,e),og(t,r,n);const o=s?Lg(t,e):void 0;return e&&Pl(!1),o}function Lg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q_);const{setup:i}=n;if(i){Vi();const r=t.setupContext=i.length>1?Ig(t):null,s=Zs(t),o=js(i,t,0,[t.props,r]),a=cd(o);if(Gi(),s(),(a||t.sp)&&!Xr(t)&&zd(t),a){if(o.then(ju,ju),e)return o.then(l=>{qu(t,l)}).catch(l=>{fa(l,t,0)});t.asyncDep=o}else qu(t,o)}else mp(t)}function qu(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=Ud(e)),mp(t)}function mp(t,e,n){const i=t.type;t.render||(t.render=i.render||Vn);{const r=Zs(t);Vi();try{$_(t)}finally{Gi(),r()}}}const Dg={get(t,e){return Vt(t,"get",""),t[e]}};function Ig(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Dg),slots:t.slots,emit:t.emit,expose:e}}function Jc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ud(M_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in As)return As[n](t)},has(e,n){return n in e||n in As}})):t.proxy}function Ng(t,e=!0){return Ve(t)?t.displayName||t.name:t.name||e&&t.__name}function Ug(t){return Ve(t)&&"__vccOpts"in t}const Ct=(t,e)=>T_(t,e,Us);function pa(t,e,n){const i=arguments.length;return i===2?vt(e)&&!He(e)?Is(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Is(n)&&(n=[n]),Pt(t,e,n))}const Og="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ll;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{Ll=$u.createPolicy("vue",{createHTML:t=>t})}catch{}const _p=Ll?t=>Ll.createHTML(t):t=>t,Fg="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,Ku=ri&&ri.createElement("template"),kg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ri.createElementNS(Fg,t):e==="mathml"?ri.createElementNS(Bg,t):n?ri.createElement(t,{is:n}):ri.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ri.createTextNode(t),createComment:t=>ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ku.innerHTML=_p(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ku.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hg=Symbol("_vtc");function zg(t,e,n){const i=t[Hg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zu=Symbol("_vod"),Vg=Symbol("_vsh"),Gg=Symbol(""),Wg=/(^|;)\s*display\s*:/;function Xg(t,e,n){const i=t.style,r=yt(n);let s=!1;if(n&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ko(i,a,"")}else for(const o in e)n[o]==null&&ko(i,o,"");for(const o in n)o==="display"&&(s=!0),ko(i,o,n[o])}else if(r){if(e!==n){const o=i[Gg];o&&(n+=";"+o),i.cssText=n,s=Wg.test(n)}}else e&&t.removeAttribute("style");Zu in t&&(t[Zu]=s?i.display:"",t[Vg]&&(i.display="none"))}const Qu=/\s*!important$/;function ko(t,e,n){if(He(n))n.forEach(i=>ko(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Yg(t,e);Qu.test(n)?t.setProperty(gr(i),n.replace(Qu,""),"important"):t[i]=n}}const Ju=["Webkit","Moz","ms"],Ua={};function Yg(t,e){const n=Ua[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return Ua[e]=i;i=aa(i);for(let r=0;r<Ju.length;r++){const s=Ju[r]+i;if(s in t)return Ua[e]=s}return e}const ef="http://www.w3.org/1999/xlink";function tf(t,e,n,i,r,s=t_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n):n==null||s&&!dd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":gi(n)?String(n):n)}function nf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_p(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=dd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function jg(t,e,n,i){t.addEventListener(e,n,i)}function qg(t,e,n,i){t.removeEventListener(e,n,i)}const rf=Symbol("_vei");function $g(t,e,n,i,r=null){const s=t[rf]||(t[rf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Kg(e);if(i){const c=s[e]=Jg(i,r);jg(t,a,c,l)}else o&&(qg(t,a,o,l),s[e]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function Kg(t){let e;if(sf.test(t)){e={};let i;for(;i=t.match(sf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gr(t.slice(2)),e]}let Oa=0;const Zg=Promise.resolve(),Qg=()=>Oa||(Zg.then(()=>Oa=0),Oa=Date.now());function Jg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Yn(e0(i,n.value),e,5,[i])};return n.value=t,n.attached=Qg(),n}function e0(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,t0=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?zg(t,i,o):e==="style"?Xg(t,n,i):ra(e)?Bc(e)||$g(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n0(t,e,i,o))?(nf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!yt(i))?nf(t,yn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),tf(t,e,i,o))};function n0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&of(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return of(e)&&yt(n)?!1:e in t}const i0=Yt({patchProp:t0},kg);let af;function r0(){return af||(af=lg(i0))}const s0=(...t)=>{const e=r0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=a0(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,o0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function o0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function a0(t){return yt(t)?document.querySelector(t):t}const l0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%200C5.374%200%200%205.373%200%2012C0%2017.302%203.438%2021.8%208.207%2023.387C8.806%2023.498%209%2023.126%209%2022.81V20.576C5.662%2021.302%204.967%2019.16%204.967%2019.16C4.421%2017.773%203.634%2017.404%203.634%2017.404C2.545%2016.659%203.717%2016.675%203.717%2016.675C4.922%2016.759%205.556%2017.912%205.556%2017.912C6.626%2019.746%208.363%2019.216%209.048%2018.909C9.155%2018.134%209.466%2017.604%209.81%2017.305C7.145%2017%204.343%2015.971%204.343%2011.374C4.343%2010.063%204.812%208.993%205.579%208.153C5.455%207.85%205.044%206.629%205.696%204.977C5.696%204.977%206.704%204.655%208.997%206.207C9.954%205.941%2010.98%205.808%2012%205.803C13.02%205.808%2014.047%205.941%2015.006%206.207C17.297%204.655%2018.303%204.977%2018.303%204.977C18.956%206.63%2018.545%207.851%2018.421%208.153C19.191%208.993%2019.656%2010.064%2019.656%2011.374C19.656%2015.983%2016.849%2016.998%2014.177%2017.295C14.607%2017.667%2015%2018.397%2015%2019.517V22.81C15%2023.129%2015.192%2023.504%2015.801%2023.386C20.566%2021.797%2024%2017.3%2024%2012C24%205.373%2018.627%200%2012%200Z'%20fill='white'/%3e%3c/svg%3e",c0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='white'/%3e%3cpath%20d='M7.6%2011.775V11.7703V7.08999L7.5568%207.05795H7.5532L6.5704%206.33075C5.9692%205.88435%205.1124%205.90595%204.5796%206.43155C4.2232%206.78435%204%207.27395%204%207.81755V9.11427L7.6%2011.775ZM16.96%2011.7703V11.775L20.56%209.11427V7.81755C20.56%207.28115%2020.344%206.79155%2019.9912%206.43875C19.4656%205.91423%2018.6358%205.85267%2018.0386%206.29367L17.0032%207.05795L16.96%207.08999V11.7703ZM8.32%2012.3024L12.0662%2015.0716C12.1932%2015.1655%2012.3671%2015.1655%2012.4942%2015.0716L16.24%2012.3024V7.62207L12.28%2010.5499L8.32%207.62207V12.3024ZM16.96%2012.67V18.11C16.96%2018.3087%2017.1213%2018.4699%2017.32%2018.4699H19.66C20.1572%2018.4699%2020.56%2018.0671%2020.56%2017.57V10.0089L16.96%2012.67ZM7.6%2012.67L4%2010.0089V17.57C4%2018.0671%204.40284%2018.4699%204.9%2018.4699H7.24C7.43872%2018.4699%207.6%2018.3087%207.6%2018.11V12.67Z'%20fill='black'/%3e%3c/svg%3e",u0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_8)'%3e%3cpath%20d='M12%200C5.373%200%200%205.373%200%2012C0%2018.627%205.373%2024%2012%2024C18.627%2024%2024%2018.627%2024%2012C24%205.373%2018.627%200%2012%200ZM10%2016H8V10H10V16ZM9%209.109C8.393%209.109%207.9%208.613%207.9%208C7.9%207.388%208.392%206.891%209%206.891C9.608%206.891%2010.1%207.388%2010.1%208C10.1%208.613%209.607%209.109%209%209.109ZM17%2016H15.002V13.139C15.002%2011.258%2013%2011.417%2013%2013.139V16H11V10H13V11.093C13.872%209.477%2017%209.357%2017%2012.641V16Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_8'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",f0={class:"header"},h0={class:"header__content"},d0={class:"header__navigation","aria-label":"Main Navigation"},p0={class:"nav-list"},m0={class:"header__title"},_0={class:"header__title-text"},g0={class:"header__links","aria-label":"Social Media Links"},v0=["href"],x0=["href"],E0=["href"],S0=Jt({__name:"Header",props:{activeSection:{}},emits:["setActiveSection"],setup(t,{emit:e}){const n=e,i="https://github.com/your-github",r="https://linkedin.com/in/your-linkedin",s="your-email@example.com",o=a=>{n("setActiveSection",a)};return(a,l)=>(Bt(),pi("header",f0,[Ke("div",h0,[Ke("nav",d0,[Ke("ul",p0,[Ke("li",{class:"nav-link",onClick:l[0]||(l[0]=c=>o("portfolio"))},rn(a.$t("message.portfolio")),1),Ke("li",{class:"nav-link",onClick:l[1]||(l[1]=c=>o("experience"))},rn(a.$t("message.experience")),1),Ke("li",{class:"nav-link",onClick:l[2]||(l[2]=c=>o("projects"))},rn(a.$t("message.projects")),1)])]),Ke("div",m0,[Ke("h1",_0,rn(a.activeSection),1)]),Ke("div",g0,[Ke("a",{href:pn(i),target:"_blank",rel:"noopener noreferrer",class:"social-link","aria-label":"GitHub"},l[3]||(l[3]=[Ke("img",{src:l0,alt:"GitHub icon",class:"social-icon"},null,-1)]),8,v0),Ke("a",{href:pn(s),class:"social-link","aria-label":"Email"},l[4]||(l[4]=[Ke("img",{src:c0,alt:"Gmail icon",class:"social-icon"},null,-1)]),8,x0),Ke("a",{href:pn(r),target:"_blank",rel:"noopener noreferrer",class:"social-link","aria-label":"LinkedIn"},l[5]||(l[5]=[Ke("img",{src:u0,alt:"LinkedIn icon",class:"social-icon"},null,-1)]),8,E0)])])]))}}),jn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},M0=jn(S0,[["__scopeId","data-v-576ae2e9"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="175",jr={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},y0=0,lf=1,b0=2,gp=1,A0=2,ii=3,ki=0,sn=1,oi=2,Oi=0,qr=1,Dl=2,cf=3,uf=4,T0=5,or=100,R0=101,w0=102,C0=103,P0=104,L0=200,D0=201,I0=202,N0=203,Il=204,Nl=205,U0=206,O0=207,F0=208,B0=209,k0=210,H0=211,z0=212,V0=213,G0=214,Ul=0,Ol=1,Fl=2,Qr=3,Bl=4,kl=5,Hl=6,zl=7,vp=0,W0=1,X0=2,Fi=0,Y0=1,j0=2,q0=3,$0=4,K0=5,Z0=6,Q0=7,xp=300,Jr=301,es=302,Vl=303,Gl=304,ma=306,Wl=1e3,lr=1001,Xl=1002,In=1003,J0=1004,lo=1005,zn=1006,Fa=1007,cr=1008,mi=1009,Ep=1010,Sp=1011,Os=1012,tu=1013,pr=1014,ai=1015,Qs=1016,nu=1017,iu=1018,Fs=1020,Mp=35902,yp=1021,bp=1022,Pn=1023,Ap=1024,Tp=1025,Bs=1026,ks=1027,Rp=1028,ru=1029,wp=1030,su=1031,ou=1033,Ho=33776,zo=33777,Vo=33778,Go=33779,Yl=35840,jl=35841,ql=35842,$l=35843,Kl=36196,Zl=37492,Ql=37496,Jl=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,fc=37820,hc=37821,Wo=36492,dc=36494,pc=36495,Cp=36283,mc=36284,_c=36285,gc=36286,ev=3200,tv=3201,nv=0,iv=1,Ii="",xn="srgb",ts="srgb-linear",ta="linear",ut="srgb",Sr=7680,ff=519,rv=512,sv=513,ov=514,Pp=515,av=516,lv=517,cv=518,uv=519,hf=35044,df="300 es",li=2e3,na=2001;class vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,vc=180/Math.PI;function Js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function fv(t,e){return(t%e+e)%e}function Ba(t,e,n){return(1-n)*t+n*e}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:Xo};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],E=r[0],m=r[3],d=r[6],M=r[1],y=r[4],g=r[7],N=r[2],I=r[5],R=r[8];return s[0]=o*E+a*M+l*N,s[3]=o*m+a*y+l*I,s[6]=o*d+a*g+l*R,s[1]=c*E+u*M+f*N,s[4]=c*m+u*y+f*I,s[7]=c*d+u*g+f*R,s[2]=h*E+p*M+_*N,s[5]=h*m+p*y+_*I,s[8]=h*d+p*g+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ka.makeScale(e,n)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,n){return this.premultiply(ka.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new We;function Lp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dv(){const t=Hs("canvas");return t.style.display="block",t}const pf={};function Yo(t){t in pf||(pf[t]=!0,console.warn(t))}function pv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function mv(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _v(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gv(){const t={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ts]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:mf,fromXYZ:_f,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:mf,fromXYZ:_f,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const Je=gv();function hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $r(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mr;class vv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=Hs("canvas")),Mr.width=e.width,Mr.height=e.height;const r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hi(n[i]/255)*255):n[i]=hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ha(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ev=0;class Qt extends vr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=lr,r=lr,s=zn,o=cr,a=Pn,l=mi,c=Qt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Js(),this.name="",this.source=new au(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=xp;Qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],E=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,g=(p+1)/2,N=(d+1)/2,I=(u+h)/4,R=(f+E)/4,k=(_+m)/4;return y>g&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=I/i,s=R/i):g>N?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=I/r,s=k/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=k/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-_)*(m-_)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-E)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new au(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Sv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dp extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=E;return}if(f!==E||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*E,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const N=Math.sqrt(y),I=Math.atan2(N,d*M);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}const g=a*M;if(l=l*m+h*g,c=c*m+p*g,u=u*m+_*g,f=f*m+E*g,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new Y,gf=new _r;class eo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),uo.subVectors(this.max,ds),yr.subVectors(e.a,ds),br.subVectors(e.b,ds),Ar.subVectors(e.c,ds),Ei.subVectors(br,yr),Si.subVectors(Ar,br),Zi.subVectors(yr,Ar);let n=[0,-Ei.z,Ei.y,0,-Si.z,Si.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Si.z,0,-Si.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Si.y,Si.x,0,-Zi.y,Zi.x,0];return!Va(n,yr,br,Ar,uo)||(n=[1,0,0,0,1,0,0,0,1],!Va(n,yr,br,Ar,uo))?!1:(fo.crossVectors(Ei,Si),n=[fo.x,fo.y,fo.z],Va(n,yr,br,Ar,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Tn=new Y,co=new eo,yr=new Y,br=new Y,Ar=new Y,Ei=new Y,Si=new Y,Zi=new Y,ds=new Y,uo=new Y,fo=new Y,Qi=new Y;function Va(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yv=new eo,ps=new Y,Ga=new Y;class _a{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const n=ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Ga)),this.expandByPoint(ps.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new Y,Wa=new Y,ho=new Y,Mi=new Y,Xa=new Y,po=new Y,Ya=new Y;class lu{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wa.copy(e).add(n).multiplyScalar(.5),ho.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Wa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ho),a=Mi.dot(this.direction),l=-Mi.dot(ho),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const E=1/u;f*=E,h*=E,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wa).addScaledVector(ho,h),p}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Xa.subVectors(n,e),po.subVectors(i,e),Ya.crossVectors(Xa,po);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(Mi,po));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ya);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,_,E,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,E,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,E,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,E=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,E=c*f;n[0]=h+E*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,E=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*u,n[4]=E-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Av)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),yi.crossVectors(i,cn),yi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),yi.crossVectors(i,cn)),yi.normalize(),mo.crossVectors(cn,yi),r[0]=yi.x,r[4]=mo.x,r[8]=cn.x,r[1]=yi.y,r[5]=mo.y,r[9]=cn.y,r[2]=yi.z,r[6]=mo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],E=i[6],m=i[10],d=i[14],M=i[3],y=i[7],g=i[11],N=i[15],I=r[0],R=r[4],k=r[8],w=r[12],T=r[1],B=r[5],Q=r[9],q=r[13],se=r[2],oe=r[6],ee=r[10],te=r[14],X=r[3],de=r[7],ge=r[11],Ae=r[15];return s[0]=o*I+a*T+l*se+c*X,s[4]=o*R+a*B+l*oe+c*de,s[8]=o*k+a*Q+l*ee+c*ge,s[12]=o*w+a*q+l*te+c*Ae,s[1]=u*I+f*T+h*se+p*X,s[5]=u*R+f*B+h*oe+p*de,s[9]=u*k+f*Q+h*ee+p*ge,s[13]=u*w+f*q+h*te+p*Ae,s[2]=_*I+E*T+m*se+d*X,s[6]=_*R+E*B+m*oe+d*de,s[10]=_*k+E*Q+m*ee+d*ge,s[14]=_*w+E*q+m*te+d*Ae,s[3]=M*I+y*T+g*se+N*X,s[7]=M*R+y*B+g*oe+N*de,s[11]=M*k+y*Q+g*ee+N*ge,s[15]=M*w+y*q+g*te+N*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],E=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+E*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],E=e[13],m=e[14],d=e[15],M=f*m*c-E*h*c+E*l*p-a*m*p-f*l*d+a*h*d,y=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,g=u*E*c-_*f*c+_*a*p-o*E*p-u*a*d+o*f*d,N=_*f*l-u*E*l-_*a*h+o*E*h+u*a*m-o*f*m,I=n*M+i*y+r*g+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=M*R,e[1]=(E*h*s-f*m*s-E*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=y*R,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*d+n*h*d)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=g*R,e[9]=(_*f*s-u*E*s-_*i*p+n*E*p+u*i*d-n*f*d)*R,e[10]=(o*E*s-_*a*s+_*i*c-n*E*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=N*R,e[13]=(u*E*r-_*f*r+_*i*h-n*E*h-u*i*m+n*f*m)*R,e[14]=(_*a*r-o*E*r-_*i*l+n*E*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,E=o*u,m=o*f,d=a*f,M=l*c,y=l*u,g=l*f,N=i.x,I=i.y,R=i.z;return r[0]=(1-(E+d))*N,r[1]=(p+g)*N,r[2]=(_-y)*N,r[3]=0,r[4]=(p-g)*I,r[5]=(1-(h+d))*I,r[6]=(m+M)*I,r[7]=0,r[8]=(_+y)*R,r[9]=(m-M)*R,r[10]=(1-(h+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/o,f=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===li)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===na)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let _,E;if(a===li)_=(o+s)*f,E=-2*f;else if(a===na)_=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Tr=new Y,Rn=new Mt,bv=new Y(0,0,0),Av=new Y(1,1,1),yi=new Y,mo=new Y,cn=new Y,vf=new Mt,xf=new _r;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tv=0;const Ef=new Y,Rr=new _r,Qn=new Mt,_o=new Y,ms=new Y,Rv=new Y,wv=new _r,Sf=new Y(1,0,0),Mf=new Y(0,1,0),yf=new Y(0,0,1),bf={type:"added"},Cv={type:"removed"},wr={type:"childadded",child:null},ja={type:"childremoved",child:null};class on extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new Y,n=new _i,i=new _r,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new We}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,n){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ms,_o,this.up):Qn.lookAt(_o,ms,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cv),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new Y(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new Y,Jn=new Y,qa=new Y,ei=new Y,Cr=new Y,Pr=new Y,Af=new Y,$a=new Y,Ka=new Y,Za=new Y,Qa=new St,Ja=new St,el=new St;class Cn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),Jn.subVectors(i,n),qa.subVectors(e,n);const o=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(qa),c=Jn.dot(Jn),u=Jn.dot(qa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qa.setScalar(0),Ja.setScalar(0),el.setScalar(0),Qa.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,i),el.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qa,s.x),o.addScaledVector(Ja,s.y),o.addScaledVector(el,s.z),o}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),Jn.subVectors(e,n),wn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Pr.subVectors(s,i),$a.subVectors(e,i);const l=Cr.dot($a),c=Pr.dot($a);if(l<=0&&c<=0)return n.copy(i);Ka.subVectors(e,r);const u=Cr.dot(Ka),f=Pr.dot(Ka);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Cr,o);Za.subVectors(e,s);const p=Cr.dot(Za),_=Pr.dot(Za);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Pr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Af.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Af,a);const d=1/(m+E+h);return o=E*d,a=h*d,n.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},go={h:0,s:0,l:0};function tl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=fv(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tl(o,s,e+1/3),this.g=tl(o,s,e),this.b=tl(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=Np[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(qe(zt.r*255,0,255))*65536+Math.round(qe(zt.g*255,0,255))*256+Math.round(qe(zt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=xn){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(go);const i=Ba(bi.h,go.h,n),r=Ba(bi.s,go.s,n),s=Ba(bi.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ct;ct.NAMES=Np;let Pv=0;class to extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=qr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Nl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Up extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new Y,vo=new je;let Lv=0;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hf,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hf&&(e.usage=this.usage),e}}class Op extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fp extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hr extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Dv=0;const vn=new Mt,nl=new on,Lr=new Y,un=new eo,_s=new eo,Nt=new Y;class xi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?Fp:Op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(un.min,_s.min),un.expandByPoint(Nt),Nt.addVectors(un.max,_s.max),un.expandByPoint(Nt)):(un.expandByPoint(_s.min),un.expandByPoint(_s.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),Nt.add(Lr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new Y,l[k]=new Y;const c=new Y,u=new Y,f=new Y,h=new je,p=new je,_=new je,E=new Y,m=new Y;function d(k,w,T){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,k),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const B=1/(p.x*_.y-_.x*p.y);isFinite(B)&&(E.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(B),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(B),a[k].add(E),a[w].add(E),a[T].add(E),l[k].add(m),l[w].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,w=M.length;k<w;++k){const T=M[k],B=T.start,Q=T.count;for(let q=B,se=B+Q;q<se;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new Y,g=new Y,N=new Y,I=new Y;function R(k){N.fromBufferAttribute(r,k),I.copy(N);const w=a[k];y.copy(w),y.sub(N.multiplyScalar(N.dot(w))).normalize(),g.crossVectors(I,w);const B=g.dot(l[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,B)}for(let k=0,w=M.length;k<w;++k){const T=M[k],B=T.start,Q=T.count;for(let q=B,se=B+Q;q<se;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),E=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new Mt,Ji=new lu,xo=new _a,Rf=new Y,Eo=new Y,So=new Y,Mo=new Y,il=new Y,yo=new Y,wf=new Y,bo=new Y;class ci extends on{constructor(e=new xi,n=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(il.fromBufferAttribute(f,e),o?yo.addScaledVector(il,u):yo.addScaledVector(il.sub(n),u))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(xo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(xo,Rf)===null||Ji.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=M,N=y;g<N;g+=3){const I=a.getX(g),R=a.getX(g+1),k=a.getX(g+2);r=Ao(this,d,e,i,c,u,f,I,R,k),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=_,d=E;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);r=Ao(this,o,e,i,c,u,f,M,y,g),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=h.length;_<E;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=M,N=y;g<N;g+=3){const I=g,R=g+1,k=g+2;r=Ao(this,d,e,i,c,u,f,I,R,k),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=_,d=E;m<d;m+=3){const M=m,y=m+1,g=m+2;r=Ao(this,o,e,i,c,u,f,M,y,g),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Iv(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;bo.copy(a),bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bo);return c<n.near||c>n.far?null:{distance:c,point:bo.clone(),object:t}}function Ao(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Eo),t.getVertexPosition(l,So),t.getVertexPosition(c,Mo);const u=Iv(t,e,n,i,Eo,So,Mo,wf);if(u){const f=new Y;Cn.getBarycoord(wf,Eo,So,Mo,f),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,f,new je)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Cn.getNormal(Eo,So,Mo,h.normal),u.face=h,u.barycoord=f}return u}class no extends xi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(u,3)),this.setAttribute("uv",new hr(f,2));function _(E,m,d,M,y,g,N,I,R,k,w){const T=g/R,B=N/k,Q=g/2,q=N/2,se=I/2,oe=R+1,ee=k+1;let te=0,X=0;const de=new Y;for(let ge=0;ge<ee;ge++){const Ae=ge*B-q;for(let Pe=0;Pe<oe;Pe++){const Ye=Pe*T-Q;de[E]=Ye*M,de[m]=Ae*y,de[d]=se,c.push(de.x,de.y,de.z),de[E]=0,de[m]=0,de[d]=I>0?1:-1,u.push(de.x,de.y,de.z),f.push(Pe/R),f.push(1-ge/k),te+=1}}for(let ge=0;ge<k;ge++)for(let Ae=0;Ae<R;Ae++){const Pe=h+Ae+oe*ge,Ye=h+Ae+oe*(ge+1),ie=h+(Ae+1)+oe*(ge+1),me=h+(Ae+1)+oe*ge;l.push(Pe,Ye,me),l.push(Ye,ie,me),X+=6}a.addGroup(p,X,w),p+=X,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=ns(t[n]);for(const r in i)e[r]=i[r]}return e}function Nv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Uv={clone:ns,merge:$t};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kp extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new Y,Cf=new je,Pf=new je;class En extends kp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Cf,Pf),n.subVectors(Pf,Cf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Dr=-90,Ir=1;class Bv extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Dr,Ir,e,n);r.layers=this.layers,this.add(r);const s=new En(Dr,Ir,e,n);s.layers=this.layers,this.add(s);const o=new En(Dr,Ir,e,n);o.layers=this.layers,this.add(o);const a=new En(Dr,Ir,e,n);a.layers=this.layers,this.add(a);const l=new En(Dr,Ir,e,n);l.layers=this.layers,this.add(l);const c=new En(Dr,Ir,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hp extends Qt{constructor(e=[],n=Jr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Oi});s.uniforms.tEquirect.value=n;const o=new ci(r,s),a=n.minFilter;return n.minFilter===cr&&(n.minFilter=zn),new Bv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class To extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hv={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),d=this._getHandJoint(c,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class zv extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const sl=new Y,Vv=new Y,Gv=new We;class Pi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sl.subVectors(i,n).cross(Vv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Gv.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new _a,Ro=new Y;class zp{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],E=r[10],m=r[11],d=r[12],M=r[13],y=r[14],g=r[15];if(i[0].setComponents(l-s,h-c,m-p,g-d).normalize(),i[1].setComponents(l+s,h+c,m+p,g+d).normalize(),i[2].setComponents(l+o,h+u,m+_,g+M).normalize(),i[3].setComponents(l-o,h-u,m-_,g-M).normalize(),i[4].setComponents(l-a,h-f,m-E,g-y).normalize(),n===li)i[5].setComponents(l+a,h+f,m+E,g+y).normalize();else if(n===na)i[5].setComponents(a,f,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lf=new Mt,xc=new lu,wo=new _a,Co=new Y;class Wv extends on{constructor(e=new xi,n=new Vp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Lf.copy(r).invert(),xc.copy(e.ray).applyMatrix4(Lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,E=p;_<E;_++){const m=c.getX(_);Co.fromBufferAttribute(f,m),Df(Co,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,E=p;_<E;_++)Co.fromBufferAttribute(f,_),Df(Co,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Df(t,e,n,i,r,s,o){const a=xc.distanceSqToPoint(t);if(a<n){const l=new Y;xc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gp extends Qt{constructor(e,n,i=pr,r,s,o,a=In,l=In,c,u=Bs){if(u!==Bs&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new au(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ga extends xi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],E=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let y=0;y<c;y++){const g=y*f-s;_.push(g,-M,0),E.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,g=M+c*(d+1),N=M+1+c*(d+1),I=M+1+c*d;p.push(y,g,I),p.push(g,N,I)}this.setIndex(p),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(E,3)),this.setAttribute("uv",new hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xv extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yv extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const If={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class jv{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const qv=new jv;class cu{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cu.DEFAULT_MATERIAL_NAME="__DEFAULT";class $v extends cu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=If.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Hs("img");function l(){u(),If.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Kv extends cu{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new $v(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Zv extends kp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Qv extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Nf{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jv extends vr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Uf(t,e,n,i){const r=ex(i);switch(n){case yp:return t*e;case Ap:return t*e;case Tp:return t*e*2;case Rp:return t*e/r.components*r.byteLength;case ru:return t*e/r.components*r.byteLength;case wp:return t*e*2/r.components*r.byteLength;case su:return t*e*2/r.components*r.byteLength;case bp:return t*e*3/r.components*r.byteLength;case Pn:return t*e*4/r.components*r.byteLength;case ou:return t*e*4/r.components*r.byteLength;case Ho:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jl:case $l:return Math.max(t,16)*Math.max(e,8)/4;case Yl:case ql:return Math.max(t,8)*Math.max(e,8)/2;case Kl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wo:case dc:case pc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Cp:case mc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _c:case gc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ex(t){switch(t){case mi:case Ep:return{byteLength:1,components:1};case Os:case Sp:case Qs:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case pr:case tu:case ai:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function tx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],E=f[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++h,f[h]=E)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const E=f[p];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ES=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ox,alphatest_pars_fragment:ax,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:ux,batching_vertex:fx,begin_vertex:hx,beginnormal_vertex:dx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:_x,clipping_planes_fragment:gx,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:Ex,color_fragment:Sx,color_pars_fragment:Mx,color_pars_vertex:yx,color_vertex:bx,common:Ax,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Rx,displacementmap_pars_vertex:wx,displacementmap_vertex:Cx,emissivemap_fragment:Px,emissivemap_pars_fragment:Lx,colorspace_fragment:Dx,colorspace_pars_fragment:Ix,envmap_fragment:Nx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:qx,envmap_vertex:Bx,fog_vertex:kx,fog_pars_vertex:Hx,fog_fragment:zx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:Yx,lights_pars_begin:jx,lights_toon_fragment:$x,lights_toon_pars_fragment:Kx,lights_phong_fragment:Zx,lights_phong_pars_fragment:Qx,lights_physical_fragment:Jx,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:fE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:dE,morphinstance_vertex:pE,morphcolor_vertex:mE,morphnormal_vertex:_E,morphtarget_pars_vertex:gE,morphtarget_vertex:vE,normal_fragment_begin:xE,normal_fragment_maps:EE,normal_pars_fragment:SE,normal_pars_vertex:ME,normal_vertex:yE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:wE,opaque_fragment:CE,packing:PE,premultiplied_alpha_fragment:LE,project_vertex:DE,dithering_fragment:IE,dithering_pars_fragment:NE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:BE,shadowmap_vertex:kE,shadowmask_pars_fragment:HE,skinbase_vertex:zE,skinning_pars_vertex:VE,skinning_vertex:GE,skinnormal_vertex:WE,specularmap_fragment:XE,specularmap_pars_fragment:YE,tonemapping_fragment:jE,tonemapping_pars_fragment:qE,transmission_fragment:$E,transmission_pars_fragment:KE,uv_pars_fragment:ZE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:uS,equirect_vert:fS,equirect_frag:hS,linedashed_vert:dS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:_S,meshlambert_vert:gS,meshlambert_frag:vS,meshmatcap_vert:xS,meshmatcap_frag:ES,meshnormal_vert:SS,meshnormal_frag:MS,meshphong_vert:yS,meshphong_frag:bS,meshphysical_vert:AS,meshphysical_frag:TS,meshtoon_vert:RS,meshtoon_frag:wS,points_vert:CS,points_frag:PS,shadow_vert:LS,shadow_frag:DS,sprite_vert:IS,sprite_frag:NS},Se={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ct(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:$t([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:$t([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ct(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:$t([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:$t([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:$t([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:$t([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:$t([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:$t([Se.lights,Se.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Po={r:0,b:0,g:0},tr=new _i,US=new Mt;function OS(t,e,n,i,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(y){let g=y.isScene===!0?y.background:null;return g&&g.isTexture&&(g=(y.backgroundBlurriness>0?n:e).get(g)),g}function E(y){let g=!1;const N=_(y);N===null?d(a,l):N&&N.isColor&&(d(N,1),g=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,g){const N=_(g);N&&(N.isCubeTexture||N.mapping===ma)?(u===void 0&&(u=new ci(new no(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ns(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),tr.copy(g.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(tr)),u.material.toneMapped=Je.getTransfer(N.colorSpace)!==ut,(f!==N||h!==N.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=N,h=N.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new ci(new ga(2,2),new Hi({name:"BackgroundMaterial",uniforms:ns(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Je.getTransfer(N.colorSpace)!==ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||h!==N.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=N,h=N.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,g){y.getRGB(Po,Bp(t)),i.buffers.color.setClear(Po.r,Po.g,Po.b,g,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,g=1){a.set(y),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:E,addToRenderList:m,dispose:M}}function FS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,B,Q,q,se){let oe=!1;const ee=f(q,Q,B);s!==ee&&(s=ee,c(s.object)),oe=p(T,q,Q,se),oe&&_(T,q,Q,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,g(T,B,Q,q),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,B,Q){const q=Q.wireframe===!0;let se=i[T.id];se===void 0&&(se={},i[T.id]=se);let oe=se[B.id];oe===void 0&&(oe={},se[B.id]=oe);let ee=oe[q];return ee===void 0&&(ee=h(l()),oe[q]=ee),ee}function h(T){const B=[],Q=[],q=[];for(let se=0;se<n;se++)B[se]=0,Q[se]=0,q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:q,object:T,attributes:{},index:null}}function p(T,B,Q,q){const se=s.attributes,oe=B.attributes;let ee=0;const te=Q.getAttributes();for(const X in te)if(te[X].location>=0){const ge=se[X];let Ae=oe[X];if(Ae===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor)),ge===void 0||ge.attribute!==Ae||Ae&&ge.data!==Ae.data)return!0;ee++}return s.attributesNum!==ee||s.index!==q}function _(T,B,Q,q){const se={},oe=B.attributes;let ee=0;const te=Q.getAttributes();for(const X in te)if(te[X].location>=0){let ge=oe[X];ge===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const Ae={};Ae.attribute=ge,ge&&ge.data&&(Ae.data=ge.data),se[X]=Ae,ee++}s.attributes=se,s.attributesNum=ee,s.index=q}function E(){const T=s.newAttributes;for(let B=0,Q=T.length;B<Q;B++)T[B]=0}function m(T){d(T,0)}function d(T,B){const Q=s.newAttributes,q=s.enabledAttributes,se=s.attributeDivisors;Q[T]=1,q[T]===0&&(t.enableVertexAttribArray(T),q[T]=1),se[T]!==B&&(t.vertexAttribDivisor(T,B),se[T]=B)}function M(){const T=s.newAttributes,B=s.enabledAttributes;for(let Q=0,q=B.length;Q<q;Q++)B[Q]!==T[Q]&&(t.disableVertexAttribArray(Q),B[Q]=0)}function y(T,B,Q,q,se,oe,ee){ee===!0?t.vertexAttribIPointer(T,B,Q,se,oe):t.vertexAttribPointer(T,B,Q,q,se,oe)}function g(T,B,Q,q){E();const se=q.attributes,oe=Q.getAttributes(),ee=B.defaultAttributeValues;for(const te in oe){const X=oe[te];if(X.location>=0){let de=se[te];if(de===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){const ge=de.normalized,Ae=de.itemSize,Pe=e.get(de);if(Pe===void 0)continue;const Ye=Pe.buffer,ie=Pe.type,me=Pe.bytesPerElement,xe=ie===t.INT||ie===t.UNSIGNED_INT||de.gpuType===tu;if(de.isInterleavedBufferAttribute){const H=de.data,re=H.stride,le=de.offset;if(H.isInstancedInterleavedBuffer){for(let ce=0;ce<X.locationSize;ce++)d(X.location+ce,H.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ce=0;ce<X.locationSize;ce++)y(X.location+ce,Ae/X.locationSize,ie,ge,re*me,(le+Ae/X.locationSize*ce)*me,xe)}else{if(de.isInstancedBufferAttribute){for(let H=0;H<X.locationSize;H++)d(X.location+H,de.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let H=0;H<X.locationSize;H++)m(X.location+H);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let H=0;H<X.locationSize;H++)y(X.location+H,Ae/X.locationSize,ie,ge,Ae*me,Ae/X.locationSize*H*me,xe)}}else if(ee!==void 0){const ge=ee[te];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(X.location,ge);break;case 3:t.vertexAttrib3fv(X.location,ge);break;case 4:t.vertexAttrib4fv(X.location,ge);break;default:t.vertexAttrib1fv(X.location,ge)}}}}M()}function N(){k();for(const T in i){const B=i[T];for(const Q in B){const q=B[Q];for(const se in q)u(q[se].object),delete q[se];delete B[Q]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const B=i[T.id];for(const Q in B){const q=B[Q];for(const se in q)u(q[se].object),delete q[se];delete B[Q]}delete i[T.id]}function R(T){for(const B in i){const Q=i[B];if(Q[T.id]===void 0)continue;const q=Q[T.id];for(const se in q)u(q[se].object),delete q[se];delete Q[T.id]}}function k(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function BS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let E=0;E<f;E++)_+=u[E]*h[E];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Pn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const k=R===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!k)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:N,maxSamples:I}}function HS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,y=M*4;let g=d.clippingState||null;l.value=g,g=u(_,h,y,p);for(let N=0;N!==y;++N)g[N]=n[N];d.clippingState=g,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,_!==!0||m===null){const d=p+E*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,g=p;y!==E;++y,g+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function zS(t){let e=new WeakMap;function n(o,a){return a===Vl?o.mapping=Jr:a===Gl&&(o.mapping=es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Gl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hr=4,Of=[.125,.215,.35,.446,.526,.582],ar=20,ol=new Zv,Ff=new ct;let al=null,ll=0,cl=0,ul=!1;const sr=(1+Math.sqrt(5))/2,Nr=1/sr,Bf=[new Y(-sr,Nr,0),new Y(sr,Nr,0),new Y(-Nr,0,sr),new Y(Nr,0,sr),new Y(0,sr,-Nr),new Y(0,sr,Nr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],VS=new Y;class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=VS}=s;al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=ul,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Qs,format:Pn,colorSpace:ts,depthBuffer:!1},r=Hf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GS(s)),this._blurMaterial=WS(s,e,n)}return r}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ff),f.toneMapping=Fi,f.autoClear=!1;const _=new Up({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),E=new ci(new no,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(Ff),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const g=this._cubeSize;Lo(r,y*g,M>2?g:0,g,g),f.setRenderTarget(r),m&&f.render(E,l),f.render(e,l)}E.geometry.dispose(),E.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ol)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bf[(r-s-1)%Bf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ci(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ar-1),E=s/_,m=isFinite(s)?1+Math.floor(u*E):ar;m>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);const d=[];let M=0;for(let R=0;R<ar;++R){const k=R/E,w=Math.exp(-k*k/2);d.push(w),R===0?M+=w:R<m&&(M+=2*w)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const g=this._sizeLods[r],N=3*g*(r>y-Hr?r-y+Hr:0),I=4*(this._cubeSize-g);Lo(n,N,I,3*g,2*g),l.setRenderTarget(n),l.render(f,ol)}}function GS(t){const e=[],n=[],i=[];let r=t;const s=t-Hr+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Hr?l=Of[o-t+Hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,E=3,m=2,d=1,M=new Float32Array(E*_*p),y=new Float32Array(m*_*p),g=new Float32Array(d*_*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,k=I>2?0:-1,w=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];M.set(w,E*_*I),y.set(h,m*_*I);const T=[I,I,I,I,I,I];g.set(T,d*_*I)}const N=new xi;N.setAttribute("position",new Nn(M,E)),N.setAttribute("uv",new Nn(y,m)),N.setAttribute("faceIndex",new Nn(g,d)),e.push(N),r>Hr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hf(t,e,n){const i=new mr(t,e,n);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WS(t,e,n){const i=new Float32Array(ar),r=new Y(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function zf(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Vf(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Gl,u=l===Jr||l===es;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new kf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new kf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function YS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let E=0;if(p!==null){const M=p.array;E=p.version;for(let y=0,g=M.length;y<g;y+=3){const N=M[y+0],I=M[y+1],R=M[y+2];h.push(N,I,I,R,R,N)}}else if(_!==void 0){const M=_.array;E=_.version;for(let y=0,g=M.length/3-1;y<g;y+=3){const N=y+0,I=y+1,R=y+2;h.push(N,I,I,R,R,N)}}else return;const m=new(Lp(h)?Fp:Op)(h,1);m.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qS(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,E){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],E[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,E,0,_);let d=0;for(let M=0;M<_;M++)d+=p[M]*E[M];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $S(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KS(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let g=0;_===!0&&(g=1),E===!0&&(g=2),m===!0&&(g=3);let N=a.attributes.position.count*g,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const R=new Float32Array(N*I*4*f),k=new Dp(R,N,I,f);k.type=ai,k.needsUpdate=!0;const w=g*4;for(let B=0;B<f;B++){const Q=d[B],q=M[B],se=y[B],oe=N*I*4*B;for(let ee=0;ee<Q.count;ee++){const te=ee*w;_===!0&&(r.fromBufferAttribute(Q,ee),R[oe+te+0]=r.x,R[oe+te+1]=r.y,R[oe+te+2]=r.z,R[oe+te+3]=0),E===!0&&(r.fromBufferAttribute(q,ee),R[oe+te+4]=r.x,R[oe+te+5]=r.y,R[oe+te+6]=r.z,R[oe+te+7]=0),m===!0&&(r.fromBufferAttribute(se,ee),R[oe+te+8]=r.x,R[oe+te+9]=r.y,R[oe+te+10]=r.z,R[oe+te+11]=se.itemSize===4?r.w:1)}}h={count:f,texture:k,size:new je(N,I)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const E=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ZS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Xp=new Qt,Gf=new Gp(1,1),Yp=new Dp,jp=new Mv,qp=new Hp,Wf=[],Xf=[],Yf=new Float32Array(16),jf=new Float32Array(9),qf=new Float32Array(4);function ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function va(t,e){let n=Xf[e];n===void 0&&(n=new Int32Array(e),Xf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function eM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function tM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function nM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;qf.set(i),t.uniformMatrix2fv(this.addr,!1,qf),It(n,i)}}function iM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;jf.set(i),t.uniformMatrix3fv(this.addr,!1,jf),It(n,i)}}function rM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Yf.set(i),t.uniformMatrix4fv(this.addr,!1,Yf),It(n,i)}}function sM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function aM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function lM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function cM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function fM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function hM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function dM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gf.compareFunction=Pp,s=Gf):s=Xp,n.setTexture2D(e||s,r)}function pM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jp,r)}function mM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qp,r)}function _M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yp,r)}function gM(t){switch(t){case 5126:return QS;case 35664:return JS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return fM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return _M}}function vM(t,e){t.uniform1fv(this.addr,e)}function xM(t,e){const n=ls(e,this.size,2);t.uniform2fv(this.addr,n)}function EM(t,e){const n=ls(e,this.size,3);t.uniform3fv(this.addr,n)}function SM(t,e){const n=ls(e,this.size,4);t.uniform4fv(this.addr,n)}function MM(t,e){const n=ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yM(t,e){const n=ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bM(t,e){const n=ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AM(t,e){t.uniform1iv(this.addr,e)}function TM(t,e){t.uniform2iv(this.addr,e)}function RM(t,e){t.uniform3iv(this.addr,e)}function wM(t,e){t.uniform4iv(this.addr,e)}function CM(t,e){t.uniform1uiv(this.addr,e)}function PM(t,e){t.uniform2uiv(this.addr,e)}function LM(t,e){t.uniform3uiv(this.addr,e)}function DM(t,e){t.uniform4uiv(this.addr,e)}function IM(t,e,n){const i=this.cache,r=e.length,s=va(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Xp,s[o])}function NM(t,e,n){const i=this.cache,r=e.length,s=va(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||jp,s[o])}function UM(t,e,n){const i=this.cache,r=e.length,s=va(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qp,s[o])}function OM(t,e,n){const i=this.cache,r=e.length,s=va(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Yp,s[o])}function FM(t){switch(t){case 5126:return vM;case 35664:return xM;case 35665:return EM;case 35666:return SM;case 35674:return MM;case 35675:return yM;case 35676:return bM;case 5124:case 35670:return AM;case 35667:case 35671:return TM;case 35668:case 35672:return RM;case 35669:case 35673:return wM;case 5125:return CM;case 36294:return PM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gM(n.type)}}class kM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FM(n.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function $f(t,e){t.seq.push(e),t.map[e.id]=e}function zM(t,e,n){const i=t.name,r=i.length;for(fl.lastIndex=0;;){const s=fl.exec(i),o=fl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$f(n,c===void 0?new BM(a,t,e):new kM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new HM(a),$f(n,f)),n=f}}}class jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);zM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VM=37297;let GM=0;function WM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Zf=new We;function XM(t){Je._getMatrix(Zf,Je.workingColorSpace,t);const e=`mat3( ${Zf.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ta:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WM(t.getShaderSource(e),o)}else return r}function YM(t,e){const n=XM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jM(t,e){let n;switch(e){case Y0:n="Linear";break;case j0:n="Reinhard";break;case q0:n="Cineon";break;case $0:n="ACESFilmic";break;case Z0:n="AgX";break;case Q0:n="Neutral";break;case K0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new Y;function qM(){Je.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function KM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Es(t){return t!==""}function Jf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(t){return t.replace(QM,ey)}const JM=new Map;function ey(t,e){let n=Xe[e];if(n===void 0){const i=JM.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(n)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(t){return t.replace(ty,ny)}function ny(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iy(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===A0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function ry(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case es:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sy(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function oy(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vp:e="ENVMAP_BLENDING_MULTIPLY";break;case W0:e="ENVMAP_BLENDING_MIX";break;case X0:e="ENVMAP_BLENDING_ADD";break}return e}function ay(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ly(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iy(n),c=ry(n),u=sy(n),f=oy(n),h=ay(n),p=$M(n),_=KM(s),E=r.createProgram();let m,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Es).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Es).join(`
`),d.length>0&&(d+=`
`)):(m=[nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),d=[nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Fi?jM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,YM("linearToOutputTexel",n.outputColorSpace),qM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Es).join(`
`)),o=Ec(o),o=Jf(o,n),o=eh(o,n),a=Ec(a),a=Jf(a,n),a=eh(a,n),o=th(o),a=th(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,g=M+d+a,N=Kf(r,r.VERTEX_SHADER,y),I=Kf(r,r.FRAGMENT_SHADER,g);r.attachShader(E,N),r.attachShader(E,I),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(B){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(E).trim(),q=r.getShaderInfoLog(N).trim(),se=r.getShaderInfoLog(I).trim();let oe=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,N,I);else{const te=Qf(r,N,"vertex"),X=Qf(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+te+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(q===""||se==="")&&(ee=!1);ee&&(B.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:q,prefix:m},fragmentShader:{log:se,prefix:d}})}r.deleteShader(N),r.deleteShader(I),k=new jo(r,E),w=ZM(r,E)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,VM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=I,this}let cy=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fy(e),n.set(e,i)),i}}class fy{constructor(e){this.id=cy++,this.code=e,this.usedTimes=0}}function hy(t,e,n,i,r,s,o){const a=new Ip,l=new uy,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,B,Q,q){const se=Q.fog,oe=q.geometry,ee=w.isMeshStandardMaterial?Q.environment:null,te=(w.isMeshStandardMaterial?n:e).get(w.envMap||ee),X=te&&te.mapping===ma?te.image.height:null,de=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ge=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ae=ge!==void 0?ge.length:0;let Pe=0;oe.morphAttributes.position!==void 0&&(Pe=1),oe.morphAttributes.normal!==void 0&&(Pe=2),oe.morphAttributes.color!==void 0&&(Pe=3);let Ye,ie,me,xe;if(de){const at=Hn[de];Ye=at.vertexShader,ie=at.fragmentShader}else Ye=w.vertexShader,ie=w.fragmentShader,l.update(w),me=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const H=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),le=q.isInstancedMesh===!0,ce=q.isBatchedMesh===!0,De=!!w.map,L=!!w.matcap,D=!!te,S=!!w.aoMap,J=!!w.lightMap,$=!!w.bumpMap,j=!!w.normalMap,b=!!w.displacementMap,C=!!w.emissiveMap,O=!!w.metalnessMap,x=!!w.roughnessMap,v=w.anisotropy>0,U=w.clearcoat>0,P=w.dispersion>0,F=w.iridescence>0,V=w.sheen>0,fe=w.transmission>0,ae=v&&!!w.anisotropyMap,_e=U&&!!w.clearcoatMap,Le=U&&!!w.clearcoatNormalMap,he=U&&!!w.clearcoatRoughnessMap,Ee=F&&!!w.iridescenceMap,Ie=F&&!!w.iridescenceThicknessMap,Oe=V&&!!w.sheenColorMap,ve=V&&!!w.sheenRoughnessMap,Be=!!w.specularMap,ze=!!w.specularColorMap,dt=!!w.specularIntensityMap,z=fe&&!!w.transmissionMap,ye=fe&&!!w.thicknessMap,ne=!!w.gradientMap,ue=!!w.alphaMap,Te=w.alphaTest>0,be=!!w.alphaHash,Ge=!!w.extensions;let xt=Fi;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xt=t.toneMapping);const kt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:ie,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ce,batchingColor:ce&&q._colorsTexture!==null,instancing:le,instancingColor:le&&q.instanceColor!==null,instancingMorph:le&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ts,alphaToCoverage:!!w.alphaToCoverage,map:De,matcap:L,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:X,aoMap:S,lightMap:J,bumpMap:$,normalMap:j,displacementMap:h&&b,emissiveMap:C,normalMapObjectSpace:j&&w.normalMapType===iv,normalMapTangentSpace:j&&w.normalMapType===nv,metalnessMap:O,roughnessMap:x,anisotropy:v,anisotropyMap:ae,clearcoat:U,clearcoatMap:_e,clearcoatNormalMap:Le,clearcoatRoughnessMap:he,dispersion:P,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:Ie,sheen:V,sheenColorMap:Oe,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:ze,specularIntensityMap:dt,transmission:fe,transmissionMap:z,thicknessMap:ye,gradientMap:ne,opaque:w.transparent===!1&&w.blending===qr&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:Te,alphaHash:be,combine:w.combine,mapUv:De&&E(w.map.channel),aoMapUv:S&&E(w.aoMap.channel),lightMapUv:J&&E(w.lightMap.channel),bumpMapUv:$&&E(w.bumpMap.channel),normalMapUv:j&&E(w.normalMap.channel),displacementMapUv:b&&E(w.displacementMap.channel),emissiveMapUv:C&&E(w.emissiveMap.channel),metalnessMapUv:O&&E(w.metalnessMap.channel),roughnessMapUv:x&&E(w.roughnessMap.channel),anisotropyMapUv:ae&&E(w.anisotropyMap.channel),clearcoatMapUv:_e&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&E(w.sheenRoughnessMap.channel),specularMapUv:Be&&E(w.specularMap.channel),specularColorMapUv:ze&&E(w.specularColorMap.channel),specularIntensityMapUv:dt&&E(w.specularIntensityMap.channel),transmissionMapUv:z&&E(w.transmissionMap.channel),thicknessMapUv:ye&&E(w.thicknessMap.channel),alphaMapUv:ue&&E(w.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(j||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!oe.attributes.uv&&(De||ue),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:q.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:De&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:C&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oi,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function d(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)T.push(B),T.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(M(T,w),y(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function M(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function y(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function g(w){const T=_[w.type];let B;if(T){const Q=Hn[T];B=Uv.clone(Q.uniforms)}else B=w.uniforms;return B}function N(w,T){let B;for(let Q=0,q=u.length;Q<q;Q++){const se=u[Q];if(se.cacheKey===T){B=se,++B.usedTimes;break}}return B===void 0&&(B=new ly(t,T,w,s),u.push(B)),B}function I(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:N,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:k}}function dy(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function py(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ih(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,E,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:E,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=E,d.group=m),e++,d}function a(f,h,p,_,E,m){const d=o(f,h,p,_,E,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,E,m){const d=o(f,h,p,_,E,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||py),i.length>1&&i.sort(h||ih),r.length>1&&r.sort(h||ih)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function my(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new rh,t.set(i,[o])):r>=s.length?(o=new rh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function _y(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ct};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function gy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vy=0;function xy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ey(t){const e=new _y,n=gy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,E=0,m=0,d=0,M=0,y=0,g=0,N=0,I=0,R=0;c.sort(xy);for(let w=0,T=c.length;w<T;w++){const B=c[w],Q=B.color,q=B.intensity,se=B.distance,oe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=Q.r*q,f+=Q.g*q,h+=Q.b*q;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(B.sh.coefficients[ee],q);R++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,X=n.get(B);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=B.shadow.matrix,M++}i.directional[p]=ee,p++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(Q).multiplyScalar(q),ee.distance=se,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,i.spot[E]=ee;const te=B.shadow;if(B.map&&(i.spotLightMap[N]=B.map,N++,te.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[E]=te.matrix,B.castShadow){const X=n.get(B);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=oe,g++}E++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(Q).multiplyScalar(q),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),i.rectArea[m]=ee,m++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const te=B.shadow,X=n.get(B);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=B.shadow.matrix,y++}i.point[_]=ee,_++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(q),ee.groundColor.copy(B.groundColor).multiplyScalar(q),i.hemi[d]=ee,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const k=i.hash;(k.directionalLength!==p||k.pointLength!==_||k.spotLength!==E||k.rectAreaLength!==m||k.hemiLength!==d||k.numDirectionalShadows!==M||k.numPointShadows!==y||k.numSpotShadows!==g||k.numSpotMaps!==N||k.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=g+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,k.directionalLength=p,k.pointLength=_,k.spotLength=E,k.rectAreaLength=m,k.hemiLength=d,k.numDirectionalShadows=M,k.numPointShadows=y,k.numSpotShadows=g,k.numSpotMaps=N,k.numLightProbes=R,i.version=vy++)}function l(c,u){let f=0,h=0,p=0,_=0,E=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),f++}else if(y.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const g=i.hemi[E];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function sh(t){const e=new Ey(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Sy(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sh(t),e.set(r,[a])):s>=o.length?(a=new sh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function by(t,e,n){let i=new zp;const r=new je,s=new je,o=new St,a=new Xv({depthPacking:tv}),l=new Yv,c={},u=n.maxTextureSize,f={[ki]:sn,[sn]:ki,[oi]:oi},h=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:My,fragmentShader:yy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new xi;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ci(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gp;let d=this.type;this.render=function(I,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Oi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=d!==ii&&this.type===ii,se=d===ii&&this.type!==ii;for(let oe=0,ee=I.length;oe<ee;oe++){const te=I[oe],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const de=X.getFrameExtents();if(r.multiply(de),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,X.mapSize.y=s.y)),X.map===null||q===!0||se===!0){const Ae=this.type!==ii?{minFilter:In,magFilter:In}:{};X.map!==null&&X.map.dispose(),X.map=new mr(r.x,r.y,Ae),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const ge=X.getViewportCount();for(let Ae=0;Ae<ge;Ae++){const Pe=X.getViewport(Ae);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),Q.viewport(o),X.updateMatrices(te,Ae),i=X.getFrustum(),g(R,k,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&M(X,k),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,B)};function M(I,R){const k=e.update(E);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,k,h,E,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,k,p,E,null)}function y(I,R,k,w){let T=null;const B=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)T=B;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Q=T.uuid,q=R.uuid;let se=c[Q];se===void 0&&(se={},c[Q]=se);let oe=se[q];oe===void 0&&(oe=T.clone(),se[q]=oe,R.addEventListener("dispose",N)),T=oe}if(T.visible=R.visible,T.wireframe=R.wireframe,w===ii?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=t.properties.get(T);Q.light=k}return T}function g(I,R,k,w,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===ii)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const q=e.update(I),se=I.material;if(Array.isArray(se)){const oe=q.groups;for(let ee=0,te=oe.length;ee<te;ee++){const X=oe[ee],de=se[X.materialIndex];if(de&&de.visible){const ge=y(I,de,w,T);I.onBeforeShadow(t,I,R,k,q,ge,X),t.renderBufferDirect(k,null,q,ge,I,X),I.onAfterShadow(t,I,R,k,q,ge,X)}}}else if(se.visible){const oe=y(I,se,w,T);I.onBeforeShadow(t,I,R,k,q,oe,null),t.renderBufferDirect(k,null,q,oe,I,null),I.onAfterShadow(t,I,R,k,q,oe,null)}}const Q=I.children;for(let q=0,se=Q.length;q<se;q++)g(Q[q],R,k,w,T)}function N(I){I.target.removeEventListener("dispose",N);for(const k in c){const w=c[k],T=I.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const Ay={[Ul]:Ol,[Fl]:Hl,[Bl]:zl,[Qr]:kl,[Ol]:Ul,[Hl]:Fl,[zl]:Bl,[kl]:Qr};function Ty(t,e){function n(){let z=!1;const ye=new St;let ne=null;const ue=new St(0,0,0,0);return{setMask:function(Te){ne!==Te&&!z&&(t.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){z=Te},setClear:function(Te,be,Ge,xt,kt){kt===!0&&(Te*=xt,be*=xt,Ge*=xt),ye.set(Te,be,Ge,xt),ue.equals(ye)===!1&&(t.clearColor(Te,be,Ge,xt),ue.copy(ye))},reset:function(){z=!1,ne=null,ue.set(-1,0,0,0)}}}function i(){let z=!1,ye=!1,ne=null,ue=null,Te=null;return{setReversed:function(be){if(ye!==be){const Ge=e.get("EXT_clip_control");be?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ye=be;const xt=Te;Te=null,this.setClear(xt)}},getReversed:function(){return ye},setTest:function(be){be?H(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(be){ne!==be&&!z&&(t.depthMask(be),ne=be)},setFunc:function(be){if(ye&&(be=Ay[be]),ue!==be){switch(be){case Ul:t.depthFunc(t.NEVER);break;case Ol:t.depthFunc(t.ALWAYS);break;case Fl:t.depthFunc(t.LESS);break;case Qr:t.depthFunc(t.LEQUAL);break;case Bl:t.depthFunc(t.EQUAL);break;case kl:t.depthFunc(t.GEQUAL);break;case Hl:t.depthFunc(t.GREATER);break;case zl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=be}},setLocked:function(be){z=be},setClear:function(be){Te!==be&&(ye&&(be=1-be),t.clearDepth(be),Te=be)},reset:function(){z=!1,ne=null,ue=null,Te=null,ye=!1}}}function r(){let z=!1,ye=null,ne=null,ue=null,Te=null,be=null,Ge=null,xt=null,kt=null;return{setTest:function(at){z||(at?H(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(at){ye!==at&&!z&&(t.stencilMask(at),ye=at)},setFunc:function(at,bn,qn){(ne!==at||ue!==bn||Te!==qn)&&(t.stencilFunc(at,bn,qn),ne=at,ue=bn,Te=qn)},setOp:function(at,bn,qn){(be!==at||Ge!==bn||xt!==qn)&&(t.stencilOp(at,bn,qn),be=at,Ge=bn,xt=qn)},setLocked:function(at){z=at},setClear:function(at){kt!==at&&(t.clearStencil(at),kt=at)},reset:function(){z=!1,ye=null,ne=null,ue=null,Te=null,be=null,Ge=null,xt=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,E=!1,m=null,d=null,M=null,y=null,g=null,N=null,I=null,R=new ct(0,0,0),k=0,w=!1,T=null,B=null,Q=null,q=null,se=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,te=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=te>=2);let de=null,ge={};const Ae=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),Ye=new St().fromArray(Ae),ie=new St().fromArray(Pe);function me(z,ye,ne,ue){const Te=new Uint8Array(4),be=t.createTexture();t.bindTexture(z,be),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<ne;Ge++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ye+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return be}const xe={};xe[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(Qr),$(!1),j(lf),H(t.CULL_FACE),S(Oi);function H(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function re(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function le(z,ye){return f[z]!==ye?(t.bindFramebuffer(z,ye),f[z]=ye,z===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ye),z===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function ce(z,ye){let ne=p,ue=!1;if(z){ne=h.get(ye),ne===void 0&&(ne=[],h.set(ye,ne));const Te=z.textures;if(ne.length!==Te.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Ge=Te.length;be<Ge;be++)ne[be]=t.COLOR_ATTACHMENT0+be;ne.length=Te.length,ue=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ne)}function De(z){return _!==z?(t.useProgram(z),_=z,!0):!1}const L={[or]:t.FUNC_ADD,[R0]:t.FUNC_SUBTRACT,[w0]:t.FUNC_REVERSE_SUBTRACT};L[C0]=t.MIN,L[P0]=t.MAX;const D={[L0]:t.ZERO,[D0]:t.ONE,[I0]:t.SRC_COLOR,[Il]:t.SRC_ALPHA,[k0]:t.SRC_ALPHA_SATURATE,[F0]:t.DST_COLOR,[U0]:t.DST_ALPHA,[N0]:t.ONE_MINUS_SRC_COLOR,[Nl]:t.ONE_MINUS_SRC_ALPHA,[B0]:t.ONE_MINUS_DST_COLOR,[O0]:t.ONE_MINUS_DST_ALPHA,[H0]:t.CONSTANT_COLOR,[z0]:t.ONE_MINUS_CONSTANT_COLOR,[V0]:t.CONSTANT_ALPHA,[G0]:t.ONE_MINUS_CONSTANT_ALPHA};function S(z,ye,ne,ue,Te,be,Ge,xt,kt,at){if(z===Oi){E===!0&&(re(t.BLEND),E=!1);return}if(E===!1&&(H(t.BLEND),E=!0),z!==T0){if(z!==m||at!==w){if((d!==or||g!==or)&&(t.blendEquation(t.FUNC_ADD),d=or,g=or),at)switch(z){case qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.ONE,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,N=null,I=null,R.set(0,0,0),k=0,m=z,w=at}return}Te=Te||ye,be=be||ne,Ge=Ge||ue,(ye!==d||Te!==g)&&(t.blendEquationSeparate(L[ye],L[Te]),d=ye,g=Te),(ne!==M||ue!==y||be!==N||Ge!==I)&&(t.blendFuncSeparate(D[ne],D[ue],D[be],D[Ge]),M=ne,y=ue,N=be,I=Ge),(xt.equals(R)===!1||kt!==k)&&(t.blendColor(xt.r,xt.g,xt.b,kt),R.copy(xt),k=kt),m=z,w=!1}function J(z,ye){z.side===oi?re(t.CULL_FACE):H(t.CULL_FACE);let ne=z.side===sn;ye&&(ne=!ne),$(ne),z.blending===qr&&z.transparent===!1?S(Oi):S(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ue=z.stencilWrite;a.setTest(ue),ue&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),C(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(z){T!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),T=z)}function j(z){z!==y0?(H(t.CULL_FACE),z!==B&&(z===lf?t.cullFace(t.BACK):z===b0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),B=z}function b(z){z!==Q&&(ee&&t.lineWidth(z),Q=z)}function C(z,ye,ne){z?(H(t.POLYGON_OFFSET_FILL),(q!==ye||se!==ne)&&(t.polygonOffset(ye,ne),q=ye,se=ne)):re(t.POLYGON_OFFSET_FILL)}function O(z){z?H(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function x(z){z===void 0&&(z=t.TEXTURE0+oe-1),de!==z&&(t.activeTexture(z),de=z)}function v(z,ye,ne){ne===void 0&&(de===null?ne=t.TEXTURE0+oe-1:ne=de);let ue=ge[ne];ue===void 0&&(ue={type:void 0,texture:void 0},ge[ne]=ue),(ue.type!==z||ue.texture!==ye)&&(de!==ne&&(t.activeTexture(ne),de=ne),t.bindTexture(z,ye||xe[z]),ue.type=z,ue.texture=ye)}function U(){const z=ge[de];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function P(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(z){Ye.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Ye.copy(z))}function ve(z){ie.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function Be(z,ye){let ne=c.get(ye);ne===void 0&&(ne=new WeakMap,c.set(ye,ne));let ue=ne.get(z);ue===void 0&&(ue=t.getUniformBlockIndex(ye,z.name),ne.set(z,ue))}function ze(z,ye){const ue=c.get(ye).get(z);l.get(ye)!==ue&&(t.uniformBlockBinding(ye,ue,z.__bindingPointIndex),l.set(ye,ue))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},de=null,ge={},f={},h=new WeakMap,p=[],_=null,E=!1,m=null,d=null,M=null,y=null,g=null,N=null,I=null,R=new ct(0,0,0),k=0,w=!1,T=null,B=null,Q=null,q=null,se=null,Ye.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:re,bindFramebuffer:le,drawBuffers:ce,useProgram:De,setBlending:S,setMaterial:J,setFlipSided:$,setCullFace:j,setLineWidth:b,setPolygonOffset:C,setScissorTest:O,activeTexture:x,bindTexture:v,unbindTexture:U,compressedTexImage2D:P,compressedTexImage3D:F,texImage2D:Ee,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:he,texSubImage2D:V,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:_e,scissor:Oe,viewport:ve,reset:dt}}function Ry(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,v){return p?new OffscreenCanvas(x,v):Hs("canvas")}function E(x,v,U){let P=1;const F=O(x);if((F.width>U||F.height>U)&&(P=U/Math.max(F.width,F.height)),P<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(P*F.width),fe=Math.floor(P*F.height);f===void 0&&(f=_(V,fe));const ae=v?_(V,fe):f;return ae.width=V,ae.height=fe,ae.getContext("2d").drawImage(x,0,0,V,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+V+"x"+fe+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){t.generateMipmap(x)}function M(x){return x.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?t.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(x,v,U,P,F=!1){if(x!==null){if(t[x]!==void 0)return t[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=v;if(v===t.RED&&(U===t.FLOAT&&(V=t.R32F),U===t.HALF_FLOAT&&(V=t.R16F),U===t.UNSIGNED_BYTE&&(V=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.R8UI),U===t.UNSIGNED_SHORT&&(V=t.R16UI),U===t.UNSIGNED_INT&&(V=t.R32UI),U===t.BYTE&&(V=t.R8I),U===t.SHORT&&(V=t.R16I),U===t.INT&&(V=t.R32I)),v===t.RG&&(U===t.FLOAT&&(V=t.RG32F),U===t.HALF_FLOAT&&(V=t.RG16F),U===t.UNSIGNED_BYTE&&(V=t.RG8)),v===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RG8UI),U===t.UNSIGNED_SHORT&&(V=t.RG16UI),U===t.UNSIGNED_INT&&(V=t.RG32UI),U===t.BYTE&&(V=t.RG8I),U===t.SHORT&&(V=t.RG16I),U===t.INT&&(V=t.RG32I)),v===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGB8UI),U===t.UNSIGNED_SHORT&&(V=t.RGB16UI),U===t.UNSIGNED_INT&&(V=t.RGB32UI),U===t.BYTE&&(V=t.RGB8I),U===t.SHORT&&(V=t.RGB16I),U===t.INT&&(V=t.RGB32I)),v===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),U===t.UNSIGNED_INT&&(V=t.RGBA32UI),U===t.BYTE&&(V=t.RGBA8I),U===t.SHORT&&(V=t.RGBA16I),U===t.INT&&(V=t.RGBA32I)),v===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),v===t.RGBA){const fe=F?ta:Je.getTransfer(P);U===t.FLOAT&&(V=t.RGBA32F),U===t.HALF_FLOAT&&(V=t.RGBA16F),U===t.UNSIGNED_BYTE&&(V=fe===ut?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function g(x,v){let U;return x?v===null||v===pr||v===Fs?U=t.DEPTH24_STENCIL8:v===ai?U=t.DEPTH32F_STENCIL8:v===Os&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pr||v===Fs?U=t.DEPTH_COMPONENT24:v===ai?U=t.DEPTH_COMPONENT32F:v===Os&&(U=t.DEPTH_COMPONENT16),U}function N(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==In&&x.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function I(x){const v=x.target;v.removeEventListener("dispose",I),k(v),v.isVideoTexture&&u.delete(v)}function R(x){const v=x.target;v.removeEventListener("dispose",R),T(v)}function k(x){const v=i.get(x);if(v.__webglInit===void 0)return;const U=x.source,P=h.get(U);if(P){const F=P[v.__cacheKey];F.usedTimes--,F.usedTimes===0&&w(x),Object.keys(P).length===0&&h.delete(U)}i.remove(x)}function w(x){const v=i.get(x);t.deleteTexture(v.__webglTexture);const U=x.source,P=h.get(U);delete P[v.__cacheKey],o.memory.textures--}function T(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let F=0;F<v.__webglFramebuffer[P].length;F++)t.deleteFramebuffer(v.__webglFramebuffer[P][F]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=x.textures;for(let P=0,F=U.length;P<F;P++){const V=i.get(U[P]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[P])}i.remove(x)}let B=0;function Q(){B=0}function q(){const x=B;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),B+=1,x}function se(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function oe(x,v){const U=i.get(x);if(x.isVideoTexture&&b(x),x.isRenderTargetTexture===!1&&x.version>0&&U.__version!==x.version){const P=x.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,x,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function ee(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){ie(U,x,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function te(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){ie(U,x,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function X(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){me(U,x,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const de={[Wl]:t.REPEAT,[lr]:t.CLAMP_TO_EDGE,[Xl]:t.MIRRORED_REPEAT},ge={[In]:t.NEAREST,[J0]:t.NEAREST_MIPMAP_NEAREST,[lo]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Fa]:t.LINEAR_MIPMAP_NEAREST,[cr]:t.LINEAR_MIPMAP_LINEAR},Ae={[rv]:t.NEVER,[uv]:t.ALWAYS,[sv]:t.LESS,[Pp]:t.LEQUAL,[ov]:t.EQUAL,[cv]:t.GEQUAL,[av]:t.GREATER,[lv]:t.NOTEQUAL};function Pe(x,v){if(v.type===ai&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===Fa||v.magFilter===lo||v.magFilter===cr||v.minFilter===zn||v.minFilter===Fa||v.minFilter===lo||v.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(x,t.TEXTURE_WRAP_S,de[v.wrapS]),t.texParameteri(x,t.TEXTURE_WRAP_T,de[v.wrapT]),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,de[v.wrapR]),t.texParameteri(x,t.TEXTURE_MAG_FILTER,ge[v.magFilter]),t.texParameteri(x,t.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(t.texParameteri(x,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(x,t.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===In||v.minFilter!==lo&&v.minFilter!==cr||v.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(x,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(x,v){let U=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",I));const P=v.source;let F=h.get(P);F===void 0&&(F={},h.set(P,F));const V=se(v);if(V!==x.__cacheKey){F[V]===void 0&&(F[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),F[V].usedTimes++;const fe=F[x.__cacheKey];fe!==void 0&&(F[x.__cacheKey].usedTimes--,fe.usedTimes===0&&w(v)),x.__cacheKey=V,x.__webglTexture=F[V].texture}return U}function ie(x,v,U){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const F=Ye(x,v),V=v.source;n.bindTexture(P,x.__webglTexture,t.TEXTURE0+U);const fe=i.get(V);if(V.version!==fe.__version||F===!0){n.activeTexture(t.TEXTURE0+U);const ae=Je.getPrimaries(Je.workingColorSpace),_e=v.colorSpace===Ii?null:Je.getPrimaries(v.colorSpace),Le=v.colorSpace===Ii||ae===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let he=E(v.image,!1,r.maxTextureSize);he=C(v,he);const Ee=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type);let Oe=y(v.internalFormat,Ee,Ie,v.colorSpace,v.isVideoTexture);Pe(P,v);let ve;const Be=v.mipmaps,ze=v.isVideoTexture!==!0,dt=fe.__version===void 0||F===!0,z=V.dataReady,ye=N(v,he);if(v.isDepthTexture)Oe=g(v.format===ks,v.type),dt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Oe,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Oe,he.width,he.height,0,Ee,Ie,null));else if(v.isDataTexture)if(Be.length>0){ze&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ue=Be.length;ne<ue;ne++)ve=Be[ne],ze?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,Ee,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,ne,Oe,ve.width,ve.height,0,Ee,Ie,ve.data);v.generateMipmaps=!1}else ze?(dt&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,he.width,he.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Ee,Ie,he.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,he.width,he.height,0,Ee,Ie,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Oe,Be[0].width,Be[0].height,he.depth);for(let ne=0,ue=Be.length;ne<ue;ne++)if(ve=Be[ne],v.format!==Pn)if(Ee!==null)if(ze){if(z)if(v.layerUpdates.size>0){const Te=Uf(ve.width,ve.height,v.format,v.type);for(const be of v.layerUpdates){const Ge=ve.data.subarray(be*Te/ve.data.BYTES_PER_ELEMENT,(be+1)*Te/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,be,ve.width,ve.height,1,Ee,Ge)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,he.depth,Ee,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Oe,ve.width,ve.height,he.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,he.depth,Ee,Ie,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Oe,ve.width,ve.height,he.depth,0,Ee,Ie,ve.data)}else{ze&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ue=Be.length;ne<ue;ne++)ve=Be[ne],v.format!==Pn?Ee!==null?ze?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,Ee,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,Ee,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,ne,Oe,ve.width,ve.height,0,Ee,Ie,ve.data)}else if(v.isDataArrayTexture)if(ze){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Oe,he.width,he.height,he.depth),z)if(v.layerUpdates.size>0){const ne=Uf(he.width,he.height,v.format,v.type);for(const ue of v.layerUpdates){const Te=he.data.subarray(ue*ne/he.data.BYTES_PER_ELEMENT,(ue+1)*ne/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,he.width,he.height,1,Ee,Ie,Te)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ee,Ie,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,Ee,Ie,he.data);else if(v.isData3DTexture)ze?(dt&&n.texStorage3D(t.TEXTURE_3D,ye,Oe,he.width,he.height,he.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ee,Ie,he.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,Ee,Ie,he.data);else if(v.isFramebufferTexture){if(dt)if(ze)n.texStorage2D(t.TEXTURE_2D,ye,Oe,he.width,he.height);else{let ne=he.width,ue=he.height;for(let Te=0;Te<ye;Te++)n.texImage2D(t.TEXTURE_2D,Te,Oe,ne,ue,0,Ee,Ie,null),ne>>=1,ue>>=1}}else if(Be.length>0){if(ze&&dt){const ne=O(Be[0]);n.texStorage2D(t.TEXTURE_2D,ye,Oe,ne.width,ne.height)}for(let ne=0,ue=Be.length;ne<ue;ne++)ve=Be[ne],ze?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ee,Ie,ve):n.texImage2D(t.TEXTURE_2D,ne,Oe,Ee,Ie,ve);v.generateMipmaps=!1}else if(ze){if(dt){const ne=O(he);n.texStorage2D(t.TEXTURE_2D,ye,Oe,ne.width,ne.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ie,he)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Ee,Ie,he);m(v)&&d(P),fe.__version=V.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function me(x,v,U){if(v.image.length!==6)return;const P=Ye(x,v),F=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,x.__webglTexture,t.TEXTURE0+U);const V=i.get(F);if(F.version!==V.__version||P===!0){n.activeTexture(t.TEXTURE0+U);const fe=Je.getPrimaries(Je.workingColorSpace),ae=v.colorSpace===Ii?null:Je.getPrimaries(v.colorSpace),_e=v.colorSpace===Ii||fe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Le&&!he?Ee[ue]=E(v.image[ue],!0,r.maxCubemapSize):Ee[ue]=he?v.image[ue].image:v.image[ue],Ee[ue]=C(v,Ee[ue]);const Ie=Ee[0],Oe=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),Be=y(v.internalFormat,Oe,ve,v.colorSpace),ze=v.isVideoTexture!==!0,dt=V.__version===void 0||P===!0,z=F.dataReady;let ye=N(v,Ie);Pe(t.TEXTURE_CUBE_MAP,v);let ne;if(Le){ze&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Be,Ie.width,Ie.height);for(let ue=0;ue<6;ue++){ne=Ee[ue].mipmaps;for(let Te=0;Te<ne.length;Te++){const be=ne[Te];v.format!==Pn?Oe!==null?ze?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,be.width,be.height,Oe,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,be.width,be.height,Oe,ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,Be,be.width,be.height,0,Oe,ve,be.data)}}}else{if(ne=v.mipmaps,ze&&dt){ne.length>0&&ye++;const ue=O(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Be,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(he){ze?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Oe,ve,Ee[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Ee[ue].width,Ee[ue].height,0,Oe,ve,Ee[ue].data);for(let Te=0;Te<ne.length;Te++){const Ge=ne[Te].image[ue].image;ze?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,Ge.width,Ge.height,Oe,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,Be,Ge.width,Ge.height,0,Oe,ve,Ge.data)}}else{ze?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,ve,Ee[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Oe,ve,Ee[ue]);for(let Te=0;Te<ne.length;Te++){const be=ne[Te];ze?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,Oe,ve,be.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,Be,Oe,ve,be.image[ue])}}}m(v)&&d(t.TEXTURE_CUBE_MAP),V.__version=F.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function xe(x,v,U,P,F,V){const fe=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),_e=y(U.internalFormat,fe,ae,U.colorSpace),Le=i.get(v),he=i.get(U);if(he.__renderTarget=v,!Le.__hasExternalTextures){const Ee=Math.max(1,v.width>>V),Ie=Math.max(1,v.height>>V);F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?n.texImage3D(F,V,_e,Ee,Ie,v.depth,0,fe,ae,null):n.texImage2D(F,V,_e,Ee,Ie,0,fe,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,x),j(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,F,he.__webglTexture,0,$(v)):(F===t.TEXTURE_2D||F>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,F,he.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(x,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,x),v.depthBuffer){const P=v.depthTexture,F=P&&P.isDepthTexture?P.type:null,V=g(v.stencilBuffer,F),fe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=$(v);j(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,V,v.width,v.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,V,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,V,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,x)}else{const P=v.textures;for(let F=0;F<P.length;F++){const V=P[F],fe=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),_e=y(V.internalFormat,fe,ae,V.colorSpace),Le=$(v);U&&j(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,_e,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,_e,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,_e,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=i.get(v.depthTexture);P.__renderTarget=v,(!P.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const F=P.__webglTexture,V=$(v);if(v.depthTexture.format===Bs)j(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(v.depthTexture.format===ks)j(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function le(x){const v=i.get(x),U=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const P=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const F=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",F)};P.addEventListener("dispose",F),v.__depthDisposeCallback=F}v.__boundDepthTexture=P}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");re(v.__webglFramebuffer,x)}else if(U){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),H(v.__webglDepthbuffer[P],x,!1);else{const F=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),H(v.__webglDepthbuffer,x,!1);else{const P=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,F),t.framebufferRenderbuffer(t.FRAMEBUFFER,P,t.RENDERBUFFER,F)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(x,v,U){const P=i.get(x);v!==void 0&&xe(P.__webglFramebuffer,x,x.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&le(x)}function De(x){const v=x.texture,U=i.get(x),P=i.get(v);x.addEventListener("dispose",R);const F=x.textures,V=x.isWebGLCubeRenderTarget===!0,fe=F.length>1;if(fe||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let _e=0;_e<v.mipmaps.length;_e++)U.__webglFramebuffer[ae][_e]=t.createFramebuffer()}else U.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ae=0,_e=F.length;ae<_e;ae++){const Le=i.get(F[ae]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(x.samples>0&&j(x)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<F.length;ae++){const _e=F[ae];U.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const Le=s.convert(_e.format,_e.colorSpace),he=s.convert(_e.type),Ee=y(_e.internalFormat,Le,he,_e.colorSpace,x.isXRRenderTarget===!0),Ie=$(x);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Ee,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),x.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),H(U.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)xe(U.__webglFramebuffer[ae][_e],x,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else xe(U.__webglFramebuffer[ae],x,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ae=0,_e=F.length;ae<_e;ae++){const Le=F[ae],he=i.get(Le);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Pe(t.TEXTURE_2D,Le),xe(U.__webglFramebuffer,x,Le,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Le)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,P.__webglTexture),Pe(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)xe(U.__webglFramebuffer[_e],x,v,t.COLOR_ATTACHMENT0,ae,_e);else xe(U.__webglFramebuffer,x,v,t.COLOR_ATTACHMENT0,ae,0);m(v)&&d(ae),n.unbindTexture()}x.depthBuffer&&le(x)}function L(x){const v=x.textures;for(let U=0,P=v.length;U<P;U++){const F=v[U];if(m(F)){const V=M(x),fe=i.get(F).__webglTexture;n.bindTexture(V,fe),d(V),n.unbindTexture()}}}const D=[],S=[];function J(x){if(x.samples>0){if(j(x)===!1){const v=x.textures,U=x.width,P=x.height;let F=t.COLOR_BUFFER_BIT;const V=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(x),ae=v.length>1;if(ae)for(let _e=0;_e<v.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(F|=t.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(F|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Le=i.get(v[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,U,P,0,0,U,P,F,t.NEAREST),l===!0&&(D.length=0,S.length=0,D.push(t.COLOR_ATTACHMENT0+_e),x.depthBuffer&&x.resolveDepthBuffer===!1&&(D.push(V),S.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,S)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let _e=0;_e<v.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Le=i.get(v[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function $(x){return Math.min(r.maxSamples,x.samples)}function j(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function b(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function C(x,v){const U=x.colorSpace,P=x.format,F=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||U!==ts&&U!==Ii&&(Je.getTransfer(U)===ut?(P!==Pn||F!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function O(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=oe,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=ce,this.setupRenderTarget=De,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=j}function wy(t,e){function n(i,r=Ii){let s;const o=Je.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===nu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Mp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ep)return t.BYTE;if(i===Sp)return t.SHORT;if(i===Os)return t.UNSIGNED_SHORT;if(i===tu)return t.INT;if(i===pr)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Qs)return t.HALF_FLOAT;if(i===yp)return t.ALPHA;if(i===bp)return t.RGB;if(i===Pn)return t.RGBA;if(i===Ap)return t.LUMINANCE;if(i===Tp)return t.LUMINANCE_ALPHA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===Rp)return t.RED;if(i===ru)return t.RED_INTEGER;if(i===wp)return t.RG;if(i===su)return t.RG_INTEGER;if(i===ou)return t.RGBA_INTEGER;if(i===Ho||i===zo||i===Vo||i===Go)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yl||i===jl||i===ql||i===$l)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Zl||i===Ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kl||i===Zl)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jl||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ic)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wo||i===dc||i===pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cp||i===mc||i===_c||i===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hi({vertexShader:Cy,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dy extends vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const E=new Ly,m=n.getContextAttributes();let d=null,M=null;const y=[],g=[],N=new je;let I=null;const R=new En;R.viewport=new St;const k=new En;k.viewport=new St;const w=[R,k],T=new Qv;let B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=y[ie];return me===void 0&&(me=new rl,y[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=y[ie];return me===void 0&&(me=new rl,y[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=y[ie];return me===void 0&&(me=new rl,y[ie]=me),me.getHandSpace()};function q(ie){const me=g.indexOf(ie.inputSource);if(me===-1)return;const xe=y[me];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||o),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function se(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<y.length;ie++){const me=g[ie];me!==null&&(g[ie]=null,y[ie].disconnect(me))}B=null,Q=null,E.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,M=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",se),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,H=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=m.stencil?ks:Bs,H=m.stencil?Fs:pr);const le={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new mr(h.textureWidth,h.textureHeight,{format:Pn,type:mi,depthTexture:new Gp(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new mr(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function oe(ie){for(let me=0;me<ie.removed.length;me++){const xe=ie.removed[me],H=g.indexOf(xe);H>=0&&(g[H]=null,y[H].disconnect(xe))}for(let me=0;me<ie.added.length;me++){const xe=ie.added[me];let H=g.indexOf(xe);if(H===-1){for(let le=0;le<y.length;le++)if(le>=g.length){g.push(xe),H=le;break}else if(g[le]===null){g[le]=xe,H=le;break}if(H===-1)break}const re=y[H];re&&re.connect(xe)}}const ee=new Y,te=new Y;function X(ie,me,xe){ee.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const H=ee.distanceTo(te),re=me.projectionMatrix.elements,le=xe.projectionMatrix.elements,ce=re[14]/(re[10]-1),De=re[14]/(re[10]+1),L=(re[9]+1)/re[5],D=(re[9]-1)/re[5],S=(re[8]-1)/re[0],J=(le[8]+1)/le[0],$=ce*S,j=ce*J,b=H/(-S+J),C=b*-S;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(C),ie.translateZ(b),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const O=ce+b,x=De+b,v=$-C,U=j+(H-C),P=L*De/x*O,F=D*De/x*O;ie.projectionMatrix.makePerspective(v,U,P,F,O,x),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function de(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,xe=ie.far;E.texture!==null&&(E.depthNear>0&&(me=E.depthNear),E.depthFar>0&&(xe=E.depthFar)),T.near=k.near=R.near=me,T.far=k.far=R.far=xe,(B!==T.near||Q!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,Q=T.far),R.layers.mask=ie.layers.mask|2,k.layers.mask=ie.layers.mask|4,T.layers.mask=R.layers.mask|k.layers.mask;const H=ie.parent,re=T.cameras;de(T,H);for(let le=0;le<re.length;le++)de(re[le],H);re.length===2?X(T,R,k):T.projectionMatrix.copy(R.projectionMatrix),ge(ie,T,H)};function ge(ie,me,xe){xe===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=vc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let Ae=null;function Pe(ie,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let H=!1;xe.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let ce=0;ce<xe.length;ce++){const De=xe[ce];let L=null;if(p!==null)L=p.getViewport(De);else{const S=f.getViewSubImage(h,De);L=S.viewport,ce===0&&(e.setRenderTargetTextures(M,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(M))}let D=w[ce];D===void 0&&(D=new En,D.layers.enable(ce),D.viewport=new St,w[ce]=D),D.matrix.fromArray(De.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(De.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(L.x,L.y,L.width,L.height),ce===0&&(T.matrix.copy(D.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(D)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(xe[0]);ce&&ce.isValid&&ce.texture&&E.init(e,ce,r.renderState)}}for(let xe=0;xe<y.length;xe++){const H=g[xe],re=y[xe];H!==null&&re!==void 0&&re.update(H,me,c||o)}Ae&&Ae(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ye=new Wp;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const nr=new _i,Iy=new Mt;function Ny(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Bp(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,y,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),E(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,g=M.envMapRotation;y&&(m.envMap.value=y,nr.copy(g),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(nr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Uy(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const g=y.program;i.uniformBlockBinding(M,g)}function c(M,y){let g=r[M.id];g===void 0&&(_(M),g=u(M),r[M.id]=g,M.addEventListener("dispose",m));const N=y.program;i.updateUBOMapping(M,N);const I=e.render.frame;s[M.id]!==I&&(h(M),s[M.id]=I)}function u(M){const y=f();M.__bindingPointIndex=y;const g=t.createBuffer(),N=M.__size,I=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,g),t.bufferData(t.UNIFORM_BUFFER,N,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,g),g}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],g=M.uniforms,N=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let I=0,R=g.length;I<R;I++){const k=Array.isArray(g[I])?g[I]:[g[I]];for(let w=0,T=k.length;w<T;w++){const B=k[w];if(p(B,I,w,N)===!0){const Q=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let se=0;for(let oe=0;oe<q.length;oe++){const ee=q[oe],te=E(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,Q+se,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,se),se+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,y,g,N){const I=M.value,R=y+"_"+g;if(N[R]===void 0)return typeof I=="number"||typeof I=="boolean"?N[R]=I:N[R]=I.clone(),!0;{const k=N[R];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return N[R]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function _(M){const y=M.uniforms;let g=0;const N=16;for(let R=0,k=y.length;R<k;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,B=w.length;T<B;T++){const Q=w[T],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let se=0,oe=q.length;se<oe;se++){const ee=q[se],te=E(ee),X=g%N,de=X%te.boundary,ge=X+de;g+=de,ge!==0&&N-ge<te.storage&&(g+=N-ge),Q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=g,g+=te.storage}}}const I=g%N;return I>0&&(g+=N-I),M.__size=g,M.__cache={},this}function E(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const g=o.indexOf(y.__bindingPointIndex);o.splice(g,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Oy{constructor(e={}){const{canvas:n=dv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),E=new Int32Array(4);let m=null,d=null;const M=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let N=!1;this._outputColorSpace=xn;let I=0,R=0,k=null,w=-1,T=null;const B=new St,Q=new St;let q=null;const se=new ct(0);let oe=0,ee=n.width,te=n.height,X=1,de=null,ge=null;const Ae=new St(0,0,ee,te),Pe=new St(0,0,ee,te);let Ye=!1;const ie=new zp;let me=!1,xe=!1;const H=new Mt,re=new Mt,le=new Y,ce=new St,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function D(){return k===null?X:1}let S=i;function J(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eu}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",be,!1),S===null){const G="webgl2";if(S=J(G,A),S===null)throw J(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,j,b,C,O,x,v,U,P,F,V,fe,ae,_e,Le,he,Ee,Ie,Oe,ve,Be,ze,dt,z;function ye(){$=new YS(S),$.init(),ze=new wy(S,$),j=new kS(S,$,e,ze),b=new Ty(S,$),j.reverseDepthBuffer&&h&&b.buffers.depth.setReversed(!0),C=new $S(S),O=new dy,x=new Ry(S,$,b,O,j,ze,C),v=new zS(g),U=new XS(g),P=new tx(S),dt=new FS(S,P),F=new jS(S,P,C,dt),V=new ZS(S,F,P,C),Oe=new KS(S,j,x),he=new HS(O),fe=new hy(g,v,U,$,j,dt,he),ae=new Ny(g,O),_e=new my,Le=new Sy($),Ie=new OS(g,v,U,b,V,p,l),Ee=new by(g,V,j),z=new Uy(S,C,j,b),ve=new BS(S,$,C),Be=new qS(S,$,C),C.programs=fe.programs,g.capabilities=j,g.extensions=$,g.properties=O,g.renderLists=_e,g.shadowMap=Ee,g.state=b,g.info=C}ye();const ne=new Dy(g,S);this.xr=ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(ee,te,!1))},this.getSize=function(A){return A.set(ee,te)},this.setSize=function(A,G,K=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,te=G,n.width=Math.floor(A*X),n.height=Math.floor(G*X),K===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ee*X,te*X).floor()},this.setDrawingBufferSize=function(A,G,K){ee=A,te=G,X=K,n.width=Math.floor(A*K),n.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Ae)},this.setViewport=function(A,G,K,Z){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,G,K,Z),b.viewport(B.copy(Ae).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,G,K,Z){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,G,K,Z),b.scissor(Q.copy(Pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(A){b.setScissorTest(Ye=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,K=!0){let Z=0;if(A){let W=!1;if(k!==null){const pe=k.texture.format;W=pe===ou||pe===su||pe===ru}if(W){const pe=k.texture.type,Me=pe===mi||pe===pr||pe===Os||pe===Fs||pe===nu||pe===iu,we=Ie.getClearColor(),Ce=Ie.getClearAlpha(),ke=we.r,Fe=we.g,Ne=we.b;Me?(_[0]=ke,_[1]=Fe,_[2]=Ne,_[3]=Ce,S.clearBufferuiv(S.COLOR,0,_)):(E[0]=ke,E[1]=Fe,E[2]=Ne,E[3]=Ce,S.clearBufferiv(S.COLOR,0,E))}else Z|=S.COLOR_BUFFER_BIT}G&&(Z|=S.DEPTH_BUFFER_BIT),K&&(Z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ie.dispose(),_e.dispose(),Le.dispose(),O.dispose(),v.dispose(),U.dispose(),V.dispose(),dt.dispose(),z.dispose(),fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Tu),ne.removeEventListener("sessionend",Ru),ji.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=C.autoReset,G=Ee.enabled,K=Ee.autoUpdate,Z=Ee.needsUpdate,W=Ee.type;ye(),C.autoReset=A,Ee.enabled=G,Ee.autoUpdate=K,Ee.needsUpdate=Z,Ee.type=W}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const G=A.target;G.removeEventListener("dispose",Ge),xt(G)}function xt(A){kt(A),O.remove(A)}function kt(A){const G=O.get(A).programs;G!==void 0&&(G.forEach(function(K){fe.releaseProgram(K)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,K,Z,W,pe){G===null&&(G=De);const Me=W.isMesh&&W.matrixWorld.determinant()<0,we=Bm(A,G,K,Z,W);b.setMaterial(Z,Me);let Ce=K.index,ke=1;if(Z.wireframe===!0){if(Ce=F.getWireframeAttribute(K),Ce===void 0)return;ke=2}const Fe=K.drawRange,Ne=K.attributes.position;let Ze=Fe.start*ke,nt=(Fe.start+Fe.count)*ke;pe!==null&&(Ze=Math.max(Ze,pe.start*ke),nt=Math.min(nt,(pe.start+pe.count)*ke)),Ce!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,Ce.count)):Ne!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Ne.count));const bt=nt-Ze;if(bt<0||bt===1/0)return;dt.setup(W,Z,we,K,Ce);let Et,Qe=ve;if(Ce!==null&&(Et=P.get(Ce),Qe=Be,Qe.setIndex(Et)),W.isMesh)Z.wireframe===!0?(b.setLineWidth(Z.wireframeLinewidth*D()),Qe.setMode(S.LINES)):Qe.setMode(S.TRIANGLES);else if(W.isLine){let Ue=Z.linewidth;Ue===void 0&&(Ue=1),b.setLineWidth(Ue*D()),W.isLineSegments?Qe.setMode(S.LINES):W.isLineLoop?Qe.setMode(S.LINE_LOOP):Qe.setMode(S.LINE_STRIP)}else W.isPoints?Qe.setMode(S.POINTS):W.isSprite&&Qe.setMode(S.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Qe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,Ut=W._multiDrawCounts,it=W._multiDrawCount,An=Ce?P.get(Ce).bytesPerElement:1,xr=O.get(Z).currentProgram.getUniforms();for(let ln=0;ln<it;ln++)xr.setValue(S,"_gl_DrawID",ln),Qe.render(Ue[ln]/An,Ut[ln])}else if(W.isInstancedMesh)Qe.renderInstances(Ze,bt,W.count);else if(K.isInstancedBufferGeometry){const Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ut=Math.min(K.instanceCount,Ue);Qe.renderInstances(Ze,bt,Ut)}else Qe.render(Ze,bt)};function at(A,G,K){A.transparent===!0&&A.side===oi&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,ro(A,G,K),A.side=ki,A.needsUpdate=!0,ro(A,G,K),A.side=oi):ro(A,G,K)}this.compile=function(A,G,K=null){K===null&&(K=A),d=Le.get(K),d.init(G),y.push(d),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),A!==K&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const Z=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const we=pe[Me];at(we,K,W),Z.add(we)}else at(pe,K,W),Z.add(pe)}),d=y.pop(),Z},this.compileAsync=function(A,G,K=null){const Z=this.compile(A,G,K);return new Promise(W=>{function pe(){if(Z.forEach(function(Me){O.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){W(A);return}setTimeout(pe,10)}$.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let bn=null;function qn(A){bn&&bn(A)}function Tu(){ji.stop()}function Ru(){ji.start()}const ji=new Wp;ji.setAnimationLoop(qn),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(A){bn=A,ne.setAnimationLoop(A),A===null?ji.stop():ji.start()},ne.addEventListener("sessionstart",Tu),ne.addEventListener("sessionend",Ru),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(G),G=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,G,k),d=Le.get(A,y.length),d.init(G),y.push(d),re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ie.setFromProjectionMatrix(re),xe=this.localClippingEnabled,me=he.init(this.clippingPlanes,xe),m=_e.get(A,M.length),m.init(),M.push(m),ne.enabled===!0&&ne.isPresenting===!0){const pe=g.xr.getDepthSensingMesh();pe!==null&&ba(pe,G,-1/0,g.sortObjects)}ba(A,G,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(de,ge),L=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,L&&Ie.addToRenderList(m,A),this.info.render.frame++,me===!0&&he.beginShadows();const K=d.state.shadowsArray;Ee.render(K,A,G),me===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,W=m.transmissive;if(d.setupLights(),G.isArrayCamera){const pe=G.cameras;if(W.length>0)for(let Me=0,we=pe.length;Me<we;Me++){const Ce=pe[Me];Cu(Z,W,A,Ce)}L&&Ie.render(A);for(let Me=0,we=pe.length;Me<we;Me++){const Ce=pe[Me];wu(m,A,Ce,Ce.viewport)}}else W.length>0&&Cu(Z,W,A,G),L&&Ie.render(A),wu(m,A,G);k!==null&&R===0&&(x.updateMultisampleRenderTarget(k),x.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(g,A,G),dt.resetDefaultState(),w=-1,T=null,y.pop(),y.length>0?(d=y[y.length-1],me===!0&&he.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ba(A,G,K,Z){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){Z&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const Me=V.update(A),we=A.material;we.visible&&m.push(A,Me,we,K,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const Me=V.update(A),we=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ce.copy(Me.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Ce=Me.groups;for(let ke=0,Fe=Ce.length;ke<Fe;ke++){const Ne=Ce[ke],Ze=we[Ne.materialIndex];Ze&&Ze.visible&&m.push(A,Me,Ze,K,ce.z,Ne)}}else we.visible&&m.push(A,Me,we,K,ce.z,null)}}const pe=A.children;for(let Me=0,we=pe.length;Me<we;Me++)ba(pe[Me],G,K,Z)}function wu(A,G,K,Z){const W=A.opaque,pe=A.transmissive,Me=A.transparent;d.setupLightsView(K),me===!0&&he.setGlobalState(g.clippingPlanes,K),Z&&b.viewport(B.copy(Z)),W.length>0&&io(W,G,K),pe.length>0&&io(pe,G,K),Me.length>0&&io(Me,G,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Cu(A,G,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new mr(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Qs:mi,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=d.state.transmissionRenderTarget[Z.id],Me=Z.viewport||B;pe.setSize(Me.z*g.transmissionResolutionScale,Me.w*g.transmissionResolutionScale);const we=g.getRenderTarget();g.setRenderTarget(pe),g.getClearColor(se),oe=g.getClearAlpha(),oe<1&&g.setClearColor(16777215,.5),g.clear(),L&&Ie.render(K);const Ce=g.toneMapping;g.toneMapping=Fi;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),me===!0&&he.setGlobalState(g.clippingPlanes,Z),io(A,K,Z),x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ne=0,Ze=G.length;Ne<Ze;Ne++){const nt=G[Ne],bt=nt.object,Et=nt.geometry,Qe=nt.material,Ue=nt.group;if(Qe.side===oi&&bt.layers.test(Z.layers)){const Ut=Qe.side;Qe.side=sn,Qe.needsUpdate=!0,Pu(bt,K,Z,Et,Qe,Ue),Qe.side=Ut,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe))}g.setRenderTarget(we),g.setClearColor(se,oe),ke!==void 0&&(Z.viewport=ke),g.toneMapping=Ce}function io(A,G,K){const Z=G.isScene===!0?G.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){const Me=A[W],we=Me.object,Ce=Me.geometry,ke=Me.group;let Fe=Me.material;Fe.allowOverride===!0&&Z!==null&&(Fe=Z),we.layers.test(K.layers)&&Pu(we,G,K,Ce,Fe,ke)}}function Pu(A,G,K,Z,W,pe){A.onBeforeRender(g,G,K,Z,W,pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(g,G,K,Z,A,pe),W.transparent===!0&&W.side===oi&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,g.renderBufferDirect(K,G,Z,W,A,pe),W.side=ki,W.needsUpdate=!0,g.renderBufferDirect(K,G,Z,W,A,pe),W.side=oi):g.renderBufferDirect(K,G,Z,W,A,pe),A.onAfterRender(g,G,K,Z,W,pe)}function ro(A,G,K){G.isScene!==!0&&(G=De);const Z=O.get(A),W=d.state.lights,pe=d.state.shadowsArray,Me=W.state.version,we=fe.getParameters(A,W.state,pe,G,K),Ce=fe.getProgramCacheKey(we);let ke=Z.programs;Z.environment=A.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(A.isMeshStandardMaterial?U:v).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Ge),ke=new Map,Z.programs=ke);let Fe=ke.get(Ce);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===Me)return Du(A,we),Fe}else we.uniforms=fe.getUniforms(A),A.onBeforeCompile(we,g),Fe=fe.acquireProgram(we,Ce),ke.set(Ce,Fe),Z.uniforms=we.uniforms;const Ne=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=he.uniform),Du(A,we),Z.needsLights=Hm(A),Z.lightsStateVersion=Me,Z.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function Lu(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=jo.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Du(A,G){const K=O.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Bm(A,G,K,Z,W){G.isScene!==!0&&(G=De),x.resetTextureUnits();const pe=G.fog,Me=Z.isMeshStandardMaterial?G.environment:null,we=k===null?g.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ts,Ce=(Z.isMeshStandardMaterial?U:v).get(Z.envMap||Me),ke=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,nt=!!K.morphAttributes.color;let bt=Fi;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(bt=g.toneMapping);const Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=Et!==void 0?Et.length:0,Ue=O.get(Z),Ut=d.state.lights;if(me===!0&&(xe===!0||A!==T)){const jt=A===T&&Z.id===w;he.setState(Z,A,jt)}let it=!1;Z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ut.state.version||Ue.outputColorSpace!==we||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Ce||Z.fog===!0&&Ue.fog!==pe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==Fe||Ue.morphTargets!==Ne||Ue.morphNormals!==Ze||Ue.morphColors!==nt||Ue.toneMapping!==bt||Ue.morphTargetsCount!==Qe)&&(it=!0):(it=!0,Ue.__version=Z.version);let An=Ue.currentProgram;it===!0&&(An=ro(Z,G,W));let xr=!1,ln=!1,cs=!1;const gt=An.getUniforms(),_n=Ue.uniforms;if(b.useProgram(An.program)&&(xr=!0,ln=!0,cs=!0),Z.id!==w&&(w=Z.id,ln=!0),xr||T!==A){b.buffers.depth.getReversed()?(H.copy(A.projectionMatrix),mv(H),_v(H),gt.setValue(S,"projectionMatrix",H)):gt.setValue(S,"projectionMatrix",A.projectionMatrix),gt.setValue(S,"viewMatrix",A.matrixWorldInverse);const en=gt.map.cameraPosition;en!==void 0&&en.setValue(S,le.setFromMatrixPosition(A.matrixWorld)),j.logarithmicDepthBuffer&&gt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&gt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,ln=!0,cs=!0)}if(W.isSkinnedMesh){gt.setOptional(S,W,"bindMatrix"),gt.setOptional(S,W,"bindMatrixInverse");const jt=W.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),gt.setValue(S,"boneTexture",jt.boneTexture,x))}W.isBatchedMesh&&(gt.setOptional(S,W,"batchingTexture"),gt.setValue(S,"batchingTexture",W._matricesTexture,x),gt.setOptional(S,W,"batchingIdTexture"),gt.setValue(S,"batchingIdTexture",W._indirectTexture,x),gt.setOptional(S,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(S,"batchingColorTexture",W._colorsTexture,x));const gn=K.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Oe.update(W,K,An),(ln||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,gt.setValue(S,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(_n.envMap.value=Ce,_n.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(_n.envMapIntensity.value=G.environmentIntensity),ln&&(gt.setValue(S,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&km(_n,cs),pe&&Z.fog===!0&&ae.refreshFogUniforms(_n,pe),ae.refreshMaterialUniforms(_n,Z,X,te,d.state.transmissionRenderTarget[A.id]),jo.upload(S,Lu(Ue),_n,x)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(jo.upload(S,Lu(Ue),_n,x),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&gt.setValue(S,"center",W.center),gt.setValue(S,"modelViewMatrix",W.modelViewMatrix),gt.setValue(S,"normalMatrix",W.normalMatrix),gt.setValue(S,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const jt=Z.uniformsGroups;for(let en=0,Aa=jt.length;en<Aa;en++){const qi=jt[en];z.update(qi,An),z.bind(qi,An)}}return An}function km(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Hm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,G,K){const Z=O.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=G,O.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const K=O.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const zm=S.createFramebuffer();this.setRenderTarget=function(A,G=0,K=0){k=A,I=G,R=K;let Z=!0,W=null,pe=!1,Me=!1;if(A){const Ce=O.get(A);if(Ce.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(S.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)x.setupRenderTarget(A);else if(Ce.__hasExternalTextures)x.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ne=A.depthTexture;if(Ce.__boundDepthTexture!==Ne){if(Ne!==null&&O.has(Ne)&&(A.width!==Ne.image.width||A.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Fe=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[G])?W=Fe[G][K]:W=Fe[G],pe=!0):A.samples>0&&x.useMultisampledRTT(A)===!1?W=O.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[K]:W=Fe,B.copy(A.viewport),Q.copy(A.scissor),q=A.scissorTest}else B.copy(Ae).multiplyScalar(X).floor(),Q.copy(Pe).multiplyScalar(X).floor(),q=Ye;if(K!==0&&(W=zm),b.bindFramebuffer(S.FRAMEBUFFER,W)&&Z&&b.drawBuffers(A,W),b.viewport(B),b.scissor(Q),b.setScissorTest(q),pe){const Ce=O.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,K)}else if(Me){const Ce=O.get(A.texture),ke=G;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ce.__webglTexture,K,ke)}else if(A!==null&&K!==0){const Ce=O.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ce.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(A,G,K,Z,W,pe,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){b.bindFramebuffer(S.FRAMEBUFFER,we);try{const Ce=A.texture,ke=Ce.format,Fe=Ce.type;if(!j.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Z&&K>=0&&K<=A.height-W&&S.readPixels(G,K,Z,W,ze.convert(ke),ze.convert(Fe),pe)}finally{const Ce=k!==null?O.get(k).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,G,K,Z,W,pe,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(G>=0&&G<=A.width-Z&&K>=0&&K<=A.height-W){b.bindFramebuffer(S.FRAMEBUFFER,we);const Ce=A.texture,ke=Ce.format,Fe=Ce.type;if(!j.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ne),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(G,K,Z,W,ze.convert(ke),ze.convert(Fe),0);const Ze=k!==null?O.get(k).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,Ze);const nt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await pv(S,nt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ne),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(Ne),S.deleteSync(nt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,K=0){const Z=Math.pow(2,-K),W=Math.floor(A.image.width*Z),pe=Math.floor(A.image.height*Z),Me=G!==null?G.x:0,we=G!==null?G.y:0;x.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,Me,we,W,pe),b.unbindTexture()};const Vm=S.createFramebuffer(),Gm=S.createFramebuffer();this.copyTextureToTexture=function(A,G,K=null,Z=null,W=0,pe=null){pe===null&&(W!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=W,W=0):pe=0);let Me,we,Ce,ke,Fe,Ne,Ze,nt,bt;const Et=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(K!==null)Me=K.max.x-K.min.x,we=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Fe=K.min.y,Ne=K.isBox3?K.min.z:0;else{const gn=Math.pow(2,-W);Me=Math.floor(Et.width*gn),we=Math.floor(Et.height*gn),A.isDataArrayTexture?Ce=Et.depth:A.isData3DTexture?Ce=Math.floor(Et.depth*gn):Ce=1,ke=0,Fe=0,Ne=0}Z!==null?(Ze=Z.x,nt=Z.y,bt=Z.z):(Ze=0,nt=0,bt=0);const Qe=ze.convert(G.format),Ue=ze.convert(G.type);let Ut;G.isData3DTexture?(x.setTexture3D(G,0),Ut=S.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(x.setTexture2DArray(G,0),Ut=S.TEXTURE_2D_ARRAY):(x.setTexture2D(G,0),Ut=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,G.unpackAlignment);const it=S.getParameter(S.UNPACK_ROW_LENGTH),An=S.getParameter(S.UNPACK_IMAGE_HEIGHT),xr=S.getParameter(S.UNPACK_SKIP_PIXELS),ln=S.getParameter(S.UNPACK_SKIP_ROWS),cs=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Et.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Et.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ke),S.pixelStorei(S.UNPACK_SKIP_ROWS,Fe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ne);const gt=A.isDataArrayTexture||A.isData3DTexture,_n=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const gn=O.get(A),jt=O.get(G),en=O.get(gn.__renderTarget),Aa=O.get(jt.__renderTarget);b.bindFramebuffer(S.READ_FRAMEBUFFER,en.__webglFramebuffer),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let qi=0;qi<Ce;qi++)gt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(A).__webglTexture,W,Ne+qi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(G).__webglTexture,pe,bt+qi)),S.blitFramebuffer(ke,Fe,Me,we,Ze,nt,Me,we,S.DEPTH_BUFFER_BIT,S.NEAREST);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||O.has(A)){const gn=O.get(A),jt=O.get(G);b.bindFramebuffer(S.READ_FRAMEBUFFER,Vm),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,Gm);for(let en=0;en<Ce;en++)gt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,gn.__webglTexture,W,Ne+en):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,gn.__webglTexture,W),_n?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,jt.__webglTexture,pe,bt+en):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,jt.__webglTexture,pe),W!==0?S.blitFramebuffer(ke,Fe,Me,we,Ze,nt,Me,we,S.COLOR_BUFFER_BIT,S.NEAREST):_n?S.copyTexSubImage3D(Ut,pe,Ze,nt,bt+en,ke,Fe,Me,we):S.copyTexSubImage2D(Ut,pe,Ze,nt,ke,Fe,Me,we);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Ut,pe,Ze,nt,bt,Me,we,Ce,Qe,Ue,Et.data):G.isCompressedArrayTexture?S.compressedTexSubImage3D(Ut,pe,Ze,nt,bt,Me,we,Ce,Qe,Et.data):S.texSubImage3D(Ut,pe,Ze,nt,bt,Me,we,Ce,Qe,Ue,Et):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,pe,Ze,nt,Me,we,Qe,Ue,Et.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,pe,Ze,nt,Et.width,Et.height,Qe,Et.data):S.texSubImage2D(S.TEXTURE_2D,pe,Ze,nt,Me,we,Qe,Ue,Et);S.pixelStorei(S.UNPACK_ROW_LENGTH,it),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,An),S.pixelStorei(S.UNPACK_SKIP_PIXELS,xr),S.pixelStorei(S.UNPACK_SKIP_ROWS,ln),S.pixelStorei(S.UNPACK_SKIP_IMAGES,cs),pe===0&&G.generateMipmaps&&S.generateMipmap(Ut),b.unbindTexture()},this.copyTextureToTexture3D=function(A,G,K=null,Z=null,W=0){return Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,K,Z,W)},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&x.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?x.setTextureCube(A,0):A.isData3DTexture?x.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?x.setTexture2DArray(A,0):x.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){I=0,R=0,k=null,b.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function Fy(){return{getAssetPath:e=>`/andrey-hauryk-web-cv/${e}`}}const oh={type:"change"},fu={type:"start"},$p={type:"end"},Io=new lu,ah=new Pi,By=Math.cos(70*hv.DEG2RAD),wt=new Y,nn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hl=1e-6;class ky extends Jv{constructor(e,n=null){super(e,n),this.state=ft.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new _r,this._lastTargetPosition=new Y,this._quat=new _r().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nf,this._sphericalDelta=new Nf,this._scale=1,this._panOffset=new Y,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Y,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zy.bind(this),this._onPointerDown=Hy.bind(this),this._onPointerUp=Vy.bind(this),this._onContextMenu=$y.bind(this),this._onMouseWheel=Xy.bind(this),this._onKeyDown=Yy.bind(this),this._onTouchStart=jy.bind(this),this._onTouchMove=qy.bind(this),this._onMouseDown=Gy.bind(this),this._onMouseMove=Wy.bind(this),this._interceptControlDown=Ky.bind(this),this._interceptControlUp=Zy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oh),this.update(),this.state=ft.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<By?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hl||this._lastTargetPosition.distanceToSquared(this.target)>hl?(this.dispatchEvent(oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/n.clientHeight),this._rotateUp(nn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/n.clientHeight),this._rotateUp(nn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hy(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function zy(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Vy(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=ft.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Gy(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ft.DOLLY;break;case jr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}break;case jr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(fu)}function Wy(t){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Xy(t){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(t.preventDefault(),this.dispatchEvent(fu),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent($p))}function Yy(t){this.enabled!==!1&&this._handleKeyDown(t)}function jy(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ft.TOUCH_ROTATE;break;case kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ft.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(fu)}function qy(t){switch(this._trackPointer(t),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ft.NONE}}function $y(t){this.enabled!==!1&&t.preventDefault()}function Ky(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zy(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qy(t){const{getAssetPath:e}=Fy();let n=[];const i=[];let r,s,o,a;const l=()=>{s=new zv,o=new En(75,window.innerWidth/window.innerHeight,.1,1e3),o.position.z=400,r=new Oy({alpha:!0,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),t.value&&t.value.appendChild(r.domElement),a=new ky(o,r.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.rotateSpeed=.5,a.zoomSpeed=.5,a.enablePan=!1,c(5e3,"star_05.png","white",8,new Y(0,.01,0)),c(500,"star_08.png","#8F00FF",20,new Y(.08,.04,.07)),c(100,"scorch_01.png","#FF77FF",40,new Y(0,.1,0))},c=(f,h,p=16777215,_=6,E=new Y(0,0,0))=>{const m=new xi,d=new Kv().load(e(h)),M=new Vp({map:d,color:p,size:_,transparent:!0,depthWrite:!1,blending:Dl,alphaTest:.1,sizeAttenuation:!0}),y=new Float32Array(f*3);for(let N=0;N<f;N++)y[N*3]=Math.random()*2e3-1e3,y[N*3+1]=Math.random()*2e3-1e3,y[N*3+2]=Math.random()*2e3-1e3;m.setAttribute("position",new Nn(y,3));const g=new Wv(m,M);s.add(g),E.length()>0&&n.push({points:g,speed:E})},u=()=>{requestAnimationFrame(u);for(const{points:f,speed:h}of n)f.position.add(h);for(const f of i)f.sprite.material.rotation+=f.rotationSpeed;a.update(),r.render(s,o)};return as(()=>{l(),u()}),{spaceScene:t}}const Jy=Jt({__name:"SpaceScene",setup(t){const e=Xn(null);return Qy(e),(n,i)=>(Bt(),pi("div",{ref_key:"spaceScene",ref:e,class:"space-scene"},null,512))}}),eb=jn(Jy,[["__scopeId","data-v-03a869d1"]]),tb={class:"main"},nb={class:"smoke-wrapper"},ib=Jt({__name:"PageLayout",props:{activeSection:{}},emits:["setActiveSection"],setup(t,{emit:e}){const n=e,i=r=>{n("setActiveSection",r)};return(r,s)=>(Bt(),pi("main",tb,[Ke("div",nb,[Pt(eb)]),Pt(M0,{activeSection:r.activeSection,onSetActiveSection:i},null,8,["activeSection"]),Yd(r.$slots,"content",{},void 0)]))}}),rb=jn(ib,[["__scopeId","data-v-9d4ba45f"]]),sb="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERgSEREYGBIRGBgYERgYERgYGBgYGBgaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHz0rJSs0ND02NDUxPzQ1NjQ0NDQ0NDQ1NDQ0NDQ3NDQ0NDQ0NDE1NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAAAQIGBwMEBQj/xAA9EAACAQICBgcFBgUFAQAAAAAAAQIDEQQhBQYSMUFRUmFxgZGx0QcTFiKhIzJiksHhM0Ky8PEUY3KCwiT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEBQIG/8QAMhEBAAECAwUGBAYDAAAAAAAAAAECAwQRIQVRYZGhFBUxQXHREhMywSIzgbHh8FKS0v/aAAwDAQACEQMRAD8A7bAAAkXckmWIFAAAAAAWxGBRYKJUBLCxqwsBmwsasLAZsDViWAySLurhsqQAFIAAAAAjAoIVMCgACGXI00ZjEBFGgAABbACpBIoCxIlDQDeEg2km27JK7bySXFvkjrnW32n06ElT0d7uvPP3lSTm6cGrbKjs295fPOMrK3WB2RY9KWlcKpbDxNFT3bLrQUr9l7nQmntfNIY2n7qrUjCm3eUaMZQ2uqbcm3Hqvbnc4tsLdZW7AP1fHNXWae5rczVj8s4XSOIpRcaOIq04PfGFecIvtjGSR71HWbSEIxjHG19mEozSdaUltRaavtNtrJfK8uoD9LGZO/YdV6n+0ytWxEMNjoQarSUIVYJxanJ2ipxu0020rq1rrJrd2slnnv5ASMS2LYgEsSxoNAYBWQASLKGgD5+ASCAFAAEAAAAqAGkggALYFAEnJRTlJpRim227JJZtt8EaSOtPbTpaUMPSwkJNf6mUp1bcYU7Wi+pylF/9AOIa/wCvE8fOVDDycMFBtJLJ12v55fg6Me955R4SmAQNNcV3rl+xkqZWuK71y/YDJUuL3efUglxe7z6kG7gVTaaabTi04tNpxad0096d87nkpYmSqxrSSnOEoy+02pqTi07Tzu4u1mr5ps8IA791F14p6STpTpqliYRu4p3hOKsnKF81a6vF7rrNnMj8wav6SeExdHEp29zUjKf/AAb2Zrvg5LvP1A0SMkNEAjRGUNAYBWQAAAKAAIAAKipBFAFCKAKkEigU6D9rmM95pWcE8sPTp07cm06j/rXgd+H5q16qbelcXL/elH8iUP8AyB8I7E0B7M51aUamLrSpSmlKNOEE5xT3bbludrfLbLnwXHdQtE/6vSFOMleFH7WpytTa2V3zcMuVzvkqrry0hZRRE6y6j0n7L8VCX/zVqdSH4705rqyUoy7brsPSp+zfSd840kubrr9IvyO6QePmVPfy6XVNH2VV5JOpjKcJWzjClOaXZJyjfwPXr+yzGKdoYihKHSltwl+RRl5nbwHzKk/LpdQ1vZdjVG8K9CUui3OPhLZZwzSWjq2GqOjiKbhUjm4u2ae6UWspRdnmuT5H6ROH+0zQ8cRgZVlFe9wqdSEuOwv4kezZ+a3OCPVNyc9Xmq3GWjpKavFrmmfqfRFf3mGo1L395Spzvz2oxf6n5ZbP07qtSdPR+FhL70MNQi+2NKCfkXKX1GiGiNAZIaIwIzLNEYGQUgFAAEKiADaKjKj2mosClREaQAAoA/NOu0NnSeLX+/N/me1+p+lz84e0ihKnpfFKz+aUZx61OnBq3e2gOe+ynRPusHLEyXz4qXy5Z+7g3GPjLbl2NHOUz09D0lTwtGEVZQpU4pdkIo9wyzrObTTpGSgAh6AAAPHiKMakJQl92cZQl2STT8zyBBD8xYinKEZQl96G1GX/ACjdP6pn6xowUYRit0YpLuVj824zCuekZUJ00lXxUoR2Uk7TruKd125o/StzWyhCkAjIaMgRkZWGBhki7kbKkBQAACCLYClSIkaQFRSIoFQBQB097XMHBYmli1a04e6qOUVs/I3NWvxcZS7oO2e/t+cbpo4Lr/g41tG1oSjdr3bj1NVIK67m13s8VVZTD1TTnEvtaNX2FO+/3cP6Ee0GgZ2gAASAAAIuwMhDgeC0Op6fnUnH5MPJ1oJc5wjJSfXtzTS/D4dqQaautzOI6MwyWMxlW2c5UIJ/hhQhPLvqM5VhlaEf74l9FWc5Ka6cozeUMpCxWhGUMDDMSdzc1ciXiBlRDNMywAAAI0jKNoAioiKgNIAoApCgVHwtL4RVY1KTyVRNX5N5p+Nj7p6OMotvair332K7kaPdudXqMAFDQAAAAAAAAzCCu7Kzm05dbso3fcku4+1Y+fhaLck2slnfyPol9qNM1FydckIUhYrCMpAMsjKRgRmWbZhgAAARtGEaQFRURFQGikQApSFAoAA+RUVpNcm/MyexjKdpX4S8+J65lmMpyaaZzjMABD0AAAQp5KFPaklw49gR4PpU1aKXJLyNgGtlQhSACFIBkjKyMAzDNMywAAAI0jJUBSwlfgYcjcEBtAiKBSkQApSEbAxiIpxafK/ej5MZXVz69RfK+x+R8CMrbii9OUwvta5vaBiE0zZUsADMpJbyRWz6GBS2VLjK/wBHZHx5zufZwD+yj3+bPVqc6ni7GVL2WzMXdbrGW7/oaijSzqQpGBAwRgRkZTDzArMsNEuBQABCOVytCK5gaijSIioCo0jJUBSkKBTK/wAFPDiMTCC+Z58Et/7ETMRrKYjPwaru0JN8mfBPNXxMpvPJcF682eEyXa4qnRpt0fDGoeRVWeMFeax5HVZhu5AAPq6Plemlyby77nyWjy0a0oS2k8+PX2nu3V8M5vFdPxRk+8kU9bD4yE8t0uT/AEZ7BsiYnWGWYmJykIUhKAyVkAhlfU0zMkBGQpAKAAIUgA0imUaQGkD42k9YsNQvFz2qi/ljnZ/ie5eZxXH63YipdU7Uk+jm++T/AERptYS7c1iMo3zox38fYs6TOc7o1/iHPsVi6VJXqzUVwvJK/YuJx/G654aH8KLqPh/IvF5/Q4DVnKT2pSbb3uTbb7WzDN9vZ1EfXOfT+XKvbXu1aW4iOs+3SXL8LrfUqT2aqUIS3OKeXa73t2WPsKV873vne979dzrc+tovTU6Pyy+anyvnHsf9oz43Znxx8dnx3eU+m6ek+vjo2ftj4J+DEeH+W714cY8PTw5kDw4XF06sdqEr81ua7uB5jgVUzTM01RlMPpqaoqiKqZzifOAAEJAAAAMVq0YR2pyUYrjf+7jLPSETMRGctny9Ja0SoPYpfPJP573kl1Kzv9cvL5WldPOd4UrxjxlxfZy8z4B3cDsyYn5l7/X39ue587tHbETHy8PPrV7f9ct7neB12pSyrUpQ/FF3j4OzX1ORYPSVGuvsqqk+W6S7U80dRGk87r7y3P8Avibbmz7dX0zl1j36sNna16nSuIq6T006O5SHW2A1oxVGylPbj0Z5u3U9/wBWcp0ZrXh6tozfupvm7x7pf4Ofdwd23rlnHB1bG0bF3TPKd06dfDq++RjaTV1mnuZGZW4IABQABAAAOE63abk6jw9KbjGOVRxdm3xV1wW63O5yvSmMVCjOpxisutvKP1aOqW2223dvNvm2dHZ9iKqpuVeXh6/393I2riZopi1T5+Pp/P2y3oVAHXfO+C3v2kBd/aEoACUN0qsoS2oScZLc72Z9zB6yTWVWCkuLvsvv5nwCFF7D2r0ZXKc/35+PVpw+LvYec7VWX7cp0c1o6dw0t82nycX5q6PdjiqT3VI/mXqdfJEZz69j2p+mqY5T7OrRt69H10RPpnHv9nYbxVNb6kfzL1PUr6aw8N9S75JPz3fU4PYu/t8yKdjWon8VUzyj3TXt+7MfgoiPWZn2cjxWs3ClD/tKV34fufCxOJnUltTk5Pre7sW5HhB0LGFs2Py6cuPnz/sOXiMbfxP5tWcbvCOUfcABoZAbhuBCV39vn+5kpd/b5g8X2dXtOSw04xlJuhJ2knmlfiuVt/Wdj3vmuO46dOyNUsd77Cxu/npPYfZvT/TuOZtCzGl2P19/d3NkYmZmbNXrH3j7x+r7QAOU7igACAADiuveLtThST++3KXYsl9W/A4Ojs3SmgaeImp1JSukkkmtmybfFN3zPQWpuH6dTxXodTDYqzatRTOefo4mNwF+/emuMsvLXy/ubgTIc++DMP06nivQfBmH6dTxXoaO32ePJk7pxHDm4CDn3wZhunU8V6F+DMN06nivQdvs8eR3TiOHNwFsHP8A4Mw3TqeK9A9TML06vivQdvsb55HdOI4c3AIq+SFrbzn8dT8Ot06l+GcfQr1Nwzd3Opd9a9CO32ePJPdOI4c3X7YOf/BeF6dXxXoX4Lw3Tq/mXoT2+xv6I7pxHDm6/Idg/BeG6dX8y9CfBeF6dXxXoO32N/Q7pxHDm4A2Dn/wXhenV8V6COpuGTynU6s19Mh2+zv6HdOI4c3X5UzsF6n4fc6lR9rj57J41qbhunV/MvQdvs8eSZ2TiPLLm4CDn/wZhunU8V6E+DMN06nivQdvs8eSO6cRw5uAg598GYfp1PFeg+DMP06nivQdvs8eR3TiOHNwJs5NqNitmvKm3/Fj8vbHNebPr/BmH6dTxXoebB6sUaNSNSE6m1B3V2rcmnZbrXKr2Ms3LdVOusbvPy6r8Ns/EWbtNzTSd/l59H3ZPlvKjCRs5DvqAAIQoaAX59wQSAAAACkAFuZ2itEigNRRq5kXA1cpi4uBslzNxcDVzKYuRgW4IgBSAAAABGzKz/U01cqAJAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",ob={},ab={class:"button"};function lb(t,e){return Bt(),pi("div",ab,rn(t.$t("message.resume")),1)}const cb=jn(ob,[["render",lb],["__scopeId","data-v-e181f14c"]]),ub={},fb={class:"section"},hb={class:"section__content"};function db(t,e){return Bt(),pi("section",fb,[Ke("div",hb,[Yd(t.$slots,"default",{},void 0)])])}const hu=jn(ub,[["render",db],["__scopeId","data-v-f22ef80f"]]),pb={class:"profile__container"},mb={class:"profile__name"},_b={class:"profile__description"},gb=Jt({__name:"Portfolio",setup(t){return(e,n)=>(Bt(),Bi(hu,null,{default:qs(()=>[Ke("div",pb,[Ke("h1",mb,rn(e.$t("message.name")),1),Ke("p",_b,rn(e.$t("message.description")),1),n[0]||(n[0]=Ke("div",{class:"profile__avatar",role:"img","aria-label":"Andrey Hauryk Avatar"},[Ke("img",{src:sb,alt:"Andrey Hauryk avatar"})],-1)),Pt(cb,{class:"profile__button"})])]),_:1}))}}),Sc=jn(gb,[["__scopeId","data-v-359d8800"]]),vb="/andrey-hauryk-web-cv/assets/nature-0Qlocj6M.webp",xb={class:"project-card"},Eb={class:"card-content"},Sb=["href"],Mb=Jt({__name:"CardUI",props:{project:{}},setup(t){return(e,n)=>(Bt(),pi("div",xb,[Ke("div",Eb,[Ke("h2",null,rn(e.project.name),1),Ke("p",null,rn(e.project.description),1),Ke("a",{href:e.project.link,target:"_blank",class:"project-link"}," View Project ",8,Sb)])]))}}),yb=jn(Mb,[["__scopeId","data-v-3913fb79"]]),dl=[{id:1,name:"Project One",description:"A brief description of project one.",link:"https://github.com/your-github/project-one"}],bb={class:"project"},Ab={class:"project__logo"},Tb={class:"project__overlay"},Rb=Jt({__name:"Projects",setup(t){return(e,n)=>(Bt(),Bi(hu,null,{default:qs(()=>[Ke("div",bb,[Ke("div",Ab,[n[0]||(n[0]=Ke("img",{class:"project__logo-img",src:vb},null,-1)),Ke("div",Tb,[Ke("h3",null,rn(pn(dl)[0].name),1),Ke("p",null,rn(pn(dl)[0].description),1)]),(Bt(!0),pi(Wt,null,Xd(pn(dl),i=>(Bt(),Bi(yb,{key:i.id,project:i,class:"project-card"},null,8,["project"]))),128))])])]),_:1}))}}),wb=jn(Rb,[["__scopeId","data-v-5ef4e8d5"]]),Cb={class:"relative w-full h-screen bg-black overflow-hidden"},Pb=Jt({__name:"Experience",setup(t){const e=Xn(null),n=Xn(null),i=di([{x:150,y:200,title:"Born",year:2e3},{x:300,y:120,title:"Started coding",year:2015},{x:500,y:280,title:"First job",year:2021},{x:650,y:180,title:"Freelance",year:2022},{x:800,y:350,title:"Web3 dive",year:2023}]);return as(()=>{const r=e.value.getContext("2d"),s=e.value.width=window.innerWidth,o=e.value.height=window.innerHeight;function a(){r.clearRect(0,0,s,o),r.strokeStyle="rgba(255, 255, 255, 0.2)",r.beginPath();for(let c=0;c<i.length-1;c++)r.moveTo(i[c].x,i[c].y),r.lineTo(i[c+1].x,i[c+1].y);r.stroke(),i.forEach((c,u)=>{r.beginPath(),r.arc(c.x,c.y,5,0,Math.PI*2),r.fillStyle=n.value===u?"#00FFFF":"white",r.shadowColor="#00FFFF",r.shadowBlur=n.value===u?10:2,r.fill()})}function l(c){const u=c.clientX,f=c.clientY;n.value=null,i.forEach((h,p)=>{const _=h.x-u,E=h.y-f;Math.sqrt(_*_+E*E)<10&&(n.value=p)})}a(),window.addEventListener("mousemove",c=>{l(c),a()})}),(r,s)=>(Bt(),Bi(hu,null,{default:qs(()=>[Ke("div",Cb,[Ke("canvas",{ref_key:"canvas",ref:e,class:"absolute inset-0"},null,512),(Bt(!0),pi(Wt,null,Xd(i,(o,a)=>(Bt(),pi("div",{key:a,class:"absolute text-white text-sm px-2 py-1 bg-gray-800/80 rounded shadow",style:ca({left:o.x+"px",top:o.y+"px",transform:"translate(-50%, -50%)",opacity:n.value===a?1:0,transition:"opacity 0.3s",pointerEvents:"none"})},rn(o.title)+" ("+rn(o.year)+") ",5))),128))])]),_:1}))}}),Lb=jn(Pb,[["__scopeId","data-v-a74679b1"]]);function Db(){const t=Xn("portfolio");return{activeSection:t,setActiveSection:n=>{t.value=n}}}const Ib=Jt({__name:"App",setup(t){const{activeSection:e,setActiveSection:n}=Db(),i=s=>{n(s)},r=Ct(()=>{switch(e.value){case"portfolio":return Sc;case"experience":return Lb;case"projects":return wb;default:return Sc}});return(s,o)=>(Bt(),Bi(rb,{activeSection:pn(e),onSetActiveSection:i},{content:qs(()=>[(Bt(),Bi(Y_(r.value)))]),_:1},8,["activeSection"]))}}),Nb=jn(Ib,[["__scopeId","data-v-63699843"]]);/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */function Kp(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Mc=Kp(function(t){const e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols;t.exports=(s,...o)=>{if(!r(s))throw new TypeError("expected the first argument to be an object");if(o.length===0||typeof Symbol!="function"||typeof i!="function")return s;for(let a of o){let l=i(a);for(let c of l)n.call(a,c)&&(s[c]=a[c])}return s};function r(s){return typeof s=="function"||e.call(s)==="[object Object]"||Array.isArray(s)}}),lh=Object.freeze({__proto__:null,default:Mc,__moduleExports:Mc}),Ub=lh&&Mc||lh,ch=Kp(function(t){const e=Object.prototype.toString,n=o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype",i=t.exports=(o,...a)=>{let l=0;for(s(o)&&(o=a[l++]),o||(o={});l<a.length;l++)if(r(a[l])){for(const c of Object.keys(a[l]))n(c)&&(r(o[c])&&r(a[l][c])?i(o[c],a[l][c]):o[c]=a[l][c]);Ub(o,a[l])}return o};function r(o){return typeof o=="function"||e.call(o)==="[object Object]"}function s(o){return typeof o=="object"?o===null:typeof o!="function"}});const zi=typeof window<"u"&&window!==null,uh=Ob();function Ob(){return zi&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0):!1}const ir={event:"event",observer:"observer"};function Ss(t,e){if(!t.length)return;const n=t.indexOf(e);if(n>-1)return t.splice(n,1)}function fh(t,e){if(t.tagName!=="IMG"||!t.getAttribute("data-srcset"))return"";let n=t.getAttribute("data-srcset").trim().split(",");const i=[],s=t.parentNode.offsetWidth*e;let o,a,l;n.forEach(f=>{f=f.trim(),o=f.lastIndexOf(" "),o===-1?(a=f,l=99999):(a=f.substr(0,o),l=parseInt(f.substr(o+1,f.length-o-2),10)),i.push([l,a])}),i.sort((f,h)=>{if(f[0]<h[0])return 1;if(f[0]>h[0])return-1;if(f[0]===h[0]){if(h[1].indexOf(".webp",h[1].length-5)!==-1)return 1;if(f[1].indexOf(".webp",f[1].length-5)!==-1)return-1}return 0});let c="",u;for(let f=0;f<i.length;f++){u=i[f],c=u[1];const h=i[f+1];if(h&&h[0]<s){c=u[1];break}else if(!h){c=u[1];break}}return c}const Fb=(t=1)=>zi&&window.devicePixelRatio||t;function Bb(){if(!zi)return!1;let t=!0;function e(n,i){const r={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},s=new Image;s.onload=function(){const o=s.width>0&&s.height>0;i(o)},s.onerror=function(){i(!1)},s.src="data:image/webp;base64,"+r[n]}return e("lossy",n=>{t=n}),e("lossless",n=>{t=n}),e("alpha",n=>{t=n}),e("animation",n=>{t=n}),t}function kb(t,e){let n=null,i=0;return function(){if(n)return;const r=Date.now()-i,s=this,o=arguments,a=function(){i=Date.now(),n=!1,t.apply(s,o)};r>=e?a():n=setTimeout(a,e)}}function Hb(){if(!zi)return!1;let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",du,e)}catch{}return t}const zb=Hb(),Vb={on(t,e,n,i=!1){zb?t.addEventListener(e,n,{capture:i,passive:!0}):t.addEventListener(e,n,i)},off(t,e,n,i=!1){t.removeEventListener(e,n,i)}},yc=(t,e,n)=>{let i=new Image;if(!t||!t.src){const r=new Error("image src is required");return n(r)}t.cors&&(i.crossOrigin=t.cors),i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src}),i=null},i.onerror=function(r){n(r)}},pl=(t,e)=>typeof getComputedStyle<"u"?getComputedStyle(t,null).getPropertyValue(e):t.style[e],Gb=t=>pl(t,"overflow")+pl(t,"overflowY")+pl(t,"overflowX"),Wb=t=>{if(!zi)return;if(!(t instanceof Element))return window;let e=t;for(;e&&!(e===document.body||e===document.documentElement||!e.parentNode);){if(/(scroll|auto)/.test(Gb(e)))return e;e=e.parentNode}return window};function Xb(t){return t!==null&&typeof t=="object"}function du(){}class Yb{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class jb{constructor(e,n,i,r,s,o,a,l,c,u){this.el=e,this.src=n,this.error=i,this.loading=r,this.bindType=s,this.attempt=0,this.cors=l,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.rect={},this.$parent=o,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const n=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),n!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,yc({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,e()},()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)})}load(e=du){if(this.attempt>this.options.attempt-1&&this.state.error){this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),e();return}if(!(this.state.rendered&&this.state.loaded)){if(this._imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e();this.renderLoading(()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),yc({src:this.src,cors:this.cors},n=>{this.naturalHeight=n.naturalHeight,this.naturalWidth=n.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()},n=>{!this.options.silent&&console.error(n),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(e,n){this.elRenderer(this,e,n)}performance(){let e="loading",n=0;return this.state.loaded&&(e="loaded",n=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:n}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const hh="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",qb=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],$b={rootMargin:"0px",threshold:0};class Kb{constructor({preLoad:e,error:n,throttleWait:i,preLoadTop:r,dispatchEvent:s,loading:o,attempt:a,silent:l=!0,scale:c,listenEvents:u,filter:f,adapter:h,observer:p,observerOptions:_}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=ir.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:l,dispatchEvent:!!s,throttleWait:i||200,preLoad:e||1.3,preLoadTop:r||0,error:n||hh,loading:o||hh,attempt:a||3,scale:c||Fb(c),listenEvents:u||qb,supportWebp:Bb(),filter:f||{},adapter:h||{},observer:!!p,observerOptions:_||$b},this._initEvent(),this._imageCache=new Yb(200),this.lazyLoadHandler=kb(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?ir.observer:ir.event)}performance(){const e=[];return this.ListenerQueue.map(n=>e.push(n.performance())),e}addLazyBox(e){this.ListenerQueue.push(e),zi&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,n,i){if(this.ListenerQueue.some(l=>l.el===e))return this.update(e,n),Br(this.lazyLoadHandler);let{src:r,loading:s,error:o,cors:a}=this._valueFormatter(n.value);Br(()=>{r=fh(e,this.options.scale)||r,this._observer&&this._observer.observe(e);const l=Object.keys(n.modifiers)[0];let c;l&&(c=n.instance.$refs[l],c=c?c.el||c:document.getElementById(l)),c||(c=Wb(e));const u=new jb(e,r,o,s,n.arg,c,this.options,a,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),zi&&(this._addListenerTarget(window),this._addListenerTarget(c)),Br(this.lazyLoadHandler)})}update(e,n,i){let{src:r,loading:s,error:o}=this._valueFormatter(n.value);r=fh(e,this.options.scale)||r;const a=this.ListenerQueue.find(l=>l.el===e);a?a.update({src:r,loading:s,error:o}):(e.getAttribute("lazy")!=="loaded"||e.dataset.src!==r)&&this.add(e,n,i),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),Br(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const n=this.ListenerQueue.find(i=>i.el===e);n&&(this._removeListenerTarget(n.$parent),this._removeListenerTarget(window),Ss(this.ListenerQueue,n),n.$destroy&&n.$destroy())}removeComponent(e){e&&(Ss(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){!uh&&e===ir.observer&&(e=ir.event),this.mode=e,e===ir.event?(this._observer&&(this.ListenerQueue.forEach(n=>{this._observer.unobserve(n.el)}),this._observer=null),this.TargetQueue.forEach(n=>{this._initListen(n.el,!0)})):(this.TargetQueue.forEach(n=>{this._initListen(n.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let n=this.TargetQueue.find(i=>i.el===e);return n?n.childrenCount++:(n={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===ir.event&&this._initListen(n.el,!0),this.TargetQueue.push(n)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach((n,i)=>{n.el===e&&(n.childrenCount--,n.childrenCount||(this._initListen(n.el,!1),this.TargetQueue.splice(i,1),n=null))})}_initListen(e,n){this.options.listenEvents.forEach(i=>Vb[n?"on":"off"](e,i,this.lazyLoadHandler))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,n)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(n)},this.$once=(e,n)=>{const i=this;function r(){i.$off(e,r),n.apply(i,arguments)}this.$on(e,r)},this.$off=(e,n)=>{if(!n){if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0;return}Ss(this.Event.listeners[e],n)},this.$emit=(e,n,i)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach(r=>r(n,i))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach((n,i)=>{(!n.el||!n.el.parentNode||n.state.loaded)&&e.push(n),n.checkInView()&&(n.state.loaded||n.load())}),e.forEach(n=>{Ss(this.ListenerQueue,n),n.$destroy&&n.$destroy()})}_initIntersectionObserver(){uh&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(e=>{this._observer.observe(e.el)}))}_observerHandler(e){e.forEach(n=>{n.isIntersecting&&this.ListenerQueue.forEach(i=>{if(i.el===n.target){if(i.state.loaded)return this._observer.unobserve(i.el);i.load()}})})}_elRenderer(e,n,i){if(!e.el)return;const{el:r,bindType:s}=e;let o;switch(n){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src;break}if(s?r.style[s]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",n),this.$emit(n,e,i),this.options.adapter[n]&&this.options.adapter[n](e,this.options),this.options.dispatchEvent){const a=new CustomEvent(n,{detail:e});r.dispatchEvent(a)}}_valueFormatter(e){return Xb(e)?(!e.src&&!this.options.silent&&console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const Zp=(t,e)=>{let n=di({});const i=()=>{n=t.value.getBoundingClientRect()};return{rect:n,checkInView:()=>(i(),zi&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0)}};var Zb=t=>Jt({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:n,slots:i}){const r=Xn(),s=di({loaded:!1,error:!1,attempt:0}),o=Xn(!1),{rect:a,checkInView:l}=Zp(r,t.options.preLoad),c=()=>{o.value=!0,s.loaded=!0,n("show",o.value)},u=Ct(()=>({el:r.value,rect:a,checkInView:l,load:c,state:s}));return as(()=>{t.addLazyBox(u.value),t.lazyLoadHandler()}),$s(()=>{t.removeComponent(u.value)}),()=>{var f;return Pt(e.tag,{ref:r},[o.value&&((f=i.default)===null||f===void 0?void 0:f.call(i))])}}});class Qb{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,n,i){const r=new eA(e,n,i,this.lazy);this._queue.push(r)}update(e,n,i){const r=this._queue.find(s=>s.el===e);r&&r.update(e,n)}unbind(e,n,i){const r=this._queue.find(s=>s.el===e);r&&(r.clear(),Ss(this._queue,r))}}const Jb={selector:"img",error:"",loading:""};class eA{constructor(e,n,i,r){this.el=e,this.vnode=i,this.binding=n,this.options={},this.lazy=r,this._queue=[],this.update(e,n)}update(e,n){this.el=e,this.options=ch({},Jb,n.value),this.getImgs().forEach(r=>{this.lazy.add(r,ch({},this.binding,{value:{src:r.getAttribute("data-src")||r.dataset.src,error:r.getAttribute("data-error")||r.dataset.error||this.options.error,loading:r.getAttribute("data-loading")||r.dataset.loading||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach(n=>this.lazy.remove(n)),this.vnode=null,this.binding=null,this.lazy=null}}var tA=t=>Jt({setup(e,{slots:n}){const i=Xn(),r=di({src:"",error:"",loading:"",attempt:t.options.attempt}),s=di({loaded:!1,error:!1,attempt:0}),{rect:o,checkInView:a}=Zp(i,t.options.preLoad),l=Xn(""),c=(h=du)=>{if(s.attempt>r.attempt-1&&s.error)return t.options.silent||console.log(`VueLazyload log: ${r.src} tried too more than ${r.attempt} times`),h();const p=r.src;yc({src:p},({src:_})=>{l.value=_,s.loaded=!0},()=>{s.attempt++,l.value=r.error,s.error=!0})},u=Ct(()=>({el:i.value,rect:o,checkInView:a,load:c,state:s}));as(()=>{t.addLazyBox(u.value),t.lazyLoadHandler()}),$s(()=>{t.removeComponent(u.value)});const f=()=>{const{src:h,loading:p,error:_}=t._valueFormatter(e.src);s.loaded=!1,r.src=h,r.error=_,r.loading=p,l.value=r.loading};return Ui(()=>e.src,()=>{f(),t.addLazyBox(u.value),t.lazyLoadHandler()},{immediate:!0}),()=>{var h;return Pt(e.tag||"img",{src:l.value,ref:i},[(h=n.default)===null||h===void 0?void 0:h.call(n)])}}}),nA={install(t,e={}){const n=new Kb(e),i=new Qb(n);if(Number(t.version.split(".")[0])<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),e.lazyComponent&&t.component("lazy-component",Zb(n)),e.lazyImage&&t.component("lazy-image",tA(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:i.bind.bind(i),updated:i.update.bind(i),unmounted:i.unbind.bind(i)})}};/*!
  * shared v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const ia=typeof window<"u",Wi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),iA=(t,e,n)=>rA({l:t,k:e,s:n}),rA=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Tt=t=>typeof t=="number"&&isFinite(t),sA=t=>pu(t)==="[object Date]",is=t=>pu(t)==="[object RegExp]",xa=t=>$e(t)&&Object.keys(t).length===0,Lt=Object.assign,oA=Object.create,ht=(t=null)=>oA(t);let dh;const ur=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ht());function ph(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const aA=Object.prototype.hasOwnProperty;function Ln(t,e){return aA.call(t,e)}const Rt=Array.isArray,_t=t=>typeof t=="function",Re=t=>typeof t=="string",et=t=>typeof t=="boolean",tt=t=>t!==null&&typeof t=="object",lA=t=>tt(t)&&_t(t.then)&&_t(t.catch),Qp=Object.prototype.toString,pu=t=>Qp.call(t),$e=t=>pu(t)==="[object Object]",cA=t=>t==null?"":Rt(t)||$e(t)&&t.toString===Qp?JSON.stringify(t,null,2):String(t);function mu(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function uA(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const No=t=>!tt(t)||Rt(t);function qo(t,e){if(No(t)||No(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(tt(i[s])&&!tt(r[s])&&(r[s]=Array.isArray(i[s])?[]:ht()),No(r[s])||No(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function fA(t,e,n){return{line:t,column:e,offset:n}}function bc(t,e,n){return{start:t,end:e}}const lt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},hA=17;function Ea(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function dA(t){throw t}const ti=" ",pA="\r",Kt=`
`,mA="\u2028",_A="\u2029";function gA(t){const e=t;let n=0,i=1,r=1,s=0;const o=R=>e[R]===pA&&e[R+1]===Kt,a=R=>e[R]===Kt,l=R=>e[R]===_A,c=R=>e[R]===mA,u=R=>o(R)||a(R)||l(R)||c(R),f=()=>n,h=()=>i,p=()=>r,_=()=>s,E=R=>o(R)||l(R)||c(R)?Kt:e[R],m=()=>E(n),d=()=>E(n+s);function M(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function y(){return o(n+s)&&s++,s++,e[n+s]}function g(){n=0,i=1,r=1,s=0}function N(R=0){s=R}function I(){const R=n+s;for(;R!==n;)M();s=0}return{index:f,line:h,column:p,peekOffset:_,charAt:E,currentChar:m,currentPeek:d,next:M,peek:y,reset:g,resetPeek:N,skipToPeek:I}}const Ti=void 0,vA=".",mh="'",xA="tokenizer";function EA(t,e={}){const n=e.location!==!1,i=gA(t),r=()=>i.index(),s=()=>fA(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,C,O,...x){const v=c();if(C.column+=O,C.offset+=O,u){const U=n?bc(v.startLoc,C):null,P=Ea(b,U,{domain:xA,args:x});u(P)}}function h(b,C,O){b.endLoc=s(),b.currentType=C;const x={type:C};return n&&(x.loc=bc(b.startLoc,b.endLoc)),O!=null&&(x.value=O),x}const p=b=>h(b,13);function _(b,C){return b.currentChar()===C?(b.next(),C):(f(lt.EXPECTED_TOKEN,s(),0,C),"")}function E(b){let C="";for(;b.currentPeek()===ti||b.currentPeek()===Kt;)C+=b.currentPeek(),b.peek();return C}function m(b){const C=E(b);return b.skipToPeek(),C}function d(b){if(b===Ti)return!1;const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function M(b){if(b===Ti)return!1;const C=b.charCodeAt(0);return C>=48&&C<=57}function y(b,C){const{currentType:O}=C;if(O!==2)return!1;E(b);const x=d(b.currentPeek());return b.resetPeek(),x}function g(b,C){const{currentType:O}=C;if(O!==2)return!1;E(b);const x=b.currentPeek()==="-"?b.peek():b.currentPeek(),v=M(x);return b.resetPeek(),v}function N(b,C){const{currentType:O}=C;if(O!==2)return!1;E(b);const x=b.currentPeek()===mh;return b.resetPeek(),x}function I(b,C){const{currentType:O}=C;if(O!==7)return!1;E(b);const x=b.currentPeek()===".";return b.resetPeek(),x}function R(b,C){const{currentType:O}=C;if(O!==8)return!1;E(b);const x=d(b.currentPeek());return b.resetPeek(),x}function k(b,C){const{currentType:O}=C;if(!(O===7||O===11))return!1;E(b);const x=b.currentPeek()===":";return b.resetPeek(),x}function w(b,C){const{currentType:O}=C;if(O!==9)return!1;const x=()=>{const U=b.currentPeek();return U==="{"?d(b.peek()):U==="@"||U==="|"||U===":"||U==="."||U===ti||!U?!1:U===Kt?(b.peek(),x()):B(b,!1)},v=x();return b.resetPeek(),v}function T(b){E(b);const C=b.currentPeek()==="|";return b.resetPeek(),C}function B(b,C=!0){const O=(v=!1,U="")=>{const P=b.currentPeek();return P==="{"||P==="@"||!P?v:P==="|"?!(U===ti||U===Kt):P===ti?(b.peek(),O(!0,ti)):P===Kt?(b.peek(),O(!0,Kt)):!0},x=O();return C&&b.resetPeek(),x}function Q(b,C){const O=b.currentChar();return O===Ti?Ti:C(O)?(b.next(),O):null}function q(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function se(b){return Q(b,q)}function oe(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function ee(b){return Q(b,oe)}function te(b){const C=b.charCodeAt(0);return C>=48&&C<=57}function X(b){return Q(b,te)}function de(b){const C=b.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function ge(b){return Q(b,de)}function Ae(b){let C="",O="";for(;C=X(b);)O+=C;return O}function Pe(b){let C="";for(;;){const O=b.currentChar();if(O==="{"||O==="}"||O==="@"||O==="|"||!O)break;if(O===ti||O===Kt)if(B(b))C+=O,b.next();else{if(T(b))break;C+=O,b.next()}else C+=O,b.next()}return C}function Ye(b){m(b);let C="",O="";for(;C=ee(b);)O+=C;return b.currentChar()===Ti&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),O}function ie(b){m(b);let C="";return b.currentChar()==="-"?(b.next(),C+=`-${Ae(b)}`):C+=Ae(b),b.currentChar()===Ti&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),C}function me(b){return b!==mh&&b!==Kt}function xe(b){m(b),_(b,"'");let C="",O="";for(;C=Q(b,me);)C==="\\"?O+=H(b):O+=C;const x=b.currentChar();return x===Kt||x===Ti?(f(lt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),x===Kt&&(b.next(),_(b,"'")),O):(_(b,"'"),O)}function H(b){const C=b.currentChar();switch(C){case"\\":case"'":return b.next(),`\\${C}`;case"u":return re(b,C,4);case"U":return re(b,C,6);default:return f(lt.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function re(b,C,O){_(b,C);let x="";for(let v=0;v<O;v++){const U=ge(b);if(!U){f(lt.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${x}${b.currentChar()}`);break}x+=U}return`\\${C}${x}`}function le(b){return b!=="{"&&b!=="}"&&b!==ti&&b!==Kt}function ce(b){m(b);let C="",O="";for(;C=Q(b,le);)O+=C;return O}function De(b){let C="",O="";for(;C=se(b);)O+=C;return O}function L(b){const C=O=>{const x=b.currentChar();return x==="{"||x==="@"||x==="|"||x==="("||x===")"||!x||x===ti?O:(O+=x,b.next(),C(O))};return C("")}function D(b){m(b);const C=_(b,"|");return m(b),C}function S(b,C){let O=null;switch(b.currentChar()){case"{":return C.braceNest>=1&&f(lt.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),b.next(),O=h(C,2,"{"),m(b),C.braceNest++,O;case"}":return C.braceNest>0&&C.currentType===2&&f(lt.EMPTY_PLACEHOLDER,s(),0),b.next(),O=h(C,3,"}"),C.braceNest--,C.braceNest>0&&m(b),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),O;case"@":return C.braceNest>0&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),O=J(b,C)||p(C),C.braceNest=0,O;default:{let v=!0,U=!0,P=!0;if(T(b))return C.braceNest>0&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),O=h(C,1,D(b)),C.braceNest=0,C.inLinked=!1,O;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,$(b,C);if(v=y(b,C))return O=h(C,4,Ye(b)),m(b),O;if(U=g(b,C))return O=h(C,5,ie(b)),m(b),O;if(P=N(b,C))return O=h(C,6,xe(b)),m(b),O;if(!v&&!U&&!P)return O=h(C,12,ce(b)),f(lt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O.value),m(b),O;break}}return O}function J(b,C){const{currentType:O}=C;let x=null;const v=b.currentChar();switch((O===7||O===8||O===11||O===9)&&(v===Kt||v===ti)&&f(lt.INVALID_LINKED_FORMAT,s(),0),v){case"@":return b.next(),x=h(C,7,"@"),C.inLinked=!0,x;case".":return m(b),b.next(),h(C,8,".");case":":return m(b),b.next(),h(C,9,":");default:return T(b)?(x=h(C,1,D(b)),C.braceNest=0,C.inLinked=!1,x):I(b,C)||k(b,C)?(m(b),J(b,C)):R(b,C)?(m(b),h(C,11,De(b))):w(b,C)?(m(b),v==="{"?S(b,C)||x:h(C,10,L(b))):(O===7&&f(lt.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,$(b,C))}}function $(b,C){let O={type:13};if(C.braceNest>0)return S(b,C)||p(C);if(C.inLinked)return J(b,C)||p(C);switch(b.currentChar()){case"{":return S(b,C)||p(C);case"}":return f(lt.UNBALANCED_CLOSING_BRACE,s(),0),b.next(),h(C,3,"}");case"@":return J(b,C)||p(C);default:{if(T(b))return O=h(C,1,D(b)),C.braceNest=0,C.inLinked=!1,O;if(B(b))return h(C,0,Pe(b));break}}return O}function j(){const{currentType:b,offset:C,startLoc:O,endLoc:x}=l;return l.lastType=b,l.lastOffset=C,l.lastStartLoc=O,l.lastEndLoc=x,l.offset=r(),l.startLoc=s(),i.currentChar()===Ti?h(l,13):$(i,l)}return{nextToken:j,currentOffset:r,currentPosition:s,context:c}}const SA="parser",MA=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function yA(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function bA(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,M,y,g,...N){const I=d.currentPosition();if(I.offset+=g,I.column+=g,n){const R=e?bc(y,I):null,k=Ea(M,R,{domain:SA,args:N});n(k)}}function r(d,M,y){const g={type:d};return e&&(g.start=M,g.end=M,g.loc={start:y,end:y}),g}function s(d,M,y,g){e&&(d.end=M,d.loc&&(d.loc.end=y))}function o(d,M){const y=d.context(),g=r(3,y.offset,y.startLoc);return g.value=M,s(g,d.currentOffset(),d.currentPosition()),g}function a(d,M){const y=d.context(),{lastOffset:g,lastStartLoc:N}=y,I=r(5,g,N);return I.index=parseInt(M,10),d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function l(d,M){const y=d.context(),{lastOffset:g,lastStartLoc:N}=y,I=r(4,g,N);return I.key=M,d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function c(d,M){const y=d.context(),{lastOffset:g,lastStartLoc:N}=y,I=r(9,g,N);return I.value=M.replace(MA,yA),d.nextToken(),s(I,d.currentOffset(),d.currentPosition()),I}function u(d){const M=d.nextToken(),y=d.context(),{lastOffset:g,lastStartLoc:N}=y,I=r(8,g,N);return M.type!==11?(i(d,lt.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),I.value="",s(I,g,N),{nextConsumeToken:M,node:I}):(M.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(M)),I.value=M.value||"",s(I,d.currentOffset(),d.currentPosition()),{node:I})}function f(d,M){const y=d.context(),g=r(7,y.offset,y.startLoc);return g.value=M,s(g,d.currentOffset(),d.currentPosition()),g}function h(d){const M=d.context(),y=r(6,M.offset,M.startLoc);let g=d.nextToken();if(g.type===8){const N=u(d);y.modifier=N.node,g=N.nextConsumeToken||d.nextToken()}switch(g.type!==9&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(g)),g=d.nextToken(),g.type===2&&(g=d.nextToken()),g.type){case 10:g.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(g)),y.key=f(d,g.value||"");break;case 4:g.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(g)),y.key=l(d,g.value||"");break;case 5:g.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(g)),y.key=a(d,g.value||"");break;case 6:g.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(g)),y.key=c(d,g.value||"");break;default:{i(d,lt.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const N=d.context(),I=r(7,N.offset,N.startLoc);return I.value="",s(I,N.offset,N.startLoc),y.key=I,s(y,N.offset,N.startLoc),{nextConsumeToken:g,node:y}}}return s(y,d.currentOffset(),d.currentPosition()),{node:y}}function p(d){const M=d.context(),y=M.currentType===1?d.currentOffset():M.offset,g=M.currentType===1?M.endLoc:M.startLoc,N=r(2,y,g);N.items=[];let I=null;do{const w=I||d.nextToken();switch(I=null,w.type){case 0:w.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(w)),N.items.push(o(d,w.value||""));break;case 5:w.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(w)),N.items.push(a(d,w.value||""));break;case 4:w.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(w)),N.items.push(l(d,w.value||""));break;case 6:w.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Fn(w)),N.items.push(c(d,w.value||""));break;case 7:{const T=h(d);N.items.push(T.node),I=T.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const R=M.currentType===1?M.lastOffset:d.currentOffset(),k=M.currentType===1?M.lastEndLoc:d.currentPosition();return s(N,R,k),N}function _(d,M,y,g){const N=d.context();let I=g.items.length===0;const R=r(1,M,y);R.cases=[],R.cases.push(g);do{const k=p(d);I||(I=k.items.length===0),R.cases.push(k)}while(N.currentType!==13);return I&&i(d,lt.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(R,d.currentOffset(),d.currentPosition()),R}function E(d){const M=d.context(),{offset:y,startLoc:g}=M,N=p(d);return M.currentType===13?N:_(d,y,g,N)}function m(d){const M=EA(d,Lt({},t)),y=M.context(),g=r(0,y.offset,y.startLoc);return e&&g.loc&&(g.loc.source=d),g.body=E(M),t.onCacheKey&&(g.cacheKey=t.onCacheKey(d)),y.currentType!==13&&i(M,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,d[y.offset]||""),s(g,M.currentOffset(),M.currentPosition()),g}return{parse:m}}function Fn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function AA(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function _h(t,e){for(let n=0;n<t.length;n++)_u(t[n],e)}function _u(t,e){switch(t.type){case 1:_h(t.cases,e),e.helper("plural");break;case 2:_h(t.items,e);break;case 6:{_u(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function TA(t,e={}){const n=AA(t);n.helper("normalize"),t.body&&_u(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function RA(t){const e=t.body;return e.type===2?gh(e):e.cases.forEach(n=>gh(n)),t}function gh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=mu(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Or(t){switch(t.t=t.type,t.type){case 0:{const e=t;Or(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Or(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Or(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Or(e.key),e.k=e.key,delete e.key,e.modifier&&(Or(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function wA(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(E,m){o.code+=E}function c(E,m=!0){const d=m?i:"";l(r?d+"  ".repeat(E):d)}function u(E=!0){const m=++o.indentLevel;E&&c(m)}function f(E=!0){const m=--o.indentLevel;E&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:E=>`_${E}`,needIndent:()=>o.needIndent}}function CA(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),rs(t,e.key),e.modifier?(t.push(", "),rs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function PA(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(rs(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function LA(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(rs(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function DA(t,e){e.body?rs(t,e.body):t.push("null")}function rs(t,e){const{helper:n}=t;switch(e.type){case 0:DA(t,e);break;case 1:LA(t,e);break;case 2:PA(t,e);break;case 6:CA(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const IA=(t,e={})=>{const n=Re(e.mode)?e.mode:"normal",i=Re(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=wA(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${mu(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),rs(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function NA(t,e={}){const n=Lt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=bA(n).parse(t);return i?(s&&RA(a),r&&Or(a),{ast:a,code:""}):(TA(a,n),IA(a,n))}/*!
  * core-base v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function UA(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ur().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ur().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Wn(t){return tt(t)&&gu(t)===0&&(Ln(t,"b")||Ln(t,"body"))}const Jp=["b","body"];function OA(t){return Xi(t,Jp)}const em=["c","cases"];function FA(t){return Xi(t,em,[])}const tm=["s","static"];function BA(t){return Xi(t,tm)}const nm=["i","items"];function kA(t){return Xi(t,nm,[])}const im=["t","type"];function gu(t){return Xi(t,im)}const rm=["v","value"];function Uo(t,e){const n=Xi(t,rm);if(n!=null)return n;throw zs(e)}const sm=["m","modifier"];function HA(t){return Xi(t,sm)}const om=["k","key"];function zA(t){const e=Xi(t,om);if(e)return e;throw zs(6)}function Xi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Ln(t,r)&&t[r]!=null)return t[r]}return n}const am=[...Jp,...em,...tm,...nm,...om,...sm,...rm,...im];function zs(t){return new Error(`unhandled node type: ${t}`)}function ml(t){return n=>VA(n,t)}function VA(t,e){const n=OA(e);if(n==null)throw zs(0);if(gu(n)===1){const s=FA(n);return t.plural(s.reduce((o,a)=>[...o,vh(t,a)],[]))}else return vh(t,n)}function vh(t,e){const n=BA(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=kA(e).reduce((r,s)=>[...r,Ac(t,s)],[]);return t.normalize(i)}}function Ac(t,e){const n=gu(e);switch(n){case 3:return Uo(e,n);case 9:return Uo(e,n);case 4:{const i=e;if(Ln(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Ln(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw zs(n)}case 5:{const i=e;if(Ln(i,"i")&&Tt(i.i))return t.interpolate(t.list(i.i));if(Ln(i,"index")&&Tt(i.index))return t.interpolate(t.list(i.index));throw zs(n)}case 6:{const i=e,r=HA(i),s=zA(i);return t.linked(Ac(t,s),r?Ac(t,r):void 0,t.type)}case 7:return Uo(e,n);case 8:return Uo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const GA=t=>t;let Oo=ht();function WA(t,e={}){let n=!1;const i=e.onError||dA;return e.onError=r=>{n=!0,i(r)},{...NA(t,e),detectError:n}}function XA(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Re(t)){et(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||GA)(t),r=Oo[i];if(r)return r;const{ast:s,detectError:o}=WA(t,{...e,location:!1,jit:!0}),a=ml(s);return o?a:Oo[i]=a}else{const n=t.cacheKey;if(n){const i=Oo[n];return i||(Oo[n]=ml(t))}else return ml(t)}}let Vs=null;function YA(t){Vs=t}function jA(t,e,n){Vs&&Vs.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const qA=$A("function:translate");function $A(t){return e=>Vs&&Vs.emit(t,e)}const ui={INVALID_ARGUMENT:hA,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},KA=24;function fi(t){return Ea(t,null,void 0)}function vu(t,e){return e.locale!=null?xh(e.locale):xh(t.locale)}let _l;function xh(t){if(Re(t))return t;if(_t(t)){if(t.resolvedOnce&&_l!=null)return _l;if(t.constructor.name==="Function"){const e=t();if(lA(e))throw fi(ui.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return _l=e}else throw fi(ui.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw fi(ui.NOT_SUPPORT_LOCALE_TYPE)}function ZA(t,e,n){return[...new Set([n,...Rt(e)?e:tt(e)?Object.keys(e):Re(e)?[e]:[n]])]}function lm(t,e,n){const i=Re(n)?n:Gs,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Rt(o);)o=Eh(s,o,e);const a=Rt(e)||!$e(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,Rt(o)&&Eh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Eh(t,e,n){let i=!0;for(let r=0;r<e.length&&et(i);r++){const s=e[r];Re(s)&&(i=QA(t,e[r],n))}return i}function QA(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=JA(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function JA(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Rt(n)||$e(n))&&n[r]&&(i=n[r])}return i}const Yi=[];Yi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Yi[1]={w:[1],".":[2],"[":[4],o:[7]};Yi[2]={w:[2],i:[3,0],0:[3,0]};Yi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Yi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Yi[5]={"'":[4,0],o:8,l:[5,0]};Yi[6]={'"':[4,0],o:8,l:[6,0]};const eT=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function tT(t){return eT.test(t)}function nT(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function iT(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function rT(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:tT(e)?nT(e):"*"+e}function sT(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=rT(o),o===!1))return!1;h[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=iT(s),f=Yi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Sh=new Map;function oT(t,e){return tt(t)?t[e]:null}function aT(t,e){if(!tt(t))return null;let n=Sh.get(e);if(n||(n=sT(e),n&&Sh.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(am.includes(o)&&Wn(r))return null;const a=r[o];if(a===void 0||_t(r))return null;r=a,s++}return r}const lT="11.1.3",Sa=-1,Gs="en-US",Mh="",yh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function cT(){return{upper:(t,e)=>e==="text"&&Re(t)?t.toUpperCase():e==="vnode"&&tt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Re(t)?t.toLowerCase():e==="vnode"&&tt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Re(t)?yh(t):e==="vnode"&&tt(t)&&"__v_isVNode"in t?yh(t.children):t}}let cm;function uT(t){cm=t}let um;function fT(t){um=t}let fm;function hT(t){fm=t}let hm=null;const dT=t=>{hm=t},pT=()=>hm;let dm=null;const bh=t=>{dm=t},mT=()=>dm;let Ah=0;function _T(t={}){const e=_t(t.onWarn)?t.onWarn:uA,n=Re(t.version)?t.version:lT,i=Re(t.locale)||_t(t.locale)?t.locale:Gs,r=_t(i)?Gs:i,s=Rt(t.fallbackLocale)||$e(t.fallbackLocale)||Re(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=$e(t.messages)?t.messages:gl(r),a=$e(t.datetimeFormats)?t.datetimeFormats:gl(r),l=$e(t.numberFormats)?t.numberFormats:gl(r),c=Lt(ht(),t.modifiers,cT()),u=t.pluralRules||ht(),f=_t(t.missing)?t.missing:null,h=et(t.missingWarn)||is(t.missingWarn)?t.missingWarn:!0,p=et(t.fallbackWarn)||is(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,E=!!t.unresolving,m=_t(t.postTranslation)?t.postTranslation:null,d=$e(t.processor)?t.processor:null,M=et(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,g=_t(t.messageCompiler)?t.messageCompiler:cm,N=_t(t.messageResolver)?t.messageResolver:um||oT,I=_t(t.localeFallbacker)?t.localeFallbacker:fm||ZA,R=tt(t.fallbackContext)?t.fallbackContext:void 0,k=t,w=tt(k.__datetimeFormatters)?k.__datetimeFormatters:new Map,T=tt(k.__numberFormatters)?k.__numberFormatters:new Map,B=tt(k.__meta)?k.__meta:{};Ah++;const Q={version:n,cid:Ah,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:E,postTranslation:m,processor:d,warnHtmlMessage:M,escapeParameter:y,messageCompiler:g,messageResolver:N,localeFallbacker:I,fallbackContext:R,onWarn:e,__meta:B};return Q.datetimeFormats=a,Q.numberFormats=l,Q.__datetimeFormatters=w,Q.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&jA(Q,n,B),Q}const gl=t=>({[t]:ht()});function xu(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Re(a)?a:e}else return e}function gs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function gT(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function vT(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(gT(t,e[i]))return!0;return!1}function Th(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Tc(...e),h=et(u.missingWarn)?u.missingWarn:t.missingWarn;et(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=vu(t,u),E=o(t,r,_);if(!Re(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},d,M=null;const y="datetime format";for(let I=0;I<E.length&&(d=E[I],m=n[d]||{},M=m[l],!$e(M));I++)xu(t,l,d,h,y);if(!$e(M)||!Re(d))return i?Sa:l;let g=`${d}__${l}`;xa(f)||(g=`${g}__${JSON.stringify(f)}`);let N=a.get(g);return N||(N=new Intl.DateTimeFormat(d,Lt({},M,f)),a.set(g,N)),p?N.formatToParts(c):N.format(c)}const pm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Tc(...t){const[e,n,i,r]=t,s=ht();let o=ht(),a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw fi(ui.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw fi(ui.INVALID_ISO_DATE_ARGUMENT)}}else if(sA(e)){if(isNaN(e.getTime()))throw fi(ui.INVALID_DATE_ARGUMENT);a=e}else if(Tt(e))a=e;else throw fi(ui.INVALID_ARGUMENT);return Re(n)?s.key=n:$e(n)&&Object.keys(n).forEach(l=>{pm.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:$e(i)&&(o=i),$e(r)&&(o=r),[s.key||"",a,s,o]}function Rh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function wh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Rc(...e),h=et(u.missingWarn)?u.missingWarn:t.missingWarn;et(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=vu(t,u),E=o(t,r,_);if(!Re(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},d,M=null;const y="number format";for(let I=0;I<E.length&&(d=E[I],m=n[d]||{},M=m[l],!$e(M));I++)xu(t,l,d,h,y);if(!$e(M)||!Re(d))return i?Sa:l;let g=`${d}__${l}`;xa(f)||(g=`${g}__${JSON.stringify(f)}`);let N=a.get(g);return N||(N=new Intl.NumberFormat(d,Lt({},M,f)),a.set(g,N)),p?N.formatToParts(c):N.format(c)}const mm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Rc(...t){const[e,n,i,r]=t,s=ht();let o=ht();if(!Tt(e))throw fi(ui.INVALID_ARGUMENT);const a=e;return Re(n)?s.key=n:$e(n)&&Object.keys(n).forEach(l=>{mm.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:$e(i)&&(o=i),$e(r)&&(o=r),[s.key||"",a,s,o]}function Ch(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const xT=t=>t,ET=t=>"",ST="text",MT=t=>t.length===0?"":mu(t),yT=cA;function Ph(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function bT(t){const e=Tt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Tt(t.named.count)||Tt(t.named.n))?Tt(t.named.count)?t.named.count:Tt(t.named.n)?t.named.n:e:e}function AT(t,e){e.count||(e.count=t),e.n||(e.n=t)}function TT(t={}){const e=t.locale,n=bT(t),i=tt(t.pluralRules)&&Re(e)&&_t(t.pluralRules[e])?t.pluralRules[e]:Ph,r=tt(t.pluralRules)&&Re(e)&&_t(t.pluralRules[e])?Ph:void 0,s=d=>d[i(n,d.length,r)],o=t.list||[],a=d=>o[d],l=t.named||ht();Tt(t.pluralIndex)&&AT(n,l);const c=d=>l[d];function u(d,M){const y=_t(t.messages)?t.messages(d,!!M):tt(t.messages)?t.messages[d]:!1;return y||(t.parent?t.parent.message(d):ET)}const f=d=>t.modifiers?t.modifiers[d]:xT,h=$e(t.processor)&&_t(t.processor.normalize)?t.processor.normalize:MT,p=$e(t.processor)&&_t(t.processor.interpolate)?t.processor.interpolate:yT,_=$e(t.processor)&&Re(t.processor.type)?t.processor.type:ST,m={list:a,named:c,plural:s,linked:(d,...M)=>{const[y,g]=M;let N="text",I="";M.length===1?tt(y)?(I=y.modifier||I,N=y.type||N):Re(y)&&(I=y||I):M.length===2&&(Re(y)&&(I=y||I),Re(g)&&(N=g||N));const R=u(d,!0)(m),k=N==="vnode"&&Rt(R)&&I?R[0]:R;return I?f(I)(k,N):k},message:u,type:_,interpolate:p,normalize:h,values:Lt(ht(),o,l)};return m}const Lh=()=>"",Sn=t=>_t(t);function Dh(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=wc(...e),u=et(c.missingWarn)?c.missingWarn:t.missingWarn,f=et(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=et(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Re(c.default)||et(c.default)?et(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,E=n||_!=null&&(Re(_)||_t(_)),m=vu(t,c);h&&RT(c);let[d,M,y]=p?[l,m,a[m]||ht()]:_m(t,l,m,o,f,u),g=d,N=l;if(!p&&!(Re(g)||Wn(g)||Sn(g))&&E&&(g=_,N=g),!p&&(!(Re(g)||Wn(g)||Sn(g))||!Re(M)))return r?Sa:l;let I=!1;const R=()=>{I=!0},k=Sn(g)?g:gm(t,l,M,g,N,R);if(I)return g;const w=PT(t,M,y,c),T=TT(w),B=wT(t,k,T),Q=i?i(B,l):B;if(__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:Re(l)?l:Sn(g)?g.key:"",locale:M||(Sn(g)?g.locale:""),format:Re(g)?g:Sn(g)?g.source:"",message:Q};q.meta=Lt({},t.__meta,pT()||{}),qA(q)}return Q}function RT(t){Rt(t.list)?t.list=t.list.map(e=>Re(e)?ph(e):e):tt(t.named)&&Object.keys(t.named).forEach(e=>{Re(t.named[e])&&(t.named[e]=ph(t.named[e]))})}function _m(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=ht(),h,p=null;const _="translate";for(let E=0;E<u.length&&(h=u[E],f=o[h]||ht(),(p=l(f,e))===null&&(p=f[e]),!(Re(p)||Wn(p)||Sn(p)));E++)if(!vT(h,u)){const m=xu(t,e,h,s,_);m!==e&&(p=m)}return[p,h,f]}function gm(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Sn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,CT(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function wT(t,e,n){return e(n)}function wc(...t){const[e,n,i]=t,r=ht();if(!Re(e)&&!Tt(e)&&!Sn(e)&&!Wn(e))throw fi(ui.INVALID_ARGUMENT);const s=Tt(e)?String(e):(Sn(e),e);return Tt(n)?r.plural=n:Re(n)?r.default=n:$e(n)&&!xa(n)?r.named=n:Rt(n)&&(r.list=n),Tt(i)?r.plural=i:Re(i)?r.default=i:$e(i)&&Lt(r,i),[s,r]}function CT(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>iA(e,n,o)}}function PT(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let E=o(n,p);if(E==null&&(u||_)){const[,,m]=_m(u||t,p,e,a,l,c);E=o(m,p)}if(Re(E)||Wn(E)){let m=!1;const M=gm(t,p,e,E,p,()=>{m=!0});return m?Lh:M}else return Sn(E)?E:Lh}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Tt(i.plural)&&(h.pluralIndex=i.plural),h}UA();/*!
  * vue-i18n v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const LT="11.1.3";function DT(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ur().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ur().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ur().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ur().__INTLIFY_PROD_DEVTOOLS__=!1)}const an={UNEXPECTED_RETURN_TYPE:KA,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function mn(t,...e){return Ea(t,null,void 0)}const Cc=Wi("__translateVNode"),Pc=Wi("__datetimeParts"),Lc=Wi("__numberParts"),vm=Wi("__setPluralRules"),xm=Wi("__injectWithOption"),Dc=Wi("__dispose");function Ws(t){if(!tt(t)||Wn(t))return t;for(const e in t)if(Ln(t,e))if(!e.includes("."))tt(t[e])&&Ws(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=ht()),!tt(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(Wn(r)?am.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Wn(r)){const o=r[n[i]];tt(o)&&Ws(o)}}return t}function Eu(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=$e(n)?n:Rt(i)?ht():{[t]:ht()};if(Rt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||ht(),qo(c,o[l])):qo(c,o)}else Re(a)&&qo(JSON.parse(a),o)}),r==null&&s)for(const a in o)Ln(o,a)&&Ws(o[a]);return o}function Em(t){return t.type}function Sm(t,e,n){let i=tt(e.messages)?e.messages:ht();"__i18nGlobal"in n&&(i=Eu(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(tt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(tt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ih(t){return Pt(Ks,null,t,0)}const Nh="__INTLIFY_META__",Uh=()=>[],IT=()=>!1;let Oh=0;function Fh(t){return(e,n,i,r)=>t(n,i,Ns()||void 0,r)}const NT=()=>{const t=Ns();let e=null;return t&&(e=Em(t)[Nh])?{[Nh]:e}:null};function Su(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=ia?Xn:Id;let o=et(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Re(t.locale)?t.locale:Gs),l=s(e&&o?e.fallbackLocale.value:Re(t.fallbackLocale)||Rt(t.fallbackLocale)||$e(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(Eu(a.value,t)),u=s($e(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s($e(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:et(t.missingWarn)||is(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:et(t.fallbackWarn)||is(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:et(t.fallbackRoot)?t.fallbackRoot:!0,E=!!t.fallbackFormat,m=_t(t.missing)?t.missing:null,d=_t(t.missing)?Fh(t.missing):null,M=_t(t.postTranslation)?t.postTranslation:null,y=e?e.warnHtmlMessage:et(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter;const N=e?e.modifiers:$e(t.modifiers)?t.modifiers:{};let I=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&bh(null);const P={version:LT,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:N,pluralRules:I,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:E,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:y,escapeParameter:g,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};P.datetimeFormats=u.value,P.numberFormats=f.value,P.__datetimeFormatters=$e(R)?R.__datetimeFormatters:void 0,P.__numberFormatters=$e(R)?R.__numberFormatters:void 0;const F=_T(P);return i&&bh(F),F})(),gs(R,a.value,l.value);function w(){return[a.value,l.value,c.value,u.value,f.value]}const T=Ct({get:()=>a.value,set:P=>{R.locale=P,a.value=P}}),B=Ct({get:()=>l.value,set:P=>{R.fallbackLocale=P,l.value=P,gs(R,a.value,P)}}),Q=Ct(()=>c.value),q=Ct(()=>u.value),se=Ct(()=>f.value);function oe(){return _t(M)?M:null}function ee(P){M=P,R.postTranslation=P}function te(){return m}function X(P){P!==null&&(d=Fh(P)),m=P,R.missing=d}const de=(P,F,V,fe,ae,_e)=>{w();let Le;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?mT():void 0),Le=P(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(V!=="translate exists"&&Tt(Le)&&Le===Sa||V==="translate exists"&&!Le){const[he,Ee]=F();return e&&_?fe(e):ae(he)}else{if(_e(Le))return Le;throw mn(an.UNEXPECTED_RETURN_TYPE)}};function ge(...P){return de(F=>Reflect.apply(Dh,null,[F,...P]),()=>wc(...P),"translate",F=>Reflect.apply(F.t,F,[...P]),F=>F,F=>Re(F))}function Ae(...P){const[F,V,fe]=P;if(fe&&!tt(fe))throw mn(an.INVALID_ARGUMENT);return ge(F,V,Lt({resolvedMessage:!0},fe||{}))}function Pe(...P){return de(F=>Reflect.apply(Th,null,[F,...P]),()=>Tc(...P),"datetime format",F=>Reflect.apply(F.d,F,[...P]),()=>Mh,F=>Re(F))}function Ye(...P){return de(F=>Reflect.apply(wh,null,[F,...P]),()=>Rc(...P),"number format",F=>Reflect.apply(F.n,F,[...P]),()=>Mh,F=>Re(F))}function ie(P){return P.map(F=>Re(F)||Tt(F)||et(F)?Ih(String(F)):F)}const xe={normalize:ie,interpolate:P=>P,type:"vnode"};function H(...P){return de(F=>{let V;const fe=F;try{fe.processor=xe,V=Reflect.apply(Dh,null,[fe,...P])}finally{fe.processor=null}return V},()=>wc(...P),"translate",F=>F[Cc](...P),F=>[Ih(F)],F=>Rt(F))}function re(...P){return de(F=>Reflect.apply(wh,null,[F,...P]),()=>Rc(...P),"number format",F=>F[Lc](...P),Uh,F=>Re(F)||Rt(F))}function le(...P){return de(F=>Reflect.apply(Th,null,[F,...P]),()=>Tc(...P),"datetime format",F=>F[Pc](...P),Uh,F=>Re(F)||Rt(F))}function ce(P){I=P,R.pluralRules=I}function De(P,F){return de(()=>{if(!P)return!1;const V=Re(F)?F:a.value,fe=S(V),ae=R.messageResolver(fe,P);return Wn(ae)||Sn(ae)||Re(ae)},()=>[P],"translate exists",V=>Reflect.apply(V.te,V,[P,F]),IT,V=>et(V))}function L(P){let F=null;const V=lm(R,l.value,a.value);for(let fe=0;fe<V.length;fe++){const ae=c.value[V[fe]]||{},_e=R.messageResolver(ae,P);if(_e!=null){F=_e;break}}return F}function D(P){const F=L(P);return F??(e?e.tm(P)||{}:{})}function S(P){return c.value[P]||{}}function J(P,F){if(r){const V={[P]:F};for(const fe in V)Ln(V,fe)&&Ws(V[fe]);F=V[P]}c.value[P]=F,R.messages=c.value}function $(P,F){c.value[P]=c.value[P]||{};const V={[P]:F};if(r)for(const fe in V)Ln(V,fe)&&Ws(V[fe]);F=V[P],qo(F,c.value[P]),R.messages=c.value}function j(P){return u.value[P]||{}}function b(P,F){u.value[P]=F,R.datetimeFormats=u.value,Rh(R,P,F)}function C(P,F){u.value[P]=Lt(u.value[P]||{},F),R.datetimeFormats=u.value,Rh(R,P,F)}function O(P){return f.value[P]||{}}function x(P,F){f.value[P]=F,R.numberFormats=f.value,Ch(R,P,F)}function v(P,F){f.value[P]=Lt(f.value[P]||{},F),R.numberFormats=f.value,Ch(R,P,F)}Oh++,e&&ia&&(Ui(e.locale,P=>{o&&(a.value=P,R.locale=P,gs(R,a.value,l.value))}),Ui(e.fallbackLocale,P=>{o&&(l.value=P,R.fallbackLocale=P,gs(R,a.value,l.value))}));const U={id:Oh,locale:T,fallbackLocale:B,get inheritLocale(){return o},set inheritLocale(P){o=P,P&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,gs(R,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:Q,get modifiers(){return N},get pluralRules(){return I||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(P){h=P,R.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(P){p=P,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(P){_=P},get fallbackFormat(){return E},set fallbackFormat(P){E=P,R.fallbackFormat=E},get warnHtmlMessage(){return y},set warnHtmlMessage(P){y=P,R.warnHtmlMessage=P},get escapeParameter(){return g},set escapeParameter(P){g=P,R.escapeParameter=P},t:ge,getLocaleMessage:S,setLocaleMessage:J,mergeLocaleMessage:$,getPostTranslationHandler:oe,setPostTranslationHandler:ee,getMissingHandler:te,setMissingHandler:X,[vm]:ce};return U.datetimeFormats=q,U.numberFormats=se,U.rt=Ae,U.te=De,U.tm=D,U.d=Pe,U.n=Ye,U.getDateTimeFormat=j,U.setDateTimeFormat=b,U.mergeDateTimeFormat=C,U.getNumberFormat=O,U.setNumberFormat=x,U.mergeNumberFormat=v,U[xm]=n,U[Cc]=H,U[Pc]=le,U[Lc]=re,U}function UT(t){const e=Re(t.locale)?t.locale:Gs,n=Re(t.fallbackLocale)||Rt(t.fallbackLocale)||$e(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=_t(t.missing)?t.missing:void 0,r=et(t.silentTranslationWarn)||is(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=et(t.silentFallbackWarn)||is(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=et(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=$e(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=_t(t.postTranslation)?t.postTranslation:void 0,f=Re(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=et(t.sync)?t.sync:!0;let _=t.messages;if($e(t.sharedMessages)){const N=t.sharedMessages;_=Object.keys(N).reduce((R,k)=>{const w=R[k]||(R[k]={});return Lt(w,N[k]),R},_||{})}const{__i18n:E,__root:m,__injectWithOption:d}=t,M=t.datetimeFormats,y=t.numberFormats,g=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:g,datetimeFormats:M,numberFormats:y,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:E,__root:m,__injectWithOption:d}}function Ic(t={}){const e=Su(UT(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return et(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=et(r)?!r:r},get silentFallbackWarn(){return et(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=et(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function OT(t,e,n){return{beforeCreate(){const i=Ns();if(!i)throw mn(an.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Bh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Ic(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Bh(t,r);else{this.$i18n=Ic({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Sm(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Ns();if(!i)throw mn(an.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Bh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[vm](e.pluralizationRules||t.pluralizationRules);const n=Eu(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Mu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function FT({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Wt?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},ht())}function Mm(){return Wt}const BT=Jt({name:"i18n-t",props:Lt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Tt(t)||!isNaN(t)}},Mu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||yu({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),o=ht();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Re(t.plural)?+t.plural:t.plural);const a=FT(e,s),l=r[Cc](t.keypath,a,o),c=Lt(ht(),i),u=Re(t.tag)||tt(t.tag)?t.tag:Mm();return pa(u,c,l)}}}),kh=BT;function kT(t){return Rt(t)&&!Re(t[0])}function ym(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=ht();t.locale&&(o.locale=t.locale),Re(t.format)?o.key=t.format:tt(t.format)&&(Re(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Lt(ht(),h,{[p]:t.format[p]}):h,ht()));const l=i(t.value,o,a);let c=[o.key];Rt(l)?c=l.map((h,p)=>{const _=r[h.type],E=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return kT(E)&&(E[0].key=`${h.type}-${p}`),E}):Re(l)&&(c=[l]);const u=Lt(ht(),s),f=Re(t.tag)||tt(t.tag)?t.tag:Mm();return pa(f,u,c)}}const HT=Jt({name:"i18n-n",props:Lt({value:{type:Number,required:!0},format:{type:[String,Object]}},Mu),setup(t,e){const n=t.i18n||yu({useScope:t.scope,__useComponent:!0});return ym(t,e,mm,(...i)=>n[Lc](...i))}}),Hh=HT;function zT(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function VT(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw mn(an.UNEXPECTED_ERROR);const c=zT(t,a.$),u=zh(l);return[Reflect.apply(c.t,c,[...Vh(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);ia&&t.global===c&&(o.__i18nWatcher=Ui(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{ia&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=zh(a);o.textContent=Reflect.apply(l.t,l,[...Vh(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function zh(t){if(Re(t))return{path:t};if($e(t)){if(!("path"in t))throw mn(an.REQUIRED_VALUE,"path");return t}else throw mn(an.INVALID_VALUE)}function Vh(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Re(n)&&(o.locale=n),Tt(r)&&(o.plural=r),Tt(s)&&(o.plural=s),[e,a,o]}function GT(t,e,...n){const i=$e(n[0])?n[0]:{};(et(i.globalInstall)?i.globalInstall:!0)&&([kh.name,"I18nT"].forEach(s=>t.component(s,kh)),[Hh.name,"I18nN"].forEach(s=>t.component(s,Hh)),[Wh.name,"I18nD"].forEach(s=>t.component(s,Wh))),t.directive("t",VT(e))}const WT=Wi("global-vue-i18n");function XT(t={}){const e=__VUE_I18N_LEGACY_API__&&et(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=et(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=YT(t,e),o=Wi("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),$e(h[0])){const E=h[0];u.__composerExtend=E.__composerExtend,u.__vueI18nExtend=E.__vueI18nExtend}let p=null;!e&&n&&(p=eR(f,u.global)),__VUE_I18N_FULL_INSTALL__&&GT(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(OT(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function yu(t={}){const e=Ns();if(e==null)throw mn(an.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw mn(an.NOT_INSTALLED);const n=jT(e),i=$T(n),r=Em(e),s=qT(t,r);if(s==="global")return Sm(i,t,r),i;if(s==="parent"){let l=KT(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Lt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Su(l),o.__composerExtend&&(a[Dc]=o.__composerExtend(a)),QT(o,e,a),o.__setInstance(e,a)}return a}function YT(t,e){const n=n_(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Ic(t)):n.run(()=>Su(t));if(i==null)throw mn(an.UNEXPECTED_ERROR);return[n,i]}function jT(t){const e=Gn(t.isCE?WT:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw mn(t.isCE?an.NOT_INSTALLED_WITH_PROVIDE:an.UNEXPECTED_ERROR);return e}function qT(t,e){return xa(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function $T(t){return t.mode==="composition"?t.global:t.global.__composer}function KT(t,e,n=!1){let i=null;const r=e.root;let s=ZT(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[xm]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function ZT(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function QT(t,e,n){as(()=>{},e),$s(()=>{const i=n;t.__deleteInstance(e);const r=i[Dc];r&&(r(),delete i[Dc])},e)}const JT=["locale","fallbackLocale","availableLocales"],Gh=["t","rt","d","n","tm","te"];function eR(t,e){const n=Object.create(null);return JT.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw mn(an.UNEXPECTED_ERROR);const o=Ft(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Gh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw mn(an.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Gh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const tR=Jt({name:"i18n-d",props:Lt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Mu),setup(t,e){const n=t.i18n||yu({useScope:t.scope,__useComponent:!0});return ym(t,e,pm,(...i)=>n[Pc](...i))}}),Wh=tR;DT();uT(XA);fT(aT);hT(lm);if(__INTLIFY_PROD_DEVTOOLS__){const t=ur();t.__INTLIFY__=!0,YA(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const nR={"en-US":{message:{portfolio:"Portfolio",experience:"Experience",projects:"Projects",resume:"Resume",name:"Andrey Hauryk",description:"Software Engineer experienced in Full-Stack Web"}},ru:{message:{portfolio:"Портфолио",experience:"Опыт",projects:"Проекты",resume:"Резюме",name:"Андрей Гаврик",description:"Инженер-программист с опытом работы в Full-Stack Web"}}},bm=XT({locale:"en-US",legacy:!1,messages:nR});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function Am(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Am(t.default)}const rt=Object.assign;function vl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Un(r)?r.map(t):t(r)}return n}const Rs=()=>{},Un=Array.isArray,Tm=/#/g,rR=/&/g,sR=/\//g,oR=/=/g,aR=/\?/g,Rm=/\+/g,lR=/%5B/g,cR=/%5D/g,wm=/%5E/g,uR=/%60/g,Cm=/%7B/g,fR=/%7C/g,Pm=/%7D/g,hR=/%20/g;function bu(t){return encodeURI(""+t).replace(fR,"|").replace(lR,"[").replace(cR,"]")}function dR(t){return bu(t).replace(Cm,"{").replace(Pm,"}").replace(wm,"^")}function Nc(t){return bu(t).replace(Rm,"%2B").replace(hR,"+").replace(Tm,"%23").replace(rR,"%26").replace(uR,"`").replace(Cm,"{").replace(Pm,"}").replace(wm,"^")}function pR(t){return Nc(t).replace(oR,"%3D")}function mR(t){return bu(t).replace(Tm,"%23").replace(aR,"%3F")}function _R(t){return t==null?"":mR(t).replace(sR,"%2F")}function Xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gR=/\/$/,vR=t=>t.replace(gR,"");function xl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=MR(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Xs(o)}}function xR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ER(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ss(e.matched[i],n.matched[r])&&Lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!SR(t[n],e[n]))return!1;return!0}function SR(t,e){return Un(t)?Yh(t,e):Un(e)?Yh(e,t):t===e}function Yh(t,e){return Un(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function MR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function yR(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vR(t)}const bR=/^[^#]+#/;function AR(t,e){return t.replace(bR,"#")+e}function TR(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function RR(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=TR(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jh(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function wR(t,e){Uc.set(t,e)}function CR(t){const e=Uc.get(t);return Uc.delete(t),e}let PR=()=>location.protocol+"//"+location.host;function Dm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Xh(l,"")}return Xh(n,t)+i+r}function LR(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Dm(t,location),_=n.value,E=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}m=E?h.position-E.position:0}else i(p);r.forEach(d=>{d(n.value,_,{delta:m,type:Ys.pop,direction:m?m>0?ws.forward:ws.back:ws.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(rt({},h.state,{scroll:Ma()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ma():null}}function DR(t){const{history:e,location:n}=window,i={value:Dm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:PR()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=rt({},e.state,qh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:Ma()});s(u.current,u,!0);const f=rt({},qh(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function IR(t){t=yR(t);const e=DR(t),n=LR(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=rt({location:"",base:t,go:i,createHref:AR.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function NR(t){return typeof t=="string"||t&&typeof t=="object"}function Im(t){return typeof t=="string"||typeof t=="symbol"}const Nm=Symbol("");var $h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($h||($h={}));function os(t,e){return rt(new Error,{type:t,[Nm]:!0},e)}function ni(t,e){return t instanceof Error&&Nm in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",UR={sensitive:!1,strict:!1,start:!0,end:!0},OR=/[.+*?^${}()[\]/\\]/g;function FR(t,e){const n=rt({},UR,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(OR,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:E,optional:m,regexp:d}=h;s.push({name:_,repeatable:E,optional:m});const M=d||Kh;if(M!==Kh){p+=10;try{new RegExp(`(${M})`)}catch(g){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+g.message)}}let y=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=20,m&&(p+=-8),E&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:E,optional:m}=p,d=_ in c?c[_]:"";if(Un(d)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Un(d)?d.join("/"):d;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function BR(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Um(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=BR(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Zh(i))return 1;if(Zh(r))return-1}return r.length-i.length}function Zh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kR={type:0,value:""},HR=/[a-zA-Z0-9_]/;function zR(t){if(!t)return[[]];if(t==="/")return[[kR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:HR.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function VR(t,e,n){const i=FR(zR(t.path),n),r=rt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function GR(t,e){const n=[],i=new Map;e=td({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const _=!p,E=Jh(f);E.aliasOf=p&&p.record;const m=td(e,f),d=[E];if("alias"in f){const g=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of g)d.push(Jh(rt({},E,{components:p?p.record.components:E.components,path:N,aliasOf:p?p.record:E})))}let M,y;for(const g of d){const{path:N}=g;if(h&&N[0]!=="/"){const I=h.record.path,R=I[I.length-1]==="/"?"":"/";g.path=h.record.path+(N&&R+N)}if(M=VR(g,h,m),p?p.alias.push(M):(y=y||M,y!==M&&y.alias.push(M),_&&f.name&&!ed(M)&&o(f.name)),Om(M)&&l(M),E.children){const I=E.children;for(let R=0;R<I.length;R++)s(I[R],M,p&&p.children[R])}p=p||M}return y?()=>{o(y)}:Rs}function o(f){if(Im(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=YR(f,n);n.splice(h,0,f),f.record.name&&!ed(f)&&i.set(f.record.name,f)}function c(f,h){let p,_={},E,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw os(1,{location:f});m=p.record.name,_=rt(Qh(h.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Qh(f.params,p.keys.map(y=>y.name))),E=p.stringify(_)}else if(f.path!=null)E=f.path,p=n.find(y=>y.re.test(E)),p&&(_=p.parse(E),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!p)throw os(1,{location:f,currentLocation:h});m=p.record.name,_=rt({},h.params,f.params),E=p.stringify(_)}const d=[];let M=p;for(;M;)d.unshift(M.record),M=M.parent;return{name:m,path:E,params:_,matched:d,meta:XR(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Qh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Jh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XR(t){return t.reduce((e,n)=>rt(e,n.meta),{})}function td(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function YR(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Um(t,e[s])<0?i=s:n=s+1}const r=jR(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function jR(t){let e=t;for(;e=e.parent;)if(Om(e)&&Um(t,e)===0)return e}function Om({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qR(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Rm," "),o=s.indexOf("="),a=Xs(o<0?s:s.slice(0,o)),l=o<0?null:Xs(s.slice(o+1));if(a in e){let c=e[a];Un(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nd(t){let e="";for(let n in t){const i=t[n];if(n=pR(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Un(i)?i.map(s=>s&&Nc(s)):[i&&Nc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function $R(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Un(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const KR=Symbol(""),id=Symbol(""),Au=Symbol(""),Fm=Symbol(""),Oc=Symbol("");function vs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Li(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(os(4,{from:n,to:e})):h instanceof Error?l(h):NR(h)?l(os(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function El(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Am(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Li(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=iR(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Li(p,n,i,o,a,r)()}))}}return s}function rd(t){const e=Gn(Au),n=Gn(Fm),i=Ct(()=>{const l=pn(t.to);return e.resolve(l)}),r=Ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ss.bind(null,u));if(h>-1)return h;const p=sd(l[c-2]);return c>1&&sd(u)===p&&f[f.length-1].path!==p?f.findIndex(ss.bind(null,l[c-2])):h}),s=Ct(()=>r.value>-1&&tw(n.params,i.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&Lm(n.params,i.value.params));function a(l={}){if(ew(l)){const c=e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(Rs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ct(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function ZR(t){return t.length===1?t[0]:t}const QR=Jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rd,setup(t,{slots:e}){const n=di(rd(t)),{options:i}=Gn(Au),r=Ct(()=>({[od(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[od(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&ZR(e.default(n));return t.custom?s:pa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),JR=QR;function ew(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tw(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Un(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const od=(t,e,n)=>t??e??n,nw=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Gn(Oc),r=Ct(()=>t.route||i.value),s=Gn(id,0),o=Ct(()=>{let c=pn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ct(()=>r.value.matched[o.value]);Fo(id,Ct(()=>o.value+1)),Fo(KR,a),Fo(Oc,r);const l=Xn();return Ui(()=>[l.value,a.value,t.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ss(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ad(n.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=pa(h,rt({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ad(n.default,{Component:m,route:c})||m}}});function ad(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iw=nw;function rw(t){const e=GR(t.routes,t),n=t.parseQuery||qR,i=t.stringifyQuery||nd,r=t.history,s=vs(),o=vs(),a=vs(),l=Id(Ri);let c=Ri;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vl.bind(null,H=>""+H),f=vl.bind(null,_R),h=vl.bind(null,Xs);function p(H,re){let le,ce;return Im(H)?(le=e.getRecordMatcher(H),ce=re):ce=H,e.addRoute(ce,le)}function _(H){const re=e.getRecordMatcher(H);re&&e.removeRoute(re)}function E(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function d(H,re){if(re=rt({},re||l.value),typeof H=="string"){const S=xl(n,H,re.path),J=e.resolve({path:S.path},re),$=r.createHref(S.fullPath);return rt(S,J,{params:h(J.params),hash:Xs(S.hash),redirectedFrom:void 0,href:$})}let le;if(H.path!=null)le=rt({},H,{path:xl(n,H.path,re.path).path});else{const S=rt({},H.params);for(const J in S)S[J]==null&&delete S[J];le=rt({},H,{params:f(S)}),re.params=f(re.params)}const ce=e.resolve(le,re),De=H.hash||"";ce.params=u(h(ce.params));const L=xR(i,rt({},H,{hash:dR(De),path:ce.path})),D=r.createHref(L);return rt({fullPath:L,hash:De,query:i===nd?$R(H.query):H.query||{}},ce,{redirectedFrom:void 0,href:D})}function M(H){return typeof H=="string"?xl(n,H,l.value.path):rt({},H)}function y(H,re){if(c!==H)return os(8,{from:re,to:H})}function g(H){return R(H)}function N(H){return g(rt(M(H),{replace:!0}))}function I(H){const re=H.matched[H.matched.length-1];if(re&&re.redirect){const{redirect:le}=re;let ce=typeof le=="function"?le(H):le;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=M(ce):{path:ce},ce.params={}),rt({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function R(H,re){const le=c=d(H),ce=l.value,De=H.state,L=H.force,D=H.replace===!0,S=I(le);if(S)return R(rt(M(S),{state:typeof S=="object"?rt({},De,S.state):De,force:L,replace:D}),re||le);const J=le;J.redirectedFrom=re;let $;return!L&&ER(i,ce,le)&&($=os(16,{to:J,from:ce}),Ae(ce,ce,!0,!1)),($?Promise.resolve($):T(J,ce)).catch(j=>ni(j)?ni(j,2)?j:ge(j):X(j,J,ce)).then(j=>{if(j){if(ni(j,2))return R(rt({replace:D},M(j.to),{state:typeof j.to=="object"?rt({},De,j.to.state):De,force:L}),re||J)}else j=Q(J,ce,!0,D,De);return B(J,ce,j),j})}function k(H,re){const le=y(H,re);return le?Promise.reject(le):Promise.resolve()}function w(H){const re=ie.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(H):H()}function T(H,re){let le;const[ce,De,L]=sw(H,re);le=El(ce.reverse(),"beforeRouteLeave",H,re);for(const S of ce)S.leaveGuards.forEach(J=>{le.push(Li(J,H,re))});const D=k.bind(null,H,re);return le.push(D),xe(le).then(()=>{le=[];for(const S of s.list())le.push(Li(S,H,re));return le.push(D),xe(le)}).then(()=>{le=El(De,"beforeRouteUpdate",H,re);for(const S of De)S.updateGuards.forEach(J=>{le.push(Li(J,H,re))});return le.push(D),xe(le)}).then(()=>{le=[];for(const S of L)if(S.beforeEnter)if(Un(S.beforeEnter))for(const J of S.beforeEnter)le.push(Li(J,H,re));else le.push(Li(S.beforeEnter,H,re));return le.push(D),xe(le)}).then(()=>(H.matched.forEach(S=>S.enterCallbacks={}),le=El(L,"beforeRouteEnter",H,re,w),le.push(D),xe(le))).then(()=>{le=[];for(const S of o.list())le.push(Li(S,H,re));return le.push(D),xe(le)}).catch(S=>ni(S,8)?S:Promise.reject(S))}function B(H,re,le){a.list().forEach(ce=>w(()=>ce(H,re,le)))}function Q(H,re,le,ce,De){const L=y(H,re);if(L)return L;const D=re===Ri,S=Fr?history.state:{};le&&(ce||D?r.replace(H.fullPath,rt({scroll:D&&S&&S.scroll},De)):r.push(H.fullPath,De)),l.value=H,Ae(H,re,le,D),ge()}let q;function se(){q||(q=r.listen((H,re,le)=>{if(!me.listening)return;const ce=d(H),De=I(ce);if(De){R(rt(De,{replace:!0,force:!0}),ce).catch(Rs);return}c=ce;const L=l.value;Fr&&wR(jh(L.fullPath,le.delta),Ma()),T(ce,L).catch(D=>ni(D,12)?D:ni(D,2)?(R(rt(M(D.to),{force:!0}),ce).then(S=>{ni(S,20)&&!le.delta&&le.type===Ys.pop&&r.go(-1,!1)}).catch(Rs),Promise.reject()):(le.delta&&r.go(-le.delta,!1),X(D,ce,L))).then(D=>{D=D||Q(ce,L,!1),D&&(le.delta&&!ni(D,8)?r.go(-le.delta,!1):le.type===Ys.pop&&ni(D,20)&&r.go(-1,!1)),B(ce,L,D)}).catch(Rs)}))}let oe=vs(),ee=vs(),te;function X(H,re,le){ge(H);const ce=ee.list();return ce.length?ce.forEach(De=>De(H,re,le)):console.error(H),Promise.reject(H)}function de(){return te&&l.value!==Ri?Promise.resolve():new Promise((H,re)=>{oe.add([H,re])})}function ge(H){return te||(te=!H,se(),oe.list().forEach(([re,le])=>H?le(H):re()),oe.reset()),H}function Ae(H,re,le,ce){const{scrollBehavior:De}=t;if(!Fr||!De)return Promise.resolve();const L=!le&&CR(jh(H.fullPath,0))||(ce||!le)&&history.state&&history.state.scroll||null;return Br().then(()=>De(H,re,L)).then(D=>D&&RR(D)).catch(D=>X(D,H,re))}const Pe=H=>r.go(H);let Ye;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:E,resolve:d,options:t,push:g,replace:N,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:de,install(H){const re=this;H.component("RouterLink",JR),H.component("RouterView",iw),H.config.globalProperties.$router=re,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(l)}),Fr&&!Ye&&l.value===Ri&&(Ye=!0,g(r.location).catch(De=>{}));const le={};for(const De in Ri)Object.defineProperty(le,De,{get:()=>l.value[De],enumerable:!0});H.provide(Au,re),H.provide(Fm,Ld(le)),H.provide(Oc,l);const ce=H.unmount;ie.add(H),H.unmount=function(){ie.delete(H),ie.size<1&&(c=Ri,q&&q(),q=null,l.value=Ri,Ye=!1,te=!1),ce()}}};function xe(H){return H.reduce((re,le)=>re.then(()=>w(le)),Promise.resolve())}return me}function sw(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ss(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ss(c,l))||r.push(l))}return[n,i,r]}const ow=["en","ru"],aw=[{path:"/:lang",component:Sc,beforeEnter:(t,e,n)=>{const i=t.params.lang;if(!ow.includes(i))return n("ru");bm.global.locale.value=i,n()}}],lw=rw({history:IR("/andrey-hauryk-web-cv/"),routes:aw}),ya=s0(Nb);ya.use(bm);ya.use(lw);ya.use(nA,{preLoad:1.3,attempt:1});ya.mount("#app");
