(this["webpackJsonpguac-weds"]=this["webpackJsonpguac-weds"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),o=c(4),r=c.n(o),i=c(5),l=c(2);var j=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:["Score: ",e.score]})})},u=function(e){return Object(n.jsx)("img",{src:"../../Guacamole.png",width:"150px",height:"150px"})},x=function(e){return Object(n.jsx)("img",{src:"../../tortilla.png",width:"150px",height:"150px"})},b=x,O=function(e){var t=Object(s.useRef)(null),c=[{x:50,y:150},{x:100,y:225},{x:100,y:300},{x:150,y:100},{x:200,y:175},{x:200,y:300},{x:300,y:50},{x:300,y:150},{x:375,y:225}],o={cells:new Array(9).fill(!1),avoPosition:{x:0,y:0}},r=Object(s.useState)(o),x=Object(l.a)(r,2),O=x[0],d=x[1],g=Object(s.useContext)(v);console.log(g,"GLOBALTHING");var f=a.a.useState(0),h=Object(l.a)(f,2),y=h[0],m=h[1];console.log(y);var w=Object(s.useState)(!0),p=Object(l.a)(w,2),S=p[0],I=p[1],N=Object(s.useState)(!0),C=Object(l.a)(N,2),P=C[0],E=C[1],M=Object(s.useState)(!0),k=Object(l.a)(M,2),A=k[0],G=k[1],Y=Object(s.useState)(!0),B=Object(l.a)(Y,2),J=B[0],L=B[1],T=Object(s.useState)(!0),H=Object(l.a)(T,2),R=H[0],U=H[1],X=Object(s.useState)(5),_=Object(l.a)(X,2),q=_[0],z=_[1];function D(){var e,t,n=(e=0,t=O.cells.length,Math.floor(Math.random()*(t-e)+e)),s=new Array(9).fill(!1);s[n]=!0,d({cells:s,avoPosition:{x:c[n].x,y:c[n].y}}),console.log("new position: ".concat(n)),console.log(O),console.log("x: ".concat(c[n].x,", y: ").concat(c[n].y))}console.log(y);var F=new Image;F.src="../../cuttingboard.png";var K=new Image;function Q(e,t){t.drawImage(K,e.x,e.y,100,100)}K.src="../../small_avocado.png";var V=function(e){e.drawImage(F,0,0),function(e){for(var t in O.cells)!0===O.cells[t]&&Q(c[t],e)}(e)};return Object(s.useEffect)((function(){var e=t.current.getContext("2d");V(e)})),console.log("I ran this func again"),Object(s.useEffect)((function(){var e=setInterval((function(){D()}),3e3);return function(){return clearInterval(e)}}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[S&&Object(n.jsx)(b,{}),P&&Object(n.jsx)(b,{}),A&&Object(n.jsx)(b,{}),J&&Object(n.jsx)(b,{}),R&&Object(n.jsx)(b,{})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("canvas",Object(i.a)({id:"canvas",onClick:function(e){var t=e.clientX,c=e.clientY,n=O.avoPosition.x,s=O.avoPosition.y;n+100>t&&t>n&&s+220>c&&c>s?(!function(e){m(e+100)}(y),alert("You got the avocado!")):(alert("You Missed!"),console.log(q),5==q&&U(!1),4==q&&L(!1),3==q&&G(!1),2==q&&E(!1),1==q&&I(!1),z(q-1),console.log(q,"COUNTMISSES"))},width:"500px",height:"500px",ref:t},e))}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(j,{score:y})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(u,{})})]})]})},d=a.a.createContext(0);var v=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(d.Provider,{value:0,children:[Object(n.jsx)(O,{}),Object(n.jsx)("div",{className:"row"})]})})};r.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f14cebec.chunk.js.map