(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[84],{1103:function(e,a,t){"use strict";var n=t(47),l=t(48),r=t(50),c=t(49),o=t(0),i=t.n(o),s=t(375),u=t(1188),m=t(1190),d=t(1189),h=t(1661),p=t(1273),E=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Open alert dialog"),i.a.createElement(u.a,{open:this.state.open,onClose:this.handleRequestClose},i.a.createElement(p.a,null,"Use Google's location service?"),i.a.createElement(d.a,null,i.a.createElement(h.a,null,"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),i.a.createElement(m.a,null,i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"secondary"},"Disagree"),i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"primary"},"Agree"))))}}]),t}(o.Component);a.a=E},1104:function(e,a,t){"use strict";var n=t(47),l=t(48),r=t(50),c=t(49),o=t(0),i=t.n(o),s=t(375),u=t(1188),m=t(1190),d=t(1189),h=t(1661),p=t(1273),E=t(325),v=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Slide in alert dialog"),i.a.createElement(u.a,{open:this.state.open,TransitionComponent:E.a,onClose:this.handleRequestClose},i.a.createElement(p.a,null,"Use Google's location service?"),i.a.createElement(d.a,null,i.a.createElement(h.a,null,"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),i.a.createElement(m.a,null,i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"secondary"},"Disagree"),i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"primary"},"Agree"))))}}]),t}(o.Component);a.a=v},1105:function(e,a,t){"use strict";var n=t(170),l=t(47),r=t(48),c=t(50),o=t(49),i=t(0),s=t.n(i),u=t(375),m=t(374),d=t(323),h=t(712),p=t(1188),E=t(1189),v=t(1190),y=t(1273),f=t(388),C=t(381),b=t(382),g=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],k=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={value:void 0},e.radioGroup=null,e.handleEntering=function(){e.radioGroup.focus()},e.handleCancel=function(){e.props.onClose(e.props.value)},e.handleOk=function(){e.props.onClose(e.state.value)},e.handleChange=function(a,t){e.setState({value:t})},e}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.setState({value:this.props.value})}},{key:"componentWillUpdate",value:function(e){e.value!==this.props.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this,a=this.props,t=(a.value,Object(n.a)(a,["value"]));return s.a.createElement(p.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:this.handleEntering},t),s.a.createElement(y.a,null,"Phone Ringtone"),s.a.createElement(E.a,null,s.a.createElement(C.a,{ref:function(a){e.radioGroup=a},"aria-label":"ringtone",name:"ringtone",value:this.state.value,onChange:this.handleChange},g.map((function(e){return s.a.createElement(b.a,{value:e,key:e,control:s.a.createElement(f.a,null),label:e})})))),s.a.createElement(v.a,null,s.a.createElement(u.a,{onClick:this.handleCancel,color:"secondary"},"Cancel"),s.a.createElement(u.a,{onClick:this.handleOk,color:"primary"},"Ok")))}}]),t}(s.a.Component),O=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,value:"Dione"},e.button=void 0,e.handleClickListItem=function(){e.setState({open:!0})},e.handleRequestClose=function(a){e.setState({value:a,open:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"d-inline-block w-100"},s.a.createElement(m.a,null,s.a.createElement(d.a,{button:!0,divider:!0,disabled:!0},s.a.createElement(h.a,{primary:"Interruptions"})),s.a.createElement(d.a,{button:!0,divider:!0,"aria-haspopup":!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:this.handleClickListItem},s.a.createElement(h.a,{primary:"Phone ringtone",secondary:this.state.value})),s.a.createElement(d.a,{button:!0,divider:!0,disabled:!0},s.a.createElement(h.a,{primary:"Default notification ringtone",secondary:"Tethys"})),s.a.createElement(k,{open:this.state.open,onClose:this.handleRequestClose,value:this.state.value})))}}]),t}(s.a.Component);a.a=O},1106:function(e,a,t){"use strict";var n=t(47),l=t(48),r=t(50),c=t(49),o=t(0),i=t.n(o),s=t(375),u=t(1188),m=t(374),d=t(323),h=t(712),p=t(676),E=t(377),v=t(378),y=t(220),f=t(329),C=t(538),b=t.n(C),g=t(325);function k(e){return i.a.createElement(g.a,Object.assign({direction:"up"},e))}var O=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"contained",className:"bg-primary text-white",onClick:this.handleClickOpen},"full-screen dialog"),i.a.createElement(u.a,{fullScreen:!0,open:this.state.open,onClose:this.handleRequestClose,TransitionComponent:k},i.a.createElement(E.a,{className:"position-relative"},i.a.createElement(v.a,null,i.a.createElement(y.a,{onClick:this.handleRequestClose,"aria-label":"Close"},i.a.createElement(b.a,null)),i.a.createElement(f.a,{variant:"title",color:"inherit",style:{flex:1}},"Sound"),i.a.createElement(s.a,{onClick:this.handleRequestClose},"save"))),i.a.createElement(m.a,null,i.a.createElement(d.a,{button:!0},i.a.createElement(h.a,{primary:"Phone ringtone",secondary:"Titania"})),i.a.createElement(p.a,null),i.a.createElement(d.a,{button:!0},i.a.createElement(h.a,{primary:"Default notification ringtone",secondary:"Tethys"})))))}}]),t}(i.a.Component);a.a=O},1107:function(e,a,t){"use strict";var n=t(47),l=t(48),r=t(50),c=t(49),o=t(0),i=t.n(o),s=t(375),u=t(370),m=t(1188),d=t(1190),h=t(1189),p=t(1661),E=t(1273),v=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"contained",className:"bg-primary text-white",onClick:this.handleClickOpen},"Open form dialog"),i.a.createElement(m.a,{open:this.state.open,onClose:this.handleRequestClose},i.a.createElement(E.a,null,"Subscribe"),i.a.createElement(h.a,null,i.a.createElement(p.a,null,"To subscribe to this website, please enter your email address here. We will send updates occationally."),i.a.createElement(u.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})),i.a.createElement(d.a,null,i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"secondary"},"Cancel"),i.a.createElement(s.a,{onClick:this.handleRequestClose,color:"primary"},"Subscribe"))))}}]),t}(i.a.Component);a.a=v},1176:function(e,a,t){"use strict";var n=t(47),l=t(48),r=t(50),c=t(49),o=t(0),i=t.n(o),s=t(375),u=t(329),m=t(170),d=t(333),h=t(374),p=t(323),E=t(1101),v=t(712),y=t(1188),f=t(1273),C=t(1102),b=t.n(C),g=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handleRequestClose=function(){e.props.onClose(e.props.selectedValue)},e.handleListItemClick=function(a){e.props.onClose(a)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=(a.classes,a.users),n=(a.onClose,a.selectedValue,Object(m.a)(a,["classes","users","onClose","selectedValue"]));return i.a.createElement(y.a,Object.assign({onClose:this.handleRequestClose},n),i.a.createElement(f.a,null,"Set backup account"),i.a.createElement("div",null,i.a.createElement(h.a,null,t.map((function(a){return i.a.createElement(p.a,{button:!0,onClick:function(){return e.handleListItemClick(a.email)},key:a.email},i.a.createElement(E.a,null,i.a.createElement(d.a,{alt:"Remy Sharp",src:a.image})),i.a.createElement(v.a,{primary:a.email}))})),i.a.createElement(p.a,{button:!0,onClick:function(){return e.handleListItemClick("addAccount")}},i.a.createElement(E.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null))),i.a.createElement(v.a,{primary:"Add Account"})))))}}]),t}(o.Component),k=[{image:"https://via.placeholder.com/150x150",email:"jhonsmith@example.com"},{image:"https://via.placeholder.com/150x150",email:"stella02@example.com"},{image:"https://via.placeholder.com/150x150",email:"chrris0254@example.com"}],O=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,selectedValue:k[1].email},e.handleRequestClose=function(a){e.setState({selectedValue:a,open:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,{variant:"subtitle1"},"Selected: ",this.state.selectedValue),i.a.createElement("br",null),i.a.createElement(s.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Open simple dialog"),i.a.createElement(g,{users:k,selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleRequestClose.bind(this)}))}}]),t}(o.Component);a.a=O},1908:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(394),c=t(393),o=t(1176),i=t(1103),s=t(1104),u=t(1105),m=t(1106),d=t(1107),h=t(5);a.default=function(e){var a=e.match;return l.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.a.createElement(c.a,{title:l.a.createElement(h.a,{id:"sidebar.components.dialogs"}),match:a}),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(i.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(s.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(m.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(d.a,null))),l.a.createElement("div",{className:"row"},l.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"text-center"},l.a.createElement(o.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-md-6",cardStyle:"p-0",childrenStyle:"text-center"},l.a.createElement(u.a,null))))}},393:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(398),c=t(399),o=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),l.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return l.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:o(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=function(e){var a=e.heading,t=e.children,n=e.styleName,r=e.cardStyle,c=e.childrenStyle,o=e.headerOutside,i=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},o&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&l.a.createElement("div",{className:"entry-description"},t[0])),l.a.createElement("div",{className:"jr-card ".concat(r)},!o&&a&&l.a.createElement("div",{className:"jr-card-header ".concat(i)},l.a.createElement("h3",{className:"card-heading"},a),t.length>1&&l.a.createElement("div",{className:"sub-heading"},t[0])),l.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);
//# sourceMappingURL=84.2f622f54.chunk.js.map