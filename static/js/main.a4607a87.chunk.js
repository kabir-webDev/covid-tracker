(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{121:function(e,t,a){e.exports=a(248)},126:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},229:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(126),a(29)),i=a.n(o),s=a(47),u=a(17),m=(a(128),a(288)),d=a(289),h=a(296),f=a(280),p=a(283),v=a(67),E=a(284);a(129);var g=function(e){var t=e.title,a=e.cases,n=e.total,l=e.active,c=e.isRed,o=Object(v.a)(e,["title","cases","total","active","isRed"]);return console.log(t,l),r.a.createElement(f.a,{onClick:o.onClick,className:"infoBox ".concat(l&&"infoBox--selected"," ").concat(c&&"infoBox--red")},r.a.createElement(p.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!c&&"infoBox__cases--green")},a),r.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},b=a(104),y=a(15),w=a.n(y),x={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return w()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return w()(e).format("0a")}}}]}},k=function(e,t){var a,n=[];for(var r in e.cases){if(a){var l={x:r,y:e[t][r]-a};n.push(l)}a=e[t][r]}return n};var O=function(e){var t=e.casesType,a=Object(n.useState)({}),l=Object(u.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=k(e,t);o(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===c||void 0===c?void 0:c.length)>0&&r.a.createElement(b.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:c}]},options:x}))};a(226);var j=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,w()(e.cases).format("0,0"))))})))},C=a(111),N=a(292),_=a(293),I={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},S=function(e){var t=Object(C.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=function(e){return e?"+".concat(w()(e).format("0.0a")):"+0"},B=a(294),D=a(295);a(227);var A=function(e){var t=e.countries,a=e.casesType,n=e.center,l=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(B.a,{center:n,zoom:l},r.a.createElement(D.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:I[t].hex,fillColor:I[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*I[t].multiplier},r.a.createElement(_.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",w()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",w()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",w()(e.deaths).format("0,0")))))}))}(t,a)))},R=(a(228),a(229),a(107)),W=a.n(R),z=a(285),V=a(25),M=a(286),q=a(291),K=a(287),J=a(110),Y=a.n(J),L=a(109),P=a.n(L),F=a(108),G=a.n(F),H=a(290);function $(e){var t=e.children,a=e.value,n=e.index,l=Object(v.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),a===n&&r.a.createElement(H.a,{p:3},r.a.createElement(E.a,null,t)))}function Q(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var U=Object(z.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:1100,borderRadius:15}}}));var X=function(){var e=U(),t=Object(V.a)(),a=r.a.useState(0),n=Object(u.a)(a,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"pokam"},r.a.createElement("div",{className:"neu pp container"},r.a.createElement("div",{className:"tab-rad"},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:"colors"},r.a.createElement(M.a,{position:"static",color:"default"},r.a.createElement(q.a,{value:l,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(K.a,Object.assign({style:{color:"#8E44AD",fontWeight:600},label:"Kids Corner",icon:r.a.createElement(G.a,null)},Q(0))),r.a.createElement(K.a,Object.assign({style:{color:"#8E44AD",fontWeight:600},label:"Youth Power",icon:r.a.createElement(P.a,null)},Q(1))),r.a.createElement(K.a,Object.assign({style:{color:"#8E44AD",fontWeight:600},icon:r.a.createElement(Y.a,null),label:"Aged Person"},Q(2))))),r.a.createElement(W.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:l,onChangeIndex:function(e){c(e)}},r.a.createElement($,{value:l,index:0,dir:t.direction},r.a.createElement("div",{className:"health-sec"},r.a.createElement("div",{className:"taxting",style:{fontSize:20,textAlign:"left"}},r.a.createElement("ol",null,r.a.createElement("li",null,"Talk with children about COVID-19 as we should spread awarness."," "),r.a.createElement("li",null,"It is important to make time to talk with children when they are worried. They need to know they can express their feelings and ask questions."),r.a.createElement("li",null,"Be aware of what your children see and hear on television, the radio and online."),r.a.createElement("li",null,"Tell your children that most kids with COVID-19 do not get very sick, but we can help those who could get very sick."),r.a.createElement("li",null,"Keep Children Busy with so many interesting things that they don't stop learning."))),r.a.createElement("div",{className:"image-sec"},r.a.createElement("img",{src:"https://www.netclipart.com/pp/m/1-13986_boss-baby-big-baby-boss.png",alt:""})))),r.a.createElement($,{value:l,index:1,dir:t.direction},r.a.createElement("div",{className:"health-sec"},r.a.createElement("div",{className:"taxting",style:{fontSize:20,textAlign:"left"}},r.a.createElement("ol",null,r.a.createElement("li",null,"Talk with children about COVID-19 as we should spread awarness."," "),r.a.createElement("li",null,"It is important to make time to talk with children when they are worried. They need to know they can express their feelings and ask questions."),r.a.createElement("li",null,"Be aware of what your children see and hear on television, the radio and online."),r.a.createElement("li",null,"Tell your children that most kids with COVID-19 do not get very sick, but we can help those who could get very sick."),r.a.createElement("li",null,"Keep Children Busy with so many interesting things that they don't stop learning."))),r.a.createElement("div",{className:"image-sec"},r.a.createElement("img",{src:"https://images4.fanpop.com/image/photos/16200000/Joey-Tribbiani-Chandler-Bing-and-Ross-Geller-joey-chandler-and-ross-16243636-598-476.jpg",alt:""})))),r.a.createElement($,{value:l,index:2,dir:t.direction},r.a.createElement("div",{className:"health-sec"},r.a.createElement("div",{className:"taxting",style:{fontSize:20,textAlign:"left"}},r.a.createElement("ol",null,r.a.createElement("li",null,"Talk with children about COVID-19 as we should spread awarness."," "),r.a.createElement("li",null,"It is important to make time to talk with children when they are worried. They need to know they can express their feelings and ask questions."),r.a.createElement("li",null,"Be aware of what your children see and hear on television, the radio and online."),r.a.createElement("li",null,"Tell your children that most kids with COVID-19 do not get very sick, but we can help those who could get very sick."),r.a.createElement("li",null,"Keep Children Busy with so many interesting things that they don't stop learning."))),r.a.createElement("div",{className:"image-sec"},r.a.createElement("img",{src:"https://www.shecos.com/blog/wp-content/uploads/2019/09/walter-white-cosplay.jpg",alt:""}))))))))))},Z=function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),o=Object(u.a)(c,2),v=o[0],E=o[1],b=Object(n.useState)([]),y=Object(u.a)(b,2),x=y[0],k=y[1],C=Object(n.useState)([]),N=Object(u.a)(C,2),_=N[0],I=N[1],B=Object(n.useState)([]),D=Object(u.a)(B,2),R=D[0],W=D[1],z=Object(n.useState)("cases"),V=Object(u.a)(z,2),M=V[0],q=V[1],K=Object(n.useState)({lat:34.80746,lng:-40.4796}),J=Object(u.a)(K,2),Y=J[0],L=J[1],P=Object(n.useState)(3),F=Object(u.a)(P,2),G=F[0],H=F[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=S(e);k(t),I(e),W(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(M);var $=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){l(a),E(e),L([e.countryInfo.lat,e.countryInfo.long]),H(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(d.a,{variant:"outlined",value:a,onChange:$},r.a.createElement(h.a,{value:"worldwide"},"Worldwide"),x.map((function(e){return r.a.createElement(h.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(g,{onClick:function(e){return q("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===M,cases:T(v.todayCases),total:w()(v.cases).format("0.0a")}),r.a.createElement(g,{onClick:function(e){return q("recovered")},title:"Recovered",active:"recovered"===M,cases:T(v.todayRecovered),total:w()(v.recovered).format("0.0a")}),r.a.createElement(g,{onClick:function(e){return q("deaths")},title:"Deaths",isRed:!0,active:"deaths"===M,cases:T(v.todayDeaths),total:w()(v.deaths).format("0.0a")})),r.a.createElement("div",{className:"container"},r.a.createElement(A,{className:"neumorf",countries:_,casesType:M,center:Y,zoom:G}))),r.a.createElement(f.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(j,{countries:R}),r.a.createElement("h3",null,"Worldwide new ",M),r.a.createElement(O,{casesType:M}))))),r.a.createElement("div",{className:"health",style:{textAlign:"center",marginTop:"30px"}},r.a.createElement("h1",null,'"Mental Health Section"')),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.a4607a87.chunk.js.map