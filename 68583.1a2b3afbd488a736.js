(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68583],{68583:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var o=i(4594),l=i(35548),n=i(66094),s=i(7233),r=i(20764),f=i(75331);function c(e,t){if(1&e&&l._UZ(0,"tui-file",7),2&e){const e=t.$implicit,i=l.oxw();l.Q6J("file",e)("showDelete",i.control.enabled)}}function a(e,t){if(1&e&&l._UZ(0,"tui-file",8),2&e){const e=t.$implicit,i=l.oxw();l.Q6J("file",e)("showDelete",i.control.enabled)}}function h(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-file",9),l.NdJ("remove",(function(){l.CHM(e);const t=l.oxw();return l.KtG(t.removeLoading())})),l.qZA()}if(2&e){const e=l.oxw();l.Q6J("file",e.loadingFile)("showDelete",e.control.enabled)}}function u(e,t){if(1&e&&l._UZ(0,"a",10),2&e){const e=l.oxw();l.Q6J("file",e.fileWithLink)("href",e.fileWithLink.src,l.LSH)("showDelete",e.control.enabled)}}function m(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-file",11)(1,"button",12),l.NdJ("click",(function(){const t=l.CHM(e).$implicit,i=l.oxw();return l.KtG(i.restore(t))})),l._uU(2," Restore "),l.qZA()()}if(2&e){const e=t.$implicit,i=l.oxw();l.Q6J("file",e)("showDelete",i.control.enabled)}}function d(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-file",13),l.NdJ("remove",(function(){const t=l.CHM(e).$implicit,i=l.oxw();return l.KtG(i.remove(t))})),l.qZA()}if(2&e){const e=t.$implicit,i=l.oxw(),o=l.MAs(14);l.Q6J("file",e)("leftContent",o)("showDelete",i.control.enabled)}}function g(e,t){1&e&&l._UZ(0,"tui-icon",14)}const F=(()=>{var e;class t{constructor(){this.isE2E=(0,l.f3M)(s.TUI_IS_E2E),this.control=new n.NI(null),this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(e){e&&(this.restoredFiles=[...this.restoredFiles,e],this.removedFiles=this.removedFiles.filter((t=>e.name!==t?.name)))}remove(e){this.removedFiles=[...this.removedFiles,e],this.restoredFiles=this.restoredFiles.filter((t=>e.name!==t?.name))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[l.jDz],decls:15,vars:5,consts:[["state","normal",3,"file","showDelete",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete",4,"ngFor","ngForOf"],["state","loading",3,"file","showDelete","remove",4,"ngIf"],["rel","noreferrer noopener","state","normal","target","_blank","tuiFile","",3,"file","href","showDelete",4,"tuiItem"],["size","l","state","deleted",3,"file","showDelete",4,"ngFor","ngForOf"],["size","l","state","normal",3,"file","leftContent","showDelete","remove",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file","showDelete"],["state","error",3,"file","showDelete"],["state","loading",3,"file","showDelete","remove"],["rel","noreferrer noopener","state","normal","target","_blank","tuiFile","",3,"file","href","showDelete"],["size","l","state","deleted",3,"file","showDelete"],["tuiLink","","type","button",3,"click"],["size","l","state","normal",3,"file","leftContent","showDelete","remove"],["src","@tui.file"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-files"),l.YNc(1,c,1,2,"tui-file",0),l.YNc(2,a,1,2,"tui-file",1),l.YNc(3,h,1,2,"tui-file",2),l.qZA(),l.TgZ(4,"h4"),l._uU(5,"With link"),l.qZA(),l.TgZ(6,"tui-files"),l.YNc(7,u,1,3,"a",3),l.qZA(),l.TgZ(8,"h4"),l._uU(9,"With deleted state"),l.qZA(),l.TgZ(10,"tui-files"),l.YNc(11,m,3,2,"tui-file",4),l.YNc(12,d,1,3,"tui-file",5),l.qZA(),l.YNc(13,g,1,0,"ng-template",null,6,l.W1O)),2&e&&(l.xp6(1),l.Q6J("ngForOf",t.files),l.xp6(1),l.Q6J("ngForOf",t.rejectedFiles),l.xp6(1),l.Q6J("ngIf",t.loadingFile&&!t.isE2E),l.xp6(8),l.Q6J("ngForOf",t.removedFiles),l.xp6(1),l.Q6J("ngForOf",t.restoredFiles))},dependencies:[f.TuiFilesComponent,f.TuiFileComponent,o.sg,o.O5,s.TuiItemDirective,r.TuiLink,r.TuiIcon],encapsulation:2,changeDetection:0}),t})()}}]);