(this["webpackJsonploa-simp"]=this["webpackJsonploa-simp"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n.n(a),o=n(10),i=n.n(o),s=(n(18),n(3)),u=n.n(s),l=n(9),d=n(6),p=n(4),f=n(11),h=n.p+"static/media/logo.6ce24c58.svg",b=(n(20),n(12));var v=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(p.a)(o,2),s=i[0],v=i[1],j=Object(a.useState)(6e4),g=Object(p.a)(j,2),m=g[0],x=g[1],k=Object(a.useState)("Pause"),w=Object(p.a)(k,2),O=(w[0],w[1],Object(a.useRef)(null)),y=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&s.length>0&&(t=S(0,s.length-1),C(t),(n=Object(l.a)(s)).splice(t,1),v(n));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s[t];case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:r=e.sent,a=new Blob([r]),o=URL.createObjectURL(a),c(o),O.current.getApi().start();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function S(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var P=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.showDirectoryPicker();case 3:return n=e.sent,e.next=6,A(n);case 6:return r=e.sent,e.next=9,v(r.map((function(e){return e.getFile()})));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();function A(e){return W.apply(this,arguments)}function W(){return(W=Object(d.a)(u.a.mark((function e(t){var n,r,a,c,o,i,s,d,h,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=!0,a=!1,e.prev=3,o=Object(f.a)(t);case 5:return e.next=7,o.next();case 7:return i=e.sent,r=i.done,e.next=11,i.value;case 11:if(s=e.sent,r){e.next=31;break}if(d=s,h=Object(p.a)(d,2),h[0],b=h[1],b.kind,"directory"!==b.kind){e.next=27;break}return n.push(b),e.t0=n.push,e.t1=n,e.t2=l.a,e.next=22,A(b);case 22:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4),e.next=28;break;case 27:n.push(b);case 28:r=!0,e.next=5;break;case 31:e.next=37;break;case 33:e.prev=33,e.t5=e.catch(3),a=!0,c=e.t5;case 37:if(e.prev=37,e.prev=38,r||null==o.return){e.next=42;break}return e.next=42,o.return();case 42:if(e.prev=42,!a){e.next=45;break}throw c;case 45:return e.finish(42);case 46:return e.finish(37);case 47:return e.abrupt("return",n);case 48:case"end":return e.stop()}}),e,null,[[3,33,37,47],[38,,42,46]])})))).apply(this,arguments)}return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[null===n?Object(r.jsx)("img",{src:h,className:"App-logo",alt:"logo"}):Object(r.jsx)("img",{src:n,className:"random-image",alt:"logo"}),Object(r.jsx)("button",{onClick:P,children:"Pick a folder"}),Object(r.jsx)("button",{disabled:!s,onClick:function(e){y()},children:"Start"}),Object(r.jsx)("button",{disabled:!s,onClick:function(e){var t=O.current.getApi();t.isPaused()?t.start():t.pause()},children:"Pause/Unpause"}),Object(r.jsx)(b.a,{ref:O,onComplete:y,autoStart:!1,controlled:!1,date:Date.now()+m}),Object(r.jsxs)("div",{onChange:function(e){x(Number(e.target.value))},children:[Object(r.jsx)("input",{defaultChecked:3e3===m,type:"radio",value:"3000",name:"gender"})," 3s",Object(r.jsx)("input",{defaultChecked:15e3===m,type:"radio",value:"15000",name:"gender"})," 15s",Object(r.jsx)("input",{defaultChecked:3e4===m,type:"radio",value:"30000",name:"gender"})," 30s",Object(r.jsx)("input",{defaultChecked:6e4===m,type:"radio",value:"60000",name:"gender"})," 1m",Object(r.jsx)("input",{defaultChecked:12e4===m,type:"radio",value:"120000",name:"gender"})," 2m",Object(r.jsx)("input",{defaultChecked:3e5===m,type:"radio",value:"300000",name:"gender"})," 5m",Object(r.jsx)("input",{defaultChecked:6e5===m,type:"radio",value:"600000",name:"gender"})," 10m",Object(r.jsx)("input",{defaultChecked:9e5===m,type:"radio",value:"900000",name:"gender"})," 15m"]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/local-image-caroussel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/local-image-caroussel","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(t,e)}))}}(),j()}},[[23,1,2]]]);
//# sourceMappingURL=main.bdeacde6.chunk.js.map