(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{417:function(t,e,r){"use strict";r.r(e);var n=r(24),o=r(5),i=r.n(o),c=r(324),a=r.n(c),u=r(3285),s=r(2),l=r(6),f=r.n(l),p=r(1080),m=r.n(p),h=[{oc_prefix:"https://user.oc-static.com/",imgix_url:"https://oc-user.imgix.net/"},{oc_prefix:"//user.oc-static.com/",imgix_url:"https://oc-user.imgix.net/"},{oc_prefix:"https://course.oc-static.com/",imgix_url:"https://oc-course.imgix.net/"},{oc_prefix:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/",imgix_url:"https://oc-course.imgix.net/"},{oc_prefix:"https://sdz-upload.s3.amazonaws.com/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"//sdz-upload.s3.amazonaws.com/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"https://s3-eu-west-1.amazonaws.com/sdz-upload/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"//s3-eu-west-1.amazonaws.com/sdz-upload/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"https://static.oc-static.com/",imgix_url:"https://oc-static.imgix.net/"},{oc_prefix:"//static.oc-static.com/",imgix_url:"https://oc-static.imgix.net/"},{oc_prefix:"https://stage.oc-static.com/",imgix_url:"https://oc-stage.imgx.net/"},{oc_prefix:"/bundles/",imgix_url:"https://oc-bundles-images.imgix.net/"},{oc_prefix:"/images/",imgix_url:"https://oc-images.imgix.net/"}];var b={getUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=function(t){var e="";return h.some(function(r){var n=r.oc_prefix.length;return t.substr(0,n)===r.oc_prefix&&(e=r.imgix_url+t.substr(n),!0)}),e}(t);if(!n)return t;var o=-1===n.indexOf("?")?"?":"&",i="".concat(n).concat(o,"auto=compress,format&q=80");return e&&(i+="&w=".concat(e)),r&&(i+="&h=".concat(r)),i}};function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j={src:f.a.string.isRequired,alt:f.a.string,disableCdn:f.a.bool,height:f.a.number,otherAttributes:f.a.object,width:f.a.number},_=function(t){function e(t){var r,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(r=!(o=O(e).call(this,t))||"object"!==g(o)&&"function"!=typeof o?w(n):o).state={hasCdnError:!1},r.onCdnImageError=r.onCdnImageError.bind(w(r)),r}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,i.a.Component),r=e,(n=[{key:"createSrcSet",value:function(t){var e=this.props,r=e.width,n=e.height;if(!r&&!n)return null;for(var o=[],i=0;i<2;i++){var c=i+1;o.push("".concat(t,"&dpr=").concat(c," ").concat(c,"x"))}return o.join(",")}},{key:"onCdnImageError",value:function(){this.setState({hasCdnError:!0})}},{key:"renderOriginalImage",value:function(){var t=this.props,e=t.src,r=t.width,n=t.height,o=t.otherAttributes,c=y(t,["src","width","height","otherAttributes"]);return c=m()(c,["disableCdn"]),i.a.createElement("img",d({src:e,width:r||null,height:n||null},o,c))}},{key:"renderCdnImage",value:function(){var t=this.props,e=t.src,r=t.width,n=t.height,o=t.otherAttributes,c=y(t,["src","width","height","otherAttributes"]);c=m()(c,["disableCdn"]);var a=b.getUrl(e,r,n);return i.a.createElement("img",d({onError:this.onCdnImageError,srcSet:this.createSrcSet(a),src:a,width:r||null,height:n||null},o,c))}},{key:"render",value:function(){return this.props.disableCdn||this.state.hasCdnError?this.renderOriginalImage():this.renderCdnImage()}}])&&v(r.prototype,n),o&&v(r,o),e}();_.propTypes=j,_.defaultProps={alt:"",disableCdn:!1,height:null,width:null,otherAttributes:{}};var C=_;function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var A="".concat("data-image-cdn-","attr-"),I="".concat(A,"src"),k="".concat(A,"alt"),T="".concat("data-image-cdn-","background-image"),z="".concat("data-image-cdn-","width"),D="".concat("data-image-cdn-","height"),U={class:"className"},F=[z,D,I,k];function W(t){return{width:+(t.getAttribute(z)||0),height:+(t.getAttribute(D)||0)}}var q=function(t){var e=t.disableCdn,r=void 0!==e&&e;S(s.a.document.querySelectorAll("[".concat(I,"]"))).forEach(function(t){var e={},n=function(t){return{src:t.getAttribute(I),alt:t.getAttribute(k)||""}}(t),o=n.src,c=n.alt;S(t.attributes).forEach(function(t){if(!(F.indexOf(t.name)>-1)&&t.name.substr(0,A.length)===A){var r=function(t){var e=t.substr(A.length);return U[e]||e}(t.name);e[r]=t.value}});var s=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach(function(e){P(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},W(t),{src:o,alt:c,disableCdn:r,otherAttributes:e});a.a.render(i.a.createElement(u.a,null,i.a.createElement(C,s)),t)})},N=function(t){var e=t.disableCdn,r=void 0!==e&&e;S(s.a.document.querySelectorAll("[".concat(T,"]"))).forEach(function(t){var e=t.getAttribute(T),n=W(t),o=r?e:b.getUrl(e,n.width,n.height);t.style.backgroundImage="url(".concat(o,")")})};function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(r,!0).forEach(function(e){Q(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function V(t){var e="WithFromImageCdn(".concat(t.displayName||t.name,")"),r=function(e){function r(){var t,e,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);for(var c=arguments.length,a=new Array(c),u=0;u<c;u++)a[u]=arguments[u];return o=this,i=(t=K(r)).call.apply(t,[this].concat(a)),e=!i||"object"!==R(i)&&"function"!=typeof i?L(o):i,Q(L(e),"state",{filesWithErrors:{},urlsToCdnUrls:{}}),Q(L(e),"fromImageCdn",function(t){var r=e.state,o=r.filesWithErrors,i=r.urlsToCdnUrls;if(!Object(n.c)("cdnImage")||o[t])return t;if(i[t])return i[t];var c=b.getUrl(t),a=new s.a.window.Image;return a.onerror=function(){return e.markFileAsError(t)},a.onload=function(){return e.markFileAsSuccess(t,c)},a.src=c,c}),Q(L(e),"markFileAsError",function(t){e.setState(function(e){return{filesWithErrors:G({},e.filesWithErrors,Q({},t,!0))}})}),Q(L(e),"markFileAsSuccess",function(t,r){e.setState(function(e){return{urlsToCdnUrls:G({},e.urlsToCdnUrls,Q({},t,r))}})}),e}var o,c,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(r,i.a.Component),o=r,(c=[{key:"render",value:function(){return i.a.createElement(t,J({},this.props,{fromImageCdn:this.fromImageCdn}))}}])&&H(o.prototype,c),a&&H(o,a),r}();return Q(r,"displayName",e),r}r.d(e,"ImageCdn",function(){return C}),r.d(e,"withFromImageCdn",function(){return V}),r.d(e,"imgixService",function(){return b});e.default={name:"imageCdn",init:function(){var t=Object(n.c)("cdnImage");q({disableCdn:!t}),N({disableCdn:!t})}}}}]);
//# sourceMappingURL=default~aboutUs~apprenticeship~auth~business~commonOld~courseView~funding~funnel~home~jobGuarantee~j~76bb7e19.c96dfd99a9b71de6f89d.js.map