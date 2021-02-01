(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,a,t){e.exports={container:"Chart_container__1PIOn"}},141:function(e,a,t){},266:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),o=t.n(r),i=t(9),c=t.n(i),s=(t(141),t(36)),l=t(41),d=t(42),u=t(45),h=t(44),b=t(30),j=t(14),m=t(301),p=t(69),f=t(304),O=t(305),v=t(269),x=t(307),g=t(124),y=t.n(g),w=t(316),C=t(314),S=t(306),k=t(303),N=t(11),I=Object(m.a)((function(e){return{root:{flexGrow:1,marginBottom:"2vh"},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({color:"#F1A961"},e.breakpoints.down("xs"),{flexGrow:1,float:"none"}),headerOptions:{display:"flex",flex:1},headerItem:{padding:10,width:"60vw",float:"left",marginLeft:10,marginBottom:"auto",marginTop:"auto",textAlign:"left"},navbar:{backgroundColor:"#0E0E0E"},button:{marginLeft:"1rem",backgroundColor:"#FFFFFF"}}})),B=Object(N.f)((function(e){var a=e.history,t=I(),r=o.a.useState(null),i=Object(b.a)(r,2),c=i[0],s=i[1],l=Boolean(c),d=Object(p.a)(),u=Object(k.a)(d.breakpoints.down("xs")),h=function(e){a.push(e),s(null)},j=function(e){a.push(e)};return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(f.a,{className:t.navbar,position:"dynamic",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(S.a,{onClick:function(){return j("/")},children:Object(n.jsx)(v.a,{align:"left",variant:"h4",className:t.title,children:"Covid-19 Statistics"})}),Object(n.jsx)("div",{children:u?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(n.jsx)(y.a,{})}),Object(n.jsxs)(C.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){return s(null)},children:[Object(n.jsx)(w.a,{onClick:function(){return h("/global-map-total-cases")},children:"Total"}),Object(n.jsx)(w.a,{onClick:function(){return h("/global-map-active-cases")},children:"Active"}),Object(n.jsx)(w.a,{onClick:function(){return h("/global-map-recovered")},children:"Recovered"}),Object(n.jsx)(w.a,{onClick:function(){return h("/global-map-death")},children:"Deaths"}),Object(n.jsx)(w.a,{onClick:function(){return h("/graphs")},children:"Graphs"})]})]}):Object(n.jsx)("div",{className:t.headerOptions,children:Object(n.jsxs)("div",{className:t.headerItem,children:[Object(n.jsx)(S.a,{className:t.button,variant:"contained",onClick:function(){return j("/global-map-total-cases")},children:"Total"}),Object(n.jsx)(S.a,{className:t.button,variant:"contained",onClick:function(){return j("/global-map-active-cases")},children:"Active"}),Object(n.jsx)(S.a,{className:t.button,variant:"contained",onClick:function(){return j("/global-map-recovered")},children:"Recovered"}),Object(n.jsx)(S.a,{className:t.button,variant:"contained",onClick:function(){return j("/global-map-death")},children:"Deaths"}),Object(n.jsx)(S.a,{className:t.button,variant:"contained",onClick:function(){return j("/graphs")},children:"Graphs"})]})})})]})})})})),_=t(19),z=Object(m.a)((function(e){return{map:{width:"99vw",height:"70vh",position:"absolute",marginLeft:"auto",marginRight:"auto",border:"0"}}})),G=function(){var e=z();return Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{className:e.map,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&from=1609769590748&to=1609791190749&panelId=2"})})},F=Object(m.a)((function(e){return{map:{width:"99vw",height:"70vh",position:"absolute",marginLeft:"auto",marginRight:"auto",border:"0"}}})),D=function(){var e=F();return Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{className:e.map,src:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571610389&to=1612194010389&panelId=8"})})},A=t(13),L=t.n(A),M=t(24),P=t(72),E=t.n(P),R="https://covid19.mathdro.id/api",T=function(){var e=Object(M.a)(L.a.mark((function e(a){var t,n,r,o,i,c,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R,a&&(t="".concat(R,"/countries/").concat(a)),e.prev=2,e.next=5,E.a.get(t);case 5:return n=e.sent,r=n.data,o=r.confirmed,i=r.recovered,c=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:o,recovered:i,deaths:c,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),U=function(){var e=Object(M.a)(L.a.mark((function e(){var a,t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(R,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(M.a)(L.a.mark((function e(){var a,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(R,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),K=t(308),H=t(309),J=t(310),q=t(73),Z=t.n(q),Y=t(32),Q=t.n(Y),$=t(56),W=t.n($),X=function(e){var a,t,r=e.data,o=r.confirmed,i=r.recovered,c=r.deaths,s=r.lastUpdate;return o?Object(n.jsx)("div",{className:Q.a.containter,children:Object(n.jsxs)(K.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(K.a,{item:!0,component:H.a,xs:12,md:3,className:W()(Q.a.card,Q.a.infected),children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(Z.a,{start:0,end:o.value,duration:2.5,separator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(K.a,(a={item:!0,component:H.a},Object(j.a)(a,"item",!0),Object(j.a)(a,"component",H.a),Object(j.a)(a,"xs",12),Object(j.a)(a,"md",3),Object(j.a)(a,"className",W()(Q.a.card,Q.a.recovered)),Object(j.a)(a,"children",Object(n.jsxs)(J.a,{children:[Object(n.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(Z.a,{start:0,end:i.value,duration:2.5,separator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})),a)),Object(n.jsx)(K.a,(t={item:!0,component:H.a},Object(j.a)(t,"item",!0),Object(j.a)(t,"component",H.a),Object(j.a)(t,"xs",12),Object(j.a)(t,"md",3),Object(j.a)(t,"className",W()(Q.a.card,Q.a.deaths)),Object(j.a)(t,"children",Object(n.jsxs)(J.a,{children:[Object(n.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(v.a,{variant:"h5",children:Object(n.jsx)(Z.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(n.jsx)(v.a,{color:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(v.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})),t))]})}):"Loading..."},ee=t(88),ae=t(125),te=t.n(ae),ne=function(e){var a=e.data,t=e.country,o=Object(r.useState)([]),i=Object(b.a)(o,2),c=i[0],s=i[1];Object(r.useEffect)((function(){(function(){var e=Object(M.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=c.length?Object(n.jsx)(ee.Line,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:c.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:c.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,d=a.confirmed?Object(n.jsx)(ee.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#F1A961","#8FC488","#C84E5C"],data:[a.confirmed.value,a.recovered.value,a.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Curent state in ".concat(t)}}}):null;return Object(n.jsx)("div",{className:te.a.container,children:t?d:l})},re=t(311),oe=t(315),ie=t(74),ce=t.n(ie),se=function(e){var a=e.handleCountryChange,t=Object(r.useState)([]),o=Object(b.a)(t,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){(function(){var e=Object(M.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsx)("div",{className:ce.a.container,children:Object(n.jsx)(re.a,{className:ce.a.formControl,children:Object(n.jsxs)(oe.a,{className:ce.a.formField,defaultValue:"",onChange:function(e){return a(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),i.map((function(e,a){return Object(n.jsx)("option",{value:e,children:e},a)}))]})})})},le=t(65),de=t.n(le),ue=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(M.a)(L.a.mark((function a(t){var n;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(M.a)(L.a.mark((function e(){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,this.setState({data:a}),console.log(this.state.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return Object(n.jsxs)("div",{className:de.a.container,children:[Object(n.jsx)(X,{data:a}),Object(n.jsx)(se,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(ne,{data:a,country:t})]})}}]),t}(o.a.Component),he=t(313),be=t(312),je=t(126),me=t.n(je),pe=t(53),fe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={input:{},errors:{}},e.handleChange=e.handleChange.bind(Object(pe.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(pe.a)(e)),e}return Object(d.a)(t,[{key:"handleChange",value:function(e){var a=this.state.input;a[e.target.name]=e.target.value,this.setState({input:a})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validate()){console.log(this.state);var a={name:"",email:""};this.setState({input:a}),alert("Thank you for subscribing to our Newsletter");var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,subscriptions:5529})};fetch("http://localhost:5000/api/newsletter",t).then((function(e){return e.json()}))}}},{key:"validate",value:function(){var e=this.state.input,a={},t=!0;(e.name||(t=!1,a.name="Please enter your name."),e.email||(t=!1,a.email="Please enter your email Address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="Please enter valid email address."));return this.setState({errors:a}),t}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{children:"Coronavirus Newsletter - Subscribe to get more information!"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"name",children:"Name:"}),Object(n.jsx)("input",{type:"text",name:"name",value:this.state.input.name,onChange:this.handleChange,class:"form-control",placeholder:"Enter name",id:"name"}),Object(n.jsx)("div",{className:"text-danger",children:this.state.errors.name})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"email",children:"Email Address:"}),Object(n.jsx)("input",{type:"text",name:"email",value:this.state.input.email,onChange:this.handleChange,class:"form-control",placeholder:"Enter email",id:"email"}),Object(n.jsx)("div",{className:"text-danger",children:this.state.errors.email})]}),Object(n.jsx)("input",{type:"submit",value:"Submit",class:"btn btn-success"})]})]})}}]),t}(o.a.Component);function Oe(){return Object(n.jsxs)(v.a,{variant:"body2",color:"white",children:["Copyright \xa9 ",Object(n.jsx)(be.a,{color:"inherit",href:"https://g01.labagh.pl/",children:"Coronavirus COVID-19 statistics"})," ",(new Date).getFullYear(),"."]})}var ve=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"#141619",position:"relative",color:"white"},heart:{color:"#CB515F",fontSize:"20px"},gitHubLink:{color:"#F4AC64"}}})),xe=function(){var e=ve();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsxs)("footer",{className:e.footer,children:[Object(n.jsxs)(he.a,{maxWidth:"sm",children:[Object(n.jsxs)(v.a,{variant:"body3",children:["Made with ",Object(n.jsx)(me.a,{className:e.heart})," by \xa0",Object(n.jsx)(be.a,{className:e.gitHubLink,color:"inherit",href:"https://github.com/Smendowski",children:" Smendowski"}),"\xa0",Object(n.jsx)(be.a,{className:e.gitHubLink,color:"inherit",href:"https://github.com/mmuravytskyi",children:" Muravytskyi"}),"\xa0",Object(n.jsx)(be.a,{className:e.gitHubLink,color:"inherit",href:"https://github.com/KrzysztofSkos",children:" Sko\u015b"})]}),Object(n.jsx)(Oe,{})]}),Object(n.jsx)(fe,{})]})})},ge=t(127),ye=t.n(ge),we=(t(265),Object(m.a)((function(e){return{el:{marginLeft:"auto",marginRight:"auto",border:"0"}}}))),Ce=function(){var e=we(),a=Object(r.useState)("Poland"),t=Object(b.a)(a,2),o=t[0],i=t[1],c=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Central African Republic","Chad","Chile","Colombia","Comoros","Congo","Costa Rica","C\xf4te d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Diamond Princess","Djibouti","Dominica","Dominican Republic","DRC","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","MS Zaandam","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","S. Korea","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Trinidad and Tobago","Tunisia","Turkey","UAE","Uganda","UK","Ukraine","Uruguay","USA","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],s=c[0];return Object(n.jsxs)("div",{children:[Object(n.jsx)(ye.a,{options:c,onChange:function(e){i(e.value)},value:s,placeholder:"Select an option",width:"200px"}),Object(n.jsx)(_.a,{className:e.el,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=".concat(o,"&var-is_admin=false&from=1580571504166&to=1612193904166&panelId=26"),frameBorder:"0",height:"300px",width:"70%"}),Object(n.jsx)(_.a,{className:e.el,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=".concat(o,"&var-is_admin=false&from=1580571878169&to=1612194278169&panelId=14"),frameBorder:"0",height:"300px",width:"70%"}),Object(n.jsx)(_.a,{className:e.el,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-is_admin=false&from=1580571669436&to=1612194069436&panelId=24",frameBorder:"0",height:"300px",width:"50%"}),Object(n.jsx)(_.a,{className:e.el,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-is_admin=false&from=1580571690838&to=1612194090838&panelId=22",frameBorder:"0",height:"300px",width:"50%"}),Object(n.jsx)(_.a,{className:e.el,url:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-is_admin=false&from=1580571898537&to=1612194298537&panelId=4",frameBorder:"0",height:"600px",width:"80%"})]})},Se=t(85),ke=Object(m.a)((function(e){return{map:{width:"99vw",height:"70vh",position:"absolute",marginLeft:"auto",marginRight:"auto",border:"0"}}})),Ne=function(){var e=ke();return Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{className:e.map,src:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571758022&to=1612194158022&panelId=12"})})},Ie=Object(m.a)((function(e){return{map:{width:"99vw",height:"70vh",position:"absolute",marginLeft:"auto",marginRight:"auto",border:"0"}}})),Be=function(){var e=Ie();return Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{className:e.map,src:"http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571856859&to=1612194256859&panelId=10"})})},_e=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(d.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(Se.a,{children:[Object(n.jsx)(B,{}),Object(n.jsxs)(N.c,{children:[Object(n.jsx)(N.a,{exact:!0,from:"/",render:function(e){return Object(n.jsx)(ue,Object(s.a)({},e))}}),Object(n.jsx)(N.a,{exact:!0,from:"/global-map-total-cases",render:function(e){return Object(n.jsx)(G,Object(s.a)({},e))}}),Object(n.jsx)(N.a,{exact:!0,from:"/global-map-active-cases",render:function(e){return Object(n.jsx)(D,Object(s.a)({},e))}}),Object(n.jsx)(N.a,{exact:!0,from:"/global-map-recovered",render:function(e){return Object(n.jsx)(Ne,Object(s.a)({},e))}}),Object(n.jsx)(N.a,{exact:!0,from:"/global-map-death",render:function(e){return Object(n.jsx)(Be,Object(s.a)({},e))}}),Object(n.jsx)(N.a,{exact:!0,from:"/graphs",render:function(e){return Object(n.jsx)(Ce,Object(s.a)({},e))}})]}),Object(n.jsx)(xe,{})]})})}}]),t}(o.a.Component);c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(_e,{})}),document.getElementById("root"))},32:function(e,a,t){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},65:function(e,a,t){},74:function(e,a,t){e.exports={container:"CountryPicker_container__2vyxG",formControl:"CountryPicker_formControl__2p8f9",formField:"CountryPicker_formField__qc9KN"}}},[[266,1,2]]]);
//# sourceMappingURL=main.e136b67c.chunk.js.map