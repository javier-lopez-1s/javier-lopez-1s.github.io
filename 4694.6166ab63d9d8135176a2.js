(self.webpackChunkirish_rail=self.webpackChunkirish_rail||[]).push([[4694],{5310:(e,n,t)=>{"use strict";var i;t.d(n,{xz:()=>o,Uw:()=>a,fo:()=>l}),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global,function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(i||(i={}));class o extends Error{constructor(e,n){super(e),this.message=e,this.code=n}}const r=e=>{var n,t;return(null==e?void 0:e.androidBridge)?"android":(null===(t=null===(n=null==e?void 0:e.webkit)||void 0===n?void 0:n.messageHandlers)||void 0===t?void 0:t.bridge)?"ios":"web"},s=(e=>e.Capacitor=(e=>{var n,t,s,l,a;const d=e.Capacitor||{},c=d.Plugins=d.Plugins||{},u=e.CapacitorPlatforms,g=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.getPlatform)||(()=>r(e)),v=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==r(e)),p=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.isPluginAvailable)||(e=>{const n=m.get(e);return!!(null==n?void 0:n.platforms.has(g()))||!!f(e)}),f=(null===(l=null==u?void 0:u.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(e=>{var n;return null===(n=d.PluginHeaders)||void 0===n?void 0:n.find(n=>n.name===e)}),m=new Map,w=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((e,n={})=>{const t=m.get(e);if(t)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),t.proxy;const r=g(),s=f(e);let l;const a=t=>{let a;const c=(...c)=>{const u=(async()=>(!l&&r in n&&(l=l="function"==typeof n[r]?await n[r]():n[r]),l))().then(n=>{const l=((n,t)=>{var l,a;if(!s){if(n)return null===(a=n[t])||void 0===a?void 0:a.bind(n);throw new o(`"${e}" plugin is not implemented on ${r}`,i.Unimplemented)}{const i=null==s?void 0:s.methods.find(e=>t===e.name);if(i)return"promise"===i.rtype?n=>d.nativePromise(e,t.toString(),n):(n,i)=>d.nativeCallback(e,t.toString(),n,i);if(n)return null===(l=n[t])||void 0===l?void 0:l.bind(n)}})(n,t);if(l){const e=l(...c);return a=null==e?void 0:e.remove,e}throw new o(`"${e}.${t}()" is not implemented on ${r}`,i.Unimplemented)});return"addListener"===t&&(u.remove=async()=>a()),u};return c.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(c,"name",{value:t,writable:!1,configurable:!1}),c},u=a("addListener"),v=a("removeListener"),p=(e,n)=>{const t=u({eventName:e},n),i=async()=>{const i=await t;v({eventName:e,callbackId:i},n)},o=new Promise(e=>t.then(()=>e({remove:i})));return o.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},o},w=new Proxy({},{get(e,n){switch(n){case"$$typeof":return;case"addListener":return s?p:u;case"removeListener":return v;default:return a(n)}}});return c[e]=w,m.set(e,{name:e,proxy:w,platforms:new Set([...Object.keys(n),...s?[r]:[]])}),w});return d.convertFileSrc||(d.convertFileSrc=e=>e),d.getPlatform=g,d.handleError=n=>e.console.error(n),d.isNativePlatform=v,d.isPluginAvailable=p,d.pluginMethodNoop=(e,n,t)=>Promise.reject(`${t} does not have an implementation of "${n}".`),d.registerPlugin=w,d.Exception=o,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),l=s.registerPlugin;class a{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const t=this.windowListeners[e];t&&!t.registered&&this.addWindowListener(t);const i=async()=>this.removeListener(e,n),o=Promise.resolve({remove:i});return Object.defineProperty(o,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()}}),o}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n){const t=this.listeners[e];t&&t.forEach(e=>e(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:e=>{this.notifyListeners(n,e)}}}unimplemented(e="not implemented"){return new s.Exception(e,i.Unimplemented)}unavailable(e="not available"){return new s.Exception(e,i.Unavailable)}async removeListener(e,n){const t=this.listeners[e];if(!t)return;const i=t.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},4694:(e,n,t)=>{"use strict";t.r(n),t.d(n,{SearchPageModule:()=>v});var i=t(1116),o=t(1462),r=t(8809),s=t(9185),l=t(5614),a=t(1222);function d(e,n){1&e&&l._UZ(0,"div")}function c(e,n){1&e&&(l.TgZ(0,"ion-chip",14),l.TgZ(1,"ion-label"),l._uU(2,"Offline"),l.qZA(),l.qZA())}const u=[{path:"",component:(()=>{class e{constructor(e,n){this.networkService=e,this.router=n,this.online$=this.networkService.online$}ngOnInit(){}search(){this.router.navigate(["tabs/search/results"],{state:{results:[{name:"Sligo/Longford Service",type:"Route",properties:[{key:"First stop",value:"Sligo"},{key:"Last stop",value:"Longford"},{key:"Length",value:"154 km"}]},{name:"Tralee Service",type:"Stop",properties:[{key:"First stop",value:"Coolmine"},{key:"Last stop",value:"Castleknock"},{key:"Length",value:"75 km"}]},{name:"Westport Service",type:"Bridge",properties:[{key:"First stop",value:"Westport"},{key:"Last stop",value:"Dublin"},{key:"Length",value:"120 km"}]}]}})}}return e.\u0275fac=function(n){return new(n||e)(l.Y36(a.S),l.Y36(s.F0))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-search"]],decls:42,vars:4,consts:[["slot","start"],["slot","end"],[4,"ngIf","ngIfElse"],["offline",""],["position","floating"],["value","b"],["value","a"],["value","m"],["value","p"],["value","s"],["value","t"],[1,"ion-align-items-center"],["size","6","offset","3","size-sm","4","offset-sm","4","size-md","2","offset-md","5"],["expand","block","fill","outline","size","small",3,"click"],["color","warning"]],template:function(e,n){if(1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l._UZ(3,"ion-menu-button"),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Search"),l.qZA(),l.TgZ(6,"ion-buttons",1),l.YNc(7,d,1,0,"div",2),l.ALo(8,"async"),l.YNc(9,c,3,0,"ng-template",null,3,l.W1O),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-content"),l.TgZ(12,"ion-list"),l.TgZ(13,"ion-item"),l.TgZ(14,"ion-label",4),l._uU(15,"Type"),l.qZA(),l.TgZ(16,"ion-select"),l.TgZ(17,"ion-select-option",5),l._uU(18,"Bridge"),l.qZA(),l.TgZ(19,"ion-select-option",6),l._uU(20,"Maintenance Access Point"),l.qZA(),l.TgZ(21,"ion-select-option",7),l._uU(22,"Milepost"),l.qZA(),l.TgZ(23,"ion-select-option",8),l._uU(24,"Platform"),l.qZA(),l.TgZ(25,"ion-select-option",9),l._uU(26,"Signal"),l.qZA(),l.TgZ(27,"ion-select-option",10),l._uU(28,"Tunnel"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(29,"ion-item"),l.TgZ(30,"ion-label"),l._uU(31,"Toggle"),l.qZA(),l._UZ(32,"ion-toggle",1),l.qZA(),l.TgZ(33,"ion-item"),l.TgZ(34,"ion-label",4),l._uU(35,"Floating Input"),l.qZA(),l._UZ(36,"ion-input"),l.qZA(),l.qZA(),l.TgZ(37,"ion-grid"),l.TgZ(38,"ion-row",11),l.TgZ(39,"ion-col",12),l.TgZ(40,"ion-button",13),l.NdJ("click",function(){return n.search()}),l._uU(41,"Search"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){const e=l.MAs(10);l.xp6(7),l.Q6J("ngIf",l.lcZ(8,2,n.online$))("ngIfElse",e)}},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,i.O5,r.W2,r.q_,r.Ie,r.Q$,r.t9,r.QI,r.n0,r.ho,r.w,r.pK,r.j9,r.jY,r.Nd,r.wI,r.YG,r.hM],pipes:[i.Ov],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,o.u5,r.Pc,g]]}),e})()},1222:(e,n,t)=>{"use strict";t.d(n,{S:()=>s});const i=(0,t(5310).fo)("Network",{web:()=>t.e(5842).then(t.bind(t,5842)).then(e=>new e.NetworkWeb)});var o=t(8512),r=t(5614);let s=(()=>{class e{constructor(){this.onlineSubject=new o.X(!1),i.addListener("networkStatusChange",e=>this.onlineSubject.next(e.connected)),i.getStatus().then(e=>this.onlineSubject.next(e.connected))}get online$(){return this.onlineSubject.asObservable()}ngOnDestroy(){i.removeAllListeners()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);