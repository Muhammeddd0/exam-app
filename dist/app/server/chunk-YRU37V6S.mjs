import './polyfills.server.mjs';
import{a as R}from"./chunk-FRTZWDYA.mjs";import{d as P,r as I}from"./chunk-FJMOK6PL.mjs";import{$a as L,Hb as E,Ia as w,L as C,Q as b,T as y,U as x,V as F,W,_a as A,ia as T,kb as O,na as H}from"./chunk-ERDLPLLR.mjs";var v=(()=>{class r{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let i=e.trim().split(" ");for(let n=0;n<i.length;n++)t.classList.add(i[n])}else{let i=e.split(" ");for(let n=0;n<i.length;n++)t.className+=" "+i[n]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(t,n)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var n=0;n<e.length;n++){if(e[n]==t)return i;e[n].nodeType==1&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],n=0;for(var s=0;s<i.length;s++){if(i[s]==t)return n;i[s].attributes&&i[s].attributes[e]&&i[s].nodeType==1&&n++}return-1}static appendOverlay(t,e,i="self"){i!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,i="self",n=!0){t&&e&&(n&&(t.style.minWidth=`${r.getOuterWidth(e)}px`),i==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,i=!0){let n=m=>{if(m)return getComputedStyle(m).getPropertyValue("position")==="relative"?m:n(m.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=e.offsetHeight??e.getBoundingClientRect().height,l=e.getBoundingClientRect(),u=this.getWindowScrollTop(),a=this.getWindowScrollLeft(),d=this.getViewport(),c=n(t)?.getBoundingClientRect()||{top:-1*u,left:-1*a},h,g;l.top+o+s.height>d.height?(h=l.top-c.top-s.height,t.style.transformOrigin="bottom",l.top+h<0&&(h=-1*l.top)):(h=o+l.top-c.top,t.style.transformOrigin="top");let S=l.left+s.width-d.width,D=l.left-c.left;s.width>d.width?g=(l.left-c.left)*-1:S>0?g=D-S:g=l.left-c.left,t.style.top=h+"px",t.style.left=g+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,e,i=!0){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=n.height,o=n.width,l=e.offsetHeight??e.getBoundingClientRect().height,u=e.offsetWidth??e.getBoundingClientRect().width,a=e.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),c=this.getViewport(),h,g;a.top+l+s>c.height?(h=a.top+d-s,t.style.transformOrigin="bottom",h<0&&(h=d)):(h=l+a.top+d,t.style.transformOrigin="top"),a.left+o>c.width?g=Math.max(0,a.left+f+u-o):g=a.left+f,t.style.top=h+"px",t.style.left=g+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t),n=/(auto|scroll)/,s=o=>{let l=window.getComputedStyle(o,null);return n.test(l.getPropertyValue("overflow"))||n.test(l.getPropertyValue("overflowX"))||n.test(l.getPropertyValue("overflowY"))};for(let o of i){let l=o.nodeType===1&&o.dataset.scrollselectors;if(l){let u=l.split(",");for(let a of u){let d=this.findSingle(o,a);d&&s(d)&&e.push(d)}}o.nodeType!==9&&s(o)&&e.push(o)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,l=t.getBoundingClientRect(),a=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-o,d=t.scrollTop,f=t.clientHeight,c=this.getOuterHeight(e);a<0?t.scrollTop=d+a:a+c>f&&(t.scrollTop=d+a-f+c)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,n=0,s=function(){n=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/e,t.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,e){var i=1,n=50,s=e,o=n/s;let l=setInterval(()=>{i=i-o,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},n)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return n.call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,n=e.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||n.clientWidth,o=t.innerHeight||i.clientHeight||n.clientHeight;return{width:s,height:o}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var i=t.indexOf("Trident/");if(i>0){var n=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let i=this.find(t,this.getFocusableSelectorString(e)),n=[];for(let s of i){let o=getComputedStyle(s);this.isVisible(s)&&o.display!="none"&&o.visibility!="hidden"&&n.push(s)}return n}static getFocusableElement(t,e=""){let i=this.findSingle(t,this.getFocusableSelectorString(e));if(i){let n=getComputedStyle(i);if(this.isVisible(i)&&n.display!="none"&&n.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,e=""){let i=this.getFocusableElements(t,e);return i.length>0?i[0]:null}static getLastFocusableElement(t,e){let i=this.getFocusableElements(t,e);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,e=!1){let i=r.getFocusableElements(t),n=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);e?s==-1||s===0?n=i.length-1:n=s-1:s!=-1&&s!==i.length-1&&(n=s+1)}return i[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let i=t.getAttribute(e);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...i){if(t){let n=document.createElement(t);return this.setAttributes(n,e),n.append(...i),n}}static setAttribute(t,e="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}static setAttributes(t,e={}){if(this.isElement(t)){let i=(n,s)=>{let o=t?.$attrs?.[n]?[t?.$attrs?.[n]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let a=typeof u;if(a==="string"||a==="number")l.push(u);else if(a==="object"){let d=Array.isArray(u)?i(n,u):Object.entries(u).map(([f,c])=>n==="style"&&(c||c===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${c}`:c?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},o)};Object.entries(e).forEach(([n,s])=>{if(s!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),s):n==="pBind"?this.setAttributes(t,s):(s=n==="class"?[...new Set(i("class",s))].join(" ").trim():n==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=s),t.setAttribute(n,s))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return r})(),$=class{element;listener;scrollableParents;constructor(p,t=()=>{}){this.element=p,this.listener=t}bindScrollListener(){this.scrollableParents=v.getScrollableParents(this.element);for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var X=(()=>{class r{autofocus=!1;focused=!1;platformId=b(H);document=b(P);host=b(T);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){I(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=v.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=function(e){return new(e||r)};static \u0275dir=W({type:r,selectors:[["","pAutoFocus",""]],hostAttrs:[1,"p-element"],inputs:{autofocus:[y.HasDecoratorInputTransform,"autofocus","autofocus",E]},standalone:!0,features:[w]})}return r})(),Y=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=F({type:r});static \u0275inj=C({})}return r})();var M=["*"],et=(()=>{class r{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let t=R.isEmpty(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=x({type:r,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:[y.HasDecoratorInputTransform,"spin","spin",E],styleClass:"styleClass"},standalone:!0,features:[w,O],ngContentSelectors:M,decls:1,vars:0,template:function(e,i){e&1&&(A(),L(0))},encapsulation:2,changeDetection:0})}return r})();export{v as a,$ as b,et as c,X as d,Y as e};