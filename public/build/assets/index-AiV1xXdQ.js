function m(n){var e,t,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=m(n[e]))&&(a&&(a+=" "),a+=t);else for(e in n)n[e]&&(a&&(a+=" "),a+=e);return a}function j(){for(var n,e,t=0,a="";t<arguments.length;)(n=arguments[t++])&&(e=m(n))&&(a&&(a+=" "),a+=e);return a}const f=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,y=j,A=(n,e)=>t=>{var a;if((e==null?void 0:e.variants)==null)return y(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:d,defaultVariants:u}=e,N=Object.keys(d).map(l=>{const r=t==null?void 0:t[l],s=u==null?void 0:u[l];if(r===null)return null;const i=f(r)||f(s);return d[l][i]}),v=t&&Object.entries(t).reduce((l,r)=>{let[s,i]=r;return i===void 0||(l[s]=i),l},{}),V=e==null||(a=e.compoundVariants)===null||a===void 0?void 0:a.reduce((l,r)=>{let{class:s,className:i,...b}=r;return Object.entries(b).every(C=>{let[c,o]=C;return Array.isArray(o)?o.includes({...u,...v}[c]):{...u,...v}[c]===o})?[...l,s,i]:l},[]);return y(n,N,V,t==null?void 0:t.class,t==null?void 0:t.className)};export{j as a,A as c};
