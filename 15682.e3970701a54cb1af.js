(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15682],{15682:(t,i,o)=>{o.r(i),o.d(i,{default:()=>h});var n=o(4594),e=o(35548),r=o(20764),c=o(75331);function a(t,i){if(1&t&&(e.TgZ(0,"th",4),e._uU(1),e.qZA()),2&t){const t=i.$implicit;e.xp6(1),e.hij(" ",t," ")}}function u(t,i){if(1&t&&(e.TgZ(0,"td",9),e._uU(1),e.qZA()),2&t){const t=i.$implicit;e.xp6(1),e.hij(" ",t," ")}}function s(t,i){if(1&t){const t=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",(function(){const i=e.CHM(t).$implicit,o=e.oxw(2).$implicit,n=e.MAs(1);return e.oxw().printToConsole(i.title,o),e.KtG(n.toggle(!1))})),e._uU(1),e._UZ(2,"tui-icon",15),e.qZA()}if(2&t){const t=i.$implicit;e.xp6(1),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("icon",t.iconName)}}function l(t,i){if(1&t&&(e.TgZ(0,"button",17),e._uU(1),e.qZA()),2&t){const t=i.$implicit;e.xp6(1),e.hij(" ",t," ")}}function p(t,i){if(1&t&&(e.TgZ(0,"tui-data-list"),e.YNc(1,l,2,1,"button",16),e.qZA()),2&t){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.moreOptions)}}function d(t,i){if(1&t&&(e.TgZ(0,"tui-data-list",10),e.YNc(1,s,3,2,"button",11),e.TgZ(2,"button",12),e._uU(3," More "),e.qZA()(),e.YNc(4,p,2,1,"ng-template",null,13,e.W1O)),2&t){const t=e.MAs(5),i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.menuItems),e.xp6(1),e.Q6J("tuiDropdown",t)}}function g(t,i){if(1&t&&(e.TgZ(0,"tr",5,6),e.YNc(2,u,2,1,"td",7),e.YNc(3,d,6,2,"ng-template",null,8,e.W1O),e.qZA()),2&t){const t=i.$implicit,o=e.MAs(4),n=e.oxw();e.Q6J("tuiDropdown",o),e.xp6(2),e.Q6J("ngForOf",n.getObjectValues(t))}}const h=(()=>{var t;class i{constructor(){this.dialogs=(0,e.f3M)(r.TuiDialogService),this.menuItems=[{title:"View",iconName:"@tui.eye"},{title:"Copy",iconName:"@tui.copy"},{title:"Delete",iconName:"@tui.trash"},{title:"Move",iconName:"@tui.folder"}],this.tableData=[{character:"Ross Geller",actor:"David Schwimmer"},{character:"Chandler Bing",actor:"Matthew Perry"},{character:"Joey Tribbiani",actor:"Matt LeBlanc"},{character:"Phoebe Buffay",actor:"Lisa Kudrow"},{character:"Monica Geller",actor:"Courteney Cox"},{character:"Rachel Green",actor:"Jennifer Aniston"}],this.tableColumns=Object.keys(this.tableData[0]),this.moreOptions=["Option 1","Option 2","Option 3"],this.getObjectValues=t=>Object.values(t)}printToConsole(t,i){this.dialogs.open(`[${t}]: ${JSON.stringify(i)}`).subscribe()}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=e.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent2",features:[e.jDz],decls:7,vars:2,consts:[[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_hover_disabled"],["class","tui-table__th",4,"ngFor","ngForOf"],["tuiDropdownContext","","class","tui-table__tr",3,"tuiDropdown",4,"ngFor","ngForOf"],[1,"tui-table__th"],["tuiDropdownContext","",1,"tui-table__tr",3,"tuiDropdown"],["dropdown","tuiDropdown"],["class","tui-table__td",4,"ngFor","ngForOf"],["contextMenu",""],[1,"tui-table__td"],["role","menu","tuiDataListDropdownManager","",1,"context-menu"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["iconRight","@tui.chevron-right","tuiDropdownAlign","right","tuiDropdownSided","","tuiOption","",3,"tuiDropdown"],["nestedMenu",""],["tuiOption","",3,"click"],[1,"icon",3,"icon"],["tuiOption","",4,"ngFor","ngForOf"],["tuiOption",""]],template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"Right-click any table row."),e.qZA(),e.TgZ(2,"table",0)(3,"tbody")(4,"tr",1),e.YNc(5,a,2,1,"th",2),e.qZA(),e.YNc(6,g,5,2,"tr",3),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",i.tableColumns),e.xp6(1),e.Q6J("ngForOf",i.tableData))},dependencies:[n.sg,r.TuiDropdownContextDirective,r.TuiDropdownDirective,c.TuiDataListDropdownManagerDirective,r.TuiOptionComponent,r.TuiIconComponent,r.TuiDropdownPositionSidedDirective,r.TuiDropdownOptionsDirective,r.TuiDataListComponent],styles:[".context-menu[_ngcontent-%COMP%]{width:8rem}.icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border:.25rem solid transparent}"],changeDetection:0}),i})()}}]);