(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1097:function(e,t,a){"use strict";var n=a(397);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(5)),i=(0,n(a(401)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),r.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");t.default=i},1451:function(e,t,a){"use strict";var n=a(397);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(5)),i=(0,n(a(401)).default)(r.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=i},2359:function(e,t,a){"use strict";t.a=Object.freeze({STATUS_NOT_STARTED:"not started",STATUS_IN_PROGRESS:"in progress",STATUS_AWAITING_REVIEW:"awaiting review",STATUS_READY_FOR_REVIEW:"ready for review",STATUS_CAN_RETRY:"retry",STATUS_FAILED:"failed",STATUS_PASSED:"passed"})},2360:function(e,t,a){"use strict";var n=a(397);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(5)),i=(0,n(a(401)).default)(r.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"AssignmentTurnedIn");t.default=i},2361:function(e,t,a){"use strict";var n=a(397);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(5)),i=(0,n(a(401)).default)(r.default.createElement("path",{d:"M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.default=i},2362:function(e,t,a){"use strict";var n=a(397);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(5)),i=(0,n(a(401)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=i},3322:function(e,t,a){"use strict";var n=a(396),r=a.n(n),i=a(5),o=a.n(i),c=a(6),s=a.n(c),l=a(2360),u=a.n(l),d=a(403),f=a(2362),p=a.n(f),b=a(1451),g=a.n(b),m=a(2361),S=a.n(m),v=a(1097),T=a.n(v),y=a(3288),I=a(3385),_=a(2359);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach(function(t){r()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E=_.a.STATUS_AWAITING_REVIEW,R=_.a.STATUS_CAN_RETRY,w=_.a.STATUS_FAILED,h=_.a.STATUS_IN_PROGRESS,j=_.a.STATUS_NOT_STARTED,P=_.a.STATUS_PASSED,z=_.a.STATUS_READY_FOR_REVIEW,$={activityType:s.a.oneOf(["quiz","skill","activity",""]),classes:s.a.objectOf(s.a.string),className:s.a.string,isBig:s.a.bool,isIconHidden:s.a.bool,number:s.a.number,status:s.a.string},M={activityType:"",classes:{},className:"",isBig:!1,isIconHidden:!1,number:null,status:j},U=function(e){var t,a,n,i=e.activityType,c=e.classes,s=e.className,l=e.status,d=e.number,f=e.isBig,b=e.isIconHidden,m=(t={},r()(t,j,function(){return{skill:y.a.SKILL,quiz:u.a,activity:y.a.ARROW_RIGHT}[i]||null}),r()(t,h,function(){return S.a}),r()(t,E,function(){return T.a}),r()(t,P,function(){return g.a}),r()(t,R,function(){return y.a.CIRCLE_ARROW}),r()(t,w,function(){return p.a}),r()(t,z,function(){return S.a}),t),v=(a={},r()(a,j,c.notStarted),r()(a,h,c.progress),r()(a,E,c.awaiting),r()(a,P,c.passed),r()(a,R,c.retry),r()(a,w,c.failed),r()(a,z,c.readyForReview),a),_={className:c.icon},O=m[l];"function"!=typeof O&&(O=function(){return null});var A=O();"string"==typeof A?(n=I.a,_.name=A):n=A;var $=n&&!b?o.a.createElement(n,_):d,M=v[l]?v[l]:"",U=f?c.big:"";return o.a.createElement("div",{className:"".concat(c.root," ").concat(U," ").concat(M," ").concat(s)},$)};U.propTypes=$,U.defaultProps=M,t.a=Object(d.a)(function(e){var t=e.palette,a=e.spacing,n=e.typography;function r(e){return{color:e,borderColor:e}}function i(e){return{width:e,height:e,lineHeight:e}}var o={big:{container:a(5),smallIcon:".8em",normalIcon:"1em",bigIcon:"1.2em"},small:{container:a(3),smallIcon:".5em",normalIcon:".6em",bigIcon:".75em"}},c=function(e){return{"& $icon":i(e)}};return{root:A({},n.caption,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",textAlign:"center",flexShrink:0,backgroundColor:t.background.primary,boxSizing:"border-box !important",border:"1px solid"},i(o.small.container),{"&$notStarted":c(o.small.normalIcon),"&$passed":c(o.small.bigIcon),"&$failed":c(o.small.bigIcon),"&$awaiting":c(o.small.normalIcon),"&$retry":c(o.small.smallIcon),"&$progress":c(o.small.bigIcon),"&$readyForReview":c(o.small.bigIcon)}),big:A({},i(o.big.container),{"&$notStarted":c(o.big.normalIcon),"&$passed":c(o.big.bigIcon),"&$failed":c(o.big.bigIcon),"&$awaiting":c(o.big.normalIcon),"&$retry":c(o.big.smallIcon),"&$progress":c(o.big.bigIcon),"&$readyForReview":c(o.big.bigIcon)}),notStarted:r(t.status.notStarted),passed:r(t.status.success),failed:r(t.status.fail),awaiting:r(t.status.awaiting),retry:r(t.status.retry),progress:r(t.status.inProgress),readyForReview:r(t.status.success),icon:{}}})(U)}}]);
//# sourceMappingURL=default~dashboard~mcqView~p2pView~projects~projectsAdmin~universalSearch.58771f42c61a6948233d.js.map