(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"K/iL":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},LusI:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("Qq0t"),o=n("pVuH");class a extends o.a{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["Bell","tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=null,this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.maxHeight=null,this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=i.c,this.dropdownMaxHeight=i.b}get customContent(){return"Bell"===this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},QzmQ:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputFileModule",(function(){return Ne}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),l=n("Qq0t"),s=n("dvRg"),c=n("kZht"),d=n("LusI"),u=n("K/iL"),p=n("OZlg"),m=n("e0eB"),h=n("aPft"),f=n("yZWP"),b=n("iyc4"),y=n("D57K"),g=n("l4xa"),v=n("ROBh"),x=n("8lHc"),C=n("YtkY"),V=n("jIqt"),j=n("8j5Y"),P=n("TLy2"),F=n("7ntQ"),S=n("7SLS"),w=n("vl3M");const z=function(){return[]};class O{constructor(e,t){this.file=e,this.reason=t}}function M({file:e,reason:t}){return{name:e.name,size:e.size,type:e.type,content:t}}let $=(()=>{class e{constructor(){this.control=new o.FormControl}get loading$(){return this.requests$.pipe(Object(C.a)(e=>e instanceof File?[e]:[]),Object(V.a)([]))}get rejected$(){return this.requests$.pipe(Object(C.a)(e=>e instanceof O?[M(e)]:[]),Object(j.a)(({length:e})=>{e&&this.control.setValue(null)}),Object(V.a)([]))}get requests$(){return this.control.valueChanges.pipe(Object(P.a)(e=>e?this.serverRequest(e).pipe(Object(V.a)(e)):Object(v.a)(null)),Object(F.a)())}serverRequest(e){const t=Math.round(5e3*Math.random()+500),n=t%2?null:new O(e,"Server responded for odd number of time");return Object(x.a)(t).pipe(Object(S.a)(n))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-file-example-1"]],decls:3,vars:9,consts:[["link","Choose an image","accept","image/*",1,"container",3,"formControl","loadingFiles","rejectedFiles"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"tui-input-file",0),c["\u0275\u0275pipe"](1,"async"),c["\u0275\u0275pipe"](2,"async")),2&e&&c["\u0275\u0275property"]("formControl",t.control)("loadingFiles",c["\u0275\u0275pipeBind1"](1,3,t.loading$)||c["\u0275\u0275pureFunction0"](7,z))("rejectedFiles",c["\u0275\u0275pipeBind1"](2,5,t.rejected$)||c["\u0275\u0275pureFunction0"](8,z))},directives:[w.a,o.NgControlStatus,o.FormControlDirective],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:35rem}"],changeDetection:0}),Object(y.b)([g.vd],e.prototype,"loading$",null),Object(y.b)([g.vd],e.prototype,"rejected$",null),Object(y.b)([g.vd],e.prototype,"requests$",null),e})();var E=n("ZTXN"),T=n("HM3f"),k=n("0Woy"),L=n("uCWR");class _{constructor(e,t,n){this.accumulator=e,this.seed=t,this.concurrent=n}call(e,t){return t.subscribe(new N(e,this.accumulator,this.seed,this.concurrent))}}class N extends L.b{constructor(e,t,n,i){super(e),this.accumulator=t,this.acc=n,this.concurrent=i,this.hasValue=!1,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){if(this.active<this.concurrent){const n=this.index++,i=this.destination;let o;try{const{accumulator:t}=this;o=t(this.acc,e,n)}catch(t){return i.error(t)}this.active++,this._innerSub(o)}else this.buffer.push(e)}_innerSub(e){const t=new L.a(this),n=this.destination;n.add(t);const i=Object(L.c)(e,t);i!==t&&n.add(i)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete()),this.unsubscribe()}notifyNext(e){const{destination:t}=this;this.acc=e,this.hasValue=!0,t.next(e)}notifyComplete(){const e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())}}var I,R=n("kuMc"),D=n("xVbo"),A=n("SrNW");I=$localize`:␟080cae4d65efb97854af5d37318839e779a3f3d7␟3022298069038886630: With a custom accept format and async loading `;const H=function(){return[]};class q{constructor(e,t){this.file=e,this.reason=t}}function B(e){return e instanceof File}function G(e){return e instanceof q}function W({file:e,reason:t}){return{name:e.name,size:e.size,type:e.type,content:t}}let Z=(()=>{class e{constructor(){this.files=new o.FormControl([]),this.rejectedFiles$=new E.a,this.files$=this.files.valueChanges.pipe(Object(V.a)([]),Object(k.a)(),Object(C.a)(([e,t])=>t.filter(t=>!e.includes(t))),function(e,t,n=Number.POSITIVE_INFINITY){return i=>i.lift(new _(e,t,n))}((e,t)=>Object(T.a)(t.map(e=>this.serverRequest(e).pipe(Object(V.a)(e),Object(R.a)(this.files.valueChanges.pipe(Object(D.a)(t=>!t.includes(e))))))).pipe(Object(C.a)(t=>[...e,...t.filter(g.Rc)])),[]),Object(F.a)()),this.loading$=this.files$.pipe(Object(C.a)(e=>e.filter(B)),Object(P.a)(e=>this.files.valueChanges.pipe(Object(V.a)(this.files.value),Object(C.a)(t=>e.filter(e=>t.includes(e))))),Object(V.a)([])),this.rejected$=this.rejectedFiles$.pipe(Object(P.a)(e=>this.files$.pipe(Object(C.a)(e=>e.filter(G)),Object(A.a)((e,t)=>[...e,...t.filter(({file:e})=>this.files.value.includes(e))],[]),Object(j.a)(e=>this.removeRejected(e)),Object(C.a)(e=>e.map(W)),Object(C.a)(t=>[...e,...t]))),Object(V.a)([])),this.form=new o.FormGroup({files:this.files})}onRejectedFilesChange(e){this.rejectedFiles$.next(e)}removeRejected(e){const t=this.files.value.filter(t=>e.every(e=>e.file!==t));t.length!==this.files.value.length&&this.files.setValue(t)}serverRequest(e){const t=Math.round(5e3*Math.random()+500),n=t%2?null:new q(e,"Server responded for odd number of time");return Object(x.a)(t).pipe(Object(S.a)(n))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-file-example-2"]],decls:6,vars:10,consts:[[1,"container",3,"formGroup"],[1,"tui-space_bottom-1"],["link","Choose images","accept","image/*","formControlName","files",3,"multiple","loadingFiles","rejectedFiles","rejectedFilesChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275i18n"](2,I),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-input-file",2),c["\u0275\u0275listener"]("rejectedFilesChange",(function(e){return t.onRejectedFilesChange(e)})),c["\u0275\u0275pipe"](4,"async"),c["\u0275\u0275pipe"](5,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.form),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("multiple",!0)("loadingFiles",c["\u0275\u0275pipeBind1"](4,4,t.loading$)||c["\u0275\u0275pureFunction0"](8,H))("rejectedFiles",c["\u0275\u0275pipeBind1"](5,6,t.rejected$)||c["\u0275\u0275pureFunction0"](9,H)))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,w.a,o.NgControlStatus,o.FormControlName],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:35rem}"],changeDetection:0}),e})();var Q,J;Q=$localize`:␟41b1908bd7cbd747514be2f4a82ba0bb47ac8097␟4164292255139278901: With preset files and actions when deleting `,J=$localize`:␟7fac004bcdf2783953a2e2ac31535a931817541b␟7175759508499094895:Loading files should also be in control`;class K{constructor(e,t){this.file=e,this.reason=t}}function Y(e){return e instanceof K}function U({file:e,reason:t}){return{name:e.name,size:e.size,type:e.type,content:t}}let X=(()=>{class e{constructor(e,t,n){this.alertService=n,this.files$=new E.a,this.files=[{name:"Loading file.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt",src:"https://tools.ietf.org/html/rfc675"}],this.loadingFiles=[this.files[0]],this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.files$.pipe(Object(P.a)(e=>Object(T.a)(e.map(e=>this.serverRequest(e).pipe(Object(V.a)(e))))),Object(g.Ed)(t),Object(R.a)(e)).subscribe(e=>{this.processResponse(e)})}onModelChange(e){if(this.processNotification(e),t=this.files,e.every(e=>t.includes(e)))return this.files=e,void(this.loadingFiles=this.loadingFiles.filter(t=>e.includes(t)));var t;this.files=e,this.loadingFiles=this.files,this.files$.next(this.files)}processNotification(e){const t=function(e,t){const n=e.filter(e=>!t.includes(e));return 1===n.length?n[0]:null}(this.files,e);t&&this.alertService.open(`"${t.name}" was removed`).subscribe()}processResponse(e){this.loadingFiles=this.loadingFiles.filter(t=>e.includes(t));const t=e.filter(Y).filter(({file:e})=>this.files.includes(e));0!==t.length&&(this.rejectedFiles=[...this.rejectedFiles,...t.map(U)],this.files=this.files.filter(e=>t.every(t=>t.file!==e)))}serverRequest(e){const t=Math.round(5e3*Math.random()+500),n=t%2?null:new K(e,"Server responded for odd number of time");return Object(x.a)(t).pipe(Object(S.a)(n))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](g.kb),c["\u0275\u0275directiveInject"](c.ChangeDetectorRef),c["\u0275\u0275directiveInject"](l.Z))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-file-example-3"]],features:[c["\u0275\u0275ProvidersFeature"]([g.kb])],decls:6,vars:4,consts:[[1,"container"],[1,"tui-space_bottom-1"],[3,"ngModel","multiple","loadingFiles","rejectedFiles","rejectedFilesChange","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"p",1),c["\u0275\u0275i18n"](2,Q),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-input-file",2),c["\u0275\u0275listener"]("rejectedFilesChange",(function(e){return t.rejectedFiles=e}))("ngModelChange",(function(e){return t.onModelChange(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275i18n"](5,J),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngModel",t.files)("multiple",!0)("loadingFiles",t.loadingFiles)("rejectedFiles",t.rejectedFiles))},directives:[w.a,o.NgControlStatus,o.NgModel],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:35rem}"],changeDetection:0}),e})();var ee;ee=$localize`:␟4cc8b777813d22feb628efb36f28694be26e0ff8␟9158298050641782647: Sync working with files, no loading state `;let te=(()=>{class e{constructor(){this.files=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-file-example-4"]],decls:4,vars:2,consts:[[1,"container"],[1,"tui-space_bottom-1"],["size","l",3,"multiple","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275i18n"](2,ee),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-input-file",2),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.files=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("multiple",!0)("ngModel",t.files))},directives:[w.a,o.NgControlStatus,o.NgModel],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:35rem}"],changeDetection:0}),e})();var ne,ie=n("EPR0"),oe=n("yHor"),ae=n("zGJC"),re=n("u8jZ");ne=$localize`:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`;const le=["heading",$localize`:␟dd673a1043a8ad44d76752e86198b9fdad6cea76␟174397684173185104:Single file`],se=["heading",$localize`:␟a1f1f7a5a2007f7010e8d818936731a335306646␟1720677440255684728:Several files`],ce=["heading",$localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`];function de(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,ne),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-notification",2),c["\u0275\u0275elementStart"](3,"strong"),c["\u0275\u0275text"](4,"Deprecated"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," . Use "),c["\u0275\u0275elementStart"](6,"code"),c["\u0275\u0275text"](7,"InputFiles"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](8," from "),c["\u0275\u0275elementStart"](9,"a",3),c["\u0275\u0275text"](10," TuiInputFilesModule "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](12,le),c["\u0275\u0275element"](13,"tui-input-file-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](15,se),c["\u0275\u0275element"](16,"tui-input-file-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"tui-doc-example",6),c["\u0275\u0275element"](18,"tui-input-file-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"tui-doc-example",7),c["\u0275\u0275i18nAttributes"](20,ce),c["\u0275\u0275element"](21,"tui-input-file-example-4"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example4)}}var ue,pe,me,he,fe,be,ye,ge,ve,xe,Ce,Ve;function je(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,ue),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function Pe(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,pe),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function Fe(e,t){1&e&&c["\u0275\u0275i18n"](0,me)}function Se(e,t){1&e&&c["\u0275\u0275i18n"](0,he)}function we(e,t){1&e&&c["\u0275\u0275i18n"](0,fe)}function ze(e,t){1&e&&c["\u0275\u0275i18n"](0,be)}function Oe(e,t){1&e&&c["\u0275\u0275i18n"](0,ye)}function Me(e,t){1&e&&c["\u0275\u0275i18n"](0,ge)}function $e(e,t){1&e&&c["\u0275\u0275i18n"](0,ve)}function Ee(e,t){1&e&&c["\u0275\u0275i18n"](0,xe)}function Te(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275element"](1,"tui-input-file",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,je,2,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t})),c["\u0275\u0275template"](4,Pe,2,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().accept=t})),c["\u0275\u0275template"](5,Fe,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().label=t})),c["\u0275\u0275template"](6,Se,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().link=t})),c["\u0275\u0275template"](7,we,1,0,"ng-template",13),c["\u0275\u0275template"](8,ze,1,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().maxFileSize=t})),c["\u0275\u0275template"](9,Oe,1,0,"ng-template",15),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().multiple=t})),c["\u0275\u0275template"](10,Me,1,0,"ng-template",16),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().rejectedFiles=t})),c["\u0275\u0275template"](11,$e,1,0,"ng-template",17),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().showSize=t})),c["\u0275\u0275template"](12,Ee,1,0,"ng-template",18),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().size=t})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formControl",e.control)("accept",e.accept)("link",e.link)("label",e.label)("maxFileSize",e.maxFileSize)("multiple",e.multiple)("rejectedFiles",e.rejectedFiles)("readOnly",e.readOnly)("size",e.size)("showSize",e.showSize)("focusable",e.focusable)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.acceptVariants)("documentationPropertyValue",e.accept),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.label),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.link),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",e.maxFileSizeVariants)("documentationPropertyValue",e.maxFileSize),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.multiple),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.rejectedFilesVariants)("documentationPropertyValue",e.rejectedFiles),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.showSize),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size)}}function ke(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",19),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,Ce),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",20),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,Ve),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",21),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}ue=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,pe=$localize`:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\ufffd#1\ufffd"}:START_TAG_CODE:accept${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,me=$localize`:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `,he=$localize`:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `,fe=$localize`:␟18d7d778a69e8f70693c92ff0b47f32edc95b12a␟8330372945270919575: Files in loading process `,be=$localize`:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `,ye=$localize`:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `,ge=$localize`:␟8b220800993a93dd9ca716a6014eeec88dfd88e0␟2574853013457747211: Array of files that not passed check `,ve=$localize`:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `,xe=$localize`:␟af27d8636b6c20ccdd0a11ff4d940e05eb2b8ae6␟7972270867315160918: Files list size `,Ce=$localize`:␟d41a7e4dc2844fe570cedb26ed5254a96dac3351␟3726838635698526556: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputFileModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Ve=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Le=(()=>{class e extends d.a{constructor(){super(...arguments),this.exampleModule=n.e(814).then(n.bind(null,"fpBN")),this.exampleHtml=n.e(815).then(n.bind(null,"H1b+")),this.example1={TypeScript:n.e(807).then(n.bind(null,"QV82")),HTML:n.e(806).then(n.bind(null,"z5Ur"))},this.example2={TypeScript:n.e(809).then(n.bind(null,"UxtR")),HTML:n.e(808).then(n.bind(null,"NbWR"))},this.example3={TypeScript:n.e(811).then(n.bind(null,"zstx")),HTML:n.e(810).then(n.bind(null,"GVQz"))},this.example4={TypeScript:n.e(813).then(n.bind(null,"Bku2")),HTML:n.e(812).then(n.bind(null,"637P"))},this.control=new o.FormControl,this.link="Choose a file",this.label="or drop\xa0it\xa0here",this.multiple=!1,this.showSize=!0,this.accept="",this.acceptVariants=["image/*","application/pdf","image/*,application/pdf"],this.maxFileSizeVariants=[100,512e3,3e7,22e5],this.sizeVariants=["m","l"],this.rejectedFilesVariants=[[],[{name:"test.txt",size:123,content:"File is too boring"},{name:"Waterplea \u2014 Strays.mp3",size:237,content:"File already exists"}]],this.size=this.sizeVariants[0],this.rejectedFiles=this.rejectedFilesVariants[0],this.maxFileSize=this.maxFileSizeVariants[2]}}return e.\u0275fac=function(t){return _e(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-file"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:u.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputFile","package","KIT","type","components","deprecated",""],["pageTab",""],["status","error"],["tuiLink","","routerLink","/components/input-files"],["id","single",3,"content",6,"heading"],["id","multiple",3,"content",6,"heading"],["id","model","heading","ngModel",3,"content"],["id","size",3,"content",6,"heading"],[3,"formControl","accept","link","label","maxFileSize","multiple","rejectedFiles","readOnly","size","showSize","focusable","pseudoFocused","pseudoHovered","pseudoPressed"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","accept","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","link","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","loadingFiles","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiFileLike>"],["documentationPropertyName","maxFileSize","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","multiple","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rejectedFiles","documentationPropertyMode","input-output","documentationPropertyType","ReadonlyArray<TuiFileLike>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showSize","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,de,22,4,"ng-template",1),c["\u0275\u0275template"](2,Te,13,27,"ng-template",1),c["\u0275\u0275template"](3,ke,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,h.a,f.a,a.e,b.a,$,Z,X,te,ie.a,w.a,o.NgControlStatus,o.FormControlDirective,oe.a,ae.a,re.a],encapsulation:2,changeDetection:0}),e})();const _e=c["\u0275\u0275getInheritedFactory"](Le);let Ne=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,o.ReactiveFormsModule,s.Z,s.cb,l.Db,l.Lb,r.m,a.f.forChild(Object(r.u)(Le))]]}),e})()},pVuH:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}}}]);