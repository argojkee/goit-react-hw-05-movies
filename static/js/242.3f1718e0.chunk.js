"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[242],{242:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,c,o=e(439),i=e(791),u=e(168),a=e(867),s=a.zo.form(r||(r=(0,u.Z)(["\n  padding-top: 140px;\n  display: flex;\n  justify-content: center;\n  column-gap: 20px;\n"]))),f=e(184),h=function(t){var n=t.setSearchText,e=(0,i.useState)(""),r=(0,o.Z)(e,2),c=r[0],u=r[1];return(0,f.jsxs)(s,{onSubmit:function(t){if(t.preventDefault(),!c.trim())return alert("Please, write anything");n(c.trim().toLowerCase()),u("")},children:[(0,f.jsx)("input",{onChange:function(t){var n=t.target.value;u(n)},value:c}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},l=e(689),m=e(87),p=a.zo.ul(c||(c=(0,u.Z)(["\n  list-style: none;\n"]))),d=function(t){var n=t.movies,e=(0,l.TH)();return(0,f.jsx)(p,{children:n.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(m.rU,{to:"/movies/".concat(t.id),state:"".concat(e.pathname).concat(e.search),children:t.title})},t.id)}))})},v=e(152),y=function(){var t=(0,i.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],c=(0,i.useState)(""),u=(0,o.Z)(c,2),a=u[0],s=u[1],l=(0,i.useState)(""),p=(0,o.Z)(l,2),y=p[0],g=p[1],x=(0,m.lr)(),k=(0,o.Z)(x,2),w=k[0],j=k[1];return(0,i.useEffect)((function(){w.get("query")&&s(w.get("query"))}),[w]),(0,i.useEffect)((function(){a&&(g(""),(0,v.E3)(a).then((function(t){if(!t.ok)throw g("Sorry, something wrong"),new Error;return t.json()})).then((function(t){if(0===t.results.length)throw g("Sorry, nothink"),new Error;r(t.results.map((function(t){return{title:t.title,id:t.id}})))})).catch((function(t){return console.log(t)})),j({query:a}))}),[a,j]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{setSearchText:s}),y&&(0,f.jsx)("h3",{children:y}),!y&&e.length>0&&(0,f.jsx)(d,{movies:e})]})}},152:function(t,n,e){e.d(n,{E3:function(){return i},Mc:function(){return u},SU:function(){return s},ZR:function(){return a},wr:function(){return o}});var r="1f49b40244739c7e3b1b706c1c1ec0d7",c="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r))},i=function(t){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(t))},u=function(t){return fetch("".concat(c,"movie/").concat(t,"?api_key=").concat(r))},a=function(t){return fetch("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(r))},s=function(t){return fetch("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(r))}}}]);
//# sourceMappingURL=242.3f1718e0.chunk.js.map