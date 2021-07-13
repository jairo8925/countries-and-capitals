(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{34:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),s=n.n(c),o=n(10),i=n(11),u=n(13),l=n(12),j=n(16),h=n.n(j),p=n(26),d=(n(34),n(27)),b=n.n(d).a.create({baseURL:"https://restcountries.eu/rest/v2"}),m=(n(53),n(1)),f=function(t){var e=t.country,n=t.onCountryClick,r=t.option;return Object(m.jsx)("div",{className:"eight wide column center aligned",children:Object(m.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(r)},children:[e.name,Object(m.jsx)("img",{className:"flag",alt:"Flag of ".concat(e.name),src:e.flag})]})})},g=function(t){var e=t.countries,n=t.onCountryClick,r=t.answer;return Object(m.jsxs)("div",{className:"ui two centered grid",children:[Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[0],onCountryClick:n,option:0,answer:r}),Object(m.jsx)(f,{country:e[1],onCountryClick:n,option:1,answer:r})]}),Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[2],onCountryClick:n,option:2,answer:r}),Object(m.jsx)(f,{country:e[3],onCountryClick:n,option:3,answer:r})]})]})},O=(n(55),n(58)),x=n(61),y=n(59),v=n(60),C=n(3),w=n.n(C),k=function(t){var e=t.info,n=Number(e.population).toLocaleString(),r=Number(e.latlng[0]),a=Number(e.latlng[1]),c=e.subregion,s=e.languages.map((function(t){return t.name})).join(", "),o=e.currencies.map((function(t){return t.name})).join(", "),i=w.a.latLng(-90,-200),u=w.a.latLng(90,200),l=w.a.latLngBounds(i,u);return Object(m.jsxs)(O.a,{center:[5,0],zoom:2,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,maxBoundsViscosity:.95,maxBounds:l,children:[Object(m.jsx)(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(m.jsx)(y.a,{position:[r,a],keepInView:!0,autoPan:!0,children:Object(m.jsxs)(v.a,{className:"info",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Population:"})," ",n]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Region:"})," ",c]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Languages:"})," ",s]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Currencies:"})," ",o]})]})})]})},N=function(t){return Object(m.jsx)("div",{className:"ui active",children:Object(m.jsx)("div",{className:"ui big text loader",children:t.message})})};N.defaultProps={message:"Loading..."};var S=N,L=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={capitalCity:"",countries:[],options:[],answer:null,score:0,countryInfo:null},t.onCountryClick=function(e){t.setState({score:e===t.state.answer?t.state.score+1:t.state.score}),t.setCountries()},t.setCountries=function(){var e=t.chooseCountries(t.state.countries,4),n=Math.floor(Math.random()*e.length),r=e[n].capital,a=t.state.countries;if(t.state.countries.length>4){var c=a.indexOf(e[n]);a.splice(c,1)}var s=e[n];t.setState({countryInfo:s,countries:a,capitalCity:r,answer:n,options:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/all",{params:{fields:"name;capital;flag;languages;population;latlng;subregion;currencies"}});case 2:e=t.sent,this.setState({countries:e.data.filter((function(t){return 0!==t.capital.length}))}),this.setCountries();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),r=t.length,a=new Array(r);if(e>r)throw new RangeError("chooseCountries: more elements taken than available");for(;e--;){var c=Math.floor(Math.random()*r);n[e]=t[c in a?a[c]:c],a[c]=--r in a?a[r]:r}return n}},{key:"render",value:function(){return this.state.countryInfo?Object(m.jsxs)("div",{className:"ui container",style:{paddingTop:"50px"},children:[Object(m.jsx)("div",{className:"ui centered huge capitalCity",children:this.state.capitalCity}),Object(m.jsx)(k,{info:this.state.countryInfo,city:this.state.capitalCity}),Object(m.jsxs)("div",{className:"score",children:["Score: ",this.state.score]}),Object(m.jsx)(g,{countries:this.state.options,onCountryClick:this.onCountryClick})]}):Object(m.jsx)(S,{})}}]),n}(a.a.Component),M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(L,{})}}]),n}(a.a.Component);s.a.render(Object(m.jsx)(M,{}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.9cf6d22a.chunk.js.map