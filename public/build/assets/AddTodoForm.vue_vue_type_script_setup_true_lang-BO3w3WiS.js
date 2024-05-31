import{d as N,c as V,j,o as i,T as I,r as g,l as L,q,e as n,a as r,w as s,h as z,b as u,t as d,F as T,E as F,u as a,f as c,g as _,G as A,H as G,C as H}from"./app-w0SvkJgf.js";import{_ as E}from"./Button.vue_vue_type_script_setup_true_lang-CTStIClv.js";import{s as x,p as v,a as S,b as B,_ as P}from"./data-DFKw6Be9.js";import{F as y}from"./FormField-J88tQsi2.js";import{_ as J}from"./Input.vue_vue_type_script_setup_true_lang-C-VNrIM5.js";import{I as b}from"./InputError-Disr5MVT.js";import{_ as K}from"./SvgIcon.vue_vue_type_script_setup_true_lang-vzFmeNMo.js";const O=["for"],w=N({__name:"Label",props:{for:{}},setup(h){const k=h;return(f,e)=>(i(),V("label",{for:k.for,class:"font-sourcesans3 text-lg font-normal"},[j(f.$slots,"default")],8,O))}}),Q={class:"space-y-3"},R={class:"flex gap-3"},W={class:"flex-1"},X={class:"font-sourcesans3 text-sm"},Y={class:"font-inter text-sm font-medium"},Z={class:"flex-1"},ee={class:"font-sourcesans3 text-sm"},te={class:"font-inter text-sm font-medium"},se={class:"flex justify-end gap-3 pt-3"},de=N({__name:"AddTodoForm",props:{todo:{}},emits:["close"],setup(h,{emit:k}){const f=h,e=I({status:"",priority:"",title:"",description:""}),C=k,$=g(!1),m=g(x[0]),p=g(v[0]),U=L(()=>!!f.todo);q(()=>f.todo,o=>{m.value=x.find(l=>l.value===(o==null?void 0:o.status))||x[0],p.value=v.find(l=>l.value===(o==null?void 0:o.priority))||v[0],e.title=(o==null?void 0:o.title)||"",e.description=(o==null?void 0:o.description)||""},{deep:!0,immediate:!0});function D(){C("close")}function M(){var o;$.value=!0,e.clearErrors(),e.status=m.value.value,e.priority=p.value.value,U.value?e.patch(`/todos/${(o=f.todo)==null?void 0:o.id}`):e.post("/todos",{onError(){$.value=!1},onFinish(){C("close")}})}return(o,l)=>(i(),V("form",{onSubmit:z(M,["prevent"])},[n("div",Q,[n("div",R,[n("div",W,[r(w,{for:"status",class:"font-sourcesans3 text-sm"},{default:s(()=>[u(" Status ")]),_:1}),r(y,null,{default:s(()=>[r(S,{id:"status",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=t=>m.value=t)},{selectedValue:s(()=>[n("p",X,d(m.value.label),1)]),default:s(()=>[(i(!0),V(T,null,F(a(x),t=>(i(),c(B,{value:t,key:t.value},{default:s(()=>[r(P,{variant:t.value},null,8,["variant"]),n("p",Y,d(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(e).errors.status?(i(),c(b,{key:0},{default:s(()=>[u(d(a(e).errors.status),1)]),_:1})):_("",!0)]),_:1})]),n("div",Z,[r(w,{for:"priority",class:"font-sourcesans3 text-sm"},{default:s(()=>[u(" Priority ")]),_:1}),r(y,null,{default:s(()=>[r(S,{id:"priority",modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=t=>p.value=t)},{selectedValue:s(()=>[n("p",ee,d(p.value.label),1)]),default:s(()=>[(i(!0),V(T,null,F(a(v),t=>(i(),c(B,{value:t,key:t.value},{default:s(()=>[t.icon?(i(),c(K,{key:0,name:t.icon,class:H(`h-5 w-5 ${t.color}`)},null,8,["name","class"])):_("",!0),n("p",te,d(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(e).errors.status?(i(),c(b,{key:0},{default:s(()=>[u(d(a(e).errors.status),1)]),_:1})):_("",!0)]),_:1})])]),r(y,null,{default:s(()=>[r(J,{label:"Todo Title",id:"title",class:"w-full",modelValue:a(e).title,"onUpdate:modelValue":l[2]||(l[2]=t=>a(e).title=t)},null,8,["modelValue"]),a(e).errors.title?(i(),c(b,{key:0},{default:s(()=>[u(d(a(e).errors.title),1)]),_:1})):_("",!0)]),_:1}),n("div",null,[r(w,{for:"description",class:"font-sourcesans3 text-sm"},{default:s(()=>[u(" Todo Description ")]),_:1}),r(y,null,{default:s(()=>[A(n("textarea",{id:"description",rows:"3",class:"w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-primary-600","onUpdate:modelValue":l[3]||(l[3]=t=>a(e).description=t)},null,512),[[G,a(e).description]]),a(e).errors.description?(i(),c(b,{key:0},{default:s(()=>[u(d(a(e).errors.description),1)]),_:1})):_("",!0)]),_:1})]),n("div",se,[r(E,{type:"button",role:"button",variant:"tertiary",onClick:D},{default:s(()=>[u(" Cancel ")]),_:1}),r(E,{type:"submit",loading:$.value},{default:s(()=>[u("Create Todo")]),_:1},8,["loading"])])])],32))}});export{de as _};
