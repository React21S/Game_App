(this.webpackJsonpgamespeed=this.webpackJsonpgamespeed||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(3),s=c.n(r),n=(c(12),c(13),c(14),c(4)),i=c(5),o=c(7),l=c(6),d=c(0),j=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("header",{children:" Game App "})})},u=function(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"footerWrapper",children:[Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/",target:"_blank",rel:"noreferrer",className:"linkedin",children:Object(d.jsx)("i",{className:"fab fa-linkedin fa-2x"})}),Object(d.jsx)("a",{href:"#1",className:"facebook",children:Object(d.jsx)("i",{className:"fab fa-facebook fa-2x"})}),Object(d.jsx)("a",{href:"https://github.com/FemiAdesola",target:"_blank",rel:"noreferrer",className:"github",children:Object(d.jsx)("i",{className:"fab fa-github fa-2x"})})]}),Object(d.jsxs)("p",{children:["Femi Adesola \xa9 ",(new Date).getFullYear()]})]})})})},b=function(e){var t=e.color,c=e.disabled,a=e.active,r=e.click;return Object(d.jsx)("div",{style:{backgroundColor:t,pointerEvents:c?"auto":"none"},className:"circle ".concat(a?"active":""),onClick:r})},h=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"red"},{id:4,color:"gray"},{id:5,color:"pink"}],m=function(e){var t=e.score,c=e.close,a="".concat(t<=60?"You can do better \ud83d\ude00 ":t>=60&&t<=90?" You almost get to 100 \ud83d\ude01":t>=90&&t<=120?"You are doing great \ud83d\udc4f ":t>=120&&t<=150?"Well done \ud83c\udf55":t>=150&&t<=200?"WOW you are game Player \ud83c\udf77 ":t>=200?"Get Chocolate Ice Cream \ud83c\udf66":""," ");return Object(d.jsx)("div",{className:"popup",children:Object(d.jsxs)("div",{className:"overlay",children:[Object(d.jsx)("button",{onClick:c,children:"X"}),Object(d.jsx)("h1",{children:" Game Over "}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[" Your Score was : ",Object(d.jsxs)("span",{children:[t," "]})]}),Object(d.jsx)("p",{children:a})]})]})})},p=c.p+"static/media/startGame.4203cc03.wav",O=c.p+"static/media/endGame.74ec43b7.wav",f=new Audio(p),x=new Audio(O),v=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={score:0,current:0,showGameOver:!1,pace:1500,rounds:0,gameStart:!1},e.timer=void 0,e.clickPlay=function(){f.paused?f.play():f.currentTime=0},e.clickHandler=function(t){e.clickPlay(),e.state.current===t?e.setState({score:e.state.score+10,rounds:0}):e.stopHandler()},e.nextCircle=function(){if(e.state.rounds>=5)e.stopHandler();else{var t;do{t=v(1,5)}while(t===e.state.current);e.setState({current:t,pace:.95*e.state.pace,rounds:e.state.rounds+1}),e.timer=setTimeout(e.nextCircle,e.state.pace)}},e.startHandler=function(){f.play(),e.nextCircle(),e.setState({gameStart:!0})},e.stopHandler=function(){f.pause(),x.play(),clearTimeout(e.timer),e.setState({showGameOver:!0,current:0,gameStart:!1})},e.closeHandler=function(){e.setState({showGameOver:!1,score:0,pace:1500,rounds:0})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{children:[this.state.showGameOver&&Object(d.jsx)(m,{score:this.state.score,close:this.closeHandler}),Object(d.jsx)("h1",{children:" \ud83d\udc46Touch the Snowman game \ud83d\udc46"}),Object(d.jsx)("div",{className:"circles",children:h.map((function(t){return Object(d.jsx)(b,{color:t.color,id:t.id,click:function(){return e.clickHandler(t.id)},active:e.state.current===t.id,disabled:e.state.gameStart},t.id)}))}),Object(d.jsxs)("p",{children:["Your Score : ",this.state.score]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{disabled:this.state.gameStart,type:"submit",onClick:this.startHandler,children:"Start Game"}),Object(d.jsx)("button",{onClick:this.stopHandler,children:"End Game"})]})]}),Object(d.jsx)(u,{})]})}}]),c}(a.Component),k=g;s.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fd4ce3b4.chunk.js.map