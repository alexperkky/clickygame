(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"/assets/images/ajstyles.jpg",clicked:!1},{id:2,image:"/assets/images/steveaustin.jpg",clicked:!1},{id:3,image:"/assets/images/therock.jpg",clicked:!1},{id:4,image:"/assets/images/machoman.jpg",clicked:!1},{id:5,image:"/assets/images/chrisjericho.jpg",clicked:!1},{id:6,image:"/assets/images/kennyomega.jpg",clicked:!1},{id:7,image:"/assets/images/kurtangle.jpg",clicked:!1},{id:8,image:"/assets/images/razorramon.jpg",clicked:!1},{id:9,image:"/assets/images/robvandam.jpg",clicked:!1},{id:10,image:"/assets/images/scottsteiner.jpg",clicked:!1},{id:11,image:"/assets/images/youngbucks.jpg",clicked:!1},{id:12,image:"/assets/images/sabu.jpg",clicked:!1}]},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=a(6),s=a(1),l=a(2),u=a(4),m=a(3),d=a(5),g=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,c={animating:!0};c.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===c.message||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component));a(17);var f=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement(g,{score:e.score,topScore:e.topScore}),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(18);var h=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(19);var k=function(e){return c.a.createElement("main",{className:"container"},e.children)};a(20);var p=function(e){return c.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(21);var v=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},"Clicky Game! ",c.a.createElement("img",{alt:"react",src:"assets/images/react.svg"})))},j=a(9),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:j,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,c=t.score+1,r=Math.max(c,n);a.setState({data:a.shuffleData(e),score:c,topScore:r})},a.handleIncorrectGuess=function(e){a.setState({data:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map(function(e){return Object(o.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleItemClick=function(e){var t=!1,n=a.state.data.map(function(a){var n=Object(o.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n});t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(k,null,this.state.data.map(function(t){return c.a.createElement(p,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})})),c.a.createElement(v,null))}}]),t}(n.Component);var E=function(){return c.a.createElement(w,null)},b=(a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(c.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clickygame",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clickygame","/service-worker.js");b?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.efe92fe0.chunk.js.map