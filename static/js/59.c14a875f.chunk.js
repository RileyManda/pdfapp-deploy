(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[59],{2357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(486),i={lat:49.2853171,lng:-123.1119202},u={overlayView:{background:"red",color:"white",padding:5,borderRadius:"50%"}};function l(e,t){return{x:-e/2,y:-t/2}}var o=Object(c.withGoogleMap)((function(e){return r.a.createElement(c.GoogleMap,{defaultZoom:8,defaultCenter:i},r.a.createElement(c.StreetViewPanorama,{defaultPosition:i,visible:!0},r.a.createElement(c.OverlayView,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:c.OverlayView.OVERLAY_LAYER,getPixelPositionOffset:l},r.a.createElement("div",{style:u.overlayView},"OverlayView"))))})),s=function(){return r.a.createElement(o,{containerElement:r.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"}),mapElement:r.a.createElement("div",{className:"embed-responsive-item"})})},f=n(394),d=n(393),m=n(5);t.default=function(e){var t=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(d.a,{title:r.a.createElement(m.a,{id:"sidebar.map.streetView"}),match:t}),r.a.createElement("div",{className:"row"},r.a.createElement(f.a,{styleName:"col-lg-12",heading:"Street View Panorama",headerOutside:!0},r.a.createElement(s,null))))}},393:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(398),i=n(399),u=function(e,t,n){return 0===n?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,n=e.match.path.substr(1),a=n.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),r.a.createElement(c.a,{className:"mb-0",tag:"nav"},a.map((function(e,t){return r.a.createElement(i.a,{active:a.length===t+1,tag:a.length===t+1?"span":"a",key:t,href:u(n,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=function(e){var t=e.heading,n=e.children,a=e.styleName,c=e.cardStyle,i=e.childrenStyle,u=e.headerOutside,l=e.headingStyle;return r.a.createElement("div",{className:"".concat(a)},u&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},t),n.length>1&&r.a.createElement("div",{className:"entry-description"},n[0])),r.a.createElement("div",{className:"jr-card ".concat(c)},!u&&t&&r.a.createElement("div",{className:"jr-card-header ".concat(l)},r.a.createElement("h3",{className:"card-heading"},t),n.length>1&&r.a.createElement("div",{className:"sub-heading"},n[0])),r.a.createElement("div",{className:"jr-card-body ".concat(i)},n.length>1?n[1]:n)))};t.a=c,c.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},416:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},432:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,c=n+(a?1:-1);a?c--:++c<r;)if(t(e[c],c,e))return c;return-1}},433:function(e,t){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var c=Array(r);++a<r;)c[a]=e[a+t];return c}},434:function(e,t,n){var a=n(468);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},441:function(e,t,n){var a=n(432),r=n(442),c=n(443);e.exports=function(e,t,n){return t===t?c(e,t,n):a(e,r,n)}},442:function(e,t){e.exports=function(e){return e!==e}},443:function(e,t){e.exports=function(e,t,n){for(var a=n-1,r=e.length;++a<r;)if(e[a]===t)return a;return-1}},444:function(e,t,n){var a=n(433);e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:a(e,t,n)}},445:function(e,t,n){var a=n(446),r=n(416),c=n(447);e.exports=function(e){return r(e)?c(e):a(e)}},446:function(e,t){e.exports=function(e){return e.split("")}},447:function(e,t){var n="[\\ud800-\\udfff]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+a+"|"+r+")"+"?",o="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[c,i,u].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),s="(?:"+[c+a+"?",a,i,u,n].join("|")+")",f=RegExp(r+"(?="+r+")|"+s+o,"g");e.exports=function(e){return e.match(f)||[]}},467:function(e,t,n){var a=n(441);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},480:function(e,t){e.exports=function(){}},481:function(e,t,n){var a=n(444),r=n(416),c=n(445),i=n(496);e.exports=function(e){return function(t){t=i(t);var n=r(t)?c(t):void 0,u=n?n[0]:t.charAt(0),l=n?a(n,1).join(""):t.slice(1);return u[e]()+l}}},484:function(e,t,n){var a=n(434);e.exports=function(e){var t=a(e),n=t%1;return t===t?n?t-n:t:0}}}]);
//# sourceMappingURL=59.c14a875f.chunk.js.map