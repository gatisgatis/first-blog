(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),a=c.n(s),i=c(35),o=c.n(i),l=(c(46),c(47),c(7)),r=c(36),j=(c(48),function(){return Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)(r.a,{className:"loading__big-icon"}),Object(n.jsx)("div",{className:"loading__title",children:"Laoding..."})]})}),b=c(17),d=(c(49),function(e){var t=e.title,c=e.text,s=e.image,a=e.author,i=e.id,o=e.onClick;return Object(n.jsxs)("div",{className:"card d-flex flex-column justify-content-start align-items-center",onClick:o,children:[Object(n.jsx)("div",{className:"card__img-wrapper",children:Object(n.jsx)("img",{src:s,alt:"Img nr ".concat(i),className:"img"})}),Object(n.jsxs)("h2",{className:"card__title",children:[Object(n.jsx)(b.a,{className:"card__icon"}),t.substring(0,25),"..."]}),Object(n.jsx)("h4",{className:"card__author",children:a}),Object(n.jsxs)("p",{className:"card__text",children:[c.substring(0,50),"..."]})]})}),u=(c(50),c(37)),O=c(38),m=function(){return Object(n.jsx)("button",{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"scroll-top",children:Object(n.jsx)(u.a,{icon:O.a,className:"scroll-top__icon"})})},h=c(18),x=c.n(h),f=c(4),p=c(79),g=["Breann Stout","Bell Wenrich","Christiane Campas","Stephanie Labree","Trenton Lynde","Essie Tessier","Nathanial Boyles","Santo Reali","Sherlyn Santi","Jeremy Herlihy"],v=function(){var e=Object(f.g)(),t=Object(s.useState)([]),c=Object(l.a)(t,2),a=c[0],i=c[1],o=Object(s.useState)(!0),r=Object(l.a)(o,2),b=r[0],u=r[1];return Object(s.useEffect)((function(){x.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){console.log(e.data),i(e.data),u(!1)}))}),[]),b?Object(n.jsx)(j,{}):Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12 d-flex justify-content-center margin-bottom--30",children:Object(n.jsx)("h1",{children:"ALL POSTS"})})}),Object(n.jsx)("div",{className:"row",children:a.map((function(t){var c=t.userId,s=t.id,a=t.title,i=t.body;return Object(n.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xs-2 d-flex margin-bottom--30",children:Object(n.jsx)(d,{text:i,title:a,id:s,image:"https://picsum.photos/id/".concat(2*s,"/400/400"),author:g[c-1],onClick:function(){return e.push("/blog/".concat(s))}})},Object(p.a)())}))})]})})},N=function(){return Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)("img",{src:"https://4.bp.blogspot.com/-z54OCUjBJ1g/WBqIqfBNRWI/AAAAAAAAcjE/Lj8R-Xdy8RY7WwhYCN64zdDogCcWutz3wCLcB/s1600/IMG_3820.JPG",alt:"face",className:"img"})}),Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("h3",{children:"My Name is Bloger!"}),Object(n.jsx)("h4",{children:"I write good blogs"}),Object(n.jsx)("h4",{children:"Please Donate!"})]})]})})})},_=(c(73),function(){var e=Object(s.useState)(100),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(n.jsxs)("div",{className:"gal__img-wrapper",children:[Object(n.jsx)("img",{src:"https://picsum.photos/id/".concat(c,"/800/600"),alt:"",className:"gal-img"}),Object(n.jsx)(j,{})]}),Object(n.jsxs)("div",{className:"gal__btns",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return a(c-1)},disabled:c<=1,children:"Prev"}),Object(n.jsx)("button",{type:"button",onClick:function(){return a(c+1)},disabled:c>=300,children:"Next"})]})]})}),y=c(19),S=c(14),C=(c(74),{name:"",text:""}),w=function(e){var t=e.onClick,c=Object(s.useState)(C),a=Object(l.a)(c,2),i=a[0],o=a[1];return Object(n.jsxs)("div",{className:"comments d-flex flex-column",children:[Object(n.jsx)("input",{type:"text",placeholder:"Write your comment here...",value:i.text,onChange:function(e){return o(Object(S.a)(Object(S.a)({},i),{},{text:e.target.value}))}}),Object(n.jsx)("input",{type:"text",placeholder:"Your Name here...",value:i.name,onChange:function(e){return o(Object(S.a)(Object(S.a)({},i),{},{name:e.target.value}))}}),Object(n.jsx)("button",{onClick:function(){return o(t(i))},children:"Add Comment"})]})},k=function(){var e=Object(f.h)().id,t=Object(s.useState)(!0),c=Object(l.a)(t,2),a=c[0],i=c[1],o=Object(s.useState)(),r=Object(l.a)(o,2),b=r[0],d=r[1],u=Object(s.useState)([]),O=Object(l.a)(u,2),m=O[0],h=O[1];Object(s.useEffect)((function(){localStorage.getItem("comments-".concat(e))&&h(Object(y.a)(JSON.parse(localStorage.getItem("comments-".concat(e)))))}),[]);return Object(s.useEffect)((function(){x.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(e){var t={title:e.data.title,image:"https://picsum.photos/id/".concat(2*e.data.id,"/400/400"),text:e.data.body,author:g[Number(e.data.userId)]};d(t),i(!1)}))}),[]),a&&!b?Object(n.jsx)(j,{}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"d-flex mb-5",children:[Object(n.jsx)("img",{src:null===b||void 0===b?void 0:b.image,alt:""}),Object(n.jsxs)("div",{className:"ml-3",children:[Object(n.jsx)("h1",{children:null===b||void 0===b?void 0:b.title}),Object(n.jsx)("h3",{children:null===b||void 0===b?void 0:b.author}),Object(n.jsx)("p",{children:null===b||void 0===b?void 0:b.text})]})]}),m.map((function(e){return Object(n.jsx)("h5",{children:e},Object(p.a)())})),Object(n.jsx)(w,{onClick:function(t){if(t.text.length){var c=t.name.length?t.name:"Unknown",n="".concat((new Date).toLocaleDateString("en-US"),": ").concat(c,": ").concat(t.text);localStorage.setItem("comments-".concat(e),JSON.stringify([].concat(Object(y.a)(m),[n]))),h([].concat(Object(y.a)(m),[n]))}return{name:"",text:""}}})]})},A=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"PAGE NOT FOUND"}),";",Object(n.jsx)("img",{src:"https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg",alt:"not found"})]})},I=(c(75),function(e){var t=e.text;return Object(n.jsx)("div",{className:"intro",children:t.substring(0,30).toUpperCase()})}),T=c(11),B=(c(76),function(){return Object(n.jsxs)("nav",{className:"nav margin-bottom--10",children:[Object(n.jsx)(T.b,{className:"nav__item",to:"/about",children:"About"}),Object(n.jsx)(T.b,{className:"nav__item",to:"/",children:"Home"}),Object(n.jsx)(T.b,{className:"nav__item",to:"/galery",children:"Galery"}),Object(n.jsxs)("div",{className:"nav__item",children:[Object(n.jsx)("input",{type:"text",placeholder:"Search Here..."}),Object(n.jsx)(b.b,{className:"nav__search-icon"})]})]})}),L=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){a(!0)}),1e3),t=setTimeout((function(){a(!1)}),6e3);return function(){clearTimeout(e),clearTimeout(t)}}),[]),Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"container",children:[c&&Object(n.jsx)(I,{text:"Welcome to best blog ever!"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(B,{}),Object(n.jsxs)(f.d,{children:[Object(n.jsx)(f.b,{exact:!0,path:"/",children:Object(n.jsx)(v,{})}),Object(n.jsx)(f.b,{path:"/about",children:Object(n.jsx)(N,{})}),Object(n.jsx)(f.b,{path:"/galery",children:Object(n.jsx)(_,{})}),Object(n.jsx)(f.b,{path:"/blog/:id",children:Object(n.jsx)(k,{})}),Object(n.jsxs)(f.b,{path:"/",children:[Object(n.jsx)(f.a,{to:"/404-page"}),Object(n.jsx)(A,{})]})]})]})})})]})})},E=(c(77),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))});o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),E()}},[[78,1,2]]]);
//# sourceMappingURL=main.0399703d.chunk.js.map