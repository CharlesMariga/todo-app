import{f as yt,_ as bt}from"./Button.vue_vue_type_script_setup_true_lang-CTStIClv.js";import{S as wt,M as $t,b as be,g as _t,_ as Et}from"./AppLayout.vue_vue_type_script_setup_true_lang-Nzno-rOC.js";import{_ as Tt}from"./Banner.vue_vue_type_script_setup_true_lang-DIG-HjFe.js";import{_ as St}from"./Filter.vue_vue_type_script_setup_true_lang-DxmQT-wG.js";import{k as I,r as f,d as k,l as m,m as C,n as B,p as F,F as G,q as oe,s as xt,v as N,x as M,y as kt,z as lt,A as Lt,B as Dt,C as je,f as _e,w as T,u as S,o as D,a as g,e as _,b as nt,t as J,j as Ct,c as H,g as Ft,T as Pt,D as Ot,Q as At,Z as Bt,E as De}from"./app-w0SvkJgf.js";import{_ as q}from"./SvgIcon.vue_vue_type_script_setup_true_lang-vzFmeNMo.js";import{c as at,w as Mt,i as ce,A as R,S as ee,o as $,u as W,P as Ee,N as K,T as Rt,t as Ht,I as ae,l as Ie,a as L,b as Nt,d as de,e as ne,f as ot,s as jt,g as It,h as Z,j as Vt}from"./use-text-value-D6-Ia2UG.js";import{f as Pe,u as Oe,p as Ut,_ as Wt}from"./data-DFKw6Be9.js";import{_ as qt}from"./AddTodoForm.vue_vue_type_script_setup_true_lang-BO3w3WiS.js";import"./index-AiV1xXdQ.js";import"./Logo.vue_vue_type_script_setup_true_lang-DxlFdudR.js";import"./Input.vue_vue_type_script_setup_true_lang-C-VNrIM5.js";import"./FormField-J88tQsi2.js";import"./InputError-Disr5MVT.js";function Ve(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function pe(){let e=[],t={addEventListener(l,n,a,o){return l.addEventListener(n,a,o),t.add(()=>l.removeEventListener(n,a,o))},requestAnimationFrame(...l){let n=requestAnimationFrame(...l);t.add(()=>cancelAnimationFrame(n))},nextFrame(...l){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...l)})},setTimeout(...l){let n=setTimeout(...l);t.add(()=>clearTimeout(n))},microTask(...l){let n={current:!0};return Ve(()=>{n.current&&l[0]()}),t.add(()=>{n.current=!1})},style(l,n,a){let o=l.style.getPropertyValue(n);return Object.assign(l.style,{[n]:a}),this.add(()=>{Object.assign(l.style,{[n]:o})})},group(l){let n=pe();return l(n),this.add(()=>n.dispose())},add(l){return e.push(l),()=>{let n=e.indexOf(l);if(n>=0)for(let a of e.splice(n,1))a()}},dispose(){for(let l of e.splice(0))l()}};return t}function zt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let Q=[];zt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&Q[0]!==t.target&&(Q.unshift(t.target),Q=Q.filter(l=>l!=null&&l.isConnected),Q.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function rt(e,t,l,n){at.isServer||I(a=>{e=e??window,e.addEventListener(t,l,n),a(()=>e.removeEventListener(t,l,n))})}var ue=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ue||{});function Yt(){let e=f(0);return Mt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function st(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let n=$(l);n instanceof HTMLElement&&t.add(n)}return t}var it=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(it||{});let se=Object.assign(k({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let a=f(null);n({el:a,$el:a});let o=m(()=>ce(a)),r=f(!1);C(()=>r.value=!0),B(()=>r.value=!1),Qt({ownerDocument:o},m(()=>r.value&&!!(e.features&16)));let s=Gt({ownerDocument:o,container:a,initialFocus:m(()=>e.initialFocus)},m(()=>r.value&&!!(e.features&2)));Zt({ownerDocument:o,container:a,containers:e.containers,previousActiveElement:s},m(()=>r.value&&!!(e.features&8)));let i=Yt();function d(v){let p=$(a);p&&(y=>y())(()=>{W(i.value,{[ue.Forwards]:()=>{Ee(p,K.First,{skipElements:[v.relatedTarget]})},[ue.Backwards]:()=>{Ee(p,K.Last,{skipElements:[v.relatedTarget]})}})})}let c=f(!1);function b(v){v.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function u(v){if(!r.value)return;let p=st(e.containers);$(a)instanceof HTMLElement&&p.add($(a));let y=v.relatedTarget;y instanceof HTMLElement&&y.dataset.headlessuiFocusGuard!=="true"&&(ut(p,y)||(c.value?Ee($(a),W(i.value,{[ue.Forwards]:()=>K.Next,[ue.Backwards]:()=>K.Previous})|K.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&ee(v.target)))}return()=>{let v={},p={ref:a,onKeydown:b,onFocusout:u},{features:y,initialFocus:h,containers:x,...P}=e;return F(G,[!!(y&4)&&F(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Oe.Focusable}),R({ourProps:p,theirProps:{...t,...P},slot:v,attrs:t,slots:l,name:"FocusTrap"}),!!(y&4)&&F(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Oe.Focusable})])}}}),{features:it});function Kt(e){let t=f(Q.slice());return oe([e],([l],[n])=>{n===!0&&l===!1?Ve(()=>{t.value.splice(0)}):n===!1&&l===!0&&(t.value=Q.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(n=>n!=null&&n.isConnected))!=null?l:null}}function Qt({ownerDocument:e},t){let l=Kt(t);C(()=>{I(()=>{var n,a;t.value||((n=e.value)==null?void 0:n.activeElement)===((a=e.value)==null?void 0:a.body)&&ee(l())},{flush:"post"})}),B(()=>{t.value&&ee(l())})}function Gt({ownerDocument:e,container:t,initialFocus:l},n){let a=f(null),o=f(!1);return C(()=>o.value=!0),B(()=>o.value=!1),C(()=>{oe([t,l,n],(r,s)=>{if(r.every((d,c)=>(s==null?void 0:s[c])===d)||!n.value)return;let i=$(t);i&&Ve(()=>{var d,c;if(!o.value)return;let b=$(l),u=(d=e.value)==null?void 0:d.activeElement;if(b){if(b===u){a.value=u;return}}else if(i.contains(u)){a.value=u;return}b?ee(b):Ee(i,K.First|K.NoScroll)===Rt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),a}function Zt({ownerDocument:e,container:t,containers:l,previousActiveElement:n},a){var o;rt((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!a.value)return;let s=st(l);$(t)instanceof HTMLElement&&s.add($(t));let i=n.value;if(!i)return;let d=r.target;d&&d instanceof HTMLElement?ut(s,d)?(n.value=d,ee(d)):(r.preventDefault(),r.stopPropagation(),ee(i)):ee(n.value)},!0)}function ut(e,t){for(let l of e)if(l.contains(t))return!0;return!1}function Xt(e){let t=xt(e.getSnapshot());return B(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Jt(e,t){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(a){return n.add(a),()=>n.delete(a)},dispatch(a,...o){let r=t[a].call(l,...o);r&&(l=r,n.forEach(s=>s()))}}}function el(){let e;return{before({doc:t}){var l;let n=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:t,d:l}){let n=t.documentElement,a=n.clientWidth-n.offsetWidth,o=e-a;l.style(n,"paddingRight",`${o}px`)}}}function tl(){return Ht()?{before({doc:e,d:t,meta:l}){function n(a){return l.containers.flatMap(o=>o()).some(o=>o.contains(a))}t.microTask(()=>{var a;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let s=pe();s.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>s.dispose()))}let o=(a=window.scrollY)!=null?a:window.pageYOffset,r=null;t.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let i=s.target.closest("a");if(!i)return;let{hash:d}=new URL(i.href),c=e.querySelector(d);c&&!n(c)&&(r=c)}catch{}},!0),t.addEventListener(e,"touchstart",s=>{if(s.target instanceof HTMLElement)if(n(s.target)){let i=s.target;for(;i.parentElement&&n(i.parentElement);)i=i.parentElement;t.style(i,"overscrollBehavior","contain")}else t.style(s.target,"touchAction","none")}),t.addEventListener(e,"touchmove",s=>{if(s.target instanceof HTMLElement){if(s.target.tagName==="INPUT")return;if(n(s.target)){let i=s.target;for(;i.parentElement&&i.dataset.headlessuiPortal!==""&&!(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth);)i=i.parentElement;i.dataset.headlessuiPortal===""&&s.preventDefault()}else s.preventDefault()}},{passive:!1}),t.add(()=>{var s;let i=(s=window.scrollY)!=null?s:window.pageYOffset;o!==i&&window.scrollTo(0,o),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})})}}:{}}function ll(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function nl(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let X=Jt(()=>new Map,{PUSH(e,t){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:pe(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let n={doc:e,d:t,meta:nl(l)},a=[tl(),el(),ll()];a.forEach(({before:o})=>o==null?void 0:o(n)),a.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});X.subscribe(()=>{let e=X.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=t.get(l.doc)==="hidden",a=l.count!==0;(a&&!n||!a&&n)&&X.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&X.dispatch("TEARDOWN",l)}});function al(e,t,l){let n=Xt(X),a=m(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return oe([e,t],([o,r],[s],i)=>{if(!o||!r)return;X.dispatch("PUSH",o,l);let d=!1;i(()=>{d||(X.dispatch("POP",s??o,l),d=!0)})},{immediate:!0}),a}let Ce=new Map,ie=new Map;function Ge(e,t=f(!0)){I(l=>{var n;if(!t.value)return;let a=$(e);if(!a)return;l(function(){var r;if(!a)return;let s=(r=ie.get(a))!=null?r:1;if(s===1?ie.delete(a):ie.set(a,s-1),s!==1)return;let i=Ce.get(a);i&&(i["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",i["aria-hidden"]),a.inert=i.inert,Ce.delete(a))});let o=(n=ie.get(a))!=null?n:0;ie.set(a,o+1),o===0&&(Ce.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}function ol({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let n=f(null),a=ce(n);function o(){var r,s,i;let d=[];for(let c of e)c!==null&&(c instanceof HTMLElement?d.push(c):"value"in c&&c.value instanceof HTMLElement&&d.push(c.value));if(t!=null&&t.value)for(let c of t.value)d.push(c);for(let c of(r=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?r:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains($(n))||c.contains((i=(s=$(n))==null?void 0:s.getRootNode())==null?void 0:i.host)||d.some(b=>c.contains(b))||d.push(c));return d}return{resolveContainers:o,contains(r){return o().some(s=>s.contains(r))},mainTreeNodeRef:n,MainTreeNode(){return l!=null?null:F(Pe,{features:Oe.Hidden,ref:n})}}}let dt=Symbol("ForcePortalRootContext");function rl(){return M(dt,!1)}let Ze=k({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return N(dt,e.force),()=>{let{force:n,...a}=e;return R({theirProps:a,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}}),ct=Symbol("StackContext");var Ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ae||{});function sl(){return M(ct,()=>{})}function il({type:e,enabled:t,element:l,onUpdate:n}){let a=sl();function o(...r){n==null||n(...r),a(...r)}C(()=>{oe(t,(r,s)=>{r?o(0,e,l):s===!0&&o(1,e,l)},{immediate:!0,flush:"sync"})}),B(()=>{t.value&&o(1,e,l)}),N(ct,o)}let ul=Symbol("DescriptionContext");function dl({slot:e=f({}),name:t="Description",props:l={}}={}){let n=f([]);function a(o){return n.value.push(o),()=>{let r=n.value.indexOf(o);r!==-1&&n.value.splice(r,1)}}return N(ul,{register:a,slot:e,name:t,props:l}),m(()=>n.value.length>0?n.value.join(" "):void 0)}function cl(e){let t=ce(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}const Be=new WeakMap;function pl(e){var t;return(t=Be.get(e))!=null?t:0}function Xe(e,t){let l=t(pl(e));return l<=0?Be.delete(e):Be.set(e,l),l}let fl=k({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let n=f(null),a=m(()=>ce(n)),o=rl(),r=M(pt,null),s=f(o===!0||r==null?cl(n.value):r.resolveTarget());s.value&&Xe(s.value,u=>u+1);let i=f(!1);C(()=>{i.value=!0}),I(()=>{o||r!=null&&(s.value=r.resolveTarget())});let d=M(Me,null),c=!1,b=Lt();return oe(n,()=>{if(c||!d)return;let u=$(n);u&&(B(d.register(u),b),c=!0)}),B(()=>{var u,v;let p=(u=a.value)==null?void 0:u.getElementById("headlessui-portal-root");!p||s.value!==p||Xe(s.value,y=>y-1)||s.value.children.length>0||(v=s.value.parentElement)==null||v.removeChild(s.value)}),()=>{if(!i.value||s.value===null)return null;let u={ref:n,"data-headlessui-portal":""};return F(kt,{to:s.value},R({ourProps:u,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),Me=Symbol("PortalParentContext");function vl(){let e=M(Me,null),t=f([]);function l(o){return t.value.push(o),e&&e.register(o),()=>n(o)}function n(o){let r=t.value.indexOf(o);r!==-1&&t.value.splice(r,1),e&&e.unregister(o)}let a={register:l,unregister:n,portals:t};return[t,k({name:"PortalWrapper",setup(o,{slots:r}){return N(Me,a),()=>{var s;return(s=r.default)==null?void 0:s.call(r)}}})]}let pt=Symbol("PortalGroupContext"),ml=k({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let n=lt({resolveTarget(){return e.target}});return N(pt,n),()=>{let{target:a,...o}=e;return R({theirProps:o,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}});var gl=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gl||{});let Re=Symbol("DialogContext");function Ue(e){let t=M(Re,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Ue),l}return t}let we="DC8F892D-2EBD-447C-A4C8-A03058436FF4",hl=k({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:we},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:a}){var o,r;let s=(o=e.id)!=null?o:`headlessui-dialog-${ae()}`,i=f(!1);C(()=>{i.value=!0});let d=!1,c=m(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=f(0),u=Ie(),v=m(()=>e.open===we&&u!==null?(u.value&L.Open)===L.Open:e.open),p=f(null),y=m(()=>ce(p));if(a({el:p,$el:p}),!(e.open!==we||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof v.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value===we?void 0:e.open}`);let h=m(()=>i.value&&v.value?0:1),x=m(()=>h.value===0),P=m(()=>b.value>1),z=M(Re,null)!==null,[fe,ve]=vl(),{resolveContainers:te,mainTreeNodeRef:me,MainTreeNode:ge}=ol({portals:fe,defaultContainers:[m(()=>{var w;return(w=le.panelRef.value)!=null?w:p.value})]}),Se=m(()=>P.value?"parent":"leaf"),he=m(()=>u!==null?(u.value&L.Closing)===L.Closing:!1),xe=m(()=>z||he.value?!1:x.value),ke=m(()=>{var w,E,O;return(O=Array.from((E=(w=y.value)==null?void 0:w.querySelectorAll("body > *"))!=null?E:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains($(me))&&A instanceof HTMLElement))!=null?O:null});Ge(ke,xe);let j=m(()=>P.value?!0:x.value),re=m(()=>{var w,E,O;return(O=Array.from((E=(w=y.value)==null?void 0:w.querySelectorAll("[data-headlessui-portal]"))!=null?E:[]).find(A=>A.contains($(me))&&A instanceof HTMLElement))!=null?O:null});Ge(re,j),il({type:"Dialog",enabled:m(()=>h.value===0),element:p,onUpdate:(w,E)=>{if(E==="Dialog")return W(w,{[Ae.Add]:()=>b.value+=1,[Ae.Remove]:()=>b.value-=1})}});let V=dl({name:"DialogDescription",slot:m(()=>({open:v.value}))}),U=f(null),le={titleId:U,panelRef:f(null),dialogState:h,setTitleId(w){U.value!==w&&(U.value=w)},close(){t("close",!1)}};N(Re,le);let Ye=m(()=>!(!x.value||P.value));Nt(te,(w,E)=>{w.preventDefault(),le.close(),Dt(()=>E==null?void 0:E.focus())},Ye);let Ke=m(()=>!(P.value||h.value!==0));rt((r=y.value)==null?void 0:r.defaultView,"keydown",w=>{Ke.value&&(w.defaultPrevented||w.key===ne.Escape&&(w.preventDefault(),w.stopPropagation(),le.close()))});let Qe=m(()=>!(he.value||h.value!==0||z));return al(y,Qe,w=>{var E;return{containers:[...(E=w.containers)!=null?E:[],te]}}),I(w=>{if(h.value!==0)return;let E=$(p);if(!E)return;let O=new ResizeObserver(A=>{for(let Le of A){let ye=Le.target.getBoundingClientRect();ye.x===0&&ye.y===0&&ye.width===0&&ye.height===0&&le.close()}});O.observe(E),w(()=>O.disconnect())}),()=>{let{open:w,initialFocus:E,...O}=e,A={...l,ref:p,id:s,role:c.value,"aria-modal":h.value===0?!0:void 0,"aria-labelledby":U.value,"aria-describedby":V.value},Le={open:h.value===0};return F(Ze,{force:!0},()=>[F(fl,()=>F(ml,{target:p.value},()=>F(Ze,{force:!1},()=>F(se,{initialFocus:E,containers:te,features:x.value?W(Se.value,{parent:se.features.RestoreFocus,leaf:se.features.All&~se.features.FocusLock}):se.features.None},()=>F(ve,{},()=>R({ourProps:A,theirProps:{...O,...l},slot:Le,attrs:l,slots:n,visible:h.value===0,features:de.RenderStrategy|de.Static,name:"Dialog"})))))),F(ge)])}}}),yl=k({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){var a;let o=(a=e.id)!=null?a:`headlessui-dialog-panel-${ae()}`,r=Ue("DialogPanel");n({el:r.panelRef,$el:r.panelRef});function s(i){i.stopPropagation()}return()=>{let{...i}=e,d={id:o,ref:r.panelRef,onClick:s};return R({ourProps:d,theirProps:i,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}}),bl=k({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l}){var n;let a=(n=e.id)!=null?n:`headlessui-dialog-title-${ae()}`,o=Ue("DialogTitle");return C(()=>{o.setTitleId(a),B(()=>o.setTitleId(null))}),()=>{let{...r}=e;return R({ourProps:{id:a},theirProps:r,slot:{open:o.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});var wl=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(wl||{});let ft=Symbol("DisclosureContext");function We(e){let t=M(ft,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,We),l}return t}let vt=Symbol("DisclosurePanelContext");function $l(){return M(vt,null)}let _l=k({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:l}){let n=f(e.defaultOpen?0:1),a=f(null),o=f(null),r={buttonId:f(`headlessui-disclosure-button-${ae()}`),panelId:f(`headlessui-disclosure-panel-${ae()}`),disclosureState:n,panel:a,button:o,toggleDisclosure(){n.value=W(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(s){r.closeDisclosure();let i=s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?$(s):$(r.button):$(r.button);i==null||i.focus()}};return N(ft,r),ot(m(()=>W(n.value,{0:L.Open,1:L.Closed}))),()=>{let{defaultOpen:s,...i}=e,d={open:n.value===0,close:r.close};return R({theirProps:i,ourProps:{},slot:d,slots:t,attrs:l,name:"Disclosure"})}}}),El=k({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){let a=We("DisclosureButton"),o=$l(),r=m(()=>o===null?!1:o.value===a.panelId.value);C(()=>{r.value||e.id!==null&&(a.buttonId.value=e.id)}),B(()=>{r.value||(a.buttonId.value=null)});let s=f(null);n({el:s,$el:s}),r.value||I(()=>{a.button.value=s.value});let i=jt(m(()=>({as:e.as,type:t.type})),s);function d(){var u;e.disabled||(r.value?(a.toggleDisclosure(),(u=$(a.button))==null||u.focus()):a.toggleDisclosure())}function c(u){var v;if(!e.disabled)if(r.value)switch(u.key){case ne.Space:case ne.Enter:u.preventDefault(),u.stopPropagation(),a.toggleDisclosure(),(v=$(a.button))==null||v.focus();break}else switch(u.key){case ne.Space:case ne.Enter:u.preventDefault(),u.stopPropagation(),a.toggleDisclosure();break}}function b(u){switch(u.key){case ne.Space:u.preventDefault();break}}return()=>{var u;let v={open:a.disclosureState.value===0},{id:p,...y}=e,h=r.value?{ref:s,type:i.value,onClick:d,onKeydown:c}:{id:(u=a.buttonId.value)!=null?u:p,ref:s,type:i.value,"aria-expanded":a.disclosureState.value===0,"aria-controls":a.disclosureState.value===0||$(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:d,onKeydown:c,onKeyup:b};return R({ourProps:h,theirProps:y,slot:v,attrs:t,slots:l,name:"DisclosureButton"})}}}),Tl=k({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){let a=We("DisclosurePanel");C(()=>{e.id!==null&&(a.panelId.value=e.id)}),B(()=>{a.panelId.value=null}),n({el:a.panel,$el:a.panel}),N(vt,a.panelId);let o=Ie(),r=m(()=>o!==null?(o.value&L.Open)===L.Open:a.disclosureState.value===0);return()=>{var s;let i={open:a.disclosureState.value===0,close:a.close},{id:d,...c}=e,b={id:(s=a.panelId.value)!=null?s:d,ref:a.panel};return R({ourProps:b,theirProps:c,slot:i,attrs:t,slots:l,features:de.RenderStrategy|de.Static,visible:r.value,name:"DisclosurePanel"})}}});function Sl(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function Fe(e,...t){e&&t.length>0&&e.classList.add(...t)}function $e(e,...t){e&&t.length>0&&e.classList.remove(...t)}var He=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(He||{});function xl(e,t){let l=pe();if(!e)return l.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[o,r]=[n,a].map(s=>{let[i=0]=s.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,c)=>c-d);return i});return o!==0?l.setTimeout(()=>t("finished"),o+r):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Je(e,t,l,n,a,o){let r=pe(),s=o!==void 0?Sl(o):()=>{};return $e(e,...a),Fe(e,...t,...l),r.nextFrame(()=>{$e(e,...l),Fe(e,...n),r.add(xl(e,i=>($e(e,...n,...t),Fe(e,...a),s(i))))}),r.add(()=>$e(e,...t,...l,...n,...a)),r.add(()=>s("cancelled")),r.dispose}function Y(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let qe=Symbol("TransitionContext");var kl=(e=>(e.Visible="visible",e.Hidden="hidden",e))(kl||{});function Ll(){return M(qe,null)!==null}function Dl(){let e=M(qe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Cl(){let e=M(ze,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let ze=Symbol("NestingContext");function Te(e){return"children"in e?Te(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function mt(e){let t=f([]),l=f(!1);C(()=>l.value=!0),B(()=>l.value=!1);function n(o,r=Z.Hidden){let s=t.value.findIndex(({id:i})=>i===o);s!==-1&&(W(r,{[Z.Unmount](){t.value.splice(s,1)},[Z.Hidden](){t.value[s].state="hidden"}}),!Te(t)&&l.value&&(e==null||e()))}function a(o){let r=t.value.find(({id:s})=>s===o);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:o,state:"visible"}),()=>n(o,Z.Unmount)}return{children:t,register:a,unregister:n}}let gt=de.RenderStrategy,Ne=k({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:a}){let o=f(0);function r(){o.value|=L.Opening,t("beforeEnter")}function s(){o.value&=~L.Opening,t("afterEnter")}function i(){o.value|=L.Closing,t("beforeLeave")}function d(){o.value&=~L.Closing,t("afterLeave")}if(!Ll()&&It())return()=>F(ht,{...e,onBeforeEnter:r,onAfterEnter:s,onBeforeLeave:i,onAfterLeave:d},n);let c=f(null),b=m(()=>e.unmount?Z.Unmount:Z.Hidden);a({el:c,$el:c});let{show:u,appear:v}=Dl(),{register:p,unregister:y}=Cl(),h=f(u.value?"visible":"hidden"),x={value:!0},P=ae(),z={value:!1},fe=mt(()=>{!z.value&&h.value!=="hidden"&&(h.value="hidden",y(P),d())});C(()=>{let j=p(P);B(j)}),I(()=>{if(b.value===Z.Hidden&&P){if(u.value&&h.value!=="visible"){h.value="visible";return}W(h.value,{hidden:()=>y(P),visible:()=>p(P)})}});let ve=Y(e.enter),te=Y(e.enterFrom),me=Y(e.enterTo),ge=Y(e.entered),Se=Y(e.leave),he=Y(e.leaveFrom),xe=Y(e.leaveTo);C(()=>{I(()=>{if(h.value==="visible"){let j=$(c);if(j instanceof Comment&&j.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ke(j){let re=x.value&&!v.value,V=$(c);!V||!(V instanceof HTMLElement)||re||(z.value=!0,u.value&&r(),u.value||i(),j(u.value?Je(V,ve,te,me,ge,U=>{z.value=!1,U===He.Finished&&s()}):Je(V,Se,he,xe,ge,U=>{z.value=!1,U===He.Finished&&(Te(fe)||(h.value="hidden",y(P),d()))})))}return C(()=>{oe([u],(j,re,V)=>{ke(V),x.value=!1},{immediate:!0})}),N(ze,fe),ot(m(()=>W(h.value,{visible:L.Open,hidden:L.Closed})|o.value)),()=>{let{appear:j,show:re,enter:V,enterFrom:U,enterTo:le,entered:Ye,leave:Ke,leaveFrom:Qe,leaveTo:w,...E}=e,O={ref:c},A={...E,...v.value&&u.value&&at.isServer?{class:je([l.class,E.class,...ve,...te])}:{}};return R({theirProps:A,ourProps:O,slot:{},slots:n,attrs:l,features:gt,visible:h.value==="visible",name:"TransitionChild"})}}}),Fl=Ne,ht=k({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n}){let a=Ie(),o=m(()=>e.show===null&&a!==null?(a.value&L.Open)===L.Open:e.show);I(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=f(o.value?"visible":"hidden"),s=mt(()=>{r.value="hidden"}),i=f(!0),d={show:o,appear:m(()=>e.appear||!i.value)};return C(()=>{I(()=>{i.value=!1,o.value?r.value="visible":Te(s)||(r.value="hidden")})}),N(ze,s),N(qe,d),()=>{let c=Vt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return R({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[F(Fl,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...b,...c},n.default)]},attrs:{},features:gt,visible:r.value==="visible",name:"Transition"})}}});const Pl=_("div",{class:"fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity"},null,-1),Ol={class:"fixed inset-0 z-10 overflow-y-auto"},Al={class:"flex min-h-full items-end justify-center text-center sm:items-center sm:p-0"},Bl={class:"flex items-center justify-between border-b border-gray-300 px-4 py-3"},Ml={class:"px-4 pb-3 pt-4"},Rl=k({__name:"Modal",props:{open:{type:Boolean,default:!1},title:{}},emits:["close"],setup(e,{emit:t}){const l=t,n=e;function a(){l("close")}return(o,r)=>(D(),_e(S(ht),{as:"template",show:o.open},{default:T(()=>[g(S(hl),{as:"div",class:"relative z-10",onClose:a},{default:T(()=>[g(S(Ne),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:T(()=>[Pl]),_:1}),_("div",Ol,[_("div",Al,[g(S(Ne),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:T(()=>[g(S(yl),{class:"relative min-h-dvh w-screen transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:min-h-full sm:w-full sm:max-w-[400px] sm:rounded-lg"},{default:T(()=>[_("header",Bl,[g(S(bl),{as:"h3",class:"font-poppins text-xl font-semibold"},{default:T(()=>[nt(J(n.title),1)]),_:1}),_("button",{class:"rounded-full bg-gray-100 p-2",onClick:a},[g(q,{name:"cross",class:"h-4 w-4 text-gray-900"})])]),_("div",Ml,[Ct(o.$slots,"default")])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"]))}}),Hl={class:"flex items-center gap-1 rounded-full bg-gray-50 px-1.5 py-[3px]"},Nl={class:"font-poppins text-xs font-medium capitalize"},jl={class:"font-poppins text-xs font-medium"},et=k({__name:"TodoTag",props:{type:{},priorityVariant:{},statusVariant:{}},setup(e){const t=e,l=m(()=>Ut.find(n=>n.value===t.priorityVariant));return(n,a)=>(D(),H("div",Hl,[n.type=="status"&&t.statusVariant?(D(),H(G,{key:0},[g(Wt,{variant:t.statusVariant},null,8,["variant"]),_("p",Nl,J(t.statusVariant),1)],64)):n.type==="priority"&&l.value?(D(),H(G,{key:1},[g(q,{name:l.value.icon,class:je(`${l.value.color} h-4 w-4`)},null,8,["name","class"]),_("p",jl,J(l.value.label),1)],64)):Ft("",!0)]))}}),Il={class:"space-y-2 border-gray-100 py-4 md:rounded-[10px] md:border md:p-4 [&:not(:last-child)]:border-b"},Vl={class:"flex justify-between"},Ul={class:"space-y-1"},Wl={class:"font-inter text-base font-medium text-gray-900"},ql={class:"font-inter text-sm font-medium text-gray-500"},zl=_("p",null,"Mark as done",-1),Yl=_("p",null,"Move to backlog",-1),Kl=_("p",null,"Edit",-1),Ql=_("p",null,"Delete",-1),Gl={class:"font-inter text-sm font-normal"},Zl={class:"flex gap-3"},tt=k({__name:"Todo",props:{todo:{}},emits:["edit"],setup(e,{emit:t}){const l=e,n=t,a=Pt({...l.todo});function o(s){a.status=s,a.patch(`/todos/${l.todo.id}`)}function r(){a.delete(`/todos/${l.todo.id}`)}return(s,i)=>(D(),H("li",Il,[_("div",Vl,[_("div",Ul,[_("h4",Wl,J(l.todo.title),1),_("time",ql,J(S(yt)(l.todo.created_at)),1)]),g(S(_t),{as:"div",class:"relative"},{default:T(()=>[g(S(wt),null,{default:T(()=>[g(q,{name:"ellipsis",class:"h-5 w-5 text-gray-900"})]),_:1}),g(Ot,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:T(()=>[g(S($t),{class:"absolute right-0 z-10 mt-2 w-[250px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:T(()=>[g(S(be),{as:"button",class:"flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-success-600 hover:bg-gray-100",onClick:i[0]||(i[0]=d=>o("complete"))},{default:T(()=>[g(q,{name:"check-circle",class:"h-5 w-5"}),zl]),_:1}),g(S(be),{as:"button",class:"flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100",onClick:i[1]||(i[1]=d=>o("backlog"))},{default:T(()=>[g(q,{name:"back",class:"h-5 w-5"}),Yl]),_:1}),g(S(be),{as:"button",class:"flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-gray-900 hover:bg-gray-100",onClick:i[2]||(i[2]=d=>n("edit",l.todo))},{default:T(()=>[g(q,{name:"pencil-line",class:"h-5 w-5"}),Kl]),_:1}),g(S(be),{as:"button",class:"flex w-full cursor-pointer items-center gap-2 px-4 py-3 font-poppins text-sm font-medium text-danger-600 hover:bg-gray-100",onClick:r},{default:T(()=>[g(q,{name:"trash",class:"h-5 w-5"}),Ql]),_:1})]),_:1})]),_:1})]),_:1})]),_("p",Gl,J(l.todo.description),1),_("div",Zl,[g(et,{type:"status","status-variant":l.todo.status},null,8,["status-variant"]),g(et,{type:"priority","priority-variant":l.todo.priority},null,8,["priority-variant"])])]))}}),Xl={class:"space-y-4 px-6 lg:px-0"},Jl={class:"flex items-center justify-between"},en=_("h1",{class:"font-poppins text-[32px] font-bold text-gray-900"}," Todos ",-1),tn=_("hr",{class:"mt-4 md:hidden"},null,-1),ln={key:0,class:"divide-y divide-gray-300"},nn={class:"font-base font-poppins font-medium md:text-xl"},an={key:1,class:"mt-4 space-y-4"},on={key:1,class:"py-6 text-center font-poppins font-medium"},$n=k({__name:"Index",setup(e){const t=At().props,l=f(!1),n=lt([{title:"Pending",key:"pending"},{title:"Complete",key:"complete"},{title:"Backlog",key:"backlog"}]),a=f(!1),o=f(),r=f();function s(){r.value=void 0,l.value=!1}function i(u){return t.groupedTodos[u]}function d({title:u,status:v,priority:p}){a.value=!!u||!!v||!!p,o.value={title:u,status:v,priority:p}}const c=m(()=>{var v,p,y;let u=t.todos;return(v=o.value)!=null&&v.title&&(u=u.filter(h=>{var x;return h.title.includes(((x=o.value)==null?void 0:x.title)||"")})),(p=o.value)!=null&&p.status&&(u=u.filter(h=>{var x;return h.status===((x=o.value)==null?void 0:x.status)})),(y=o.value)!=null&&y.priority&&(u=u.filter(h=>{var x;return h.priority===((x=o.value)==null?void 0:x.priority)})),u});function b(u){console.log("Edit this: ",u),r.value=u,l.value=!0}return(u,v)=>(D(),H(G,null,[g(S(Bt),{title:"Dashboard"}),g(Rl,{title:"New Todo",open:l.value,onClose:s},{default:T(()=>[g(qt,{todo:r.value,onClose:s},null,8,["todo"])]),_:1},8,["open"]),g(Et,null,{default:T(()=>[g(Tt),_("div",Xl,[_("div",Jl,[en,g(bt,{"icon-leading":"add",onClick:v[0]||(v[0]=p=>l.value=!0)},{default:T(()=>[nt(" Add Todo ")]),_:1})]),g(St,{onFilter:d})]),tn,a.value?(D(),H("ul",an,[c.value.length?(D(!0),H(G,{key:0},De(c.value,p=>(D(),_e(tt,{todo:p,key:p.title,onEdit:b},null,8,["todo"]))),128)):(D(),H("p",on," No results found "))])):(D(),H("div",ln,[(D(!0),H(G,null,De(n,p=>(D(),_e(S(_l),{key:p.key,as:"div",class:"px-6 py-4 lg:px-0"},{default:T(({open:y})=>[g(S(El),{class:"flex w-full items-center justify-between"},{default:T(()=>[_("h3",nn,J(p.title),1),g(q,{name:"chevron-down",class:je(["h-4 w-4 transition md:h-5 md:w-5",{"rotate-180":y,"rotate-0":!y}])},null,8,["class"])]),_:2},1024),g(S(Tl),{as:"ul",class:"mt-8 md:space-y-4"},{default:T(()=>[(D(!0),H(G,null,De(i(p.key),h=>(D(),_e(tt,{todo:h,key:h.title,onEdit:b},null,8,["todo"]))),128))]),_:2},1024)]),_:2},1024))),128))]))]),_:1})],64))}});export{$n as default};
