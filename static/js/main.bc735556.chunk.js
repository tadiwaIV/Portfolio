(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{27:function(e,t,c){},30:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(20),i=c.n(s),n=(c(27),c(6)),r=c(7),o=c(9),l=c(8),j=c(17),d=c(21),h=c.n(d),m=(c(30),c(22)),b=c(5),u=c.n(b),p=c(0),O=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(m.a,{type:"square",bg:!0}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)(u.a,{bottom:!0,children:Object(p.jsx)("h1",{className:"responsive-headline",children:"Tadiwa Chivhere"})}),Object(p.jsx)(u.a,{bottom:!0,duration:1200,children:Object(p.jsx)("h3",{children:"Front-End Web Designer"})})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),c}(a.Component),x=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(u.a,{bottom:!0,children:Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsxs)("ul",{className:"social-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.facebook.com/tadiwa.chivhere",children:Object(p.jsx)("i",{class:"fa fa-facebook"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tadiwa-chivhere-93a54116a/",children:Object(p.jsx)("i",{class:"fa fa-linkedin"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/tadiwaIV",children:Object(p.jsx)("i",{class:"fa fa-github"})})})]})})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(a.Component),g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.image;var e=this.props.data.resumedownload;return Object(p.jsx)("section",{id:"about",children:Object(p.jsx)(u.a,{duration:1e3,children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"three columns",children:Object(p.jsx)("img",{className:"profile-pic",src:"images/profilepic2.JPG",alt:"Profile Pic"})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:"I\u2019m a recent University grad with a major in Computer Science. I\u2019m on the lookout for an opportunity that\u2019ll enable me to persue my passion for computersall the while providing me the oppurtunits to kickstart a career in Frontend Web Development. Im an avid gamer and sport enthusiast and enjoy the meeting and working with different types of people. I\u2019m a very social individual who prefers to work in a team."}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"columns contact-details",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{className:"address",children:[Object(p.jsx)("i",{className:"fa fa-map-marker"}),"Port Elizabeth, RSA",Object(p.jsx)("br",{}),Object(p.jsx)("i",{className:"fa fa-envelope"}),"tadiwachivhere@gmail.com",Object(p.jsx)("br",{}),Object(p.jsx)("i",{class:"fa fa-link"}),"https://www.website.com"]})]}),Object(p.jsx)("div",{className:"columns download",children:Object(p.jsx)("p",{children:Object(p.jsxs)("a",{href:e,className:"button",children:[Object(p.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),c}(a.Component),f=function(e){var t=e.bgcolor,c=e.completed,a=e.programmingLanguage,s={height:"100%",width:"".concat(c,"%"),transition:"width 1s ease-in-out",backgroundColor:t,borderRadius:"inherit",textAlign:"right"};return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{style:{padding:5,color:"black",fontWeight:"bold"},children:"".concat(a)}),Object(p.jsx)("div",{style:{height:45,width:"100%",backgroundColor:"#333333",marginBottom:50},children:Object(p.jsx)("div",{style:s})})]})},v=[{bgcolor:"#6a1b9a",completed:87,programmingLanguage:"HTML5"},{bgcolor:"#00695c",completed:92,programmingLanguage:"Css3"},{bgcolor:"#ef6c00",completed:85,programmingLanguage:"Bootstrap"},{bgcolor:"#9fa1d2",completed:69,programmingLanguage:"PHP"},{bgcolor:"#e83847",completed:83,programmingLanguage:"Javascript"},{bgcolor:"#feaf95",completed:78,programmingLanguage:"ReactJS"},{bgcolor:"#ef9e2b",completed:84,programmingLanguage:"Git"},{bgcolor:"#59d694",completed:90,programmingLanguage:"Github"},{bgcolor:"#514d26",completed:80,programmingLanguage:"Python"},{bgcolor:"#c20fa0",completed:76,programmingLanguage:"Java"}],w=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.data?Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("h3",{children:"National University Of Science And Technology"}),Object(p.jsxs)("p",{className:"info",children:["Bsc in Computer Science ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:"AUG 2016 - OCT 2020"})]}),Object(p.jsx)("p",{children:"I have recently completed my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects"}),Object(p.jsx)("h3",{children:"Primary and Higher Education"}),Object(p.jsx)("p",{className:"info",children:Object(p.jsx)("em",{className:"date",children:" JAN 2004 - NOV 2015"})}),Object(p.jsx)("p",{children:"I have completed my higher secondary education with major subjects as Physics, Computer Science & Maths with. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems."})]})})})]})}),Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Work"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h3",{children:"Intern - Grain Marketing Board(GMB)"}),Object(p.jsxs)("p",{className:"info",children:["Desktop Suppport Technician",Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:" SEP 2018 - AUG 2019 "})]}),Object(p.jsx)("p",{children:"Responsibilities included the design and installation of well-functioning computer networks, connections and cabling. Other tasks included performing system failure troubleshooting and identifying network bottlenecks to ensure long-term network efficiency, software testing and configuration, hardware and peripheral equipment maintenance and repair."})]})]})}),Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row skill",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Skills"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"bars",children:Object(p.jsx)("div",{className:"App",children:v.map((function(e,t){return Object(p.jsx)(f,{bgcolor:e.bgcolor,completed:e.completed,programmingLanguage:e.programmingLanguage},t)}))})})})]})})]}):null}}]),c}(a.Component),N=(a.Component,c(52)),k=c(53),y=c(54),D=(c(41),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.data?Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsxs)(u.a,{left:!0,duration:1e3,distance:"10px",children:[Object(p.jsxs)(N.a,{children:[Object(p.jsx)(k.a,{children:Object(p.jsx)("div",{className:"twelve columns collapsed",children:Object(p.jsx)("h1",{children:"Check Out Some of My Projects"})})}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/Nike-Website",children:Object(p.jsx)("img",{src:"images/portfolio/NikeConcept.JPG",alt:"Nike Concept Page"})}),Object(p.jsx)("span",{class:"title",children:"Nike Concept Page"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/GigaGames",children:Object(p.jsx)("img",{src:"images/portfolio/GigaGames.JPG",alt:"Giga Games"})}),Object(p.jsx)("span",{class:"title",children:"Giga Games"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/vibe-check",children:Object(p.jsx)("img",{src:"images/portfolio/VibeCheck.JPG",alt:"VibeCheck"})}),Object(p.jsx)("span",{class:"title",children:"Vibe Check"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/survey-form",children:Object(p.jsx)("img",{src:"images/portfolio/SurveyForm.JPG",alt:"Survey Form"})}),Object(p.jsx)("span",{class:"title",children:"Survey Form"})]})})]})]}),Object(p.jsx)(N.a,{children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/Door-2-Door",children:Object(p.jsx)("img",{src:"images/portfolio/Door2Door.JPG",alt:"Door2Door"})}),Object(p.jsx)("span",{class:"title",children:"Door2Door"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/quote-generator",children:Object(p.jsx)("img",{src:"images/portfolio/QuoteGenerator.JPG",alt:"Quote Generator"})}),Object(p.jsx)("span",{class:"title",children:"Quote Generator"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/tech-doc",children:Object(p.jsx)("img",{src:"images/portfolio/TechDoc.JPG",alt:"Technical Documentation"})}),Object(p.jsx)("span",{class:"title",children:"Technical Documentation"})]})}),Object(p.jsx)(y.a,{sm:12,children:Object(p.jsxs)("div",{class:"item-wrap",children:[Object(p.jsx)("a",{href:"https://github.com/tadiwaIV/tribute-page",children:Object(p.jsx)("img",{src:"images/portfolio/TributePage.JPG",alt:"Tribute Page"})}),Object(p.jsx)("span",{class:"title",children:"Tribute Page"})]})})]})})]})}):null}}]),c}(a.Component)),C=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(c,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,c){console.log(c),alert(c)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{data:this.state.resumeData.main}),Object(p.jsx)(g,{data:this.state.resumeData.main}),Object(p.jsx)(w,{data:this.state.resumeData.resume}),Object(p.jsx)(D,{data:this.state.resumeData.portfolio}),Object(p.jsx)(x,{data:this.state.resumeData.main})]})}}]),c}(a.Component),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};i.a.render(Object(p.jsx)(C,{}),document.getElementById("root")),P()}},[[50,1,2]]]);
//# sourceMappingURL=main.bc735556.chunk.js.map