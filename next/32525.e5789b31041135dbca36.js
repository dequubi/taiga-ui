"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[32525],{32525:(G,l,o)=>{o.r(l),o.d(l,{IconSetModule:()=>P});var r=o(50506),C=o(12057),T=o(24751),g=o(33982),D=o(29851),i=o(72002),p=o(9488),E=o(67350),e=o(74788),I=o(88331),f=o(66596),M=o(76189),m=o(88618),S=o(79121),N=o(57068),A=o(92483),$=o(48706),y=o(84848),h=o(64374);const O={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function Z(F){return`assets/icons/${O[F]}.svg#${O[F]}`}let L=(()=>{class F{constructor(){this.date=null}}return F.\u0275fac=function(n){return new(n||F)},F.\u0275cmp=e.Xpm({type:F,selectors:[["tui-icon-set-example-1"]],features:[e._Bn([{provide:i.TUI_ICONS_PATH,useValue:Z}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-notification"),e._uU(2," As usual with the DI this is hierarchical. Meaning you can provide different "),e.TgZ(3,"code"),e._uU(4,"TUI_ICONS_PATH"),e.qZA(),e._uU(5," and use different icons across your app. "),e.qZA(),e.TgZ(6,"tui-input-date-range",1),e.NdJ("ngModelChange",function(a){return t.date=a}),e._uU(7," Pick your favorite date range "),e.qZA(),e.qZA()),2&n&&(e.xp6(6),e.Q6J("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[S.L,A.H,$.d,y.bZ,h.b,T.JJ,T.On],encapsulation:2}),F})();var U=o(76349),R=o(92164);function v(F,u){if(1&F&&(e.TgZ(0,"tui-doc-copy",18),e.TgZ(1,"code"),e._uU(2),e.qZA(),e.qZA()),2&F){const n=u.$implicit;e.Q6J("cdkCopyToClipboard",n),e.xp6(2),e.Oqu(n)}}let x=(()=>{class F{constructor(){this.exampleSanitizer=o.e(79654).then(o.t.bind(o,79654,17)),this.example1={"process-icons.js":o.e(31832).then(o.t.bind(o,31832,17)),"process-icons.ts":o.e(37650).then(o.t.bind(o,37650,17)),TypeScript:o.e(35222).then(o.t.bind(o,35222,17)),HTML:o.e(27390).then(o.t.bind(o,27390,17))},this.names=Object.keys(E.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return F.\u0275fac=function(n){return new(n||F)},F.\u0275cmp=e.Xpm({type:F,selectors:[["icon-set"]],decls:45,vars:4,consts:function(){let u,n,t,s,a,_,c;return u=$localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`,n=$localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\ufffd#3\ufffd"}:START_LINK:${"\ufffd#4\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `,t=$localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiCoreIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiKitIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `,t=e.Zx4(t),s=$localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:img src="xxx"${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: style. `,s=e.Zx4(s),a=$localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:processIcons${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: as seen in example below: `,a=e.Zx4(a),_=$localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`,c=$localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\ufffd#40\ufffd"}:START_LINK: Editor component ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: you need to provide ${"\ufffd#41\ufffd"}:START_TAG_CODE:TUI_SANITIZER${"\ufffd/#41\ufffd"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\ufffd#42\ufffd"}:START_LINK_1: NgDompurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\ufffd#43\ufffd"}:START_LINK_2: DOMPurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `,c=e.Zx4(c),[["header",u],n,["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],t,s,["status","warning"],a,["id","material","heading",_,3,"content"],["id","sanitizer",1,"sanitizer-example"],c,["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]]},template:function(n,t){1&n&&(e.TgZ(0,"tui-doc-page",0),e.TgZ(1,"p"),e.tHW(2,1),e.TgZ(3,"a",2),e._UZ(4,"code"),e.qZA(),e.N_p(),e.qZA(),e.TgZ(5,"p"),e.TgZ(6,"button",3),e.NdJ("click",function(){return t.toggle()}),e._uU(7," Show names "),e.qZA(),e.qZA(),e.TgZ(8,"tui-expand",4),e.TgZ(9,"div",5),e.YNc(10,v,3,2,"tui-doc-copy",6),e.qZA(),e.qZA(),e.TgZ(11,"p"),e.tHW(12,7),e._UZ(13,"code"),e._UZ(14,"code"),e.N_p(),e.qZA(),e.TgZ(15,"p"),e.tHW(16,8),e._UZ(17,"code"),e._UZ(18,"code"),e.N_p(),e.qZA(),e.TgZ(19,"tui-notification",9),e._uU(20," Make sure you mark regions in your icons that need to be colored with "),e.TgZ(21,"code"),e._uU(22,'fill="currentColor"'),e.qZA(),e._uU(23," or "),e.TgZ(24,"code"),e._uU(25,'stroke="currentColor"'),e.qZA(),e._uU(26," . "),e.qZA(),e.TgZ(27,"p"),e.tHW(28,10),e._UZ(29,"code"),e._UZ(30,"code"),e._UZ(31,"code"),e._UZ(32,"code"),e.N_p(),e.qZA(),e.TgZ(33,"tui-doc-example",11),e._UZ(34,"tui-icon-set-example-1"),e.qZA(),e.TgZ(35,"section",12),e.TgZ(36,"h2"),e._uU(37,"Sanitizer"),e.qZA(),e.TgZ(38,"p"),e.tHW(39,13),e._UZ(40,"a",14),e._UZ(41,"code"),e._UZ(42,"a",15),e._UZ(43,"a",16),e.N_p(),e.qZA(),e._UZ(44,"tui-doc-code",17),e.qZA(),e.qZA()),2&n&&(e.xp6(8),e.Q6J("expanded",t.expanded),e.xp6(2),e.Q6J("ngForOf",t.names),e.xp6(23),e.Q6J("content",t.example1),e.xp6(11),e.Q6J("code",t.exampleSanitizer))},directives:[I.q,f.V,g.yS,M.v,m.S,C.sg,S.L,N.f,L,U.c,R.f,r.i3],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),F})(),P=(()=>{class F{}return F.\u0275fac=function(n){return new(n||F)},F.\u0275mod=e.oAB({type:F}),F.\u0275inj=e.cJS({imports:[[C.ez,T.u5,r.Iq,D.k7,i.TuiLinkModule,i.TuiExpandModule,i.TuiButtonModule,p.TuiInputDateRangeModule,i.TuiNotificationModule,i.TuiTextfieldControllerModule,i.TuiHintModule,D.fV,g.Bz.forChild((0,D.Ve)(x))]]}),F})()}}]);