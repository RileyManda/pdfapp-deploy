(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[114],{2331:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(400),c=[{x:100,y:200,z:200},{x:120,y:100,z:260},{x:170,y:300,z:400},{x:140,y:250,z:280},{x:150,y:400,z:500},{x:110,y:280,z:200}],s=[{x:200,y:260,z:240},{x:240,y:290,z:220},{x:190,y:290,z:250},{x:198,y:250,z:210},{x:180,y:280,z:260},{x:210,y:220,z:230}],i=[{x:100,y:200,z:200},{x:120,y:100,z:260},{x:170,y:300,z:400},{x:140,y:250,z:280},{x:150,y:400,z:500},{x:110,y:280,z:200}],m=function(){return r.a.createElement(l.v,{width:"100%",height:400},r.a.createElement(l.x,{margin:{top:10,right:0,left:-25,bottom:0}},r.a.createElement(l.B,{dataKey:"x",name:"stature",unit:"cm"}),r.a.createElement(l.C,{dataKey:"y",name:"weight",unit:"kg"}),r.a.createElement(l.w,{name:"A school",data:i,fill:"#3367d6"}),r.a.createElement(l.f,null),r.a.createElement(l.z,{cursor:{strokeDasharray:"3 3"}})))},d=function(){return r.a.createElement(l.v,{width:"100%",height:400},r.a.createElement(l.x,{margin:{top:10,right:0,left:-25,bottom:0}},r.a.createElement(l.B,{dataKey:"x",name:"stature",unit:"cm"}),r.a.createElement(l.C,{dataKey:"y",name:"weight",unit:"kg"}),r.a.createElement(l.D,{dataKey:"z",range:[60,400],name:"score",unit:"km"}),r.a.createElement(l.f,null),r.a.createElement(l.z,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(l.i,null),r.a.createElement(l.w,{name:"A school",data:c,fill:"#3367d6",shape:"star"}),r.a.createElement(l.w,{name:"B school",data:s,fill:"#ffc658",shape:"triangle"})))},o=t(394),u=t(393),h=t(5);a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(u.a,{title:r.a.createElement(h.a,{id:"chart.scatter"}),match:a}),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{heading:"Simple Scatter Chart"},r.a.createElement(m,null)),r.a.createElement(o.a,{heading:"Three Dim Scatter Chart"},r.a.createElement(d,null))))}},393:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(398),c=t(399),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(l.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return r.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=function(e){var a=e.heading,t=e.children,n=e.styleName,l=e.cardStyle,c=e.childrenStyle,s=e.headerOutside,i=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},s&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&r.a.createElement("div",{className:"entry-description"},t[0])),r.a.createElement("div",{className:"jr-card ".concat(l)},!s&&a&&r.a.createElement("div",{className:"jr-card-header ".concat(i)},r.a.createElement("h3",{className:"card-heading"},a),t.length>1&&r.a.createElement("div",{className:"sub-heading"},t[0])),r.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},398:function(e,a,t){"use strict";var n=t(3),r=t(22),l=t(0),c=t.n(l),s=t(4),i=t.n(s),m=t(46),d=t.n(m),o=t(19),u={tag:o.p,listTag:o.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},h=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,s=e.children,i=e.tag,m=e.listTag,u=e["aria-label"],h=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(o.l)(d()(a),l),y=Object(o.l)(d()("breadcrumb",t),l);return c.a.createElement(i,Object(n.a)({},h,{className:g,"aria-label":u}),c.a.createElement(m,{className:y},s))};h.propTypes=u,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=h},399:function(e,a,t){"use strict";var n=t(3),r=t(22),l=t(0),c=t.n(l),s=t(4),i=t.n(s),m=t(46),d=t.n(m),o=t(19),u={tag:o.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,l=e.active,s=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),m=Object(o.l)(d()(a,!!l&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(n.a)({},i,{className:m,"aria-current":l?"page":void 0}))};h.propTypes=u,h.defaultProps={tag:"li"},a.a=h}}]);
//# sourceMappingURL=114.35e805e8.chunk.js.map