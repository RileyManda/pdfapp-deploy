(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[164],{1902:function(e,a,t){"use strict";t.r(a);var l=t(47),n=t(48),i=t(103),o=t(50),s=t(49),r=t(0),c=t.n(r),d=t(18),p=t(375),m=t(380),u=t(524),M=t(1882),h=t(220),S=t(142),g=t(143),E=t(376),b=t(1194),f=t(1195),v=t(925),N=t(1196),C=t(1349),k=t(1197),w=t(595),y=t(1199),z=t(107),R=t(5),F=t(70),x=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).MailSideBar=function(){return c.a.createElement("div",{className:"module-side"},c.a.createElement("div",{className:"module-side-header"},c.a.createElement("div",{className:"module-logo"},c.a.createElement("i",{className:"zmdi zmdi-email mr-4"}),c.a.createElement("span",null,c.a.createElement(R.a,{id:"mail.mailbox"})))),c.a.createElement("div",{className:"module-side-content"},c.a.createElement(F.a,{className:"module-side-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},c.a.createElement("div",{className:"module-add-task"},c.a.createElement(p.a,{variant:"contained",color:"primary",className:"btn-block",onClick:function(){e.props.onComposeMail()}},c.a.createElement("i",{className:"zmdi zmdi-edit mr-3"}),c.a.createElement(R.a,{id:"mail.compose"})," ")),c.a.createElement("ul",{className:"module-nav"},e.getNavFolders(),c.a.createElement("li",{className:"module-nav-label"},c.a.createElement(R.a,{id:"mail.filters"})),e.getNavFilters(),c.a.createElement("li",{className:"module-nav-label"},c.a.createElement(R.a,{id:"mail.labels"})),e.getNavLabels()))))},e.onDeleteMail=function(){e.props.onDeleteMail()},e.getNavFolders=function(){return b.a.map((function(a,t){return c.a.createElement("li",{key:t,onClick:function(){e.props.getNavFolders(a),setTimeout((function(){e.props.hideMailLoader()}),1500)}},c.a.createElement("span",{className:"jr-link ".concat(e.props.selectedFolder===a.id?"active":"")},c.a.createElement("i",{className:"zmdi zmdi-".concat(a.icon)}),c.a.createElement("span",null,a.title)))}))},e.onFolderMenuItemSelect=function(a){e.props.handleMailRequestClose(),e.props.onFolderMenuItemSelect(a)},e.onLabelMenuItemSelect=function(a){e.props.handleMailRequestClose(),e.props.onMailLabelMenuItemSelect(a)},e.handleRequestClose=function(){e.props.handleMailRequestClose()},e.getNavFilters=function(){return f.a.map((function(a,t){return c.a.createElement("li",{key:t,onClick:function(){e.props.getMailNavFilters(a),setTimeout((function(){e.props.hideMailLoader()}),1500)}},c.a.createElement("span",{className:"jr-link"},c.a.createElement("i",{className:"zmdi zmdi-".concat(a.icon)}),c.a.createElement("span",null,a.title)))}))},e.onFolderSelect=function(a){e.props.onFolderSelect(),e.setState({anchorEl:a.currentTarget})},e.onLabelSelect=function(a){e.props.onMailLabelSelect(),e.setState({anchorEl:a.currentTarget})},e.onOptionMenuSelect=function(a){e.props.onMailOptionMenuSelect(),e.setState({anchorEl:a.currentTarget})},e.onOptionMenuItemSelect=function(a){switch(a.title){case"All":e.props.handleMailRequestClose(),e.props.getAllMail();break;case"None":e.props.handleMailRequestClose(),e.props.getUnselectedAllMail();break;case"Read":e.props.handleMailRequestClose(),e.props.getReadMail();break;case"Unread":e.props.handleMailRequestClose(),e.props.getUnreadMail();break;case"Starred":e.props.handleMailRequestClose(),e.props.getStarredMail();break;case"Unstarred":e.props.handleMailRequestClose(),e.props.getUnStarredMail();break;case"Important":e.props.handleMailRequestClose(),e.props.getImportantMail();break;case"Unimportant":e.props.handleMailRequestClose(),e.props.getUnimportantMail();break;default:e.props.handleMailRequestClose(),e.props.getAllMail()}},e.getAllMail=function(){e.props.getAllMail()},e.getUnselectedAllMail=function(){e.props.getUnselectedAllMail()},e.getReadMail=function(){e.props.getReadMail()},e.getUnreadMail=function(){e.props.getUnreadMail()},e.getStarredMail=function(){e.props.getStarredMail()},e.getUnStarredMail=function(){e.props.getUnStarredMail()},e.getImportantMail=function(){e.props.getImportantMail()},e.getUnimportantMail=function(){e.props.getUnimportantMail()},e.getNavLabels=function(){return v.a.map((function(a,t){return c.a.createElement("li",{key:t,onClick:function(){e.props.getMailNavLabels(a),setTimeout((function(){e.props.hideMailLoader()}),1500)}},c.a.createElement("span",{className:"jr-link"},c.a.createElement("i",{className:"zmdi zmdi-label-alt text-".concat(a.color)}),c.a.createElement("span",null,a.title)))}))},e.searchMail=function(a){e.props.onSearchMail(a)},e.displayMail=function(a,t,l){return c.a.createElement("div",{className:"module-box-column"},null===a?0===t.length?c.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:e.props.width>=1200?"calc(100vh - 259px)":"calc(100vh - 238px)"}},l):c.a.createElement(C.a,{mails:t,onStartSelect:e.onStartSelect.bind(Object(i.a)(e)),onMailSelect:e.onMailSelect.bind(Object(i.a)(e)),width:e.props.width,onMailChecked:e.onMailChecked.bind(Object(i.a)(e))}):c.a.createElement(y.a,{mail:a,onStartSelect:e.onStartSelect.bind(Object(i.a)(e)),width:e.props.width,onImportantSelect:e.onImportantSelect.bind(Object(i.a)(e))}))},e.getMailActions=function(){return c.a.createElement("div",null,c.a.createElement(h.a,{onClick:e.onFolderSelect.bind(Object(i.a)(e)),className:"icon-btn"},c.a.createElement("i",{className:"zmdi zmdi-folder"})),c.a.createElement(h.a,{onClick:e.onDeleteMail.bind(Object(i.a)(e)),className:"icon-btn"},c.a.createElement("i",{className:"zmdi zmdi-delete"})),c.a.createElement(h.a,{onClick:e.onLabelSelect.bind(Object(i.a)(e)),className:"icon-btn"},c.a.createElement("i",{className:"zmdi zmdi-label-alt"})))},e.state={anchorEl:null},e}return Object(n.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchMails()}},{key:"onMailChecked",value:function(e){this.props.onMailChecked(e)}},{key:"onAllMailSelect",value:function(){this.props.selectedMails<=this.props.folderMails.length?this.getAllMail():this.getUnselectedAllMail()}},{key:"onStartSelect",value:function(e){this.props.onStartSelect(e)}},{key:"onImportantSelect",value:function(e){this.props.onImportantSelect(e)}},{key:"onMailSend",value:function(e){this.props.onMailSend(e)}},{key:"onMailSelect",value:function(e){var a=this;this.props.onMailSelect(e),setTimeout((function(){a.props.hideMailLoader()}),1500)}},{key:"updateSearch",value:function(e){this.props.updateMailSearch(e.target.value),this.props.onSearchMail(e.target.value)}},{key:"onToggleDrawer",value:function(){this.props.onMailToggleDrawer()}},{key:"render",value:function(){var e=this,a=this.props,t=a.selectedMails,l=a.loader,n=a.currentMail,i=a.folderMails,o=a.composeMail,s=a.user,r=a.alertMessage,d=a.showMessage,p=a.noContentFoundMessage;return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},c.a.createElement("div",{className:"app-module"},c.a.createElement("div",{className:"d-block d-xl-none"},c.a.createElement(m.a,{open:this.props.drawerState,onClose:this.onToggleDrawer.bind(this)},this.MailSideBar())),c.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.MailSideBar()),c.a.createElement("div",{className:"module-box"},c.a.createElement("div",{className:"module-box-header"},c.a.createElement(h.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},c.a.createElement("i",{className:"zmdi zmdi-menu"})),c.a.createElement(w.a,{placeholder:"Search mails",user:this.props.user,onChange:this.updateSearch.bind(this),value:this.props.searchMail})),c.a.createElement("div",{className:"module-box-content"},c.a.createElement("div",{className:"module-box-topbar"},null===this.props.currentMail?c.a.createElement("div",{className:"d-flex"},c.a.createElement(u.a,{color:"primary",indeterminate:t>0&&t<i.length,checked:t>0,onChange:this.onAllMailSelect.bind(this),value:"SelectMail"}),c.a.createElement("div",{className:"d-flex align-items-center",onClick:this.onOptionMenuSelect.bind(this)},c.a.createElement("span",{className:"px-2"}," ",this.props.optionName),c.a.createElement(h.a,{className:"icon-btn-sm"},c.a.createElement("i",{className:"zmdi zmdi-caret-down"})))):c.a.createElement(h.a,{className:"icon-btn",onClick:function(){e.props.setCurrentMailNull()}},c.a.createElement("i",{className:"zmdi zmdi-arrow-back"})),t>0&&this.getMailActions(),c.a.createElement(S.a,{id:"option-menu",anchorEl:this.state.anchorEl,open:this.props.optionMenuState,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},N.a.map((function(a){return c.a.createElement(g.a,{key:a.title,onClick:e.onOptionMenuItemSelect.bind(e,a)},a.title)}))),c.a.createElement(S.a,{id:"folder-menu",anchorEl:this.state.anchorEl,open:this.props.folderMenuState,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},b.a.map((function(a){return c.a.createElement(g.a,{key:a.id,onClick:e.onFolderMenuItemSelect.bind(e,a.id)},a.title)}))),c.a.createElement(S.a,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.props.labelMenuState,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},v.a.map((function(a){return c.a.createElement(g.a,{key:a.id,onClick:e.onLabelMenuItemSelect.bind(e,a)},a.title)})))),l?c.a.createElement("div",{className:"loader-view",style:{height:this.props.width>=1200?"calc(100vh - 259px)":"calc(100vh - 238px)"}},c.a.createElement(E.a,null)):this.displayMail(n,i,p),c.a.createElement(k.a,{open:o,user:s,onClose:this.handleRequestClose.bind(this),onMailSend:this.onMailSend.bind(this)})))),c.a.createElement(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:d,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},r)})))}}]),t}(r.Component);a.default=Object(d.c)((function(e){var a=e.mail;return{width:e.settings.width,searchMail:a.searchMail,noContentFoundMessage:a.noContentFoundMessage,alertMessage:a.alertMessage,showMessage:a.showMessage,drawerState:a.drawerState,anchorEl:a.anchorEl,allMail:a.allMail,optionName:a.optionName,loader:a.loader,currentMail:a.currentMail,user:a.user,selectedMails:a.selectedMails,selectedFolder:a.selectedFolder,composeMail:a.composeMail,labelMenuState:a.labelMenuState,folderMenuState:a.folderMenuState,optionMenuState:a.optionMenuState,folderMails:a.folderMails}}),{getAllMail:z.c,fetchMails:z.a,getImportantMail:z.d,getMailNavFilters:z.e,getMailNavLabels:z.f,getNavFolders:z.g,getReadMail:z.h,getStarredMail:z.i,getUnimportantMail:z.k,getUnreadMail:z.l,getUnselectedAllMail:z.m,getUnStarredMail:z.j,handleMailRequestClose:z.n,hideMailLoader:z.o,onAllMailSelect:z.p,onComposeMail:z.q,onDeleteMail:z.r,onFolderMenuItemSelect:z.s,onFolderSelect:z.t,onImportantSelect:z.u,onMailChecked:z.v,onMailLabelMenuItemSelect:z.w,onMailLabelSelect:z.x,onMailOptionMenuSelect:z.y,onMailSelect:z.z,onMailSend:z.A,onMailToggleDrawer:z.B,onOptionMenuItemSelect:z.C,onSearchMail:z.D,onStartSelect:z.E,setCurrentMailNull:z.F,updateMailSearch:z.H})(x)}}]);
//# sourceMappingURL=164.817c11d1.chunk.js.map