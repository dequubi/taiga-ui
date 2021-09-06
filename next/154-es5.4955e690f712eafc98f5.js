function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241fd904032ec7cbd3e61941f6929b1c472bea849960\u241f734140032111794013: Use pipe in template with function and its arguments: "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fac57fb00fea3677bcead9528c79da80013786e9b\u241f4824980212521507561: Import ",":START_TAG_CODE:TuiFormatPhonePipe",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f688a3500e6ff8f090a2c0a000bbbd585fbfdff04\u241f3740414349373353425: Phone number mask "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f3796d9edaba5839bc345b9dc9c1d22bec3e806b3\u241f2828194013486797327: Country code "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f3595986752c838bd0986faacd012656e2e87e21b\u241f8538189145021144741: Formatted phone number: ",":INTERPOLATION: "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fcd4920b3e2119c03dc9a0972eb03498c55067410\u241f3893505654228026214:Pipe to format phone number"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{U3lG:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFormatPhoneModule",(function(){return D}));var o,a,r=n("2kYt"),i=n("nIj0"),l=n("sEIs"),c=n("SVIu"),p=n("Qq0t"),u=n("dvRg"),m=n("EM62"),d=n("OZlg"),s=n("e0eB"),f=n("iyc4"),h=n("UkDs"),b=((o=function e(){_classCallCheck(this,e),this.phone="+78005557778"}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=m["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-format-phone-example-1"]],decls:6,vars:8,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"tuiFormatPhone"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275text"](4),m["\u0275\u0275pipe"](5,"tuiFormatPhone"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("Formatted number by default: ",m["\u0275\u0275pipeBind1"](2,2,t.phone),""),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" Formatted number with custom params: ",m["\u0275\u0275pipeBind3"](5,4,t.phone,void 0,"###-###-##-##"),"\n"))},pipes:[h.a],encapsulation:2,changeDetection:0}),o),g=n("GdrL"),y=n("2wTY"),C=n("KzL3"),x=n("gEyt"),P=n("yHor"),_=n("zGJC"),T=n("u8jZ");a=$localize(_templateObject());var O,v,M,j,w,E=["heading",$localize(_templateObject2())];function k(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,a),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,E),m["\u0275\u0275element"](4,"tui-format-phone-example-1"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example1)}}function F(e,t){1&e&&m["\u0275\u0275i18n"](0,v)}function L(e,t){1&e&&m["\u0275\u0275i18n"](0,M)}function S(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p",3),m["\u0275\u0275i18n"](1,O),m["\u0275\u0275pipe"](2,"tuiFormatPhone"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-input",4),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().index=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"tui-doc-documentation"),m["\u0275\u0275template"](5,F,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().countryCode=e})),m["\u0275\u0275template"](6,L,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().phoneMask=e})),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275i18nExp"](m["\u0275\u0275pipeBind3"](2,8,o.index,o.countryCode,o.phoneMask)),m["\u0275\u0275i18nApply"](1),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("tuiTextfieldMaxLength",o.maxLength)("tuiTextfieldLabelOutside",!0)("ngModel",o.index),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",o.countryCodes)("documentationPropertyValue",o.countryCode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",o.phoneMasks)("documentationPropertyValue",o.phoneMask)}}function V(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",7),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,j),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,w),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}O=$localize(_templateObject3(),"\ufffd0\ufffd"),v=$localize(_templateObject4()),M=$localize(_templateObject5()),j=$localize(_templateObject6(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),w=$localize(_templateObject7());var I,z,N=((z=function(){function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiFormatPhonePipeModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFormatPhonePipeModule\n    ],\n...\n",this.exampleInsertTemplate="Formatted number: {{ phone | tuiFormatPhone}}\n\nFormatted number with custom params: {{ phone | tuiFormatPhone: 'country code' : 'mask'}}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-phone-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatPhoneExample1 {\n    phone = '+78005557778';\n}\n",HTML:"<p>Formatted number by default: {{ phone | tuiFormatPhone}}</p>\n\n<p>\n    Formatted number with custom params: {{ phone | tuiFormatPhone: undefined :\n    '###-###-##-##'}}\n</p>\n"},this.index="+78005557778",this.countryCodes=[void 0,"+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasks=[void 0,"####-#############","### ###-####","### ###-####"],this.phoneMask=this.phoneMasks[0]}return _createClass(e,[{key:"maxLength",get:function(){return this.countryCode&&this.phoneMask?this.countryCode.length+this.phoneMask.length-2:12}}]),e}()).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=m["\u0275\u0275defineComponent"]({type:z,selectors:[["example-tui-format-phone"]],decls:4,vars:0,consts:[["header","FormatPhone","package","CORE","type","pipes"],["pageTab",""],["id","base",3,"content",6,"heading"],[1,"text","b-full-width"],["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldMaxLength","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","countryCode","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMask","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,k,5,1,"ng-template",1),m["\u0275\u0275template"](2,S,7,12,"ng-template",1),m["\u0275\u0275template"](3,V,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[d.a,s.a,f.a,b,g.a,y.b,C.b,x.b,i.NgControlStatus,i.NgModel,P.a,_.a,T.a],pipes:[h.a],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),z),D=((I=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[p.TuiFormatPhonePipeModule,u.TuiInputModule,i.ReactiveFormsModule,i.FormsModule,r.c,u.TuiRadioListModule,p.TuiTextfieldControllerModule,c.h,l.f.forChild(Object(c.o)(N))]]}),I)}}]);