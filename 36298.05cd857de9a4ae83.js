(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36298,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323,1001],{10882:(t,e,n)=>{n.d(e,{Fb:()=>u,UR:()=>i,bM:()=>a});var o=n(81576);const i={currency:null,currencyAlign:"right",sign:"negative-only"},a=(0,o.tuiCreateToken)(i);function u(t){return(0,o.tuiProvideOptions)(a,t,i)}},61386:(t,e,n)=>{n.d(e,{E:()=>d});var o=n(20755),i=n(93517),a=n(81576),u=n(6642),r=n(92425),c=n(10882);let d=(()=>{var t;class e{constructor(){this.options=(0,o.f3M)(c.bM),this.format=(0,o.f3M)(u.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,r.U)((o=>{const r=(0,i.$v)(t,this.options.sign),c=(0,i.BP)(e),d=(0,u.tuiFormatNumber)(Math.abs(t),{...o,precision:Number.isNaN(o.precision)?2:o.precision}),s=c?.length>1||"right"===n?a.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${r}${d}${s}${c}`:`${r}${c}${s}${d}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=o.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()},85884:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiCarouselModule:()=>Y});var o=n(76733),i=n(42932),a=n(87253),u=n(81576),r=n(6642),c=n(42513),d=n(20755),s=n(16326),p=n(46934),l=n(70925),m=n(2313),g=n(62825),h=n(5824),x=n(69781),y=n(36877),f=n(73097),b=n(38404),T=n(65004),P=n(43894),C=n(17894),M=n(97967),Z=n(65933),V=n(8227),N=n(14434),_=n(31886),A=n(51865);function U(t,e){if(1&t&&(d.TgZ(0,"tui-notification",2),d._uU(1," Requires "),d.TgZ(2,"a",3),d._uU(3," IntersectionObserver "),d.qZA(),d._uU(4," support or a "),d.TgZ(5,"a",4),d._uU(6," polyfill "),d.qZA()(),d._uU(7," Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously. "),d.TgZ(8,"tui-doc-example",5)(9,"tui-carousel-example-1",6),d.NdJ("touchstart.passive.stop",(function(){return 0})),d.qZA()(),d.TgZ(10,"tui-doc-example",7)(11,"tui-carousel-example-2",6),d.NdJ("touchstart.passive.stop",(function(){return 0})),d.qZA()(),d.TgZ(12,"tui-doc-example",8)(13,"tui-carousel-example-3",6),d.NdJ("touchstart.passive.stop",(function(){return 0})),d.qZA()(),d.TgZ(14,"tui-doc-example",9),d._UZ(15,"tui-carousel-example-4"),d.qZA(),d.TgZ(16,"tui-doc-example",10),d._UZ(17,"tui-carousel-example-5"),d.qZA()),2&t){const t=d.oxw();d.xp6(8),d.Q6J("content",t.example1),d.xp6(2),d.Q6J("content",t.example2),d.xp6(2),d.Q6J("content",t.example3),d.xp6(2),d.Q6J("content",t.example4),d.xp6(2),d.Q6J("content",t.example5)}}function v(t,e){if(1&t&&(d.TgZ(0,"div",20),d._uU(1),d.TgZ(2,"button",21),d._uU(3," I'm focusable "),d.qZA()()),2&t){const t=d.oxw().$implicit;d.xp6(1),d.hij(" ",t," ")}}function w(t,e){1&t&&(d.ynx(0),d.YNc(1,v,4,1,"div",19),d.BQk())}function J(t,e){1&t&&d._uU(0," Whether or not slider can be dragged by clicking and holding ")}function q(t,e){1&t&&d._uU(0," Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation) ")}function Q(t,e){1&t&&d._uU(0," Number of slides shown at the same time ")}function E(t,e){1&t&&d._uU(0," Current index ")}function H(t,e){1&t&&d._uU(0," Custom color ")}function S(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-doc-demo")(1,"tui-carousel",11),d.NdJ("indexChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.index=e)}))("touchstart.passive.stop",(function(){return 0})),d.YNc(2,w,2,0,"ng-container",12),d.qZA()(),d.TgZ(3,"tui-doc-documentation"),d.YNc(4,J,1,0,"ng-template",13),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.draggable=e)})),d.YNc(5,q,1,0,"ng-template",14),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.duration=e)})),d.YNc(6,Q,1,0,"ng-template",15),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.itemsCount=e)})),d.YNc(7,E,1,0,"ng-template",16),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.index=e)})),d.qZA(),d.TgZ(8,"tui-doc-documentation",17),d.YNc(9,H,1,0,"ng-template",18),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.itemPadding=e)})),d.qZA()}if(2&t){const t=d.oxw();d.xp6(1),d.Udp("--tui-carousel-padding",t.itemPadding),d.Q6J("draggable",t.draggable)("duration",t.duration)("itemsCount",t.itemsCount)("index",t.index),d.xp6(1),d.Q6J("tuiRepeatTimesOf",9),d.xp6(2),d.Q6J("documentationPropertyValue",t.draggable),d.xp6(1),d.Q6J("documentationPropertyValues",t.durationVariants)("documentationPropertyValue",t.duration),d.xp6(1),d.Q6J("documentationPropertyValue",t.itemsCount),d.xp6(1),d.Q6J("documentationPropertyValue",t.index),d.xp6(2),d.Q6J("documentationPropertyValues",t.itemPaddingVariants)("documentationPropertyValue",t.itemPadding)}}function k(t,e){if(1&t&&(d.TgZ(0,"ol",22)(1,"li")(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiCarouselModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",23),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",24),d.qZA()()),2&t){const t=d.oxw();d.xp6(7),d.Q6J("code",t.exampleModule),d.xp6(4),d.Q6J("code",t.exampleHtml)}}let L=(()=>{var t;class e{constructor(){this.durationVariants=[0,3e3,1e4],this.itemPaddingVariants=[null,"0 10px","0"],this.draggable=!1,this.duration=this.durationVariants[0],this.itemPadding=this.itemPaddingVariants[0],this.index=0,this.itemsCount=1,this.exampleModule=n.e(16665).then(n.t.bind(n,16665,17)),this.exampleHtml=n.e(94880).then(n.t.bind(n,94880,17)),this.example1={TypeScript:n.e(70610).then(n.t.bind(n,70610,17)),HTML:n.e(90947).then(n.t.bind(n,90947,17))},this.example2={TypeScript:n.e(57929).then(n.t.bind(n,57929,17)),HTML:n.e(79783).then(n.t.bind(n,79783,17))},this.example3={TypeScript:n.e(66693).then(n.t.bind(n,66693,17)),HTML:n.e(36838).then(n.t.bind(n,36838,17))},this.example4={TypeScript:n.e(13453).then(n.t.bind(n,13453,17)),HTML:n.e(7705).then(n.t.bind(n,7705,17)),LESS:n.e(4159).then(n.t.bind(n,4159,17))},this.example5={TypeScript:n.e(36620).then(n.t.bind(n,36620,17)),HTML:n.e(98324).then(n.t.bind(n,98324,17)),LESS:n.e(62965).then(n.t.bind(n,62965,17))}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=d.Xpm({type:t,selectors:[["example-carousel"]],decls:4,vars:0,consts:[["header","Carousel","package","KIT","type","components"],["pageTab",""],["status","warning",1,"tui-space_bottom-4"],["href","https://caniuse.com/intersectionobserver","tuiLink",""],["href","https://github.com/w3c/IntersectionObserver/tree/main/polyfill","tuiLink",""],["id","single","heading","Single",3,"content"],[3,"touchstart.passive.stop"],["id","multi","heading","Multiple",3,"content"],["id","custom","heading","Custom",3,"content"],["id","dialog","heading","Carousel inside dialog",3,"content"],["id","alignment","heading","Vertical alignment",3,"content"],[1,"carousel",3,"draggable","duration","itemsCount","index","indexChange","touchstart.passive.stop"],[4,"tuiRepeatTimes","tuiRepeatTimesOf"],["documentationPropertyMode","input","documentationPropertyName","draggable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","duration","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","itemsCount","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","index","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.--tui-carousel-padding","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["class","plate",4,"tuiItem"],[1,"plate"],["size","s","tuiButton","","type","button",1,"button"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,U,18,5,"ng-template",1),d.YNc(2,S,10,14,"ng-template",1),d.YNc(3,k,12,2,"ng-template",1),d.qZA())},dependencies:[s.V,p.E,l.w,m.L,g.D,h.m,x.X,y.c,f.F,b.z,T.B,P.q,C.n,M.f,Z.TuiCarouselExample1,V.TuiCarouselExample2,N.TuiCarouselExample3,_.TuiCarouselExample4,A.TuiCarouselExample5],styles:[".carousel[_ngcontent-%COMP%]{margin:0 2.5rem;border:1px solid var(--tui-primary)}.plate[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);display:flex;flex-direction:column;align-items:flex-start;width:100%;height:7.5rem;padding:1.75rem;box-sizing:border-box;background:var(--tui-secondary)}.button[_ngcontent-%COMP%]{margin-top:.5rem}"],changeDetection:0}),e})(),Y=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[o.ez,c.TuiCarouselModule,c.TuiPaginationModule,r.TuiNotificationModule,c.TuiIslandModule,r.TuiLoaderModule,r.TuiDialogModule,u.TuiRepeatTimesModule,a.fV,i.Bz.forChild((0,a.Ve)(L))]}),e})()}}]);