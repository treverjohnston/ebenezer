(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{0:function(t,n,e){t.exports=e("LzkT")},"6N+0":function(t,n){},"A0++":function(t,n,e){"use strict";var o=e("TOJS"),a=e.n(o);a.a},B7yd:function(t,n){},Dl0a:function(t,n){},Hl11:function(t,n,e){},LzkT:function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"setLoginStatus",function(){return et});var a={};e.r(a),e.d(a,"getAuth",function(){return lt}),e.d(a,"createAccount",function(){return mt}),e.d(a,"login",function(){return dt}),e.d(a,"logout",function(){return ft});var r={};e.r(r),e.d(r,"setItems",function(){return vt}),e.d(r,"sortItems",function(){return wt}),e.d(r,"sortItemsRange",function(){return It});var i={};e.r(i),e.d(i,"submitEntry",function(){return Lt}),e.d(i,"getItems",function(){return Ct}),e.d(i,"deleteItem",function(){return St}),e.d(i,"editEntry",function(){return Ut});e("rGqo"),e("SpHO"),e("oRQL"),e("0UuB"),e("FiUO"),e("Hl11"),e("fm0S");var c=e("Kw5r"),u=e("6E/o"),s=e("cFFF"),l=e("IEC1"),m=e("zxLP"),d=e("Rqni"),f=e("MqH6"),h=e("8wy3"),p=e("zmdN"),g=e("SC7v"),v=e("UrUt"),w=e("EYBb"),I=e("HlXa"),Q=e("UG+o"),b=e("uNnR"),y=e("fUOT"),L=e("lBN4"),C=e("xWPs"),S=e("23sU"),U=e("eelU"),k=e("XYut"),N=e("dkar"),R=e("ZYCo"),x=e("OggR"),H=e("3CNK"),T=e("MFSH"),E=e("bduK"),F=e("CVJq"),q=e("Jik4"),O=e("/k9t"),A=e("lhL4"),J=e("RIeW"),M=e("FSbK"),z=e("Ezub");c["a"].use(u["a"],{config:{},components:{QLayout:s["a"],QLayoutHeader:l["a"],QLayoutDrawer:m["a"],QPageContainer:d["a"],QPage:f["a"],QToolbar:h["a"],QToolbarTitle:p["a"],QBtn:g["a"],QIcon:v["a"],QList:w["a"],QListHeader:I["a"],QItem:Q["a"],QItemMain:b["a"],QItemSide:y["a"],QRouteTab:L["a"],QTabs:C["a"],QTab:S["a"],QField:U["a"],QInput:k["a"],QCard:N["a"],QCardTitle:R["a"],QCardMain:x["a"],QCardMedia:H["a"],QCardSeparator:T["a"],QCardActions:E["a"],QModal:F["a"],QJumbotron:q["a"],QRange:O["a"],QParallax:A["a"],QLayoutFooter:J["a"]},directives:{Ripple:M["a"]},plugins:{Notify:z["a"]}});var B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},K=[];B._withStripped=!0;var P={name:"App"},_=P,G=(e("A0++"),e("KHd+")),j=Object(G["a"])(_,B,K,!1,null,null,null);j.options.__file="App.vue";var D=j.exports,V=e("L2JU"),Y={tabs:[{name:"Items",link:"/items"}]},Z=e("QUHw"),$=e("B7yd"),W=e("taL5"),X={namespaced:!0,state:Y,getters:Z,mutations:$,actions:W},tt={loggedIn:!1},nt=e("6N+0");function et(t,n){t.loggedIn=n}e("f3/d"),e("Z2Ku"),e("L9s1");var ot=e("GUC0"),at=e.n(ot),rt=e("vDqi"),it=e.n(rt),ct=!window.location.host.includes("localhost"),ut=ct?"//quick-gifter.herokuapp.com/":"//localhost:3000/",st=it.a.create({baseURL:ut,timeout:4e3,withCredentials:!0});function lt(t){var n=t.commit;t.dispatch;st("authenticate").then(function(t){null==t.data.data?(console.log("failed login"),console.log(t)):null!==t.data.data._id?(console.log("successful login"),n("setLoginStatus",!0)):console.log("login failed")}).catch(function(t){})}function mt(t,n){var e=t.commit;t.dispatch;st.post("register",n).then(function(t){"Successfully created user account"==t.data.message?(e("setLoginStatus",!0),at()({title:"Account Created",timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){at()({title:t,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")})})):console.log("Could not login"),console.log(t)})}function dt(t,n){var e=t.commit;t.dispatch;st.post("login",n).then(function(t){e("setLoginStatus",!0),at()({title:"Logged in as",text:t.data.data.name,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)}),console.log(t)}).catch(function(t){console.log(t)})}function ft(t){var n=t.commit;t.dispatch;st.delete("logout").then(function(t){n("setLoginStatus",!1),at()({title:t.data.message,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)})}).catch(function(t){})}var ht={namespaced:!0,state:tt,getters:nt,mutations:o,actions:a},pt={items:[],allItems:[],sort:[5,10,25,50,100],sortNum:100,sortNumMin:0,projects:[{url:"//www.rideforhopeidaho.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827870/ebenezer/rfh.png",title:"Ride For Hope Idaho"},{url:"//www.unorthodoxgifts.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827874/ebenezer/ug.png",title:"Unorthodox Gifts"}]},gt=e("Dl0a");function vt(t,n){t.items=n,t.allItems=n,t.sortNum>0&&wt(t,t.sortNum)}function wt(t,n){t.sortNum=n;var e=[];if(t.allItems!=[]){for(var o in t.allItems)if(t.allItems.hasOwnProperty(o)){var a=t.allItems[o].cost,r=parseFloat(a);r<=n&&e.push(t.allItems[o])}t.items=e}}function It(t,n){t.sortNum=n.max,t.sortNumMin=n.min;var e=[];if(t.allItems!=[]){for(var o in t.allItems)if(t.allItems.hasOwnProperty(o)){var a=t.allItems[o].cost,r=parseFloat(a);r<=n.max&&r>=n.min&&e.push(t.allItems[o])}t.items=e}}e("EVdn");var Qt=!window.location.host.includes("localhost"),bt=Qt?"//quick-gifter.herokuapp.com/":"//localhost:3000/",yt=it.a.create({baseURL:bt+"api/",timeout:4e3,withCredentials:!0});function Lt(t,n){t.commit,t.dispatch;yt.post("items",n).then(function(t){console.log("res",t)}).catch(function(t){console.error("eerrrroror",t)})}function Ct(t){var n=t.commit;t.dispatch;yt("items").then(function(t){n("setItems",t.data.data)}).catch(function(t){console.log("eerrrroror",t)})}function St(t,n){t.commit;var e=t.dispatch;yt.delete("items/".concat(n)).then(function(t){console.log("delete",t),e("getItems")}).catch(function(t){console.error(t)})}function Ut(t,n){t.commit;var e=t.dispatch;yt.put("items/".concat(n._id),n).then(function(t){e("getItems")}).catch(function(t){console.error(t)})}var kt={namespaced:!0,state:pt,getters:gt,mutations:r,actions:i};c["a"].use(V["a"]);var Nt=function(){var t=new V["a"].Store({modules:{tabs:X,auth:ht,items:kt}});return t},Rt=e("jE9Z"),xt=[{path:"/",component:function(){return e.e(1).then(e.bind(null,"8kEK"))},children:[{path:"",component:function(){return e.e(2).then(e.bind(null,"iyQ6"))}},{path:"/account",component:function(){return e.e(3).then(e.bind(null,"jC2r"))}},{path:"/about",component:function(){return e.e(4).then(e.bind(null,"odGf"))}},{path:"/work",component:function(){return e.e(5).then(e.bind(null,"58Qh"))}},{path:"/contact",component:function(){return e.e(6).then(e.bind(null,"w981"))}}]}];xt.push({path:"*",component:function(){return e.e(7).then(e.bind(null,"5R6h"))}});var Ht=xt;c["a"].use(Rt["a"]);var Tt=function(){var t=new Rt["a"]({scrollBehavior:function(){return{y:0}},routes:Ht,mode:"hash",base:""});return t},Et=function(){var t="function"===typeof Nt?Nt():Nt,n="function"===typeof Tt?Tt({store:t}):Tt;t.$router=n;var e={el:"#q-app",router:n,store:t,render:function(t){return t(D)}};return{app:e,store:t,router:n}},Ft=function(t){var n=t.Vue;n.prototype.$axios=it.a},qt=Et(),Ot=qt.app,At=qt.store,Jt=qt.router;[Ft].forEach(function(t){t({app:Ot,router:Jt,store:At,Vue:c["a"],ssrContext:null})}),new c["a"](Ot)},QUHw:function(t,n){},TOJS:function(t,n,e){},fm0S:function(t,n,e){},taL5:function(t,n){}},[[0,9,8]]]);