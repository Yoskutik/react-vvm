"use strict";(self.webpackChunk_yoskutik_react_vvm_preview=self.webpackChunk_yoskutik_react_vvm_preview||[]).push([[280],{3182:function(e,i,t){t.d(i,{gm:function(){return y},y4:function(){return w},EK:function(){return O},oP:function(){return C},LG:function(){return c},QX:function(){return D},Dx:function(){return u}});var s=t(3936),n=t(8949),o=function(e,i,t,s){var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,i,t,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(i,t,r):n(i,t))||r);return o>3&&r&&Object.defineProperty(i,t,r),r},r=function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};class a extends s.jz{constructor(){super(...arguments),this.idToHeading={},this.headersOrdered=[],this.visibleHeaders=new Set,this.addHeader=(e,i)=>{this.headersOrdered.push(e),this.idToHeading[e]=i},this.toggleHeaderVisibility=(e,i)=>{this.visibleHeaders[i?"add":"delete"](e)},this.scrollToHeading=e=>{this.animatedInfo&&(clearTimeout(this.animatedInfo.timeout),this.animatedInfo.heading.classList.remove("animated"));const i=this.idToHeading[e],{top:t}=i.parentElement.getBoundingClientRect();window.scrollBy({behavior:"smooth",top:t-64}),i.classList.add("animated"),this.animatedInfo={heading:i,timeout:setTimeout((()=>{i.classList.remove("animated"),this.animatedInfo=void 0}),2500)}}}get firstVisibleHeader(){return this.headersOrdered.find((e=>this.visibleHeaders.has(e)))}}o([n.LO.shallow,r("design:type",Array)],a.prototype,"headersOrdered",void 0),o([n.LO.shallow,r("design:type",Object)],a.prototype,"visibleHeaders",void 0),o([n.Fl,r("design:type",String),r("design:paramtypes",[])],a.prototype,"firstVisibleHeader",null),o([n.aD,r("design:type",Object)],a.prototype,"addHeader",void 0),o([n.aD,r("design:type",Object)],a.prototype,"toggleHeaderVisibility",void 0);const c=(0,s.ei)(a)((({children:e})=>e),{observer:!1});var d=t(5893),l=t(7294),h=t(917),p=t(4174),m=t(8720),x=t(1647);const g=h.F4`
  0% { background-color: rgba(240, 247, 255, 0); }
  30% { background-color: rgba(240, 247, 255, 1); }
  70% { background-color: rgba(240, 247, 255, 1); }
  100% { background-color: rgba(240, 247, 255, 0); }
`,j=(0,p.ZP)(m.Z)`
  border-radius: 0.4rem;

  &.animated {
    animation: ${g} 0.5s ease-in-out infinite;
  }
`,u=(0,s.xh)()((({text:e,variant:i,id:t,sx:s,viewModel:n,children:o})=>{const r=(0,l.useRef)();return(0,l.useLayoutEffect)((()=>{n.addHeader(t,r.current);const e=new IntersectionObserver((e=>{n.toggleHeaderVisibility(t,e[0].intersectionRatio>0)}),{rootMargin:"-64px 0px 0px 0px"}),i=r.current;return e.observe(i),()=>e.unobserve(i)}),[t,n]),(0,d.jsx)(m.Z,Object.assign({sx:Object.assign({pt:1},s)},{children:(0,d.jsx)(j,Object.assign({sx:{padding:"4px 8px",ml:-1},ref:r},{children:(0,d.jsx)(x.Z,Object.assign({component:i,variant:i},{children:null!=e?e:o}))}))}))}));var f=t(5305),b=t(4384);const v=(0,s.xh)()((({text:e,id:i,viewModel:t})=>(0,d.jsx)(f.Z,Object.assign({color:t.firstVisibleHeader===i?"primary":"inherit",style:{backgroundColor:t.firstVisibleHeader===i?"#f0f7ff":void 0,fontWeight:t.firstVisibleHeader===i?"bold":void 0},sx:{transitionProperty:"font-weight, background-color",justifyContent:"flex-start",fontSize:{sm:13,md:14},textTransform:"none",textAlign:"initial",width:"100%"},onClick:()=>t.scrollToHeading(i)},{children:e})))),w=({text:e,id:i,children:t})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{text:e,id:i}),t&&(0,d.jsx)(m.Z,Object.assign({sx:{pl:2.5}},{children:t}))]}),y=({children:e})=>(0,d.jsxs)(m.Z,Object.assign({sx:{borderRight:"1px solid rgba(0, 0, 0, 0.12)",display:{xs:"none",sm:"block"},width:{sm:200,md:250},backgroundColor:"#fff",boxSizing:"border-box",maxHeight:"100vh",position:"sticky",flexShrink:0,top:0,mt:-8}},{children:[(0,d.jsx)(b.Z,{}),(0,d.jsx)(m.Z,Object.assign({sx:{p:1}},{children:e}))]})),O=(0,p.ZP)("code")`
  border: 0.1rem solid rgba(0,0,0,.1);
  background-color: #f6f7f8;
  border-radius: 0.5rem;
  padding: 0 0.3rem;
`;var Z=t(7469),V=t(703),E=t(130),M=t(9633),k=t(147),S=t(4424);const K=(0,p.ZP)(m.Z)`
  position: relative;
  
  &:hover .highlighter-copy-button {
    opacity: 1;
  }
`,C=({code:e,sx:i,style:t,forceShowCopy:s,language:n="tsx"})=>{const[o,r]=(0,l.useState)(!1);return(0,d.jsxs)(K,Object.assign({sx:i},{children:[(0,d.jsx)(Z.Z,Object.assign({customStyle:Object.assign({borderRadius:"0.4rem",boxShadow:"0 1px 4px 0 rgba(0,0,0,0.1)"},t),language:n,style:V.Z},{children:e})),(s||e.includes("\n"))&&(0,d.jsx)(E.Z,Object.assign({sx:{position:"absolute",top:7,right:7,opacity:0,transitionProperty:"opacity"},className:"highlighter-copy-button",onClick:()=>{navigator.clipboard.writeText(e).then((()=>r(!0)))}},{children:(0,d.jsx)(S.Z,{sx:{fill:"#e0e0e0"}})})),(0,d.jsx)(M.Z,Object.assign({open:o,autoHideDuration:2e3,onClose:()=>r(!1)},{children:(0,d.jsx)(k.Z,Object.assign({onClose:()=>r(!1),severity:"info",sx:{width:"100%"}},{children:"The code was copied!"}))}))]}))};var A=t(3462),P=t(8046),T=t(3935);const D=()=>{const e=(0,l.useMemo)((()=>document.querySelector("#root")),[]),[i,t]=(0,l.useState)(!1),s=(0,l.useRef)();(0,l.useEffect)((()=>{const e=new IntersectionObserver((([e])=>{t(0===e.intersectionRatio)})),i=s.current;return e.observe(i),()=>e.unobserve(i)}),[]);const n=(0,T.createPortal)((0,d.jsx)(A.Z,Object.assign({title:i?"Scroll to top":""},{children:(0,d.jsx)(E.Z,Object.assign({onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{pointerEvents:i?void 0:"none"},sx:{transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",transform:"rotate(-90deg)",backgroundColor:"#c2e0ff",opacity:i?1:0,position:"fixed",bottom:20,right:20,"&:hover":{backgroundColor:"#99ccf3"}}},{children:(0,d.jsx)(P.Z,{})}))})),e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:s}),n]})}},5280:function(e,i,t){t.r(i),t.d(i,{default:function(){return H}});var s=t(5893),n=t(7294),o=t(8720),r=t(3182),a=t(1647);const c={main:"view.main",usage:"view.usage",options:"view.options",sample:"view.sample"},d={main:"childView.main",usage:"childView.usage",options:"childView.options",sample:"childView.sample"},l={main:"viewModel.main",parent:"viewModel.parent",description:{main:"viewModel.description.main",properties:"viewModel.description.properties",methods:"viewModel.description.methods"},sample:"viewModel.sample"},h={main:"configuration.main",usage:"configuration.usage",sample:"configuration.sample"};var p=t(1394),m=t(147),x=t(5359),g=t(3366),j=t(7462),u=t(6010),f=t(4780),b=t(1796),v=t(4174),w=t(1468),y=t(4867);function O(e){return(0,y.Z)("MuiDivider",e)}(0,t(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Z=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],V=(0,v.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,t.absolute&&i.absolute,i[t.variant],t.light&&i.light,"vertical"===t.orientation&&i.vertical,t.flexItem&&i.flexItem,t.children&&i.withChildren,t.children&&"vertical"===t.orientation&&i.withChildrenVertical,"right"===t.textAlign&&"vertical"!==t.orientation&&i.textAlignRight,"left"===t.textAlign&&"vertical"!==t.orientation&&i.textAlignLeft]}})((({theme:e,ownerState:i})=>(0,j.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,b.Fq)(e.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:i})=>(0,j.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:i})=>(0,j.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,j.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),E=(0,v.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.wrapper,"vertical"===t.orientation&&i.wrapperVertical]}})((({theme:e,ownerState:i})=>(0,j.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===i.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var M=n.forwardRef((function(e,i){const t=(0,w.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:o,className:r,component:a=(o?"div":"hr"),flexItem:c=!1,light:d=!1,orientation:l="horizontal",role:h=("hr"!==a?"separator":void 0),textAlign:p="center",variant:m="fullWidth"}=t,x=(0,g.Z)(t,Z),b=(0,j.Z)({},t,{absolute:n,component:a,flexItem:c,light:d,orientation:l,role:h,textAlign:p,variant:m}),v=(e=>{const{absolute:i,children:t,classes:s,flexItem:n,light:o,orientation:r,textAlign:a,variant:c}=e,d={root:["root",i&&"absolute",c,o&&"light","vertical"===r&&"vertical",n&&"flexItem",t&&"withChildren",t&&"vertical"===r&&"withChildrenVertical","right"===a&&"vertical"!==r&&"textAlignRight","left"===a&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,f.Z)(d,O,s)})(b);return(0,s.jsx)(V,(0,j.Z)({as:a,className:(0,u.Z)(v.root,r),role:h,ref:i,ownerState:b},x,{children:o?(0,s.jsx)(E,{className:v.wrapper,ownerState:b,children:o}):null}))}));const k=({children:e})=>(0,s.jsx)(o.Z,Object.assign({gap:2,sx:{display:"grid",mt:2,gridTemplateColumns:{xs:"auto",md:"auto auto"}}},{children:e})),S=({item:e,children:i})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,Object.assign({sx:{mt:{xs:2,md:0}}},{children:(0,s.jsx)(r.EK,{children:e})})),(0,s.jsx)("div",{children:i})]}),K=()=>(0,s.jsx)(M,{sx:{gridColumn:{md:"1 / 3"}}}),C=({id:e,text:i})=>(0,s.jsx)(r.Dx,{id:e,sx:{gridColumn:{md:"1 / 3"}},text:i,variant:"h6"}),A=()=>(0,s.jsxs)(k,{children:[(0,s.jsx)(C,{id:l.description.properties,text:"Properties"}),(0,s.jsx)(K,{}),(0,s.jsxs)(S,Object.assign({item:"@observable.ref readonly parent"},{children:[(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A link to a parent view model. The parent view model is not defined in the constructor of a current view model, but in some cases, you may need to hang a reaction on one of the fields of the parent view of the model. This is a reason why ",(0,s.jsx)(r.EK,{children:"parent"})," is observable."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See typing and using parent view model: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.viewModel.typings}`},{children:"Example"})),"."]}))]})),(0,s.jsxs)(S,Object.assign({item:"@observable.ref readonly viewProps"},{children:[(0,s.jsx)(a.Z,Object.assign({component:"p"},{children:"A link to a props the view has rendered with. Every time the view is renders it updates this field. Every view is memoized, and this mean that this object will be updated only if at least 1 property has been changed."})),(0,s.jsxs)(m.Z,Object.assign({severity:"warning",sx:{mt:2}},{children:["Be careful observing ",(0,s.jsx)(r.EK,{children:"viewProps"}),". If some of yours observer components or reactions are using "," ",(0,s.jsx)(r.EK,{children:"viewProps"}),", they might update every time any prop has changed, even if the updated prop is not used directly. For better understanding of how you should observe the props, please, see the example."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See typing, using and observing ",(0,s.jsx)(r.EK,{children:"viewProps"}),": "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.viewModel.viewProps}`},{children:"Example"})),"."]}))]})),(0,s.jsx)(K,{}),(0,s.jsx)(C,{text:"Methods",id:l.description.methods}),(0,s.jsx)(K,{}),(0,s.jsx)(S,Object.assign({item:"protected onViewMounted?()"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view becomes mounted. The function is called in the "," ",(0,s.jsx)(r.EK,{children:"useEffect"})," hook."]}))})),(0,s.jsx)(S,Object.assign({item:"protected onViewMountedSync?()"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view becomes mounted. The function is called in the "," ",(0,s.jsx)(r.EK,{children:"useLayoutEffect"})," hook."]}))})),(0,s.jsx)(S,Object.assign({item:"protected onViewUnmounted?()"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view becomes unmounted. The function is called in the "," ",(0,s.jsx)(r.EK,{children:"useEffect"})," hook."]}))})),(0,s.jsx)(S,Object.assign({item:"protected onViewUnmountedSync?()"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view becomes unmounted. The function is called in the "," ",(0,s.jsx)(r.EK,{children:"useLayoutEffect"})," hook."]}))})),(0,s.jsx)(S,Object.assign({item:"protected onViewUpdated?()"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view is rendered besides the first one. This function is also called in the ",(0,s.jsx)(r.EK,{children:"useEffect"})," hook."]}))})),(0,s.jsxs)(S,Object.assign({item:"protected onViewUpdatedSync?()"},{children:[(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A hook which is called after the view is rendered besides the first one. This function is also called in the ",(0,s.jsx)(r.EK,{children:"useLayoutEffect"})," hook."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See using view hooks: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.viewModel.hooks}`},{children:"Example"})),"."]}))]})),(0,s.jsx)(K,{}),(0,s.jsx)(S,Object.assign({item:"protected autorun(...args)"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["An add-on function for an ",(0,s.jsx)(r.EK,{children:"autorun"})," from MobX. When view becomes unmounted, the disposer of this function will be called automatically."]}))})),(0,s.jsx)(S,Object.assign({item:"protected reaction(...args)"},{children:(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["An add-on function for a ",(0,s.jsx)(r.EK,{children:"reaction"})," from MobX. When view becomes unmounted, the disposer of this function will be called automatically."]}))})),(0,s.jsxs)(S,Object.assign({item:"protected addDisposer(disposer)"},{children:[(0,s.jsx)(a.Z,Object.assign({component:"p"},{children:"A function which adds a disposer that will be called after the view becomes unmounted."})),(0,s.jsxs)(m.Z,Object.assign({severity:"warning",sx:{mt:2}},{children:["MobX states that ",(0,s.jsx)("b",{children:"you should always dispose of reactions"}),". This is why ",(0,s.jsx)(r.EK,{children:"autorun"}),", "," ",(0,s.jsx)(r.EK,{children:"reaction"})," and ",(0,s.jsx)(r.EK,{children:"addDisposer"})," were added to a ",(0,s.jsx)(r.EK,{children:"ViewModel"}),". So, please, use it every time you want to create reactions ",(0,s.jsx)("i",{children:"inside a view model"}),". Otherwise, you can create a memory leak."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See observing: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.viewModel.reactions}`},{children:"Example"})),"."]}))]})),(0,s.jsx)(K,{})]}),P=()=>(0,s.jsxs)(o.Z,Object.assign({sx:{mt:8}},{children:[(0,s.jsx)(r.Dx,{text:"ViewModel",variant:"h3",id:l.main}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["The ",(0,s.jsx)(r.EK,{children:"ViewModel"})," class is an object that implements the view model logic from the MVVM pattern. In general case, the ",(0,s.jsx)(r.EK,{children:"ViewModel"})," is designed to store observable fields, as well as logic for updating them."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["The ",(0,s.jsx)(r.EK,{children:"ViewModel"})," stores a reference to the props object with which the view was rendered with and also a reference to the parent view model. Also, ",(0,s.jsx)(r.EK,{children:"ViewModel"})," has a few view's lifecycle methods."]})),(0,s.jsxs)(r.Dx,Object.assign({variant:"h5",id:l.parent,sx:{mt:3}},{children:["What is ",(0,s.jsx)(r.EK,{children:"parent"})," for a ViewModel?"]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["The assignment of the parent view model occurs according to the virtual DOM tree. If ",(0,s.jsx)(r.EK,{children:"View2"})," is located somewhere inside ",(0,s.jsx)(r.EK,{children:"View1"}),", then ",(0,s.jsx)(r.EK,{children:"ViewModel1"})," will be considered the parent of"," ",(0,s.jsx)(r.EK,{children:"ViewModel2"}),"."]})),(0,s.jsx)(r.Dx,{text:"Description",variant:"h5",id:l.description.main,sx:{mt:3}}),(0,s.jsx)(A,{}),(0,s.jsx)(r.Dx,{text:"Usage sample",variant:"h5",id:l.sample,sx:{mt:3}}),(0,s.jsx)(r.oP,{sx:{mt:2},code:"import { ViewModel } from '@yoskutik/react-vvm';\nimport { action, observable, makeObservable } from 'mobx';\nimport type { ParentViewModel } from '../path-to-parent-view-model';\nimport type { SomeViewProps } from './path-to-view';\n\nexport class SomeViewModel extends ViewModel<ParentViewModel, SomeViewProps> {\n  @observable field1 = 0;\n\n  @observable field2 = 'field';\n\n  constructor() {\n    super();\n    makeObservable(this);\n  }\n\n  protected onViewMounted() {\n    // do something\n  }\n\n  @action doSomething = () => {\n    // do something\n  };\n}\n"})]}));const T=()=>(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(r.Dx,{text:"View",variant:"h3",id:c.main}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["The ",(0,s.jsx)(r.EK,{children:"view"})," function creates an object that implements the view logic from the MVVM pattern. This means that view should be responsible for displaying a component in your application."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["A view takes a ",(0,s.jsx)(r.EK,{children:"vmFactory"})," from the ",(0,s.jsx)(r.EK,{children:"configuration"})," and call it to create an instance of a view model. Also view is responsible for updating view model's fields ",(0,s.jsx)(r.EK,{children:"parent"})," and"," "," ",(0,s.jsx)(r.EK,{children:"viewProps"})," and for calling view's lifecycle hooks in the instance of a view model."]})),(0,s.jsx)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:"By default, every view is an observer. But you can configure it."})),(0,s.jsx)(m.Z,Object.assign({severity:"info",sx:{mt:2}},{children:"One of the issues that solves this package is the purity of the code. The fewer props your components have, the easier it will be to understand your code for others. And with this package you can minimize amount of props passed by observing view model's fields, its parent's fields and so on. For example, a ChildView can observe its View props."})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:[(0,s.jsx)("b",{children:"Every view is memoized"}),". And as it states below, the fewer props your view having, the faster your application will work. Since the view uses ",(0,s.jsx)(r.EK,{children:"memo"})," function, you can also pass the "," ",(0,s.jsx)(r.EK,{children:"propsAreEqual"})," function to it."]})),(0,s.jsx)(r.Dx,{text:"Usage",variant:"h5",id:c.usage,sx:{mt:3}}),(0,s.jsx)(r.oP,{code:"view(SomeViewModel)(Component[, options])",sx:{mt:2}}),(0,s.jsx)(r.Dx,{text:"Options",variant:"h6",id:c.options,sx:{mt:3}}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["There are two options: ",(0,s.jsx)(r.EK,{children:"observer"})," and ",(0,s.jsx)(r.EK,{children:"propsAreEqual"}),". If ",(0,s.jsx)(r.EK,{children:"observer"})," is"," "," ",(0,s.jsx)(r.EK,{children:"false"}),", when view will be created as non-observer component. And if ",(0,s.jsx)(r.EK,{children:"propsAreEqual"}),"is set, it will be passed to a ",(0,s.jsx)(r.EK,{children:"memo"})," function (See "," ",(0,s.jsx)(p.Z,Object.assign({href:"https://reactjs.org/docs/react-api.html#reactmemo",rel:"noreferrer"},{children:"how's memo work"}))," "," for better understanding)."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See setting view options: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.view.options}`},{children:"Example"})),"."]})),(0,s.jsx)(r.Dx,{text:"Usage sample",variant:"h5",id:c.sample,sx:{mt:3}}),(0,s.jsx)(r.oP,{sx:{mt:2},code:"import React, { FC } from 'react';\nimport { view } from '@yoskutik/react-vvm';\nimport { SomeViewModel } from './path-to-view-model';\n\nexport type SomeViewProps = {\n  prop1: number;\n  prop2?: string;\n};\n\nexport const SomeView: FC<SomeViewProps> = view(SomeViewModel)(({ viewModel, prop1, prop2 }) => (\n  <div>\n    {viewModel.field1}\n    {prop1}\n    {prop2}\n  </div>\n));\n"})]});const D=()=>(0,s.jsxs)(o.Z,Object.assign({sx:{mt:8}},{children:[(0,s.jsx)(r.Dx,{text:"ChildView",variant:"h3",id:d.main}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["As the ",(0,s.jsx)(r.EK,{children:"view"}),", the ",(0,s.jsx)(r.EK,{children:"childView"})," function creates an object that also implements the view logic from the MVVM pattern. But there's a big difference in these functions - ChildView does not call "," ",(0,s.jsx)(r.EK,{children:"vmFactory"})," and uses a view's view model as own one."]})),(0,s.jsx)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:"By default, every child view is an observer and is memoized. And you can change it. The options of creating view child is same as for view."})),(0,s.jsx)(r.Dx,{text:"Usage",variant:"h5",id:d.usage,sx:{mt:3}}),(0,s.jsx)(r.oP,{code:"childView()(Component[, options])",sx:{mt:2}}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See using ChildView: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.view.childView}`},{children:"Example"})),"."]})),(0,s.jsx)(r.Dx,{text:"Options",variant:"h6",id:d.options,sx:{mt:3}}),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See setting options: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.view.options}`},{children:"Example"})),"."]})),(0,s.jsx)(r.Dx,{text:"Usage sample",variant:"h5",id:d.sample,sx:{mt:3}}),(0,s.jsx)(r.oP,{sx:{mt:2},code:"import React, { FC } from 'react';\nimport { childView } from '@yoskutik/react-vvm';\nimport type { SomeViewModel } from './path-to-view-model';\n\nexport type SomeChildViewProps = {\n  prop1: number;\n  prop2?: string;\n};\n\nexport const SomeChildView: FC<SomeChildViewProps> = childView<SomeViewModel>()(({ viewModel, prop1, prop2 }) => (\n  <div>\n    {viewModel.field1}\n    {prop1}\n    {prop2}\n  </div>\n));\n"})]}));const R=()=>(0,s.jsxs)(o.Z,Object.assign({sx:{mt:8}},{children:[(0,s.jsx)(r.Dx,{variant:"h3",text:"Configuration",id:h.main}),(0,s.jsx)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:"This library can be configured at the global level."})),(0,s.jsx)(r.Dx,{variant:"h5",text:"Usage",id:h.usage,sx:{mt:3}}),(0,s.jsx)(r.oP,{code:"configure({ vmFactory, Wrapper })",sx:{mt:2}}),(0,s.jsxs)(k,{children:[(0,s.jsxs)(S,Object.assign({item:"vmFactory"},{children:[(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["This function tells the view how to create an instance of a view model. By default, all view models are simply creating with a ",(0,s.jsx)(r.EK,{children:"new"})," keyword."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See configuring vmFactory: "," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.configuration.vmFactory}`},{children:"Example"})),"."]}))]})),(0,s.jsxs)(S,Object.assign({item:"Wrapper"},{children:[(0,s.jsxs)(a.Z,Object.assign({component:"p"},{children:["A wrapper which is used in ",(0,s.jsx)(r.EK,{children:"view"})," and ",(0,s.jsx)(r.EK,{children:"childView"}),". By default, ",(0,s.jsx)(r.EK,{children:"Wrapper"})," is equal to ",(0,s.jsx)(r.EK,{children:"React.Fragment"}),". The wrapper is useful if you want to add an ErrorBoundary or for a debugging purposes."]})),(0,s.jsxs)(a.Z,Object.assign({component:"p",sx:{mt:2}},{children:["See configuring the wrapper:"," ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.basic.configuration.wrapper}`},{children:"Basic usage"})),", ",(0,s.jsx)(p.Z,Object.assign({href:`#/examples?heading=${x.q.useful.errors}`},{children:"ErrorBoundary"})),"."]}))]}))]}),(0,s.jsx)(r.Dx,{variant:"h5",text:"Usage sample",id:h.sample,sx:{mt:3}}),(0,s.jsx)(r.oP,{sx:{mt:2},code:"import { FC, ReactElement } from 'react';\nimport { configure } from '@yoskutik/react-vvm';\n\nconst CustomWrapper: FC<{ children: ReactElement }> = ({ children }) => {\n  // do anything you want\n  return (\n    <div>\n      You can also add JSX\n      {children}\n    </div>\n  );\n};\n\nconfigure({\n  vmFactory: VM => {\n    const viewModel = new VM();\n    // do anything you want\n    return viewModel;\n  },\n  Wrapper: CustomWrapper,\n});\n"})]})),F=(0,n.memo)((()=>(0,s.jsxs)(r.gm,{children:[(0,s.jsxs)(r.y4,Object.assign({text:"View",id:c.main},{children:[(0,s.jsx)(r.y4,Object.assign({text:"Usage",id:c.usage},{children:(0,s.jsx)(r.y4,{text:"Options",id:c.options})})),(0,s.jsx)(r.y4,{text:"Usage sample",id:c.sample})]})),(0,s.jsxs)(r.y4,Object.assign({text:"ChildView",id:d.main},{children:[(0,s.jsx)(r.y4,Object.assign({text:"Usage",id:d.usage},{children:(0,s.jsx)(r.y4,{text:"Options",id:d.options})})),(0,s.jsx)(r.y4,{text:"Usage sample",id:d.sample})]})),(0,s.jsxs)(r.y4,Object.assign({text:"ViewModel",id:l.main},{children:[(0,s.jsx)(r.y4,{text:"What's a parent?",id:l.parent}),(0,s.jsxs)(r.y4,Object.assign({text:"Description",id:l.description.main},{children:[(0,s.jsx)(r.y4,{text:"Properties",id:l.description.properties}),(0,s.jsx)(r.y4,{text:"Methods",id:l.description.methods})]})),(0,s.jsx)(r.y4,{text:"Usage sample",id:l.sample})]})),(0,s.jsxs)(r.y4,Object.assign({text:"Configuration",id:h.main},{children:[(0,s.jsx)(r.y4,{text:"Usage",id:h.usage}),(0,s.jsx)(r.y4,{text:"Usage sample",id:h.sample})]}))]})));var H=(0,n.memo)((()=>(0,s.jsxs)(r.LG,{children:[(0,s.jsx)(r.QX,{}),(0,s.jsxs)(o.Z,Object.assign({sx:{display:"flex",width:"100%"}},{children:[(0,s.jsx)(F,{}),(0,s.jsx)(o.Z,Object.assign({sx:{justifyContent:"center",padding:"2rem 3rem",display:"flex",width:"100%",overflow:"hidden"}},{children:(0,s.jsxs)(o.Z,Object.assign({sx:{maxWidth:"100%",width:"1200px"}},{children:[(0,s.jsx)(T,{}),(0,s.jsx)(D,{}),(0,s.jsx)(P,{}),(0,s.jsx)(R,{}),(0,s.jsx)("div",{style:{height:"2rem"}})]}))}))]}))]})))},5359:function(e,i,t){t.d(i,{q:function(){return s}});const s={basic:{main:"basic",view:{main:"basic.view",childView:"basic.view.childView",typings:"basic.view.typings",options:"basic.view.options",forwardRef:"basic.view.forwardRef"},viewModel:{main:"basic.viewModel",typings:"basic.viewModel.typings",viewProps:"basic.viewModel.viewProps",hooks:"basic.viewModel.hooks",reactions:"basic.viewModel.reactions"},configuration:{main:"basic.configuration",vmFactory:"basic.configuration.vmFactory",wrapper:"basic.configuration.wrapper"}},useful:{main:"useful",makeObservable:"useful.makeObservable",di:"useful.di",errors:"useful.errors"},complex:"complex"}}}]);
//# sourceMappingURL=cd3559ac7ddc545caed4.chunk.js.map