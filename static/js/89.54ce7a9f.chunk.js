(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[89],{1098:function(e,t,a){"use strict";var n=a(17),c=a(0),l=a.n(c),r=a(507);t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)({r:"241",g:"112",b:"19",a:"1"}),m=Object(n.a)(o,2),d=m[0],s=m[1],u="rgba(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", ").concat(d.a,")");return l.a.createElement("div",null,l.a.createElement("div",{className:"cp-swatch",onClick:function(){i(!a)}},l.a.createElement("div",{className:"cp-color",style:{backgroundColor:u}})),a?l.a.createElement("div",{className:"cp-popover"},l.a.createElement("div",{className:"cp-cover",onClick:function(){i(!1)}}),l.a.createElement(r.SketchPicker,{color:d,onChange:function(e){s(e.rgb)}})):null)}},1099:function(e,t,a){"use strict";var n=a(17),c=a(0),l=a.n(c),r=a(507);t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return l.a.createElement("div",{className:"z-index-20"},l.a.createElement("button",{onClick:function(){i(!i)}},"Toggle Picker"),a&&l.a.createElement("div",{style:{position:"absolute"}},l.a.createElement(r.CompactPicker,{color:"#333",onChangeComplete:function(e){var t=e.hex;return console.log(t)}})))}},1100:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(507);t.a=function(){return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("button",null,"Pick Color"),c.a.createElement("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:15}},c.a.createElement(l.BlockPicker,{color:"#333",onChangeComplete:function(e){var t=e.hex;return console.log(t)}})))}},1166:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(507),r=a(431),i=a(220),o=function(){return c.a.createElement(i.a,{className:"size-40"},c.a.createElement("i",{className:"zmdi zmdi-colorize"}))},m=Object(l.CustomPicker)((function(e){var t=e.rgb,a=e.hsl,n=e.onChange;return c.a.createElement("div",{style:{height:40,width:"80%",position:"relative"}},c.a.createElement(r.Alpha,{rgb:t,hsl:a,onChange:n,pointer:o}))}));t.a=function(){return c.a.createElement(m,{color:"coral",onChangeComplete:function(e){var t=e.hex;return console.log(t)}})}},1174:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(507),r=a(431),i=Object(l.CustomPicker)((function(e){var t=e.hex,a=e.hsl,n=e.onChange,l={hue:{height:10,position:"relative",marginBottom:10},input:{height:38,border:"1px solid ".concat(t),paddingLeft:10},swatch:{width:40,height:38,background:t}};return c.a.createElement("div",null,c.a.createElement("div",{style:l.hue},c.a.createElement(r.Hue,{hsl:a,onChange:n})),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.EditableInput,{style:{input:l.input},value:t,onChange:n}),c.a.createElement("div",{style:l.swatch})))}));t.a=function(){return c.a.createElement(i,{color:"orange",onChangeComplete:function(e){var t=e.hex;return console.log(t)}})}},1175:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(18),r=(a(1),{changeColor:function(e){return{type:"APP/CHANGE_COLOR",hex:e.hex}}}),i=a(507),o={onChangeColor:r.changeColor};t.a=Object(l.c)((function(e){return{color:e.color}}),o)((function(e){var t=e.color,a=e.onChangeColor;return c.a.createElement(i.SketchPicker,{color:t,onChangeComplete:a})}))},2255:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(507),r=a(394),i=a(1098),o=a(1099),m=a(1100),d=a(1174),s=a(1166),u=a(1175),h=a(5);t.default=function(){return c.a.createElement("div",{className:"row animated slideInUpTiny animation-duration-3"},c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.alpha"})},c.a.createElement(l.AlphaPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.hue"})},c.a.createElement(l.HuePicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.circle"})},c.a.createElement(l.CirclePicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.compact"})},c.a.createElement(l.CompactPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.block"})},c.a.createElement(l.BlockPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.chrome"})},c.a.createElement(l.ChromePicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.github"})},c.a.createElement(l.GithubPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.twitter"})},c.a.createElement(l.TwitterPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.withRedux"})},c.a.createElement(u.a,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.sketch"})},c.a.createElement(l.SketchPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.material"})},c.a.createElement(l.MaterialPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.basic"})},c.a.createElement(i.a,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.basicToggle"})},c.a.createElement(o.a,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.custom"})},c.a.createElement(d.a,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.customPointer"})},c.a.createElement(s.a,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.photoshop"})},c.a.createElement(l.PhotoshopPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.swatches"})},c.a.createElement(l.SwatchesPicker,null)),c.a.createElement(r.a,{styleName:"col-md-6",childrenStyle:"d-flex justify-content-center",heading:c.a.createElement(h.a,{id:"picker.color.alpha"})},c.a.createElement(m.a,null)))}},394:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=function(e){var t=e.heading,a=e.children,n=e.styleName,l=e.cardStyle,r=e.childrenStyle,i=e.headerOutside,o=e.headingStyle;return c.a.createElement("div",{className:"".concat(n)},i&&c.a.createElement("div",{className:"jr-entry-header"},c.a.createElement("h3",{className:"entry-heading"},t),a.length>1&&c.a.createElement("div",{className:"entry-description"},a[0])),c.a.createElement("div",{className:"jr-card ".concat(l)},!i&&t&&c.a.createElement("div",{className:"jr-card-header ".concat(o)},c.a.createElement("h3",{className:"card-heading"},t),a.length>1&&c.a.createElement("div",{className:"sub-heading"},a[0])),c.a.createElement("div",{className:"jr-card-body ".concat(r)},a.length>1?a[1]:a)))};t.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);
//# sourceMappingURL=89.54ce7a9f.chunk.js.map