(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"84ca142d"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"081e":function(t,e,n){"use strict";var a=n("1354"),o=n.n(a);o.a},1354:function(t,e,n){},"179a":function(t,e,n){"use strict";var a=n("5708"),o=n.n(a);o.a},"1e7a":function(t,e,n){"use strict";var a=n("6b3c"),o=n.n(a);o.a},"514f":function(t,e,n){"use strict";var a=n("9487"),o=n.n(a);o.a},5708:function(t,e,n){},"5d46":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo-list"}},[n("h1",[t._v("閉鎖されました")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"6b3c":function(t,e,n){},"75cf":function(t,e,n){"use strict";var a=n("5d46"),o=n("7e30"),r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"7e30":function(t,e,n){"use strict";var a=n("9626"),o=n.n(a);e["default"]=o.a},9487:function(t,e,n){},9626:function(t,e,n){},bdc8:function(t,e,n){},c453:function(t,e,n){"use strict";var a=n("bdc8"),o=n.n(a);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",dark:t.tr}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v("\n            メニュー\n          ")]),n("v-list-item-subtitle",[t._v("\n            サブタイトル\n          ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{key:"ホーム",attrs:{link:"",to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("ホーム")])],1)],1),n("v-list-item",{key:"マイページ",attrs:{link:"",to:"/mypage"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("マイページ")])],1)],1),n("v-list-item",{key:"タグ検索",attrs:{link:"",to:"/tagsearch"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-magnify")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("タグ検索")])],1)],1),n("v-list-item",{key:"このサイトについて",attrs:{link:"",to:"/about"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-information")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("このサイトについて")])],1)],1),n("v-list-item",{key:"todo",attrs:{link:"",to:"/todos"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-information")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("todo")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("PROCON")]),n("span",{staticClass:"font-weight-light"},[t._v("-QA")])]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",to:"questionform"}},[n("span",{staticClass:"mr-2"},[t._v("質問する")])]),n("v-btn",{attrs:{text:"",to:"login"}},[n("span",{staticClass:"mr-2"},[t._v("ログイン")])]),n("v-btn",{attrs:{text:"",to:"signup"}},[n("span",{staticClass:"mr-2"},[t._v("登録")])])],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},r=[],i=n("d225"),s=n("308d"),c=n("6bb5"),l=n("4e2b"),u=n("9ab4"),d=n("60a3"),v=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.tr=!0,t.fal=!1,t}return Object(l["a"])(e,t),e}(d["c"]);v=Object(u["a"])([Object(d["a"])({components:{}})],v);var m=v,f=m,p=n("2877"),b=n("6544"),h=n.n(b),g=n("7496"),O=n("40dc"),y=n("8336"),_=n("a523"),j=n("a75b"),k=n("ce7e"),x=n("553a"),w=n("132d"),C=n("8860"),q=n("da13"),T=n("5d23"),V=n("34c3"),P=n("f774"),I=n("2fa4"),S=n("2a7f"),$=Object(p["a"])(f,o,r,!1,null,null,null),E=$.exports;h()($,{VApp:g["a"],VAppBar:O["a"],VBtn:y["a"],VContainer:_["a"],VContent:j["a"],VDivider:k["a"],VFooter:x["a"],VIcon:w["a"],VList:C["a"],VListItem:q["a"],VListItemContent:T["a"],VListItemIcon:V["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VNavigationDrawer:P["a"],VSpacer:I["a"],VToolbarTitle:S["a"]});var A=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"main-contents"},[n("h1",{attrs:{id:"title"}},[t._v(t._s(t.user)+" さん, こんにちは")]),n("button",{on:{click:t.logout}},[t._v("LOGOUT")]),n("Questions")],1)])},N=[],D=(n("7f7f"),n("28a5"),n("b0b4")),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questions"},[t._l(t.questions,function(t,e){return n("div",{key:e},[n("QuestionPanel",{attrs:{questionId:t.id}})],1)}),n("v-pagination",{attrs:{length:331,"total-visible":7,circle:""},model:{value:t.curPageId,callback:function(e){t.curPageId=e},expression:"curPageId"}})],2)},B=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-panel"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1010",color:"white"}},[n("v-card-title",[n("router-link",{staticClass:"title",attrs:{to:{name:"question",query:{questionId:this.questionId}}}},[t._v(t._s(t.question.title))])],1),n("v-btn",{staticClass:"tag",attrs:{color:"blue-grey lighten-4","x-small":""}},[t._v("\n      タグ(仮)\n    ")]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[t._v("質問日時: "+t._s(t.question.date))])],1)],1)},J=[],M=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.question={},t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"created",value:function(){var t=this,e="api/question/"+String(this.questionId),n={Authorization:"Bearer ".concat(this.getToken())};fetch(e,{headers:n}).then(function(t){return t.ok?t.json():[]}).then(function(e){t.question=e})}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])()],M.prototype,"questionId",void 0),M=Object(u["a"])([d["a"]],M);var R=M,U=R,z=(n("c453"),n("b0af")),G=n("99d9"),W=Object(p["a"])(U,Q,J,!1,null,"79abd6be",null),H=W.exports;h()(W,{VBtn:y["a"],VCard:z["a"],VCardText:G["b"],VCardTitle:G["c"],VDivider:k["a"]});var K=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.tr=!0,t.fal=!1,t.curPageId=1,t.user="",t.questions=[],t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"changePageId",value:function(t){this.curPageId=t}},{key:"created",value:function(){this.getQuestions()}},{key:"getQuestions",value:function(){var t=this,e="api/questions",n={Authorization:"Bearer ".concat(this.getToken())};fetch(e,{headers:n}).then(function(t){return t.ok?t.json():[]}).then(function(e){t.questions=e})}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(d["c"]);K=Object(u["a"])([Object(d["a"])({components:{QuestionPanel:H}})],K);var X=K,Y=X,Z=(n("1e7a"),n("891e")),tt=Object(p["a"])(Y,F,B,!1,null,"f86a42aa",null),et=tt.exports;h()(tt,{VPagination:Z["a"]});var nt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.user="名無しのヨッシー",t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"mounted",value:function(){var t=JSON.parse(atob(this.getToken().split(".")[1]));this.user=t.name}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"logout",value:function(){localStorage.removeItem("token")}}]),e}(d["c"]);nt=Object(u["a"])([Object(d["a"])({components:{Questions:et}})],nt);var at=nt,ot=at,rt=(n("ce1a"),Object(p["a"])(ot,L,N,!1,null,"7aca5fe9",null)),it=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("QuestionPanelDetail",{attrs:{title:t.title,body:t.body,questionedTime:t.questionedTime}}),n("Answers"),n("AnswerForm")],1)},ct=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-panel-detail"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1010",color:"white"}},[n("v-card-title",[t._v("\n      "+t._s(t.question.title)+"\n    ")]),n("v-btn",{staticClass:"tag",attrs:{color:"blue-grey lighten-4","x-small":""}},[t._v("\n      tag (仮)\n    ")]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[t._v(t._s(t.question.body))]),n("v-card-text",[t._v("質問日時: "+t._s(t.question.date))]),n("v-card-text",[t._v("url: "+t._s(t.question.url))]),n("v-card-text",[t._v("ステータス: "+t._s(t.question.state))]),n("v-card-text",[t._v("回答状況: "+t._s(t.question.completed))])],1)],1)},ut=[],dt=(n("c5f6"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.question={},t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"created",value:function(){var t=this;this.questionId=Number(this.$route.query["questionId"]);var e="api/question/"+String(this.questionId),n={Authorization:"Bearer ".concat(this.getToken())};fetch(e,{headers:n}).then(function(t){return t.ok?t.json():[]}).then(function(e){t.question=e})}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(d["c"]));dt=Object(u["a"])([d["a"]],dt);var vt=dt,mt=vt,ft=(n("514f"),Object(p["a"])(mt,lt,ut,!1,null,"5fd52c7b",null)),pt=ft.exports;h()(ft,{VBtn:y["a"],VCard:z["a"],VCardText:G["b"],VCardTitle:G["c"],VDivider:k["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answers"},[n("AnswerPanelDetail",{attrs:{body:"それは自明では?",answeredTime:"2019/05.26 11:11:21"}}),n("AnswerPanelDetail",{attrs:{body:"自明でしょ",answeredTime:"2019/05.26 11:11:21"}}),n("AnswerPanelDetail",{attrs:{body:"流石に自明すぎわロタ",answeredTime:"2019/05.26 11:11:21"}})],1)},ht=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-panel-detail"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1010",color:"white"}},[n("v-card-title",[t._v("\n      回答\n    ")]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[t._v(t._s(t.body))]),n("v-card-text",[t._v("回答日時: "+t._s(t.questionedTime))])],1)],1)},Ot=[],yt=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);Object(u["a"])([Object(d["b"])()],yt.prototype,"body",void 0),Object(u["a"])([Object(d["b"])()],yt.prototype,"answeredTime",void 0),yt=Object(u["a"])([d["a"]],yt);var _t=yt,jt=_t,kt=(n("179a"),Object(p["a"])(jt,gt,Ot,!1,null,"ce8fdb2e",null)),xt=kt.exports;h()(kt,{VCard:z["a"],VCardText:G["b"],VCardTitle:G["c"],VDivider:k["a"]});var wt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.numOfAnswers=3,t}return Object(l["a"])(e,t),e}(d["c"]);wt=Object(u["a"])([Object(d["a"])({components:{AnswerPanelDetail:xt}})],wt);var Ct=wt,qt=Ct,Tt=(n("081e"),Object(p["a"])(qt,bt,ht,!1,null,"4b271015",null)),Vt=Tt.exports,Pt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title="",t.body="",t.questionedTime="",t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"mounted",value:function(){this.title=this.$route.query.title,this.body=this.$route.query.body,this.questionedTime=this.$route.query.questionedTime}}]),e}(d["c"]);Pt=Object(u["a"])([Object(d["a"])({components:{QuestionPanelDetail:pt,Answers:Vt}})],Pt);var It=Pt,St=It,$t=Object(p["a"])(St,st,ct,!1,null,null,null),Et=$t.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("p",[t._v("LOGIN")]),n("p",[t._v("LOGIN")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"button",name:"button"},on:{click:t.login}},[t._v("login")]),t._v("\n  "+t._s(t.name)+"\n  "+t._s(t.password)+"\n")])},Lt=[],Nt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.name="",t.password="",t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"login",value:function(){var t=this,e="/login",n="POST",a={"Content-Type":"application/json; charset=UTF-8"},o=JSON.stringify({name:this.name,password:this.password});fetch(e,{method:n,headers:a,body:o}).then(function(e){return e.ok?e.json():(alert("Faild to login. Please retry"),t.name="",t.password="",{token:""})}).then(function(e){var n=e.token;n.length>0&&(localStorage.setItem("token",n),t.$router.push("/"))})}}]),e}(d["c"]);Nt=Object(u["a"])([Object(d["a"])({components:{}})],Nt);var Dt=Nt,Ft=Dt,Bt=Object(p["a"])(Ft,At,Lt,!1,null,"20210e7a",null),Qt=Bt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("p",[t._v("SignUp")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"button",name:"button"},on:{click:t.signup}},[t._v("signup")]),t._v("\n  "+t._s(t.name)+"\n  "+t._s(t.password)+"\n")])},Mt=[],Rt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.name="",t.password="",t}return Object(l["a"])(e,t),Object(D["a"])(e,[{key:"signup",value:function(){var t=this,e="/signup",n="POST",a={"Content-Type":"application/json; charset=UTF-8"},o=JSON.stringify({name:this.name,password:this.password});fetch(e,{method:n,headers:a,body:o}).then(function(e){400===e.status?alert("Name or Password are empty. Please retry"):409===e.status?(alert("Name already exists. Please retry"),t.name="",t.password=""):201===e.status&&t.$router.push("/login")})}}]),e}(d["c"]);Rt=Object(u["a"])([Object(d["a"])({components:{}})],Rt);var Ut=Rt,zt=Ut,Gt=Object(p["a"])(zt,Jt,Mt,!1,null,"ab175058",null),Wt=Gt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-form"},[n("v-card",{attrs:{flat:""}},[n("v-snackbar",{attrs:{absolute:"",top:"",right:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("span",[t._v("Registration successful!")]),n("v-icon",{attrs:{dark:""}},[t._v("mdi-checkbox-marked-circle")])],1),n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-text-field",{attrs:{rules:t.rules.title,color:"blue darken-2",label:"タイトル",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-textarea",{attrs:{rules:t.rules.body,color:"teal",required:""},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",[t._v("\n                  本文\n                ")])]},proxy:!0}]),model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.states,color:"pink",label:"ステータス(任意)"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.rules.url,color:"pink",label:"URL(任意)"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-checkbox",{attrs:{color:"green"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{on:{click:function(t){t.stopPropagation()}}},[t._v("\n                  Do you accept the\n                  "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.terms=!0}}},[t._v("terms")]),t._v("\n                  and\n                  "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.conditions=!0}}},[t._v("conditions?")])])]},proxy:!0}]),model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}})],1)],1)],1),n("v-card-actions",[n("div",{staticClass:"flex-grow-1"}),n("v-btn",{attrs:{disabled:!t.formIsValid,color:"primary",type:"submit","x-large":""}},[t._v("送信")])],1)],1),n("v-dialog",{attrs:{width:"70%"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[n("v-card",[n("v-card-title",{staticClass:"title"},[t._v("Terms")]),t._l(5,function(e){return n("v-card-text",{key:e},[t._v("\n          "+t._s(t.content)+"\n        ")])}),n("v-card-actions",[n("div",{staticClass:"flex-grow-1"}),n("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.terms=!1}}},[t._v("Ok")])],1)],2)],1),n("v-dialog",{attrs:{width:"70%"},model:{value:t.conditions,callback:function(e){t.conditions=e},expression:"conditions"}},[n("v-card",[n("v-card-title",{staticClass:"title"},[t._v("Conditions")]),t._l(5,function(e){return n("v-card-text",{key:e},[t._v("\n          "+t._s(t.content)+"\n        ")])}),n("v-card-actions",[n("div",{staticClass:"flex-grow-1"}),n("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.conditions=!1}}},[t._v("Ok")])],1)],2)],1)],1)],1)},Kt=[],Xt={data(){const t=Object.freeze({title:"",body:"",state:"",url:"",terms:!1});return{form:Object.assign({},t),rules:{title:[t=>(t||"").length>0||"この項目は必須です"],body:[t=>(t||"").length>0||"この項目は必須です"]},states:["CE","MLE","TLE","RE","OLE","IE","WA","AC","WJ","WR"],conditions:!1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",snackbar:!1,terms:!1,defaultForm:t}},computed:{formIsValid(){return this.form.title&&this.form.body&&this.form.terms}},methods:{resetForm(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},getToken(){return localStorage.getItem("token")},submit(){const t="api/questions",e="POST",n={Authorization:`Bearer ${this.getToken()}`,"Content-Type":"application/json; charset=UTF-8"},a=JSON.stringify({title:this.form.title,body:this.form.body,date:"1111/11/11-12:12:12",state:this.form.state,url:this.form.url});console.log(a),fetch(t,{method:e,headers:n,body:a}).then(t=>{if(t.ok)return t.json()}).then(t=>{"undefined"!==typeof t&&(this.todos.push(t),this.newTodo="")}),console.log(this.form),this.snackbar=!0,this.resetForm()}}},Yt=Xt,Zt=n("ac7c"),te=n("62ad"),ee=n("169a"),ne=n("4bd4"),ae=n("0fd9"),oe=n("b974"),re=n("2db4"),ie=n("8654"),se=n("a844"),ce=Object(p["a"])(Yt,Ht,Kt,!1,null,"4375cc3b",null),le=ce.exports;h()(ce,{VBtn:y["a"],VCard:z["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCheckbox:Zt["a"],VCol:te["a"],VContainer:_["a"],VDialog:ee["a"],VForm:ne["a"],VIcon:w["a"],VRow:ae["a"],VSelect:oe["a"],VSnackbar:re["a"],VTextField:ie["a"],VTextarea:se["a"]});var ue=n("75cf");a["a"].use(A["a"]);var de=new A["a"]({routes:[{path:"/",name:"home",component:it},{path:"/question",name:"question",component:Et},{path:"/login",name:"login",component:Qt},{path:"/signup",name:"signup",component:Wt},{path:"/questionform",name:"questionform",component:le},{path:"/todos",name:"todos",component:ue["default"]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),ve=n("f309");a["a"].use(ve["a"]);var me=new ve["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:de,vuetify:me,render:function(t){return t(E)}}).$mount("#app")},ce1a:function(t,e,n){"use strict";var a=n("d49d"),o=n.n(a);o.a},d49d:function(t,e,n){}});
//# sourceMappingURL=app.473de937.js.map