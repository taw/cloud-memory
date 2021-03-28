var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n,e){t.classList[e?"add":"remove"](n)}let p;function h(t){p=t}const g=[],m=[],$=[],k=[],b=Promise.resolve();let y=!1;function v(t){$.push(t)}let j=!1;const w=new Set;function x(){if(!j){j=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];h(n),_(n.$$)}for(h(null),g.length=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];w.has(n)||(w.add(n),n())}$.length=0}while(g.length);for(;k.length;)k.pop()();y=!1,j=!1,w.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;let M;function A(t,n){t&&t.i&&(E.delete(t),t.i(n))}function C(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),M.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function I(t){t&&t.c()}function q(t,e,c,l){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,c),l||v((()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(v)}function L(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(g.push(t),y||(y=!0,b.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(n,r,c,l,i,u,a=[-1]){const d=p;h(n);const f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let g=!1;if(f.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),g&&N(n,t)),e})):[],f.update(),g=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(s)}else f.fragment&&f.fragment.c();r.intro&&A(n.$$.fragment),q(n,r.target,r.anchor,r.customElement),x()}h(d)}class R{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(n){let e,o,c,p,h,g,m,$;return{c(){e=u("div"),o=u("div"),o.textContent="☁️🐈",c=a(),p=u("div"),h=u("img"),d(o,"class","back svelte-r21ukk"),h.src!==(g="pics/"+n[1])&&d(h,"src",g),d(h,"class","svelte-r21ukk"),d(p,"class","front svelte-r21ukk"),d(e,"class","tile svelte-r21ukk"),f(e,"hidden",n[0]),f(e,"good",n[3])},m(t,s){var u,a,d,f;i(t,e,s),l(e,o),l(e,c),l(e,p),l(p,h),m||(a="click",d=function(){r(n[2])&&n[2].apply(this,arguments)},(u=e).addEventListener(a,d,f),$=()=>u.removeEventListener(a,d,f),m=!0)},p(t,[o]){n=t,2&o&&h.src!==(g="pics/"+n[1])&&d(h,"src",g),1&o&&f(e,"hidden",n[0]),8&o&&f(e,"good",n[3])},i:t,o:t,d(t){t&&s(e),m=!1,$()}}}function P(t,n,e){let{hidden:o}=n,{tile:r}=n,{onclick:c}=n,{good:l}=n;return t.$$set=t=>{"hidden"in t&&e(0,o=t.hidden),"tile"in t&&e(1,r=t.tile),"onclick"in t&&e(2,c=t.onclick),"good"in t&&e(3,l=t.good)},[o,r,c,l]}class S extends R{constructor(t){super(),O(this,t,P,B,c,{hidden:0,tile:1,onclick:2,good:3})}}function T(t,n,e){const o=t.slice();return o[6]=n[e].tile,o[7]=n[e].state,o[9]=e,o}function D(t){let n,e;function o(){return t[5](t[9])}return n=new S({props:{tile:t[6],good:"known"===t[7],hidden:"hidden"===t[7],onclick:o}}),{c(){I(n.$$.fragment)},m(t,o){q(n,t,o),e=!0},p(e,r){t=e;const c={};1&r&&(c.tile=t[6]),1&r&&(c.good="known"===t[7]),1&r&&(c.hidden="hidden"===t[7]),2&r&&(c.onclick=o),n.$set(c)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){C(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function z(t){let n,e,r=t[0],c=[];for(let n=0;n<r.length;n+=1)c[n]=D(T(t,r,n));const l=t=>C(c[t],1,1,(()=>{c[t]=null}));return{c(){n=u("div");for(let t=0;t<c.length;t+=1)c[t].c();d(n,"class","board svelte-4kl4ih"),f(n,"board2",t[2]),f(n,"board4",t[3]),f(n,"board6",t[4])},m(t,o){i(t,n,o);for(let t=0;t<c.length;t+=1)c[t].m(n,null);e=!0},p(t,[e]){if(3&e){let i;for(r=t[0],i=0;i<r.length;i+=1){const o=T(t,r,i);c[i]?(c[i].p(o,e),A(c[i],1)):(c[i]=D(o),c[i].c(),A(c[i],1),c[i].m(n,null))}for(M={r:0,c:[],p:M},i=r.length;i<c.length;i+=1)l(i);M.r||o(M.c),M=M.p}},i(t){if(!e){for(let t=0;t<r.length;t+=1)A(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)C(c[t]);e=!1},d(t){t&&s(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t)}}}function F(t,n,e){let{board:o}=n,{onclick:r}=n,c=o.length<=4,l=o.length<=16&&o.length>4,i=o.length>16;return t.$$set=t=>{"board"in t&&e(0,o=t.board),"onclick"in t&&e(1,r=t.onclick)},[o,r,c,l,i,t=>r(t)]}class G extends R{constructor(t){super(),O(this,t,F,z,c,{board:0,onclick:1})}}let H=["2014-11-08 16.01.41 flower bed.jpg","2015-04-10 21.49.27 keyboard.jpg","2015-08-31 09.45.00 office chair.jpg","2015-09-01 03.47.15 keyboard.jpg","2015-09-12 01.47.55 drinking tea.jpg","2015-10-04 20.43.17 todo lists.jpg","2015-10-04 22.18.44 face closeup.jpg","2015-10-12 05.06.13 3d printer.jpg","2015-10-27 00.16.07 on top of the room.jpg","2016-01-11 08.02.27 office chair.jpg","2016-01-23 11.49.00 keyboard pillow.jpg","2016-10-15 17.01.57 sleeping on cat tree.jpg","2017-03-05 17.02.41 lapcat.jpg","2017-11-15 10.09.26 cloud sitting on her scratching post.jpg","2017-12-16 18.49.04 cloud on cat bed.jpg","2018-02-10 14.26.55 cloud boxception.jpg","2018-03-11 14.11.54 cloud resting on matress.jpg","2018-07-24 22.40.44 longcat.jpg","2019-06-09 13.35.51 cloud dressed up for the party.jpg","2019-07-15 13.05.47 big cat on big computer.jpg","2019-12-29 15.40.20 bathroom sink cat.jpg","2020-02-22 00.15.00 cloud on sofa.jpg","2020-03-21 17.36.29 cloud in tesco easy entertaining box.jpg","2020-10-17 14.21.44 cloud in her house.jpg","2021-01-18 10.43.58 cloud sitting on side chair looking cute.jpg","2021-02-10 14.54.29 cloud in a wig looks a bit like trump.jpg","cloud_and_keyboard.jpg","cloud_sittin_on_power_suply.jpg"];var J,K,Q=(function(t,n){!function(t){const n="fisher-yates",e="unique-idx";function o(t,o){!function(t){if(!t)throw new ReferenceError("Missing input argument");if(!1===Array.isArray(t))throw new TypeError("Argument is not an array")}(t),function(t){if(![e,n].includes(t))throw new ReferenceError(`Invalid type argument: ${t}`)}(o);const{length:r}=t;let c,l;switch(r){case 0:case 1:return t;case 2:return c=t[0],t[0]=t[1],t[1]=c,t}switch(o){case n:for(let n=0;n<r;n++){const e=r-n,o=e-1,c=~~(Math.random()*e);l=t[c],t[c]=t[o],t[o]=l}break;case e:{const n=function(t){if(t<1)throw new Error(`Invalid array length: ${t}`);return[...Array(t).keys()]}(r).reverse();for(let t=0;t<r;t++){const e=r-t,o=e-1,l=~~(Math.random()*e);c=n[l],n[l]=n[o],n[o]=c}const e=[],o=[];if(n.forEach(((t,n)=>{t===n?e.push(t):o.push(t)})),e.length===n.length){const t=3===n.length?1+~~(2*Math.random()):1+~~(Math.random()*(n.length-2));for(let e=0;e<t;e++){const t=n.shift();n.push(t)}}else{let t,r,c,i;for(;e.length>0;)1===e.length?(t=~~(Math.random()*o.length),c=o[t],i=e.pop(),l=n[c],n[c]=n[i],n[i]=l):(t=~~(Math.random()*e.length),c=e.splice(t,1)[0],r=~~(Math.random()*e.length),i=e.splice(r,1)[0],n[c]=i,n[i]=c)}const i=t.slice();t.length=0,n.forEach((n=>t.push(i[n])));break}default:return console.error(`Invalid algorithm type argument: ${o}`),null}return t}t.unsort=(t,e=n)=>o(t.slice(),e),t.unsortInplace=(t,e=n)=>o(t,e),t.version="1.1.6"}(n)}(K={path:J,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&K.path)}},K.exports),K.exports);function U(t){let n;return{c(){n=u("header"),n.textContent=" ",d(n,"class","svelte-18wvl6t")},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function V(t){let n;return{c(){n=u("header"),n.textContent="🌈 Rest in Peace 🌈",d(n,"class","svelte-18wvl6t")},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function W(t){let n,e,o,r,c,f;function p(t,n){return t[0]?V:U}r=new G({props:{board:t[1],onclick:t[2]}});let h=p(t),g=h(t);return{c(){n=u("div"),e=u("header"),e.textContent="In memory of Cloud ☁️🐈",o=a(),I(r.$$.fragment),c=a(),g.c(),d(e,"class","svelte-18wvl6t")},m(t,s){i(t,n,s),l(n,e),l(n,o),q(r,n,null),l(n,c),g.m(n,null),f=!0},p(t,[e]){const o={};2&e&&(o.board=t[1]),r.$set(o),h!==(h=p(t))&&(g.d(1),g=h(t),g&&(g.c(),g.m(n,null)))},i(t){f||(A(r.$$.fragment,t),f=!0)},o(t){C(r.$$.fragment,t),f=!1},d(t){t&&s(n),L(r),g.d()}}}function X(t,n,e){let o=!1,r=function(t,n){let e=t*n/2,o=Q.unsort(H).slice(0,e);return Q.unsort([...o,...o]).map((t=>({tile:t,state:"hidden"})))}(6,6),c=null,l=null;function i(t){c=t,e(1,r[t].state="first",r)}function s(t){l=t,e(1,r[t].state="second",r),r[c].tile===r[l].tile&&(e(1,r[c].state="known",r),e(1,r[l].state="known",r),c=null,l=null,r.every((({state:t})=>"known"===t))&&e(0,o=!0))}return[o,r,function(t){"hidden"===r[t].state&&(null===c?i(t):null===l?s(t):(null!==c&&(e(1,r[c].state="hidden",r),c=null),null!==l&&(e(1,r[l].state="hidden",r),l=null),i(t)))}]}return new class extends R{constructor(t){super(),O(this,t,X,W,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
