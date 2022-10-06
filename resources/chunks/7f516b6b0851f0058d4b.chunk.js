"use strict";(self.webpackChunk_yoskutik_react_vvm_preview=self.webpackChunk_yoskutik_react_vvm_preview||[]).push([[764],{3182:function(e,r,n){n.d(r,{gm:function(){return R},y4:function(){return P},EK:function(){return o},oP:function(){return u},LG:function(){return y},QX:function(){return K},Dx:function(){return O}});var i=n(4174);const o=(0,i.ZP)("code")`
  border: 0.1rem solid rgba(0,0,0,.1);
  background-color: #f6f7f8;
  border-radius: 0.5rem;
  padding: 0 0.3rem;
`;var t=n(5893),s=n(7294),a=n(7469),d=n(703),l=n(8720),c=n(130),h=n(9633),p=n(147),m=n(4424);const w=(0,i.ZP)(l.Z)`
  position: relative;
  
  &:hover .highlighter-copy-button {
    opacity: 1;
  }
`,u=({code:e,sx:r,style:n,forceShowCopy:i,language:o="tsx"})=>{const[l,u]=(0,s.useState)(!1);return(0,t.jsxs)(w,Object.assign({sx:r},{children:[(0,t.jsx)(a.Z,Object.assign({customStyle:Object.assign({borderRadius:"0.4rem",boxShadow:"0 1px 4px 0 rgba(0,0,0,0.1)"},n),language:o,style:d.Z},{children:e})),(i||e.includes("\n"))&&(0,t.jsx)(c.Z,Object.assign({sx:{position:"absolute",top:7,right:7,opacity:0,transitionProperty:"opacity"},className:"highlighter-copy-button",onClick:()=>{navigator.clipboard.writeText(e).then((()=>u(!0)))}},{children:(0,t.jsx)(m.Z,{sx:{fill:"#e0e0e0"}})})),(0,t.jsx)(h.Z,Object.assign({open:l,autoHideDuration:2e3,onClose:()=>u(!1)},{children:(0,t.jsx)(p.Z,Object.assign({onClose:()=>u(!1),severity:"info",sx:{width:"100%"}},{children:"The code was copied!"}))}))]}))};var v=n(3936),f=n(8949),b=function(e,r,n,i){var o,t=arguments.length,s=t<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(t<3?o(s):t>3?o(r,n,s):o(r,n))||s);return t>3&&s&&Object.defineProperty(r,n,s),s},x=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};class g extends v.jz{constructor(){super(...arguments),this.idToHeading={},this.headersOrdered=[],this.visibleHeaders=new Set,this.addHeader=(e,r)=>{this.headersOrdered.push(e),this.idToHeading[e]=r},this.toggleHeaderVisibility=(e,r)=>{this.visibleHeaders[r?"add":"delete"](e)},this.scrollToHeading=e=>{this.animatedInfo&&(clearTimeout(this.animatedInfo.timeout),this.animatedInfo.heading.classList.remove("animated"));const r=this.idToHeading[e],{top:n}=r.parentElement.getBoundingClientRect();window.scrollBy({behavior:"smooth",top:n-64}),r.classList.add("animated"),this.animatedInfo={heading:r,timeout:setTimeout((()=>{r.classList.remove("animated"),this.animatedInfo=void 0}),2500)}}}get firstVisibleHeader(){return this.headersOrdered.find((e=>this.visibleHeaders.has(e)))}}b([f.LO.shallow,x("design:type",Array)],g.prototype,"headersOrdered",void 0),b([f.LO.shallow,x("design:type",Object)],g.prototype,"visibleHeaders",void 0),b([f.Fl,x("design:type",String),x("design:paramtypes",[])],g.prototype,"firstVisibleHeader",null),b([f.aD,x("design:type",Object)],g.prototype,"addHeader",void 0),b([f.aD,x("design:type",Object)],g.prototype,"toggleHeaderVisibility",void 0);const y=(0,v.ei)(g)((({children:e})=>e),{observer:!1});var j=n(917),V=n(1647);const M=j.F4`
  0% { background-color: rgba(240, 247, 255, 0); }
  30% { background-color: rgba(240, 247, 255, 1); }
  70% { background-color: rgba(240, 247, 255, 1); }
  100% { background-color: rgba(240, 247, 255, 0); }
`,k=(0,i.ZP)(l.Z)`
  border-radius: 0.4rem;

  &.animated {
    animation: ${M} 0.5s ease-in-out infinite;
  }
`,O=(0,v.xh)()((({text:e,variant:r,id:n,sx:i,viewModel:o,children:a})=>{const d=(0,s.useRef)();return(0,s.useLayoutEffect)((()=>{o.addHeader(n,d.current);const e=new IntersectionObserver((e=>{o.toggleHeaderVisibility(n,e[0].intersectionRatio>0)}),{rootMargin:"-64px 0px 0px 0px"}),r=d.current;return e.observe(r),()=>e.unobserve(r)}),[n,o]),(0,t.jsx)(l.Z,Object.assign({sx:Object.assign({pt:1},i)},{children:(0,t.jsx)(k,Object.assign({sx:{padding:"4px 8px",ml:-1},ref:d},{children:(0,t.jsx)(V.Z,Object.assign({component:r,variant:r},{children:null!=e?e:a}))}))}))}));var S=n(5305),C=n(4384);const E=(0,v.xh)()((({text:e,id:r,viewModel:n})=>(0,t.jsx)(S.Z,Object.assign({color:n.firstVisibleHeader===r?"primary":"inherit",style:{backgroundColor:n.firstVisibleHeader===r?"#f0f7ff":void 0,fontWeight:n.firstVisibleHeader===r?"bold":void 0},sx:{transitionProperty:"font-weight, background-color",justifyContent:"flex-start",fontSize:{sm:13,md:14},textTransform:"none",textAlign:"initial",width:"100%"},onClick:()=>n.scrollToHeading(r)},{children:e})))),P=({text:e,id:r,children:n})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E,{text:e,id:r}),n&&(0,t.jsx)(l.Z,Object.assign({sx:{pl:2.5}},{children:n}))]}),R=({children:e})=>(0,t.jsxs)(l.Z,Object.assign({sx:{borderRight:"1px solid rgba(0, 0, 0, 0.12)",display:{xs:"none",sm:"block"},width:{sm:200,md:250},backgroundColor:"#fff",boxSizing:"border-box",maxHeight:"100vh",position:"sticky",flexShrink:0,top:0,mt:-8}},{children:[(0,t.jsx)(C.Z,{}),(0,t.jsx)(l.Z,Object.assign({sx:{p:1}},{children:e}))]}));var q=n(3462),F=n(8046),T=n(3935);const K=()=>{const e=(0,s.useMemo)((()=>document.querySelector("#root")),[]),[r,n]=(0,s.useState)(!1),i=(0,s.useRef)();(0,s.useEffect)((()=>{const e=new IntersectionObserver((([e])=>{n(0===e.intersectionRatio)})),r=i.current;return e.observe(r),()=>e.unobserve(r)}),[]);const o=(0,T.createPortal)((0,t.jsx)(q.Z,Object.assign({title:r?"Scroll to top":""},{children:(0,t.jsx)(c.Z,Object.assign({onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{pointerEvents:r?void 0:"none"},sx:{transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",transform:"rotate(-90deg)",backgroundColor:"#c2e0ff",opacity:r?1:0,position:"fixed",bottom:20,right:20,"&:hover":{backgroundColor:"#99ccf3"}}},{children:(0,t.jsx)(F.Z,{})}))})),e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:i}),o]})}},8764:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var i=n(5893),o=n(7294),t=n(8720),s=n(1647),a=n(1394),d=n(3182),l=n(5359);const c=({example:e,title:r,id:n,children:l,sx:c})=>{const[h,p]=(0,o.useState)(),[m,w]=(0,o.useState)(!1),[u,v]=(0,o.useState)(0),[f,b]=(0,o.useState)(!0),x=(0,o.useRef)();(0,o.useLayoutEffect)((()=>{p(x.current.scrollHeight),b(!1)}),[]);return(0,i.jsxs)(t.Z,Object.assign({sx:c},{children:[(0,i.jsx)(d.Dx,Object.assign({variant:"h5",id:n,sx:{mt:1}},{children:r})),l&&(0,i.jsx)(s.Z,Object.assign({component:"p",sx:{mt:2}},{children:l})),(0,i.jsx)(t.Z,Object.assign({sx:{mt:2}},{children:(0,i.jsxs)(a.Z,Object.assign({sx:{cursor:"pointer"},onClick:()=>{m?(v(0),w(!1)):(v(h),w(!0),b(!0))}},{children:[m?"Hide":"Show"," example"]}))})),(0,i.jsx)(t.Z,Object.assign({style:{transitionDuration:.8*h+"ms",maxHeight:u},sx:{transitionProperty:"max-height",overflow:"hidden",pt:2},onTransitionEnd:()=>!m&&b(!1),ref:x},{children:f&&(0,i.jsx)(d.oP,{code:e,style:{margin:0}})}))]}))};const h=()=>(0,i.jsxs)(t.Z,Object.assign({sx:{mt:3}},{children:[(0,i.jsx)(d.Dx,{variant:"h4",text:"View and ChildView",id:l.q.basic.view.main}),(0,i.jsxs)(s.Z,Object.assign({component:"p",sx:{mt:2,mb:4}},{children:["The interfaces of ",(0,i.jsx)(d.EK,{children:"view"})," and ",(0,i.jsx)(d.EK,{children:"childView"})," are pretty much the same. The only difference - the way the view model is typed."]})),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Using ",(0,i.jsx)(d.EK,{children:"childView"})]}),id:l.q.basic.view.childView,example:"import React from 'react';\r\nimport { view, childView } from '@yoskutik/react-vvm';\r\nimport { SomeViewModel } from './path-to-view-model';\r\n\r\nexport const ChildView = childView<SomeViewModel>()(({ viewModel }) => <div />);\r\n\r\n// ChildView has a view model of View1 or View2, so it must be somewhere inside them\r\nexport const View1 = view(SomeViewModel)(({ viewModel }) => (\r\n  <ChildView />\r\n));\r\n\r\n// It doesn't need to be the direct child\r\nexport const View2 = view(SomeViewModel)(({ viewModel }) => (\r\n  <div>\r\n    <ChildView />\r\n  </div>\r\n));\r\n"},{children:["The component which was created with ",(0,i.jsx)(d.EK,{children:"childView"})," must be used somewhere inside a view of the same view model."]})),(0,i.jsxs)(c,Object.assign({title:"Typing props",id:l.q.basic.view.typings,example:"import React, { FC } from 'react';\r\nimport { view, childView } from '@yoskutik/react-vvm';\r\nimport { SomeViewModel } from './path-to-view-model';\r\n\r\n// View1 and ChildView1 don't have any props\r\nexport const View1 = view(SomeViewModel)(({ viewModel }) => <div />);\r\nexport const ChildView1 = childView<SomeViewModel>()(({ viewModel }) => <div />);\r\n\r\n// The lines below will not be compiled\r\n// <View1 viewModel={...} />\r\n// <ChildView1 viewModel={...} />\r\n\r\nexport type Props = {\r\n  prop1: number; // A required prop\r\n  prop2?: string; // An optional prop\r\n}\r\n\r\nexport const View2: FC<Props> = view(SomeViewModel)(({ viewModel, prop1, prop2 }) => (\r\n  <div />\r\n));\r\n\r\nexport const ChildView2: FC<Props> = childView<SomeViewModel>()(({ viewModel, prop1, prop2 }) => (\r\n  <div />\r\n));\r\n\r\n// And now you can pass the props\r\n// <View2 prop1={2} prop2=\"prop2\" />\r\n// <ChildView2 prop1={2} prop2=\"prop2\" />\r\n"},{children:["By default, ",(0,i.jsx)(d.EK,{children:"view"})," and ",(0,i.jsx)(d.EK,{children:"childView"})," returns an ",(0,i.jsx)(d.EK,{children:"FC"})," component with no props. But you can type it using ",(0,i.jsx)(d.EK,{children:"FC"})," type."]})),(0,i.jsxs)(c,Object.assign({title:"Setting options",id:l.q.basic.view.options,example:"import React, { FC } from 'react';\r\nimport { view, childView } from '@yoskutik/react-vvm';\r\nimport { SomeViewModel } from './path-to-view-model';\r\n\r\n// View1 and ChildView1 are observers and they are memoized\r\nexport const View1 = view(SomeViewModel)(({ viewModel }) => <div />);\r\nexport const ChildView1 = childView<SomeViewModel>()(({ viewModel }) => <div />);\r\n\r\n// View2 and ChildView2 are not observers now, but they still memoized with default behaviour\r\nexport const View2 = view(SomeViewModel)(({ viewModel }) => (\r\n  <div />\r\n), { observer: false });\r\nexport const ChildView2 = childView<SomeViewModel>()(({ viewModel }) => (\r\n  <div />\r\n), { observer: false });\r\n\r\n\r\ntype Props = {\r\n  prop1: number;\r\n}\r\n\r\nconst propsAreEqual = (prevProps: Props, nextProps: Props) => {\r\n  // logic here\r\n};\r\n\r\n// And this is how you can change propsAreEqual function for the memo\r\nexport const View3: FC<Props> = view(SomeViewModel)(({ viewModel }) => (\r\n  <div />\r\n), { propsAreEqual });\r\nexport const ChildView3: FC<Props> = childView<SomeViewModel>()(({ viewModel }) => (\r\n  <div />\r\n), { propsAreEqual });\r\n"},{children:["By default, ",(0,i.jsx)(d.EK,{children:"view"})," and ",(0,i.jsx)(d.EK,{children:"childView"})," create a memoized observer component. You can make it non-observer or pass ",(0,i.jsx)(d.EK,{children:"propsAreEqual"})," function to the ",(0,i.jsx)(d.EK,{children:"memo"})," HOC."]})),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Using ",(0,i.jsx)(d.EK,{children:"forwardRef"})]}),id:l.q.basic.view.forwardRef,example:"import React, { forwardRef } from 'react';\r\nimport { view, childView, ViewWithRef } from '@yoskutik/react-vvm';\r\nimport { SomeViewModel } from './path-to-view-model';\r\n\r\n// Only ref with no props\r\nexport const View1: ViewWithRef<HTMLDivElement> = view(SomeViewModel)(\r\n  forwardRef(({ viewModel }, ref) => (\r\n    <div ref={ref} />\r\n  ))\r\n);\r\nexport const ChildView1: ViewWithRef<HTMLDivElement> = childView<SomeViewModel>()(\r\n  forwardRef(({ viewModel }, ref) => (\r\n    <div ref={ref} />\r\n  ))\r\n);\r\n\r\n\r\ntype Props = {\r\n  prop1: number;\r\n};\r\n\r\n// With props\r\nexport const View2: ViewWithRef<HTMLDivElement, Props> = view(SomeViewModel)(\r\n  forwardRef(({ viewModel, prop1 }, ref) => (\r\n    <div ref={ref} />\r\n  ))\r\n);\r\nexport const ChildView2: ViewWithRef<HTMLDivElement, Props> = childView<SomeViewModel>()(\r\n  forwardRef(({ viewModel, prop1 }, ref) => (\r\n    <div ref={ref} />\r\n  ))\r\n);\r\n"},{children:["If you want to use ",(0,i.jsx)(d.EK,{children:"forwardRef"})," HOC, you should switch from using ",(0,i.jsx)(d.EK,{children:"FC"})," type to "," ",(0,i.jsx)(d.EK,{children:"ViewWithRef"})," type from the library."]}))]}));const p=()=>(0,i.jsxs)(t.Z,Object.assign({sx:{mt:3}},{children:[(0,i.jsx)(d.Dx,{variant:"h4",text:"Configuration",id:l.q.basic.configuration.main}),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Configuring ",(0,i.jsx)(d.EK,{children:"vmFactory"})]}),id:l.q.basic.configuration.vmFactory,example:"import { configure } from '@yoskutik/react-vvm';\r\n\r\nconfigure({\r\n  vmFactory: VM => {\r\n    // By default, vmFactory returns new VM();\r\n\r\n    const viewModel = new VM();\r\n\r\n    // But you can do anything here\r\n    // Add debug information\r\n    console.log('view model created:', viewModel);\r\n\r\n    // Or process your view model somehow\r\n    (viewModel as any).__some_special_field = 'some special value';\r\n\r\n    // vmFactory must return an instance of a ViewModel\r\n    return viewModel;\r\n  },\r\n})\r\n"},{children:[(0,i.jsx)(d.EK,{children:"vmFactory"})," tells to views how they should create an instance of a view model. You can configure this function to add debug information or a middleware."]})),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Configuring ",(0,i.jsx)(d.EK,{children:"Wrapper"})]}),id:l.q.basic.configuration.wrapper,example:"import { configure } from '@yoskutik/react-vvm';\r\nimport { Component, FC, ReactElement } from 'react';\r\n\r\n// The Wrapper can be declared both with functional style or as class\r\n// It must have children as a prop, at it should return a children. Otherwise, your views will not be shown.\r\nconst FunctionalWrapper: FC<{ children: ReactElement }> = ({ children }) => {\r\n  // You can add a debug info\r\n  console.log('view is rendered');\r\n\r\n  // You should return children\r\n  return children;\r\n};\r\n\r\n// You can also use class components\r\nclass ClassWrapper extends Component<{ children: ReactElement }> {\r\n  render() {\r\n    // You can also return processed children\r\n    return (\r\n      <div>\r\n        <span>Wrapper content</span>\r\n        {this.props.children}\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nconfigure({\r\n  Wrapper: FunctionalWrapper,\r\n});\r\n\r\nconfigure({\r\n  Wrapper: ClassWrapper,\r\n});\r\n"},{children:["The ",(0,i.jsx)(d.EK,{children:"Wrapper"})," is used to wrap all the views and childViews. By default, the ",(0,i.jsx)(d.EK,{children:"Wrapper"})," is equal to ",(0,i.jsx)(d.EK,{children:"React.Fragment"})," so it doesn't really affect on your application. But you can set any component as wrapper to add debug information or a middleware."]}))]}));const m=()=>(0,i.jsxs)(t.Z,Object.assign({sx:{mt:3}},{children:[(0,i.jsx)(d.Dx,{variant:"h4",text:"ViewModel",id:l.q.basic.viewModel.main}),(0,i.jsx)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Typing ",(0,i.jsx)(d.EK,{children:"parent"})," and ",(0,i.jsx)(d.EK,{children:"viewProps"})]}),id:l.q.basic.viewModel.typings,example:"import { ViewModel } from '@yoskutik/react-vvm';\r\nimport type { SomeViewProps } from './path-to-view-props';\r\n\r\n// No typings. parent is unknown, viewProps is unknown\r\nexport class SomeViewModel1 extends ViewModel {}\r\n\r\n// Parent is ParentViewModel, viewProps is unknown\r\nexport class SomeViewModel2 extends ViewModel<ParentViewModel> {}\r\n\r\n// Parent is ParentViewModel, viewProps is SomeViewProps\r\nexport class SomeViewModel3 extends ViewModel<ParentViewModel, SomeViewProps> {}\r\n\r\n// Parent is unknown, viewProps is SomeViewProps\r\nexport class SomeViewModel4 extends ViewModel<unknown, SomeViewProps> {}\r\n"},{children:"View models have link to their parents and also have link to view's props. And you can type both of these fields."})),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Observing ",(0,i.jsx)(d.EK,{children:"viewProps"})]}),id:l.q.basic.viewModel.viewProps,example:"import { computed, makeObservable } from 'mobx';\r\nimport { view, childView, ViewModel } from '@yoskutik/react-vvm';\r\nimport { FC } from 'react';\r\n\r\ntype SomeViewProps = {\r\n  prop1: number;\r\n  prop2: string;\r\n}\r\n\r\nexport class SomeViewModel extends ViewModel<unknown, SomeViewProps> {\r\n  @computed get prop1() {\r\n    return this.viewProps.prop1;\r\n  }\r\n\r\n  constructor() {\r\n    super();\r\n    makeObservable(this);\r\n  }\r\n\r\n  // It's better to add reactions in the onViewMounted hook, because parent and viewProps are undefined in the\r\n  // constructor\r\n  protected onViewMounted(): void | Promise<void> {\r\n    // This autorun will be called every time the view gets any new prop, even if the prop1 didn't change\r\n    this.autorun(() => {\r\n      console.log(this.viewProps.prop1);\r\n    });\r\n\r\n    // This reaction will be called only if the prop has changed\r\n    this.reaction(() => this.viewProps.prop1, () => {\r\n      console.log(this.viewProps.prop1);\r\n    });\r\n\r\n    // This autorun will be called only if the prop has changed\r\n    this.autorun(() => {\r\n      console.log(this.prop1);\r\n    });\r\n  }\r\n}\r\n\r\nconst SomeChildView = childView<SomeViewModel>()(({ viewModel }) => (\r\n  <div>\r\n    {/* If you use the line below, SomeChildView will be re-rendered every time SomeView get any new prop */}\r\n    {viewModel.viewProps.prop1}\r\n\r\n    {/* If you use the line below, SomeChildView will be re-rendered only if prop1 was changed */}\r\n    {viewModel.prop1}\r\n  </div>\r\n));\r\n\r\nconst SomeView: FC<SomeViewProps> = view(SomeViewModel)(() => (\r\n  <SomeChildView />\r\n));\r\n"},{children:["The ",(0,i.jsx)(d.EK,{children:"viewProps"})," field updates every time the view is rendered with new props. The view is memoized, so the amount of updates is minimized. But you need to keep in mind a few rules when you want to observe "," ",(0,i.jsx)(d.EK,{children:"viewProps"}),". If you are using ",(0,i.jsx)(d.EK,{children:"viewProps"})," inside an ",(0,i.jsx)(d.EK,{children:"autorun"})," or an observer component (",(0,i.jsx)(d.EK,{children:"observer"}),", ",(0,i.jsx)(d.EK,{children:"view"})," or ",(0,i.jsx)(d.EK,{children:"childView"}),"), when the reaction will be calling every time the view is rendered with new props."]})),(0,i.jsxs)(c,Object.assign({title:"View lifecycle hooks",id:l.q.basic.viewModel.hooks,example:"import { ViewModel } from '@yoskutik/react-vvm';\r\nimport type { SomeViewProps } from './path-to-view-props';\r\n\r\n// Hooks can be sync and async. Also, they can be decorated with @action or other decorators\r\nexport class SomeViewModel extends ViewModel<unknown, SomeViewProps> {\r\n  // This function is called after the view was mounted in the useLayoutEffect hook\r\n  protected onViewMounted(): void | Promise<void> {\r\n    console.log('View has been mounted');\r\n  }\r\n\r\n  // This function is called after the view was updated in the useLayoutEffect hook. It's not called at the first\r\n  // render\r\n  protected onViewUpdated(newProps): void | Promise<void> {\r\n    // newProps - are new props that were given to view to render. If you want to use previous props, use this.viewProps\r\n    console.log(`View has been updating. The new props are ${newProps}, last props are ${this.viewProps}`);\r\n  }\r\n\r\n  // This function is called after the view was unmounted in the useLayoutEffect hook.\r\n  protected onViewUnmounted(): void | Promise<void> {\r\n    console.log('View has been unmounted');\r\n  }\r\n}\r\n"},{children:["If you want to use ",(0,i.jsx)(d.EK,{children:"forwardRef"})," HOC, you should switch from using ",(0,i.jsx)(d.EK,{children:"FC"})," type to "," ",(0,i.jsx)(d.EK,{children:"ViewWithRef"})," type from the library."]})),(0,i.jsxs)(c,Object.assign({title:"Creating reactions",id:l.q.basic.viewModel.reactions,example:"import { intercept, makeObservable, observable, observe, when } from 'mobx';\r\nimport { ViewModel } from '@yoskutik/react-vvm';\r\n\r\nexport class SomeViewModel extends ViewModel {\r\n  @observable field = 0;\r\n\r\n  constructor() {\r\n    super();\r\n    makeObservable(this);\r\n\r\n    // If you want to create a reaction, please, use this.reaction instead of reaction from the mobx package\r\n    this.reaction(() => this.field, value => this.doSomething(value));\r\n\r\n    // If you want to create an autorun, please, use this.reaction instead of reaction from the mobx package\r\n    this.autorun(() => {\r\n      this.doSomething(this.field);\r\n    });\r\n\r\n    // In case you want to create other type of observation, such as observe, intercept or when, you can use\r\n    // this.addDisposer\r\n\r\n    // observe\r\n    this.addDisposer(\r\n      observe(this, 'field', ({ newValue }) => this.doSomething(newValue))\r\n    );\r\n\r\n    // intercept\r\n    this.addDisposer(\r\n      intercept(this, 'field', change => {\r\n        this.doSomething(change.newValue);\r\n        return change;\r\n      }),\r\n    );\r\n\r\n    // when\r\n    const w = when(() => this.field === 1);\r\n    w.then(() => this.doSomething(this.field));\r\n    this.addDisposer(() => w.cancel());\r\n  }\r\n\r\n  doSomething = (field: number) => {};\r\n}\r\n"},{children:["To observe anything in a view model, you ",(0,i.jsx)("i",{children:"should"})," use ViewModel's ",(0,i.jsx)(d.EK,{children:"reaction"}),", "," ",(0,i.jsx)(d.EK,{children:"autorun"})," and ",(0,i.jsx)(d.EK,{children:"addDisposer"})," methods. These methods are added to automatically dispose reactions, when the view becomes unmounted. You can also not to use these methods, but in these case there can be a probability of a memory leak formation."]}))]}));const w=()=>(0,i.jsxs)(t.Z,Object.assign({sx:{mt:7}},{children:[(0,i.jsx)(d.Dx,{variant:"h3",text:"Useful examples",id:l.q.useful.main}),(0,i.jsx)(s.Z,Object.assign({component:"p",sx:{mt:2}},{children:"This section contains some tricks that can simplify you development process."})),(0,i.jsxs)(c,Object.assign({title:(0,i.jsxs)(i.Fragment,{children:["Automatic ",(0,i.jsx)(d.EK,{children:"makeObservable"})]}),id:l.q.useful.makeObservable,example:"import { makeObservable, observable } from 'mobx';\r\nimport { configure, ViewModel } from '@yoskutik/react-vvm';\r\n\r\nconfigure({\r\n  vmFactory: VM => {\r\n    const viewModel = new VM();\r\n    makeObservable(viewModel);\r\n    return viewModel;\r\n  },\r\n});\r\n\r\nclass SomeViewModel extends ViewModel {\r\n  @observable field1 = 0;\r\n\r\n  protected onViewMounted(): void | Promise<void> {\r\n    // If you make view models observable in vmFactory, and you want to create reactions,\r\n    // you should do it in the hook\r\n    this.reaction(() => this.field1, () => {\r\n      // do something\r\n    });\r\n  }\r\n}\r\n",sx:{mt:2}},{children:["If you sure that most case your view models will contain observable fields you can make calling "," ",(0,i.jsx)(d.EK,{children:"makeObservable"})," automatic, so you don't need to call it for each ViewModel separately. But be aware, if you use this code, you should create your reactions in the ",(0,i.jsx)(d.EK,{children:"onViewMounted"})," hook instead of constructor due to the fact that view model will not be observable in it."]})),(0,i.jsx)(c,Object.assign({title:"Enabling DI pattern",id:l.q.useful.di,example:"import { computed, makeObservable, observable } from 'mobx';\r\n// It's not necessary to use tsyringe. You can use any library actually\r\nimport { injectable, container, singleton } from 'tsyringe';\r\nimport { configure, ViewModel } from '@yoskutik/react-vvm';\r\n\r\nconfigure({\r\n  vmFactory: VM => container.resolve(VM),\r\n});\r\n\r\n// This is an example of common store for the whole application\r\n@singleton()\r\nclass SomeOuterClass {\r\n  @observable field1 = 0;\r\n\r\n  @observable field2 = 'field2';\r\n\r\n  constructor() {\r\n    makeObservable(this);\r\n  }\r\n\r\n  doSomething = () => {\r\n    // do something\r\n  };\r\n}\r\n\r\n// It can also be any singleton or transient class, containing observable fields is not necessary\r\n@injectable()\r\nclass SomeOuterClass2 {\r\n  @observable field1 = 0;\r\n\r\n  @observable field2 = 'field2';\r\n\r\n  constructor(private someOuterClass: SomeOuterClass) {\r\n    makeObservable(this);\r\n  }\r\n\r\n  doSomething = () => {\r\n    // do something\r\n  };\r\n}\r\n\r\n@injectable()\r\nclass SomeViewModel extends ViewModel {\r\n  @computed get someGetter() {\r\n    return this.someOuterClass.field1;\r\n  }\r\n\r\n  // And now every ViewModel can access the class via constructor\r\n  constructor(private someOuterClass: SomeOuterClass, private someOuterClass2: SomeOuterClass2) {\r\n    super();\r\n  }\r\n\r\n  viewModelFunction = () => {\r\n    this.someOuterClass.doSomething();\r\n  }\r\n}\r\n\r\n// You can also get an instance of singleton class in the any place of your code\r\nconst instance = container.resolve(SomeOuterClass);\r\n"},{children:"I really like the DI pattern. And I highly recommend you to use this pattern if you application is big. This pattern can have a big impact on the ability to scale your application. With the DI you can create common MobX stores for whole application. Such Redux does, but with DI + MobX these stores can be logically separated, can contain methods and can be easily used at any part of your code, including both views and view models."})),(0,i.jsx)(c,Object.assign({title:"Using Error Boundary",id:l.q.useful.errors,example:"import { Component, ReactElement } from 'react';\r\nimport { configure } from '@yoskutik/react-vvm';\r\n\r\nclass ErrorBoundary extends Component<{ children: ReactElement }, { hasError: boolean }> {\r\n  state = {\r\n    hasError: false,\r\n  };\r\n\r\n  static getDerivedStateFromError(err: Error) {\r\n    // I recommend you to log the error to avoid situations where you content is disappeared, and you don't know why\r\n    console.error(err);\r\n\r\n    return {\r\n      hasError: true,\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return !this.state.hasError && this.props.children;\r\n  };\r\n}\r\n\r\nconfigure({\r\n  // That's it. And now if one of your components throws an error it will just disappear. At it will be the only\r\n  // component that disappeared.\r\n  Wrapper: ErrorBoundary,\r\n});\r\n"},{children:"React applications have a few problems. One of them is error handling. If some of your component throws an error and you don't handle it, all the virtual DOM tree will die. FaceBook recommends to use ErrorBoundary to handle such errors. But it can be inconvenient to use it - you should always think where to use it, and there can be a lot of repeating code of using the same error boundary. But with this package you can add error boundaries to all of your views and childViews, so you don't actually have to think about using it at all."}))]}));var u=n(9655);const v=(0,n(3936).xh)()((({viewModel:e})=>{const r=(0,u.lr)()[0].get("heading");return(0,o.useEffect)((()=>{r&&e.scrollToHeading(r)}),[r,e]),null})),f=(0,o.memo)((()=>(0,i.jsxs)(d.gm,{children:[(0,i.jsxs)(d.y4,Object.assign({text:"Basic examples",id:l.q.basic.main},{children:[(0,i.jsxs)(d.y4,Object.assign({text:"View and ChildView",id:l.q.basic.view.main},{children:[(0,i.jsx)(d.y4,{text:"Using ChildView",id:l.q.basic.view.childView}),(0,i.jsx)(d.y4,{text:"Typing props",id:l.q.basic.view.typings}),(0,i.jsx)(d.y4,{text:"Setting options",id:l.q.basic.view.options}),(0,i.jsx)(d.y4,{text:"Using with forwardRef",id:l.q.basic.view.forwardRef})]})),(0,i.jsxs)(d.y4,Object.assign({text:"ViewModel",id:l.q.basic.viewModel.main},{children:[(0,i.jsx)(d.y4,{text:"Typing",id:l.q.basic.viewModel.typings}),(0,i.jsx)(d.y4,{text:"Observing viewProps",id:l.q.basic.viewModel.viewProps}),(0,i.jsx)(d.y4,{text:"View lifecycle hooks",id:l.q.basic.viewModel.hooks}),(0,i.jsx)(d.y4,{text:"Creating reactions",id:l.q.basic.viewModel.reactions})]})),(0,i.jsxs)(d.y4,Object.assign({text:"Configuration",id:l.q.basic.configuration.main},{children:[(0,i.jsx)(d.y4,{text:"Configuring vmFactory",id:l.q.basic.configuration.vmFactory}),(0,i.jsx)(d.y4,{text:"Configuring Wrapper",id:l.q.basic.configuration.wrapper})]}))]})),(0,i.jsxs)(d.y4,Object.assign({text:"Useful examples",id:l.q.useful.main},{children:[(0,i.jsx)(d.y4,{text:"Automatic makeObservable",id:l.q.useful.makeObservable}),(0,i.jsx)(d.y4,{text:"Enabling DI pattern",id:l.q.useful.di}),(0,i.jsx)(d.y4,{text:"Using Error Boundary",id:l.q.useful.errors})]})),(0,i.jsx)(d.y4,{text:"Complex examples",id:l.q.complex})]})));var b=(0,o.memo)((()=>(0,i.jsxs)(d.LG,{children:[(0,i.jsx)(d.QX,{}),(0,i.jsxs)(t.Z,Object.assign({sx:{display:"flex",width:"100%"}},{children:[(0,i.jsx)(f,{}),(0,i.jsx)(t.Z,Object.assign({sx:{justifyContent:"center",padding:"2rem 3rem",display:"flex",width:"100%",overflow:"hidden"}},{children:(0,i.jsxs)(t.Z,Object.assign({sx:{maxWidth:"100%",width:"1200px"}},{children:[(0,i.jsx)(d.Dx,{variant:"h3",text:"Basic examples",id:l.q.basic.main}),(0,i.jsx)(s.Z,Object.assign({component:"p",sx:{mt:2}},{children:"This section contains examples of basic usage of entities with all possible typings and variants."})),(0,i.jsx)(h,{}),(0,i.jsx)(m,{}),(0,i.jsx)(p,{}),(0,i.jsx)(w,{}),(0,i.jsxs)(t.Z,Object.assign({sx:{mt:7}},{children:[(0,i.jsx)(d.Dx,{variant:"h3",text:"Complex examples",id:l.q.complex}),(0,i.jsxs)(s.Z,Object.assign({component:"p",sx:{mt:2}},{children:["And here's some complex examples of whole React applications with React VVM. You can find them here"," ",(0,i.jsx)(a.Z,Object.assign({href:"https://github.con/Yoskutik/react-vvm-preview/examples",target:"_blank",rel:"noreferer"},{children:"Github"})),"."]}))]})),(0,i.jsx)("div",{style:{height:"2rem"}})]}))}))]})),(0,i.jsx)(v,{})]})))},5359:function(e,r,n){n.d(r,{q:function(){return i}});const i={basic:{main:"basic",view:{main:"basic.view",childView:"basic.view.childView",typings:"basic.view.typings",options:"basic.view.options",forwardRef:"basic.view.forwardRef"},viewModel:{main:"basic.viewModel",typings:"basic.viewModel.typings",viewProps:"basic.viewModel.viewProps",hooks:"basic.viewModel.hooks",reactions:"basic.viewModel.reactions"},configuration:{main:"basic.configuration",vmFactory:"basic.configuration.vmFactory",wrapper:"basic.configuration.wrapper"}},useful:{main:"useful",makeObservable:"useful.makeObservable",di:"useful.di",errors:"useful.errors"},complex:"complex"}}}]);
//# sourceMappingURL=7f516b6b0851f0058d4b.chunk.js.map