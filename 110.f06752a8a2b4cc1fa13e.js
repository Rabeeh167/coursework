"use strict";(self.webpackChunkcoursework=self.webpackChunkcoursework||[]).push([[110],{3110:(O,c,o)=>{o.r(c),o.d(c,{CountDownTimerModule:()=>T});var m=o(8583),u=o(5519),t=o(3018);let p=(()=>{class i{constructor(){this.timerLimit=10,this.timerRunning=null,this.remainingSeconds=0,this.startOrPauseClickEvent=!1,this.resetClickEvent=!1}ngOnInit(){this.remainingSeconds=0}ngOnChanges(e){e.resetClickEvent&&(this.remainingSeconds=this.timerLimit,this.timerRunning=!1,clearInterval(this.timer)),e.startOrPauseClickEvent&&this.onStartOrPauseEvent(),e.timerLimit&&(this.remainingSeconds=this.timerLimit)}startTimer(){this.timer=setInterval(()=>{this.remainingSeconds=this.remainingSeconds>0?this.remainingSeconds-1:this.remainingSeconds,this.remainingSeconds<1&&clearInterval(this.timer)},1e3)}pauseTimer(){clearInterval(this.timer),this.timerRunning=!1}onStartOrPauseEvent(){this.timerRunning||void 0===this.timerLimit?this.pauseTimer():(this.startTimer(),this.timerRunning=!0)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-timer-display"]],inputs:{timerLimit:"timerLimit",startOrPauseClickEvent:"startOrPauseClickEvent",resetClickEvent:"resetClickEvent"},features:[t.TTD],decls:6,vars:1,consts:[[1,"display-container"],[1,"count-down-timer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"p"),t._uU(3,"Count Down Timer"),t.qZA(),t.TgZ(4,"h1"),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(n.remainingSeconds))},styles:[".display-container[_ngcontent-%COMP%]{height:35vh;width:30vw;border:2px solid black;display:flex;justify-content:center;align-items:center;margin:10px}.count-down-timer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"]}),i})();var s=o(665);let C=(()=>{class i{constructor(){this.model={timerLimit:0},this.startOrPauseClickEvent=!1,this.resetClickEvent=!1,this.onStartOrPauseClick=new t.vpe,this.onResetClick=new t.vpe,this.timerLimit=new t.vpe}onStartOrPause(){this.timerLimit.emit(this.model.timerLimit),this.startOrPauseClickEvent=!this.startOrPauseClickEvent,this.onStartOrPauseClick.emit(this.startOrPauseClickEvent)}onReset(){this.startOrPauseClickEvent=!1,this.onStartOrPauseClick.emit(this.startOrPauseClickEvent),this.timerLimit.emit(this.model.timerLimit),this.resetClickEvent=!this.resetClickEvent,this.onResetClick.emit(this.resetClickEvent)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-timer-input"]],outputs:{onStartOrPauseClick:"onStartOrPauseClick",onResetClick:"onResetClick",timerLimit:"timerLimit"},decls:11,vars:2,consts:[[1,"timer-value"],["timerValueForm","ngForm"],[1,"form-group"],["for","timerLimit",2,"margin","5px"],["type","number","id","timerLimit","name","timerLimit",1,"form-control",2,"margin","5px",3,"ngModel","ngModelChange"],["type","button",1,"action-btn",3,"disabled","click"],["type","button",1,"action-btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0,1),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"Enter Timer Limit:"),t.qZA(),t.TgZ(5,"input",4),t.NdJ("ngModelChange",function(a){return n.model.timerLimit=a}),t.qZA(),t.qZA(),t.TgZ(6,"div"),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.onStartOrPause()}),t._uU(8,"Start/Pause"),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return n.onReset()}),t._uU(10,"Reset"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngModel",n.model.timerLimit),t.xp6(2),t.Q6J("disabled",0===n.model.timerLimit))},directives:[s._Y,s.JL,s.F,s.wV,s.Fj,s.JJ,s.On],styles:[".timer-value[_ngcontent-%COMP%]{height:35vh;width:50vw;border:2px solid black;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center}.action-btn[_ngcontent-%COMP%]{cursor:pointer;margin:5px}"]}),i})();function d(i,r){if(1&i&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",e.event," ",t.xi3(2,2,e.dateTime,"medium")," ")}}function g(i,r){if(1&i&&(t.TgZ(0,"p",3),t.YNc(1,d,3,5,"ng-container",4),t.qZA()),2&i){const e=r.index,n=t.oxw();t.xp6(1),t.Q6J("ngIf",!(0===e&&!n.resetClicked))}}let h=(()=>{class i{constructor(){this.startOrPauseClickEvent=!1,this.resetClickEvent=!1,this.logsArray=[],this.resetClicked=!1,this.dateTime=new Date}ngOnInit(){}ngOnChanges(e){e.resetClickEvent&&(this.logsArray.length&&(this.resetClicked=!0),this.logsArray.length=0),e.startOrPauseClickEvent&&this.logsArray.push({event:!0===e.startOrPauseClickEvent.currentValue?"Started at ":"Paused at ",dateTime:new Date})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-timer-logs"]],inputs:{startOrPauseClickEvent:"startOrPauseClickEvent",resetClickEvent:"resetClickEvent"},features:[t.TTD],decls:3,vars:1,consts:[[1,"display-container"],[1,"log-item"],["style","margin: 2px;",4,"ngFor","ngForOf"],[2,"margin","2px"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,g,2,1,"p",2),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.logsArray))},directives:[m.sg,m.O5],pipes:[m.uU],styles:[".display-container[_ngcontent-%COMP%]{height:35vh;width:30vw;display:flex;border:2px solid black;justify-content:center;align-items:center;margin:10px;overflow-y:scroll}.log-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"]}),i})(),f=(()=>{class i{constructor(){this.numberOfPauses=0,this.numberOfStarts=0,this.startOrPauseClickEvent=!1,this.resetClickEvent=!1,this.logsArray=[],this.resetClicked=!1}ngOnChanges(e){e.resetClickEvent&&(this.logsArray.length&&(this.resetClicked=!0),this.logsArray.length=0,this.calculateNumberOfStartsAndPauses()),e.startOrPauseClickEvent&&(this.logsArray.push({event:!0===e.startOrPauseClickEvent.currentValue?"Started at ":"Paused at ",dateTime:new Date}),this.calculateNumberOfStartsAndPauses())}calculateNumberOfStartsAndPauses(){this.numberOfStarts=this.logsArray.filter(e=>"Started at "===e.event).length,this.numberOfPauses=this.resetClicked?this.logsArray.filter(e=>"Paused at "===e.event).length:this.logsArray.filter(e=>"Paused at "===e.event).length?this.logsArray.filter(e=>"Paused at "===e.event).length-1:0}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-timer-stats"]],inputs:{startOrPauseClickEvent:"startOrPauseClickEvent",resetClickEvent:"resetClickEvent"},features:[t.TTD],decls:12,vars:2,consts:[[1,"display-container"],[1,"timer-stats"],[2,"margin-left","20px"],[2,"margin","10px"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div"),t.TgZ(3,"h2",2),t._uU(4),t.qZA(),t.TgZ(5,"p",3),t._uU(6,"Started"),t.qZA(),t.qZA(),t.TgZ(7,"div"),t.TgZ(8,"h2",2),t._uU(9),t.qZA(),t.TgZ(10,"p",3),t._uU(11,"Paused"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Oqu(n.numberOfStarts),t.xp6(5),t.Oqu(n.numberOfPauses))},styles:[".display-container[_ngcontent-%COMP%]{height:35vh;width:50vw;display:flex;border:2px solid black;justify-content:center;align-items:center;margin:10px}.timer-stats[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),i})();const v=[{path:"",component:(()=>{class i{constructor(e){this.cd=e,this.startOrPauseClickEvent=!1,this.resetClickEvent=!1}ngOnInit(){}onStartOrPauseClick(e){this.startOrPauseClickEvent=e}onResetClick(e){this.resetClickEvent=e}onTimerLimit(e){this.timerLimit=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-count-down-timer"]],decls:7,vars:7,consts:[[1,"timer-container"],[1,"flex-container"],[3,"resetClickEvent","startOrPauseClickEvent","timerLimit"],[3,"onStartOrPauseClick","onResetClick","timerLimit"],[3,"resetClickEvent","startOrPauseClickEvent"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-timer-display",2),t.TgZ(3,"app-timer-input",3),t.NdJ("onStartOrPauseClick",function(a){return n.onStartOrPauseClick(a)})("onResetClick",function(a){return n.onResetClick(a)})("timerLimit",function(a){return n.onTimerLimit(a)}),t.qZA(),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"app-timer-logs",4),t._UZ(6,"app-timer-stats",4),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("resetClickEvent",n.resetClickEvent)("startOrPauseClickEvent",n.startOrPauseClickEvent)("timerLimit",n.timerLimit),t.xp6(3),t.Q6J("resetClickEvent",n.resetClickEvent)("startOrPauseClickEvent",n.startOrPauseClickEvent),t.xp6(1),t.Q6J("resetClickEvent",n.resetClickEvent)("startOrPauseClickEvent",n.startOrPauseClickEvent))},directives:[p,C,h,f],styles:[".flex-container[_ngcontent-%COMP%]{display:flex}.timer-container[_ngcontent-%COMP%]{border:2px solid black;height:90vh}"]}),i})(),pathMatch:"full"}];let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),i})(),T=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,s.u5,k]]}),i})()}}]);