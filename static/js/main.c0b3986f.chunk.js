(this.webpackJsonpWheelOfQA=this.webpackJsonpWheelOfQA||[]).push([[0],{22:function(e,t,n){},39:function(e,t,n){e.exports=n(86)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),c=(n(44),n(37)),l=n(1),s=n(9),u=(n(22),n(45),function(e){var t=Object(a.useState)(void 0),n=Object(l.a)(t,2),o=n[0],r=n[1],c=Object(a.useRef)(""),s=Object(a.useRef)(5),u=Object(a.useRef)(""),d=function(){c.current="",e.popUpWinningModal(u.current)},m=function(){if(e.items.length<1)e.popUpSassyModal();else{c.current="spinning";var t=Math.floor(Math.random()*e.items.length);console.log("selectedIdx: ".concat(t)),e.setSelectedForQA(e.items[t]),u.current=e.items[t],r(t),setTimeout(d,6e3*1.001)}},p=e.items,b={"--nb-item":p.length>0?p.length:1,"--selected-item":o,"--nb-turn":s.current,"--spinning-duration":"".concat(6,"s")};return i.a.createElement("div",{className:"wheel-container"},i.a.createElement("div",{className:"wheel ".concat(c.current),style:b,onClick:m},p.map((function(e,t){return i.a.createElement("div",{className:"wheel-item",key:t,style:{"--item-nb":t}},e)}))),i.a.createElement("div",{className:"buttonContainer"},i.a.createElement("button",{type:"button",onClick:m,className:"spinItButton"},"Spin It!")))}),d=n(38),m=function(e){var t=e.value,n=e.idx,a=e.changeItemContent,o=e.functionForEditingList;return i.a.createElement("input",{type:"text",value:t,onChange:function(e){a(e.target.value,n,o)}})},p=(n(46),function(e){var t=e.columnTitle,n=e.listIsEditable,o=e.toggleEditableList,r=e.addingAnItemToTheList,c=e.removingAnItemFromTheList,s=Object(a.useState)(t),u=Object(l.a)(s,2),d=u[0];u[1];return i.a.createElement("h2",null,d,i.a.createElement("button",{type:"button",style:{display:n?"none":""},onClick:o},n?"":"Edit List"),!0===n&&i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:r},"Add Item"),i.a.createElement("button",{type:"button",onClick:c},"Remove Item"),i.a.createElement("button",{type:"button",onClick:o,style:{background:"skyblue",marginLeft:"15px"}},"Done Editing")))}),b=function(e){var t=e.columnTitle,n=e.addItemToList,o=e.removeItemFromList,r=e.allItems,c=e.changeItemContent,u=e.droppableId,b=e.functionForEditingList,f=Object(a.useState)(!1),g=Object(l.a)(f,2),v=g[0],h=g[1];return i.a.createElement("div",{className:"columnsOfNames"},i.a.createElement(p,{columnTitle:t,listIsEditable:v,toggleEditableList:function(){h(!v)},addingAnItemToTheList:function(){n(b)},removingAnItemFromTheList:function(){o(b)}}),i.a.createElement("div",null,i.a.createElement(s.c,{droppableId:u},(function(e,t){return i.a.createElement("div",{ref:e.innerRef,style:(n=t.isDraggingOver,{background:n?"lightblue":"lightgrey",padding:8,width:250,overflow:"hidden",whiteSpace:"no-wrap",textOverflow:"ellipsis"})},r.map((function(e,t){return v?i.a.createElement(m,{key:t,value:e.content,changeItemContent:c,idx:t,functionForEditingList:b}):i.a.createElement(s.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return i.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(a=n.isDragging,o=t.draggableProps.style,Object(d.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:a?"aquamarine":"turquoise"},o))}),e.content);var a,o}))})),e.placeholder);var n}))))},f=function(){var e=Object(a.useState)([{id:"Mariam",content:"Mariam"},{id:"Josses",content:"Josses"},{id:"Jide",content:"Jide"},{id:"Kartik",content:"Kartik"},{id:"Matt",content:"Matt"},{id:"David",content:"David"},{id:"Garret",content:"Garret"},{id:"Deb",content:"Deb"}]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([]),d=Object(l.a)(r,2),m=d[0],p=d[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],h=g[1],E=Object(a.useState)(!1),I=Object(l.a)(E,2),y=I[0],O=I[1],j=Object(a.useState)("Wheel of QA!"),k=Object(l.a)(j,2),w=k[0],A=k[1],C=Object(a.useState)(!1),N=Object(l.a)(C,2),T=N[0],L=N[1],S={wheelItems:m,allItems:n},x=function(e){return S[e]},W=function(){O(!1)},F=function(){L((function(e){return!e}))},D=function(e,t,n){n((function(n){var a=n.slice();return a[t]={id:e,content:e},a}))},M=function(e){e((function(e){return[].concat(Object(c.a)(e),[{id:"",content:""}])}))},Q=function(e){e((function(e){return e.slice(0,e.length-1)}))},B=y?"displayFlex":"";return i.a.createElement("div",{className:"App"},m.length>0?i.a.createElement("dialog",{className:"announceTheWinner ".concat(B),open:y,onClick:W},i.a.createElement("div",{className:"announce"},"The Winner is "),i.a.createElement("div",{className:"nameOfWinner"},v)):i.a.createElement("dialog",{className:"announceTheWinner ".concat(B),open:y,onClick:W},i.a.createElement("div",{className:"sassy-announce"},"Well look at",i.a.createElement("div",{className:"sassy-nameOfWinner"},"CAPTAIN QA"),"over here!",i.a.createElement("br",null),"Spinner of Wheels and Finder of Bugs!",i.a.createElement("br",null),"You spun it, now you've WON it"),i.a.createElement("div",null,"And while you're at it, please fix my bugs at https://github.com/davidlynch2000/WheelOfQA")),i.a.createElement("div",{className:"headerBanner"},T?i.a.createElement("input",{className:"headerBanner",type:"text",value:w,onChange:function(e){A(e.target.value)},onBlur:F,onKeyDown:function(e){13==e.keyCode&&F()}}):i.a.createElement("h1",{onClick:F},w)),i.a.createElement("div",{className:"pageContainer"},i.a.createElement(s.a,{onDragEnd:function(e){var t=e.source,n=e.destination;if(n)if(t.droppableId===n.droppableId){var a=function(e,t,n){var a=Array.from(e),i=a.splice(t,1),o=Object(l.a)(i,1)[0];return a.splice(n,0,o),a}(x(t.droppableId),t.index,n.index);"allItems"===t.droppableId?o(a):p(a)}else{var i=function(e,t,n,a){var i=Array.from(e),o=Array.from(t),r=i.splice(n.index,1),c=Object(l.a)(r,1)[0];o.splice(a.index,0,c);var s={};return s[n.droppableId]=i,s[a.droppableId]=o,s}(x(t.droppableId),x(n.droppableId),t,n);p(i.wheelItems),o(i.allItems)}},className:"DAndD"},i.a.createElement(b,{columnTitle:"Team Members",addItemToList:M,removeItemFromList:Q,changeItemContent:D,allItems:n,droppableId:"allItems",functionForEditingList:o}),i.a.createElement(b,{columnTitle:"Available For QA",addItemToList:M,removeItemFromList:Q,changeItemContent:D,allItems:m,droppableId:"wheelItems",functionForEditingList:p})),i.a.createElement(u,{items:m.map((function(e){return e.id})),setSelectedForQA:h,popUpWinningModal:function(){O(!0)},popUpSassyModal:function(){O(!0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c0b3986f.chunk.js.map