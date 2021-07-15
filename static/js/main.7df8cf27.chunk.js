(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{34:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(9),s=n.n(i),c=n(10),r=n(11),u=n(13),l=n(12),d=n(16),j=n.n(d),h=n(26),b=(n(34),n(27)),p=n.n(b).a.create({baseURL:"https://restcountries.eu/rest/v2"}),m=(n(53),n(1)),f=function(t){var e=t.country,n=t.onCountryClick,o=t.option;return Object(m.jsx)("div",{className:"eight wide column center aligned",children:Object(m.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(o)},children:[e.name,Object(m.jsx)("img",{className:"flag",alt:"Flag of ".concat(e.name),src:e.flag})]})})},O=function(t){var e=t.countries,n=t.onCountryClick;return Object(m.jsxs)("div",{className:"ui two centered grid",children:[Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[0],onCountryClick:n,option:0}),Object(m.jsx)(f,{country:e[1],onCountryClick:n,option:1})]}),Object(m.jsxs)("div",{className:"sixteen column centered row",children:[Object(m.jsx)(f,{country:e[2],onCountryClick:n,option:2}),Object(m.jsx)(f,{country:e[3],onCountryClick:n,option:3})]})]})},x=n(5),g=(n(55),n(58)),C=n(61),y=n(59),v=n(60),k=function(t){var e=t.info,n=Number(e.population).toLocaleString(),a=Number(e.latlng[0]),i=Number(e.latlng[1]),s=e.subregion,c=e.languages.map((function(t){return t.name})).join(", "),r=e.currencies.map((function(t){return t.name})).join(", "),u=Object(o.useState)(null),l=Object(x.a)(u,2),d=l[0],j=l[1];return d&&d.flyTo([a,i],3),Object(m.jsxs)(g.a,{center:[a,i],zoom:3,zoomControl:!1,whenCreated:j,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,dragging:!1,children:[Object(m.jsx)(C.a,{url:"https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(m.jsx)(y.a,{position:[a,i],keepInView:!0,children:Object(m.jsxs)(v.a,{className:"info",permanent:!0,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Population:"})," ",n]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Region:"})," ",s]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Languages:"})," ",c]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Currencies:"})," ",r]})]})})]})},w=function(t){return Object(m.jsx)("div",{className:"ui active",children:Object(m.jsx)("div",{className:"ui big text loader",children:t.message})})};w.defaultProps={message:"Loading..."};var N=w,S=n.p+"static/media/correct.87ab3071.wav",A=n.p+"static/media/wrong.9ed0fe46.wav",I=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).onCountryClick=function(t){var e,n=o.state.score;t===o.state.answer?(e=new Audio(S),n++):(e=new Audio(A)).volume=.25,o.state.audio&&e.play(),o.setState({score:n,total:o.state.total+1}),o.setCountries()},o.setCountries=function(){var t=o.chooseCountries(o.state.countries,4),e=Math.floor(Math.random()*t.length),n=t[e].capital,a=o.state.countries,i=a.indexOf(t[e]);a.splice(i,1);var s=t[e];o.setState({countryInfo:s,countries:a,capitalCity:n,answer:e,options:t})},o.onResetClick=function(){o.setState({countries:o.state.history,capitalCity:"",options:[],answer:null,score:0,countryInfo:null,total:0}),o.setCountries()},o.onAudioClick=function(){o.setState({audio:!o.state.audio})},o.state={history:[],capitalCity:"",countries:[],options:[],answer:null,score:0,countryInfo:null,total:0,audio:!0},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(j.a.mark((function t(){var e,n,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/all",{params:{fields:"name;capital;flag;languages;population;latlng;subregion;currencies"}});case 2:e=t.sent,n=new Set(["Holy See"]),e.data=e.data.filter((function(t){return!n.has(t.name)})),o=e.data.filter((function(t){return 0!==t.capital.length})),this.setState({countries:o,history:o}),this.setCountries();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),o=t.length,a=new Array(o);if(e>o)throw new RangeError("chooseCountries: more elements taken than available");for(;e--;){var i=Math.floor(Math.random()*o);n[e]=t[i in a?a[i]:i],a[i]=--o in a?a[o]:o}return n}},{key:"render",value:function(){if(!this.state.countryInfo)return Object(m.jsx)(N,{});var t,e=Object(m.jsxs)("div",{className:"ui right floated secondary animated button resetButton",onClick:this.onResetClick,tabIndex:"0",children:[Object(m.jsx)("div",{className:"visible content",children:"Reset Game"}),Object(m.jsx)("div",{className:"hidden content",children:Object(m.jsx)("i",{className:"undo alternate icon"})})]});return t=this.state.audio?Object(m.jsx)("button",{className:"positive ui right floated button audioButton",onClick:this.onAudioClick,children:"Audio On"}):Object(m.jsx)("button",{className:"negative ui right floated button audioButton",onClick:this.onAudioClick,children:"Audio Off"}),Object(m.jsxs)("div",{className:"ui container",style:{paddingTop:"30px",paddingBottom:"25px"},children:[Object(m.jsxs)("div",{className:"titleHeader",children:[Object(m.jsx)("div",{className:"ui centered huge header capitalCity noselect",children:this.state.capitalCity}),Object(m.jsxs)("div",{className:"small ui buttons buttonsContainer",children:[e,t]})]}),Object(m.jsx)(k,{info:this.state.countryInfo,city:this.state.capitalCity}),Object(m.jsx)(O,{countries:this.state.options,onCountryClick:this.onCountryClick}),Object(m.jsxs)("div",{className:"ui score huge header noselect",children:["Score: ",this.state.score," ",0!==this.state.total?"out of ".concat(this.state.total):""," "]})]})}}]),n}(a.a.Component),R=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)(I,{})}}]),n}(a.a.Component);s.a.render(Object(m.jsx)(R,{}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.7df8cf27.chunk.js.map