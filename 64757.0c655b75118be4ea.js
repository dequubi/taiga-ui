(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64757],{64757:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var i,s=n(84911),l=n(4594),o=n(66094),a=n(7233),r=n(20764),c=n(75331),u=n(60902),p=n(51160),g=n(35548);const m={IT:"IT",HR:"HR",HeadOffice:"Heads",Delivery:"Delivery",Admin:"Administrative",Business:"Business lines",MB:"Business technologies",Finance:"Corporate Finance",Payment:"Payment Systems",Operating:"Operating service lines",Marketing:"Media-marketing",Security:"Security Service"};class h{constructor(){this.items=Object.values(m),this.filters$=new u.X([])}get model$(){return this.filters$.pipe((0,p.U)((e=>e.length===this.items.length?[]:e)))}get buttonAppearance$(){return this.filters$.pipe((0,p.U)((e=>e.length===this.items.length?"whiteblock-active":"whiteblock")))}onModelChange(e){this.filters$.next(e)}toggleAll(){this.filters$.next(this.items.length===this.filters$.value.length?[]:[...this.items])}}(i=h).ɵfac=function(e){return new(e||i)},i.ɵcmp=g.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[g.jDz],decls:8,vars:7,consts:[[1,"tui-space_bottom-4"],[1,"filters-with-all"],["size","m","tuiButton","","type","button",1,"item","tui-space_right-1",3,"appearance","click"],[1,"item",3,"items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(g.TgZ(0,"div",0),g._uU(1,"Choose a department:"),g.qZA(),g.TgZ(2,"div",1)(3,"button",2),g.NdJ("click",(function(){return t.toggleAll()})),g.ALo(4,"async"),g._uU(5," All "),g.qZA(),g.TgZ(6,"tui-filter",3),g.NdJ("ngModelChange",(function(e){return t.onModelChange(e)})),g.ALo(7,"async"),g.qZA()()),2&e&&(g.xp6(3),g.Q6J("appearance",g.lcZ(4,3,t.buttonAppearance$)||""),g.xp6(3),g.Q6J("items",t.items)("ngModel",g.lcZ(7,5,t.model$)))},dependencies:[r.TuiButton,l.Ov,c.TuiFilterComponent,o.u5,o.JJ,o.On],styles:[".item[_ngcontent-%COMP%]{display:inline}"],changeDetection:0}),(0,s.gn)([a.tuiPure],h.prototype,"model$",null),(0,s.gn)([a.tuiPure],h.prototype,"buttonAppearance$",null);const d=h}}]);