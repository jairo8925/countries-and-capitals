(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{33:function(t,e,n){},52:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),s=n.n(o),c=n(5),i=n(6),u=n(9),l=n(8),p=n(15),h=n.n(p),j=n(26),d=(n(33),n(27)),b=n.n(d).a.create({baseURL:"https://restcountries.eu/rest/v2"}),m=(n(52),n(1)),y=function(t){var e=t.country,n=t.onCountryClick,a=t.option;return Object(m.jsx)("div",{className:"six wide column center aligned",children:Object(m.jsx)("div",{className:"ui huge segment city noselect",onClick:function(){return n(a)},children:e})})},f=function(t){var e=t.countries,n=t.onCountryClick,a=t.answer;return Object(m.jsxs)("div",{className:"ui two centered grid",children:[Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(y,{country:e[0],onCountryClick:n,option:0,answer:a}),Object(m.jsx)(y,{country:e[1],onCountryClick:n,option:1,answer:a})]}),Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(y,{country:e[2],onCountryClick:n,option:2,answer:a}),Object(m.jsx)(y,{country:e[3],onCountryClick:n,option:3,answer:a})]})]})},O=(n(54),n(58)),C=n(60),v=n(59),x=n(4),g=n.n(x),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=g.a.latLng(-90,-200),e=g.a.latLng(90,200),n=g.a.latLngBounds(t,e);return Object(m.jsxs)(O.a,{center:[5,0],zoom:2,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,maxBoundsViscosity:1,maxBounds:n,children:[Object(m.jsx)(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(m.jsx)(v.a,{position:[Number(this.props.lat),Number(this.props.long)],keepInView:!0,autoPan:!0})]})}}]),n}(r.a.Component),w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={capitalCity:"",lat:null,long:null,countries:[],options:[],answer:null,score:0},t.onCountryClick=function(e){t.setState({score:e===t.state.answer?t.state.score+1:t.state.score}),t.setCountries()},t.setCountries=function(){var e=t.chooseCountries(t.state.countries,4),n=Math.floor(Math.random()*e.length),a=e[n].capital,r=e[n].latlng[0],o=e[n].latlng[1];t.setState({capitalCity:a,lat:r,long:o,options:e.map((function(t){return t.name})),answer:n})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/all",{params:{fields:"name;capital;latlng"}});case 2:e=t.sent,this.setState({countries:e.data.filter((function(t){return 0!==t.capital.length}))}),this.setCountries();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),a=t.length,r=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");for(;e--;){var o=Math.floor(Math.random()*a);n[e]=t[o in r?r[o]:o],r[o]=--a in r?r[a]:a}return n}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ui container",style:{paddingTop:"50px"},children:[Object(m.jsx)("div",{className:"ui centered huge capitalCity",children:this.state.capitalCity}),Object(m.jsx)(k,{city:this.state.capitalCity,lat:this.state.lat,long:this.state.long}),Object(m.jsx)(f,{countries:this.state.options,onCountryClick:this.onCountryClick}),Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{className:"score",children:["Score: ",this.state.score]})})]})}}]),n}(r.a.Component),N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(w,{})}}]),n}(r.a.Component);s.a.render(Object(m.jsx)(N,{}),document.querySelector("#root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.96ec2873.chunk.js.map