(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{34:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),s=n(10),i=n(11),u=n(13),l=n(12),j=n(16),p=n.n(j),d=n(26),h=(n(34),n(27)),b=n.n(h).a.create({baseURL:"https://restcountries.eu/rest/v2"}),m=(n(53),n(1)),f=function(t){var e=t.country,n=t.onCountryClick,a=t.option;return Object(m.jsx)("div",{className:"eight wide column center aligned",children:Object(m.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(a)},children:[e.name,Object(m.jsx)("img",{className:"flag",alt:"Flag of ".concat(e.name),src:e.flag})]})})},g=function(t){var e=t.countries,n=t.onCountryClick;return Object(m.jsxs)("div",{className:"ui two centered grid",children:[Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[0],onCountryClick:n,option:0}),Object(m.jsx)(f,{country:e[1],onCountryClick:n,option:1})]}),Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[2],onCountryClick:n,option:2}),Object(m.jsx)(f,{country:e[3],onCountryClick:n,option:3})]})]})},O=(n(55),n(58)),x=n(61),y=n(59),v=n(60),C=n(3),w=n.n(C),k=function(t){var e=t.info,n=Number(e.population).toLocaleString(),a=Number(e.latlng[0]),r=Number(e.latlng[1]),c=e.subregion,o=e.languages.map((function(t){return t.name})).join(", "),s=e.currencies.map((function(t){return t.name})).join(", "),i=w.a.latLng(-90,-200),u=w.a.latLng(90,200),l=w.a.latLngBounds(i,u);return Object(m.jsxs)(O.a,{center:[5,0],zoom:2,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,maxBoundsViscosity:.95,maxBounds:l,children:[Object(m.jsx)(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(m.jsx)(y.a,{position:[a,r],keepInView:!0,autoPan:!0,children:Object(m.jsxs)(v.a,{className:"info",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Population:"})," ",n]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Region:"})," ",c]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Languages:"})," ",o]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Currencies:"})," ",s]})]})})]})},N=function(t){return Object(m.jsx)("div",{className:"ui active",children:Object(m.jsx)("div",{className:"ui big text loader",children:t.message})})};N.defaultProps={message:"Loading..."};var S=N,L=n.p+"static/media/correct.87ab3071.wav",M=n.p+"static/media/wrong.9ed0fe46.wav",z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={capitalCity:"",countries:[],options:[],answer:null,score:0,countryInfo:null},t.onCountryClick=function(e){var n=t.state.score;if(e===t.state.answer)new Audio(L).play(),n++;else{var a=new Audio(M);a.volume=.25,a.play()}t.setState({score:n}),t.setCountries()},t.setCountries=function(){var e=t.chooseCountries(t.state.countries,4),n=Math.floor(Math.random()*e.length),a=e[n].capital,r=t.state.countries;if(t.state.countries.length>4){var c=r.indexOf(e[n]);r.splice(c,1)}var o=e[n];t.setState({countryInfo:o,countries:r,capitalCity:a,answer:n,options:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/all",{params:{fields:"name;capital;flag;languages;population;latlng;subregion;currencies"}});case 2:e=t.sent,this.setState({countries:e.data.filter((function(t){return 0!==t.capital.length}))}),this.setCountries();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),a=t.length,r=new Array(a);if(e>a)throw new RangeError("chooseCountries: more elements taken than available");for(;e--;){var c=Math.floor(Math.random()*a);n[e]=t[c in r?r[c]:c],r[c]=--a in r?r[a]:a}return n}},{key:"render",value:function(){return this.state.countryInfo?Object(m.jsxs)("div",{className:"ui container",style:{paddingTop:"50px"},children:[Object(m.jsx)("div",{className:"ui centered huge capitalCity",children:this.state.capitalCity}),Object(m.jsx)(k,{info:this.state.countryInfo,city:this.state.capitalCity}),Object(m.jsxs)("div",{className:"score",children:["Score: ",this.state.score]}),Object(m.jsx)(g,{countries:this.state.options,onCountryClick:this.onCountryClick})]}):Object(m.jsx)(S,{})}}]),n}(r.a.Component),A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(z,{})}}]),n}(r.a.Component);o.a.render(Object(m.jsx)(A,{}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.e54d92bf.chunk.js.map