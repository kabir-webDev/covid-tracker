(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),s=(a(83),a(17)),l=a.n(s),i=a(25),u=a(10),m=(a(85),a(202)),f=a(200);a(74),a(203),a(86);a(70);var d=a(9),p=a.n(d);a(184);var h=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,p()(e.cases).format("0,0"))))})))},v=a(73),b=a(201),E=a(204),g={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},O=function(e){var t=Object(v.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},j=a(205),y=a(206);a(185);var N=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(j.a,{center:n,zoom:c},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(b.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:g[t].hex,fillColor:g[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*g[t].multiplier},r.a.createElement(E.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",p()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",p()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",p()(e.deaths).format("0,0")))))}))}(t,a)))},w=(a(186),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)({})),c=Object(u.a)(a,2),o=(c[0],c[1]),s=Object(n.useState)([]),d=Object(u.a)(s,2),p=(d[0],d[1]),v=Object(n.useState)([]),b=Object(u.a)(v,2),E=b[0],g=b[1],j=Object(n.useState)([]),y=Object(u.a)(j,2),w=y[0],_=y[1],S=Object(n.useState)("cases"),k=Object(u.a)(S,2),x=k[0],C=(k[1],Object(n.useState)({lat:34.80746,lng:-40.4796})),I=Object(u.a)(C,2),z=I[0],M=(I[1],Object(n.useState)(3)),T=Object(u.a)(M,2),B=T[0];T[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=O(e);p(t),g(e),_(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(x);return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 Tracker")),r.a.createElement("div",{className:"container"},r.a.createElement(N,{className:"neumorf",countries:E,casesType:x,center:z,zoom:B}))),r.a.createElement(m.a,{className:"app__right"},r.a.createElement(f.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(h,{countries:w})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(187)},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.3c75528d.chunk.js.map