(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(t,e,n){t.exports=n("LzkT")},"6N+0":function(t,e){},"A0++":function(t,e,n){"use strict";var o=n("TOJS"),a=n.n(o);a.a},B7yd:function(t,e){},Dl0a:function(t,e){},HGpm:function(t,e){},HQuA:function(t,e){},Hl11:function(t,e,n){},LzkT:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"setLoginStatus",function(){return rt});var a={};n.r(a),n.d(a,"sendEmail",function(){return ht}),n.d(a,"getAuth",function(){return pt}),n.d(a,"createAccount",function(){return gt}),n.d(a,"login",function(){return bt}),n.d(a,"logout",function(){return vt});var i={};n.r(i),n.d(i,"setItems",function(){return Qt}),n.d(i,"sortItems",function(){return Lt}),n.d(i,"sortItemsRange",function(){return kt});var r={};n.r(r),n.d(r,"submitEntry",function(){return Rt}),n.d(r,"getItems",function(){return Ut}),n.d(r,"deleteItem",function(){return Ft}),n.d(r,"editEntry",function(){return Ht});var s={};n.r(s),n.d(s,"sendEmail",function(){return Wt});n("rGqo"),n("SpHO"),n("oRQL"),n("0UuB"),n("FiUO"),n("Hl11"),n("fm0S");var c=n("Kw5r"),u=n("6E/o"),l=n("cFFF"),d=n("IEC1"),m=n("zxLP"),f=n("Rqni"),h=n("MqH6"),p=n("8wy3"),g=n("zmdN"),b=n("SC7v"),v=n("UrUt"),y=n("EYBb"),w=n("HlXa"),I=n("UG+o"),Q=n("uNnR"),L=n("fUOT"),k=n("lBN4"),S=n("xWPs"),C=n("23sU"),E=n("eelU"),R=n("XYut"),U=n("dkar"),F=n("ZYCo"),H=n("OggR"),M=n("3CNK"),N=n("MFSH"),T=n("bduK"),x=n("CVJq"),P=n("Jik4"),A=n("/k9t"),O=n("lhL4"),W=n("RIeW"),z=n("FSbK"),B=n("h6bs"),j=n("Ezub");c["a"].use(u["a"],{config:{},components:{QLayout:l["a"],QLayoutHeader:d["a"],QLayoutDrawer:m["a"],QPageContainer:f["a"],QPage:h["a"],QToolbar:p["a"],QToolbarTitle:g["a"],QBtn:b["a"],QIcon:v["a"],QList:y["a"],QListHeader:w["a"],QItem:I["a"],QItemMain:Q["a"],QItemSide:L["a"],QRouteTab:k["a"],QTabs:S["a"],QTab:C["a"],QField:E["a"],QInput:R["a"],QCard:U["a"],QCardTitle:F["a"],QCardMain:H["a"],QCardMedia:M["a"],QCardSeparator:N["a"],QCardActions:T["a"],QModal:x["a"],QJumbotron:P["a"],QRange:A["a"],QParallax:O["a"],QLayoutFooter:W["a"]},directives:{Ripple:z["a"],ScrollFire:B["a"]},plugins:{Notify:j["a"]}});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},J=[];q._withStripped=!0;var K={name:"App"},_=K,D=(n("A0++"),n("KHd+")),V=Object(D["a"])(_,q,J,!1,null,null,null);V.options.__file="App.vue";var G=V.exports,X=n("L2JU"),Y=n("Aej4"),Z=n.n(Y),$={tabs:[{name:"Items",link:"/items"}]},tt=n("QUHw"),et=n("B7yd"),nt=n("taL5"),ot={namespaced:!0,state:$,getters:tt,mutations:et,actions:nt},at={loggedIn:!1},it=n("6N+0");function rt(t,e){t.loggedIn=e}n("f3/d"),n("Z2Ku"),n("L9s1");var st=n("GUC0"),ct=n.n(st),ut=n("vDqi"),lt=n.n(ut),dt=!window.location.host.includes("localhost"),mt=dt?"//unorthodoxgifts.com/":"//localhost:3000/",ft=lt.a.create({baseURL:mt,timeout:4e3,withCredentials:!0});function ht(t,e){t.commit,t.dispatch;ft.post("email",e).then(function(t){Notify.create({message:"Message Sent",color:"positive"})}).catch(function(t){Notify.create({message:"Message Failed to Send: \n"+t,color:"negative"})})}function pt(t){var e=t.commit;t.dispatch;ft("authenticate").then(function(t){null==t.data.data?(console.log("failed login"),console.log(t)):null!==t.data.data._id?(console.log("successful login"),e("setLoginStatus",!0)):console.log("login failed")}).catch(function(t){})}function gt(t,e){var n=t.commit;t.dispatch;ft.post("register",e).then(function(t){"Successfully created user account"==t.data.message?(n("setLoginStatus",!0),ct()({title:"Account Created",timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){ct()({title:t,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")})})):console.log("Could not login"),console.log(t)})}function bt(t,e){var n=t.commit;t.dispatch;ft.post("login",e).then(function(t){n("setLoginStatus",!0),ct()({title:"Logged in as",text:t.data.data.name,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)}),console.log(t)}).catch(function(t){console.log(t)})}function vt(t){var e=t.commit;t.dispatch;ft.delete("logout").then(function(t){e("setLoginStatus",!1),ct()({title:t.data.message,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)})}).catch(function(t){})}var yt={namespaced:!0,state:at,getters:it,mutations:o,actions:a},wt={items:[],allItems:[],sort:[5,10,25,50,100],sortNum:100,sortNumMin:0,ideals:[{title:"Responsive Design - Cross Platform",body:"We make websites that look great no matter the platform.  If you have a separate mobile and desktop site, no mobile site at all, or your website just doesn't look good on all screens, we'll help you out.",icon:"statics/responsive.png"},{title:"Modern Look and Feel",body:"If your website looks like it's caught in the 90's (or 2010's) we'll bring it up to snuff.",icon:"statics/modern.png"},{title:"Upgrade From Social Media, WordPress, or online Website Builders",body:"Is your company's \"website\" on social media, or built using a tool like WordPress or Wix? It's probably time for an upgrade.  Ebenezer Websites LLC prides itself on turning these startup websites into legitimate sites that you, and your client-base, will be constantly impressed by.",icon:"statics/up.png"},{title:"Small Workload - Large Dedication",body:"We are purposefully selective about the amount of projects we take on at a time. This ensures that we can dedicate as much time as needed on your project to make it better than you ever hoped for.",icon:"statics/focus.png"}],projects:[{url:"//www.rideforhopeidaho.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827870/ebenezer/rfh.png",imgMob:"//res.cloudinary.com/treverscloud/image/upload/v1544409839/ebenezer/rfhmob.png",title:"Ride For Hope Idaho",description:"Ebenezer Websites LLC revamped, and has been maintaining, the website for Ride For Hope Idaho since the beginning of 2018.  Since taking over maintaining and updating the website, this great charity ride has seen a dramatic increase in the amount of riders signing up every year.  This local Idaho charity bike ride has been helping the underserved get the healthcare they need since 2014. If you are looking for a bike ride near Boise, or simply want to donate to a great cause, be sure to check it out."}]},It=n("Dl0a");function Qt(t,e){t.items=e,t.allItems=e,t.sortNum>0&&Lt(t,t.sortNum)}function Lt(t,e){t.sortNum=e;var n=[];if(t.allItems!=[]){for(var o in t.allItems)if(t.allItems.hasOwnProperty(o)){var a=t.allItems[o].cost,i=parseFloat(a);i<=e&&n.push(t.allItems[o])}t.items=n}}function kt(t,e){t.sortNum=e.max,t.sortNumMin=e.min;var n=[];if(t.allItems!=[]){for(var o in t.allItems)if(t.allItems.hasOwnProperty(o)){var a=t.allItems[o].cost,i=parseFloat(a);i<=e.max&&i>=e.min&&n.push(t.allItems[o])}t.items=n}}n("EVdn");var St=!window.location.host.includes("localhost"),Ct=St?"//quick-gifter.herokuapp.com/":"//localhost:3000/",Et=lt.a.create({baseURL:Ct+"api/",timeout:4e3,withCredentials:!0});function Rt(t,e){t.commit,t.dispatch;Et.post("items",e).then(function(t){console.log("res",t)}).catch(function(t){console.error("eerrrroror",t)})}function Ut(t){var e=t.commit;t.dispatch;Et("items").then(function(t){e("setItems",t.data.data)}).catch(function(t){console.log("eerrrroror",t)})}function Ft(t,e){t.commit;var n=t.dispatch;Et.delete("items/".concat(e)).then(function(t){console.log("delete",t),n("getItems")}).catch(function(t){console.error(t)})}function Ht(t,e){t.commit;var n=t.dispatch;Et.put("items/".concat(e._id),e).then(function(t){n("getItems")}).catch(function(t){console.error(t)})}var Mt={namespaced:!0,state:wt,getters:It,mutations:i,actions:r},Nt={},Tt=n("HQuA"),xt=n("HGpm"),Pt=!window.location.host.includes("localhost"),At=Pt?"//unorthodoxgifts.com/":"//localhost:3000/",Ot=lt.a.create({baseURL:At,timeout:4e3});function Wt(t,e){t.commit,t.dispatch;Ot.post("email",e).then(function(t){j["a"].create({message:"Message Sent",color:"positive"})}).catch(function(t){j["a"].create({message:"Message Failed to Send: \n"+t,color:"negative"})})}var zt={namespaced:!0,state:Nt,getters:Tt,mutations:xt,actions:s};c["a"].use(X["a"]),c["a"].use(Z.a);var Bt=function(){var t=new X["a"].Store({modules:{tabs:ot,auth:yt,items:Mt,email:zt}});return t},jt=n("jE9Z"),qt=[{path:"/",component:function(){return n.e(2).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(0).then(n.bind(null,"iyQ6"))}},{path:"/about",component:function(){return n.e(0).then(n.bind(null,"iyQ6"))}},{path:"/work",component:function(){return n.e(0).then(n.bind(null,"iyQ6"))}},{path:"/contact",component:function(){return n.e(0).then(n.bind(null,"iyQ6"))}}]}];qt.push({path:"*",component:function(){return n.e(3).then(n.bind(null,"5R6h"))}});var Jt=qt;c["a"].use(jt["a"]);var Kt=function(){var t=new jt["a"]({scrollBehavior:function(){return{y:0}},routes:Jt,mode:"hash",base:""});return t},_t=function(){var t="function"===typeof Bt?Bt():Bt,e="function"===typeof Kt?Kt({store:t}):Kt;t.$router=e;var n={el:"#q-app",router:e,store:t,render:function(t){return t(G)}};return{app:n,store:t,router:e}},Dt=function(t){var e=t.Vue;e.prototype.$axios=lt.a},Vt=n("aMKO"),Gt={logEvent:function(t,e,n,o){dataLayer.push({event:"customEvent",category:t,action:e,label:n,value:o,cid:this.getCid()})},logPage:function(t){dataLayer.push({event:"customPageView",path:t,cid:this.getCid()})},getCid:function(){return localStorage.cid||(localStorage.cid=Object(Vt["a"])()),localStorage.cid}},Xt=function(t){var e=t.router;e.afterEach(function(t,e){Gt.logPage(t.path)})},Yt=(n("ls82"),n("yXPU")),Zt=n.n(Yt),$t=n("AoTc"),te=n.n($t),ee=function(){var t=Zt()(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e.router,o=e.Vue,o.use(te.a,{id:"UA-128246324-2",router:n});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),ne=_t(),oe=ne.app,ae=ne.store,ie=ne.router;[Dt,Xt,ee].forEach(function(t){t({app:oe,router:ie,store:ae,Vue:c["a"],ssrContext:null})}),new c["a"](oe)},QUHw:function(t,e){},TOJS:function(t,e,n){},fm0S:function(t,e,n){},taL5:function(t,e){}},[[0,5,4]]]);