"use strict";(self.webpackChunkrgoit_react_hw_05_movies=self.webpackChunkrgoit_react_hw_05_movies||[]).push([[860],{383:function(n,t,e){e.d(t,{DC:function(){return i},IV:function(){return o},LI:function(){return a},Mc:function(){return c},wH:function(){return u}});var r="c7932d4433e8fee3124d33f1c9b27082",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()}))}},672:function(n,t,e){e.d(t,{O:function(){return s}});var r,i=e(87),c=e(689),o=e(168),u=e(444).ZP.ul(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    list-style: none;\n"]))),a=e(184),s=function(n){var t=n.trandingMovies,e=(0,c.TH)();return(0,a.jsx)(u,{children:t.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},860:function(n,t,e){e.r(t);var r=e(861),i=e(439),c=e(757),o=e.n(c),u=e(791),a=e(383),s=e(672),f=e(184);t.default=function(){var n=(0,u.useState)(null),t=(0,i.Z)(n,2),e=t[0],c=t[1],h=(0,u.useState)(!1),l=(0,i.Z)(h,2),d=l[0],p=l[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,a.DC)();case 4:t=n.sent,e=t.results,c(e),n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",alert("Sorry, please try again"));case 13:return n.prev=13,p(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending today"}),d&&(0,f.jsx)("div",{children:"...Loading"}),e&&(0,f.jsx)(s.O,{trandingMovies:e})]})}},861:function(n,t,e){function r(n,t,e,r,i,c,o){try{var u=n[c](o),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=860.1c4192d4.chunk.js.map