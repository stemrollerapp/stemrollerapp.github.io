import{S as P,i as b,s as M,e as h,k as q,t as y,K as A,c as p,d as u,m as C,a as R,h as w,b as o,J as m,g as k,E as x}from"./index-a5c969fc.js";function D(r){let i,a,c,l,e,d,_,s,g,v;return document.title=i=r[0]+" | StemRoller - Make stems, instrumental, or acapella version of any song!",{c(){a=h("meta"),l=q(),e=h("div"),d=h("p"),_=y("Please "),s=h("a"),g=y("click here"),v=y(" if you are not redirected shortly."),this.h()},l(t){const n=A('[data-svelte="svelte-asf5xb"]',document.head);a=p(n,"META",{name:!0,property:!0,content:!0}),n.forEach(u),l=C(t),e=p(t,"DIV",{class:!0});var E=R(e);d=p(E,"P",{});var f=R(d);_=w(f,"Please "),s=p(f,"A",{class:!0,href:!0});var S=R(s);g=w(S,"click here"),S.forEach(u),v=w(f," if you are not redirected shortly."),f.forEach(u),E.forEach(u),this.h()},h(){o(a,"name","description"),o(a,"property","og:description"),o(a,"content",c=`Redirecting to StemRoller's ${r[0]} page...`),o(s,"class","underline text-cyan-300"),o(s,"href",r[1]),o(e,"class","relative w-full min-h-full bg-slate-900 text-slate-100 p-12 text-center")},m(t,n){m(document.head,a),k(t,l,n),k(t,e,n),m(e,d),m(d,_),m(d,s),m(s,g),m(d,v)},p(t,[n]){n&1&&i!==(i=t[0]+" | StemRoller - Make stems, instrumental, or acapella version of any song!")&&(document.title=i),n&1&&c!==(c=`Redirecting to StemRoller's ${t[0]} page...`)&&o(a,"content",c),n&2&&o(s,"href",t[1])},i:x,o:x,d(t){u(a),t&&u(l),t&&u(e)}}}function I(r,i,a){let{title:c=null,target:l=null}=i;return r.$$set=e=>{"title"in e&&a(0,c=e.title),"target"in e&&a(1,l=e.target)},r.$$.update=()=>{r.$$.dirty&2&&typeof window!="undefined"&&window.location!==l&&(window.location=l)},[c,l]}class K extends P{constructor(i){super(),b(this,i,I,D,M,{title:0,target:1})}}export{K as R};