(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1000:function(e,t){},1011:function(e,t){},1012:function(e,t){},1013:function(e,t){},1028:function(e,t){},1035:function(e,t,n){},1037:function(e,t,n){},1039:function(e,t,n){},1041:function(e,t,n){e.exports=n.p+"static/media/WebPage.d6d7485a.jpg"},1042:function(e,t,n){},1044:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(216),o=n.n(i),s=(n(406),n(70)),r=n(71),l=n(73),u=n(72),m=n(74),h=n(218),d=n.n(h),f=n(398),b=n(37),k=n(55),p=n.n(k),E=n(45),w=(n(1035),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createDirectLine=Object(E.default)(function(e){return Object(k.createDirectLine)({token:"yBAq-XoF_kE.dAA.RgA3AGcAVgBsAG0ASwBFAEgAdQBTAEEAbgBrAHIATwBrADkASQAyAGMASQAtAGcA.XeN857vt1AE.x2bv3sy5rn4.JGsP7ljaEqQvtjE6fa-zHxDPPIl-qxJ8q-oytgxNG5c"})}),n.state={styleSet:Object(k.createStyleSet)({})},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){!this.props.token&&this.props.onFetchToken()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.store,a=e.token,i=this.state.styleSet;return a?c.a.createElement(p.a,{className:"".concat(t||""," web-chat"),directLine:this.createDirectLine(a),store:n,styleSet:i}):c.a.createElement("div",{className:"".concat(t||""," connect-spinner")},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement("span",{className:"ms-Icon ms-Icon--Robot"})),c.a.createElement("p",null,"Please wait while we are connecting.")))}}]),t}(c.a.Component)),v=(n(1037),n(1039),function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFetchToken=n.handleFetchToken.bind(Object(b.a)(Object(b.a)(n))),n.handleMaximizeButtonClick=n.handleMaximizeButtonClick.bind(Object(b.a)(Object(b.a)(n))),n.handleMinimizeButtonClick=n.handleMinimizeButtonClick.bind(Object(b.a)(Object(b.a)(n))),n.handleSwitchButtonClick=n.handleSwitchButtonClick.bind(Object(b.a)(Object(b.a)(n)));var a=Object(k.createStore)({},function(e){var t=e.dispatch;return function(e){return function(a){return"DIRECT_LINE/CONNECT_FULFILLED"===a.type?setTimeout(function(){t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}})},1e3):"DIRECT_LINE/INCOMING_ACTIVITY"===a.type&&"bot"===a.payload.activity.from.role&&n.setState(function(){return{newMessage:!0}}),e(a)}}});return n.state={minimized:!0,newMessage:!1,side:"right",store:a,styleSet:Object(k.createStyleSet)({backgroundColor:"Transparent"}),token:null},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleFetchToken",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.token){e.next=9;break}return e.next=3,fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.token,this.setState(function(){return{token:a}});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleMaximizeButtonClick",value:function(){this.setState(function(){return{minimized:!1,newMessage:!1}})}},{key:"handleMinimizeButtonClick",value:function(){this.setState(function(){return{minimized:!0,newMessage:!1}})}},{key:"handleSwitchButtonClick",value:function(){this.setState(function(e){return{side:"left"===e.side?"right":"left"}})}},{key:"render",value:function(){var e=this.state,t=e.minimized,n=e.newMessage,a=e.side,i=e.store,o=e.styleSet,s=e.token;return c.a.createElement("div",{className:"minimizable-web-chat"},t?c.a.createElement("button",{className:"maximize",onClick:this.handleMaximizeButtonClick},c.a.createElement("span",{className:s?"ms-Icon ms-Icon--MessageFill":"ms-Icon ms-Icon--Message"}),n&&c.a.createElement("span",{className:"ms-Icon ms-Icon--CircleShapeSolid red-dot"})):c.a.createElement("div",{className:"left"===a?"chat-box left":"chat-box right"},c.a.createElement("header",null,c.a.createElement("div",{className:"filler"}),c.a.createElement("button",{className:"switch",onClick:this.handleSwitchButtonClick},c.a.createElement("span",{className:"ms-Icon ms-Icon--Switch"})),c.a.createElement("button",{className:"minimize",onClick:this.handleMinimizeButtonClick},c.a.createElement("span",{className:"ms-Icon ms-Icon--ChromeMinimize"}))),c.a.createElement(w,{className:"react-web-chat",onFetchToken:this.handleFetchToken,store:i,styleSet:o,token:s})))}}]),t}(c.a.Component)),j=(n(1041),n(1042),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},401:function(e,t,n){e.exports=n(1044)},406:function(e,t,n){},435:function(e,t){},437:function(e,t){},473:function(e,t){},474:function(e,t){}},[[401,2,1]]]);
//# sourceMappingURL=main.cb5fb66e.chunk.js.map