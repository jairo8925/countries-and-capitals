(this["webpackJsonpcountries-and-capitals"]=this["webpackJsonpcountries-and-capitals"]||[]).push([[0],{33:function(t,e,n){},35:function(t,e,n){},54:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(9),o=n.n(i),r=n(10),c=n(11),l=n(13),u=n(12),d=(n(33),n(16)),h=n.n(d),j=n(26),b=(n(35),n(27)),m=n.n(b).a.create({baseURL:"https://restcountries.com/v2"}),p=(n(54),n(0)),f=function(t){var e=t.country,n=t.onCountryClick,a=t.option;return Object(p.jsx)("div",{className:"eight wide column center aligned",children:Object(p.jsxs)("div",{className:"ui huge segment country noselect",onClick:function(){return n(a)},children:[e.name,Object(p.jsx)("img",{className:"flag",alt:"Flag of ".concat(e.name),src:e.flags.png})]})})},O=function(t){var e=t.countries,n=t.onCountryClick;return Object(p.jsxs)("div",{className:"ui two centered grid",children:[Object(p.jsxs)("div",{className:"sixteen column centered row",children:[Object(p.jsx)(f,{country:e[0],onCountryClick:n,option:0}),Object(p.jsx)(f,{country:e[1],onCountryClick:n,option:1})]}),Object(p.jsxs)("div",{className:"sixteen column centered row",children:[Object(p.jsx)(f,{country:e[2],onCountryClick:n,option:2}),Object(p.jsx)(f,{country:e[3],onCountryClick:n,option:3})]})]})},C=n(5),y=(n(56),n(59)),g=n(62),v=n(60),x=n(61),k=function(t){var e=t.info,n=Number(e.population).toLocaleString(),s=Number(e.latlng[0]),i=Number(e.latlng[1]),o=e.subregion,r=e.languages.map((function(t){return t.get})).join(", "),c=Object(a.useState)(null),l=Object(C.a)(c,2),u=l[0],d=l[1];return u&&u.flyTo([s,i],3),Object(p.jsxs)(y.a,{center:[s,i],zoom:3,zoomControl:!1,whenCreated:d,doubleClickZoom:!1,touchZoom:!1,zoomSnap:!1,zoomDelta:!1,trackResize:!1,scrollWheelZoom:!1,dragging:!1,children:[Object(p.jsx)(g.a,{url:"https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(p.jsx)(v.a,{position:[s,i],keepInView:!0,children:Object(p.jsxs)(x.a,{className:"info",permanent:!0,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Population:"})," ",n]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Region:"})," ",o]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Languages:"})," ",r]})]})})]})},S=function(t){return Object(p.jsx)("div",{className:"ui active",children:Object(p.jsx)("div",{className:"ui big text loader",children:t.message})})};S.defaultProps={message:"Loading..."};var N=S,w=n.p+"static/media/correct.87ab3071.wav",I=n.p+"static/media/wrong.9ed0fe46.wav",M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).onCountryClick=function(t){var e,n=a.state.score;t===a.state.answer?(e=new Audio(w),n++):(e=new Audio(I)).volume=.15,a.state.audio&&e.play(),a.setState({attempts:a.state.attempts+1,score:n}),a.setCountries()},a.setCountries=function(){var t=a.chooseCountries(a.state.countries,4),e=Math.floor(Math.random()*t.length),n=t[e].capital,s=a.state.countries,i=s.indexOf(t[e]);s.splice(i,1);var o=t[e];a.setState({countryInfo:o,countries:s,capitalCity:n,answer:e,options:t})},a.onResetClick=function(){a.setState({countries:a.state.history,capitalCity:"",options:[],answer:null,score:0,countryInfo:null,attempts:0}),a.setCountries()},a.onAudioClick=function(){a.setState({audio:!a.state.audio})},a.state={history:[],capitalCity:"",countries:[],options:[],answer:null,score:0,countryInfo:null,total:0,attempts:0,audio:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(h.a.mark((function t(){var e,n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("/all",{});case 2:e=t.sent,n=new Set(["\xc5land Islands","American Samoa","Anguilla","Aruba","Azerbaijan","Bermuda","Bonaire, Sint Eustatius and Saba","Bouvet Island","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Cayman Islands","Cocos (Keeling) Islands","Christmas Island","Cook Islands","Cura\xe7ao","Falkland Islands (Malvinas)","Faroe Islands","French Guiana","French Polynesia","French Southern Territories","Gibraltar","Guadeloupe","Guam","Guernsey","Heard Island and McDonald Islands","Holy See","Isle of Man","Jersey","Macao","Martinique","Mayotte","Montserrat","New Caledonia","Norfolk Island","Northern Mariana Islands","R\xe9union","Saint Barth\xe9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Martin (French part)","Saint Pierre and Miquelon","Sint Maarten (Dutch part)","South Georgia and the South Sandwich Islands","Svalbard and Jan Mayen","Tokelau","Turks and Caicos Islands","Uzbekistan","Wallis and Futuna","Western Sahara"]),e.data=e.data.filter((function(t){return!n.has(t.name)})),a=e.data.filter((function(t){return t.capital&&0!==t.capital.length})),this.setState({countries:a,history:a,total:a.length-4}),this.setCountries();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"chooseCountries",value:function(t,e){var n=new Array(e),a=t.length,s=new Array(a);if(e>a)throw new RangeError("chooseCountries: more elements taken than available");for(;e--;){var i=Math.floor(Math.random()*a);n[e]=t[i in s?s[i]:i],s[i]=--a in s?s[a]:a}return n}},{key:"render",value:function(){if(!this.state.countryInfo)return Object(p.jsx)(N,{});var t,e=Object(p.jsxs)("div",{className:"ui right floated secondary animated button resetButton",onClick:this.onResetClick,tabIndex:"0",children:[Object(p.jsx)("div",{className:"visible content",children:"Reset"}),Object(p.jsx)("div",{className:"hidden content",children:Object(p.jsx)("i",{className:"undo alternate icon"})})]});return this.state.countries.length-4===0?Object(p.jsx)("div",{className:"score-container",children:Object(p.jsxs)("div",{className:"final-score",children:[Object(p.jsxs)("h1",{children:["Final Score: ",this.state.score," out of ",this.state.total]}),Object(p.jsx)("button",{className:"ui start-over-button primary button",onClick:this.onResetClick,children:"Start Over"})]})}):(t=this.state.audio?Object(p.jsx)("button",{className:"positive ui right floated button audioButton",onClick:this.onAudioClick,children:"Audio On"}):Object(p.jsx)("button",{className:"negative ui right floated button audioButton",onClick:this.onAudioClick,children:"Audio Off"}),Object(p.jsxs)("div",{className:"ui container game",children:[Object(p.jsxs)("div",{className:"three ui buttons buttons-container",children:[t,Object(p.jsx)("button",{className:"ui primary icon button",onClick:this.props.onHomeClick,children:Object(p.jsx)("i",{className:"home icon"})}),e]}),Object(p.jsx)(k,{info:this.state.countryInfo,city:this.state.capitalCity}),Object(p.jsx)("div",{className:"ui centered huge header capital-city noselect",children:this.state.capitalCity}),Object(p.jsxs)("div",{className:"ui score huge header noselect",children:["Score: ",this.state.score," ",0!==this.state.attempts?"out of ".concat(this.state.total," (").concat(this.state.attempts-this.state.score," wrong)"):""," "]}),Object(p.jsx)(O,{countries:this.state.options,onCountryClick:this.onCountryClick})]}))}}]),n}(s.a.Component),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={running:!1},t.onHomeClick=function(){t.setState({running:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return this.state.running?Object(p.jsx)(M,{onHomeClick:this.onHomeClick}):Object(p.jsx)("div",{className:"home-container",children:Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h1",{children:"Countries and Capitals"}),Object(p.jsx)("p",{children:"Choose which country the capital city belongs"}),Object(p.jsx)("button",{className:"ui start-button primary button",onClick:function(){return t.setState({running:!0})},children:"Start"})]})})}}]),n}(s.a.Component);o.a.render(Object(p.jsx)(A,{}),document.querySelector("#root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.505240c4.chunk.js.map