(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(t,e,o){t.exports=o("LzkT")},"6N+0":function(t,e){},"A0++":function(t,e,o){"use strict";var n=o("TOJS"),a=o.n(n);a.a},B7yd:function(t,e){},Dl0a:function(t,e){},Hl11:function(t,e,o){},LzkT:function(t,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"setLoginStatus",function(){return nt});var a={};o.r(a),o.d(a,"getAuth",function(){return dt}),o.d(a,"createAccount",function(){return mt}),o.d(a,"login",function(){return ft}),o.d(a,"logout",function(){return ht});var i={};o.r(i),o.d(i,"setItems",function(){return vt}),o.d(i,"sortItems",function(){return yt}),o.d(i,"sortItemsRange",function(){return wt});var r={};o.r(r),o.d(r,"submitEntry",function(){return Lt}),o.d(r,"getItems",function(){return St}),o.d(r,"deleteItem",function(){return Ct}),o.d(r,"editEntry",function(){return Ft});o("rGqo"),o("SpHO"),o("oRQL"),o("0UuB"),o("FiUO"),o("Hl11"),o("fm0S");var s=o("Kw5r"),c=o("6E/o"),u=o("cFFF"),l=o("IEC1"),d=o("zxLP"),m=o("Rqni"),f=o("MqH6"),h=o("8wy3"),p=o("zmdN"),g=o("SC7v"),b=o("UrUt"),v=o("EYBb"),y=o("HlXa"),w=o("UG+o"),I=o("uNnR"),Q=o("fUOT"),k=o("lBN4"),L=o("xWPs"),S=o("23sU"),C=o("eelU"),F=o("XYut"),R=o("dkar"),U=o("ZYCo"),N=o("OggR"),T=o("3CNK"),E=o("MFSH"),H=o("bduK"),x=o("CVJq"),M=o("Jik4"),W=o("/k9t"),P=o("lhL4"),q=o("RIeW"),z=o("FSbK"),B=o("h6bs"),O=o("Ezub");s["a"].use(c["a"],{config:{},components:{QLayout:u["a"],QLayoutHeader:l["a"],QLayoutDrawer:d["a"],QPageContainer:m["a"],QPage:f["a"],QToolbar:h["a"],QToolbarTitle:p["a"],QBtn:g["a"],QIcon:b["a"],QList:v["a"],QListHeader:y["a"],QItem:w["a"],QItemMain:I["a"],QItemSide:Q["a"],QRouteTab:k["a"],QTabs:L["a"],QTab:S["a"],QField:C["a"],QInput:F["a"],QCard:R["a"],QCardTitle:U["a"],QCardMain:N["a"],QCardMedia:T["a"],QCardSeparator:E["a"],QCardActions:H["a"],QModal:x["a"],QJumbotron:M["a"],QRange:W["a"],QParallax:P["a"],QLayoutFooter:q["a"]},directives:{Ripple:z["a"],ScrollFire:B["a"]},plugins:{Notify:O["a"]}});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},J=[];A._withStripped=!0;var K={name:"App"},_=K,j=(o("A0++"),o("KHd+")),D=Object(j["a"])(_,A,J,!1,null,null,null);D.options.__file="App.vue";var V=D.exports,G=o("L2JU"),Y={tabs:[{name:"Items",link:"/items"}]},Z=o("QUHw"),$=o("B7yd"),X=o("taL5"),tt={namespaced:!0,state:Y,getters:Z,mutations:$,actions:X},et={loggedIn:!1},ot=o("6N+0");function nt(t,e){t.loggedIn=e}o("f3/d"),o("Z2Ku"),o("L9s1");var at=o("GUC0"),it=o.n(at),rt=o("vDqi"),st=o.n(rt),ct=!window.location.host.includes("localhost"),ut=ct?"//quick-gifter.herokuapp.com/":"//localhost:3000/",lt=st.a.create({baseURL:ut,timeout:4e3,withCredentials:!0});function dt(t){var e=t.commit;t.dispatch;lt("authenticate").then(function(t){null==t.data.data?(console.log("failed login"),console.log(t)):null!==t.data.data._id?(console.log("successful login"),e("setLoginStatus",!0)):console.log("login failed")}).catch(function(t){})}function mt(t,e){var o=t.commit;t.dispatch;lt.post("register",e).then(function(t){"Successfully created user account"==t.data.message?(o("setLoginStatus",!0),it()({title:"Account Created",timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){it()({title:t,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")})})):console.log("Could not login"),console.log(t)})}function ft(t,e){var o=t.commit;t.dispatch;lt.post("login",e).then(function(t){o("setLoginStatus",!0),it()({title:"Logged in as",text:t.data.data.name,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)}),console.log(t)}).catch(function(t){console.log(t)})}function ht(t){var e=t.commit;t.dispatch;lt.delete("logout").then(function(t){e("setLoginStatus",!1),it()({title:t.data.message,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)})}).catch(function(t){})}var pt={namespaced:!0,state:et,getters:ot,mutations:n,actions:a},gt={items:[],allItems:[],sort:[5,10,25,50,100],sortNum:100,sortNumMin:0,ideals:[{title:"Responsive Design - Cross Platform",body:"We make websites that look great no matter the platform.  If you have a separate mobile and desktop site, no mobile site at all, or your website just doesn't look good on all screens, we'll help you out.",icon:"statics/responsive.png"},{title:"Modern Look and Feel",body:"If your website looks like it's caught in the 90's (or 2010's) we'll bring it up to snuff.",icon:"statics/modern.png"},{title:"Upgrade From Social Media, WordPress, or online Website Builders",body:"Is your company's \"website\" on social media, or built using a tool like WordPress or Wix? It's probably time for an upgrade.  Ebenezer Websites LLC prides itself on turning these startup websites into legitimate sites that you, and your client-base, will be constantly impressed by.",icon:"statics/up.png"},{title:"Small Workload - Large Dedication",body:"We are purposefully selective about the amount of projects we take on at a time. This ensures that we can dedicate as much time as needed on your project to make it better than you ever hoped for.",icon:"statics/focus.png"}],projects:[{url:"//www.rideforhopeidaho.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827870/ebenezer/rfh.png",imgMob:"//res.cloudinary.com/treverscloud/image/upload/v1544409839/ebenezer/rfhmob.png",title:"Ride For Hope Idaho",description:"Ebenezer Websites LLC revamped, and has been maintaining, the website for Ride For Hope Idaho since the beginning of 2018.  Since taking over maintaining and updating the website, this great charity ride has seen a dramatic increase in the amount of riders signing up every year.  This local Idaho charity bike ride has been helping the underserved get the healthcare they need since 2014. If you are looking for a bike ride near Boise, or simply want to donate to a great cause, be sure to check it out."}]},bt=o("Dl0a");function vt(t,e){t.items=e,t.allItems=e,t.sortNum>0&&yt(t,t.sortNum)}function yt(t,e){t.sortNum=e;var o=[];if(t.allItems!=[]){for(var n in t.allItems)if(t.allItems.hasOwnProperty(n)){var a=t.allItems[n].cost,i=parseFloat(a);i<=e&&o.push(t.allItems[n])}t.items=o}}function wt(t,e){t.sortNum=e.max,t.sortNumMin=e.min;var o=[];if(t.allItems!=[]){for(var n in t.allItems)if(t.allItems.hasOwnProperty(n)){var a=t.allItems[n].cost,i=parseFloat(a);i<=e.max&&i>=e.min&&o.push(t.allItems[n])}t.items=o}}o("EVdn");var It=!window.location.host.includes("localhost"),Qt=It?"//quick-gifter.herokuapp.com/":"//localhost:3000/",kt=st.a.create({baseURL:Qt+"api/",timeout:4e3,withCredentials:!0});function Lt(t,e){t.commit,t.dispatch;kt.post("items",e).then(function(t){console.log("res",t)}).catch(function(t){console.error("eerrrroror",t)})}function St(t){var e=t.commit;t.dispatch;kt("items").then(function(t){e("setItems",t.data.data)}).catch(function(t){console.log("eerrrroror",t)})}function Ct(t,e){t.commit;var o=t.dispatch;kt.delete("items/".concat(e)).then(function(t){console.log("delete",t),o("getItems")}).catch(function(t){console.error(t)})}function Ft(t,e){t.commit;var o=t.dispatch;kt.put("items/".concat(e._id),e).then(function(t){o("getItems")}).catch(function(t){console.error(t)})}var Rt={namespaced:!0,state:gt,getters:bt,mutations:i,actions:r};s["a"].use(G["a"]);var Ut=function(){var t=new G["a"].Store({modules:{tabs:tt,auth:pt,items:Rt}});return t},Nt=o("jE9Z"),Tt=[{path:"/",component:function(){return o.e(2).then(o.bind(null,"8kEK"))},children:[{path:"",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/about",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/work",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/contact",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}}]}];Tt.push({path:"*",component:function(){return o.e(3).then(o.bind(null,"5R6h"))}});var Et=Tt;s["a"].use(Nt["a"]);var Ht=function(){var t=new Nt["a"]({scrollBehavior:function(){return{y:0}},routes:Et,mode:"hash",base:""});return t},xt=function(){var t="function"===typeof Ut?Ut():Ut,e="function"===typeof Ht?Ht({store:t}):Ht;t.$router=e;var o={el:"#q-app",router:e,store:t,render:function(t){return t(V)}};return{app:o,store:t,router:e}},Mt=function(t){var e=t.Vue;e.prototype.$axios=st.a},Wt=xt(),Pt=Wt.app,qt=Wt.store,zt=Wt.router;[Mt].forEach(function(t){t({app:Pt,router:zt,store:qt,Vue:s["a"],ssrContext:null})}),new s["a"](Pt)},QUHw:function(t,e){},TOJS:function(t,e,o){},fm0S:function(t,e,o){},taL5:function(t,e){}},[[0,5,4]]]);