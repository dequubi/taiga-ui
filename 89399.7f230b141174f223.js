(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89399,61386,31629,20332,78446,10802,33530,99503,50517,11820,61505,99781,50023,11944,61702,98323,1001],{93459:(t,e,n)=>{n.d(e,{_:()=>a});var i=n(20755),s=n(5824);const r=[[["","tuiCheckbox",""]],"*"],o=["[tuiCheckbox]","*"];let a=(()=>{var t;class e{constructor(){this.active=!1,this.color="",this.text="",this.size="m",this.disabled=!1}get computedColor(){return"var(--tui-primary)"===this.color?null:this.color}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-legend-item"]],hostVars:5,hostBindings:function(t,e){2&t&&(i.uIk("data-size",e.size),i.Udp("--tui-primary",e.computedColor),i.ekj("_disabled",e.disabled))},inputs:{active:"active",color:"color",text:"text",size:"size",disabled:"disabled"},ngContentSelectors:o,decls:7,vars:4,consts:[["appearance","whiteblock","size","s","tuiButton","","type","button",1,"t-button",3,"tuiAppearanceState"],[1,"t-wrapper"],[1,"t-dot"],[1,"t-text"]],template:function(t,e){1&t&&(i.F$t(r),i.TgZ(0,"button",0)(1,"div",1),i.Hsn(2),i._UZ(3,"span",2),i.TgZ(4,"span",3),i._uU(5),i.qZA(),i.Hsn(6,1),i.qZA()()),2&t&&(i.Q6J("tuiAppearanceState",e.active?"hover":null),i.xp6(3),i.Udp("background-color",e.color||"var(--tui-primary)"),i.xp6(2),i.Oqu(e.text))},dependencies:[s.m],styles:["[_nghost-%COMP%]{display:inline-block}.t-button[_ngcontent-%COMP%]{height:2rem;font-weight:700}[data-size=m][_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]{height:2.25rem;font:var(--tui-font-text-m);font-weight:700}.t-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;pointer-events:none}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-03)}.t-dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:100%;flex-shrink:0}._disabled[_nghost-%COMP%]   .t-dot[_ngcontent-%COMP%]{background:var(--tui-base-04)}.t-dot[_ngcontent-%COMP%]:not(:first-child){display:none}.t-text[_ngcontent-%COMP%]{margin:0 .5rem;font-weight:400}"],changeDetection:0}),e})()},20332:(t,e,n)=>{n.d(e,{W:()=>I});var i,s=n(84911),r=n(20755),o=n(81576),a=n(6642),c=n(69781),u=n(8610),h=n(77355),d=n(42463),l=n(96954),g=n(76893),p=n(17085),m=n(2255);const v=function(t){return{$implicit:t}};function f(t,e){if(1&t){const t=r.EpF();r.O4$(),r.TgZ(0,"path",5),r.NdJ("tuiHoveredChange",(function(e){const n=r.CHM(t).$implicit,i=r.oxw();return r.KtG(i.onHovered(e,n))})),r.qZA()}if(2&t){const t=e.$implicit,n=r.oxw();r.Udp("color",n.getColor(t)),r.Q6J("tuiHint",n.hintContent)("tuiHintContext",r.VKq(6,v,t))("tuiPieChart",n.segments[t]),r.uIk("transform",n.getTransform(t))}}const x={xs:"50",s:"50",m:"77.8",l:"81.9",xl:"81.3"},C={xs:1.15,s:1.25,m:1.11,l:1.09,xl:1.08};class I{constructor(){this.hintOptions=(0,r.f3M)(a.TuiHintOptionsDirective,{optional:!0}),this.autoIdString=(0,r.f3M)(o.TuiIdService).generate(),this.value=[],this.size="m",this.masked=!1,this.activeItemIndex=NaN,this.activeItemIndexChange=new r.vpe,this.hintOptions&&(this.hintOptions.showDelay=0,this.hintOptions.hideDelay=0)}get empty(){return!this.getSum(this.value)}get hintContent(){return this.hintOptions?.content||""}get maskId(){return`tui-ring-chart-${this.autoIdString}`}get mask(){return this.masked?`url(#${this.maskId})`:null}get radius(){return x[this.size]}get segments(){return this.getSegments(this.value)}getTransform(t){const e=this.masked?`scale(${C[this.size]})`:`scale(${C.xs})`;return t===this.activeItemIndex?e:null}onHovered(t,e){this.updateActiveItemIndex(t?e:NaN)}getColor(t){return`var(--tui-chart-${t})`}getSum(t){return(0,o.tuiSum)(...t)}getSegments(t){return t.map(((t,e,n)=>n.reduce(((t,n,i)=>i<e?this.getDeg(n)+t:t),this.getDeg(t)))).map(((t,e,n)=>[n[e-1]||0,Math.min(t,359.9999)]))}getDeg(t){return t/this.getSum(this.value)*360}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}(i=I).ɵfac=function(t){return new(t||i)},i.ɵcmp=r.Xpm({type:i,selectors:[["tui-pie-chart"]],hostVars:3,hostBindings:function(t,e){2&t&&(r.uIk("data-size",e.size),r.ekj("_empty",e.empty))},inputs:{value:"value",size:"size",masked:"masked",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},features:[r._Bn([],[(0,a.tuiHintOptionsProvider)({direction:"top-right",appearance:"dark"})])],decls:8,vars:5,consts:[["focusable","false","height","100%","viewBox","-100 -100 200 200","width","100%","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["fill","white","height","400","width","400","x","-200","y","-200"],["cx","0","cy","0"],["cx","0","cy","0","r","100",1,"t-placeholder"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","","class","t-segment",3,"color","tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","",1,"t-segment",3,"tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange"]],template:function(t,e){1&t&&(r.O4$(),r.TgZ(0,"svg",0)(1,"defs")(2,"mask"),r._UZ(3,"rect",1)(4,"circle",2),r.qZA()(),r.TgZ(5,"g"),r._UZ(6,"circle",3),r.YNc(7,f,1,8,"path",4),r.qZA()()),2&t&&(r.xp6(2),r.uIk("id",e.maskId),r.xp6(2),r.uIk("r",e.radius),r.xp6(1),r.Udp("mask",e.mask),r.xp6(2),r.Q6J("tuiRepeatTimesOf",e.segments.length))},dependencies:[c.X,u.c,h.D,d.x,l.t,g.q,p.D,m.K],styles:["[_nghost-%COMP%]{position:relative;display:block;width:var(--t-size);height:var(--t-size)}[data-size=xs][_nghost-%COMP%]{--t-size: 2rem;pointer-events:none}[data-size=s][_nghost-%COMP%]{--t-size: 4rem}[data-size=m][_nghost-%COMP%]{--t-size: 9rem}[data-size=l][_nghost-%COMP%]{--t-size: 11rem}[data-size=xl][_nghost-%COMP%]{--t-size: 16rem}.t-svg[_ngcontent-%COMP%]{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%]{display:none}.t-placeholder[_ngcontent-%COMP%]{fill:var(--tui-base-03)}"],changeDetection:0}),(0,s.gn)([o.tuiPure],I.prototype,"getSum",null),(0,s.gn)([o.tuiPure],I.prototype,"getSegments",null)},2255:(t,e,n)=>{n.d(e,{K:()=>p});var i=n(20755),s=n(5393),r=n(569),o=n(81576),a=n(6642),c=n(56424),u=n(74114),h=n(84787),d=n(92425),l=n(85228),g=n(81749);let p=(()=>{var t;class e{constructor(){this.sector$=new c.X([0,0]);const t=(0,i.f3M)(i.SBq).nativeElement,e=(0,i.f3M)(s.KS),n=(0,i.f3M)(s.L1),p=(0,i.f3M)(a.TUI_ANIMATIONS_SPEED);this.sector$.pipe((0,u.G)(),(0,h.w)((([t,i])=>{const s=e.now(),r=i[0]-t[0],c=i[1]-t[1];return n.pipe((0,d.U)((t=>(0,o.tuiEaseInOutQuad)((0,o.tuiClamp)((t-s)/(0,a.tuiGetDuration)(p),0,1)))),(0,l.o)((t=>t<1),!0),(0,d.U)((e=>[t[0]+r*e,i[1]>359?i[1]:t[1]+c*e])))})),(0,o.tuiZonefree)((0,i.f3M)(i.R0b)),(0,g.R)((0,i.f3M)(o.TuiDestroyService,{self:!0}))).subscribe((([e,n])=>t.setAttribute("d",(0,r.IP)(e,n))))}set tuiPieChart(t){this.sector$.next(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["path","tuiPieChart",""]],inputs:{tuiPieChart:"tuiPieChart"},features:[i._Bn([o.TuiDestroyService])]}),e})()},10802:(t,e,n)=>{n.d(e,{i:()=>o});var i=n(20755),s=n(20332);const r=["*"];let o=(()=>{var t;class e{constructor(){this.value=[],this.size="m",this.activeItemIndex=NaN,this.activeItemIndexChange=new i.vpe}onActiveItemIndexChange(t){this.updateActiveItemIndex(t)}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-ring-chart"]],hostVars:1,hostBindings:function(t,e){2&t&&i.uIk("data-size",e.size)},inputs:{value:"value",size:"size",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},ngContentSelectors:r,decls:5,vars:4,consts:[[1,"t-content"],[1,"t-wrapper"],[1,"t-chart",3,"activeItemIndex","masked","size","value","activeItemIndexChange"],[1,"t-shield"]],template:function(t,e){1&t&&(i.F$t(),i.TgZ(0,"div",0)(1,"div",1),i.Hsn(2),i.qZA()(),i.TgZ(3,"tui-pie-chart",2),i.NdJ("activeItemIndexChange",(function(t){return e.onActiveItemIndexChange(t)})),i.qZA(),i._UZ(4,"div",3)),2&t&&(i.xp6(3),i.Q6J("activeItemIndex",e.activeItemIndex)("masked",!0)("size",e.size)("value",e.value))},dependencies:[s.W],styles:["[_nghost-%COMP%]{position:relative;display:block;width:var(--t-size);height:var(--t-size);flex-shrink:0}[data-size=xs][_nghost-%COMP%]{--t-size: 3rem}[data-size=s][_nghost-%COMP%]{--t-size: 4rem}[data-size=m][_nghost-%COMP%]{--t-size: 9rem}[data-size=l][_nghost-%COMP%]{--t-size: 11rem}[data-size=xl][_nghost-%COMP%]{--t-size: 16rem}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;font:var(--tui-font-text-m);max-height:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-02)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-xs)}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-l);font-weight:700}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:700}.t-shield[_ngcontent-%COMP%]{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}.t-chart[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),e})()},569:(t,e,n)=>{n.d(e,{IP:()=>r,iP:()=>c});var i=n(81576);const s="M 100 0 A 100 100 0 1 1 100 0 L 0 0";function r(t,e){const n=(0,i.tuiToRadians)(t),r=(0,i.tuiToRadians)(e),o=100*Math.cos(n),a=100*Math.sin(n),c=100*Math.cos(r),u=100*Math.sin(r),h=["M",o,a,"A 100 100 0",(0,i.tuiToInt)(e-t>180),1,c,u,"L 0 0"];return Number.isNaN(c)?s:h.join(" ")}function o(t,e,n,i=!1,s=.2){const r=e||t,o=n||t,a=function(t,e){const n=e[0]-t[0],i=e[1]-t[1];return Math.atan2(i,n)}(r,o)+(i?Math.PI:0),c=function(t,e){const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n**2+i**2)}(r,o)*s;return[t[0]+Math.cos(a)*c,t[1]+Math.sin(a)*c]}const a=500;function c(t,e,n){return n?function(t,e,n){const[i,s]=o(t[e-1],t[e-2],t[e],!1,n),[r,a]=o(t[e],t[e-1],t[e+1],!0,n);return`C ${i},${s} ${r},${a} ${t[e][0]},${t[e][1]}`}(t,e,n/a):`L ${[t[e][0],t[e][1]]}`}},10882:(t,e,n)=>{n.d(e,{Fb:()=>o,UR:()=>s,bM:()=>r});var i=n(81576);const s={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,i.tuiCreateToken)(s);function o(t){return(0,i.tuiProvideOptions)(r,t,s)}},61386:(t,e,n)=>{n.d(e,{E:()=>u});var i=n(20755),s=n(93517),r=n(81576),o=n(6642),a=n(92425),c=n(10882);let u=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(c.bM),this.format=(0,i.f3M)(o.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,a.U)((i=>{const a=(0,s.$v)(t,this.options.sign),c=(0,s.BP)(e),u=(0,o.tuiFormatNumber)(Math.abs(t),{...i,precision:Number.isNaN(i.precision)?2:i.precision}),h=c?.length>1||"right"===n?r.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${a}${u}${h}${c}`:`${a}${c}${h}${u}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=i.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()}}]);