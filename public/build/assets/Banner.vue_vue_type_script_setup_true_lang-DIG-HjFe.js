import{c as b}from"./index-AiV1xXdQ.js";import{_ as r}from"./SvgIcon.vue_vue_type_script_setup_true_lang-vzFmeNMo.js";import{d as $,c as d,e as s,t as n,a as i,g as y,C as k,u as w,o as u,Q as B,l as p}from"./app-w0SvkJgf.js";const T={class:"font-poppins text-sm font-medium text-gray-500"},C={class:"font-poppins text-[32px] font-bold"},V={key:0,class:"flex gap-1"},P={class:"flex items-center gap-0.5"},N={class:"font-poppins text-xs font-medium"},S={class:"flex items-center gap-0.5"},j={class:"font-poppins text-xs font-medium"},q={class:"flex items-center gap-0.5"},z={class:"font-poppins text-xs font-medium"},c=$({__name:"Stat",props:{value:{},variant:{default:"pending"},highest:{},medium:{},low:{}},setup(g){const t=g,l=b(["p-3","rounded-[10px]","min-w-[110px]"],{variants:{intent:{pending:["bg-warning-50"],complete:["bg-success-50"],backlog:["bg-gray-50"]}},defaultVariants:{intent:t.variant}});return(m,h)=>(u(),d("div",{class:k(w(l)())},[s("h4",T,n(t.variant==="pending"?"Pending":t.variant==="complete"?"Complete":"Backlog"),1),s("h3",C,n(t.value),1),t.variant=="pending"?(u(),d("div",V,[s("div",P,[i(r,{name:"double-chevron-up",class:"h-4 w-4 text-danger-600"}),s("p",N,n(t.highest),1)]),s("div",S,[i(r,{name:"equal",class:"h-4 w-4 text-warning-400"}),s("p",j,n(t.medium),1)]),s("div",q,[i(r,{name:"chevron-down",class:"h-4 w-4 text-info-600"}),s("p",z,n(t.low),1)])])):y("",!0)],2))}}),A="/build/assets/default-avatar-lg-BB2uwT6K.png",D={class:"flex flex-col justify-between gap-3 p-6 md:flex-row lg:px-0"},E={class:"flex items-center gap-2"},K={class:"h-[72px] w-[72px]"},L=["src","alt"],Q={class:"space-y-1"},F={class:"font-poppins text-xl font-semibold text-gray-900"},G={class:"font-inter text-base font-normal text-gray-500"},H={class:"flex gap-3"},O=$({__name:"Banner",setup(g){const t=B().props,l=p(()=>{var o;const e=(o=t==null?void 0:t.todos)==null?void 0:o.filter(a=>a.priority==="highest");return(e==null?void 0:e.length)||0}),m=p(()=>{var o;const e=(o=t==null?void 0:t.todos)==null?void 0:o.filter(a=>a.priority==="medium");return(e==null?void 0:e.length)||0}),h=p(()=>{var o;const e=(o=t==null?void 0:t.todos)==null?void 0:o.filter(a=>a.priority==="low");return(e==null?void 0:e.length)||0});return(e,o)=>{var a,_,f,v,x;return u(),d("div",D,[s("div",E,[s("div",K,[s("img",{src:e.$page.props.user.avatar||w(A),alt:`${e.$page.props.user.name} avatar photo`,height:"40",width:"40",class:"h-[72px] w-[72px] rounded-full"},null,8,L)]),s("div",Q,[s("h4",F,n(e.$page.props.user.name),1),s("p",G,n(e.$page.props.user.email),1)])]),s("div",H,[i(c,{variant:"pending",value:`${((a=e.$page.props.groupedTodos.pending)==null?void 0:a.length)||0}`,highest:l.value,medium:m.value,low:h.value},null,8,["value","highest","medium","low"]),i(c,{variant:"complete",value:`${((f=((_=e.$page.props)==null?void 0:_.groupedTodos).complete)==null?void 0:f.length)||0}`},null,8,["value"]),i(c,{variant:"backlog",value:`${((x=((v=e.$page.props)==null?void 0:v.groupedTodos).backlog)==null?void 0:x.length)||0}`},null,8,["value"])])])}}});export{O as _};