(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b39":function(t,e,n){"use strict";var i=n("2279"),a=n.n(i);a.a},1490:function(t,e){(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),a=window.setTimeout(function(){e(n+i)},i);return t=n+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},2279:function(t,e,n){},2913:function(t,e,n){"use strict";var i=n("5df9"),a=n.n(i);a.a},"2b70":function(t,e,n){},"322c":function(t,e,n){t.exports=n.p+"img/seal.dcbfcd04.png"},"368b":function(t,e,n){t.exports=n.p+"img/photo.63f944e1.png"},"46f5":function(t,e,n){t.exports=n.p+"media/InputAudio.9b637b09.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wedding"},[n("Editor")],1)},s=[],r=(n("3b2b"),n("a481"),n("cee4")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"editor",staticClass:"wedding-editor"},[t._m(0),i("audio",{ref:"shinyAudio",attrs:{hidden:""}},[i("source",{attrs:{src:n("ad6e"),type:"audio/mpeg"}})]),i("p",{staticClass:"code"},[t._v("Last login: "),i("span",[t._v(t._s(t.startDate))])]),i("audio",{ref:"inputAudio",attrs:{hidden:""}},[i("source",{attrs:{src:n("46f5"),type:"audio/mpeg"}})]),i("pre",[t._v("    "),i("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),!t.canStart&&!t.hasClosed||t.canOpen?t._e():i("div",{staticClass:"editor-open",on:{click:function(e){t.canOpen=!0}}},[i("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[i("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),i("line",{attrs:{x1:"9",y1:"3",x2:"9",y2:"21"}})])]),i("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:t.finish}}),i("invitation",{attrs:{canOpen:t.canOpen},on:{onClose:function(e){t.canOpen=!1,t.hasClosed=!0},sendBarrage:t.onAfterSending}}),i("Barrage",{attrs:{wish:t.wish,canStart:t.canStart}})],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"editor-header"},[n("a",{attrs:{href:"javascript:;"}}),n("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),n("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],u=n("c197"),l=n.n(u),d=(n("fa97"),n("1490"),{code:"\nconst { 🧑, 👩 } = 🌎;\n👩.say('️震惊！！！');\n👩.say('️有一个惊天大瓜！');\n🧑.response('什么什么？！快说来听听！');\n👩.say('️我们村的村花和隔壁村的村草要结婚啦！');\n🧑.response('真的吗？不可能吧！？');\n👩.say('️千真万确！不信你看！');\nUtils.marry(🧑,👩);\nUtils.generateInvitation(🧑,👩);\n ",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"打包中",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","百年好合呀","新娘好美，哈哈哈哈","哇哇哇","快说，这么好看的老婆怎么被你追到手的","新娘还有单身闺蜜没有🤔","好好看！！！","兄弟，哥们儿还是单身😭","擦！卷起来了","99","好家伙！悄咪咪的干大事！！！","你别说，还挺有夫妻相","卷起来了，卷起来了","属实是羡慕了，兄弟"],userName:"",ip:""}),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"executions"},[t._l(t.executions,function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(e.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(e.name))]),void 0!==e.duration?n("span",{staticClass:"duration"},[t._v(t._s(e.duration)+" ms")]):t._e()])}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),n("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},f=[],h=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("1da1")),m=(n("28a5"),{name:"Executions",props:["canExecute"],data:function(){return{executions:d.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter(function(t){return"#"===t}).length,e=this.progressBarText.length;return Math.floor(100*t/e)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,s,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=!0,n=!1,i=void 0,t.prev=3,a=this.executions[Symbol.iterator]();case 5:if(e=(s=a.next()).done){t.next=12;break}return r=s.value,t.next=9,this.progressivelyRun(r);case 9:e=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),n=!0,i=t.t0;case 18:t.prev=18,t.prev=19,e||null==a.return||a.return();case 21:if(t.prev=21,!n){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:return t.next=28,this.successProcessing(1e3);case 28:return t.next=30,this.progressivelyRun(this.endExecution).then(function(){setTimeout(function(){o.isFinished=!0,o.$emit("onFinish")},500)});case 30:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}(),progressivelyRun:function(t,e){return new Promise(function(n){var i=new Date,a=e||50*Math.random()+250,s=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?a.toFixed(2):void 0,t.visible=!0,n()};setTimeout(s,a)})},successProcessing:function(t){var e=this;return new Promise(function(n){var i,a=null,s=0;e.isProcessed=!0;var r=function r(o){var c;null===a&&(a=o),c=o-a,s%3===0&&(e.progressBarText=e.progressBarText.replace("-","#")),s++,c<t?i=requestAnimationFrame(r):(n(),e.progressBarText=e.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(r)})}}}),v=m,g=(n("6af3"),n("2877")),b=Object(g["a"])(v,p,f,!1,null,null,null);b.options.__file="Executions.vue";var w=b.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[i("div",{staticClass:"content-inside"},[i("audio",{ref:"musicAudio",attrs:{loop:"",hidden:""}},[i("source",{attrs:{src:n("df40"),type:"audio/mpeg"}})]),i("img",{staticClass:"content-inside-photo",attrs:{src:n("368b")}}),i("b",[t._v("诚邀  "),i("span",{staticStyle:{color:"black","font-size":"18px"}},[t._v(t._s(t.data.userName?t.data.userName:"您"))]),t._v("  参加\n             新郎：廖琛 & 新娘：贺佳佳\n             结婚典礼 敬备喜宴\n             时间：二零二三年十二月初六\n          "),t.data.userName?i("span",[t._v("地点："),i("a",{staticStyle:{color:"#a9895d"},attrs:{href:"https://surl.amap.com/24trKNv5idqH"}},[t._v("株洲市攸县黄丰桥镇晓曙村(←点击导航)")])]):t._e(),t._v("\n          \n          是千里之外的奔赴，是不计得失的支持。\n                感谢一路相伴的家人朋友，许久不见，甚是想念。\n                诚邀您及家人光临寒舍，共同见证。")]),t.data.userName?i("div",{staticClass:"content-inside-bless"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.wish,expression:"wish"}],ref:"wishInput",attrs:{placeholder:"写下你的祝福"},domProps:{value:t.wish},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendBarrage(e):null},focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1,t.hasEntered=!1},input:function(e){e.target.composing||(t.wish=e.target.value)}}}),!t.wish&&t.isFocused&&t.hasEntered?i("p",[t._v("请输入祝福哦")]):t._e(),i("div",[i("button",{on:{click:t.sendBarrage}},[t._v("发送祝福弹幕")]),i("button",{on:{click:t.closeInvitation}},[t._v("关闭")])])]):t._e()])]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:n("322c")},on:{click:t.openInvitation}})])])])},x=[],y={props:["canOpen"],data:function(){return{data:d,isOpening:!1,wish:"",isFocused:!1,hasEntered:!1}},methods:{openInvitation:function(){var t=this;this.isOpening=!0,this.$refs.musicAudio.currentTime=0,this.$refs.musicAudio.play(),setTimeout(function(){t.$emit("sendBarrage",null)},1500)},closeInvitation:function(){var t=this;this.isOpening=!1,setTimeout(function(){t.$emit("onClose")},660)},sendBarrage:function(){var t=this;this.$nextTick(function(){if(t.hasEntered=!0,t.wish&&t.data.userName){r["a"].put("http://110.41.166.48:9999/blessings/insert?name=".concat(t.data.userName,"&content=").concat(t.wish)),t.$refs.wishInput.blur();var e=t.wish;t.wish=null,t.$emit("sendBarrage",e)}})}}},C=y,O=(n("bddb"),Object(g["a"])(C,_,x,!1,null,null,null));O.options.__file="Invitation.vue";var E=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[n("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),n("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[t.wish?n("span",{staticClass:"mine"},[t._v(t._s(t.wish))]):t._e(),t._l(t.filterBarrage(t.barrages,0),function(e,i){return n("span",{key:i,class:"mine"+i%3},[t._v(t._s(e))])})],2),n("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.data2.barrages,1),function(e,i){return n("span",{key:i,class:"mine"+(i+3)%3},[t._v(t._s(e))])})),n("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.data2.barrages,2),function(e,i){return n("span",{key:i,class:"mine"+(i+1)%3},[t._v(t._s(e))])})),n("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.data2.barrages,3),function(e,i){return n("span",{key:i,class:"mine"+(i+2)%3},[t._v(t._s(e))])})),n("div",{staticClass:"barrage-space"})])},k=[],A={props:["wish","canStart"],data:function(){return{data2:d,barrages:d.barrages,animationStyle:"",initialOffset:0,color:["color: #00ff00","color: #0055ff","color: #ff5500","color: #55007f"]}},mounted:function(){var t=this;setTimeout(function(){var e=t;r["a"].get("http://110.41.166.48:9999/blessings/select").then(function(t){var n=t.data.data;n.forEach(function(t){e.data2.barrages.push(t.content)})})},2e3)},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle.replaceAll("'",""),"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var t=this,e=this.getWidth(this.$refs.barrage),n=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=e+15,n.map(function(n,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(e+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(n+15,"px,0,0);\n            }\n          }\n          .mine").concat(i,"{\n            ").concat(t.color[i],"\n          }")})},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,e){if(t)return t.filter(function(t,n){if(n%4===e)return t})}}},S=A,$=(n("2913"),Object(g["a"])(S,T,k,!1,null,null,null));$.options.__file="Barrage.vue";var F=$.exports,B={name:"Editor",components:{Executions:w,Invitation:E,Barrage:F},data:function(){return{startDate:"",code:d.code,barrages:d.barrages,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",hasClosed:!1,canStart:!1}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var t=l.a.highlight(this.currentCode,l.a.languages.javascript),e="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return e}},methods:{scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},finish:function(){this.canOpen=!0,this.$refs.shinyAudio.currentTime=0,this.$refs.shinyAudio.play()},progressivelyTyping:function(){var t=this,e=this;return new Promise(function(n){var i,a=0,s=0,r=function r(){var o=Math.round(6*Math.random());a%2===0&&o%4===0&&(t.currentCode=t.code.substring(0,s),s++,e.$refs.inputAudio.paused&&e.$refs.inputAudio.play(),e.$refs.inputAudio.volume=.4,e.$refs.inputAudio.currentTime=0,e.$refs.inputAudio.play(),e.$refs.inputAudio.playbackRate=2),a%24===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),a+=2,s<=t.code.length?i=requestAnimationFrame(r):(n(),t.canExecute=!0,cancelAnimationFrame(i))};i=requestAnimationFrame(r)})},onAfterSending:function(t){var e=this;this.barrages.unshift(this.wish),this.wish=t,setTimeout(function(){e.canStart=!0},800)}}},j=B,P=(n("8164"),Object(g["a"])(j,o,c,!1,null,null,null));P.options.__file="Editor.vue";var N=P.exports,I={props:[],components:{Editor:N},data:function(){return{data:d,ip:""}},name:"Wedding",mounted:function(){var t=this;this.data.userName=this.getUrlKey("name",window.location.href),r["a"].get("https://api.ipify.org?format=json").then(function(e){t.ip=e.data.ip,t.data.ip=e.data.ip,r["a"].put("http://110.41.166.48:9999/binding/insert?name=".concat(t.data.userName,"&ip=").concat(t.ip))})},methods:{getUrlKey:function(t,e){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(e)||[,""])[1].replace(/\+/g,"%20"))||null}}},q=I,M=(n("0b39"),Object(g["a"])(q,a,s,!1,null,null,null));M.options.__file="Wedding.vue";var R=M.exports;new i["a"]({el:"#app",render:function(t){return t(R)}})},"5df9":function(t,e,n){},"6af3":function(t,e,n){"use strict";var i=n("2b70"),a=n.n(i);a.a},8164:function(t,e,n){"use strict";var i=n("b1f4"),a=n.n(i);a.a},ad6e:function(t,e,n){t.exports=n.p+"media/Shiny.ebbebe47.mp3"},b1f4:function(t,e,n){},bddb:function(t,e,n){"use strict";var i=n("d0b9"),a=n.n(i);a.a},d0b9:function(t,e,n){},df40:function(t,e,n){t.exports=n.p+"media/Everytime.d98504cb.mp3"}});
//# sourceMappingURL=app.9bddac97.js.map