(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[118],{2336:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(394),r=t(393),s=t(398),m=t(399),i=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(m.a,{active:!0},"Home")),l.a.createElement(s.a,null,l.a.createElement(m.a,null,l.a.createElement("span",{className:"jr-link"},"Home")),l.a.createElement(m.a,{active:!0},"Library")),l.a.createElement(s.a,{className:"mb-0"},l.a.createElement(m.a,null,l.a.createElement("span",{className:"jr-link"},"Home")),l.a.createElement(m.a,null,l.a.createElement("span",{className:"jr-link"},"Library")),l.a.createElement(m.a,{active:!0},"Data")))},d=function(){return l.a.createElement("div",null,l.a.createElement(s.a,{className:"mb-0",tag:"nav"},l.a.createElement(m.a,{tag:"span"},"Home"),l.a.createElement(m.a,{tag:"span"},"Library"),l.a.createElement(m.a,{tag:"span"},"Data"),l.a.createElement(m.a,{active:!0,tag:"span"},"Bootstrap")))},o=t(5);a.default=function(e){var a=e.match;return l.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.a.createElement(r.a,{title:l.a.createElement(o.a,{id:"sidebar.components.breadcrumbs"}),match:a}),l.a.createElement("div",{className:"row"},l.a.createElement(c.a,{styleName:"col-md-6",heading:l.a.createElement(o.a,{id:"component.breadcrumbs.simple"})},l.a.createElement(i,null)),l.a.createElement(c.a,{styleName:"col-md-6",heading:l.a.createElement(o.a,{id:"component.breadcrumbs.noList"})},l.a.createElement(d,null))))}},393:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(398),r=t(399),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),l.a.createElement(c.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return l.a.createElement(r.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=function(e){var a=e.heading,t=e.children,n=e.styleName,c=e.cardStyle,r=e.childrenStyle,s=e.headerOutside,m=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},s&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&l.a.createElement("div",{className:"entry-description"},t[0])),l.a.createElement("div",{className:"jr-card ".concat(c)},!s&&a&&l.a.createElement("div",{className:"jr-card-header ".concat(m)},l.a.createElement("h3",{className:"card-heading"},a),t.length>1&&l.a.createElement("div",{className:"sub-heading"},t[0])),l.a.createElement("div",{className:"jr-card-body ".concat(r)},t.length>1?t[1]:t)))};a.a=c,c.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},398:function(e,a,t){"use strict";var n=t(3),l=t(22),c=t(0),r=t.n(c),s=t(4),m=t.n(s),i=t(46),d=t.n(i),o=t(19),u={tag:o.p,listTag:o.p,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},p=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,s=e.children,m=e.tag,i=e.listTag,u=e["aria-label"],p=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),E=Object(o.l)(d()(a),c),b=Object(o.l)(d()("breadcrumb",t),c);return r.a.createElement(m,Object(n.a)({},p,{className:E,"aria-label":u}),r.a.createElement(i,{className:b},s))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},399:function(e,a,t){"use strict";var n=t(3),l=t(22),c=t(0),r=t.n(c),s=t(4),m=t.n(s),i=t(46),d=t.n(i),o=t(19),u={tag:o.p,active:m.a.bool,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,s=e.tag,m=Object(l.a)(e,["className","cssModule","active","tag"]),i=Object(o.l)(d()(a,!!c&&"active","breadcrumb-item"),t);return r.a.createElement(s,Object(n.a)({},m,{className:i,"aria-current":c?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p}}]);
//# sourceMappingURL=118.86846c1f.chunk.js.map