(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89609],{89609:(t,e,i)=>{i.r(e),i.d(e,{default:()=>D});var s=i(4594),n=i(66094),a=i(9627),r=i(26856),o=i(61887),u=i(12569),c=i(29722),l=i(2004),g=i(51160),m=i(35548),p=i(70705),h=i(7911),f=i(139),d=i(53958),v=i(34566);const w=["avatar"];function T(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"button",13),m.NdJ("click",(function(){const e=m.CHM(t).$implicit,i=m.oxw(4);return m.KtG(i.onSelected(e))})),m._uU(1),m.TgZ(2,"tui-avatar",14),m._uU(3),m.ALo(4,"tuiInitials"),m.qZA()()}if(2&t){const t=e.$implicit;m.Q6J("value",t.toString()),m.xp6(1),m.hij(" ",t," "),m.xp6(1),m.Q6J("src",t.avatarUrl),m.xp6(1),m.hij(" ",m.lcZ(4,4,t.toString())," ")}}function C(t,e){if(1&t&&(m.TgZ(0,"tui-data-list"),m.YNc(1,T,5,6,"button",12),m.qZA()),2&t){const t=m.oxw(2).tuiLet;m.xp6(1),m.Q6J("ngForOf",t)}}function U(t,e){1&t&&(m.ynx(0),m.YNc(1,C,2,1,"tui-data-list",11),m.BQk())}function x(t,e){if(1&t&&(m.TgZ(0,"tui-input",8),m._uU(1," User "),m._UZ(2,"input",9),m.YNc(3,U,2,0,"ng-container",10),m.qZA()),2&t){const t=e.tuiLet,i=m.oxw();m.Q6J("tuiTextfieldCustomContent",i.content),m.xp6(3),m.Q6J("ngIf",null==t?null:t.length)}}function b(t,e){if(1&t&&(m.TgZ(0,"tui-avatar",16),m._uU(1),m.ALo(2,"tuiInitials"),m.qZA()),2&t){const t=m.oxw(2);m.Q6J("src",t.lastUser.avatarUrl),m.xp6(1),m.hij(" ",m.lcZ(2,2,t.lastUser.toString())," ")}}function L(t,e){if(1&t&&m.YNc(0,b,3,4,"tui-avatar",15),2&t){const t=m.oxw();m.Q6J("ngIf",t.lastUser)}}function Z(t,e){if(1&t&&m._UZ(0,"tui-data-list-wrapper",17),2&t){const t=m.oxw(),e=m.MAs(9);m.Q6J("itemContent",e)("items",t.accounts)}}function A(t,e){if(1&t&&(m.TgZ(0,"div"),m._uU(1),m.TgZ(2,"span"),m._uU(3),m.ALo(4,"async"),m.ALo(5,"tuiAmount"),m.qZA()()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.name," "),m.xp6(2),m.Oqu(m.lcZ(4,2,m.xi3(5,4,t.amount,"RUB")))}}class N{constructor(t,e,i=null,s=[],n=""){this.firstName=t,this.lastName=e,this.avatarUrl=i,this.accounts=s,this.card=n}toString(){return`${this.firstName} ${this.lastName}`}}class y{constructor(t,e,i,s,n){this.id=t,this.name=e,this.amount=i,this.currency=s,this.cardSvg=n}toString(){return this.name}}const I=[new y("1","RUB",24876.55,r.TuiCurrency.Ruble,"https://ng-web-apis.github.io/dist/assets/images/common.svg"),new y("2","USD",335,r.TuiCurrency.Dollar,"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg")],S=[new y("3","EUR",1e4,r.TuiCurrency.Euro,"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg"),new y("4","PND",100,r.TuiCurrency.Pound,"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg")],_=[new N("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368",I),new N("Alex","Inkin",a.Ll`/images/avatar.jpg`,S,"1234123412341234"),new N("Dmitriy","Demenskiy"),new N("Evgeniy","Mamaev"),new N("Ivan","Ishmametiev"),new N("Igor","Katsuba"),new N("Yulia","Tsareva")],D=(()=>{var t;class e{constructor(){this.user=new n.NI(""),this.testForm=new n.cw({user:this.user,account:new n.NI(""),card:new n.NI("")}),this.lastUser=null,this.users$=(0,o.tuiControlValue)(this.user).pipe((0,g.U)((t=>{const e=_.filter((e=>(0,o.TUI_DEFAULT_MATCHER)(e,t)));return 1!==e.length||String(e[0]).toLowerCase()!==t.toLowerCase()?e:(this.onSelected(e[0]),[])})))}get card(){const t=this.testForm.get("card").value;if((t?.length??0)<7)return null;switch(t?.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}get isUserSelected(){return null!==this.lastUser&&this.lastUser.toString().toLowerCase()===this.testForm.get("user")?.value?.toLowerCase()}get content(){return this.avatar&&this.isUserSelected?this.avatar:""}get accounts(){return this.isUserSelected&&this.lastUser?.accounts||[]}onSelected(t){this.lastUser=t,this.testForm.get("card").setValue(t.card)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=m.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&m.Gf(w,5),2&t){let t;m.iGM(t=m.CRH())&&(e.avatar=t.first)}},standalone:!0,exportAs:"ExampleComponent4",features:[m.jDz],decls:14,vars:5,consts:[[1,"container",3,"formGroup"],["formControlName","user",3,"tuiTextfieldCustomContent",4,"tuiLet"],["avatar",""],["formControlName","account",1,"tui-space_vertical-5"],[3,"itemContent","items",4,"tuiDataList"],["accountContent",""],["tuiLabel",""],["formControlName","card","tuiInputCard","","tuiTextfield","",3,"icon"],["formControlName","user",3,"tuiTextfieldCustomContent"],["placeholder","Type your name or surname","tuiTextfieldLegacy",""],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"value","click"],["size","xs",3,"src"],["size","s",3,"src",4,"ngIf"],["size","s",3,"src"],[3,"itemContent","items"]],template:function(t,e){1&t&&(m.TgZ(0,"form",0),m.YNc(1,x,4,2,"tui-input",1),m.ALo(2,"async"),m.YNc(3,L,1,1,"ng-template",null,2,m.W1O),m.TgZ(5,"tui-input",3),m._uU(6," Account "),m.YNc(7,Z,1,2,"tui-data-list-wrapper",4),m.YNc(8,A,6,7,"ng-template",null,5,m.W1O),m.qZA(),m.TgZ(10,"tui-textfield")(11,"label",6),m._uU(12,"Card number"),m.qZA(),m._UZ(13,"input",7),m.qZA()()),2&t&&(m.Q6J("formGroup",e.testForm),m.xp6(1),m.Q6J("tuiLet",m.lcZ(2,3,e.users$)),m.xp6(12),m.Q6J("icon",e.card))},dependencies:[n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,l.QfL,p.K,h.w,f.M,o.TuiLet,s.Ov,l.cnw,d.B,s.O5,u.TuiDataListComponent,u.TuiDataListDirective,u.TuiOption,s.sg,c.TuiAvatar,u.TuiInitialsPipe,c.TuiDataListWrapperComponent,r.TuiAmountPipe,v.T,u.TuiTextfieldComponent,u.TuiTextfieldDirective,r.TuiInputCard],styles:[".container[_ngcontent-%COMP%]{max-width:18rem}"],changeDetection:0}),e})()}}]);