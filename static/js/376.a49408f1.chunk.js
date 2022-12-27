"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[376],{383:function(n,e,t){t.d(e,{DC:function(){return i},IV:function(){return c},LI:function(){return s},Mc:function(){return o},wH:function(){return a}});var r="c7932d4433e8fee3124d33f1c9b27082",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},s=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()}))}},376:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,c=t(861),a=t(439),s=t(757),u=t.n(s),d=t(791),l=t(87),h=t(689),f=t(383),p=t(168),v=t(444),x=v.ZP.div(r||(r=(0,p.Z)(["\n    padding-top: 20px;\n    padding-bottom: 5px;\n    display: flex;\n    gap: 20px;\n    border-bottom: 1px solid gray;\n"]))),g=v.ZP.div(i||(i=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n"]))),m=v.ZP.div(o||(o=(0,p.Z)(["\n    border-bottom: 1px solid #000;\n"]))),j=t(184),b=function(n){var e=n.movieData,t=e.poster_path,r=e.original_title,i=e.vote_average,o=e.overview,c=e.genres,a="https://image.tmdb.org/t/p/w200".concat(t),s=c.map((function(n){return n.name})).join(" "),u=(0,h.UO)().movieId;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)("img",{src:a,alt:r}),(0,j.jsxs)(g,{children:[(0,j.jsx)("h2",{children:r}),(0,j.jsxs)("p",{children:["User Score: ",Math.round(10*i),"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:o}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:s})]})]}),(0,j.jsxs)(m,{children:["Additional information",(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"/movies/".concat(u,"/cast"),children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"/movies/".concat(u,"/reviews"),children:"Reviews"})})]})]})]})},_=function(){var n,e,t=(0,d.useState)(null),r=(0,a.Z)(t,2),i=r[0],o=r[1],s=(0,d.useState)(!1),p=(0,a.Z)(s,2),v=p[0],x=p[1],g=(0,h.UO)().movieId,m=(0,h.TH)();return(0,d.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,f.Mc)(g);case 4:e=n.sent,o(e),n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",alert("Sorry, please try again"));case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[g]),(0,j.jsxs)("div",{children:[(0,j.jsx)(l.rU,{to:null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),v&&(0,j.jsx)("div",{children:"...Loading"}),i&&(0,j.jsx)(b,{movieData:i}),(0,j.jsx)(d.Suspense,{fallback:(0,j.jsx)("div",{children:"...Loading"}),children:(0,j.jsx)(h.j3,{})})]})}},861:function(n,e,t){function r(n,e,t,r,i,o,c){try{var a=n[o](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var c=n.apply(e,t);function a(n){r(c,i,o,a,s,"next",n)}function s(n){r(c,i,o,a,s,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=376.a49408f1.chunk.js.map