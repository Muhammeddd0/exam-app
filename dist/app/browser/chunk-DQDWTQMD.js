import{Aa as re,D as we,Da as z,Fa as ie,Ga as V,J as Fe,M as Q,Ma as Re,N as Ce,P as m,Q as ee,S as w,U as D,V as y,X as Ae,Z as te,_ as R,a as X,aa as be,ca as ve,d as q,da as Se,ea as _e,g as J,m as me,ma as j,n as H,na as Te,r as L,ra as ne,x as ye,xa as Ie,xb as Me,yb as Pe,z as Ee,za as E}from"./chunk-HTWP6J2Z.js";var Ue=null;function se(){return Ue}function mn(e){Ue??=e}var Oe=class{};var W=new w(""),$e=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:()=>y(it),providedIn:"platform"})}}return e})();var it=(()=>{class e extends $e{constructor(){super(),this._doc=y(W),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return se().getBaseHref(this._doc)}onPopState(t){let n=se().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=se().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function je(e,r){if(e.length==0)return r;if(r.length==0)return e;let t=0;return e.endsWith("/")&&t++,r.startsWith("/")&&t++,t==2?e+r.substring(1):t==1?e+r:e+"/"+r}function Le(e){let r=e.match(/#|\?|$/),t=r&&r.index||e.length,n=t-(e[t-1]==="/"?1:0);return e.slice(0,n)+e.slice(t)}function T(e){return e&&e[0]!=="?"?"?"+e:e}var ce=(()=>{class e{historyGo(t){throw new Error("")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:()=>y(ot),providedIn:"root"})}}return e})(),st=new w(""),ot=(()=>{class e extends ce{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??y(W).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return je(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+T(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,o){let s=this.prepareExternalUrl(i+T(o));this._platformLocation.pushState(t,n,s)}replaceState(t,n,i,o){let s=this.prepareExternalUrl(i+T(o));this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(n){return new(n||e)(D($e),D(st,8))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var at=(()=>{class e{constructor(t){this._subject=new Te,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=lt(Le(Ne(n))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+T(n))}normalize(t){return e.stripTrailingSlash(ct(this._basePath,Ne(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+T(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+T(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n,complete:i})}static{this.normalizeQueryParams=T}static{this.joinWithSlash=je}static{this.stripTrailingSlash=Le}static{this.\u0275fac=function(n){return new(n||e)(D(ce))}}static{this.\u0275prov=m({token:e,factory:()=>ut(),providedIn:"root"})}}return e})();function ut(){return new at(D(ce))}function ct(e,r){if(!e||!r.startsWith(e))return r;let t=r.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:r}function Ne(e){return e.replace(/\/index.html$/,"")}function lt(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}function ze(e,r){r=encodeURIComponent(r);for(let t of e.split(";")){let n=t.indexOf("="),[i,o]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var oe=/\s+/,Be=[],yn=(()=>{class e{constructor(t,n){this._ngEl=t,this._renderer=n,this.initialClasses=Be,this.stateMap=new Map}set klass(t){this.initialClasses=t!=null?t.trim().split(oe):Be}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(oe):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],i=t[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(oe).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(n){return new(n||e)(E(j),E(z))}}static{this.\u0275dir=R({type:e,selectors:[["","ngClass",""]],inputs:{klass:[Ae.None,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return e})();var ae=class{constructor(r,t,n,i){this.$implicit=r,this.ngForOf=t,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},En=(()=>{class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,n,i){this._viewContainer=t,this._template=n,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((i,o,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new ae(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let u=n.get(o);n.move(u,s),ke(u,i)}});for(let i=0,o=n.length;i<o;i++){let u=n.get(i).context;u.index=i,u.count=o,u.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let o=n.get(i.currentIndex);ke(o,i)})}static ngTemplateContextGuard(t,n){return!0}static{this.\u0275fac=function(n){return new(n||e)(E(V),E(re),E(Me))}}static{this.\u0275dir=R({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return e})();function ke(e,r){e.context.$implicit=r.item}var wn=(()=>{class e{constructor(t,n){this._viewContainer=t,this._context=new ue,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){xe("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){xe("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,n){return!0}static{this.\u0275fac=function(n){return new(n||e)(E(V),E(re))}}static{this.\u0275dir=R({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return e})(),ue=class{constructor(){this.$implicit=null,this.ngIf=null}};function xe(e,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Ce(r)}'.`)}var Fn=(()=>{class e{constructor(t,n,i){this._ngEl=t,this._differs=n,this._renderer=i,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[i,o]=t.split("."),s=i.indexOf("-")===-1?void 0:Ie.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static{this.\u0275fac=function(n){return new(n||e)(E(j),E(Pe),E(z))}}static{this.\u0275dir=R({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return e})(),Cn=(()=>{class e{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(t,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static{this.\u0275fac=function(n){return new(n||e)(E(V))}}static{this.\u0275dir=R({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[_e]})}}return e})();var An=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=te({type:e})}static{this.\u0275inj=ee({})}}return e})(),dt="browser",ht="server";function bn(e){return e===dt}function ft(e){return e===ht}var G=class{};var B=class{},k=class{},F=class e{constructor(r){this.normalizedNames=new Map,this.lazyUpdate=null,r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let i=t.slice(0,n),o=i.toLowerCase(),s=t.slice(n+1).trim();this.maybeSetNormalizedName(i,o),this.headers.has(o)?this.headers.get(o).push(s):this.headers.set(o,[s])}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((t,n)=>{this.setHeaderEntries(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let t=this.headers.get(r.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,t){return this.clone({name:r,value:t,op:"a"})}set(r,t){return this.clone({name:r,value:t,op:"s"})}delete(r,t){return this.clone({name:r,value:t,op:"d"})}maybeSetNormalizedName(r,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,r)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(t=>{this.headers.set(t,r.headers.get(t)),this.normalizedNames.set(t,r.normalizedNames.get(t))})}clone(r){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([r]),t}applyUpdate(r){let t=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,t);let i=(r.op==="a"?this.headers.get(t):void 0)||[];i.push(...n),this.headers.set(t,i);break;case"d":let o=r.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(u=>o.indexOf(u)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}setHeaderEntries(r,t){let n=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>r(this.normalizedNames.get(t),this.headers.get(t)))}};var he=class{encodeKey(r){return Ve(r)}encodeValue(r){return Ve(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Dt(e,r){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,u]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],a=t.get(s)||[];a.push(u),t.set(s,a)}),t}var pt=/%(\d[a-f0-9])/gi,mt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ve(e){return encodeURIComponent(e).replace(pt,(r,t)=>mt[t]??r)}function Y(e){return`${e}`}var b=class e{constructor(r={}){if(this.updates=null,this.cloneFrom=null,this.encoder=r.encoder||new he,r.fromString){if(r.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Dt(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(t=>{let n=r.fromObject[t],i=Array.isArray(n)?n.map(Y):[Y(n)];this.map.set(t,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let t=this.map.get(r);return t?t[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,t){return this.clone({param:r,value:t,op:"a"})}appendAll(r){let t=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{t.push({param:n,value:o,op:"a"})}):t.push({param:n,value:i,op:"a"})}),this.clone(t)}set(r,t){return this.clone({param:r,value:t,op:"s"})}delete(r,t){return this.clone({param:r,value:t,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let t=this.encoder.encodeKey(r);return this.map.get(r).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(r),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let t=(r.op==="a"?this.map.get(r.param):void 0)||[];t.push(Y(r.value)),this.map.set(r.param,t);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Y(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};var fe=class{constructor(){this.map=new Map}set(r,t){return this.map.set(r,t),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};function yt(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ge(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function We(e){return typeof Blob<"u"&&e instanceof Blob}function Ye(e){return typeof FormData<"u"&&e instanceof FormData}function Et(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var N=class e{constructor(r,t,n,i){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=r.toUpperCase();let o;if(yt(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new F,this.context??=new fe,!this.params)this.params=new b,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let u=t.indexOf("?"),a=u===-1?"?":u<t.length-1?"&":"";this.urlWithParams=t+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ge(this.body)||We(this.body)||Ye(this.body)||Et(this.body)?this.body:this.body instanceof b?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ye(this.body)?null:We(this.body)?this.body.type||null:Ge(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(r={}){let t=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.transferCache??this.transferCache,s=r.body!==void 0?r.body:this.body,u=r.withCredentials??this.withCredentials,a=r.reportProgress??this.reportProgress,f=r.headers||this.headers,g=r.params||this.params,p=r.context??this.context;return r.setHeaders!==void 0&&(f=Object.keys(r.setHeaders).reduce((S,d)=>S.set(d,r.setHeaders[d]),f)),r.setParams&&(g=Object.keys(r.setParams).reduce((S,d)=>S.set(d,r.setParams[d]),g)),new e(t,n,s,{params:g,headers:f,context:p,reportProgress:a,responseType:i,withCredentials:u,transferCache:o})}},v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(v||{}),x=class{constructor(r,t=$.Ok,n="OK"){this.headers=r.headers||new F,this.status=r.status!==void 0?r.status:t,this.statusText=r.statusText||n,this.url=r.url||null,this.ok=this.status>=200&&this.status<300}},K=class e extends x{constructor(r={}){super(r),this.type=v.ResponseHeader}clone(r={}){return new e({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},U=class e extends x{constructor(r={}){super(r),this.type=v.Response,this.body=r.body!==void 0?r.body:null}clone(r={}){return new e({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},A=class extends x{constructor(r){super(r,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},$=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}($||{});function le(e,r){return{body:r,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var wt=(()=>{class e{constructor(t){this.handler=t}request(t,n,i={}){let o;if(t instanceof N)o=t;else{let a;i.headers instanceof F?a=i.headers:a=new F(i.headers);let f;i.params&&(i.params instanceof b?f=i.params:f=new b({fromObject:i.params})),o=new N(t,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:f,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let s=H(o).pipe(Ee(a=>this.handler.handle(a)));if(t instanceof N||i.observe==="events")return s;let u=s.pipe(ye(a=>a instanceof U));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe(L(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return u.pipe(L(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return u.pipe(L(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return u.pipe(L(a=>a.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new b().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,i={}){return this.request("PATCH",t,le(i,n))}post(t,n,i={}){return this.request("POST",t,le(i,n))}put(t,n,i={}){return this.request("PUT",t,le(i,n))}static{this.\u0275fac=function(n){return new(n||e)(D(B))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Ft=/^\)\]\}',?\n/,Ct="X-Request-URL";function Ke(e){if(e.url)return e.url;let r=Ct.toLocaleLowerCase();return e.headers.get(r)}var de=(()=>{class e{constructor(){this.fetchImpl=y(ge,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=y(ie)}handle(t){return new J(n=>{let i=new AbortController;return this.doRequest(t,i.signal,n).then(De,o=>n.error(new A({error:o}))),()=>i.abort()})}doRequest(t,n,i){return q(this,null,function*(){let o=this.createRequestInit(t),s;try{let d=this.fetchImpl(t.urlWithParams,X({signal:n},o));At(d),i.next({type:v.Sent}),s=yield d}catch(d){i.error(new A({error:d,status:d.status??0,statusText:d.statusText,url:t.urlWithParams,headers:d.headers}));return}let u=new F(s.headers),a=s.statusText,f=Ke(s)??t.urlWithParams,g=s.status,p=null;if(t.reportProgress&&i.next(new K({headers:u,status:g,statusText:a,url:f})),s.body){let d=s.headers.get("content-length"),M=[],c=s.body.getReader(),l=0,C,I,h=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>q(this,null,function*(){for(;;){let{done:_,value:O}=yield c.read();if(_)break;if(M.push(O),l+=O.length,t.reportProgress){I=t.responseType==="text"?(I??"")+(C??=new TextDecoder).decode(O,{stream:!0}):void 0;let pe=()=>i.next({type:v.DownloadProgress,total:d?+d:void 0,loaded:l,partialText:I});h?h.run(pe):pe()}}}));let P=this.concatChunks(M,l);try{let _=s.headers.get("Content-Type")??"";p=this.parseBody(t,P,_)}catch(_){i.error(new A({error:_,headers:new F(s.headers),status:s.status,statusText:s.statusText,url:Ke(s)??t.urlWithParams}));return}}g===0&&(g=p?$.Ok:0),g>=200&&g<300?(i.next(new U({body:p,headers:u,status:g,statusText:a,url:f})),i.complete()):i.error(new A({error:p,headers:u,status:g,statusText:a,url:f}))})}parseBody(t,n,i){switch(t.responseType){case"json":let o=new TextDecoder().decode(n).replace(Ft,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:i});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},i=t.withCredentials?"include":void 0;if(t.headers.forEach((o,s)=>n[o]=s.join(",")),n.Accept??="application/json, text/plain, */*",!n["Content-Type"]){let o=t.detectContentTypeHeader();o!==null&&(n["Content-Type"]=o)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:i}}concatChunks(t,n){let i=new Uint8Array(n),o=0;for(let s of t)i.set(s,o),o+=s.length;return i}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),ge=class{};function De(){}function At(e){e.then(De,De)}function bt(e,r){return r(e)}function vt(e,r,t){return(n,i)=>Se(t,()=>r(n,o=>e(o,i)))}var qe=new w(""),St=new w(""),Je=new w("");var Ze=(()=>{class e extends B{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=y(Re);let i=y(Je,{optional:!0});this.backend=i??t}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(qe),...this.injector.get(St,[])]));this.chain=i.reduceRight((o,s)=>vt(o,s,this.injector),bt)}let n=this.pendingTasks.add();return this.chain(t,i=>this.backend.handle(i)).pipe(we(()=>this.pendingTasks.remove(n)))}static{this.\u0275fac=function(n){return new(n||e)(D(k),D(ve))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();var _t=/^\)\]\}',?\n/;function Tt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Xe=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Q(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?me(n.\u0275loadImpl()):H(null)).pipe(Fe(()=>new J(o=>{let s=n.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((c,l)=>s.setRequestHeader(c,l.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&s.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();s.responseType=c!=="json"?c:"text"}let u=t.serializeBody(),a=null,f=()=>{if(a!==null)return a;let c=s.statusText||"OK",l=new F(s.getAllResponseHeaders()),C=Tt(s)||t.url;return a=new K({headers:l,status:s.status,statusText:c,url:C}),a},g=()=>{let{headers:c,status:l,statusText:C,url:I}=f(),h=null;l!==$.NoContent&&(h=typeof s.response>"u"?s.responseText:s.response),l===0&&(l=h?$.Ok:0);let P=l>=200&&l<300;if(t.responseType==="json"&&typeof h=="string"){let _=h;h=h.replace(_t,"");try{h=h!==""?JSON.parse(h):null}catch(O){h=_,P&&(P=!1,h={error:O,text:h})}}P?(o.next(new U({body:h,headers:c,status:l,statusText:C,url:I||void 0})),o.complete()):o.error(new A({error:h,headers:c,status:l,statusText:C,url:I||void 0}))},p=c=>{let{url:l}=f(),C=new A({error:c,status:s.status||0,statusText:s.statusText||"Unknown Error",url:l||void 0});o.error(C)},S=!1,d=c=>{S||(o.next(f()),S=!0);let l={type:v.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),t.responseType==="text"&&s.responseText&&(l.partialText=s.responseText),o.next(l)},M=c=>{let l={type:v.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),o.next(l)};return s.addEventListener("load",g),s.addEventListener("error",p),s.addEventListener("timeout",p),s.addEventListener("abort",p),t.reportProgress&&(s.addEventListener("progress",d),u!==null&&s.upload&&s.upload.addEventListener("progress",M)),s.send(u),o.next({type:v.Sent}),()=>{s.removeEventListener("error",p),s.removeEventListener("abort",p),s.removeEventListener("load",g),s.removeEventListener("timeout",p),t.reportProgress&&(s.removeEventListener("progress",d),u!==null&&s.upload&&s.upload.removeEventListener("progress",M)),s.readyState!==s.DONE&&s.abort()}})))}static{this.\u0275fac=function(n){return new(n||e)(D(G))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),He=new w(""),It="XSRF-TOKEN",Rt=new w("",{providedIn:"root",factory:()=>It}),Mt="X-XSRF-TOKEN",Pt=new w("",{providedIn:"root",factory:()=>Mt}),Z=class{},Ot=(()=>{class e{constructor(t,n,i){this.doc=t,this.platform=n,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ze(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(n){return new(n||e)(D(W),D(ne),D(Rt))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function Lt(e,r){let t=e.url.toLowerCase();if(!y(He)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return r(e);let n=y(Z).getToken(),i=y(Pt);return n!=null&&!e.headers.has(i)&&(e=e.clone({headers:e.headers.set(i,n)})),r(e)}var Qe=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Qe||{});function Nt(e,r){return{\u0275kind:e,\u0275providers:r}}function zn(...e){let r=[wt,Xe,Ze,{provide:B,useExisting:Ze},{provide:k,useExisting:Xe},{provide:qe,useValue:Lt,multi:!0},{provide:He,useValue:!0},{provide:Z,useClass:Ot}];for(let t of e)r.push(...t.\u0275providers);return be(r)}function Vn(){return Nt(Qe.Fetch,[de,{provide:k,useExisting:de},{provide:Je,useExisting:de}])}export{se as a,mn as b,Oe as c,W as d,ce as e,at as f,ze as g,yn as h,En as i,wn as j,Fn as k,Cn as l,An as m,dt as n,bn as o,ft as p,G as q,F as r,wt as s,zn as t,Vn as u};
