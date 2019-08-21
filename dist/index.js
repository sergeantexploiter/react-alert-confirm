!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports["react-alert-confirm"]=t(require("react"),require("react-dom")):e["react-alert-confirm"]=t(e.react,e["react-dom"])}(window,function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.children,o=e.onClick,r=e.style;return a.createElement("button",{style:r,onClick:o,className:"alert-confirm-button "+(t||"default")},n)},t}(a.Component);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(6);var o=n(3),r=n(1);t.Button=r.default,t.alert=function(e){var t={type:"alert"};return"string"==typeof e?t.content=e:Object.assign(t,e),o.default(t)},t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(4),a=n(5),i=n(1),c=function(){function e(e){var t=e.title,n=e.content,r=e.footer,a=e.zIndex,c=e.closeBefore,s=e.type,u=void 0===s?"confirm":s,l=e.onOk,f=e.onCancel,p=e.okText,m=e.cancelText,d=this;this.zIndex=1e3,this.type="confirm",this.status="mount",this.action=null,this.container=null,this.closeBefore=null,this.dispatch=function(e){d.action=e;var t=d,n=t.closeBefore,o=t.onOk,r=t.onCancel,a=t.resolve,i=t.reject;n?n(e,d.closePopup.bind(d)):("ok"===e&&(o&&o(),a&&a(d)),"cancel"!==e&&"close"!==e||(r&&r(),i&&i(d)),d.closePopup())},this.closePopup=function(){d.status="unmount",d.render()};var y=document.createElement("div");y.className="alert-confirm-container",document.body.appendChild(y),Number.isNaN(a)||"number"!=typeof a||(y.style.zIndex=String(a),this.zIndex=a),this.container=y,this.title=t,this.content=n;var h=o.createElement(o.Fragment,null,"alert"!==u&&o.createElement(i.default,{onClick:function(){return d.dispatch("cancel")}},m||"取 消"),o.createElement(i.default,{type:"primary",onClick:function(){return d.dispatch("ok")}},p||"确 认"));this.footer=r||h,this.type=u,this.onOk=l,this.onCancel=f,c&&(this.closeBefore=c),this.render()}return e.prototype.async=function(){var e=this;return new Promise(function(t,n){e.resolve=t,e.reject=n})},e.prototype.render=function(){var e=this,t=e.container,n=e.title,i=e.content,c=e.footer,s=e.type,u=e.status,l=e.dispatch;r.unmountComponentAtNode(t),r.render(o.createElement(a.default,{type:s,title:n,content:i,footer:c,dispatch:function(e){return l(e)},status:u,onClosePopup:function(){r.unmountComponentAtNode(t),document.body.removeChild(t)}}),t)},e}();t.default=function(e){var t={};if("string"==typeof e)t.content=e;else{if("object"!=typeof e)throw new Error("options required type is object or and string!");Object.assign(t,e)}return new c(t)}},function(e,n){e.exports=t},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={maskClassName:"",mainClassName:""},t.animationEnd=function(){t.setState({maskClassName:"",mainClassName:""});var e=t.props,n=e.status,o=e.onClosePopup;"unmount"===n&&o&&o()},t}return r(t,e),t.prototype.componentDidMount=function(){"mount"===this.props.status?this.setState({maskClassName:"fadeIn",mainClassName:"zoomIn"}):this.setState({maskClassName:"fadeOut",mainClassName:"zoomOut"})},t.prototype.render=function(){var e=this.state,t=e.maskClassName,n=e.mainClassName,o=this.props,r=o.title,i=o.content,c=o.footer,s=o.dispatch,u=o.type;return a.createElement("div",{className:"alert-confirm-mask "+t},a.createElement("div",{className:"alert-confirm-main "+n+" "+u,onAnimationEnd:this.animationEnd},a.createElement("div",{className:"alert-confirm-header"},a.createElement("div",{className:"alert-confirm-header-title"},r),"alert"!==u&&a.createElement("div",{className:"alert-confirm-header-close"},a.createElement("span",{className:"icon",onClick:function(){return s("close")}},"✕"))),a.createElement("div",{className:"alert-confirm-content"},i),a.createElement("div",{className:"alert-confirm-footer"},c)))},t}(a.Component);t.default=i},function(e,t){}])});