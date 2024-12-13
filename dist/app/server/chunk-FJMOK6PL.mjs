import './polyfills.server.mjs';
import{Bb as de,Ca as T,Cb as he,Da as $,Fa as I,G as ne,I as re,K as f,L as B,N as E,P as g,Q as l,T as ie,V as k,W as w,aa as se,i as N,ia as S,ja as oe,m as C,na as _,qa as x,s as ee,u as te,ub as ue,vb as ce,wa as ae,wb as le,ya as d,za as U}from"./chunk-ERDLPLLR.mjs";import{a as L,d as Q}from"./chunk-VVCT4QZE.mjs";var we=null;function j(){return we}function qt(e){we??=e}var fe=class{};var R=new E(""),Fe=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=f({token:e,factory:()=>l(Ke),providedIn:"platform"})}}return e})();var Ke=(()=>{class e extends Fe{constructor(){super(),this._doc=l(R),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return j().getBaseHref(this._doc)}onPopState(t){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=f({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function Ce(e,n){if(e.length==0)return n;if(n.length==0)return e;let t=0;return e.endsWith("/")&&t++,n.startsWith("/")&&t++,t==2?e+n.substring(1):t==1?e+n:e+"/"+n}function ge(e){let n=e.match(/#|\?|$/),t=n&&n.index||e.length,r=t-(e[t-1]==="/"?1:0);return e.slice(0,r)+e.slice(t)}function m(e){return e&&e[0]!=="?"?"?"+e:e}var K=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=f({token:e,factory:()=>l(Xe),providedIn:"root"})}}return e})(),Ze=new E(""),Xe=(()=>{class e extends K{constructor(t,r){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??l(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Ce(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+m(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,s){let o=this.prepareExternalUrl(i+m(s));this._platformLocation.pushState(t,r,o)}replaceState(t,r,i,s){let o=this.prepareExternalUrl(i+m(s));this._platformLocation.replaceState(t,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(r){return new(r||e)(g(Fe),g(Ze,8))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var qe=(()=>{class e{constructor(t){this._subject=new oe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=Qe(ge(De(r))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+m(r))}normalize(t){return e.stripTrailingSlash(He(this._basePath,De(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+m(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+m(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r,complete:i})}static{this.normalizeQueryParams=m}static{this.joinWithSlash=Ce}static{this.stripTrailingSlash=ge}static{this.\u0275fac=function(r){return new(r||e)(g(K))}}static{this.\u0275prov=f({token:e,factory:()=>Je(),providedIn:"root"})}}return e})();function Je(){return new qe(g(K))}function He(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function De(e){return e.replace(/\/index.html$/,"")}function Qe(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}function et(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,s]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===n)return decodeURIComponent(s)}return null}var z=/\s+/,pe=[],Jt=(()=>{class e{constructor(t,r){this._ngEl=t,this._renderer=r,this.initialClasses=pe,this.stateMap=new Map}set klass(t){this.initialClasses=t!=null?t.trim().split(z):pe}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(z):t}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let r of t)this._updateState(r,!0);else if(t!=null)for(let r of Object.keys(t))this._updateState(r,!!t[r]);this._applyStateDiff()}_updateState(t,r){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(t,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let r=t[0],i=t[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(t,r){t=t.trim(),t.length>0&&t.split(z).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(r){return new(r||e)(d(S),d(T))}}static{this.\u0275dir=w({type:e,selectors:[["","ngClass",""]],inputs:{klass:[ie.None,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return e})();var V=class{constructor(n,t,r,i){this.$implicit=n,this.ngForOf=t,this.index=r,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ht=(()=>{class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,r,i){this._viewContainer=t,this._template=r,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let r=this._viewContainer;t.forEachOperation((i,s,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new V(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(s===null?void 0:s);else if(s!==null){let u=r.get(s);r.move(u,o),me(u,i)}});for(let i=0,s=r.length;i<s;i++){let u=r.get(i).context;u.index=i,u.count=s,u.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let s=r.get(i.currentIndex);me(s,i)})}static ngTemplateContextGuard(t,r){return!0}static{this.\u0275fac=function(r){return new(r||e)(d(I),d(U),d(de))}}static{this.\u0275dir=w({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return e})();function me(e,n){e.context.$implicit=n.item}var Qt=(()=>{class e{constructor(t,r){this._viewContainer=t,this._context=new G,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){ye("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){ye("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,r){return!0}static{this.\u0275fac=function(r){return new(r||e)(d(I),d(U))}}static{this.\u0275dir=w({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return e})(),G=class{constructor(){this.$implicit=null,this.ngIf=null}};function ye(e,n){if(!!!(!n||n.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${re(n)}'.`)}var en=(()=>{class e{constructor(t,r,i){this._ngEl=t,this._differs=r,this._renderer=i,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,r){let[i,s]=t.split("."),o=i.indexOf("-")===-1?void 0:ae.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,s?`${r}${s}`:r,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(t){t.forEachRemovedItem(r=>this._setStyle(r.key,null)),t.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),t.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}static{this.\u0275fac=function(r){return new(r||e)(d(S),d(he),d(T))}}static{this.\u0275dir=w({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return e})(),tn=(()=>{class e{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static{this.\u0275fac=function(r){return new(r||e)(d(I))}}static{this.\u0275dir=w({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[se]})}}return e})();var nn=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=k({type:e})}static{this.\u0275inj=B({})}}return e})(),tt="browser",nt="server";function rt(e){return e===tt}function Ae(e){return e===nt}var rn=(()=>{class e{static{this.\u0275prov=f({token:e,providedIn:"root",factory:()=>rt(l(_))?new W(l(R),window):new Y})}}return e})(),W=class{constructor(n,t){this.document=n,this.window=t,this.offset=()=>[0,0]}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n){this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){let t=it(this.document,n);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(n){this.window.history.scrollRestoration=n}scrollToElement(n){let t=n.getBoundingClientRect(),r=t.left+this.window.pageXOffset,i=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(r-s[0],i-s[1])}};function it(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(n)||s.querySelector(`[name="${n}"]`);if(o)return o}i=r.nextNode()}}return null}var Y=class{setOffset(n){}getScrollPosition(){return[0,0]}scrollToPosition(n){}scrollToAnchor(n){}setHistoryScrollRestoration(n){}},Ee=class{};var X=class{};var y=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),s=i.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(i,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=(n.op==="a"?this.headers.get(t):void 0)||[];i.push(...r),this.headers.set(t,i);break;case"d":let s=n.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(u=>s.indexOf(u)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(s=>s.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var q=class{encodeKey(n){return be(n)}encodeValue(n){return be(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function st(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,u]=s==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,s)),n.decodeValue(i.slice(s+1))],a=t.get(o)||[];a.push(u),t.set(o,a)}),t}var ot=/%(\d[a-f0-9])/gi,at={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(e){return encodeURIComponent(e).replace(ot,(n,t)=>at[t]??n)}function M(e){return`${e}`}var D=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new q,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=st(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(M):[M(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(s=>{t.push({param:r,value:s,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(M(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(M(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var J=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function ut(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ve(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Se(e){return typeof Blob<"u"&&e instanceof Blob}function _e(e){return typeof FormData<"u"&&e instanceof FormData}function ct(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var A=class e{constructor(n,t,r,i){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let s;if(ut(this.method)||i?(this.body=r!==void 0?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new y,this.context??=new J,!this.params)this.params=new D,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let u=t.indexOf("?"),a=u===-1?"?":u<t.length-1?"&":"";this.urlWithParams=t+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ve(this.body)||Se(this.body)||_e(this.body)||ct(this.body)?this.body:this.body instanceof D?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_e(this.body)?null:Se(this.body)?this.body.type||null:ve(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof D?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,s=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,u=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,h=n.headers||this.headers,F=n.params||this.params,v=n.context??this.context;return n.setHeaders!==void 0&&(h=Object.keys(n.setHeaders).reduce((c,p)=>c.set(p,n.setHeaders[p]),h)),n.setParams&&(F=Object.keys(n.setParams).reduce((c,p)=>c.set(p,n.setParams[p]),F)),new e(t,r,o,{params:F,headers:h,context:v,reportProgress:a,responseType:i,withCredentials:u,transferCache:s})}},Ne=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Ne||{}),H=class{constructor(n,t=Be.Ok,r="OK"){this.headers=n.headers||new y,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}};var b=class e extends H{constructor(n={}){super(n),this.type=Ne.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var Be=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(Be||{});function Z(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Sn=(()=>{class e{constructor(t){this.handler=t}request(t,r,i={}){let s;if(t instanceof A)s=t;else{let a;i.headers instanceof y?a=i.headers:a=new y(i.headers);let h;i.params&&(i.params instanceof D?h=i.params:h=new D({fromObject:i.params})),s=new A(t,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:h,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=N(s).pipe(te(a=>this.handler.handle(a)));if(t instanceof A||i.observe==="events")return o;let u=o.pipe(ee(a=>a instanceof b));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return u.pipe(C(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return u.pipe(C(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return u.pipe(C(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return u.pipe(C(a=>a.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new D().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,Z(i,r))}post(t,r,i={}){return this.request("POST",t,Z(i,r))}put(t,r,i={}){return this.request("PUT",t,Z(i,r))}static{this.\u0275fac=function(r){return new(r||e)(g(X))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac})}}return e})();var lt=new E("");var Te="b",Ie="h",Re="s",Me="st",Pe="u",Oe="rt",P=new E(""),dt=["GET","HEAD"];function ht(e,n){let v=l(P),{isCacheActive:t}=v,r=Q(v,["isCacheActive"]),{transferCache:i,method:s}=e;if(!t||s==="POST"&&!r.includePostRequests&&!i||s!=="POST"&&!dt.includes(s)||i===!1||r.filter?.(e)===!1)return n(e);let o=l(x),u=gt(e),a=o.get(u,null),h=r.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(h=i.includeHeaders),a){let{[Te]:c,[Oe]:p,[Ie]:ke,[Re]:xe,[Me]:Ue,[Pe]:$e}=a,O=c;switch(p){case"arraybuffer":O=new TextEncoder().encode(c).buffer;break;case"blob":O=new Blob([c]);break}let je=new y(ke);return N(new b({body:O,headers:je,status:xe,statusText:Ue,url:$e}))}let F=Ae(l(_));return n(e).pipe(ne(c=>{c instanceof b&&F&&o.set(u,{[Te]:c.body,[Ie]:ft(c.headers,h),[Re]:c.status,[Me]:c.statusText,[Pe]:c.url||"",[Oe]:e.responseType})}))}function ft(e,n){if(!n)return{};let t={};for(let r of n){let i=e.getAll(r);i!==null&&(t[r]=i)}return t}function Le(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function gt(e){let{params:n,method:t,responseType:r,url:i}=e,s=Le(n),o=e.serializeBody();o instanceof URLSearchParams?o=Le(o):typeof o!="string"&&(o="");let u=[t,r,i,o,s].join("|"),a=Dt(u);return a}function Dt(e){let n=0;for(let t of e)n=Math.imul(31,n)+t.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function _n(e){return[{provide:P,useFactory:()=>($("NgHttpTransferCache"),L({isCacheActive:!0},e))},{provide:lt,useValue:ht,multi:!0,deps:[x,P]},{provide:ue,multi:!0,useFactory:()=>{let n=l(ce),t=l(P);return()=>{le(n).then(()=>{t.isCacheActive=!1})}}}]}export{j as a,qt as b,fe as c,R as d,Fe as e,K as f,Ze as g,qe as h,et as i,Jt as j,Ht as k,Qt as l,en as m,tn as n,nn as o,tt as p,nt as q,rt as r,Ae as s,rn as t,Y as u,Ee as v,y as w,Sn as x,lt as y,_n as z};
