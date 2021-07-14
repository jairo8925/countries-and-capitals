(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{34:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(9),c=n.n(s),r=n(10),i=n(11),l=n(13),u=n(12),j=n(16),h=n.n(j),d=n(26),b=(n(34),n(27)),p=n.n(b).a.create({baseURL:"https://restcountries.eu/rest/v2"}),m=(n(53),n(1)),f=function(t){var e=t.country,n=t.onCountryClick,a=t.option;return Object(m.jsx)("div",{className:"eight wide column center aligned",children:Object(m.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(a)},children:[e.name,Object(m.jsx)("img",{className:"flag",alt:"Flag of ".concat(e.name),src:e.flag})]})})},O=function(t){var e=t.countries,n=t.onCountryClick;return Object(m.jsxs)("div",{className:"ui two centered grid",children:[Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[0],onCountryClick:n,option:0}),Object(m.jsx)(f,{country:e[1],onCountryClick:n,option:1})]}),Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[2],onCountryClick:n,option:2}),Object(m.jsx)(f,{country:e[3],onCountryClick:n,option:3})]})]})},y=n(5),g=(n(55),n(58)),x=n(61),C=n(59),v=n(60),w=function(t){var e=t.info,n=Number(e.population).toLocaleString(),o=Number(e.latlng[0]),s=Number(e.latlng[1]),c=e.subregion,r=e.languages.map((function(t){return t.name})).join(", "),i=e.currencies.map((function(t){return t.name})).join(", "),l=Object(a.useState)(null),u=Object(y.a)(l,2),j=u[0],h=u[1];return j&&j.flyTo([o,s],3),Object(m.jsxs)(g.a,{center:[o,s],zoom:3,whenCreated:h,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,dragging:!1,children:[Object(m.jsx)(x.a,{url:"https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(m.jsx)(C.a,{position:[o,s],keepInView:!0,children:Object(m.jsxs)(v.a,{className:"info",permanent:!0,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Population:"})," ",n]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Region:"})," ",c]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Languages:"})," ",r]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Currencies:"})," ",i]})]})})]})},k=function(t){return Object(m.jsx)("div",{className:"ui active",children:Object(m.jsx)("div",{className:"ui big text loader",children:t.message})})};k.defaultProps={message:"Loading..."};var N=k,S=n.p+"static/media/correct.87ab3071.wav",R=n.p+"static/media/wrong.9ed0fe46.wav",I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).onCountryClick=function(t){var e=a.state.score;if(t===a.state.answer)new Audio(S).play(),e++;else{var n=new Audio(R);n.volume=.25,n.play()}a.setState({score:e,total:a.state.total+1}),a.setCountries()},a.setCountries=function(){var t=a.chooseCountries(a.state.countries,4),e=Math.floor(Math.random()*t.length),n=t[e].capital,o=a.state.countries,s=o.indexOf(t[e]);o.splice(s,1);var c=t[e];a.setState({countryInfo:c,countries:o,capitalCity:n,answer:e,options:t})},a.onResetClick=function(){a.setState({countries:a.state.history,capitalCity:"",options:[],answer:null,score:0,countryInfo:null,total:0}),a.setCountries()},a.state={history:[],capitalCity:"",countries:[],options:[],answer:null,score:0,countryInfo:null,total:0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(h.a.mark((function t(){var e,n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/all",{params:{fields:"name;capital;flag;languages;population;latlng;subregion;currencies"}});case 2:e=t.sent,n=new Set(["Holy See"]),e.data=e.data.filter((function(t){return!n.has(t.name)})),a=e.data.filter((function(t){return 0!==t.capital.length})),this.setState({countries:a,history:a}),this.setCountries();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),a=t.length,o=new Array(a);if(e>a)throw new RangeError("chooseCountries: more elements taken than available");for(;e--;){var s=Math.floor(Math.random()*a);n[e]=t[s in o?o[s]:s],o[s]=--a in o?o[a]:a}return n}},{key:"render",value:function(){return this.state.countryInfo?Object(m.jsxs)("div",{className:"ui container",style:{paddingTop:"50px"},children:[Object(m.jsx)("div",{className:"ui centered huge header capitalCity noselect",children:this.state.capitalCity}),Object(m.jsx)(w,{info:this.state.countryInfo,city:this.state.capitalCity}),Object(m.jsxs)("div",{className:"ui huge header score noselect",children:["Score: ",this.state.score," ",0!==this.state.total?"/ ".concat(this.state.total):""]}),Object(m.jsxs)("button",{className:"ui labeled icon button",onClick:this.onResetClick,children:[Object(m.jsx)("i",{className:"undo alternate icon"}),"Reset"]}),Object(m.jsx)(O,{countries:this.state.options,onCountryClick:this.onCountryClick})]}):Object(m.jsx)(N,{})}}]),n}(o.a.Component),M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(I,{})}}]),n}(o.a.Component);c.a.render(Object(m.jsx)(M,{}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.be7ce47f.chunk.js.map