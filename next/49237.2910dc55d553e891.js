(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49237],{21778:(t,e,n)=>{n.d(e,{Kx:()=>l,ch:()=>h,I3:()=>P.I,yj:()=>P.y,dn:()=>N.dn,Cc:()=>N.Cc,Vl:()=>z,R9:()=>Q,Wb:()=>S.W,yc:()=>U.y,Bl:()=>y.B,lk:()=>C,DZ:()=>I.D,eO:()=>O,YX:()=>w.Y,LU:()=>_.L,PQ:()=>k.P,gJ:()=>D.g,F5:()=>B,c4:()=>x.c,WT:()=>it,m2:()=>J.m,yS:()=>M.y,jY:()=>A.j,Kt:()=>Z.K,Ws:()=>J.W,EE:()=>F.E,Nx:()=>E.N,fu:()=>L.f,AS:()=>p,Jz:()=>N.Jz,PT:()=>Y});var i=n(4594),r=n(35548),o=n(97377),s=n(48266),a=n(5136),c=n(40970),u=n(57218);const l={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},h=(0,u.tuiCreateToken)(l);function p(t){return(0,u.tuiProvideOptions)(h,t,l)}var d=n(34598),g=n(65332),f=n(16589);function T(t,e){if(1&t&&(r.ynx(0),r._uU(1),r.BQk()),2&t){const t=e.polymorpheusOutlet;r.xp6(1),r.hij(" ",t," ")}}const m=function(t,e){return{$implicit:t,index:e}};function b(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"tui-tile")(1,"div",2)(2,"div",3),r._UZ(3,"tui-svg",4),r.YNc(4,T,2,1,"ng-container",5),r.qZA(),r.TgZ(5,"button",6),r.NdJ("click",(function(){const e=r.CHM(t).$implicit,n=r.oxw();return r.KtG(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=r.CHM(t).index,n=r.oxw();return r.KtG(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=r.CHM(t).index,n=r.oxw();return r.KtG(n.move(e,-1))})),r._uU(6),r.ALo(7,"async"),r.qZA()()()}if(2&t){const t=e.$implicit,n=e.index,i=r.oxw();r.Udp("order",i.order.get(n)),r.xp6(3),r.Q6J("src",i.options.icons.drag),r.xp6(1),r.Q6J("polymorpheusOutlet",i.content)("polymorpheusOutletContext",r.WLB(11,m,t,n)),r.xp6(1),r.ekj("t-button_hidden",!i.isEnabled(t)),r.Q6J("iconLeft",i.getIcon(t)),r.xp6(1),r.hij(" ",r.lcZ(7,9,i.showHideText$)," ")}}let O=(()=>{var t;class e{constructor(){this.dragging=!1,this.enabled=[],this.itemsChange=new r.vpe,this.enabledChange=new r.vpe,this.order=new Map,this.unsortedItems=[],this.options=(0,r.f3M)(h),this.showHideText$=(0,r.f3M)(o.s),this.content=({$implicit:t})=>String(t)}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){const n=this.order.get(t)??t;if(!n&&e<0||n===this.unsortedItems.length-1&&e>0)return;const i=n+e,r=Array.from(this.order.values()).findIndex((t=>t===i));this.order.set(t,i),this.order.set(r,n),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{t[this.order.get(n)??n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&r.NdJ("focusout.stop",(function(){return e.noop()}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,r.evT)},inputs:{enabled:"enabled",items:"items",content:"content"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},standalone:!0,features:[r.jDz],decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],[3,"order",4,"ngFor","ngForOf"],[1,"t-item"],["tuiTileHandle","",1,"t-draggable"],[1,"t-icon",3,"src"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"iconLeft","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(r.TgZ(0,"tui-tiles",0),r.NdJ("orderChange",(function(t){return e.order=t})),r.YNc(1,b,8,14,"tui-tile",1),r.qZA()),2&t&&(r.Q6J("order",e.order),r.xp6(1),r.Q6J("ngForOf",e.unsortedItems))},dependencies:[a.TuiTilesModule,d.U,g.D,f.$,i.sg,s.TuiSvgComponent,s.TuiButtonDirective,i.Ov,c.wq,c.Li],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})();var y=n(99829),v=n(51160),x=n(86561);let C=(()=>{var t;class e{constructor(){this.table=(0,r.f3M)(x.c),this.directionOrderChange=this.table.directionChange.pipe((0,v.U)((t=>1===t?"asc":"desc")))}set directionOrder(t){this.table.direction="asc"===t?1:-1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=r.lG2({type:t,selectors:[["table","tuiTable","","tuiDirectionOrder",""]],inputs:{directionOrder:"directionOrder"},outputs:{directionOrderChange:"directionOrderChange"},standalone:!0}),e})();var I=n(25138),w=n(87569),_=n(95231),k=n(24242),D=n(23014),E=n(56250),M=n(90070),P=n(98054),S=n(52473),U=n(26743),A=n(84155);let B=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=r.oAB({type:t}),t.ɵinj=r.cJS({imports:[A.j]}),e})();var N=n(83527),Z=n(23772),J=n(93098),F=n(4855),L=n(64419);const z={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},Q=(0,u.tuiCreateToken)(z);function Y(t){return(0,u.tuiProvideOptions)(Q,t,z)}var G=n(99931),$=n(88635);function R(t,e){if(1&t&&(r.ynx(0),r._uU(1),r.TgZ(2,"strong",6),r._uU(3),r.qZA(),r.BQk()),2&t){const t=r.oxw().ngIf,e=r.oxw();r.xp6(1),r.hij(" ",t.pages," "),r.xp6(2),r.Oqu(e.pages)}}function j(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",7),r.NdJ("tuiDropdownOpenChange",(function(e){r.CHM(t);const n=r.oxw(2);return r.KtG(n.open=e)})),r.TgZ(1,"strong"),r._uU(2),r.qZA()()}if(2&t){r.oxw();const t=r.MAs(9),e=r.oxw();r.Q6J("tuiDropdown",t)("tuiDropdownOpen",e.open),r.xp6(2),r.AsE("",e.start+1,"–",e.end,"")}}function q(t,e){1&t&&(r.TgZ(0,"strong"),r._uU(1,"0 - 0"),r.qZA())}function H(t,e){if(1&t&&(r.ynx(0),r._uU(1),r.BQk()),2&t){const t=e.polymorpheusOutlet;r.xp6(1),r.hij(" ",t," ")}}function K(t,e){if(1&t&&r._UZ(0,"tui-svg",14),2&t){const t=r.oxw(4);r.Q6J("src",t.commonIcons.check)}}function W(t,e){1&t&&r._UZ(0,"span",15)}const X=function(t,e){return{$implicit:t,total:e}};function V(t,e){if(1&t){const t=r.EpF();r.ynx(0),r.TgZ(1,"button",10),r.NdJ("click",(function(){const e=r.CHM(t).$implicit,n=r.oxw(3);return r.KtG(n.onItem(e))})),r.YNc(2,H,2,1,"ng-container",11),r.YNc(3,K,1,1,"tui-svg",12),r.YNc(4,W,1,0,"ng-template",null,13,r.W1O),r.qZA(),r.BQk()}if(2&t){const t=e.$implicit,n=r.MAs(5),i=r.oxw(3);r.xp6(2),r.Q6J("polymorpheusOutlet",i.sizeOptionContent)("polymorpheusOutletContext",r.WLB(4,X,t,i.total)),r.xp6(1),r.Q6J("ngIf",t===i.size)("ngIfElse",n)}}function tt(t,e){if(1&t&&(r.TgZ(0,"tui-data-list",8),r.YNc(1,V,6,7,"ng-container",9),r.qZA()),2&t){const t=r.oxw(2);r.xp6(1),r.Q6J("ngForOf",t.items)}}function et(t,e){if(1&t){const t=r.EpF();r.ynx(0),r.TgZ(1,"button",16),r.NdJ("click",(function(){r.CHM(t);const e=r.oxw(2);return r.KtG(e.back())})),r._uU(2),r.qZA(),r.TgZ(3,"button",17),r.NdJ("click",(function(){r.CHM(t);const e=r.oxw(2);return r.KtG(e.forth())})),r._uU(4),r.qZA(),r.BQk()}if(2&t){const t=e.ngIf,n=r.oxw(2);r.xp6(1),r.Q6J("disabled",n.leftDisabled)("iconLeft",n.icons.decrement),r.xp6(1),r.hij(" ",t[0]," "),r.xp6(1),r.Q6J("disabled",n.rightDisabled)("iconLeft",n.icons.increment),r.xp6(1),r.hij(" ",t[1]," ")}}function nt(t,e){if(1&t&&(r.ynx(0),r.TgZ(1,"span",1),r.YNc(2,R,4,2,"ng-container",0),r.qZA(),r.TgZ(3,"span",2),r._uU(4),r.YNc(5,j,3,4,"button",3),r.YNc(6,q,2,0,"ng-template",null,4,r.W1O),r.YNc(8,tt,2,1,"ng-template",null,5,r.W1O),r._uU(10),r.TgZ(11,"strong",6),r._uU(12),r.qZA()(),r.YNc(13,et,5,6,"ng-container",0),r.ALo(14,"async"),r.BQk()),2&t){const t=e.ngIf,n=r.MAs(7),i=r.oxw();r.xp6(2),r.Q6J("ngIf",i.showPages),r.xp6(2),r.hij(" ",t.linesPerPage," "),r.xp6(1),r.Q6J("ngIf",0!==i.total)("ngIfElse",n),r.xp6(5),r.hij(" ",t.of," "),r.xp6(2),r.Oqu(i.total),r.xp6(1),r.Q6J("ngIf",r.lcZ(14,7,i.spinTexts$))}}let it=(()=>{var t;class e{constructor(){this.options=(0,r.f3M)(Q),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.paginationChange=new r.vpe,this.open=!1,this.icons=(0,r.f3M)(s.TUI_SPIN_ICONS),this.spinTexts$=(0,r.f3M)(s.TUI_SPIN_TEXTS),this.texts$=(0,r.f3M)(o.J),this.commonIcons=(0,r.f3M)(s.TUI_COMMON_ICONS)}onItem(t){const{start:e}=this;this.size=t,this.open=!1,this.page=Math.floor(e/this.size),this.paginationChange.emit(this.pagination)}get pages(){return Math.ceil(this.total/this.size)}get showPages(){return this.options.showPages}get sizeOptionContent(){return this.options.sizeOptionContent}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}back(){this.page--,this.paginationChange.emit(this.pagination)}forth(){this.page++,this.paginationChange.emit(this.pagination)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{paginationChange:"paginationChange"},standalone:!0,features:[r.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange",4,"ngIf","ngIfElse"],["zeroTotal",""],["content",""],[1,"t-strong"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","iconLeft","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","iconLeft","click"]],template:function(t,e){1&t&&(r.YNc(0,nt,15,9,"ng-container",0),r.ALo(1,"async")),2&t&&r.Q6J("ngIf",r.lcZ(1,1,e.texts$))},dependencies:[i.O5,i.Ov,s.TuiLinkDirective,s.TuiDropdownDirective,s.TuiDataList,G.q,$.v,c.wq,c.Li,i.sg,s.TuiDropdownOpenDirective,s.TuiSvgComponent,s.TuiButtonDirective],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})()},24242:(t,e,n)=>{n.d(e,{P:()=>l});var i=n(35548),r=n(57218),o=n(75133),s=n(13591),a=n(51160),c=n(23014),u=n(86561);let l=(()=>{var t;class e{constructor(){this.sortables=r.EMPTY_QUERY,this.table=(0,i.f3M)(u.c),this.tuiSortByChange=this.table.sorterChange.pipe((0,o.g)(0),(0,s.h)((()=>!!this.sortables.length)),(0,a.U)((t=>this.getKey(t)))),this.tuiSortBy=null}set sortBy(t){this.tuiSortBy=t,this.checkSortables()}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){return this.sortables.find((e=>e.sorter===t))?.key||null}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,c.g,5),2&t){let t;i.iGM(t=i.CRH())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"},standalone:!0}),e})()},23014:(t,e,n)=>{n.d(e,{g:()=>a});var i=n(35548),r=n(93098),o=n(24242),s=n(86561);let a=(()=>{var t;class e{constructor(){this.table=(0,i.f3M)(s.c),this.th=(0,i.f3M)(r.W),this.sortBy=(0,i.f3M)((0,i.Gpc)((()=>o.P))),this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["th","tuiTh","","tuiSortable",""]],standalone:!0}),e})()},56250:(t,e,n)=>{n.d(e,{N:()=>s});var i=n(35548),r=n(85400),o=n(98054);let s=(()=>{var t;class e{constructor(){this.stuck$=(0,i.f3M)(o.I)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["thead","tuiThead",""]],hostBindings:function(t,e){1&t&&i.NdJ("$.class._stuck",(function(){return e.stuck$}))},standalone:!0,features:[i._Bn([o.y,r.te,{provide:r.RL,useValue:"0px 10000px 10000px 10000px"}])]}),e})()},38471:(t,e,n)=>{n.d(e,{Y:()=>i});class i{}},4210:(t,e,n)=>{n.d(e,{C:()=>s});var i=n(57218),r=n(38471),o=n(35548);let s=(()=>{var t;class e extends r.Y{constructor(){super(...arguments),this.filter=i.TUI_TRUE_HANDLER}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=o.n5z(t)))(n||t)}}(),t.ɵdir=o.lG2({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},standalone:!0,features:[o._Bn([(0,i.tuiProvide)(r.Y,t)]),o.qOj]}),e})()},40979:(t,e,n)=>{n.d(e,{X:()=>p});var i=n(35548),r=n(66094),o=n(21778),s=n(49730),a=n(19403),c=n(20511),u=n(24815),l=n(38471),h=n(11102);let p=(()=>{var t;class e{constructor(){this.head=(0,i.f3M)(o.DZ,{optional:!0}),this.delegate=(0,i.f3M)(l.Y),this.control=(0,i.f3M)(r.a5),this.refresh$=(0,s.P)((()=>(0,a.T)(this.control.valueChanges||c.E,this.control.statusChanges?.pipe((0,u.x)())||c.E))),this.filters=(0,i.f3M)(h.w)}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){return this.tuiTableFilter||this.head?.tuiHead}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"},standalone:!0}),e})()},11102:(t,e,n)=>{n.d(e,{w:()=>l});var i=n(20982),r=n(275),o=n(60042),s=n(905),a=n(51160),c=n(19403),u=n(35548);let l=(()=>{var t;class e{constructor(){this.refresh$=new i.t(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,r.w)(o.y),(0,s.O)(null),(0,a.U)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,c.T)(...this.filters.map((({refresh$:t})=>t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=u.lG2({type:t,selectors:[["","tuiTableFilters",""]],standalone:!0}),e})()},60431:(t,e,n)=>{n.d(e,{h:()=>o});var i=n(35548),r=n(11102);let o=(()=>{var t;class e{constructor(){this.filters=(0,i.f3M)(r.w)}transform(t){return this.filters.filter(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=i.Yjl({name:"tuiTableFilters",type:t,pure:!0,standalone:!0}),e})()},49237:(t,e,n)=>{n.r(e),n.d(e,{AbstractTuiTableFilter:()=>r.Y,TUI_REORDER_DEFAULT_OPTIONS:()=>i.Kx,TUI_REORDER_OPTIONS:()=>i.ch,TUI_STUCK:()=>i.I3,TUI_STUCK_PROVIDER:()=>i.yj,TUI_TABLE_DEFAULT_OPTIONS:()=>i.dn,TUI_TABLE_OPTIONS:()=>i.Cc,TUI_TABLE_PAGINATION_DEFAULT_OPTIONS:()=>i.Vl,TUI_TABLE_PAGINATION_OPTIONS:()=>i.R9,TUI_TABLE_PAGINATION_TEXTS:()=>h.J,TUI_TABLE_PROVIDER:()=>i.Wb,TUI_TABLE_PROVIDERS:()=>i.yc,TUI_TABLE_SHOW_HIDE_MESSAGE:()=>h.s,TuiCellDirective:()=>i.Bl,TuiDirectionOrderDirective:()=>i.lk,TuiGenericFilterDirective:()=>o.C,TuiHeadDirective:()=>i.DZ,TuiReorderComponent:()=>i.eO,TuiResizedDirective:()=>i.YX,TuiRowDirective:()=>i.LU,TuiSortByDirective:()=>i.PQ,TuiSortableDirective:()=>i.gJ,TuiTable:()=>i.F5,TuiTableDirective:()=>i.c4,TuiTableFilterDirective:()=>s.X,TuiTableFilters:()=>u,TuiTableFiltersDirective:()=>a.w,TuiTableFiltersPipe:()=>l.h,TuiTablePaginationComponent:()=>i.WT,TuiTableSortKeyException:()=>i.m2,TuiTableSortPipe:()=>i.yS,TuiTbodyComponent:()=>i.jY,TuiTdComponent:()=>i.Kt,TuiThComponent:()=>i.Ws,TuiThGroupComponent:()=>i.EE,TuiTheadDirective:()=>i.Nx,TuiTrComponent:()=>i.fu,tuiReorderOptionsProvider:()=>i.AS,tuiTableOptionsProvider:()=>i.Jz,tuiTablePaginationOptionsProvider:()=>i.PT});var i=n(21778),r=n(38471),o=n(4210),s=n(40979),a=n(11102),c=n(35548);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({}),e})();var l=n(60431),h=n(97377)},97377:(t,e,n)=>{n.d(e,{J:()=>s,s:()=>o});var i=n(57218),r=n(75653);const o=(0,i.tuiCreateTokenFromFactory)((0,r.vv)("showHideText")),s=(0,i.tuiCreateTokenFromFactory)((0,r.vv)("paginationTexts"))}}]);