(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97774],{97774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(4594),i=n(66094),s=n(9627),r=n(61887),o=n(12569),l=n(29722),c=n(2004),u=n(13448),m=n(13591),p=n(275),h=n(905),d=n(97318),f=n(75133),g=n(35548),w=n(81557),v=n(12723),C=n(23199),x=n(55802),T=n(70588),A=n(10188);function L(e,t){if(1&e&&(g._UZ(0,"tui-data-list-wrapper",4),g.ALo(1,"tuiHideSelected")),2&e){const e=g.oxw().tuiLet;g.oxw();const t=g.MAs(5);g.Q6J("itemContent",t)("items",g.lcZ(1,2,e))}}function b(e,t){if(1&e){const e=g.EpF();g.TgZ(0,"tui-multi-select",2),g.NdJ("searchChange",(function(t){g.CHM(e);const n=g.oxw();return g.KtG(n.onSearchChange(t))})),g._uU(1," Rock Star Frontend Developers "),g.YNc(2,L,2,4,"tui-data-list-wrapper",3),g.qZA()}if(2&e){const e=g.oxw();g.Q6J("formControl",e.testValue)("rows",1)("tuiTextfieldLabelOutside",!0)}}function Z(e,t){if(1&e&&(g.TgZ(0,"div",5),g._UZ(1,"tui-avatar",6),g.ALo(2,"tuiInitials"),g._uU(3),g.qZA()),2&e){const e=t.$implicit;g.xp6(1),g.Q6J("src",e.avatarUrl||g.lcZ(2,2,e.toString())),g.xp6(2),g.hij(" ",e," ")}}class y{constructor(e,t,n=null){this.firstName=e,this.lastName=t,this.avatarUrl=n}toString(){return`${this.firstName} ${this.lastName}`}}const O=[new y("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new y("Alex","Inkin",s.Ll`/images/avatar.jpg`),new y("Dmitriy","Demenskiy"),new y("Evgeniy","Mamaev"),new y("Ivan","Ishmametiev"),new y("Igor","Katsuba"),new y("Yulia","Tsareva")],U=(()=>{var e;class t{constructor(){this.search$=new u.x,this.items$=this.search$.pipe((0,m.h)((e=>null!==e)),(0,p.w)((e=>this.serverRequest(e).pipe((0,h.O)(null)))),(0,h.O)(O)),this.testValue=new i.NI([O[0]])}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=O.filter((t=>(0,r.TUI_DEFAULT_MATCHER)(t,e||"")));return(0,d.of)(t).pipe((0,f.g)(1e3*Math.random()+500))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=g.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent2",features:[g.jDz],decls:6,vars:3,consts:[["placeholder","Find by ...",3,"formControl","rows","tuiTextfieldLabelOutside","searchChange",4,"tuiLet"],["itemContent",""],["placeholder","Find by ...",3,"formControl","rows","tuiTextfieldLabelOutside","searchChange"],[3,"itemContent","items",4,"tuiDataList"],[3,"itemContent","items"],[1,"template"],["size","xs",1,"avatar",3,"src"]],template:function(e,t){1&e&&(g.TgZ(0,"label"),g._uU(1," Type a name: "),g.YNc(2,b,3,3,"tui-multi-select",0),g.ALo(3,"async"),g.qZA(),g.YNc(4,Z,4,4,"ng-template",null,1,g.W1O)),2&e&&(g.xp6(2),g.Q6J("tuiLet",g.lcZ(3,1,t.items$)))},dependencies:[c.lmA,w.V,v.b,C.g,x.e,T.E,r.TuiLet,a.Ov,i.UX,i.JJ,i.oH,c.cnw,A.x,l.TuiAvatar,o.TuiInitialsPipe],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 -.25rem}tui-multi-select[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),t})()}}]);