(this.webpackJsonppdfdash=this.webpackJsonppdfdash||[]).push([[65],{1129:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(13),m=a(1919),p=a(162),d=a(329),u=a(375),h=a(741),v=a.n(h),E=a(742),f=a.n(E),b=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0},e.handleNext=function(){e.setState({activeStep:e.state.activeStep+1})},e.handleBack=function(){e.setState({activeStep:e.state.activeStep-1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.theme;return s.a.createElement("div",{className:"w-100"},s.a.createElement(p.a,{square:!0,elevation:0,className:"d-flex align-items-center pl-3 mb-3 "},s.a.createElement(d.a,null,"Step ",this.state.activeStep+1," of 6")),s.a.createElement(m.a,{type:"text",steps:6,position:"static",activeStep:this.state.activeStep,nextButton:s.a.createElement(u.a,{size:"small",onClick:this.handleNext,disabled:5===this.state.activeStep},"Next","rtl"===e.direction?s.a.createElement(v.a,null):s.a.createElement(f.a,null)),backButton:s.a.createElement(u.a,{size:"small",onClick:this.handleBack,disabled:0===this.state.activeStep},"rtl"===e.direction?s.a.createElement(f.a,null):s.a.createElement(v.a,null),"Back")}))}}]),a}(s.a.Component);t.a=Object(o.a)(null,{withTheme:!0})(b)},1130:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(13),m=a(1919),p=a(375),d=a(741),u=a.n(d),h=a(742),v=a.n(h),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0},e.handleNext=function(){e.setState({activeStep:e.state.activeStep+1})},e.handleBack=function(){e.setState({activeStep:e.state.activeStep-1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.theme;return s.a.createElement(m.a,{variant:"dots",steps:6,position:"static",activeStep:this.state.activeStep,style:{maxWidth:300,flexGrow:1},nextButton:s.a.createElement(p.a,{size:"small",onClick:this.handleNext,disabled:5===this.state.activeStep},"Next","rtl"===e.direction?s.a.createElement(u.a,null):s.a.createElement(v.a,null)),backButton:s.a.createElement(p.a,{size:"small",onClick:this.handleBack,disabled:0===this.state.activeStep},"rtl"===e.direction?s.a.createElement(v.a,null):s.a.createElement(u.a,null),"Back")})}}]),a}(s.a.Component);t.a=Object(o.a)(null,{withTheme:!0})(E)},1131:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(13),m=a(1919),p=a(375),d=a(741),u=a.n(d),h=a(742),v=a.n(h),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0},e.handleNext=function(){e.setState({activeStep:e.state.activeStep+1})},e.handleBack=function(){e.setState({activeStep:e.state.activeStep-1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.theme;return s.a.createElement(m.a,{type:"progress",steps:6,position:"static",activeStep:this.state.activeStep,style:{maxWidth:400,flexGrow:1},nextButton:s.a.createElement(p.a,{size:"small",onClick:this.handleNext,disabled:5===this.state.activeStep},"Next","rtl"===e.direction?s.a.createElement(u.a,null):s.a.createElement(v.a,null)),backButton:s.a.createElement(p.a,{size:"small",onClick:this.handleBack,disabled:0===this.state.activeStep},"rtl"===e.direction?s.a.createElement(v.a,null):s.a.createElement(u.a,null),"Back")})}}]),a}(s.a.Component);t.a=Object(o.a)(null,{withTheme:!0})(E)},1132:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(1885),m=a(1556),p=a(1880),d=a(375),u=a(329);var h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0,skipped:new Set},e.isStepOptional=function(e){return 1===e},e.handleNext=function(){var t=e.state.activeStep,a=e.state.skipped;e.isStepSkipped(t)&&(a=new Set(a.values())).delete(t),e.setState({activeStep:t+1,skipped:a})},e.handleBack=function(){var t=e.state.activeStep;e.setState({activeStep:t-1})},e.handleSkip=function(){var t=e.state.activeStep;if(!e.isStepOptional(t))throw new Error("You can't skip a step that isn't optional.");var a=new Set(e.state.skipped.values());a.add(t),e.setState({activeStep:e.state.activeStep+1,skipped:a})},e.handleReset=function(){e.setState({activeStep:0})},e}return Object(l.a)(a,[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"render",value:function(){var e=this,t=["Select campaign settings","Create an ad group","Create an ad"],a=this.state.activeStep;return s.a.createElement("div",{className:"w-100"},s.a.createElement(o.a,{activeStep:a,className:"horizontal-stepper-linear"},t.map((function(t,n){var l={},r={};return e.isStepOptional(n)&&(r.optional=s.a.createElement(u.a,{variant:"caption"},"Optional")),e.isStepSkipped(n)&&(l.completed=!1),s.a.createElement(m.a,Object.assign({key:t,className:"horizontal-stepper ".concat(n===a?"active":"")},l),s.a.createElement(p.a,Object.assign({className:"stepperlabel"},r),t))}))),s.a.createElement("div",null,a===t.length?s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},'All steps completed - you"re finished'),s.a.createElement(d.a,{onClick:this.handleReset,className:"jr-btn"},"Reset")):s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},function(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}(a)),s.a.createElement("div",null,s.a.createElement(d.a,{disabled:0===a,onClick:this.handleBack,className:"jr-btn"},"Back"),this.isStepOptional(a)&&s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:"jr-btn"},"Skip"),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:"jr-btn"},a===t.length-1?"Finish":"Next")))))}}]),a}(s.a.Component);t.a=h},1133:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(1885),m=a(1556),p=a(1557),d=a(375),u=a(329);var h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0,completed:{}},e.totalSteps=function(){return["Select campaign settings","Create an ad group","Create an ad"].length},e.handleNext=function(){var t;e.isLastStep()&&!e.allStepsCompleted()?t=["Select campaign settings","Create an ad group","Create an ad"].findIndex((function(t,a){return!(a in e.state.completed)})):t=e.state.activeStep+1;e.setState({activeStep:t})},e.handleBack=function(){var t=e.state.activeStep;e.setState({activeStep:t-1})},e.handleStep=function(t){return function(){e.setState({activeStep:t})}},e.handleComplete=function(){var t=e.state.completed;t[e.state.activeStep]=!0,e.setState({completed:t}),e.handleNext()},e.handleReset=function(){e.setState({activeStep:0,completed:{}})},e}return Object(l.a)(a,[{key:"completedSteps",value:function(){return Object.keys(this.state.completed).length}},{key:"isLastStep",value:function(){return this.state.activeStep===this.totalSteps()-1}},{key:"allStepsCompleted",value:function(){return this.completedSteps()===this.totalSteps()}},{key:"render",value:function(){var e=this,t=["Select campaign settings","Create an ad group","Create an ad"],a=this.state.activeStep;return s.a.createElement("div",{className:"w-100"},s.a.createElement(o.a,{nonLinear:!0,activeStep:a,className:"horizontal-stepper-linear"},t.map((function(t,n){return s.a.createElement(m.a,{key:t,className:"horizontal-stepper ".concat(n===a?"active":"")},s.a.createElement(p.a,{className:"stepperbutton",onClick:e.handleStep(n),completed:e.state.completed[n]},t))}))),s.a.createElement("div",null,this.allStepsCompleted()?s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},'All steps completed - you"re finished'),s.a.createElement(d.a,{className:"jr-btn",onClick:this.handleReset},"Reset")):s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},function(e){switch(e){case 0:return"Step 1: Select campaign settings...";case 1:return"Step 2: What is an ad group anyways?";case 2:return"Step 3: This is the bit I really care about!";default:return"Unknown step"}}(a)),s.a.createElement("div",null,s.a.createElement(d.a,{disabled:0===a,onClick:this.handleBack,className:"jr-btn"},"Back"),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:"jr-btn"},"Next"),a!==t.length&&(this.state.completed[this.state.activeStep]?s.a.createElement(u.a,{variant:"caption",className:"my-2"},"Step ",a+1," already completed"):s.a.createElement(d.a,{className:"jr-btn",variant:"contained",color:"primary",onClick:this.handleComplete},this.completedSteps()===this.totalSteps()-1?"Finish":"Complete Step"))))))}}]),a}(s.a.Component);t.a=h},1134:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(1885),m=a(1556),p=a(1880),d=a(1920),u=a(375),h=a(162),v=a(329);var E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0},e.handleNext=function(){e.setState({activeStep:e.state.activeStep+1})},e.handleBack=function(){e.setState({activeStep:e.state.activeStep-1})},e.handleReset=function(){e.setState({activeStep:0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=["Select campaign settings","Create an ad group","Create an ad"],a=this.state.activeStep;return s.a.createElement("div",{className:"w-100"},s.a.createElement(o.a,{activeStep:a,orientation:"vertical"},t.map((function(n,l){return s.a.createElement(m.a,{key:n},s.a.createElement(p.a,null,n),s.a.createElement(d.a,{className:"pb-3"},s.a.createElement(v.a,null,function(e){switch(e){case 0:return"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.";case 1:return"An ad group contains one or more ads which target a shared set of keywords.";case 2:return"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.";default:return"Unknown step"}}(l)),s.a.createElement("div",{className:"mt-2"},s.a.createElement("div",null,s.a.createElement(u.a,{disabled:0===a,onClick:e.handleBack,className:"jr-btn"},"Back"),s.a.createElement(u.a,{variant:"contained",color:"primary",onClick:e.handleNext,className:"jr-btn"},a===t.length-1?"Finish":"Next")))))}))),a===t.length&&s.a.createElement(h.a,{square:!0,elevation:0,className:"p-2"},s.a.createElement(v.a,null,'All steps completed - you"re finished'),s.a.createElement(u.a,{onClick:this.handleReset,className:"jr-btn"},"Reset")))}}]),a}(s.a.Component);t.a=E},2251:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1129),c=a(1130),i=a(1131),s=a(1132),o=a(910),m=a(1133),p=a(774),d=a(1134),u=a(394),h=a(393),v=a(5);t.default=function(e){var t=e.match;return l.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.a.createElement(h.a,{title:l.a.createElement(v.a,{id:"sidebar.components.stepper"}),match:t}),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.horizontalLinear"}),headerOutside:!0},l.a.createElement(s.a,null))),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.horizontalLinearAlternativeLabel"}),headerOutside:!0},l.a.createElement(o.a,null))),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.vertical"}),headerOutside:!0},l.a.createElement(d.a,null))),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.horizontalNonLinear"}),headerOutside:!0},l.a.createElement(m.a,null))),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.horizontalNonLinearAlternativeLabel"}),headerOutside:!0},l.a.createElement(p.a,null))),l.a.createElement("div",{className:"row mb-md-3"},l.a.createElement(u.a,{heading:l.a.createElement(v.a,{id:"component.stepper.mobileDots"}),headerOutside:!0},l.a.createElement(c.a,null)),l.a.createElement(u.a,{heading:l.a.createElement(v.a,{id:"component.stepper.mobileProgress"}),headerOutside:!0},l.a.createElement(i.a,null))),l.a.createElement("div",{className:"row"},l.a.createElement(u.a,{styleName:"col-lg-12",childrenStyle:"d-flex justify-content-center",heading:l.a.createElement(v.a,{id:"component.stepper.mobileText"}),headerOutside:!0},l.a.createElement(r.a,null))))}},393:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(398),c=a(399),i=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),n=a.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),l.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,t){return l.a.createElement(c.a,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:i(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},394:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=function(e){var t=e.heading,a=e.children,n=e.styleName,r=e.cardStyle,c=e.childrenStyle,i=e.headerOutside,s=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},i&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},t),a.length>1&&l.a.createElement("div",{className:"entry-description"},a[0])),l.a.createElement("div",{className:"jr-card ".concat(r)},!i&&t&&l.a.createElement("div",{className:"jr-card-header ".concat(s)},l.a.createElement("h3",{className:"card-heading"},t),a.length>1&&l.a.createElement("div",{className:"sub-heading"},a[0])),l.a.createElement("div",{className:"jr-card-body ".concat(c)},a.length>1?a[1]:a)))};t.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},520:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.product,a=e.styleName,n=t.image,r=t.title,c=t.description,i=t.offerPrice,s=t.mrp;return a||(a="col-sm-6 col-12 mb-3"),l.a.createElement("div",{className:"".concat(a)},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-sm-5 col-12"},l.a.createElement("img",{className:"img-fluid rounded",src:n,alt:r})),l.a.createElement("div",{className:"col-sm-7 col-12 pl-sm-3 pt-3 pt-sm-0"},l.a.createElement("h5",{className:"mb-1"}," ",r),l.a.createElement("p",{className:"text-light mb-1"}," ",c),l.a.createElement("div",{className:"d-flex align-items-end"},l.a.createElement("h5",{className:"text-muted mr-2"},l.a.createElement("del",null,l.a.createElement("i",{className:"zmdi zmdi-money"}),s)),l.a.createElement("h4",null,l.a.createElement("i",{className:"zmdi zmdi-money"}),i," ")))))}},613:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement("div",{className:"jr-card pb-2"},l.a.createElement("div",{className:"jr-card-thumb"},l.a.createElement("img",{className:"card-img-top img-fluid",alt:"products",src:"https://via.placeholder.com/400x400"})),l.a.createElement("div",{className:"jr-card-social"},l.a.createElement("ul",{className:"social-link d-flex"},l.a.createElement("li",{className:"active"},l.a.createElement("span",{className:"jr-link"},l.a.createElement("i",{className:"zmdi zmdi-favorite"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"jr-link"},l.a.createElement("i",{className:"zmdi zmdi-bookmark"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"jr-link"},l.a.createElement("i",{className:"zmdi zmdi-share"}))))))}},699:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(523);a(530);t.a=function(e){var t=Object(r.a)({accept:"image/jpeg, image/png",reject:"pdf"}),a=t.acceptedFiles,n=t.rejectedFiles,c=t.getRootProps,i=t.getInputProps;return a.map((function(e){return l.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),n.map((function(e){return l.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),l.a.createElement("div",{className:"dropzone-card"},l.a.createElement("div",{className:"dropzone"},l.a.createElement("div",c({className:"dropzone-file-btn"}),l.a.createElement("input",i()),l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"),l.a.createElement("em",null,"(Only *.jpg and png files will be accepted)"))))}},774:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(1885),m=a(1556),p=a(1557),d=a(375),u=a(329);var h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0,completed:new Set,skipped:new Set},e.totalSteps=function(){return["Select campaign settings","Create an ad group","Create an ad"].length},e.isStepOptional=function(e){return 1===e},e.handleSkip=function(){var t=e.state.activeStep;if(!e.isStepOptional(t))throw new Error("You can't skip a step that isn't optional.");var a=new Set(e.state.skipped);a.add(t),e.setState({activeStep:e.state.activeStep+1,skipped:a})},e.handleNext=function(){var t;e.isLastStep()&&!e.allStepsCompleted()?t=["Select campaign settings","Create an ad group","Create an ad"].findIndex((function(t,a){return!e.state.completed.has(a)})):t=e.state.activeStep+1;e.setState({activeStep:t})},e.handleBack=function(){e.setState({activeStep:e.state.activeStep-1})},e.handleStep=function(t){return function(){e.setState({activeStep:t})}},e.handleComplete=function(){var t=new Set(e.state.completed);t.add(e.state.activeStep),e.setState({completed:t}),t.size!==e.totalSteps()-e.skippedSteps()&&e.handleNext()},e.handleReset=function(){e.setState({activeStep:0,completed:new Set,skipped:new Set})},e}return Object(l.a)(a,[{key:"isStepComplete",value:function(e){return this.state.completed.has(e)}},{key:"completedSteps",value:function(){return this.state.completed.size}},{key:"allStepsCompleted",value:function(){return this.completedSteps()===this.totalSteps()-this.skippedSteps()}},{key:"isLastStep",value:function(){return this.state.activeStep===this.totalSteps()-1}},{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"skippedSteps",value:function(){return this.state.skipped.size}},{key:"render",value:function(){var e=this,t=["Select campaign settings","Create an ad group","Create an ad"],a=this.state.activeStep;return s.a.createElement("div",{className:"w-100"},s.a.createElement(o.a,{alternativeLabel:!0,nonLinear:!0,activeStep:a,className:"horizontal-stepper-linear"},t.map((function(t,n){var l={},r={};return e.isStepOptional(n)&&(r.optional=s.a.createElement(u.a,{variant:"caption"},"Optional")),e.isStepSkipped(n)&&(l.completed=!1),s.a.createElement(m.a,Object.assign({key:t,className:"horizontal-stepper ".concat(n===a?"active":"")},l),s.a.createElement(p.a,Object.assign({className:"stepperbutton",onClick:e.handleStep(n),completed:e.isStepComplete(n)},r),t))}))),s.a.createElement("div",null,this.allStepsCompleted()?s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},'All steps completed - you"re finished'),s.a.createElement(d.a,{onClick:this.handleReset},"Reset")):s.a.createElement("div",null,s.a.createElement(u.a,{className:"my-2"},function(e){switch(e){case 0:return"Step 1: Select campaign settings...";case 1:return"Step 2: What is an ad group anyways?";case 2:return"Step 3: This is the bit I really care about!";default:return"Unknown step"}}(a)),s.a.createElement("div",null,s.a.createElement(d.a,{disabled:0===a,onClick:this.handleBack,className:"jr-btn"},"Back"),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:"jr-btn"},"Next"),this.isStepOptional(a)&&!this.state.completed.has(this.state.activeStep)&&s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:"jr-btn"},"Skip"),a!==t.length&&(this.state.completed.has(this.state.activeStep)?s.a.createElement(u.a,{variant:"caption",className:"my-2"},"Step ",a+1," already completed"):s.a.createElement(d.a,{className:"jr-btn",variant:"contained",color:"primary",onClick:this.handleComplete},this.completedSteps()===this.totalSteps()-1?"Finish":"Complete Step"))))))}}]),a}(s.a.Component);t.a=h},910:function(e,t,a){"use strict";var n=a(47),l=a(48),r=a(50),c=a(49),i=a(0),s=a.n(i),o=a(1885),m=a(1556),p=a(1880),d=a(375),u=a(524),h=a(370),v=a(329),E=(a(5),a(699),a(17)),f=a(117),b=a(1),g=a(170),S=a(11),N=a(679),y=a(1187),k=a(52),j=a(1558),C=a(162),O=a(981),w=a(143),x=a(644),P=a.n(x),z=a(643),W=[{label:"Author(Default)"},{label:"Narrator"},{label:"Editor"},{label:"Photographer"},{label:"Photo Text"},{label:"Translator"},{label:"Compiler"},{label:"Illustrator"},{label:"Potential Writer"},{label:"Additional Writer"},{label:"Ghost Writter"},{label:"Foreword Writer"},{label:"Introduction Writer"},{label:"Preface Writer"},{label:"Afterword Writer"},{label:"Notes Writter"},{label:"Prologue Writer"},{label:"Commentary Writer"},{label:"Original Writer"},{label:"Series Editor"},{label:"Volume Editor"},{label:"Chief Editor"},{label:"Consultant Editor"},{label:"Adaptor Editor"},{label:"Printer"},{label:"Publisher"},{label:"Prior Owner"}].map((function(e){return{value:e.label,label:e.label}})),B=Object(y.a)((function(e){return{root:{flexGrow:1,height:200},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(z.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}}));function F(e){var t=e.inputRef,a=Object(g.a)(e,["inputRef"]);return s.a.createElement("div",Object.assign({ref:t},a))}var I={Control:function(e){var t=e.children,a=e.innerProps,n=e.innerRef,l=e.selectProps,r=l.classes,c=l.TextFieldProps;return s.a.createElement(h.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:F,inputProps:Object(b.a)({className:r.input,ref:n,children:t},a)}},c))},Menu:function(e){return s.a.createElement(C.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},MultiValue:function(e){return s.a.createElement(O.a,{tabIndex:-1,label:e.children,className:Object(S.a)(e.selectProps.classes.chip,Object(f.a)({},e.selectProps.classes.chipFocused,e.isFocused)),onDelete:e.removeProps.onClick,deleteIcon:s.a.createElement(P.a,e.removeProps)})},NoOptionsMessage:function(e){return s.a.createElement(v.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return s.a.createElement(w.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return s.a.createElement(v.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return s.a.createElement(v.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return s.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};var A=function(){var e=B(),t=Object(k.a)(),a=s.a.useState(null),n=Object(E.a)(a,2),l=n[0],r=n[1],c=s.a.useState(null),i=Object(E.a)(c,2);i[0],i[1];var o={input:function(e){return Object(b.a)(Object(b.a)({},e),{},{color:t.palette.text.primary,"& input":{font:"inherit"}})}};return s.a.createElement("div",{className:e.root},s.a.createElement(j.a,null,s.a.createElement(N.a,{classes:e,styles:o,inputId:"react-select-single",TextFieldProps:{label:"Contributor Type",InputLabelProps:{htmlFor:"react-select-single",shrink:!0},placeholder:"Select Contributor Type"},options:W,components:I,value:l,onChange:function(e){r(e)}}),s.a.createElement("div",{className:e.divider})))},R=[{label:"Fiction"},{label:"Horror"},{label:"Science"},{label:"Research"},{label:"Education"}].map((function(e){return{value:e.label,label:e.label}})),T=Object(y.a)((function(e){return{root:{flexGrow:1,height:250},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(z.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}}));function L(e){var t=e.inputRef,a=Object(g.a)(e,["inputRef"]);return s.a.createElement("div",Object.assign({ref:t},a))}var U={Control:function(e){var t=e.children,a=e.innerProps,n=e.innerRef,l=e.selectProps,r=l.classes,c=l.TextFieldProps;return s.a.createElement(h.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:L,inputProps:Object(b.a)({className:r.input,ref:n,children:t},a)}},c))},Menu:function(e){return s.a.createElement(C.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},MultiValue:function(e){return s.a.createElement(O.a,{tabIndex:-1,label:e.children,className:Object(S.a)(e.selectProps.classes.chip,Object(f.a)({},e.selectProps.classes.chipFocused,e.isFocused)),onDelete:e.removeProps.onClick,deleteIcon:s.a.createElement(P.a,e.removeProps)})},NoOptionsMessage:function(e){return s.a.createElement(v.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return s.a.createElement(w.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return s.a.createElement(v.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return s.a.createElement(v.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return s.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};var M=function(){var e=T(),t=Object(k.a)(),a=s.a.useState(null),n=Object(E.a)(a,2),l=n[0],r=n[1],c=s.a.useState(null),i=Object(E.a)(c,2);i[0],i[1];var o={input:function(e){return Object(b.a)(Object(b.a)({},e),{},{color:t.palette.text.primary,"& input":{font:"inherit"}})}};return s.a.createElement("div",{className:e.root},s.a.createElement(j.a,null,s.a.createElement(N.a,{classes:e,styles:o,inputId:"react-select-single",TextFieldProps:{label:"Genre",InputLabelProps:{htmlFor:"react-select-single",shrink:!0},placeholder:"Search a country (start with a)"},options:R,components:U,value:l,onChange:function(e){r(e)}}),s.a.createElement("div",{className:e.divider})))},V=a(382),D=a(384),G=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={checkedA:!0,checkedB:!0,checkedC:!1,checkedD:!1,checkedE:!0,checkedF:!0,checkedG:!0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(V.a,{control:s.a.createElement(D.a,{color:"primary",classes:{checked:"text-primary",bar:"bg-success"},checked:this.state.checkedA,onChange:function(t,a){return e.setState({checkedA:a})}}),label:"Shareable"}),s.a.createElement(V.a,{control:s.a.createElement(D.a,{classes:{checked:"text-danger",bar:"bg-danger"},checked:this.state.checkedF,onChange:function(t,a){return e.setState({checkedF:a})}}),label:"UnShareable"}),s.a.createElement(V.a,{control:s.a.createElement(D.a,{classes:{checked:"text-warning",bar:"bg-warning"},checked:this.state.checkedG,onChange:function(t,a){return e.setState({checkedG:a})}}),label:"Limited Share"}))}}]),a}(i.Component);a(523),a(530);var q=a(704),Y=a.n(q),H=(a(705),function(){return s.a.createElement(Y.a,{getUploadParams:function(e){e.meta;return{url:"http://localhost:3000/api/upload"}},onChangeStatus:function(e,t){var a=e.meta,n=e.file;console.log(t,a,n)},onSubmit:function(e,t){console.log(e.map((function(e){return e.meta}))),t.forEach((function(e){return e.remove()}))},accept:"image/*",maxFiles:1,inputContent:"Upload Your Publication Here"})}),J=function(){return s.a.createElement(Y.a,{getUploadParams:function(e){e.meta;return{url:"http://localhost:3000/api/upload"}},onChangeStatus:function(e,t){var a=e.meta,n=e.file;console.log(t,a,n)},onSubmit:function(e,t){console.log(e.map((function(e){return e.meta}))),t.forEach((function(e){return e.remove()}))},accept:"image/*",maxFiles:2,inputContent:"Upload Publication Cover Image",inputWithFilesContent:function(e){return"".concat(2-e.length," more")}})},K=(a(55),a(520),a(613),function(){return s.a.createElement("div",{className:"jr-card pb-2"},s.a.createElement("div",{className:"jr-card-thumb"},s.a.createElement("img",{className:"card-img-top img-fluid",alt:"products",src:"https://via.placeholder.com/400x400"})),s.a.createElement("div",{className:"jr-card-social"},s.a.createElement("ul",{className:"social-link d-flex"},s.a.createElement("li",{className:"active"},s.a.createElement("span",{className:"jr-link"},s.a.createElement("i",{className:"zmdi zmdi-favorite"}))),s.a.createElement("li",null,s.a.createElement("span",{className:"jr-link"},s.a.createElement("i",{className:"zmdi zmdi-bookmark"}))),s.a.createElement("li",null,s.a.createElement("span",{className:"jr-link"},s.a.createElement("i",{className:"zmdi zmdi-share"}))))))});function Q(e){switch(e){case 0:return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"title",label:"Title",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"subtitle",label:"SubTitle",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"language",label:"Language",type:"text",autoComplete:"Language",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"description",label:"Description",type:"text",autoComplete:"Description",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"summary",label:"Book Summary",type:"text",autoComplete:"summary",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"isbn",label:"ISBN",type:"text",autoComplete:"ISBN",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"editionnumb",label:"Edition Number",type:"text",autoComplete:"editionnumb",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"editionname",label:"Edition Name",type:"text",autoComplete:"Edition Name",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"price",label:"Book Price",type:"number",autoComplete:"price",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(M,null)))));case 1:return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(A,null)),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"authname",label:"Full Name",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(A,null)),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"authname",label:"Full Name",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"brifbio",label:"Author Bio",margin:"normal",multiline:!0,rowsMax:"4",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"aboutAuthor",label:"About The Author",margin:"normal",multiline:!0,rowsMax:"4",fullWidth:!0})))));case 2:return s.a.createElement("div",{className:"tab-pane",id:"tab2-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"bookprice",label:"Book Price",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"commision",label:"Commision",margin:"normal",fullWidth:!0})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"userName",type:"password",label:"UserName",margin:"normal",fullWidth:!0}))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,{id:"cardType",label:"CardType",margin:"normal",fullWidth:!0})))));case 3:return s.a.createElement("div",{className:"tab-pane",id:"tab2-4"},s.a.createElement("h3",{className:"title text-primary"},"Upload Publication"),s.a.createElement(H,null));case 4:return s.a.createElement("div",{className:"tab-pane",id:"tab2-4"},s.a.createElement("h3",{className:"title text-primary"},"Upload Cover Image"),s.a.createElement(J,null));case 5:return s.a.createElement("div",{className:"tab-pane",id:"tab2-4"},s.a.createElement(G,null));case 6:return s.a.createElement("div",{className:"tab-pane",id:"tab2-4"},s.a.createElement("div",{class:"row"},s.a.createElement(K,null)));case 7:return s.a.createElement("div",{className:"tab-pane",id:"tab2-4"},s.a.createElement("h3",{className:"title text-primary"},"Confirm Submission"),s.a.createElement("p",null,s.a.createElement("strong",null,"Lorem")," I verify that all information is correct and agree to the terms nd conditions set forth by the Publication and Publisher"),s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement(u.a,{color:"primary"})," ",s.a.createElement("span",null,"I agree with the Terms and Conditions.")));default:return"Uknown stepIndex"}}var X=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:0},e.handleNext=function(){var t=e.state.activeStep;e.setState({activeStep:t+1})},e.handleBack=function(){var t=e.state.activeStep;e.setState({activeStep:t-1})},e.handleReset=function(){e.setState({activeStep:0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=["Book Information","Author Information","Payment Details","UploadPublication","UploadCover","Share Settings","Preview","Confirm and Finish"],t=this.state.activeStep;return s.a.createElement("div",{className:"w-100"},s.a.createElement(o.a,{activeStep:t,alternativeLabel:!0,className:"horizontal-stepper-linear"},e.map((function(e,a){return s.a.createElement(m.a,{key:e,className:"horizontal-stepper ".concat(a===t?"active":"")},s.a.createElement(p.a,{className:"stepperlabel"},e))}))),s.a.createElement("div",null,this.state.activeStep===e.length?s.a.createElement("div",null,s.a.createElement(v.a,{className:"my-2"},"Publication Successfully Created"),s.a.createElement(d.a,{onClick:this.handleReset},"Reset")):s.a.createElement("div",null,Q(t),s.a.createElement("div",null,s.a.createElement(d.a,{disabled:0===t,onClick:this.handleBack,className:"mr-2"},"Back"),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.handleNext},t===e.length-1?"Finish":"Next")))))}}]),a}(s.a.Component);t.a=X}}]);
//# sourceMappingURL=65.88054e38.chunk.js.map