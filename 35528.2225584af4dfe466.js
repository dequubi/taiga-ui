(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35528],{35528:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(4594),o=t(61887),h=t(12569),r=t(35548);function d(e,n){if(1&e&&(r.TgZ(0,"div"),r._uU(1),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.hij("Chosen dates: ",e.value,"")}}const i=["var(--tui-primary)","var(--tui-info-fill)"],l=["var(--tui-success-fill)"],m=(()=>{var e;class n{constructor(){this.value=null,this.firstMonth=o.TuiMonth.currentLocal(),this.middleMonth=o.TuiMonth.currentLocal().append({month:1}),this.lastMonth=o.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=e=>e.day%2==0?i:l}onDayClick(e){this.value?.isSingleDay||(this.value=new o.TuiDayRange(e,e)),this.value=o.TuiDayRange.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return(e=n).ɵfac=function(n){return new(n||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[r.jDz],decls:5,vars:20,consts:[[1,"wrapper"],[3,"markerHandler","maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(e,n){1&e&&(r.TgZ(0,"div",0)(1,"tui-calendar",1),r.NdJ("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeFirst(e)})),r.qZA(),r.TgZ(2,"tui-calendar",2),r.NdJ("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeMiddle(e)})),r.qZA(),r.TgZ(3,"tui-calendar",3),r.NdJ("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeLast(e)})),r.qZA()(),r.YNc(4,d,2,1,"div",4)),2&e&&(r.xp6(1),r.Q6J("markerHandler",n.markerHandler)("maxViewedMonth",n.firstMonth)("month",n.firstMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),r.xp6(1),r.Q6J("markerHandler",n.markerHandler)("maxViewedMonth",n.middleMonth)("minViewedMonth",n.middleMonth)("month",n.middleMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),r.xp6(1),r.Q6J("markerHandler",n.markerHandler)("minViewedMonth",n.lastMonth)("month",n.lastMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),r.xp6(1),r.Q6J("ngIf",n.value))},dependencies:[a.O5,h.TuiCalendarComponent],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),n})()}}]);