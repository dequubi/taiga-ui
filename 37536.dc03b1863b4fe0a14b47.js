(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[37536],{37536:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiRangeModule:()=>F});var o=n(12057),i=n(23738),a=n(33982),s=n(73961),r=n(73349),l=n(62689),c=n(74788),u=n(43560),g=n(93525),p=n(33772),m=n(48740),d=n(87231);let h=(()=>{class e{constructor(){this.control=new i.NI([4,6])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","step"]],template:function(e,t){1&e&&c._UZ(0,"tui-range",0),2&e&&c.Q6J("formControl",t.control)("max",10)("step",1)},directives:[m.U,d.H,i.JJ,i.oH],encapsulation:2,changeDetection:0}),e})();var _=n(70329);let Z=(()=>{class e{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new i.NI([40,60])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-island",0),c.TgZ(1,"h3",1),c._uU(2,"S-size"),c.qZA(),c.TgZ(3,"tui-range",2),c.NdJ("ngModelChange",(function(e){return t.smallRangeValue=e})),c.qZA(),c.TgZ(4,"p",3),c._uU(5," Control value: "),c.TgZ(6,"output",4),c.TgZ(7,"code"),c._uU(8),c.ALo(9,"json"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"tui-island",0),c.TgZ(11,"h3",1),c._uU(12,"M-size"),c.qZA(),c._UZ(13,"tui-range",5),c.TgZ(14,"p",3),c._uU(15," Control value: "),c.TgZ(16,"output",6),c.TgZ(17,"code"),c._uU(18),c.ALo(19,"json"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Q6J("max",100)("ngModel",t.smallRangeValue),c.xp6(5),c.Oqu(c.lcZ(9,6,t.smallRangeValue)),c.xp6(5),c.Q6J("formControl",t.bigRangeControl)("max",100),c.xp6(5),c.Oqu(c.lcZ(19,8,t.bigRangeControl.value)))},directives:[_.h,m.U,d.H,i.JJ,i.On,i.oH],pipes:[o.Ts],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 47.9625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),e})();var f=n(79121),P=n(34880);function x(e,t){if(1&e&&(c.ynx(0),c._uU(1),c.ALo(2,"i18nPlural"),c.BQk()),2&e){const e=c.oxw().$implicit,t=c.oxw();c.xp6(1),c.hij(" ",c.xi3(2,1,e,t.pluralMap)," ")}}function C(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,x,3,4,"ng-container",6),c.qZA()),2&e){const e=t.$implicit;c.oxw();const n=c.MAs(4);c.xp6(1),c.Q6J("ngIf",750!==e)("ngIfElse",n)}}function y(e,t){1&e&&(c._UZ(0,"tui-svg",7),c.TgZ(1,"div"),c._uU(2,"3/4"),c.qZA())}let M=(()=>{class e{constructor(){this.min=0,this.max=1e3,this.step=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map((e=>this.min+this.step*e)),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","size","m",1,"range",3,"min","max","step","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-range",0),c.NdJ("ngModelChange",(function(e){return t.value=e})),c.qZA(),c.TgZ(1,"div",1),c.YNc(2,C,2,2,"div",2),c.YNc(3,y,3,0,"ng-template",null,3,c.W1O),c.qZA(),c.TgZ(5,"p",4),c._uU(6," Control value: "),c.TgZ(7,"output",5),c.TgZ(8,"code"),c._uU(9),c.ALo(10,"json"),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("min",t.min)("max",t.max)("step",t.step)("segments",t.segments)("ngModel",t.value),c.xp6(2),c.Q6J("ngForOf",t.labels),c.xp6(7),c.Oqu(c.lcZ(10,7,t.value)))},directives:[m.U,d.H,i.JJ,i.On,o.sg,o.O5,P.P],pipes:[o.Ts,o.Gx],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();function T(e,t){if(1&e&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.xp6(1),c.Oqu(e)}}let b=(()=>{class e{constructor(){this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.stepPercentage=100/(2*this.segments),this.value=[0,1e5],this.keySteps=[[0,0],[25,1e4],[50,1e5],[75,5e5],[100,1e6]]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-range-example-4"]],decls:9,vars:8,consts:[["id","range-with-key-steps","size","m",1,"range",3,"step","keySteps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-range",0),c.NdJ("ngModelChange",(function(e){return t.value=e})),c.qZA(),c.TgZ(1,"div",1),c.YNc(2,T,2,1,"span",2),c.qZA(),c.TgZ(3,"p",3),c._uU(4," Control value: "),c.TgZ(5,"output",4),c.TgZ(6,"code"),c._uU(7),c.ALo(8,"json"),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("step",t.stepPercentage)("keySteps",t.keySteps)("segments",t.segments)("ngModel",t.value),c.xp6(2),c.Q6J("ngForOf",t.ticksLabels),c.xp6(5),c.Oqu(c.lcZ(8,6,t.value)))},directives:[m.U,d.H,i.JJ,i.On,o.sg],pipes:[o.Ts],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();var U=n(10977),A=n(51192),O=n(60404),q=n(83074);function k(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Component allows to choose a part of a range"),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-range-example-1"),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-range-example-2"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c.TgZ(7,"tui-notification",5),c.TgZ(8,"p",6),c._uU(9," Use mixin "),c.TgZ(10,"code"),c._uU(11,"tui-slider-ticks-labels"),c.qZA(),c._uU(12," to arrange ticks' labels (it places them strictly below ticks). "),c.qZA(),c.TgZ(13,"p"),c._uU(14," The mixin accepts only a single argument – size of the slider ( "),c.TgZ(15,"code"),c._uU(16,"m"),c.qZA(),c._uU(17," or "),c.TgZ(18,"code"),c._uU(19,"s"),c.qZA(),c._uU(20," ). "),c.qZA(),c.qZA(),c._UZ(21,"tui-range-example-3"),c.qZA(),c.TgZ(22,"tui-doc-example",7),c._UZ(23,"tui-range-example-4"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1),c.xp6(2),c.Q6J("content",e.example2)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example3),c.xp6(16),c.Q6J("content",e.example4)}}function v(e,t){if(1&e&&c._UZ(0,"tui-range",16),2&e){const e=c.oxw(2);c.Q6J("formControl",e.control)("min",e.min)("max",e.max)("step",e.step)("segments",e.segments)("keySteps",e.keySteps)("size",e.size)}}function w(e,t){1&e&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function J(e,t){1&e&&(c._uU(0," The lowest value in the range of permitted values. "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"0"),c.qZA(),c._uU(5," . "),c.qZA())}function V(e,t){1&e&&(c._uU(0," The greatest value in the range of permitted values. "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"100"),c.qZA(),c._uU(5," . "),c.qZA())}function N(e,t){1&e&&(c._uU(0," A number that specifies the granularity that the value must adhere. "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"1"),c.qZA(),c._uU(5," . "),c.qZA())}function z(e,t){1&e&&(c._uU(0," Size "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"m"),c.qZA(),c._uU(5," . "),c.qZA())}function S(e,t){1&e&&(c._uU(0," A number of visual segments. "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"1"),c.qZA(),c._uU(5," (no ticks). "),c.qZA())}function Q(e,t){1&e&&(c._uU(0," Anchor points of non-uniform format between value and position. "),c.TgZ(1,"p"),c._uU(2," The default is "),c.TgZ(3,"code"),c._uU(4,"null"),c.qZA(),c._uU(5," . "),c.qZA())}function H(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo",8),c.YNc(1,v,1,7,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,w,4,0,"ng-template",9),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().disabled=t})),c.YNc(4,J,6,0,"ng-template",10),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().min=t})),c.YNc(5,V,6,0,"ng-template",11),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().max=t})),c.YNc(6,N,6,0,"ng-template",12),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().step=t})),c.YNc(7,z,6,0,"ng-template",13),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().size=t})),c.YNc(8,S,6,0,"ng-template",14),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().segments=t})),c.YNc(9,Q,6,0,"ng-template",15),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().keySteps=t})),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("control",e.control),c.xp6(3),c.Q6J("documentationPropertyValue",e.disabled),c.xp6(1),c.Q6J("documentationPropertyValue",e.min),c.xp6(1),c.Q6J("documentationPropertyValue",e.max),c.xp6(1),c.Q6J("documentationPropertyValue",e.step),c.xp6(1),c.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),c.xp6(1),c.Q6J("documentationPropertyValue",e.segments),c.xp6(1),c.Q6J("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps)}}function L(e,t){if(1&e&&(c.TgZ(0,"ol",17),c.TgZ(1,"li"),c._uU(2," Import an Angular module for forms and "),c.TgZ(3,"code"),c._uU(4,"TuiRangeModule"),c.qZA(),c._uU(5," in the same module where you want to use our component: "),c._UZ(6,"tui-doc-code",18),c.qZA(),c.TgZ(7,"li"),c.TgZ(8,"p"),c._uU(9," Declare a form ( "),c.TgZ(10,"code"),c._uU(11,"FormGroup"),c.qZA(),c._uU(12," ) or a control ( "),c.TgZ(13,"code"),c._uU(14,"FormControl"),c.qZA(),c._uU(15," ) in your component: "),c.qZA(),c._UZ(16,"tui-doc-code",19),c.qZA(),c.TgZ(17,"li"),c.TgZ(18,"p"),c._uU(19,"Add to the template:"),c.qZA(),c._UZ(20,"tui-doc-code",20),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(6),c.Q6J("code",e.exampleModule),c.xp6(10),c.Q6J("code",e.exampleForm),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let Y=(()=>{class e{constructor(){this.exampleModule=n.e(92677).then(n.t.bind(n,92677,17)),this.exampleHtml=n.e(38951).then(n.t.bind(n,38951,17)),this.exampleForm=n.e(92136).then(n.t.bind(n,92136,17)),this.example1={HTML:n.e(45417).then(n.t.bind(n,45417,17)),TypeScript:n.e(76697).then(n.t.bind(n,76697,17))},this.example2={HTML:n.e(25090).then(n.t.bind(n,25090,17)),TypeScript:n.e(34100).then(n.t.bind(n,34100,17)),LESS:n.e(96585).then(n.t.bind(n,96585,17))},this.example3={HTML:n.e(82509).then(n.t.bind(n,82509,17)),LESS:n.e(91770).then(n.t.bind(n,91770,17)),TypeScript:n.e(81679).then(n.t.bind(n,81679,17))},this.example4={HTML:n.e(85407).then(n.t.bind(n,85407,17)),TypeScript:n.e(7182).then(n.t.bind(n,7182,17)),LESS:n.e(67607).then(n.t.bind(n,67607,17))},this.control=new i.NI([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.step=1,this.segments=1,this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-range"]],decls:4,vars:0,consts:[["header","Range","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","sizes","heading","Sizes",3,"content","fullsize"],["id","segments","heading","Visual segments + labels for ticks",3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],["id","key-steps","heading","KeySteps",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","step","segments","keySteps","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,k,24,5,"ng-template",1),c.YNc(2,H,10,10,"ng-template",1),c.YNc(3,L,21,3,"ng-template",1),c.qZA())},directives:[u.q,g.n,p.f,h,Z,f.L,M,b,U.F,A.z,O.B,m.U,d.H,i.JJ,i.oH,q.c],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[l.TuiRadioListModule,l.TuiRangeModule,o.ez,i.u5,i.UX,r.TuiLinkModule,s.fV,l.TuiIslandModule,r.TuiNotificationModule,r.TuiSvgModule,a.Bz.forChild((0,s.Ve)(Y))]]}),e})()}}]);