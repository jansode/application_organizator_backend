(this.webpackJsonpapplication_organizator=this.webpackJsonpapplication_organizator||[]).push([[0],{113:function(e,t,r){},17:function(e,t,r){},278:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(53),s=r.n(c),i=(r(113),r(4)),u=r(3),o=r.n(u),l=r(5),b=r(15),d=r(8),p=r.n(d);var j="/api",f=function(){var e=Object(l.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t,password:r},e.prev=1,e.next=4,p.a.post("/api/login",n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",[]);case 3:return r={headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}},e.next=6,p.a.get("/api/applications",r);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return n={headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"}},e.next=6,p.a.get(j+"/applications/".concat(t),n);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(t,r){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return a={headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}},e.next=6,p.a.put(j+"/applications/".concat(t),r,a);case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return n={headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"}},e.next=6,p.a.delete(j+"/applications/".concat(t),n);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return n={headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"}},a=Object(b.a)(Object(b.a)({},t),{},{user:r.user}),console.log("createUserApplication: "),console.log(a),e.next=9,p.a.post("/api/applications/",a,n);case 9:return c=e.sent,e.abrupt("return",c.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",[]);case 3:return r={headers:{Authorization:"Bearer ".concat(t)}},e.next=6,p.a.get("/api/appartments",r);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v={login:f,getUserApplications:x,getUserApplication:h,updateUserApplication:O,getUserAppartment:function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return n={headers:{Authorization:"Bearer ".concat(r)}},e.next=6,p.a.get(j+"/appartment/".concat(t),n);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUserAppartments:m,deleteUserApplication:g,deleteUserAppartment:function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return n={headers:{Authorization:"Bearer ".concat(r)}},e.next=6,p.a.delete(j+"/appartments/".concat(t),n);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createUserApplication:w},A=r(6),y=r(19),k=(r(17),r(2)),S=function(e){var t=e.message,r=e.type,a=Object(n.useState)("error"===r?"border-2 text-red-600 bg-red-200 border-red-400 ":"border-2 text-green-600 bg-green-200 border-green-400 "),c=Object(i.a)(a,2),s=c[0];c[1];return Object(k.jsx)("div",{class:"flex justify-center w-10/12 ".concat(s," mb-3"),children:Object(k.jsx)("p",{children:t})})},D=r(26),B=function(e){var t=Object(n.useState)(0),r=Object(i.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)([]),u=Object(i.a)(s,2),o=u[0],l=u[1];return[o,function(t){if(0===o.filter((function(e){return e.message===t.message})).length){setTimeout((function(){l((function(e){return e.filter((function(e,t){if(0!=t)return e}))})),c((function(e){return e-1}))}),e);var r=Object(b.a)(Object(b.a)({},t),{},{key:a});c(a+1);var n=[].concat(Object(D.a)(o),[r]);l(n)}}]},C=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],b=s[1],d=B(1e4),p=Object(i.a)(d,2),j=p[0],f=p[1];if(null!=localStorage.getItem("token"))return Object(k.jsx)("div",{children:Object(k.jsx)(A.a,{to:"/applications"})});var x=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=!1,""===r&&(document.getElementById("username").style.border="1px solid #EF4444",n=!0),""===u&&(document.getElementById("password").style.border="1px solid #EF4444",n=!0),!n){e.next=7;break}return f({message:"Missing fields.",type:"error"}),e.abrupt("return");case 7:return e.next=9,v.login(r,u);case 9:if(null!==(a=e.sent)){e.next=13;break}return f({message:"Username or password is incorrect.",type:"error"}),e.abrupt("return");case 13:localStorage.setItem("token",a.token),window.location.reload();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{class:"flex flex-col justify-center items-center",children:[Object(k.jsxs)("div",{class:"bg-white rounded border-gray-400 m-4 p-5 w-10/12 md:w-1/4 h-80 items-center flex flex-col justify-center",children:[Object(k.jsx)("h2",{class:"text-3xl pt-5",children:"Log in"}),Object(k.jsxs)("form",{class:"pt-5",onSubmit:x,children:[Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Username"}),Object(k.jsx)("input",{id:"username",type:"text",class:"border-2",onChange:function(e){return a(e.target.value)}})]}),Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Password"}),Object(k.jsx)("input",{id:"password",type:"password",class:"border-2",onChange:function(e){return b(e.target.value)}})]}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{class:"bg-blue-600 text-base text-white mt-2 p-2 rounded w-40",type:"submit",children:"Log in"})}),Object(k.jsx)("div",{class:"pt-2",children:Object(k.jsx)(y.b,{to:"/signup",class:"text-blue-400",children:"Sign up"})})]})]}),j&&j.map((function(e,t){return Object(k.jsx)(S,{message:e.message,type:e.type},e.key)}))]})},E={getDateFormat:function(e){var t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),r=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(e),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);return"".concat(n,"-").concat(r,"-").concat(t)}},I=r(104),N=r(105),M=r.p+"static/media/mail-sent.7424d935.jpg",G=r.p+"static/media/mail-edited.137f48e0.jpg",T=r(40),J=r(38),H=r.n(J),Q=(r(91),r(39)),Z=r.n(Q),X=function(e){var t=e.application,r=e.deleteApplication,a=e.updateApplication,c=Object(n.useRef)(null),s=Object(n.useRef)(null),u=Object(n.useRef)(null),b=Object(n.useState)("edit"),d=Object(i.a)(b,2),p=d[0],j=d[1],f=Object(n.useState)(!1),x=Object(i.a)(f,2),h=x[0],O=x[1],g=Object(n.useState)(t.title),w=Object(i.a)(g,2),m=w[0],A=w[1],y=Object(n.useState)(t.url),S=Object(i.a)(y,2),D=S[0],B=S[1],C=Object(n.useState)(t.location),J=Object(i.a)(C,2),Q=J[0],X=J[1],Y=Object(n.useState)(new Date(Date.parse(t.end_date))),V=Object(i.a)(Y,2),R=V[0],z=V[1],P=Object(n.useState)(new Z.a(t.cover_letter)),F=Object(i.a)(P,2),L=F[0],q=F[1],U=Object(n.useState)(!1),W=Object(i.a)(U,2),K=W[0],_=W[1],$=Object(n.useState)(!1),ee=Object(i.a)($,2),te=ee[0];ee[1];Object(n.useEffect)((function(){document.onclick=function(e){"calendar"!==e.target.id&&s.current&&!s.current.contains(e.target)&&_(!1),"edit-button"!==e.target.id&&u.current&&!u.current.contains(e.target)&&O(!1)}}),[u,s]);var re=function(){var e=Object(l.a)(o.a.mark((function e(r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={status:r},e.next=3,v.updateUserApplication(t.id,n);case 3:j(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(l.a)(o.a.mark((function e(){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,""===m&&(document.getElementById("title").style.border="1px solid #EF4444",r=!0),""===D&&(document.getElementById("url").style.border="1px solid #EF4444",r=!0),""===Q&&(document.getElementById("location").style.border="1px solid #EF4444",r=!0),!r){e.next=6;break}return e.abrupt("return");case 6:if(null==c.current){e.next=9;break}return e.next=9,c.current.blur();case 9:return n={id:t.id,title:m,url:D,location:Q,status:p,end_date:R,cover_letter:L},e.next=12,v.updateUserApplication(t.id,n);case 12:a(n),O(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.pdfExporter.generatePdf(L);case 2:t=e.sent,Object(I.saveAs)(t,"cover-letter.pdf");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=Object(k.jsx)("div",{ref:s,class:"md:w-1/2",children:Object(k.jsx)(T.a,{value:R,onClickDay:function(e,t){z(new Date(Date.parse(e))),_(!1)}})}),se=Object(k.jsxs)("div",{class:"cover-letter",children:[" ",Object(k.jsx)(H.a,{ref:c,value:L,onBlur:function(e,t,r){q(r.getContents())},modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},formats:["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link"],style:{height:"500px"}})]});return console.log(K),Object(k.jsxs)("div",{ref:u,id:"list-card-div",class:"relative grid grid-rows-1 grid-cols-4 bg-white rounded border-gray-400 m-3 p-2 lg:w-1/2 shadow-md",children:[Object(k.jsx)("div",{class:"absolute top-2 right-3",children:Object(k.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),r(t.id)},children:"x"})}),h?Object(k.jsx)("div",{}):Object(k.jsx)("div",{class:"row-span-1 col-span-1 flex flex-row items-center",children:Object(k.jsx)("a",{href:"",onClick:function(e){e.preventDefault()},children:Object(k.jsx)("img",{src:"edit"===p?G:M,onClick:function(){re("edit"===p?"sent":"edit")},width:"150",height:"150"})})}),h?Object(k.jsxs)("div",{class:"row-span-1 col-span-4 pl-2 pr-6",children:[Object(k.jsx)("div",{class:"text-lg text-blue-600 border-2",children:Object(k.jsx)("input",{id:"title",class:"w-full",value:m,onChange:function(e){A(e.target.value)}})}),Object(k.jsx)("div",{class:"text-base text-blue-400 border-2",children:Object(k.jsx)("input",{id:"url",class:"w-full",value:D,onChange:function(e){B(e.target.value)}})}),Object(k.jsx)("div",{class:"text-base border-2",children:Object(k.jsx)("input",{id:"location",class:"w-full",value:Q,onChange:function(e){X(e.target.value)}})}),Object(k.jsx)("div",{class:"text-base border-2",children:Object(k.jsx)("input",{class:"w-full",id:"calendar",value:E.getDateFormat(R),onFocus:function(){_(!0)}})}),K&&ce,(te||h)&&se,Object(k.jsx)("a",{href:"",class:"text-base text-blue-400",onClick:function(e){e.preventDefault(),ne()},children:"Save"})]}):Object(k.jsxs)("div",{class:"row-span-1 col-span-2 pl-2",children:[Object(k.jsx)("div",{class:"text-lg text-blue-600",children:Object(k.jsx)("p",{children:t.title})}),Object(k.jsx)("a",{href:function(){var e=t.url.trim();return e.startsWith("http://")||e.startsWith("https://")||(e="https://"+e),e}(),class:"text-base text-blue-400",children:t.url.substring(0,60)}),Object(k.jsx)("p",{class:"text-base",children:t.location}),Object(k.jsx)("p",{class:"text-base",children:E.getDateFormat(new Date(Date.parse(t.end_date)))}),0!=L.length()?Object(k.jsx)("a",{href:"",class:"text-base text-green-400",onClick:function(e){e.preventDefault(),ae()},children:"Cover letter"}):Object(k.jsx)("p",{class:"text-base text-red-400",children:"No letter added"}),Object(k.jsx)("div",{children:Object(k.jsx)("a",{href:"",id:"edit-button",class:"text-base text-blue-400",onClick:function(e){e.preventDefault(),O(!0)},children:"Edit"})})]})]},t.id)},Y=(r(271),r(272),function(e){var t=e.setCreateNewVisible,r=e.setApplications,a=Object(n.useRef)(null),c=Object(n.useRef)(null),s=Object(n.useState)(""),u=Object(i.a)(s,2),b=u[0],d=u[1],p=Object(n.useState)(""),j=Object(i.a)(p,2),f=j[0],x=j[1],h=Object(n.useState)(new Date(Date.now())),O=Object(i.a)(h,2),g=O[0],w=O[1],m=Object(n.useState)(""),A=Object(i.a)(m,2),y=A[0],S=A[1],D=Object(n.useState)(new Z.a),B=Object(i.a)(D,2),C=B[0],I=B[1],N=Object(n.useState)(!1),M=Object(i.a)(N,2),G=M[0],J=M[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Y=X[0],V=X[1],R=Object(n.useState)(!1),z=Object(i.a)(R,2),P=z[0],F=z[1];Object(n.useEffect)((function(){document.onclick=function(e){"calendar"!==e.target.id&&c.current&&!c.current.contains(e.target)&&J(!1)},P&&(q(),F(!1))}),[P,c]);var L=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,""===b&&(document.getElementById("title").style.border="1px solid #EF4444",t=!0),""===f&&(document.getElementById("url").style.border="1px solid #EF4444",t=!0),""===y&&(document.getElementById("location").style.border="1px solid #EF4444",t=!0),!t){e.next=6;break}return e.abrupt("return");case 6:if(null==a.current){e.next=9;break}return e.next=9,a.current.blur();case 9:F(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.createUserApplication({title:b,url:f,location:y,status:"edit",end_date:g,cover_letter:C});case 2:return e.next=4,v.getUserApplications();case 4:a=e.sent,r(a),t(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=Object(k.jsx)("div",{ref:c,children:Object(k.jsx)(T.a,{value:g,onClickDay:function(e,t){w(new Date(Date.parse(e))),J(!1)}})}),W=Object(k.jsxs)("div",{class:"cover-letter",children:[" ",Object(k.jsx)(H.a,{ref:a,value:C,onBlur:function(e,t,r){I(r.getContents())},modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},formats:["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link"],style:{height:"500px"}})]});return Object(k.jsxs)("div",{class:"flex flex-col justify-center items-center relative bg-white rounded border-gray-400 m-3 p-10 lg:w-1/2",children:[Object(k.jsx)("div",{class:"absolute top-2 right-3 z-10",children:Object(k.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),t(!1)},children:"x"})}),Object(k.jsxs)("div",{class:"flex flex-col justify-center items-start pr-5 w-10/12",children:[Object(k.jsx)("div",{class:"text-lg",children:"Title:"})," ",Object(k.jsx)("input",{id:"title",class:"border-2 w-full",type:"text",onChange:function(e){e.target.style.border="",d(e.target.value)}}),Object(k.jsx)("div",{class:"text-lg",children:"Url:"})," ",Object(k.jsx)("input",{id:"url",class:"border-2 w-full",type:"text",onChange:function(e){e.target.style.border="",x(e.target.value)}}),Object(k.jsx)("div",{class:"text-lg",children:"Location:"})," ",Object(k.jsx)("input",{id:"location",class:"border-2 w-full",type:"text",onChange:function(e){e.target.style.border="",S(e.target.value)}}),Object(k.jsx)("div",{class:"text-lg",children:"End date:"}),Object(k.jsx)("input",{class:"border-2 w-full",id:"calendar",type:"text",value:E.getDateFormat(g),onFocus:function(){J(!0)}}),G&&U,Object(k.jsx)("div",{class:"text-lg",children:Object(k.jsx)("a",{href:"",class:"text-lg text-blue-400 ",onClick:function(e){e.preventDefault(),V(!Y)},children:"Cover letter"})}),Y&&W,Object(k.jsx)("div",{class:"flex flex-row justify-center pt-6 w-full",children:Object(k.jsx)("button",{class:"bg-blue-600 text-base text-white p-2 rounded w-40",onClick:L,children:"Create"})})]})]})}),V=(r(273),function(e){var t=e.searchValue,r=e.sortBy,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],u=c[1],b=Object(n.useState)(!1),d=Object(i.a)(b,2),p=d[0],j=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getUserApplications();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,r]);var f=function(e){x(e)},x=function(e){var n=Object(D.a)(e);""!==t&&(n=e.filter((function(e){return e[r].toLowerCase().startsWith(t.toLowerCase())}))),0!==n.length&&n.sort((function(e,t){return e[r].localeCompare(t[r],"en-US",{ignorePunctuation:!0})})),u(n)},h=function(e){var t=s.findIndex((function(t){return t.id===e.id})),r=Object(D.a)(s);r[t]=e,f(r)},O=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.deleteUserApplication(t);case 2:return e.next=4,v.getUserApplications();case 4:r=e.sent,f(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{children:Object(k.jsxs)("div",{class:"flex flex-col justify-center items-center pt-1",children:[p?Object(k.jsx)(Y,{setCreateNewVisible:j,setApplications:f}):Object(k.jsxs)("div",{class:"add-new-plus mt-3 mb-4",onClick:function(e){e.preventDefault(),j(!0)},children:[Object(k.jsx)("div",{class:"add-new-plus1 mt-3"}),Object(k.jsx)("div",{class:"add-new-plus2 mt-3"})]}),0!==s.length?s.map((function(e){return Object(k.jsx)(X,{application:e,deleteApplication:O,updateApplication:h},e.id)})):Object(k.jsx)("div",{}),Object(k.jsx)("a",{class:"text-gray-400 pt-10",href:"https://www.vecteezy.com/free-vector/envelope-icon",children:"Envelope Icon Vectors by Vecteezy"})]})})}),R=r(106),z=r.n(R),P=r(107),F=r.n(P),L=r(108),q=r.n(L);var U={getUser:function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",null);case 3:return r={headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}},e.next=6,p.a.get("/api/users/from_token",r);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllUsers:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNewUser:function(){var e=Object(l.a)(o.a.mark((function e(t,r){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t,password:r},a={headers:{"Content-Type":"application/json"}},e.next=4,p.a.post("/api/users",n,a);case 4:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),userExists:function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,p.a.get("/api/users/exists/"+t,r);case 4:return n=e.sent,e.abrupt("return",n.data.user_exists);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){var t=e.loggedIn,r=e.setSearchValue,a=e.setSortBy,c=e.logout,s=(e.setCreateNewVisible,Object(n.useState)(!1)),u=Object(i.a)(s,2),b=u[0],d=u[1],p=Object(n.useState)(""),j=Object(i.a)(p,2),f=j[0],x=j[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getUser();case 2:r=e.sent,t&&x(r.username);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var h=["Title","Url","Location"],O=h[0];return t?Object(k.jsxs)("div",{class:"flex justify-center bg-gray-50 p-2",children:[Object(k.jsxs)("div",{class:"hamburger-menu mr-2",onClick:function(){d(!b)},children:[Object(k.jsx)("div",{class:"hamburger-menu-bar1"}),Object(k.jsx)("div",{class:"hamburger-menu-bar2"}),Object(k.jsx)("div",{class:"hamburger-menu-bar3"})]}),Object(k.jsx)(F.a,{isOpen:b,closeCallback:function(){d(!1)},children:Object(k.jsxs)("div",{class:"flex flex-col items-center h-full p-5",children:[Object(k.jsx)(q.a,{imageWidth:"100",imageHeight:"100",image:"data:image/jpeg;base64,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"}),Object(k.jsx)("p",{class:"text-2xl",children:f}),Object(k.jsx)("button",{onClick:c,children:"Log out"})]})}),Object(k.jsxs)("div",{class:"flex flex-row justify-between lg:w-1/2 w-full items-center",children:[Object(k.jsx)("input",{class:"border-2 focus:border-2 focus:border-blue-200 text-gray-500 w-full h-11",type:"text",onChange:function(e){r(e.target.value)}}),Object(k.jsx)(z.a,{options:h,onChange:function(e){a(e.label.toLowerCase())},value:O})]})]}):Object(k.jsx)("div",{})},K=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],b=s[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),j=p[0],f=p[1],x=Object(n.useState)(""),h=Object(i.a)(x,2),O=(h[0],h[1]),g=Object(n.useState)(""),w=Object(i.a)(g,2),m=(w[0],w[1],B(1e4)),v=Object(i.a)(m,2),A=v[0],D=v[1];return Object(k.jsxs)("div",{class:"flex flex-col justify-center items-center",children:[Object(k.jsxs)("div",{class:"bg-white rounded border-gray-400 m-4 p-5 w-10/12 md:w-1/4 h-90 items-center flex flex-col justify-center",children:[Object(k.jsx)("h2",{class:"text-3xl pt-5",children:"Sign up"}),Object(k.jsxs)("form",{class:"pt-5",onSubmit:function(e){e.preventDefault();var t=!1;if(""===r&&(document.getElementById("username").style.border="1px solid #EF4444",t=!0),""===u&&(document.getElementById("password").style.border="1px solid #EF4444",t=!0),""===j&&(document.getElementById("confirm-password").style.border="1px solid #EF4444",t=!0),t)D({message:"Missing fields",type:"error"});else(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u===j){e.next=4;break}return D({message:"Password fields don't match",type:"error"}),O("Password fields don't match."),e.abrupt("return",!1);case 4:return e.next=6,U.userExists(r);case 6:if(!e.sent){e.next=10;break}return D({message:"User already exists.",type:"error"}),e.abrupt("return",!1);case 10:return e.next=12,U.createNewUser(r,u);case 12:return D({message:"User successfully created.",type:"success"}),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:[Object(k.jsx)("p",{children:"Username:"}),Object(k.jsx)("input",{id:"username",type:"text",class:"border-2",onChange:function(e){return a(e.target.value)}}),Object(k.jsx)("p",{children:"Password:"}),Object(k.jsx)("input",{id:"password",type:"password",class:"border-2",onChange:function(e){return b(e.target.value)}}),Object(k.jsx)("p",{children:"Confirm password:"}),Object(k.jsx)("input",{id:"confirm-password",type:"password",class:"border-2",onChange:function(e){return f(e.target.value)}}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{class:"bg-blue-600 text-base text-white mt-2 p-2 rounded w-40",type:"submit",children:"Sign up"})}),Object(k.jsx)("div",{class:"pt-2",children:Object(k.jsx)(y.b,{to:"/",class:"text-blue-400",children:" Already have an account?"})})]})]}),A&&A.map((function(e,t){return Object(k.jsx)(S,{message:e.message,type:e.type},e.key)}))]})},_=function(e){return null==localStorage.getItem("token")?Object(k.jsx)(A.a,{to:"/"}):Object(k.jsx)(A.b,Object(b.a)({},e))},$=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)("title"),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(n.useState)(""),b=Object(i.a)(l,2),d=b[0],p=b[1];return Object(k.jsx)("div",{children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(W,{loggedIn:null!=localStorage.getItem("token"),setSearchValue:a,setSortBy:o,logout:function(e){e.preventDefault(),localStorage.removeItem("token"),window.location.href="/"},setCreateNewVisible:p}),Object(k.jsxs)(A.d,{children:[Object(k.jsx)(A.b,{exact:!0,path:"/",children:Object(k.jsx)(C,{})}),Object(k.jsx)(A.b,{exact:!0,path:"/signup",children:Object(k.jsx)(K,{})}),Object(k.jsx)(_,{exact:!0,path:"/applications",children:Object(k.jsx)(V,{searchValue:r,sortBy:u,setCreateNewVisible:p,createNewVisible:d})}),Object(k.jsx)(_,{path:"/applications/new",children:Object(k.jsx)(Y,{})})]})]})})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,279)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)($,{})}),document.getElementById("root")),ee()}},[[278,1,2]]]);
//# sourceMappingURL=main.ab8acd1d.chunk.js.map