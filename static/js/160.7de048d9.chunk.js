(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[160],{1905:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(47),s=a(48),l=a(103),o=a(50),i=a(49),r=a(0),d=a.n(r),m=a(380),u=a(220),h=a(524),C=a(18),f=a(375),p=a(1882),S=a(149),v=a(1350),b=a(595),g=a(991),E=a(5),N=a(70),w=723812738,O=[{id:1,name:"All contacts",icon:"zmdi-menu"},{id:2,name:"Frequently contacted",icon:"zmdi-time-restore"},{id:3,name:"Starred contacts",icon:"zmdi-star"}],L=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).ContactSideBar=function(e){return d.a.createElement("div",{className:"module-side"},d.a.createElement("div",{className:"module-side-header"},d.a.createElement("div",{className:"module-logo"},d.a.createElement("i",{className:"zmdi zmdi-account-box mr-4"}),d.a.createElement("span",null,d.a.createElement(E.a,{id:"chat.contacts"})))),d.a.createElement("div",{className:"module-side-content"},d.a.createElement(N.a,{className:"module-side-scroll scrollbar",style:{height:t.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},d.a.createElement("div",{className:"module-add-task"},d.a.createElement(f.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:t.onAddContact},d.a.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw"}),d.a.createElement("span",null,"Add New Contact"))),d.a.createElement("div",{className:"module-side-nav"},d.a.createElement("ul",{className:"module-nav"},O.map((function(e){return d.a.createElement("li",{key:e.id,className:"nav-item"},d.a.createElement("span",{className:"jr-link ".concat(e.id===t.state.selectedSectionId?"active":""),onClick:t.onFilterOptionSelect.bind(Object(l.a)(t),e)},d.a.createElement("i",{className:"zmdi ".concat(e.icon)}),d.a.createElement("span",null,e.name)))})))))))},t.addFavourite=function(e){t.setState({alertMessage:e.starred?"Contact removed as star":"Contact marked as star",showMessage:!0,contactList:t.state.contactList.map((function(t){return t.id===e.id?Object(n.a)(Object(n.a)({},t),{},{starred:!e.starred}):t})),allContact:t.state.allContact.map((function(t){return t.id===e.id?Object(n.a)(Object(n.a)({},t),{},{starred:!e.starred}):t}))})},t.onContactSelect=function(e){e.selected=!e.selected;var a=0,n=t.state.contactList.map((function(t){return t.selected&&a++,t.id===e.id?(t.selected&&a++,e):t}));t.setState({selectedContacts:a,contactList:n})},t.onAddContact=function(){t.setState({addContactState:!0})},t.onContactClose=function(){t.setState({addContactState:!1})},t.onFilterOptionSelect=function(e){switch(e.name){case"All contacts":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:t.state.allContact});break;case"Frequently contacted":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:t.state.allContact.filter((function(t){return t.frequently}))});break;case"Starred contacts":t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:t.state.allContact.filter((function(t){return t.starred}))});break;default:t.setState({selectedSectionId:e.id,filterOption:e.name,contactList:t.state.allContact})}},t.onSaveContact=function(e){var a=!0,n=t.state.allContact.map((function(t){return t.id===e.id?(a=!1,e):t}));a&&n.push(e),t.setState({alertMessage:a?"Contact Added Successfully":"Contact Updated Successfully",showMessage:!0,contactList:n,allContact:n})},t.onDeleteContact=function(e){t.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:t.state.allContact.filter((function(t){return t.id!==e.id})),contactList:t.state.allContact.filter((function(t){return t.id!==e.id}))})},t.onDeleteSelectedContact=function(){var e=t.state.allContact.filter((function(t){return!t.selected}));t.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:e,contactList:e,selectedContacts:0})},t.filterContact=function(e){var a=t.state.filterOption;if(""===e)t.setState({contactList:t.state.allContact});else{var n=t.state.allContact.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}));"All contacts"===a?t.setState({contactList:n}):"Frequently contacted"===a?t.setState({contactList:n.filter((function(t){return t.frequently}))}):"Starred contacts"===a&&t.setState({contactList:n.filter((function(t){return t.starred}))})}},t.handleRequestClose=function(){t.setState({showMessage:!1})},t.getAllContact=function(){var e=t.state.allContact.map((function(t){return t?Object(n.a)(Object(n.a)({},t),{},{selected:!0}):t}));t.setState({selectedContacts:e.length,allContact:e,contactList:e})},t.getUnselectedAllContact=function(){var e=t.state.allContact.map((function(t){return t?Object(n.a)(Object(n.a)({},t),{},{selected:!1}):t}));t.setState({selectedContacts:0,allContact:e,contactList:e})},t.state={noContentFoundMessage:"No contact found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"https://via.placeholder.com/150x150"},searchUser:"",filterOption:"All contacts",allContact:S.a,contactList:S.a,selectedContact:null,selectedContacts:0,addContactState:!1},t}return Object(s.a)(a,[{key:"onAllContactSelect",value:function(){this.state.selectedContacts<this.state.contactList.length?this.getAllContact():this.getUnselectedAllContact()}},{key:"updateContactUser",value:function(t){this.setState({searchUser:t.target.value}),this.filterContact(t.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var t=this.state,e=t.user,a=t.contactList,n=t.addContactState,c=t.selectedContacts,s=t.alertMessage,l=t.showMessage,o=t.noContentFoundMessage;return d.a.createElement("div",{className:"app-wrapper"},d.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},d.a.createElement("div",{className:"d-block d-xl-none"},d.a.createElement(m.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.ContactSideBar(e))),d.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.ContactSideBar(e)),d.a.createElement("div",{className:"module-box"},d.a.createElement("div",{className:"module-box-header"},d.a.createElement(u.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},d.a.createElement("i",{className:"zmdi zmdi-menu"})),d.a.createElement(b.a,{placeholder:"Search contact",notification:!1,apps:!1,user:this.state.user,onChange:this.updateContactUser.bind(this),value:this.state.searchUser})),d.a.createElement("div",{className:"module-box-content"},d.a.createElement("div",{className:"module-box-topbar"},d.a.createElement(h.a,{color:"primary",indeterminate:c>0&&c<a.length,checked:c>0,onChange:this.onAllContactSelect.bind(this),value:"SelectMail"}),c>0&&d.a.createElement(u.a,{className:"icon-btn",onClick:this.onDeleteSelectedContact.bind(this)},d.a.createElement("i",{className:"zmdi zmdi-delete"}))),d.a.createElement(N.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 261px)":"calc(100vh - 240px)"}},0===a.length?d.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},o):d.a.createElement(v.a,{contactList:a,addFavourite:this.addFavourite.bind(this),onContactSelect:this.onContactSelect.bind(this),onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)}))))),d.a.createElement(g.a,{open:n,contact:{id:w++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),d.a.createElement(p.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:l,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:d.a.createElement("span",{id:"message-id"},s)}))}}]),a}(r.Component);e.default=Object(C.c)((function(t){return{width:t.settings.width}}))(L)}}]);
//# sourceMappingURL=160.7de048d9.chunk.js.map