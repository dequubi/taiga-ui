(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62792],{62792:(t,e,i)=>{i.r(e),i.d(e,{default:()=>A});var n=i(35548),o=i(12569),u=i(68018),s=i(4594),a=i(66094),l=i(26856),c=i(61887),d=i(29722),r=i(2004),g=i(70705),p=i(7911),m=i(65259),h=i(62077),f=i(23199),b=i(55802),x=i(10188),T=i(85454),M=i(45771);function Z(t,e){if(1&t&&n._UZ(0,"tui-data-list-wrapper",8),2&t){const t=n.oxw();n.Q6J("items",t.items)}}function v(t,e){1&t&&(n.TgZ(0,"div",9)(1,"p"),n._uU(2,"This one is a template dialog"),n.qZA()())}let w=(()=>{var t;class e{constructor(){this.dialogs=(0,n.f3M)(o.TuiDialogService),this.context=(0,n.f3M)(u.yf),this.value=null,this.name="",this.items=[10,50,100]}get hasValue(){return null!==this.value}get data(){return this.context.data}submit(){null!==this.value&&this.context.completeWith(this.value)}showDialog(t){this.dialogs.open(t,{dismissible:!0}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:19,vars:12,consts:[[1,"text"],["tuiAutoFocus","","tuiTextfieldSize","m",3,"ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"tui-space_top-3","tui-space_bottom-5",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiSlider","","type","range",1,"tui-space_bottom-5",3,"max","ngModel"],["size","m","tuiButton","","type","button",3,"disabled","click"],["size","m","tuiButton","","type","button",3,"click"],["template",""],[3,"items"],[1,"dialog"]],template:function(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"p",0),n._uU(1," Your balance: "),n.TgZ(2,"span"),n._uU(3),n.ALo(4,"async"),n.ALo(5,"tuiAmount"),n.qZA()(),n.TgZ(6,"tui-input",1),n.NdJ("ngModelChange",(function(t){return e.name=t})),n._uU(7," Type a name\n"),n.qZA(),n.TgZ(8,"tui-select",2),n.NdJ("ngModelChange",(function(t){return e.value=t})),n._uU(9," Select a sum "),n.YNc(10,Z,1,1,"tui-data-list-wrapper",3),n.qZA(),n._UZ(11,"input",4),n.TgZ(12,"button",5),n.NdJ("click",(function(){return e.submit()})),n._uU(13," Submit\n"),n.qZA(),n.TgZ(14,"p")(15,"button",6),n.NdJ("click",(function(){n.CHM(t);const i=n.MAs(18);return n.KtG(e.showDialog(i))})),n._uU(16," Show one more dialog "),n.qZA()(),n.YNc(17,v,3,0,"ng-template",null,7,n.W1O)}2&t&&(n.xp6(3),n.Oqu(n.lcZ(4,7,n.xi3(5,9,e.data,"RUB"))),n.xp6(3),n.Q6J("ngModel",e.name),n.xp6(2),n.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",e.value),n.xp6(3),n.Q6J("max",10)("ngModel",5),n.xp6(1),n.Q6J("disabled",!e.hasValue))},dependencies:[r.QfL,g.K,p.w,l.TuiAmountPipe,s.Ov,c.TuiAutoFocus,o.TuiTextfieldOptionsDirective,a.u5,a.Fj,a.eT,a.JJ,a.On,r.Jyo,m.u,h.O,f.g,b.e,r.cnw,x.x,T.s,d.TuiSlider,M.i,o.TuiButton],styles:["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);margin:0 0 1.5rem}.text[_ngcontent-%COMP%]{margin:0 0 .75rem}"],changeDetection:0}),e})();const A=(()=>{var t;class e{constructor(){this.dialogs=(0,n.f3M)(o.TuiDialogService),this.injector=(0,n.f3M)(n.gxx),this.dialog=this.dialogs.open(new u.Al(w,this.injector),{data:237,dismissible:!0,label:"Heading"})}showDialog(){this.dialog.subscribe({next:t=>{console.info(`Dialog emitted data = ${t}`)},complete:()=>{console.info("Dialog closed")}})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent2",features:[n.jDz],decls:2,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"button",0),n.NdJ("click",(function(){return e.showDialog()})),n._uU(1," Show\n"),n.qZA())},dependencies:[o.TuiButton],encapsulation:2,changeDetection:0}),e})()}}]);