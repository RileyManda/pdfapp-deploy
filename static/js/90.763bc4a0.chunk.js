(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[90],{1168:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(719),s=a(524),c=a(333),i=a(220),r=a(685),d=a(750),m=Object(o.c)((function(){return n.a.createElement("i",{className:"zmdi zmdi-menu draggable-icon d-none d-sm-flex",style:{fontSize:25}})})),u=Object(o.b)((function(e){var t=e.todo,a=e.onTodoSelect,l=e.onTodoChecked,o=e.onMarkAsStart,u=null;return t.user>0&&(u=d.a[t.user-1]),n.a.createElement("div",{className:"module-list-item"},n.a.createElement("div",{className:"module-list-icon"},n.a.createElement("span",{className:"bar-icon"},n.a.createElement(m,null)),n.a.createElement(s.a,{color:"primary",checked:t.selected,onClick:function(e){e.stopPropagation(),l(t)},value:"SelectTodo"}),n.a.createElement(i.a,{className:"icon-btn",onClick:function(){t.starred=!t.starred,o(t)}},t.starred?n.a.createElement("i",{className:"zmdi zmdi-star"}):n.a.createElement("i",{className:"zmdi zmdi-star-outline"}))),n.a.createElement("div",{className:"module-list-info",onClick:function(){a(t)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"module-todo-content col-9 col-sm-10 col-md-11"},n.a.createElement("div",{className:"subject ".concat(t.completed&&"text-muted text-strikethrough")},t.title),n.a.createElement("div",{className:"manage-margin"},r.a.map((function(e,a){return t.labels.includes(e.id)&&n.a.createElement("div",{key:a,className:"badge text-white bg-".concat(e.color)},e.title)})))),n.a.createElement("div",{className:"module-todo-right col-3 col-sm-2 col-md-1"},n.a.createElement("div",{className:"d-flex flex-row-reverse"},null===u?n.a.createElement(c.a,null,"U"):n.a.createElement(c.a,{alt:u.name,src:u.thumb}))))))})),h=a(70),b=Object(o.a)((function(e){var t=e.toDos,a=e.onTodoSelect,l=e.onTodoChecked,o=e.onMarkAsStart,s=e.width;return n.a.createElement("div",{className:"module-list"},n.a.createElement(h.a,{className:"module-list-scroll scrollbar",style:{height:s>=1200?"calc(100vh - 259px)":"calc(100vh - 238px)"}},t.map((function(e,t){return n.a.createElement(u,{key:t,index:t,todo:e,onTodoSelect:a,onMarkAsStart:o,onTodoChecked:l})}))))}));t.a=b},1169:function(e,t,a){"use strict";var l=a(117),n=a(1),o=a(47),s=a(48),c=a(50),i=a(49),r=a(0),d=a.n(r),m=a(220),u=a(314),h=a(142),b=a(143),p=a(333),E=a(685),f=a(1899),v=a(750),N=a(118),g=a.n(N),T=function(e){var t=e.conversation;return d.a.createElement("div",{className:"d-flex module-detail-item"},d.a.createElement("div",{className:"chat-todo-avatar"},d.a.createElement("img",{className:"rounded-circle avatar size-40",src:t.thumb,alt:"..."})),d.a.createElement("div",{className:"chat-toto-info"},d.a.createElement("div",{className:"d-flex  flex-column"},d.a.createElement("div",{className:"name mr-2"},t.name),d.a.createElement("div",{className:"time text-muted"},t.sentAt)),d.a.createElement("div",{className:"message"},t.message)))},D=a(70),S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).handleLabelClick=function(e){s.setState({labelMenu:!0,anchorEl:e.currentTarget})},s.handleUserClick=function(e){s.setState({userMenu:!0,anchorEl:e.currentTarget})},s.handleRequestClose=function(){s.setState({userMenu:!1,labelMenu:!1})},s._handleKeyPress=function(e){"Enter"===e.key&&s.submitComment()},s.handleEditTitle=function(){if(s.state.editTitle){var e=s.state.todo;e.title=s.state.title,s.props.onToDoUpdate(e)}s.setState({editTitle:!s.state.editTitle})},s.handleEditNote=function(){if(s.state.note){var e=s.state.todo;e.note=s.state.note,s.props.onToDoUpdate(e)}s.setState({editNote:!s.state.editNote})},s.handleDueDateChange=function(e){s.setState({todo:Object(n.a)(Object(n.a)({},s.state.todo),{},{dueDate:e})})},s.handleChange=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))};var c=e.todo,i=c.title,r=c.notes,d=e.conversation;return s.state={todo:e.todo,title:i,notes:r,anchorEl:void 0,userMenu:!1,labelMenu:!1,editTitle:!1,editNote:!1,message:"",conversation:d},s}return Object(s.a)(a,[{key:"submitComment",value:function(){if(""!==this.state.message){var e=this.state.conversation.concat({name:this.props.user.name,thumb:this.props.user.avatar,message:this.state.message,sentAt:g()().format("ddd DD, YYYY, hh:mm:ss A")});this.setState({conversation:e,message:""})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props,a=t.onToDoUpdate,l=t.onLabelUpdate,n=t.onDeleteToDo,o=t.width,s=this.state,c=s.todo,i=s.editNote,r=s.editTitle,N=s.title,g=s.notes,S=s.message,k=s.conversation,C=null;return c.user>0&&(C=v.a.find((function(e){return e.id===c.user}))),d.a.createElement("div",{className:"module-detail module-list"},d.a.createElement(D.a,{className:"module-list-scroll scrollbar",style:{height:o>=1200?"calc(100vh - 335px)":"calc(100vh - 311px)"}},d.a.createElement("div",{className:"module-detail-item module-detail-header"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6 col-md-8"},d.a.createElement("div",{className:"d-flex align-items-center"},d.a.createElement("div",{className:"user-name mr-md-4 mr-2",onClick:this.handleUserClick},null===C?d.a.createElement("h4",{className:"mb-0 mouse pointer"},"Assign User "):d.a.createElement("div",{className:"d-flex align-items-center pointer"},d.a.createElement(p.a,{className:"mr-2",src:C.thumb,alt:C.name}),d.a.createElement("h4",{className:"mb-0"},C.name))),d.a.createElement(f.a,{className:"module-date",value:c.dueDate,invalidLabel:"Due Date",onChange:this.handleDueDateChange.bind(this),animateYearScrolling:!1,leftArrowIcon:d.a.createElement("i",{className:"zmdi zmdi-arrow-back"}),rightArrowIcon:d.a.createElement("i",{className:"zmdi zmdi-arrow-forward"}),InputProps:{endAdornment:d.a.createElement(m.a,{className:"icon-btn"},d.a.createElement("i",{className:"zmdi zmdi-calendar"}))}}))),d.a.createElement("div",{className:"col-sm-6 col-md-4"},d.a.createElement("div",{className:"d-flex flex-sm-row-reverse justify-content-between justify-content-sm-start"},d.a.createElement(h.a,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.state.userMenu,onClose:this.handleRequestClose,MenuListProps:{style:{width:180}}},v.a.map((function(t,l){return d.a.createElement(b.a,{key:l,value:t.id,onClick:function(){e.handleRequestClose(),c.user=t.id,a(c)}},d.a.createElement("div",{className:"d-flex user-name manage-margin align-items-center"},d.a.createElement(p.a,{src:t.thumb,alt:t.name}),d.a.createElement("h4",null,t.name)))}))),d.a.createElement(m.a,{className:"icon-btn",onClick:function(){n(c)}},d.a.createElement("i",{className:"zmdi zmdi-delete"})),d.a.createElement(m.a,{className:"icon-btn",onClick:function(){c.starred=!c.starred,a(c)}},c.starred?d.a.createElement("i",{className:"zmdi zmdi-star"}):d.a.createElement("i",{className:"zmdi zmdi-star-outline"})),d.a.createElement(m.a,{className:"icon-btn",onClick:function(){c.important=!c.important,a(c)}},c.important?d.a.createElement("i",{className:"zmdi zmdi-info"}):d.a.createElement("i",{className:"zmdi zmdi-info-outline"})),d.a.createElement(m.a,{className:"icon-btn",onClick:this.handleLabelClick},d.a.createElement("i",{className:"zmdi zmdi-label-alt"})),d.a.createElement(h.a,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.state.labelMenu,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},E.a.map((function(t){return d.a.createElement(b.a,{key:t.id,onClick:function(){e.handleRequestClose(),l(c,t)}},t.title)}))))))),d.a.createElement("div",{className:"module-detail-item"},d.a.createElement("div",{className:"labels mb-4"},E.a.map((function(e,t){return c.labels.includes(e.id)&&d.a.createElement("div",{key:t,className:"badge text-white bg-".concat(e.color)},e.title)}))),d.a.createElement("div",{className:"form-group d-flex align-items-center mb-0"},d.a.createElement(m.a,{className:"icon-btn p-1",onClick:function(e){c.completed=!c.completed,a(c)}},c.completed?d.a.createElement("span",{className:"border-2 size-30 rounded-circle text-green border-green"},d.a.createElement("i",{className:"zmdi zmdi-check"})):d.a.createElement("span",{className:"border-2 size-30 w-2 rounded-circle text-muted border-grey"},d.a.createElement("i",{className:"zmdi zmdi-check"}))),r?d.a.createElement("div",{className:"d-flex align-items-center w-100"},d.a.createElement("div",{className:"col"},d.a.createElement(u.a,{fullWidth:!0,multiline:!0,className:"task-title",id:"required",placeholder:"Title",onChange:function(t){return e.setState({title:t.target.value})},defaultValue:N})),d.a.createElement(m.a,{onClick:this.handleEditTitle},d.a.createElement("i",{className:"zmdi zmdi-check"}))):d.a.createElement("div",{className:"d-flex align-items-center w-100"},d.a.createElement("div",{className:"task-title col"},N),d.a.createElement(m.a,{className:"icon-btn",onClick:this.handleEditTitle},d.a.createElement("i",{className:"zmdi zmdi-edit"}))))),d.a.createElement("div",{className:"module-detail-item mb-4"},i?d.a.createElement("div",{className:"d-flex align-items-center w-100"},d.a.createElement(u.a,{fullWidth:!0,id:"required",multiline:!0,placeholder:"Note",onChange:function(t){return e.setState({notes:t.target.value})},defaultValue:g}),d.a.createElement(m.a,{className:"icon-btn",onClick:this.handleEditNote},d.a.createElement("i",{className:"zmdi zmdi-check"}))):d.a.createElement("div",{className:"d-flex align-items-center w-100"},d.a.createElement("div",{className:"task-des col px-0"},g),d.a.createElement(m.a,{className:"icon-btn",onClick:this.handleEditNote},d.a.createElement("i",{className:"zmdi zmdi-edit"})))),d.a.createElement("div",{className:"module-detail-item"},d.a.createElement("h3",null,"Publication Requests")),k.map((function(e,t){return d.a.createElement(T,{key:t,conversation:e})}))),d.a.createElement("div",{className:"chat-main-footer todo-main-footer"},d.a.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:61}},d.a.createElement("div",{className:"col"},d.a.createElement("div",{className:"form-group"},d.a.createElement("textarea",{className:"border-0 form-control chat-textarea",id:"required",onKeyUp:this._handleKeyPress.bind(this),onChange:this.updateMessageValue.bind(this),value:S,rows:2,placeholder:"Type and hit enter to send message"}))),d.a.createElement("div",{className:"chat-sent"},d.a.createElement(m.a,{onClick:this.submitComment.bind(this),"aria-label":"Send message"},d.a.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))}}]),a}(d.a.Component);t.a=S},1898:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a(47),o=a(48),s=a(103),c=a(50),i=a(49),r=a(0),d=a.n(r),m=a(18),u=a(380),h=a(719),b=a(375),p=a(1882),E=a(524),f=a(220),v=a(142),N=a(143),g=a(152),T=a(988),D=a(685),S=a(989),k=a(179),C=a(1168),z=a(1169),x=a(595),w=a(376),O=a(5),y=a(70),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onSortEnd=function(t){var a=t.oldIndex,l=t.newIndex;e.setState({toDos:Object(h.d)(e.state.toDos,a,l)})},e.onLabelSelect=function(t){e.setState({anchorEl:t.currentTarget,labelMenuState:!e.state.labelMenuState})},e.onOptionMenuSelect=function(t){e.setState({anchorEl:t.currentTarget,optionMenuState:!e.state.optionMenuState})},e.onOptionMenuItemSelect=function(t){switch(t.title){case"All":e.handleRequestClose(),e.getAllTodo();break;case"None":e.handleRequestClose(),e.getUnselectedAllTodo();break;case"Starred":e.handleRequestClose(),e.getStarredToDo();break;case"Unstarred":e.handleRequestClose(),e.getUnStarredTodo();break;case"Important":e.handleRequestClose(),e.getImportantToDo();break;case"Unimportant":e.handleRequestClose(),e.getUnimportantToDo();break;default:e.handleRequestClose(),e.getAllTodo()}},e.getAllTodo=function(){var t=e.state.allToDos.map((function(e){return e?Object(l.a)(Object(l.a)({},e),{},{selected:!0}):e}));e.setState({selectedToDos:t.length,allToDos:t,optionName:"All",toDos:t})},e.getUnselectedAllTodo=function(){var t=e.state.allToDos.map((function(e){return e?Object(l.a)(Object(l.a)({},e),{},{selected:!1}):e}));e.setState({selectedToDos:0,allToDos:t,optionName:"None",toDos:t})},e.getStarredToDo=function(){var t=0,a=e.state.allToDos.map((function(e){return e.starred?(t++,Object(l.a)(Object(l.a)({},e),{},{selected:!0})):Object(l.a)(Object(l.a)({},e),{},{selected:!1})}));return e.setState({selectedToDos:t,allToDos:a,toDos:a.filter((function(e){return!e.deleted}))}),a},e.getUnStarredTodo=function(){var t=0,a=e.state.allToDos.map((function(e){return e.starred?Object(l.a)(Object(l.a)({},e),{},{selected:!1}):(t++,Object(l.a)(Object(l.a)({},e),{},{selected:!0}))}));return e.setState({selectedToDos:t,allToDos:a,optionName:"Unstarred",toDos:a.filter((function(e){return!e.deleted}))}),a},e.getImportantToDo=function(){var t=0,a=e.state.allToDos.map((function(e){return e.important?(t++,Object(l.a)(Object(l.a)({},e),{},{selected:!0})):Object(l.a)(Object(l.a)({},e),{},{selected:!1})}));return e.setState({selectedToDos:t,allToDos:a,optionName:"Important",toDos:a.filter((function(e){return!e.deleted}))}),a},e.getUnimportantToDo=function(){var t=0,a=e.state.allToDos.map((function(e){return e.important?Object(l.a)(Object(l.a)({},e),{},{selected:!1}):(t++,Object(l.a)(Object(l.a)({},e),{},{selected:!0}))}));return e.setState({selectedToDos:t,allToDos:a,optionName:"Unimportant",toDos:a.filter((function(e){return!e.deleted}))}),a},e.onLabelMenuItemSelect=function(t){e.handleRequestClose();var a=e.state.allToDos.map((function(a){return a.selected?a.labels.includes(t.id)?Object(l.a)(Object(l.a)({},a),{},{labels:e.removeLabel(a,t.id)}):Object(l.a)(Object(l.a)({},a),{},{labels:e.addLabel(a,t.id)}):a}));e.setState({alertMessage:"Label Updated Successfully",showMessage:!0,allToDos:a,toDos:a})},e.handleRequestClose=function(){e.setState({showMessage:!1,addTodo:!1,labelMenuState:!1,optionMenuState:!1})},e.onLabelUpdate=function(t,a){t.labels.includes(a.id)?t.labels=e.removeLabel(t,a.id):t.labels=e.addLabel(t,a.id),e.handleRequestClose();var l=e.state.allToDos.map((function(e){return e.id===t.id?t:e}));e.setState({alertMessage:"Label Updated Successfully",showMessage:!0,currentTodo:t,allToDos:l,toDos:l})},e.onMarkAsStart=function(t){var a=e.state.allToDos.map((function(e){return e.id===t.id?t:e}));e.setState({alertMessage:"ToDo Updated Successfully",showMessage:!0,allToDos:a,toDos:a})},e.onToDoUpdate=function(t){e.handleRequestClose();var a=e.state.allToDos.map((function(e){return e.id===t.id?t:e}));e.setState({alertMessage:"ToDo Updated Successfully",showMessage:!0,currentTodo:t,allToDos:a,toDos:a})},e.onDeleteToDo=function(t){var a=0,n=e.state.allToDos.map((function(e){return e.selected&&a++,t.id===e.id?(e.selected&&a--,Object(l.a)(Object(l.a)({},e),{},{deleted:!0})):e}));e.setState({alertMessage:"ToDo Deleted Successfully",showMessage:!0,allToDos:n,currentTodo:null,selectedToDos:a,toDos:n.filter((function(e){return!e.deleted}))})},e.getNavFilters=function(){return T.a.map((function(t,a){return d.a.createElement("li",{key:a,onClick:function(){var a=e.state.allToDos.filter((function(e){return 0===t.id&&e.starred||1===t.id&&e.important||2===t.id&&e.important||3===t.id&&e.important||4===t.id&&e.completed||5===t.id&&e.deleted,e}));e.setState({loader:!0,currentTodo:null,filter:t.id,toDos:a}),setTimeout((function(){e.setState({loader:!1})}),1500)}},d.a.createElement("span",{className:"jr-link ".concat(t.id===e.state.selectedSectionId?"active":"")},d.a.createElement("i",{className:"zmdi zmdi-".concat(t.icon)}),d.a.createElement("span",null,t.title)))}))},e.getNavLabels=function(){return D.a.map((function(t,a){return d.a.createElement("li",{key:a,onClick:function(){var a=e.state.allToDos.filter((function(e){return e.labels.includes(t.id)}));e.setState({loader:!0,currentTodo:null,toDos:a}),setTimeout((function(){e.setState({loader:!1})}),1500)}},d.a.createElement("span",{className:"jr-link"},d.a.createElement("i",{className:"zmdi zmdi-circle text-".concat(t.color)}),d.a.createElement("span",null,t.title)))}))},e.ToDoSideBar=function(){return d.a.createElement("div",{className:"module-side"},d.a.createElement("div",{className:"module-side-header"},d.a.createElement("div",{className:"module-logo"},d.a.createElement("i",{className:"zmdi zmdi-email mr-4"}),d.a.createElement("span",null,d.a.createElement(O.a,{id:"sidebar.appModule.toDo"})))),d.a.createElement("div",{className:"module-side-content"},d.a.createElement(y.a,{className:"module-side-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},d.a.createElement("div",{className:"module-add-task"},d.a.createElement(b.a,{variant:"contained",color:"primary",className:"btn btn-primary btn-block",onClick:function(){e.setState({addTodo:!0})}}," ",d.a.createElement(O.a,{id:"todo.addTask"})," ")),d.a.createElement("ul",{className:"module-nav"},d.a.createElement("li",{onClick:function(){e.setState({currentTodo:null,toDos:e.state.allToDos})}},d.a.createElement("span",{className:"jr-link"},d.a.createElement("i",{className:"zmdi zmdi-menu"}),d.a.createElement("span",null,d.a.createElement(O.a,{id:"todo.all"})))),d.a.createElement("li",{className:"module-nav-label"},d.a.createElement(O.a,{id:"todo.filters"})),e.getNavFilters(),d.a.createElement("li",{className:"module-nav-label"},d.a.createElement(O.a,{id:"todo.labels"})),e.getNavLabels()))))},e.searchTodo=function(t){if(""===t)e.setState({toDos:e.state.allToDos.filter((function(e){return!e.deleted}))});else{var a=e.state.allToDos.filter((function(e){return!e.deleted&&e.title.toLowerCase().indexOf(t.toLowerCase())>-1}));e.setState({toDos:a})}},e.showToDos=function(t){var a=t.currentTodo,l=t.toDos,n=t.conversation,o=t.user;return null===a?d.a.createElement(C.a,{toDos:l,onSortEnd:e.onSortEnd,onMarkAsStart:e.onMarkAsStart.bind(Object(s.a)(e)),width:e.props.width,onTodoSelect:e.onTodoSelect.bind(Object(s.a)(e)),onTodoChecked:e.onTodoChecked.bind(Object(s.a)(e)),useDragHandle:!0}):d.a.createElement(z.a,{todo:a,user:o,width:e.props.width,conversation:n,onLabelUpdate:e.onLabelUpdate.bind(Object(s.a)(e)),onToDoUpdate:e.onToDoUpdate.bind(Object(s.a)(e)),onDeleteToDo:e.onDeleteToDo.bind(Object(s.a)(e))})},e.state={searchTodo:"",alertMessage:"",loader:!1,showMessage:!1,drawerState:!1,optionName:"None",anchorEl:null,allToDos:g.a,currentTodo:null,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"https://via.placeholder.com/150x150"},selectedToDos:0,labelMenuState:!1,optionMenuState:!1,toDos:g.a,filter:-1,todoConversation:k.a,conversation:null},e}return Object(o.a)(a,[{key:"getToDoConversation",value:function(e){return k.a.find((function(t){return t.id===e}))}},{key:"onTodoChecked",value:function(e){e.selected=!e.selected;var t=0,a=this.state.toDos.map((function(a){return a.selected&&t++,a.id===e.id?(a.selected&&t++,e):a}));this.setState({selectedToDos:t,toDos:a})}},{key:"onAllTodoSelect",value:function(){this.state.selectedToDos<this.state.toDos.length?this.getAllTodo():this.getUnselectedAllTodo()}},{key:"onTodoAdd",value:function(e){this.setState({toDos:this.state.allToDos.concat(e),allToDos:this.state.allToDos.concat(e)})}},{key:"onTodoSelect",value:function(e){var t=this,a=this.getToDoConversation(e.id);a=a?a.conversationData:[],this.setState({currentTodo:e,loader:!0,conversation:a}),setTimeout((function(){t.setState({loader:!1})}),1500)}},{key:"removeLabel",value:function(e,t){return e.labels.splice(e.labels.indexOf(t),1),e.labels}},{key:"addLabel",value:function(e,t){return e.labels=e.labels.concat(t),e.labels}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"updateSearch",value:function(e){this.setState({searchTodo:e.target.value}),this.searchTodo(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedToDos,l=t.loader,n=t.toDos,o=t.alertMessage,s=t.showMessage;return d.a.createElement("div",{className:"app-wrapper"},d.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},d.a.createElement("div",{className:"app-module"},d.a.createElement("div",{className:"d-block d-xl-none"},d.a.createElement(u.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.ToDoSideBar())),d.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.ToDoSideBar()),d.a.createElement("div",{className:"module-box"},d.a.createElement("div",{className:"module-box-header"},d.a.createElement(f.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},d.a.createElement("i",{className:"zmdi zmdi-menu"})),d.a.createElement(x.a,{placeholder:"Search To Do",user:this.state.user,onChange:this.updateSearch.bind(this),value:this.state.searchTodo})),d.a.createElement("div",{className:"module-box-content"},null===this.state.currentTodo?d.a.createElement("div",{className:"module-box-topbar module-box-topbar-todo d-flex flex-row"},d.a.createElement(E.a,{color:"primary",indeterminate:a>0&&a<n.length,checked:a>0,onChange:this.onAllTodoSelect.bind(this),value:"SelectMail"}),d.a.createElement("div",{className:"d-flex align-items-center",onClick:this.onOptionMenuSelect.bind(this)},d.a.createElement("span",{className:"px-2"}," ",this.state.optionName),d.a.createElement(f.a,{className:"icon-btn-sm"},d.a.createElement("i",{className:"zmdi zmdi-caret-down"}))),a>0&&d.a.createElement(f.a,{className:"icon-btn",onClick:this.onLabelSelect.bind(this)},d.a.createElement("i",{className:"zmdi zmdi-label-alt"}))):d.a.createElement("div",{className:"module-box-topbar"},d.a.createElement(f.a,{className:"icon-btn",onClick:function(){e.setState({currentTodo:null})}},d.a.createElement("i",{className:"zmdi zmdi-arrow-back"}))),d.a.createElement(v.a,{id:"option-menu",anchorEl:this.state.anchorEl,open:this.state.optionMenuState,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},S.a.map((function(t){return d.a.createElement(N.a,{key:t.title,onClick:e.onOptionMenuItemSelect.bind(e,t)},t.title)}))),d.a.createElement(v.a,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.state.labelMenuState,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},D.a.map((function(t){return d.a.createElement(N.a,{key:t.id,onClick:e.onLabelMenuItemSelect.bind(e,t)},t.title)}))),l?d.a.createElement("div",{className:"loader-view",style:{height:this.props.width>=1200?"calc(100vh - 259px)":"calc(100vh - 238px)"}},d.a.createElement(w.a,null)):this.showToDos(this.state)))),d.a.createElement(p.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:d.a.createElement("span",{id:"message-id"},o)})))}}]),a}(r.Component);t.default=Object(m.c)((function(e){return{width:e.settings.width}}))(j)},595:function(e,t,a){"use strict";var l=a(17),n=a(0),o=a.n(n),s=a(220),c=a(1881),i=a(358),r=a(391),d=a(379),m=a(54),u=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),u=a[0],h=a[1],b=Object(n.useState)(!1),p=Object(l.a)(b,2),E=p[0],f=p[1],v=function(){f(!E)},N=e.placeholder,g=e.onChange,T=e.value,D=e.user,S=e.notification,k=e.apps;return o.a.createElement("div",{className:"module-box-header-inner"},o.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:N,onChange:g,value:T}),o.a.createElement("button",{className:"search-icon"},o.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),o.a.createElement(c.a,{className:"p-3",placement:"bottom",isOpen:E,target:"Popover1",toggle:v},o.a.createElement("h3",null,D.name),o.a.createElement("h4",null,D.email)),o.a.createElement("div",{className:"d-inline-block d-sm-none"},o.a.createElement(i.a,{className:"quick-menu nav-searchbox",isOpen:u,toggle:function(){h(!u)}},o.a.createElement(r.a,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},o.a.createElement(s.a,{className:"icon-btn"},o.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),o.a.createElement(d.a,{className:"p-0"},o.a.createElement(m.a,{styleName:"search-dropdown",placeholder:"",onChange:g,value:T})))),o.a.createElement("div",{className:"module-box-header-right"},k&&o.a.createElement(s.a,{className:"size-40","aria-label":"Menu"},o.a.createElement("i",{className:"zmdi zmdi-apps"})),S&&o.a.createElement(s.a,{className:"size-40","aria-label":"Menu"},o.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),o.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:D.name,onMouseEnter:v,onMouseLeave:v,onClick:v,src:D.avatar})))};t.a=u,u.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},685:function(e,t,a){"use strict";t.a=[{id:1,handle:"frontend",title:"HTML",color:"purple lighten-3"},{id:2,handle:"backend",title:"CSS",color:"amber darken-2"},{id:3,handle:"api",title:"Laravel",color:"green darken-1"},{id:4,handle:"issue",title:"Node JS",color:"light-blue darken-2"}]},750:function(e,t,a){"use strict";t.a=[{id:1,name:"Alex Dolgove",thumb:"https://via.placeholder.com/150x150"},{id:2,name:"Domnic Harris",thumb:"https://via.placeholder.com/150x150"},{id:3,name:"Garry Sobars",thumb:"https://via.placeholder.com/150x150"},{id:4,name:"Stella Johnson",thumb:"https://via.placeholder.com/150x150"},{id:5,name:"John Smith",thumb:"https://via.placeholder.com/150x150"},{id:6,name:"Domnic Brown",thumb:"https://via.placeholder.com/150x150"}]},988:function(e,t,a){"use strict";t.a=[{id:0,handle:"starred",title:"Starred",icon:"star"},{id:1,handle:"important",title:"Priority",icon:"info"},{id:2,handle:"dueDate",title:"Sheduled",icon:"time"},{id:3,handle:"today",title:"Today",icon:"calendar"},{id:4,handle:"completed",title:"Done",icon:"check"},{id:5,handle:"deleted",title:"Deleted",icon:"delete"}]},989:function(e,t,a){"use strict";t.a=[{title:"All"},{title:"None"},{title:"Starred"},{title:"Unstarred"},{title:"Important"},{title:"Unimportant"}]}}]);
//# sourceMappingURL=90.763bc4a0.chunk.js.map