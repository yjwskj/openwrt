(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{D46e:function(e,a,t){e.exports={header:"_3PCSxT0l14",list:"_1yYRIyvlRd",proxy:"_1OcDlvlM5R",proxySelectable:"_3oAxPKtZFv"}},FWZb:function(e,a,t){e.exports={proxy:"NpfXwxWAxo",now:"_2zD7drviYH",error:"_2bylJNYYdN",proxyType:"_1rVl-Kdmss",proxyName:"_3kdi5nima5",proxyLatencyWrap:"_12JM32OJa5",proxySmall:"_3NpxWygDxO"}},L5YO:function(e,a,t){e.exports={group:"_1myfcMimT9"}},RbL9:function(e,a,t){e.exports={proxyLatency:"_2V-RqIAl7n"}},wyCT:function(e,a,t){"use strict";t.r(a);t("2B1R"),t("DQNa");var n=t("q1tI"),r=t.n(n),c=t("WfPo"),i=t("DKqX"),o=(t("sMBO"),t("rePB")),l=t("TSYQ"),s=t.n(l),u=t("RbL9"),m=t.n(u);function p(e){var a=e.number,t=e.color;return r.a.createElement("span",{className:m.a.proxyLatency,style:{color:t}},r.a.createElement("span",null,a," ms"))}var d=t("HGr0"),f=t("FWZb"),v=t.n(f),b=r.a.useMemo,y={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.number;e.error;return a<200?y.good:a<400?y.normal:"number"==typeof a?y.bad:y.na}var x=function(e,a){var t=a.name,n=Object(d.c)(e),r=Object(d.b)(e);return{proxy:n[t],latency:r[t]}},O=Object(c.a)(x)((function(e){var a,t=e.now,n=e.name,c=e.proxy,i=e.latency,l=b((function(){return E(i)}),[i]);return r.a.createElement("div",{className:s()(v.a.proxy,(a={},Object(o.a)(a,v.a.now,t),Object(o.a)(a,v.a.error,i&&i.error),a))},r.a.createElement("div",{className:v.a.proxyName},n),r.a.createElement("div",{className:v.a.proxyType,style:{opacity:t?.6:.2}},c.type),r.a.createElement("div",{className:v.a.proxyLatencyWrap},i&&i.number?r.a.createElement(p,{number:i.number,color:l}):null))})),h=Object(c.a)(x)((function(e){var a=e.now,t=(e.name,e.proxy,e.latency),n=b((function(){return E(t)}),[t]);return r.a.createElement("div",{className:s()(v.a.proxySmall,Object(o.a)({},v.a.now,a)),style:{backgroundColor:n}})})),w=t("riol"),j=t("D46e"),N=t.n(j),g=r.a.memo,k=r.a.useCallback,C=r.a.useMemo;function _(e){var a=e.all,t=e.now,n=e.isSelectable,c=e.itemOnTapCallback;return r.a.createElement("div",{className:N.a.list},a.map((function(e){var a=s()(N.a.proxy,Object(o.a)({},N.a.proxySelectable,n));return r.a.createElement("div",{className:a,key:e,onClick:function(){n&&c&&c(e)}},r.a.createElement(O,{name:e,now:e===t}))})))}function A(e){var a=e.all,t=e.now,n=e.isSelectable,c=e.itemOnTapCallback;return r.a.createElement("div",{className:N.a.list},a.map((function(e){var a=s()(N.a.proxy,Object(o.a)({},N.a.proxySelectable,n));return r.a.createElement("div",{className:a,key:e,onClick:function(){n&&c&&c(e)}},r.a.createElement(h,{name:e,now:e===t}))})))}var D=g((function(e){var a=e.name,t=e.proxies,n=e.apiConfig,c=e.dispatch,i=t[a],o=i.all,l=i.type,s=i.now,u=C((function(){return"Selector"===l}),[l]),m=k((function(e){u&&c(Object(d.i)(n,a,e))}),[n,c,a,u]);return r.a.createElement("div",{className:N.a.group},r.a.createElement("div",{className:N.a.header},r.a.createElement(w.b,{name:a,type:i.type})),r.a.createElement(_,{all:o,now:s,isSelectable:u,itemOnTapCallback:m}))})),S=t("5Wrh"),L=t("ySHw"),P=t("o0o1"),T=t.n(P),R=(t("ls82"),t("HaE+")),M=t("ODXe"),W=t("j7o3"),F=t("OAQO"),Y=t("FVam"),H=t("bdgK"),Z=t("ZMKu"),q=t("OADI"),z=t("x5hA"),J=t.n(z),K=r.a.memo,V=r.a.useState,B=r.a.useRef,I=r.a.useEffect,Q=r.a.useCallback;var X={rest:{scale:1},pressed:{scale:.95}},G={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function U(){return r.a.createElement(Z.a.div,{className:J.a.refresh,variants:X,initial:"rest",whileHover:"hover",whileTap:"pressed"},r.a.createElement(Z.a.div,{className:"flexCenter",variants:G},r.a.createElement(F.a,{size:16})))}var $={initialOpen:{height:"auto",transition:{duration:0}},open:function(e){return{height:e,opacity:1,visibility:"visible",transition:{duration:.3}}},closed:{height:0,opacity:0,visibility:"hidden",transition:{duration:.3}}},ee={open:{x:0},closed:{x:20}},ae=K((function(e){var a,t,n=e.children,c=e.isOpen,i=(a=c,t=B(),I((function(){t.current=a}),[a]),t.current),o=function(){var e=B(),a=V({height:0}),t=Object(M.a)(a,2),n=t[0],r=t[1];return I((function(){var a=new H.a((function(e){var a=Object(M.a)(e,1)[0];return r(a.contentRect)}));return e.current&&a.observe(e.current),function(){return a.disconnect()}}),[]),[e,n]}(),l=Object(M.a)(o,2),s=l[0],u=l[1].height;return r.a.createElement("div",null,r.a.createElement(Z.a.div,{animate:c&&i===c?"initialOpen":c?"open":"closed",custom:u,variants:$},r.a.createElement(Z.a.div,{variants:ee,ref:s},n)))})),te=Object(c.a)((function(e){return{apiConfig:Object(q.b)(e)}}))((function(e){var a=e.item,t=e.dispatch,n=e.apiConfig,c=V(!1),i=Object(M.a)(c,2),l=i[0],u=i[1],m=Q((function(){return t(Object(d.j)(n,a.name))}),[n,t,a.name]),p=Q(Object(R.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(Object(d.f)(n,a.name));case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),[n,t,a.name,u]),f=V(!1),v=Object(M.a)(f,2),b=v[0],y=v[1],E=Q((function(){return y((function(e){return!e}))}),[]),x=Object(Y.a)(new Date(a.updatedAt),new Date);return r.a.createElement("div",{className:J.a.body},r.a.createElement("div",{className:J.a.header,onClick:E},r.a.createElement(w.b,{name:a.name,type:a.vehicleType}),r.a.createElement(S.a,{kind:"minimal"},r.a.createElement("span",{className:s()(J.a.arrow,Object(o.a)({},J.a.isOpen,b))},r.a.createElement(W.a,null)))),r.a.createElement("div",{className:J.a.updatedAt},r.a.createElement("small",null,"Updated ",x," ago")),r.a.createElement(ae,{isOpen:b},r.a.createElement(_,{all:a.proxies}),r.a.createElement("div",{className:J.a.actionFooter},r.a.createElement(S.a,{text:"Update",start:r.a.createElement(U,null),onClick:m}),r.a.createElement(S.a,{text:"Health Check",start:r.a.createElement(L.a,{size:16}),onClick:p,isLoading:l}))),r.a.createElement(ae,{isOpen:!b},r.a.createElement(A,{all:a.proxies})))}));var ne=function(e){var a=e.items;return 0===a.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Proxy Provider"}),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(te,{key:e.name,item:e})}))))},re=t("L5YO"),ce=t.n(re),ie=r.a.useEffect,oe=r.a.useMemo,le=r.a.useCallback,se=r.a.useRef;a.default=Object(c.a)((function(e){return{apiConfig:Object(q.b)(e),groupNames:Object(d.d)(e),proxies:Object(d.c)(e),proxyProviders:Object(d.e)(e),delay:Object(d.b)(e)}}))((function(e){var a=e.dispatch,t=e.groupNames,n=e.proxies,c=e.delay,o=e.proxyProviders,l=e.apiConfig,s=se({}),u=le((function(){return a(Object(d.h)(l))}),[l,a]),m=le((function(){s.current.startAt=new Date,a(Object(d.a)(l)).then((function(){s.current.completeAt=new Date}))}),[l,a]);ie((function(){m();var e=function(){s.current.startAt&&new Date-s.current.startAt>3e4&&m()};return window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[m]);var p=oe((function(){return r.a.createElement(L.a,{width:16})}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Proxies"}),r.a.createElement("div",null,r.a.createElement("div",{className:"fabgrp"},r.a.createElement(S.a,{text:"Test Latency",start:p,onClick:u})),t.map((function(e){return r.a.createElement("div",{className:ce.a.group,key:e},r.a.createElement(D,{name:e,proxies:n,delay:c,apiConfig:l,dispatch:a}))}))),r.a.createElement(ne,{items:o}),r.a.createElement("div",{style:{height:60}}))}))},x5hA:function(e,a,t){e.exports={header:"_1cq9WGaZ9s",arrow:"_1cAwPwoPmt",isOpen:"sDt5qh1OfE",updatedAt:"_3GVE9k27aM",body:"_1PV2l5z2zN",actionFooter:"_1b5XrAhEUm",refresh:"_2t6Q6BkZ73"}}}]);