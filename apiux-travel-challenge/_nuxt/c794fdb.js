(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("4616022f",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(259)},265:function(t,e,n){var o=n(71)(!1);o.push([t.i,"#title-destinos[data-v-45082cda]{margin-bottom:35px;margin-top:12px}#lista-destinos[data-v-45082cda]{display:flex;flex-direction:column;margin:0 0 20px;padding:0}#lista-destinos .destino[data-v-45082cda]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;align-content:space-between;margin-bottom:27px}#lista-destinos .destino .img-wrapper[data-v-45082cda]{width:100%}#lista-destinos .destino .img-wrapper .main-img[data-v-45082cda]{width:502px;height:184px;-o-object-fit:cover;object-fit:cover;-o-object-position:63% 42%;object-position:63% 42%;border:none;overflow:hidden}#lista-destinos .destino .details[data-v-45082cda]{width:100%;padding:0 17px;display:flex;flex-direction:column;margin-top:auto}#lista-destinos .destino .details .stars[data-v-45082cda]{list-style:none;display:flex;flex-direction:row;margin:0;padding:0;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}#lista-destinos .destino .details .stars .star svg[data-v-45082cda]{max-width:31px;width:31px;margin-right:6px}#lista-destinos .destino .details .location[data-v-45082cda]{margin:8px 0 0;padding:0}#lista-destinos .destino .details .hotel-name[data-v-45082cda]{padding:0;color:#424242;font-family:Roboto;font-size:2.25rem;font-weight:400;margin:8px 0 0}#lista-destinos .destino .details .bottom-block[data-v-45082cda]{display:flex;flex-direction:row;justify-content:space-between;align-content:center;margin-top:10px}#lista-destinos .destino .details .bottom-block .last-info[data-v-45082cda]{display:flex;flex-direction:column;justify-content:space-around}#lista-destinos .destino .details .bottom-block .last-info .bajada[data-v-45082cda]{margin:0;padding:0;color:#616161;font-family:Roboto;font-size:1rem;font-weight:700}#lista-destinos .destino .details .bottom-block .last-info .price[data-v-45082cda]{padding:0;color:#424242;font-family:Roboto;font-size:1rem;font-weight:lighter;margin:7px 0 0}#lista-destinos .destino .details .bottom-block .btn-cta[data-v-45082cda]{background:transparent;border:none;margin:0;padding:0;display:flex;justify-content:unset}#lista-destinos .destino .details .bottom-block .btn-cta .img-cta[data-v-45082cda]{max-width:180px;width:180px;margin:0;padding:0}@media only screen and (max-width:600px){#lista-destinos .destino[data-v-45082cda]{flex-direction:column}#lista-destinos .destino .img-wrapper .main-img[data-v-45082cda]{width:100%}#lista-destinos .destino .details[data-v-45082cda]{padding:17px}#lista-destinos .destino .details .stars .star svg[data-v-45082cda]{max-width:25px;width:25px;margin-right:6px}#lista-destinos .destino .details .hotel-name[data-v-45082cda]{font-size:2rem}#lista-destinos .destino .details .bottom-block[data-v-45082cda]{flex-direction:column}#lista-destinos .destino .details .bottom-block .btn-cta[data-v-45082cda]{justify-content:flex-start;margin:20px 0 0}}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e);var o=n(9),d=(n(46),n(13),n(59),{name:"Destinos",data:function(){return{title:"Destinos Imperdibles",data:[]}},methods:{sendDestino:function(t){console.log(t)}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Destinos description................"},{hid:"og:title",property:"og:title",content:"Ofertas y destinos imperdibles"},{hid:"og:description",property:"og:description",content:"Destinos description................"},{hid:"og:image",property:"og:image",content:"ruta a la imagen"}]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-desarrollador-front.cclh.io/destinos/").then((function(t){return t.json()})).catch((function(t){error({statusCode:404,message:"Page not found"})}));case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=d,r=(n(264),n(25)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("section",[n("div",{staticClass:"content"},[n("h1",{staticClass:"title26px",attrs:{id:"title-destinos"}},[t._v(t._s(this.title))]),t._v(" "),n("ul",{attrs:{id:"lista-destinos"}},t._l(t.data,(function(e){return n("li",{key:e.location,staticClass:"destino"},[n("div",{staticClass:"img-wrapper"},[n("img",{staticClass:"main-img",attrs:{src:e.location_photo,alt:e.location}})]),t._v(" "),n("div",{staticClass:"details"},[n("ul",{staticClass:"stars"},t._l(Number(e.stars),(function(t,e){return n("li",{key:e,staticClass:"star"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32.092",height:"29.154",viewBox:"0 0 32.092 29.154"}},[n("path",{attrs:{id:"star-solid",d:"M45.8,8.52l8.732,1.207a1.912,1.912,0,0,1,1.562,1.23,1.749,1.749,0,0,1-.48,1.867l-6.332,5.819,1.495,8.347a1.766,1.766,0,0,1-.784,1.782,2.059,2.059,0,0,1-2.048.131l-7.8-3.9-7.8,3.9a2.069,2.069,0,0,1-2.054-.131,1.762,1.762,0,0,1-.778-1.782L31,18.644l-6.333-5.819a1.75,1.75,0,0,1-.479-1.867,1.9,1.9,0,0,1,1.564-1.23L34.48,8.52,38.394.986a2,2,0,0,1,3.494,0Z",transform:"translate(-24.095 0.039)",fill:"#8bc34a"}})])])})),0),t._v(" "),n("h2",{staticClass:"title26px location"},[t._v(t._s(e.location))]),t._v(" "),n("p",{staticClass:"hotel-name"},[t._v(t._s(e.hotel_name))]),t._v(" "),n("div",{staticClass:"bottom-block"},[n("div",{staticClass:"last-info"},[n("p",{staticClass:"bajada"},[t._v(t._s(e.bajada))]),t._v(" "),n("p",{staticClass:"price"},[t._v(t._s(e.price))])]),t._v(" "),n("button",{staticClass:"btn-cta",on:{click:function(n){return t.sendDestino(e.link)}}},[n("NuxtLink",{staticClass:"img-cta",attrs:{to:e.link}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"180.78",height:"40.121",viewBox:"0 0 180.78 40.121"}},[n("path",{attrs:{id:"Sustracción_7","data-name":"Sustracción 7",d:"M-3684.117-264.59h-167.406a6.7,6.7,0,0,1-6.687-6.687v-26.747a6.7,6.7,0,0,1,6.687-6.687h167.406a6.7,6.7,0,0,1,6.687,6.687v26.747A6.7,6.7,0,0,1-3684.117-264.59Zm-128.957-8.358a1.674,1.674,0,0,0-1.672,1.671,1.674,1.674,0,0,0,1.672,1.672,1.674,1.674,0,0,0,1.671-1.672A1.673,1.673,0,0,0-3813.073-272.948Zm-32.6-8.359h5.85l-2.978,8.933a.823.823,0,0,0,.115.75.827.827,0,0,0,.678.347h3.25a2.477,2.477,0,0,0,2.163-1.243l5.131-8.787h4.9a6.456,6.456,0,0,0,4.473-1.849,2.116,2.116,0,0,0,0-2.988,6.609,6.609,0,0,0-4.473-1.943h-4.9l-5.131-8.692a2.564,2.564,0,0,0-2.163-1.337H-3842a.806.806,0,0,0-.651.35.954.954,0,0,0-.143.841l2.978,8.839-5.85.095-2.006-2.675a1.687,1.687,0,0,0-1.337-.668h-1.437a.832.832,0,0,0-.661.323.821.821,0,0,0-.15.711l1.311,5.245a1.689,1.689,0,0,1,0,.814l-1.311,5.245a.821.821,0,0,0,.15.711.832.832,0,0,0,.661.323h1.437a1.687,1.687,0,0,0,1.337-.668l2.006-2.675Zm147.944,1.277h0l-2.279,2.07a7.121,7.121,0,0,0,2.61,1.972,8.564,8.564,0,0,0,3.63.757,7.2,7.2,0,0,0,4.313-1.184,3.913,3.913,0,0,0,1.628-3.345,3.914,3.914,0,0,0-.757-2.5,5.788,5.788,0,0,0-1.95-1.553,23.613,23.613,0,0,0-2.513-1.08c-.607-.219-1.167-.436-1.665-.645a5.116,5.116,0,0,1-1.192-.667,1.033,1.033,0,0,1-.443-.818,1,1,0,0,1,.645-.96,3.893,3.893,0,0,1,1.635-.3,5.194,5.194,0,0,1,2.19.413,6,6,0,0,1,1.47.937l2.34-1.92a7.5,7.5,0,0,0-2.325-1.725,7.634,7.634,0,0,0-3.406-.7,8.63,8.63,0,0,0-2.992.495,4.969,4.969,0,0,0-2.13,1.432,3.433,3.433,0,0,0-.787,2.273,3.978,3.978,0,0,0,.615,2.273,5.072,5.072,0,0,0,1.718,1.538,17.239,17.239,0,0,0,2.557,1.17c.771.287,1.438.55,1.98.78a4.705,4.705,0,0,1,1.23.713,1.134,1.134,0,0,1,.42.877,1.2,1.2,0,0,1-.683,1.155,3.817,3.817,0,0,1-1.718.345,4.975,4.975,0,0,1-2.475-.585,7.774,7.774,0,0,1-1.666-1.215Zm-13.65-5.37a8.207,8.207,0,0,0-2.917.533,5.354,5.354,0,0,0-2.3,1.65,4.486,4.486,0,0,0-.9,2.887,5.045,5.045,0,0,0,.749,2.828,4.677,4.677,0,0,0,2.032,1.7,7.079,7.079,0,0,0,2.888.569,6.189,6.189,0,0,0,2.6-.479,6.2,6.2,0,0,0,1.658-1.081v1.2h3.36v-9.931a7.019,7.019,0,0,0-.555-3.022,4.217,4.217,0,0,0-1.462-1.74,5.449,5.449,0,0,0-1.98-.795,11.28,11.28,0,0,0-2.093-.2,11.114,11.114,0,0,0-3.48.533,12.224,12.224,0,0,0-2.73,1.237l1.051,2.82a9.814,9.814,0,0,1,2.333-1.14,7.944,7.944,0,0,1,2.527-.42,4.551,4.551,0,0,1,1.628.262,2.015,2.015,0,0,1,1.042.87,3.188,3.188,0,0,1,.36,1.627v.9a7.42,7.42,0,0,0-1.725-.607A9.709,9.709,0,0,0-3711.378-285.4Zm-66.149-5.879a7.538,7.538,0,0,0-3.878.967,6.539,6.539,0,0,0-2.543,2.76,9.5,9.5,0,0,0-.9,4.283,9.641,9.641,0,0,0,.877,4.237,6.562,6.562,0,0,0,2.52,2.805,7.442,7.442,0,0,0,3.923,1,7.232,7.232,0,0,0,3.156-.659,7.607,7.607,0,0,0,2.333-1.71l-2.069-2.19a4.663,4.663,0,0,1-1.545,1.14,4.582,4.582,0,0,1-1.844.36,3.525,3.525,0,0,1-2.963-1.388,5.122,5.122,0,0,1-.94-2.243h10.413a9.063,9.063,0,0,0,.1-1.14c.01-.353.016-.676.016-.96a8.413,8.413,0,0,0-.893-4.1,5.755,5.755,0,0,0-2.407-2.385A7.263,7.263,0,0,0-3777.527-291.28Zm53.43,3.3a1.1,1.1,0,0,1,1.125.727,6.832,6.832,0,0,1,.285,2.3v9.36h3.15v-9.871c0-2.15-.313-3.674-.929-4.53a3.169,3.169,0,0,0-2.731-1.29,3.241,3.241,0,0,0-2.107.689,6.286,6.286,0,0,0-1.373,1.53,3.974,3.974,0,0,0-.959-1.514,2.492,2.492,0,0,0-1.86-.7,2.749,2.749,0,0,0-2.183,1.02,4.038,4.038,0,0,0-.548.856v-1.515h-3.15v15.33h3.15v-9.33a5.35,5.35,0,0,1,.226-1.658,2.313,2.313,0,0,1,.637-1.042,1.431,1.431,0,0,1,.967-.36,1.067,1.067,0,0,1,.825.345,2.208,2.208,0,0,1,.466,1.005,7.327,7.327,0,0,1,.15,1.59v9.45h3.15v-9.33a5.7,5.7,0,0,1,.21-1.658,2.354,2.354,0,0,1,.592-1.042A1.289,1.289,0,0,1-3724.1-287.98Zm-44.671,9.359v3.031h10.98v-3.031h-4.29v-4.95a5.238,5.238,0,0,1,.525-2.415,3.513,3.513,0,0,1,1.68-1.568,7.2,7.2,0,0,1,3.045-.547v3.3h3.36v-5.67a7.325,7.325,0,0,0-1.47-.563,7.663,7.663,0,0,0-2.04-.247,7.276,7.276,0,0,0-2.543.427,5.484,5.484,0,0,0-1.92,1.177,4.1,4.1,0,0,0-.877,1.219v-2.463h-6.451v3.03h3.241v9.269h-3.241Zm-33.539-12.3h0l5.97,15.33h3.359l5.97-15.33h-3.66l-3.51,9.72c-.089.238-.172.485-.247.735a7.3,7.3,0,0,0-.2.915c-.071-.361-.139-.66-.21-.915s-.152-.5-.24-.735l-3.54-9.72h-3.69Zm-10.766,11.284a1.674,1.674,0,0,0-1.672,1.671,1.674,1.674,0,0,0,1.672,1.672,1.674,1.674,0,0,0,1.671-1.672A1.673,1.673,0,0,0-3813.073-279.635Zm0-6.687a1.674,1.674,0,0,0-1.672,1.671,1.674,1.674,0,0,0,1.672,1.672,1.674,1.674,0,0,0,1.671-1.672A1.673,1.673,0,0,0-3813.073-286.322Zm0-6.687a1.674,1.674,0,0,0-1.672,1.672,1.674,1.674,0,0,0,1.672,1.671,1.673,1.673,0,0,0,1.671-1.671A1.674,1.674,0,0,0-3813.073-293.009Zm104.516-4.541-4.26,4.681h3.78l5.34-4.681h-4.86Zm-104.516-2.146a1.674,1.674,0,0,0-1.672,1.672,1.674,1.674,0,0,0,1.672,1.671,1.673,1.673,0,0,0,1.671-1.671A1.674,1.674,0,0,0-3813.073-299.7ZM-3711.2-278.26a3.639,3.639,0,0,1-2.189-.577,1.787,1.787,0,0,1-.781-1.493,1.7,1.7,0,0,1,1.005-1.627,5.155,5.155,0,0,1,2.325-.5,8.322,8.322,0,0,1,1.792.187,6.413,6.413,0,0,1,1.478.5v1.98a5.783,5.783,0,0,1-1.478,1.065A4.63,4.63,0,0,1-3711.2-278.26Zm-63.06-6.6h-7.136a5.055,5.055,0,0,1,.813-2.07,3.5,3.5,0,0,1,3.053-1.32,3.323,3.323,0,0,1,1.5.352,3.023,3.023,0,0,1,1.185,1.1,4.269,4.269,0,0,1,.585,1.934Z",transform:"translate(3858.21 304.711)",fill:"#8bc34a"}})])])],1)])])])})),0)])]),t._v(" "),n("LazyFooter")],1)}),[],!1,null,"45082cda",null);e.default=component.exports;installComponents(component,{Header:n(187).default})}}]);