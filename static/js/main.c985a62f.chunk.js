(this.webpackJsonpWheelOfQA=this.webpackJsonpWheelOfQA||[]).push([[0],{38:function(e,n,t){e.exports=t(86)},43:function(e,n,t){},44:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},45:function(e,n,t){},46:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),o=t.n(c),i=(t(43),t(36)),l=t(37),s=t(1),d=t(8),u=(t(44),t(45),t(46),function(e){var n=Object(a.useState)(void 0),t=Object(s.a)(n,2),c=t[0],o=t[1],i=Object(a.useRef)(""),l=Object(a.useRef)(5),d=Object(a.useRef)(""),u=function(){i.current="",e.popUpWinningModal(d.current)},m=function(){if(e.items.length<1)e.popUpSassyModal();else{i.current="spinning";var n=Math.floor(Math.random()*e.items.length);console.log("selectedIdx: ".concat(n)),e.setSelectedForQA(e.items[n]),d.current=e.items[n],o(n),setTimeout(u,6e3*1.001)}},p=e.items,b={"--nb-item":p.length>0?p.length:1,"--selected-item":c,"--nb-turn":l.current,"--spinning-duration":"".concat(6,"s")};return r.a.createElement("div",{className:"wheel-container"},r.a.createElement("div",{className:"wheel ".concat(i.current),style:b,onClick:m},p.map((function(e,n){return r.a.createElement("div",{className:"wheel-item",key:n,style:{"--item-nb":n}},e)}))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{type:"button",onClick:m,className:"spinItButton"},"Spin It!")))}),m=function(e){var n=e.value,t=e.idx,a=e.changeItemContent;return r.a.createElement("input",{type:"text",value:n,onChange:function(e){a(e.target.value,t)}})},p=function(e,n){return Object(l.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},n)},b=function(e){return{background:e?"lightblue":"lightgrey",padding:8,width:250}},f=function(){var e=Object(a.useState)([{id:"Mariam",content:"Mariam"},{id:"Josses",content:"Josses"},{id:"Jide",content:"Jide"},{id:"Kartik",content:"Kartik"},{id:"Matt",content:"Matt"},{id:"David",content:"David"},{id:"Garret",content:"Garret"},{id:"Deb",content:"Deb"}]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),f=l[0],g=l[1],v=Object(a.useState)(""),h=Object(s.a)(v,2),E=h[0],y=h[1],O=Object(a.useState)(!1),j=Object(s.a)(O,2),N=j[0],k=j[1],I=Object(a.useState)("Wheel of QA!"),A=Object(s.a)(I,2),C=A[0],x=A[1],W=Object(a.useState)(!1),w=Object(s.a)(W,2),S=w[0],D=w[1],M=Object(a.useState)(!1),Q=Object(s.a)(M,2),R=Q[0],B=Q[1],P={droppable:f,droppable2:t},J=function(e){return P[e]},T=function(){k(!1)},F=function(){D((function(e){return!e}))},U=function(){B(!R)},K=function(e,n){c((function(t){var a=t.slice();return a[n]={id:e,content:e},a}))},G=N?"displayFlex":"";return r.a.createElement("div",{className:"App"},f.length>0?r.a.createElement("dialog",{className:"announceTheWinner ".concat(G),open:N,onClick:T},r.a.createElement("div",{className:"announce"},"The Winner is "),r.a.createElement("div",{className:"nameOfWinner"},E)):r.a.createElement("dialog",{className:"announceTheWinner ".concat(G),open:N,onClick:T},r.a.createElement("div",{className:"sassy-announce"},"Well look at  "),r.a.createElement("div",{className:"sassy-nameOfWinner"},"CAPTAIN QA"),r.a.createElement("div",{className:"sassy-announce"},"over here!"),r.a.createElement("div",{className:"sassy-announce"},"Spinner of Wheels and Finder of Bugs!"),r.a.createElement("div",{className:"sassy-announce"},"You spun it, now you've WON it"),r.a.createElement("div",null,"And while you're at it, please fix my bugs at https://github.com/davidlynch2000/WheelOfQA")),S?r.a.createElement("input",{className:"headerBanner",type:"text",value:C,onChange:function(e){x(e.target.value)},onBlur:F,onKeyDown:function(e){13==e.keyCode&&F()}}):r.a.createElement("h1",{className:"headerBanner",onClick:F},C),r.a.createElement("div",{className:"pageContainer"},r.a.createElement(d.a,{onDragEnd:function(e){var n=e.source,t=e.destination;if(t)if(n.droppableId===t.droppableId){var a=function(e,n,t){var a=Array.from(e),r=a.splice(n,1),c=Object(s.a)(r,1)[0];return a.splice(t,0,c),a}(J(n.droppableId),n.index,t.index);"droppable2"===n.droppableId?c(a):g(a)}else{var r=function(e,n,t,a){var r=Array.from(e),c=Array.from(n),o=r.splice(t.index,1),i=Object(s.a)(o,1)[0];c.splice(a.index,0,i);var l={};return l[t.droppableId]=r,l[a.droppableId]=c,l}(J(n.droppableId),J(t.droppableId),n,t);g(r.droppable),c(r.droppable2)}},className:"DAndD"},r.a.createElement("div",{className:"columnsOfNames"},r.a.createElement("h2",null,"Team Members",r.a.createElement("button",{type:"button",style:{display:R?"none":""},onClick:U},R?"":"Edit List"),!0===R&&r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){c((function(e){return[].concat(Object(i.a)(e),[{id:"",content:""}])}))}},"Add Item"),r.a.createElement("button",{type:"button",onClick:function(){c((function(e){return e.slice(0,e.length-1)}))}},"Remove Item"),r.a.createElement("button",{type:"button",onClick:U},"Done Editing"))),r.a.createElement("div",null,r.a.createElement(d.c,{droppableId:"droppable2"},(function(e,n){return r.a.createElement("div",{ref:e.innerRef,style:b(n.isDraggingOver)},t.map((function(e,n){return R?r.a.createElement(m,{key:n,value:e.content,changeItemContent:K,idx:n}):r.a.createElement(d.b,{key:e.id,draggableId:e.id,index:n},(function(n,t){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:p(t.isDragging,n.draggableProps.style)}),e.content)}))})),e.placeholder)})))),r.a.createElement("div",{className:"columnsOfNames"},r.a.createElement("h2",null,"Available for QA"),r.a.createElement(d.c,{droppableId:"droppable"},(function(e,n){return r.a.createElement("div",{ref:e.innerRef,style:b(n.isDraggingOver)},f.map((function(e,n){return r.a.createElement(d.b,{key:e.id,draggableId:e.id,index:n},(function(n,t){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:p(t.isDragging,n.draggableProps.style)}),e.content)}))})),e.placeholder)})))),r.a.createElement(u,{items:f.map((function(e){return e.id})),setSelectedForQA:y,popUpWinningModal:function(e){k(!0)},popUpSassyModal:function(e){k(!0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c985a62f.chunk.js.map