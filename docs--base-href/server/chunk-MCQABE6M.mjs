import './polyfills.server.mjs';
import{c as ut,d as K,f as j,g as S,h as Q}from"./chunk-GTSSCL6B.mjs";import{g as lt}from"./chunk-N53UO32Q.mjs";import{$ as V,Db as m,Fb as _,Ja as at,Ka as k,Kb as q,Pa as a,Qa as g,R as M,Ta as rt,U as nt,W as C,Wa as L,X as b,Za as w,_b as N,da as ot,db as x,e as f,eb as D,fb as r,gb as O,ib as d,ja as P,ka as Z,na as E,nb as u,ob as p,pb as A,pc as U,qb as z,rb as G,sb as $,tb as ct,ub as R,vb as c,xc as J}from"./chunk-7VOAPGUD.mjs";import{a as l,b as T}from"./chunk-VVCT4QZE.mjs";var ht=["toast-component",""];function _t(s,n){if(s&1){let t=$();u(0,"button",5),R("click",function(){P(t);let i=c();return Z(i.remove())}),u(1,"span",6),m(2,"\xD7"),p()()}}function Tt(s,n){if(s&1&&(z(0),m(1),G()),s&2){let t=c(2);a(),_("[",t.duplicatesCount+1,"]")}}function Ct(s,n){if(s&1&&(u(0,"div"),m(1),x(2,Tt,2,1,"ng-container",4),p()),s&2){let t=c();d(t.options.titleClass),D("aria-label",t.title),a(),_(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function bt(s,n){if(s&1&&A(0,"div",7),s&2){let t=c();d(t.options.messageClass),r("innerHTML",t.message,k)}}function yt(s,n){if(s&1&&(u(0,"div",8),m(1),p()),s&2){let t=c();d(t.options.messageClass),D("aria-label",t.message),a(),_(" ",t.message," ")}}function It(s,n){if(s&1&&(u(0,"div"),A(1,"div",9),p()),s&2){let t=c();a(),O("width",t.width()+"%")}}function wt(s,n){if(s&1){let t=$();u(0,"button",5),R("click",function(){P(t);let i=c();return Z(i.remove())}),u(1,"span",6),m(2,"\xD7"),p()()}}function xt(s,n){if(s&1&&(z(0),m(1),G()),s&2){let t=c(2);a(),_("[",t.duplicatesCount+1,"]")}}function Dt(s,n){if(s&1&&(u(0,"div"),m(1),x(2,xt,2,1,"ng-container",4),p()),s&2){let t=c();d(t.options.titleClass),D("aria-label",t.title),a(),_(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function Ot(s,n){if(s&1&&A(0,"div",7),s&2){let t=c();d(t.options.messageClass),r("innerHTML",t.message,k)}}function At(s,n){if(s&1&&(u(0,"div",8),m(1),p()),s&2){let t=c();d(t.options.messageClass),D("aria-label",t.message),a(),_(" ",t.message," ")}}function Rt(s,n){if(s&1&&(u(0,"div"),A(1,"div",9),p()),s&2){let t=c();a(),O("width",t.width()+"%")}}var W=class{_attachedHost;component;viewContainerRef;injector;constructor(n,t){this.component=n,this.injector=t}attach(n,t){return this._attachedHost=n,n.attach(this,t)}detach(){let n=this._attachedHost;if(n)return this._attachedHost=void 0,n.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},X=class{_attachedPortal;_disposeFn;attach(n,t){return this._attachedPortal=n,this.attachComponentPortal(n,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(n){this._disposeFn=n}},Y=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new f;_activate=new f;_manualClose=new f;_resetTimeout=new f;_countDuplicate=new f;constructor(n){this._overlayRef=n}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(n,t){n&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},y=class{toastId;config;message;title;toastType;toastRef;_onTap=new f;_onAction=new f;constructor(n,t,e,i,o,h){this.toastId=n,this.config=t,this.message=e,this.title=i,this.toastType=o,this.toastRef=h,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(n){this._onAction.next(n)}onAction(){return this._onAction.asObservable()}},dt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},pt=new nt("ToastConfig"),tt=class extends X{_hostDomElement;_componentFactoryResolver;_appRef;constructor(n,t,e){super(),this._hostDomElement=n,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(n,t){let e=this._componentFactoryResolver.resolveComponentFactory(n.component),i;return i=e.create(n.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Ht=(()=>{class s{_document=b(U);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=M({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),et=class{_portalHost;constructor(n){this._portalHost=n}attach(n,t=!0){return this._portalHost.attach(n,t)}detach(){return this._portalHost.detach()}},Mt=(()=>{class s{_overlayContainer=b(Ht);_componentFactoryResolver=b(rt);_appRef=b(N);_document=b(U);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(t),i.classList.add("toast-container"),e?e.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(t){return new tt(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new et(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=M({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),mt=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,i,o,h){this.overlay=e,this._injector=i,this.sanitizer=o,this.ngZone=h,this.toastrConfig=l(l({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=l(l({},t.default.iconClasses),t.config.iconClasses))}show(t,e,i={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(i))}success(t,e,i={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}error(t,e,i={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}info(t,e,i={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}warning(t,e,i={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(t="",e="",i,o){let{includeTitleDuplicates:h}=this.toastrConfig;for(let v of this.toasts){let H=h&&v.title===t;if((!h||H)&&v.message===e)return v.toastRef.onDuplicate(i,o),v}return null}applyConfig(t={}){return l(l({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,i,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,i,o)):this._buildNotification(t,e,i,o)}_buildNotification(t,e,i,o){if(!o.toastComponent)throw new Error("toastComponent required");let h=this.findDuplicate(i,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||e)&&this.toastrConfig.preventDuplicates&&h!==null)return h;this.previousToastMessage=e;let v=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(v=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let H=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let it=e;e&&o.enableHtml&&(it=this.sanitizer.sanitize(at.HTML,e));let I=new Y(H),B=new y(this.index,o,it,i,t,I),ft=[{provide:y,useValue:B}],vt=E.create({providers:ft,parent:this._injector}),gt=new W(o.toastComponent,vt),st=H.attach(gt,o.newestOnTop);I.componentInstance=st.instance;let F={toastId:this.index,title:i||"",message:e||"",toastRef:I,onShown:I.afterActivate(),onHidden:I.afterClosed(),onTap:B.onTap(),onAction:B.onAction(),portal:st};return v||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{F.toastRef.activate()})),this.toasts.push(F),F}static \u0275fac=function(e){return new(e||s)(C(pt),C(Mt),C(E),C(lt),C(L))};static \u0275prov=M({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Et=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.ngZone=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=w({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>T(l({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>T(l({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>T(l({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||s)(g(mt),g(y),g(L))};static \u0275cmp=V({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,i){e&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(ct("@flyInOut",i._state),d(i.toastClasses),O("display",i.displayStyle))},standalone:!0,features:[q],attrs:ht,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&x(0,_t,3,0,"button",0)(1,Ct,3,5,"div",1)(2,bt,1,3,"div",2)(3,yt,2,4,"div",3)(4,It,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[J],encapsulation:2,data:{animation:[ut("flyInOut",[S("inactive",j({opacity:0})),S("active",j({opacity:1})),S("removed",j({opacity:0})),Q("inactive => active",K("{{ easeTime }}ms {{ easing }}")),Q("active => removed",K("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),Nt=T(l({},dt),{toastComponent:Et}),Yt=(s={})=>ot([{provide:pt,useValue:{default:Nt,config:s}}]);var jt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=w("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.appRef=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(g(mt),g(y),g(N))};static \u0275cmp=V({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,i){e&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(d(i.toastClasses),O("display",i.displayStyle))},standalone:!0,features:[q],attrs:ht,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&x(0,wt,3,0,"button",0)(1,Dt,3,5,"div",1)(2,Ot,1,3,"div",2)(3,At,2,4,"div",3)(4,Rt,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[J],encapsulation:2,changeDetection:0})}return s})(),te=T(l({},dt),{toastComponent:jt});export{mt as a,Yt as b};
