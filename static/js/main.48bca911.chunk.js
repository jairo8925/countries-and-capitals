(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{34:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(13),r=n.n(s),c=n(5),i=n(6),l=n(9),u=n(8),p=n(16),h=n.n(p),j=n(26),f=(n(34),n(27)),g=n.n(f).a.create({baseURL:"https://restcountries.eu/rest/v2"}),d=(n(53),n(1)),b=function(t){var e=t.country,n=t.onCountryClick,a=t.option,o=t.flag;return Object(d.jsx)("div",{className:"eight wide column center aligned",children:Object(d.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(a)},children:[e,Object(d.jsx)("img",{className:"flag",alt:"Flag of ".concat(e),src:o})]})})},y=function(t){var e=t.countries,n=t.onCountryClick,a=t.answer,o=t.flags;return Object(d.jsxs)("div",{className:"ui two centered grid",children:[Object(d.jsxs)("div",{className:"sixteen column centered row",children:[Object(d.jsx)(b,{country:e[0],onCountryClick:n,option:0,answer:a,flag:o[0]}),Object(d.jsx)(b,{country:e[1],onCountryClick:n,option:1,answer:a,flag:o[1]})]}),Object(d.jsxs)("div",{className:"sixteen column centered row",children:[Object(d.jsx)(b,{country:e[2],onCountryClick:n,option:2,answer:a,flag:o[2]}),Object(d.jsx)(b,{country:e[3],onCountryClick:n,option:3,answer:a,flag:o[3]})]})]})},m=(n(55),n(58)),O=n(61),x=n(59),C=n(60),v=n(3),k=n.n(v),w=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=k.a.latLng(-90,-200),e=k.a.latLng(90,200),n=k.a.latLngBounds(t,e),a=[];return this.props.info.languages&&(a=this.props.info.languages.map((function(t){return t.name}))),Object(d.jsxs)(m.a,{center:[5,0],zoom:2,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,maxBoundsViscosity:1,maxBounds:n,children:[Object(d.jsx)(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(d.jsx)(x.a,{position:[Number(this.props.lat),Number(this.props.long)],keepInView:!0,autoPan:!0,children:Object(d.jsxs)(C.a,{children:[Object(d.jsxs)("p",{children:["Population: ",this.props.info.population]}),Object(d.jsxs)("p",{children:["Language(s): ",a.length>0?a.join(", "):""]})]})})]})}}]),n}(o.a.Component),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={countryInfo:[],capitalCity:"",lat:null,long:null,countries:[],flags:[],options:[],answer:null,score:0},t.onCountryClick=function(e){t.setState({score:e===t.state.answer?t.state.score+1:t.state.score}),t.setCountries()},t.setCountries=function(){var e=t.chooseCountries(t.state.countries,4),n=Math.floor(Math.random()*e.length),a=e[n].capital,o=e[n].latlng[0],s=e[n].latlng[1],r=t.state.countries;if(t.state.countries.length>4){var c=r.indexOf(e[n]);r.splice(c,1)}var i=[],l=[];e.forEach((function(t){l.push(t.name),i.push(t.flag)})),console.log(e[n]),t.setState({countryInfo:e[n],countries:r,capitalCity:a,lat:o,long:s,answer:n,options:l,flags:i})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/all");case 2:e=t.sent,this.setState({countries:e.data.filter((function(t){return 0!==t.capital.length}))}),this.setCountries();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),a=t.length,o=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");for(;e--;){var s=Math.floor(Math.random()*a);n[e]=t[s in o?o[s]:s],o[s]=--a in o?o[a]:a}return n}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"ui container",style:{paddingTop:"50px"},children:[Object(d.jsx)("div",{className:"ui centered huge capitalCity",children:this.state.capitalCity}),Object(d.jsx)(w,{info:this.state.countryInfo,city:this.state.capitalCity,lat:this.state.lat,long:this.state.long}),Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{className:"score",children:["Score: ",this.state.score]})}),Object(d.jsx)(y,{flags:this.state.flags,countries:this.state.options,onCountryClick:this.onCountryClick})]})}}]),n}(o.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(N,{})}}]),n}(o.a.Component);r.a.render(Object(d.jsx)(S,{}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.48bca911.chunk.js.map