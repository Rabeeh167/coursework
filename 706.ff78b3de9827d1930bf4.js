"use strict";(self.webpackChunkcoursework=self.webpackChunkcoursework||[]).push([[706],{9706:(f,i,c)=>{c.r(i),c.d(i,{ClickMeButtonsModule:()=>b});var r=c(8583),l=c(5519),e=c(3018),a=c(6215);let d=(()=>{class t{constructor(){this.categoriesSubject=new a.X([]),this.buttonList$=this.categoriesSubject.asObservable(),this.categories=[],this.buttonListArray=[],this.buttonListArray.length=5,this.getNextItems(),this.categoriesSubject.next(this.buttonListArray)}loadMore(){this.getNextItems(),this.categoriesSubject.next(this.buttonListArray)}getNextItems(){this.buttonListArray.length=this.buttonListArray.length+5}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(){this.scrolledToBottom=new e.vpe,this.emitted=!1}onScroll(){window.innerHeight+window.scrollY>=document.body.scrollHeight&&!this.emitted?(this.emitted=!0,this.scrolledToBottom.emit()):window.innerHeight+window.scrollY<document.body.scrollHeight&&(this.emitted=!1)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","scrollListener",""]],hostBindings:function(o,s){1&o&&e.NdJ("scroll",function(){return s.onScroll()},!1,e.Jf7)},outputs:{scrolledToBottom:"scrolledToBottom"}}),t})();function h(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){const B=e.CHM(o).index;return e.oxw().onBtnClick(B+1)}),e._uU(1," Click Me! "),e.qZA()}}const p=[{path:"",component:(()=>{class t{constructor(o){this.scrollListenerService=o,this.buttonList$=o.buttonList$}onScrolledToBottom(){this.scrollListenerService.loadMore()}onBtnClick(o){switch(o){case 1:alert(`${o}st button clicked`);break;case 2:alert(`${o}nd button clicked`);break;case 3:alert(`${o}rd button clicked`);break;default:alert(`${o}th button clicked`)}}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-click-me-buttons"]],decls:3,vars:3,consts:[["scrollListener","",3,"scrolledToBottom"],["class","click-me-btn","type","button",3,"click",4,"ngFor","ngForOf"],["type","button",1,"click-me-btn",3,"click"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e.NdJ("scrolledToBottom",function(){return s.onScrolledToBottom()}),e.YNc(1,h,2,0,"button",1),e.ALo(2,"async"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.buttonList$)))},directives:[m,r.sg],pipes:[r.Ov],styles:[".click-me-btn[_ngcontent-%COMP%]{display:block;margin:25px;cursor:pointer;height:200px;width:200px}"]}),t})(),pathMatch:"full"}];let k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(p)],l.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,k]]}),t})()}}]);