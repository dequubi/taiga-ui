function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241ffbdb146f50017357a27da216378627c124a24712\u241f8399473795336734135: Import ",":START_TAG_CODE:TuiBarModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f998a01f32aef31a3065d9bfa168ba0a037f2ce0a\u241f7702365343132985223: Text inside "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fa6f48a1d27dd6e40e08f07ea7d1c2c39684112e5\u241f3329374499952540134: Indicator color "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f341b67b8b895f827a618e320d690de69209958c9\u241f4436855227670865152: Active state from outside "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fc6b249c42e09e8056c136131a9c6f1c5d1872fbc\u241f6598414773097838452:",":START_TAG_CODE:tui-money",":CLOSE_TAG_CODE: is used to format currency and fraction "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fc5f83f5f1db2e4c97d30936845035e24a84e150c\u241f1963043015047934208:With a ring chart"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa984adcd40e5ae696a4b3641b5ebd09b4e409959\u241f6137055992947046886:A button for a legend of ring or pie charts"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fc3d93006062f75d305b66685eaedb021d62229ea\u241f1570614066977040018:LegendItem"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{gpkK:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLegendItemModule",(function(){return U}));var a=n("2kYt"),r=n("sEIs"),o=n("UTYu"),i=n("T8fS"),l=n("SVIu"),c=n("l4xa"),u=n("kiPw"),m=(n("Qq0t"),n("EM62")),d=n("OZlg"),p=n("e0eB"),s=n("iyc4"),f=n("pdBE"),g=n("0/K7"),v=n("MyvS"),y=n("TYom");function b(e,t){if(1&e&&(m["\u0275\u0275element"](0,"tui-money",5),m["\u0275\u0275elementStart"](1,"div"),m["\u0275\u0275text"](2,"Total"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("singleColor",!0)("value",n.sum)}}function h(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-legend-item",6),m["\u0275\u0275listener"]("tuiHoveredChange",(function(e){m["\u0275\u0275restoreView"](n);var a=t.index;return m["\u0275\u0275nextContext"]().onHover(a,e)})),m["\u0275\u0275element"](1,"tui-money",5),m["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=t.index,o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("color",o.getColor(r))("text",a)("active",o.isItemActive(r)),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("singleColor",!0)("value",o.value[r])}}var x,C,_=((x=function(){function e(){_classCallCheck(this,e),this.activeItemIndex=null,this.value=[13769,12367,10172,3018,2592],this.sum=Object(c.sum).apply(void 0,_toConsumableArray(this.value)),this.labels=["Food","Cafe","Open Source","Taxi","Other"]}return _createClass(e,[{key:"isItemActive",value:function(e){return this.activeItemIndex===e}},{key:"onHover",value:function(e,t){this.activeItemIndex=t?e:null}},{key:"getColor",value:function(e){return"var(--tui-chart-".concat(e,")")}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=m["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-legend-item-example-1"]],decls:6,vars:4,consts:[[1,"wrapper"],[3,"value","content","activeItemIndex","activeItemIndexChange"],["content",""],[1,"legend"],["class","item",3,"color","text","active","tuiHoveredChange",4,"ngFor","ngForOf"],[3,"singleColor","value"],[1,"item",3,"color","text","active","tuiHoveredChange"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-ring-chart",1),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](2,b,3,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementStart"](4,"div",3),m["\u0275\u0275template"](5,h,2,5,"tui-legend-item",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275reference"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value)("content",n)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngForOf",t.labels)}},directives:[f.a,a.s,g.a,v.a,y.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.legend[_ngcontent-%COMP%]{margin-left:2.8125rem}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),x),T=n("EPR0"),I=n("yHor"),O=n("zGJC"),j=n("u8jZ"),S=["header",$localize(_templateObject())];C=$localize(_templateObject2());var E,A,P,w,L,M,V=["heading",$localize(_templateObject3())];function k(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,C),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,V),m["\u0275\u0275element"](4,"tui-legend-item-example-1"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example1)}}function H(e,t){1&e&&m["\u0275\u0275i18n"](0,A)}function $(e,t){1&e&&m["\u0275\u0275i18n"](0,P)}function z(e,t){1&e&&m["\u0275\u0275i18n"](0,w)}function D(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-legend-item",3),m["\u0275\u0275element"](2,"tui-money",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275i18nStart"](4,E),m["\u0275\u0275element"](5,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-doc-documentation"),m["\u0275\u0275template"](7,H,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().active=e})),m["\u0275\u0275template"](8,$,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().color=e})),m["\u0275\u0275template"](9,z,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().text=e})),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("active",a.active)("color",a.color)("text",a.text),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",123456)("singleColor",!0),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("documentationPropertyValue",a.active),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",a.colorVariants)("documentationPropertyValue",a.color),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",a.text)}}function F(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",8),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,L),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,M),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}E=$localize(_templateObject4(),"\ufffd#5\ufffd","\ufffd/#5\ufffd"),A=$localize(_templateObject5()),P=$localize(_templateObject6()),w=$localize(_templateObject7()),L=$localize(_templateObject8(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),M=$localize(_templateObject9());var N,R,G=((R=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiLegendItemModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLegendItemModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-legend-item [value]="value">Content</tui-legend-item>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {sum} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-legend-item-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLegendItemExample1 {\n    activeItemIndex: number | null = null;\n\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.value);\n    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];\n\n    isItemActive(index: number): boolean {\n        return this.activeItemIndex === index;\n    }\n\n    onHover(index: number, hovered: boolean) {\n        this.activeItemIndex = hovered ? index : null;\n    }\n\n    getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n}\n",HTML:'<div class="wrapper">\n    <tui-ring-chart\n        [value]="value"\n        [content]="content"\n        [(activeItemIndex)]="activeItemIndex"\n    ></tui-ring-chart>\n\n    <ng-template #content>\n        <tui-money [singleColor]="true" [value]="sum"></tui-money>\n        <div>Total</div>\n    </ng-template>\n\n    <div class="legend">\n        <tui-legend-item\n            *ngFor="let label of labels; let index = index"\n            class="item"\n            [color]="getColor(index)"\n            [text]="label"\n            [active]="isItemActive(index)"\n            (tuiHoveredChange)="onHover(index, $event)"\n        >\n            <tui-money [singleColor]="true" [value]="value[index]"></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n',LESS:":host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.legend {\n    margin-left: 2.8125rem;\n}\n\n.item {\n    margin: 0 0.5rem 0.75rem 0;\n}\n"},this.text="Text inside",this.active=!1,this.colorVariants=["support-21","primary","secondary"],this.color=""}).\u0275fac=function(e){return new(e||R)},R.\u0275cmp=m["\u0275\u0275defineComponent"]({type:R,selectors:[["example-tui-legend-item"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","ring",3,"content",6,"heading"],[3,"active","color","text"],[3,"value","singleColor"],["documentationPropertyName","active","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","TuiColor | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,S),m["\u0275\u0275template"](2,k,5,1,"ng-template",1),m["\u0275\u0275template"](3,D,10,9,"ng-template",1),m["\u0275\u0275template"](4,F,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,s.a,_,T.a,v.a,g.a,I.a,O.a,j.a],encapsulation:2,changeDetection:0}),R),U=((N=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[a.c,o.TuiLegendItemModule,o.TuiRingChartModule,i.TuiMoneyModule,u.c,c.TuiHoveredModule,l.h,r.f.forChild(Object(l.o)(G))]]}),N)}}]);