(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(40)},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),m=t(10),r=t.n(m),c=(t(5),(new Date).getFullYear()),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"bg-secondary text-center w-100 text-white"},l.a.createElement("p",null,c," SK. All Rights Reserved | Terms and conditions.")))},o=t(3),i=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"header",className:"d-flex align-items-center"},l.a.createElement("div",{className:"container-fluid nav_bg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"},l.a.createElement("h1",null,e.name," ",l.a.createElement("strong",{className:"brand-name"}," Our Team")),l.a.createElement("h2",{className:"my-3"},"We are the team of talented developer making websites"),l.a.createElement("div",{className:"mt-3"},l.a.createElement(o.b,{to:e.visit,className:"get-btn"},e.btname))),l.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2 header-img"},l.a.createElement("img",{src:"image/home.png",className:"img-fluid animated",alt:"home img"}))))))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{name:"Grow your business with",imgsrc:"image/home.png",visit:"/service",btname:"Get Started"}))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{name:"Welcome to About Page",imgsrc:"image/about.jpg",visit:"/contact",btname:"Contact Now"}))},d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-4 col-10 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.imgsrc}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title font-weight-bold"},e.title),l.a.createElement("p",{className:"card-text"},e.content),l.a.createElement("a",{href:e.link,className:"btn btn-primary"},"Go somewhere")))))},p=[{imgsrc:"image/mmmut.jpg",title:"MMMUT",content:"Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur was established in 2013 and is recognised by the UGC.",link:"http://www.mmmut.ac.in/"},{imgsrc:"image/hostel.jpg",title:"HOSTEL",content:"Hostel Of The MMMUT is Best Because All Facility is available For Every Time And Ground Of Hostel is So Large.",link:"http://www.mmmut.ac.in/Hostel"},{imgsrc:"image/campus.jpg",title:"CAMPUS",content:"Campus of The MMMUT,Gorakhpur is Clean And Fresh Environment for Every Time.",link:"https://images.search.yahoo.com/search/images;_ylt=Awr9ImkL98FiMscAextXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=mmmut+campus&fr2=piv-web&type=E211US885G0&fr=mcafee"},{imgsrc:"image/aayash.jpg",title:"SPORTS 2019",content:"All MMMUT Student Participate in The Aayash 2019-20 And Running in The 100 metre Race.",link:"https://www.facebook.com/sportsmmmut/"},{imgsrc:"image/abhyudhay.jpg",title:"ABHYUDHAY",content:"All MMMUT Student Participate in Abhyuday 2019-20 And Give Best Performance in The Dance Society Club.",link:"https://www.facebook.com/abhyudaya.mmmut/"},{imgsrc:"image/jp.jpg",title:"VICE CHANCELLOR",content:"Present Vice Chancellor Of Madan Mohan Malviya University Of Technology,Gorakhpur.",link:"https://www.amarujala.com/gorakhpur/professor-jp-pandey-becomes-new-vice-chancellor-of-mmmut#:~:text=Professor%20Jp%20Pandey%20Becomes%20New%20Vice-chancellor%20Of%20Mmmut,Updated%20Thu%2C%2023%20Jul%202020%2002%3A27%20PM%20IST"}],g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"vmy-5"},l.a.createElement("h1",{className:"text-center"},"Our Services")),l.a.createElement("div",{className:"container-fluid mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("div",{className:"row gy-4"},p.map(function(e,a){return l.a.createElement(d,{key:a,imgsrc:e.imgsrc,title:e.title,content:e.content,link:e.link})}))))))},v=t(6),b=t(11),h=t(4),f=function(){var e=Object(n.useState)({fname:"",lname:"",email:"",phone:"",message:""}),a=Object(h.a)(e,2),t=a[0],m=a[1],r=function(e){var a=e.target,t=a.name,n=a.value;m(function(e){return Object(b.a)({},e,Object(v.a)({},t,n))})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"text-center"},"Contact Us")),l.a.createElement("div",{className:"container contact-div"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.fname&&t.lname&&t.email&&t.phone&&t.message?alert("my name is ".concat(t.fname," ").concat(t.lname,". \n        My email is ").concat(t.email,". \n        My Phone is ").concat(t.phone,". My message is '").concat(t.message,"'")):alert("Each field required...!"),m({fname:"",lname:"",email:"",phone:"",message:""})}},l.a.createElement("div",{class:"mb-3"},l.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"First Name"),l.a.createElement("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",name:"fname",value:t.fname,onChange:r,placeholder:"Enter your first name.com"})),l.a.createElement("div",{class:"mb-3"},l.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Last Name"),l.a.createElement("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",name:"lname",value:t.lname,onChange:r,placeholder:"Enter your last name"})),l.a.createElement("div",{class:"mb-3"},l.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Email address"),l.a.createElement("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",name:"email",value:t.email,onChange:r,placeholder:"name@example.com"})),l.a.createElement("div",{class:"mb-3"},l.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Phone"),l.a.createElement("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",name:"phone",value:t.phone,onChange:r,placeholder:"Enter your phone number"})),l.a.createElement("div",{class:"mb-3"},l.a.createElement("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Message"),l.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",name:"message",value:t.message,onChange:r,rows:"3"})),l.a.createElement("div",{class:"col-12"},l.a.createElement("button",{class:"btn btn-outline-primary",type:"submit"},"Submit form")))))))},N=t(1),y=(t(20),t(21),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid nav_bg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},l.a.createElement("img",{src:"image/th.jpg",alt:"img"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu-active",className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu-active",className:"nav-link",to:"service"},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu-active",className:"nav-link",to:"about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{activeClassName:"menu-active",className:"nav-link",to:"contact"},"Contact"))))))))))}),w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(N.d,null,l.a.createElement(N.b,{exact:!0,path:"/",element:l.a.createElement(u,null)}),l.a.createElement(N.b,{exact:!0,path:"/about",element:l.a.createElement(E,null)}),l.a.createElement(N.b,{exact:!0,path:"/service",element:l.a.createElement(g,null)}),l.a.createElement(N.b,{exact:!0,path:"/contact",element:l.a.createElement(f,null)}),l.a.createElement(N.b,{exact:!0,path:"*",element:l.a.createElement(N.a,{to:"/"})})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s,null))};r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(w,null))),document.getElementById("root"))},5:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.41efbb2c.chunk.js.map