import{s as B,e as D,n as I}from"./scheduler.BOylP72J.js";import{S as C,i as G,e as g,s as L,t as S,c as b,a as v,d as h,b as R,f as V,h as f,k as A,l as c,D as j}from"./index.DZ48zt5Z.js";function T(r){let e,a;return{c(){e=g("p"),a=S(r[4]),this.h()},l(t){e=b(t,"P",{class:!0});var n=v(e);a=V(n,r[4]),n.forEach(h),this.h()},h(){f(e,"class","truncate ")},m(t,n){A(t,e,n),c(e,a)},p(t,n){n&16&&j(a,t[4])},d(t){t&&h(e)}}}function H(r){let e,a,t,n,d,m,u,i,E,_,k,U,l=r[4]&&T(r);return{c(){e=g("div"),a=g("a"),t=g("img"),m=L(),u=g("h1"),i=S(r[2]),E=L(),_=g("button"),k=S(r[3]),U=L(),l&&l.c(),this.h()},l(o){e=b(o,"DIV",{class:!0});var s=v(e);a=b(s,"A",{href:!0});var p=v(a);t=b(p,"IMG",{src:!0,alt:!0,draggable:!0,class:!0}),p.forEach(h),m=R(s),u=b(s,"H1",{class:!0});var q=v(u);i=V(q,r[2]),q.forEach(h),E=R(s),_=b(s,"BUTTON",{class:!0});var w=v(_);k=V(w,r[3]),w.forEach(h),U=R(s),l&&l.l(s),s.forEach(h),this.h()},h(){D(t.src,n=r[1])||f(t,"src",n),f(t,"alt","unable to load"),f(t,"draggable","false"),f(t,"class","card-image mb-3  svelte-12j97wk"),f(a,"href",d="/video-modules/"+r[0]),f(u,"class","font-semibold "),f(_,"class","text-xs border px-2 bg-[#c7e6f8] rounded-[5px]"),f(e,"class","card relative mt-3 hover:bg-gray-200 text-lg p-3 rounded-[7px] svelte-12j97wk")},m(o,s){A(o,e,s),c(e,a),c(a,t),c(e,m),c(e,u),c(u,i),c(e,E),c(e,_),c(_,k),c(e,U),l&&l.m(e,null)},p(o,[s]){s&2&&!D(t.src,n=o[1])&&f(t,"src",n),s&1&&d!==(d="/video-modules/"+o[0])&&f(a,"href",d),s&4&&j(i,o[2]),s&8&&j(k,o[3]),o[4]?l?l.p(o,s):(l=T(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:I,o:I,d(o){o&&h(e),l&&l.d()}}}function M(r,e,a){let{id:t=""}=e,{photoURL:n}=e,{title:d}=e,{language:m=""}=e,{description:u=""}=e;return r.$$set=i=>{"id"in i&&a(0,t=i.id),"photoURL"in i&&a(1,n=i.photoURL),"title"in i&&a(2,d=i.title),"language"in i&&a(3,m=i.language),"description"in i&&a(4,u=i.description)},[t,n,d,m,u]}class P extends C{constructor(e){super(),G(this,e,M,H,B,{id:0,photoURL:1,title:2,language:3,description:4})}}export{P as V};
