(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{253:function(t,e,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("5bf01e24",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n(253)},255:function(t,e,n){var r=n(132)(!1);r.push([t.i,'.header[data-v-83098c18]{height:75px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:12px solid #f9a825}.header .logo[data-v-83098c18]{max-width:164px}.header .wrapper-nav-link[data-v-83098c18]{display:flex}.header .wrapper-nav-link .nav-link[data-v-83098c18]{list-style:none}.header .wrapper-nav-link .nav-link a[data-v-83098c18]{color:#8bc34a;text-decoration:none;font-size:20px;font-weight:700;margin-right:25px;font-family:"Overpass Mono"}.header .wrapper-nav-link .nav-link a[data-v-83098c18]:hover{padding-bottom:25px;border-bottom:12px solid #8bc34a}',""]),t.exports=r},256:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(59),n(14),n(75),{name:"Header",data:function(){return{data:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-desarrollador-front.cclh.io/options/").then((function(t){return t.json()}));case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=o,l=(n(254),n(46)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?n("p",[t._v("Fetching menu...")]):t.$fetchState.error?n("p",[t._v("An error occurred :(")]):n("div",{staticClass:"header"},[n("NuxtLink",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:t.data.header.logo_header,alt:"Travel"}})]),t._v(" "),n("nav",[n("ul",{staticClass:"wrapper-nav-link"},t._l(t.data.header.menus,(function(e){return n("li",{key:e.menu_url,staticClass:"nav-link"},[n("NuxtLink",{attrs:{to:e.menu_url}},[t._v(t._s(e.menu_label))])],1)})),0)])],1)}),[],!1,null,"83098c18",null);e.default=component.exports},258:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("2fc3aec4",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(258)},263:function(t,e,n){var r=n(132)(!1);r.push([t.i,".lista-destinos[data-v-4a1f8f33]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}",""]),t.exports=r},269:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(59),n(14),n(75),{name:"IndexPage",data:function(){return{title:"Homepage",home:[]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Home page description"}]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-desarrollador-front.cclh.io/home/").then((function(t){return t.json()}));case 2:t.home=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=o,l=(n(262),n(46)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("section",[n("img",{attrs:{src:t.home.main_photo,alt:""}}),t._v(" "),n("div",[n("h2",[t._v("Recomendados")]),t._v(" "),n("ul",{staticClass:"lista-destinos"},t._l(t.home.recommended,(function(e){return n("li",{key:e.link_url},[n("a",{attrs:{href:e.link_url}},[n("img",{attrs:{src:e.item_photo,alt:e.location}})]),t._v(" "),n("div",[n("p",[t._v(t._s(e.location))]),t._v(" "),n("p",[t._v(t._s(e.stars))]),t._v(" "),n("ul",t._l(Number(e.stars),(function(e,r){return n("li",{key:r},[t._v("\n                  "+t._s(r)+"\n                  "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32.092",height:"29.154",viewBox:"0 0 32.092 29.154"}},[n("path",{attrs:{id:"star-solid",d:"M45.8,8.52l8.732,1.207a1.912,1.912,0,0,1,1.562,1.23,1.749,1.749,0,0,1-.48,1.867l-6.332,5.819,1.495,8.347a1.766,1.766,0,0,1-.784,1.782,2.059,2.059,0,0,1-2.048.131l-7.8-3.9-7.8,3.9a2.069,2.069,0,0,1-2.054-.131,1.762,1.762,0,0,1-.778-1.782L31,18.644l-6.333-5.819a1.75,1.75,0,0,1-.479-1.867,1.9,1.9,0,0,1,1.564-1.23L34.48,8.52,38.394.986a2,2,0,0,1,3.494,0Z",transform:"translate(-24.095 0.039)",fill:"#8bc34a"}})])])})),0)]),t._v(" "),n("div",[n("p",[t._v(t._s(e.hotel_name))]),t._v(" "),n("p",[t._v(t._s(e.price))])])])})),0)])]),t._v(" "),n("LazyFooter")],1)}),[],!1,null,"4a1f8f33",null);e.default=component.exports;installComponents(component,{Header:n(256).default})}}]);