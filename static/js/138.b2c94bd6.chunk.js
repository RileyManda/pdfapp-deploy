(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[138],{2324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(394),o=a(393),c=a(47),i=a(48),m=a(103),s=a(50),h=a(49),u=a(1881),p=a(1914),g=a(1915),E=a(375),d=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(m.a)(n)),n.state={popoverOpen:!1},n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"contained",color:"primary",id:"Popover1",onClick:this.toggle},"Launch Popover"),r.a.createElement(u.a,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},r.a.createElement(p.a,null,"Popover Title"),r.a.createElement(g.a,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(r.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(m.a)(n)),n.state={popoverOpen:!1},n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(E.a,{variant:"contained",color:"primary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),r.a.createElement(u.a,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},r.a.createElement(p.a,null,"Popover Title"),r.a.createElement(g.a,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(r.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"manage-margin"},this.state.popovers.map((function(e,t){return r.a.createElement(v,{key:t,item:e,id:t})})))}}]),a}(r.a.Component),b=a(117),O=a(21),C=a(318),y=a(382),j=a(320),N=a(388),P=a(381),k=a(1280),z=a(329),S=a(372),x=a(314),H=a(319),T=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,anchorEl:null,anchorOriginVertical:"bottom",anchorOriginHorizontal:"center",transformOriginVertical:"top",transformOriginHorizontal:"center",positionTop:200,positionLeft:400,anchorReference:"anchorEl"},e.handleChange=function(t){return function(a,n){e.setState(Object(b.a)({},t,n))}},e.handleNumberInputChange=function(t){return function(a){e.setState(Object(b.a)({},t,parseInt(a.target.value,10)))}},e.handleClickButton=function(){e.setState({open:!0,anchorEl:Object(O.findDOMNode)(e.button)})},e.handleRequestClose=function(){e.setState({open:!1})},e.button=null,e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.anchorEl,l=t.anchorOriginVertical,o=t.anchorOriginHorizontal,c=t.transformOriginVertical,i=t.transformOriginHorizontal,m=t.positionTop,s=t.positionLeft,h=t.anchorReference;return r.a.createElement("div",null,r.a.createElement(E.a,{ref:function(t){e.button=t},variant:"contained",className:"mb-5",onClick:this.handleClickButton},"Open Popover"),r.a.createElement(S.a,{open:a,anchorEl:n,anchorReference:h,anchorPosition:{top:m,left:s},onClose:this.handleRequestClose,anchorOrigin:{vertical:l,horizontal:o},transformOrigin:{vertical:c,horizontal:i}},r.a.createElement(z.a,{className:"m-3"},"The content of the Popover.")),r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,{component:"fieldset"},r.a.createElement(j.a,{component:"legend"},"Anchor Reference"),r.a.createElement(P.a,{row:!0,"aria-label":"anchorReference",name:"anchorReference",value:this.state.anchorReference,onChange:this.handleChange("anchorReference")},r.a.createElement(y.a,{value:"anchorEl",control:r.a.createElement(N.a,null),label:"Anchor El"}),r.a.createElement(y.a,{value:"anchorPosition",control:r.a.createElement(N.a,null),label:"Anchor Position"})))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,null,r.a.createElement(H.a,{htmlFor:"position-top"},"Anchor Position Top"),r.a.createElement(x.a,{id:"position-top",type:"number",value:this.state.positionTop,onChange:this.handleNumberInputChange("positionTop")})),"\xa0",r.a.createElement(C.a,null,r.a.createElement(H.a,{htmlFor:"position-left"},"Anchor Position Left"),r.a.createElement(x.a,{id:"position-left",type:"number",value:this.state.positionLeft,onChange:this.handleNumberInputChange("positionLeft")}))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,{component:"fieldset"},r.a.createElement(j.a,{component:"legend"},"Anchor Origin Vertical"),r.a.createElement(P.a,{"aria-label":"anchorOriginVertical",name:"anchorOriginVertical",value:this.state.anchorOriginVertical,onChange:this.handleChange("anchorOriginVertical")},r.a.createElement(y.a,{value:"top",control:r.a.createElement(N.a,null),label:"Top"}),r.a.createElement(y.a,{value:"center",control:r.a.createElement(N.a,null),label:"Center"}),r.a.createElement(y.a,{value:"bottom",control:r.a.createElement(N.a,null),label:"Bottom"})))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,{component:"fieldset"},r.a.createElement(j.a,{component:"legend"},"Transform Origin Vertical"),r.a.createElement(P.a,{"aria-label":"transformOriginVertical",name:"transformOriginVertical",value:this.state.transformOriginVertical,onChange:this.handleChange("transformOriginVertical")},r.a.createElement(y.a,{value:"top",control:r.a.createElement(N.a,null),label:"Top"}),r.a.createElement(y.a,{value:"center",control:r.a.createElement(N.a,null),label:"Center"}),r.a.createElement(y.a,{value:"bottom",control:r.a.createElement(N.a,null),label:"Bottom"})))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,{component:"fieldset"},r.a.createElement(j.a,{component:"legend"},"Anchor Origin Horizontal"),r.a.createElement(P.a,{row:!0,"aria-label":"anchorOriginHorizontal",name:"anchorOriginHorizontal",value:this.state.anchorOriginHorizontal,onChange:this.handleChange("anchorOriginHorizontal")},r.a.createElement(y.a,{value:"left",control:r.a.createElement(N.a,null),label:"Left"}),r.a.createElement(y.a,{value:"center",control:r.a.createElement(N.a,null),label:"Center"}),r.a.createElement(y.a,{value:"right",control:r.a.createElement(N.a,null),label:"Right"})))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(C.a,{component:"fieldset"},r.a.createElement(j.a,{component:"legend"},"Transform Origin Horizontal"),r.a.createElement(P.a,{row:!0,"aria-label":"transformOriginHorizontal",name:"transformOriginHorizontal",value:this.state.transformOriginHorizontal,onChange:this.handleChange("transformOriginHorizontal")},r.a.createElement(y.a,{value:"left",control:r.a.createElement(N.a,null),label:"Left"}),r.a.createElement(y.a,{value:"center",control:r.a.createElement(N.a,null),label:"Center"}),r.a.createElement(y.a,{value:"right",control:r.a.createElement(N.a,null),label:"Right"}))))))}}]),a}(r.a.Component),V=a(5);t.default=function(e){var t=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(o.a,{title:r.a.createElement(V.a,{id:"sidebar.components.popovers"}),match:t}),r.a.createElement("div",{className:"row mb-md-3"},r.a.createElement(l.a,{childrenStyle:"text-center",heading:r.a.createElement(V.a,{id:"component.breadcrumbs.noList"})},r.a.createElement(f,null)),r.a.createElement(l.a,{childrenStyle:"text-center",heading:r.a.createElement(V.a,{id:"component.breadcrumbs.simple"})},r.a.createElement(d,null))),r.a.createElement("div",{className:"row"},r.a.createElement(l.a,{styleName:"col-12",heading:r.a.createElement(V.a,{id:"component.popover.anchorPlayground"})},r.a.createElement(T,null))))}},393:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(398),o=a(399),c=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),n=a.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),r.a.createElement(l.a,{className:"mb-0",tag:"nav"},n.map((function(e,t){return r.a.createElement(o.a,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:c(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=function(e){var t=e.heading,a=e.children,n=e.styleName,l=e.cardStyle,o=e.childrenStyle,c=e.headerOutside,i=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},c&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},t),a.length>1&&r.a.createElement("div",{className:"entry-description"},a[0])),r.a.createElement("div",{className:"jr-card ".concat(l)},!c&&t&&r.a.createElement("div",{className:"jr-card-header ".concat(i)},r.a.createElement("h3",{className:"card-heading"},t),a.length>1&&r.a.createElement("div",{className:"sub-heading"},a[0])),r.a.createElement("div",{className:"jr-card-body ".concat(o)},a.length>1?a[1]:a)))};t.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);
//# sourceMappingURL=138.b2c94bd6.chunk.js.map