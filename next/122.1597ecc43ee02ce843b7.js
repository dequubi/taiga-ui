(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{OFrn:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogsModule",(function(){return C}));var r=n("An66"),o=n("1VvW"),a=n("SVIu"),i=n("Qq0t"),l=n("dvRg"),c=n("kZht"),s=n("OZlg"),p=n("iyc4"),d=n("TLy2"),u=n("fmdS"),m=n("zV1d"),f=n("cweO");function g(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275element"](1,"tui-avatar",5),c["\u0275\u0275text"](2," \xabChoose wisely\xbb "),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("rounded",!0))}function h(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275element"](1,"tui-avatar",6),c["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("rounded",!0))}function b(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),c["\u0275\u0275element"](2,"tui-avatar",7),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("rounded",!0))}let v=(()=>{class e{constructor(e,t){this.alertService=e,this.promptService=t}onClick(e,t,n){this.promptService.open(e,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(d.a)(e=>e?this.alertService.open(n,{status:"success"}):this.alertService.open(t,{status:"error"}))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](i.Y),c["\u0275\u0275directiveInject"](u.b))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=c["\u0275\u0275reference"](3),r=c["\u0275\u0275reference"](5),o=c["\u0275\u0275reference"](7);return t.onClick(n,r,o)})),c["\u0275\u0275text"](1," Show prompt\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,g,3,1,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275template"](4,h,3,1,"ng-template",null,2,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275template"](6,b,3,1,"ng-template",null,3,c["\u0275\u0275templateRefExtractor"])}},directives:[m.a,f.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();const y=["header",$localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`];var w;w=$localize`:␟b3386f18bd4651b9452168426edf7f122d7f1fc1␟4814027570249937937: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `;const S=["heading",$localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`];let x=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1428).then(n.bind(null,"u+f2")),HTML:n.e(1426).then(n.bind(null,"IrL1")),LESS:n.e(1427).then(n.bind(null,"HIP+")),"prompt/prompt.service.ts":n.e(1432).then(n.bind(null,"Ic5v")),"prompt/prompt-options.ts":n.e(1429).then(n.bind(null,"z7nY")),"prompt/prompt.component.ts":n.e(1430).then(n.bind(null,"qVvR")),"prompt/prompt.template.html":n.e(1434).then(n.bind(null,"IAsY")),"prompt/prompt.style.less":n.e(1433).then(n.bind(null,"wP7k")),"prompt/prompt.module.ts":n.e(1431).then(n.bind(null,"/z3+"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["dialogs"]],decls:7,vars:1,consts:[[6,"header"],["id","custom-dialog",3,"content",6,"heading"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,y),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18n"](3,w),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-doc-example",1),c["\u0275\u0275i18nAttributes"](5,S),c["\u0275\u0275element"](6,"tui-dialogs-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("content",t.example1))},directives:[s.a,p.a,v],encapsulation:2,changeDetection:0}),e})();var E=n("cWK9");let I=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[u.a],imports:[[i.ab,E.c,r.c]]}),e})(),C=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,I,i.ab,l.z,a.m,o.f.forChild(Object(a.t)(x))]]}),e})()}}]);