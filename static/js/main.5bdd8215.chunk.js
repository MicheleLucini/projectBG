(this["webpackJsonpproject-bg"]=this["webpackJsonpproject-bg"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e){e.exports=JSON.parse('{"name":"project-bg","version":"0.0.12","private":true,"homepage":"https://michelelucini.github.io/projectBG","dependencies":{"@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.7","@testing-library/user-event":"^12.8.3","gun":"^0.2020.1232","react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3","web-vitals":"^1.1.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.2.3"}}')},,,,,,,function(e,n,t){},,,function(e,n,t){},function(e,n,t){},,,,,,function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=30},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(12),c=t.n(r),i=t(3),u=t(15),s=t(5),l=(t(20),t(0)),o=function(e){e.gamePhase;return Object(l.jsx)("div",{id:"bg",children:Object(l.jsx)("div",{className:"noise"})})};o.defaultProps={gamePhase:null};var d=o,b=t(2),j=t.n(b),p=t(4),f=(t(23),function(e){var n=e.id,t=e.text,a=e.icon,r=e.onClick,c=e.disabled;return Object(l.jsxs)("button",{id:n,className:"simple-button"+(c?" disabled":"")+(t?"":" icon-only"),type:"button",onClick:r,children:[a&&Object(l.jsx)("span",{className:"material-icons-round",children:a}),t&&t]})});f.defaultProps={id:"",text:null,icon:null,onClick:function(){},disabled:!1};var O=f,m=(t(24),function(e){var n=e.label,t=e.value,r=e.setValue,c=e.placeholder,i=e.disabled,u=e.onKeyPressEnter,o=Object(a.useState)(!1),d=Object(s.a)(o,2),b=d[0],j=d[1],p=Object(a.useCallback)((function(e){r(e.target.value)})),f=Object(a.useCallback)((function(){j(!0)})),O=Object(a.useCallback)((function(){j(!1)})),m=Object(a.useCallback)((function(e){if(e||(e=window.event),"Enter"===(e.code||e.key)&&u)return u(),!1}));return Object(l.jsxs)("div",{className:"text-input"+(b?" active":"")+(t?" filled":"")+(i?" disabled":""),children:[Object(l.jsx)("label",{children:n}),Object(l.jsx)("input",{type:"text",value:t,onChange:p,placeholder:c,onFocus:f,onBlur:O,required:"required",onKeyPress:m,disabled:!!i&&"disabled"})]})});m.defaultProps={label:null,value:null,placeholder:null,disabled:!1,onKeyPressEnter:null};var v=m,x=t(13).version,h="menu",g="lobby_pregame",y="join_lobby_pregame",C="game",k="client_data",w={blue:"playerBlue",red:"playerRed",green:"playerGreen",yellow:"playerYellow"},N={BLACK:1,RED:2},I={SPADE:1,HEART:2,DIAMOND:3,CLUB:4},D={ACE:1,TWO:3,THREE:4,FOUR:5,FIVE:6,SIX:7,SEVEN:8,EIGHT:9,NINE:10,TEN:11,JACK:12,QUEEN:13,KING:14,JOKER:15},_=t(14),E=t.n(_)()(["https://project-bg.herokuapp.com/gun"]),S=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a]},M=function(e,n){return new Promise((function(t){E.get(e).put(n,(function(n){S("Data "+e+" stored: ",n),t(n)}))}))},K=function(e){return new Promise((function(n){E.get(e).once((function(t){S("Data "+e+" read: ",t),n(t)}))}))},P=function(e,n){return new Promise((function(t){E.get(e).on((function(e,t,a,r){return n(e)}),!0),t()}))},A=function(e){return new Promise((function(n){E.get(e).off(),n()}))},T=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}))},R=function(){for(var e=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=0;t<4;t++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")},J=function(e,n){return e*n.width/100},B=function(e,n){return e*n.height/100},H=function(){var e=[],n=0;return Object.values(N).forEach((function(t){e.push({rank:D.JOKER,deckColor:t}),e.push({rank:D.JOKER,deckColor:t}),Object.values(I).forEach((function(a){Object.values(D).forEach((function(r){r!==D.JOKER&&(n++,e.push({id:n,suit:a,rank:r,color:U(a),deckColor:t}))}))}))})),console.log(e),function(e){var n,t=e.length;for(;0!=t;){n=Math.floor(Math.random()*t),t--;var a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(e)};function U(e){return e===I.DIAMOND||e===I.HEART?N.RED:N.BLACK}function G(e){switch(e){case w.blue:return"blue";case w.red:return"red";case w.green:return"green";case w.yellow:return"yellow";default:return""}}var L=function(){var e=Object(p.a)(j.a.mark((function e(n){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={key:R(),appVersion:x,creatorDeviceId:n.deviceId},e.next=3,M(t.key,t);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(n,{deleted:!0});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(j.a.mark((function e(n,t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(n,t);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(j.a.mark((function e(n){var t,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.key,a=n.clientData,r=n.onCampaignChange,t&&4===t.length){e.next=3;break}return e.abrupt("return","The campaign key is not valid");case 3:return e.next=5,K(t);case 5:if((c=e.sent)&&c.key){e.next=8;break}return e.abrupt("return","The campaign does not exist");case 8:if(c.appVersion===x){e.next=10;break}return e.abrupt("return","The campaign has a different version");case 10:return q(a),r(c),e.next=14,P(t,r);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),X=function(){var e=Object(p.a)(j.a.mark((function e(n,t,a){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(n);case 2:return e.next=4,K(n);case 4:if((null===(r=e.sent)||void 0===r?void 0:r.creatorDeviceId)!==t){e.next=10;break}return e.next=8,Y(n);case 8:e.next=12;break;case 10:return e.next=12,W(n,a);case 12:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),q=function(e,n){if(e.playerId&&e.campaignKey){var t={};t[e.playerId+"_deviceId"]=e.deviceId,t[e.playerId+"_userName"]=e.userName,t[e.playerId+"_clientScene"]=e.clientScene,n&&e.clientScene===C?(t[e.playerId+"_cursorX"]=n.x,t[e.playerId+"_cursorY"]=n.y,t[e.playerId+"_cursorHide"]=n.hide,t[e.playerId+"_cursorText"]=n.text):(t[e.playerId+"_cursorX"]=0,t[e.playerId+"_cursorY"]=0,t[e.playerId+"_cursorHide"]=!0,t[e.playerId+"_cursorText"]=null),F(e.campaignKey,t)}},W=function(e,n){if(n&&e){var t={};t[n+"_deviceId"]=null,t[n+"_userName"]=null,t[n+"_clientScene"]=null,t[n+"_cursorX"]=null,t[n+"_cursorY"]=null,t[n+"_cursorHide"]=null,t[n+"_cursorText"]=null,F(e,t)}},Q=function(){var e=Object(p.a)(j.a.mark((function e(n,t){var a,r,c,i,u,l,o,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.campaignKey&&(null===t||void 0===t?void 0:t.creatorDeviceId)===n.deviceId&&!(null===t||void 0===t?void 0:t.deck)){e.next=2;break}return e.abrupt("return");case 2:for(console.log("Deck shuffled!"),(a={}).deck=H(),Object.values(w).forEach((function(e){a[e+"_hand"]=[]})),r=0;r<13;r++)Object.values(w).forEach(function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a[n+"_hand"].push(a.deck.shift());case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());for(c={},i=0,u=Object.entries(a);i<u.length;i++)l=Object(s.a)(u[i],2),o=l[0],d=l[1],c[o]=JSON.stringify(d);F(n.campaignKey,c);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Z=(t(31),function(e){var n=e.clientData,t=e.changeUserName,r=e.changeCampaignKey,c=e.changeClientScene,i=e.leaveCampaignApp,u=e.mergeGameData,o=e.addToastMessage,d=Object(a.useState)(!1),b=Object(s.a)(d,2),f=b[0],m=b[1],h=Object(a.useState)(n.userName),C=Object(s.a)(h,2),k=C[0],w=C[1],N=Object(a.useCallback)(Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),t(k),e.next=4,L(n);case 4:return a=e.sent,e.next=7,V({key:a.key,clientData:n,onCampaignChange:u});case 7:r(a.key),m(!1),c(g);case 10:case"end":return e.stop()}}),e)}))),[t,k,n,o,u,r,c]),I=Object(a.useCallback)((function(){t(k),c(y)}),[t,k,c]),D=Object(a.useCallback)(Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),t(k),e.next=4,V({key:n.campaignKey,clientData:n,onCampaignChange:u});case 4:a=e.sent,m(!1),a?o(a):c(g);case 7:case"end":return e.stop()}}),e)}))),[t,k,n,u,c,o]),_=Object(a.useCallback)((function(){i()}),[i]);return Object(l.jsxs)("div",{id:"menu",children:[Object(l.jsx)(v,{label:"Username",value:k,setValue:w,disabled:f}),n.campaignKey&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{text:"Continue campaign "+n.campaignKey,icon:"navigate_next",onClick:D,disabled:f}),Object(l.jsx)(O,{text:"Leave campaign "+n.campaignKey,icon:"logout",onClick:_,disabled:f})]}),!n.campaignKey&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{text:"Create campaign",icon:"add",onClick:N,disabled:0===k.length}),Object(l.jsx)(O,{text:"Join campaign",icon:"login",onClick:I,disabled:0===k.length})]}),Object(l.jsx)("span",{className:"version",children:x})]})});Z.defaultProps={};var z=Z,$=(t(10),function(e){var n=e.color,t=e.userName,r=e.itsAMe,c=e.onSelectPlayer,i=Object(a.useMemo)((function(){return["player",n,t?null:"locked"].filter((function(e){return!!e})).join(" ")}),[n,t]),u=Object(a.useMemo)((function(){return t?r?t+" (you)":t:"Player "+n+" (bot)"}),[t,n,r]);return Object(l.jsxs)("div",{className:i,onClick:c,children:[t?Object(l.jsx)("span",{className:"icon material-icons-round",children:"face"}):Object(l.jsx)("span",{className:"icon material-icons-outlined",children:"smart_toy"}),Object(l.jsx)("span",{children:u})]})});$.defaultProps={userName:null};var ee=$,ne=function(e){var n=e.clientData,t=e.gameData,r=e.changePlayerId,c=e.changeClientScene,i=e.addToastMessage,u=Object(a.useCallback)(function(){var e=Object(p.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[a+"_deviceId"]){e.next=2;break}return e.abrupt("return",i("error","Already taken"));case 2:return e.next=4,W(n.campaignKey,n.playerId);case 4:r(a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,i,n.campaignKey,n.playerId,r]);return Object(l.jsxs)("div",{id:"pregame",children:[Object(l.jsxs)("div",{className:"lobby-key",children:["Lobby code:",Object(l.jsx)("span",{className:"selectable",children:n.campaignKey})]}),Object(l.jsx)(ee,{color:"blue",userName:null===t||void 0===t?void 0:t.playerBlue_userName,itsAMe:(null===t||void 0===t?void 0:t.playerBlue_deviceId)===n.deviceId,onSelectPlayer:function(){return u("playerBlue")}}),Object(l.jsx)(ee,{color:"red",userName:null===t||void 0===t?void 0:t.playerRed_userName,itsAMe:(null===t||void 0===t?void 0:t.playerRed_deviceId)===n.deviceId,onSelectPlayer:function(){return u("playerRed")}}),Object(l.jsx)(ee,{color:"green",userName:null===t||void 0===t?void 0:t.playerGreen_userName,itsAMe:(null===t||void 0===t?void 0:t.playerGreen_deviceId)===n.deviceId,onSelectPlayer:function(){return u("playerGreen")}}),Object(l.jsx)(ee,{color:"yellow",userName:null===t||void 0===t?void 0:t.playerYellow_userName,itsAMe:(null===t||void 0===t?void 0:t.playerYellow_deviceId)===n.deviceId,onSelectPlayer:function(){return u("playerYellow")}}),Object(l.jsx)(O,{text:"Back",icon:"arrow_back",onClick:function(){return c(h)}}),Object(l.jsx)(O,{text:"Start",icon:"play_arrow",onClick:function(){return c(C)}})]})};ne.defaultProps={gameData:null};var te=ne,ae=(t(32),function(e){var n=e.clientData,t=e.changeCampaignKey,r=e.changeClientScene,c=e.mergeGameData,i=e.addToastMessage,u=Object(a.useState)(""),o=Object(s.a)(u,2),d=o[0],b=o[1],f=Object(a.useCallback)(Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V({key:d,clientData:n,onCampaignChange:c});case 2:(a=e.sent)?i("error",a):(t(d),r(g));case 4:case"end":return e.stop()}}),e)}))),[d,n,c,r,i]),m=Object(a.useCallback)((function(e){(null===e||void 0===e?void 0:e.length)>4||b(e.toUpperCase())}),[]);return Object(l.jsxs)("div",{id:"join_pregame",children:[Object(l.jsx)(v,{label:"Lobby code",value:d,setValue:m,onKeyPressEnter:f}),Object(l.jsx)(O,{text:"Back",icon:"arrow_back",onClick:function(){return r(h)}}),Object(l.jsx)(O,{text:"Join campaign",icon:"login",onClick:f,disabled:4!==d.length})]})});ae.defaultProps={};var re=ae,ce=(t(33),function(e){var n=e.deckColor;return Object(l.jsx)("div",{className:"card_back_face card_back_color_"+n,children:Object(l.jsx)("div",{className:"pattern",children:Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)("svg",{width:"813",height:"337",viewBox:"0 0 813 337",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M0.977607 335.465C-0.722394 333.365 -0.0223934 132.765 1.67761 124.365C5.97761 104.065 7.67761 98.4649 13.2776 85.0649C16.3776 77.6649 25.5776 62.3649 31.3776 54.8649C33.7776 51.8649 39.4776 45.765 44.0776 41.265C65.5776 20.265 84.3776 10.365 118.378 1.76495C126.678 -0.33505 159.778 -0.63505 169.878 1.26495C178.878 3.06495 186.878 5.16495 193.178 7.46495C202.278 10.865 205.678 12.165 209.878 14.165C215.578 16.765 235.778 29.965 238.278 32.765C239.378 33.865 241.078 34.865 242.178 34.865C243.278 34.865 247.978 32.065 252.778 28.565C257.478 25.165 262.778 21.365 264.378 20.265C268.078 17.765 283.478 10.365 286.878 9.36495C288.278 9.06495 290.978 8.16495 292.878 7.46495C296.478 6.06495 303.678 3.96495 312.378 1.76495C320.678 -0.33505 353.778 -0.63505 363.878 1.26495C394.978 7.26495 418.978 19.465 440.678 40.265C454.478 53.465 465.578 69.5649 472.778 86.8649C478.178 99.9649 479.278 103.065 480.878 109.365C484.578 124.965 484.778 130.865 484.878 234.465C484.878 325.865 484.678 335.665 483.278 336.265C481.278 337.065 392.478 337.065 390.478 336.265C389.078 335.665 388.878 326.265 388.878 239.465C388.878 181.065 388.478 140.665 387.878 136.465C385.278 118.865 371.778 103.365 353.878 97.3649C346.878 95.0649 332.178 95.0649 325.578 97.2649C310.178 102.665 299.078 113.565 293.478 128.765C291.378 134.265 291.378 136.465 290.878 235.365L290.378 336.365H242.878H195.378L194.878 235.365C194.378 145.165 194.178 133.865 192.678 129.765C187.878 116.365 179.678 106.865 167.478 100.765C147.478 90.8649 127.178 94.365 111.278 110.265C103.778 117.865 99.9776 124.565 97.9776 133.665C97.1776 137.365 96.8776 167.665 96.8776 236.665C96.8776 311.365 96.5776 334.765 95.6776 335.665C93.7776 337.565 2.57761 337.365 0.977607 335.465Z",fill:"black"}),Object(l.jsx)("path",{d:"M523.178 1.22894C521.678 2.72894 522.378 176.929 523.978 190.129C531.978 256.829 580.978 312.929 647.878 331.829C650.878 332.729 655.378 333.729 657.878 334.129C660.378 334.529 664.878 335.429 667.878 336.029C671.678 336.829 694.578 337.029 742.878 336.929L812.378 336.629L812.678 290.229C812.778 264.629 812.578 243.429 812.078 242.929C811.678 242.529 781.678 242.029 745.378 241.829C671.078 241.529 675.478 241.929 658.378 233.329C641.778 224.929 629.578 210.629 622.078 190.629C619.178 182.829 618.878 173.729 618.878 89.1289C618.878 23.1289 618.578 2.22894 617.678 1.32894C616.078 -0.271062 524.778 -0.371062 523.178 1.22894Z",fill:"black"})]})})})})});ce.defaultProps={};var ie=ce;t(34);function ue(e,n,t){var a=e*n/100;return t?String(Math.round(a)).padStart(2,"0"):Math.round(10*a)/10}var se=function(e){var n=e.gameData,t=Object(a.useMemo)((function(){return n.deck?JSON.parse(n.deck):[]}),[n.deck]),r=Object(a.useMemo)((function(){return 100*(null===t||void 0===t?void 0:t.length)/108}),[t]),c=Object(a.useMemo)((function(){return(null===t||void 0===t?void 0:t.length)>0?t[0].deckColor:null}),[t]),i=Object(a.useMemo)((function(){return"0 "+ue(20,r)+"px 0 #ccc,0 "+ue(20,r)+"px "+ue(40,r)+"px rgba(0,0,0,0."+ue(19,r,!0)+"),0 "+ue(22,r)+"px "+ue(16,r)+"px rgba(0,0,0,0."+ue(30,r,!0)+")"}),[r]);return Object(l.jsx)("div",{id:"deck",style:{boxShadow:i},children:Object(l.jsx)(ie,{deckColor:c})})};se.defaultProps={};var le=se,oe=(t(35),function(e){var n=e.type;return Object(l.jsxs)(l.Fragment,{children:[n===I.DIAMOND&&Object(l.jsx)("div",{className:"diamond",children:Object(l.jsx)("div",{className:"square"})}),n===I.SPADE&&Object(l.jsxs)("div",{className:"spade",children:[Object(l.jsx)("div",{className:"square"}),Object(l.jsx)("div",{className:"circle1"}),Object(l.jsx)("div",{className:"circle2"}),Object(l.jsx)("div",{className:"tail"})]}),n===I.HEART&&Object(l.jsxs)("div",{className:"heart",children:[Object(l.jsx)("div",{className:"square"}),Object(l.jsx)("div",{className:"circle1"}),Object(l.jsx)("div",{className:"circle2"})]}),n===I.CLUB&&Object(l.jsxs)("div",{className:"club",children:[Object(l.jsx)("div",{className:"circle1"}),Object(l.jsx)("div",{className:"circle2"}),Object(l.jsx)("div",{className:"circle3"}),Object(l.jsx)("div",{className:"tail"})]})]})});oe.defaultProps={};var de=oe,be=(t(36),function(e){var n=e.card,t=e.isFlipped,r=Object(a.useMemo)((function(){return n.rank===D.JOKER}),[n.rank]),c=Object(a.useMemo)((function(){return n.rank>D.TEN}),[n.rank]),i=Object(a.useMemo)((function(){return U(n.suit)}),[n.suit]),u=Object(a.useMemo)((function(){return function(e){switch(e){case D.JOKER:return"JOKER";case D.KING:return"K";case D.QUEEN:return"Q";case D.JACK:return"J";case D.TEN:return"10";case D.NINE:return"9";case D.EIGHT:return"8";case D.SEVEN:return"7";case D.SIX:return"6";case D.FIVE:return"5";case D.FOUR:return"4";case D.THREE:return"3";case D.TWO:return"2";case D.ACE:return"A";default:return""}}(n.rank)}),[n.rank]),s=Object(a.useMemo)((function(){return Object(l.jsx)(de,{type:n.suit})}),[n.suit]),o=Object(a.useMemo)((function(){return["card",t?"is-flipped":null].filter((function(e){return!!e})).join(" ")}),[t]),d=Object(a.useCallback)((function(){}),[]);return Object(l.jsxs)("div",{id:n.id,className:o,onClick:d,children:[Object(l.jsxs)("div",{className:"card_front_face card_suit_color_"+i,children:[Object(l.jsxs)("div",{className:"info"+(r?" jolly":""),children:[u,s]}),Object(l.jsx)("div",{className:"figure",children:c&&Object(l.jsx)("div",{})}),Object(l.jsxs)("div",{className:"info"+(r?" jolly":""),children:[u,s]})]}),Object(l.jsx)(ie,{deckColor:n.deckColor})]},n.id)});be.defaultProps={isFlipped:!1};var je=be;t(37);function pe(e,n){if(e===n)return"south";for(var t=Object.values(w),a=t.indexOf(e),r=0;r<t.length;r++){if(t[(r+a)%t.length]===n)switch(r){case 1:return"east";case 2:return"north";case 3:return"west"}}}var fe=function(e){var n=e.playerId,t=e.clientData,r=e.gameData,c=Object(a.useMemo)((function(){return n===t.playerId}),[n,t.playerId]),i=Object(a.useMemo)((function(){return r[n+"_hand"]?JSON.parse(r[n+"_hand"]):[]}),[r[n+"_hand"]]),u=Object(a.useMemo)((function(){return["hand",G(n),pe(t.playerId,n)].filter((function(e){return!!e})).join(" ")}),[n]),s=Object(a.useMemo)((function(){return r[n+"_userName"]?r[n+"_userName"]:"Player "+G(n)+" (bot)"}),[n]);return Object(l.jsx)("div",{className:u,children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("span",{className:"player-name",children:s}),null===i||void 0===i?void 0:i.map((function(e,n){return Object(l.jsx)(je,{card:e,isFlipped:c})}))]})})};fe.defaultProps={};var Oe=fe,me=(t(38),function(e){var n=e.clientData,t=e.gameData,r=e.leaveCampaignApp,c=Object(a.useCallback)((function(){r()}),[r]);return Object(a.useEffect)((function(){Q(n,t)}),[]),Object(l.jsxs)("div",{id:"game",children:[Object(l.jsx)(le,{gameData:t}),Object(l.jsx)(Oe,{playerId:w.blue,clientData:n,gameData:t}),Object(l.jsx)(Oe,{playerId:w.red,clientData:n,gameData:t}),Object(l.jsx)(Oe,{playerId:w.green,clientData:n,gameData:t}),Object(l.jsx)(Oe,{playerId:w.yellow,clientData:n,gameData:t}),Object(l.jsx)(O,{id:"leave_btn",icon:"close",onClick:c})]})});me.defaultProps={};var ve=me,xe=(t(11),function(e){var n=e.playerId,t=e.cursorData,r=e.changeCursorX,c=e.changeCursorY,i=e.changeCursorHide,u=e.changeCursorUp,s=e.changeCursorDown,o=e.viewport,d=Object(a.useMemo)((function(){switch(n){case"playerBlue":return"blue";case"playerRed":return"red";case"playerGreen":return"green";case"playerYellow":return"yellow";default:return null}}),[n]),b=Object(a.useMemo)((function(){return["cursor",t.hide?"hidden":null,t.mouseDown?"down":null,t.mouseUp?"up":null,d].filter((function(e){return!!e})).join(" ")}),[d,t.hide,t.mouseDown,t.mouseUp]),j=Object(a.useCallback)((function(e){var n=e||window.event,t=function(e,n,t){return{x:100*e/t.width,y:100*n/t.height}}(n.x,n.y,o),a=t.x,i=t.y;r(a),c(i)}),[r,c,o]),p=Object(a.useCallback)((function(){i(!1)}),[i]),f=Object(a.useCallback)((function(){u(!1),i(!0)}),[u,i]),O=Object(a.useCallback)((function(){u(!1),s(!0)}),[u,s]),m=Object(a.useCallback)((function(){s(!1),u(!0)}),[s,u]),v=Object(a.useCallback)((function(e){return e.preventDefault(),!1}),[]);return Object(a.useEffect)((function(){document.onmousemove=j,document.onmouseenter=p,document.onmouseleave=f,document.onmousedown=O,document.onmouseup=m,document.oncontextmenu=v}),[j,p,f,O,m,v]),Object(l.jsxs)("div",{className:b,style:{transform:"translate("+J(t.x,o)+"px, "+B(t.y,o)+"px)"},children:[Object(l.jsx)("div",{className:"goccia"}),Object(l.jsx)("div",{className:"text",children:t.text})]})});xe.defaultProps={playerId:null};var he=xe,ge=function(e){var n=e.playerId,t=e.gameData,r=e.viewport;if(!t||!t[n+"_userName"])return null;var c=Object(a.useMemo)((function(){switch(n){case"playerBlue":return"blue";case"playerRed":return"red";case"playerGreen":return"green";case"playerYellow":return"yellow";default:return null}}),[n]),i=Object(a.useMemo)((function(){return["cursor",t[n+"_cursorHide"]?"hidden":null,c].filter((function(e){return!!e})).join(" ")}),[c,t[n+"_cursorHide"]]);return Object(l.jsxs)("div",{className:i,style:{transform:"translate("+J(t[n+"_cursorX"],r)+"px, "+B(t[n+"_cursorY"],r)+"px)"},children:[Object(l.jsx)("div",{className:"goccia"}),Object(l.jsx)("div",{className:"text",children:t[n+"_cursorText"]})]})};ge.defaultProps={playerId:null,gameData:null};var ye=ge,Ce=(t(39),function(e){var n=e.messages;return Object(l.jsx)("div",{id:"toast_message_container",children:null===n||void 0===n?void 0:n.map((function(e,n){return Object(l.jsxs)("div",{className:"toast-message "+e.type,children:["error"===e.type&&Object(l.jsx)("span",{className:"icon material-icons-round",children:"priority_high"}),Object(l.jsx)("span",{className:"text",children:e.text})]},n)}))})});Ce.defaultProps={};var ke=Ce,we=function(e,n){return JSON.parse(localStorage.getItem("pbg_"+e))},Ne=function(e,n){return new Promise((function(t){t(function(e,n){return localStorage.setItem("pbg_"+e,JSON.stringify(n))}(e,n))}))},Ie=(t(40),function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(a.useCallback)((function(e){r((function(n){return n.filter((function(n){return n.id!==e}))}))}),[]),o=Object(a.useCallback)((function(e,n){var t=T();r((function(a){return[].concat(Object(u.a)(a),[{id:t,type:e,text:n}])})),setTimeout((function(){return c(t)}),3e3)}),[c]),b=Object(a.useState)((function(){var e=we(k);if((null===e||void 0===e?void 0:e.appVersion)===x)return Object(i.a)(Object(i.a)({},e),{},{clientScene:h});var n={appVersion:x,deviceId:T(),clientScene:h,userName:"",campaignKey:null,playerId:null};return e&&e.appVersion!==x&&e.deviceId?Object(i.a)(Object(i.a)({},n),{},{deviceId:e.deviceId,userName:e.userName}):n})),j=Object(s.a)(b,2),p=j[0],f=j[1];Object(a.useEffect)((function(){Ne(k,p)}),[p]);var O=Object(a.useCallback)((function(){f((function(e){return Object(i.a)(Object(i.a)({},e),{},{clientScene:h,campaignKey:null,playerId:null})}))}),[]),m=Object(a.useCallback)((function(e){f((function(n){return Object(i.a)(Object(i.a)({},n),{},{clientScene:e})}))}),[]),v=Object(a.useCallback)((function(e){f((function(n){return Object(i.a)(Object(i.a)({},n),{},{userName:e})}))}),[]),w=Object(a.useCallback)((function(e){f((function(n){return Object(i.a)(Object(i.a)({},n),{},{campaignKey:e})}))}),[]),N=Object(a.useCallback)((function(e){f((function(n){return Object(i.a)(Object(i.a)({},n),{},{playerId:e})}))}),[]),I=Object(a.useState)({x:0,y:0,mouseUp:!1,mouseDown:!1,hide:!0,text:""}),D=Object(s.a)(I,2),_=D[0],E=D[1],S=Object(a.useCallback)((function(e){E((function(n){return Object(i.a)(Object(i.a)({},n),{},{x:e,hide:!1})}))}),[]),M=Object(a.useCallback)((function(e){E((function(n){return Object(i.a)(Object(i.a)({},n),{},{y:e,hide:!1})}))}),[]),K=Object(a.useCallback)((function(e){E((function(n){return Object(i.a)(Object(i.a)({},n),{},{mouseUp:e})}))}),[]),P=Object(a.useCallback)((function(e){E((function(n){return Object(i.a)(Object(i.a)({},n),{},{mouseDown:e})}))}),[]),A=Object(a.useCallback)((function(e){E((function(n){return Object(i.a)(Object(i.a)({},n),{},{hide:e})}))}),[]);Object(a.useEffect)((function(){q(p,_)}),[p,_]);var R=Object(a.useState)(null),J=Object(s.a)(R,2),B=J[0],H=J[1],U=Object(a.useCallback)((function(){X(p.campaignKey,p.deviceId,p.playerId),O(),H(null)}),[p.campaignKey,p.deviceId,p.playerId,O]),G=Object(a.useCallback)((function(e){!0!==(null===e||void 0===e?void 0:e.deleted)?H((function(n){return Object(i.a)(Object(i.a)({},n),e)})):U()}),[U]),L=Object(a.useState)({height:window.innerHeight,width:window.innerWidth}),Y=Object(s.a)(L,2),F=Y[0],V=Y[1],W=Object(a.useCallback)((function(){return V({height:window.innerHeight,width:window.innerWidth})}),[]);return Object(a.useEffect)((function(){return window.addEventListener("resize",W),function(){return window.removeEventListener("resize",W)}}),[W]),Object(a.useEffect)((function(){console.log("gameData changed: ",Object(i.a)({},B))}),[B]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),h===p.clientScene&&Object(l.jsx)(z,{clientData:p,changeUserName:v,changeCampaignKey:w,changeClientScene:m,leaveCampaignApp:U,mergeGameData:G,addToastMessage:o}),g===p.clientScene&&Object(l.jsx)(te,{clientData:p,gameData:B,changePlayerId:N,changeClientScene:m,addToastMessage:o}),y===p.clientScene&&Object(l.jsx)(re,{clientData:p,changeCampaignKey:w,changeClientScene:m,mergeGameData:G,addToastMessage:o}),C===p.clientScene&&Object(l.jsx)(ve,{clientData:p,gameData:B,leaveCampaignApp:U}),C===p.clientScene&&"playerBlue"!==p.playerId&&Object(l.jsx)(ye,{playerId:"playerBlue",gameData:B,viewport:F}),C===p.clientScene&&"playerRed"!==p.playerId&&Object(l.jsx)(ye,{playerId:"playerRed",gameData:B,viewport:F}),C===p.clientScene&&"playerGreen"!==p.playerId&&Object(l.jsx)(ye,{playerId:"playerGreen",gameData:B,viewport:F}),C===p.clientScene&&"playerYellow"!==p.playerId&&Object(l.jsx)(ye,{playerId:"playerYellow",gameData:B,viewport:F}),Object(l.jsx)(ke,{messages:t}),_&&Object(l.jsx)(he,{playerId:p.playerId,cursorData:_,changeCursorX:S,changeCursorY:M,changeCursorUp:K,changeCursorDown:P,changeCursorHide:A,viewport:F})]})});c.a.render(Object(l.jsx)(Ie,{}),document.getElementById("app"))}],[[41,1,2]]]);
//# sourceMappingURL=main.5bdd8215.chunk.js.map