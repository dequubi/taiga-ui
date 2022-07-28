(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{G5ph:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPaginationModule",(function(){return X}));var a=n("An66"),i=n("3kIJ"),o=n("1VvW"),d=n("SVIu"),r=n("dvRg"),l=n("cWK9"),c=n("kZht"),u=n("OZlg"),p=n("e0eB"),m=n("iyc4"),s=n("cc69"),g=n("X03X");let f=(()=>{class e{constructor(){this.length=64,this.index=10}goToPage(e){this.index=e,console.info("New page:",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.index=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"tui-pagination",1),c["\u0275\u0275listener"]("indexChange",(function(e){return t.goToPage(e)})),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("max",t.length-1)("quantum",1)("ngModel",t.index),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("length",t.length)("index",t.index))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})(),h=(()=>{class e{constructor(){this.activePadding=2}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activePadding=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(c["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.activePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("activePadding",t.activePadding)("length",64)("index",10))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})(),y=(()=>{class e{constructor(){this.sidePadding=3}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.sidePadding=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(c["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.sidePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("sidePadding",t.sidePadding)("length",64)("index",10))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})();function x(e,t){if(1&e&&c["\u0275\u0275text"](0),2&e){const e=t.$implicit,n=c["\u0275\u0275nextContext"]();c["\u0275\u0275textInterpolate1"](" ",n.days[e],"\n")}}let P=(()=>{class e{constructor(){this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(e,t){if(1&e&&(c["\u0275\u0275element"](0,"tui-pagination",0),c["\u0275\u0275template"](1,x,1,1,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"])),2&e){const e=c["\u0275\u0275reference"](2);c["\u0275\u0275property"]("length",7)("content",e)}},directives:[g.a],encapsulation:2,changeDetection:0}),e})();var b,C=n("EPR0"),v=n("yHor"),V=n("zGJC"),S=n("u8jZ");b=$localize`:␟661de1abe57e9dcf4ef0b9887972092fa3139ec3␟4234058188529646153:Pagination component enables the user to select a specific page from a range of pages`;const M=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],E=["heading",$localize`:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`],z=["heading",$localize`:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`],T=["heading",$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`];function w(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,b),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,M),c["\u0275\u0275element"](4,"tui-pagination-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](6,E),c["\u0275\u0275element"](7,"tui-pagination-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](9,z),c["\u0275\u0275element"](10,"tui-pagination-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](12,T),c["\u0275\u0275element"](13,"tui-pagination-example-4"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example4)}}var A,$,N,O,k,q,I,L;function j(e,t){1&e&&c["\u0275\u0275i18n"](0,A)}function D(e,t){1&e&&c["\u0275\u0275i18n"](0,$)}function H(e,t){1&e&&c["\u0275\u0275i18n"](0,N)}function _(e,t){1&e&&c["\u0275\u0275i18n"](0,O)}function G(e,t){1&e&&c["\u0275\u0275i18n"](0,k)}function K(e,t){1&e&&c["\u0275\u0275i18n"](0,q)}function R(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-pagination",6),c["\u0275\u0275listener"]("indexChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().index=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,j,1,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().focusable=t})),c["\u0275\u0275template"](4,D,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().index=t})),c["\u0275\u0275template"](5,H,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().length=t})),c["\u0275\u0275template"](6,_,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().size=t})),c["\u0275\u0275template"](7,G,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().activePadding=t})),c["\u0275\u0275template"](8,K,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().sidePadding=t})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("focusable",e.focusable)("length",e.length)("size",e.size)("activePadding",e.activePadding)("sidePadding",e.sidePadding)("index",e.index),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValue",e.focusable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.index),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.activePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.sidePadding)}}function Z(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",13),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,I),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,L),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",15),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}A=$localize`:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `,$=$localize`:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `,N=$localize`:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `,O=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,k=$localize`:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `,q=$localize`:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `,I=$localize`:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let J=(()=>{class e{constructor(){this.exampleModule=n.e(1063).then(n.bind(null,"jqXG")),this.exampleHtml=n.e(1064).then(n.bind(null,"jX9O")),this.example1={TypeScript:n.e(1056).then(n.bind(null,"2QQA")),HTML:n.e(1055).then(n.bind(null,"VIj7")),LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example2={TypeScript:n.e(1058).then(n.bind(null,"tIbk")),HTML:n.e(1057).then(n.bind(null,"Pytx")),LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example3={TypeScript:n.e(1060).then(n.bind(null,"qpk8")),HTML:n.e(1059).then(n.bind(null,"oVZu")),LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example4={TypeScript:n.e(1062).then(n.bind(null,"ZsO+")),HTML:n.e(1061).then(n.bind(null,"9Tns"))},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.activePadding=1,this.sidePadding=1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:[["header","Pagination","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","around",3,"content",6,"heading"],["id","edges",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],[3,"focusable","length","size","activePadding","sidePadding","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","sidePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,w,14,4,"ng-template",1),c["\u0275\u0275template"](2,R,9,13,"ng-template",1),c["\u0275\u0275template"](3,Z,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,m.a,f,h,y,P,C.a,g.a,v.a,V.a,S.a],encapsulation:2,changeDetection:0}),e})(),X=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.A,r.sb,r.kb,a.c,r.Ab,i.FormsModule,i.ReactiveFormsModule,d.m,o.f.forChild(Object(d.t)(J)),l.c]]}),e})()}}]);