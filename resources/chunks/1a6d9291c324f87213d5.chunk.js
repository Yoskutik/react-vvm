"use strict";(self.webpackChunk_yoskutik_react_vvm_preview=self.webpackChunk_yoskutik_react_vvm_preview||[]).push([[145],{3182:function(e,t,n){n.d(t,{gm:function(){return O},y4:function(){return y},EK:function(){return Z},oP:function(){return T},LG:function(){return c},QX:function(){return E},Dx:function(){return b}});var i=n(3936),s=n(8949),o=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends i.jz{constructor(){super(...arguments),this.idToHeading={},this.headersOrdered=[],this.visibleHeaders=new Set,this.addHeader=(e,t)=>{this.headersOrdered.push(e),this.idToHeading[e]=t},this.toggleHeaderVisibility=(e,t)=>{this.visibleHeaders[t?"add":"delete"](e)},this.scrollToHeading=e=>{this.animatedInfo&&(clearTimeout(this.animatedInfo.timeout),this.animatedInfo.heading.classList.remove("animated"));const t=this.idToHeading[e],{top:n}=t.parentElement.getBoundingClientRect();window.scrollBy({behavior:"smooth",top:n-64}),t.classList.add("animated"),this.animatedInfo={heading:t,timeout:setTimeout((()=>{t.classList.remove("animated"),this.animatedInfo=void 0}),2500)}}}get firstVisibleHeader(){return this.headersOrdered.find((e=>this.visibleHeaders.has(e)))}}o([s.LO.shallow,r("design:type",Array)],a.prototype,"headersOrdered",void 0),o([s.LO.shallow,r("design:type",Object)],a.prototype,"visibleHeaders",void 0),o([s.Fl,r("design:type",String),r("design:paramtypes",[])],a.prototype,"firstVisibleHeader",null),o([s.aD,r("design:type",Object)],a.prototype,"addHeader",void 0),o([s.aD,r("design:type",Object)],a.prototype,"toggleHeaderVisibility",void 0);const c=(0,i.ei)(a)((({children:e})=>e),{observer:!1});var d=n(5893),l=n(7294),h=n(917),u=n(4174),g=n(8720),x=n(1647);const p=h.F4`
  0% { background-color: rgba(240, 247, 255, 0); }
  30% { background-color: rgba(240, 247, 255, 1); }
  70% { background-color: rgba(240, 247, 255, 1); }
  100% { background-color: rgba(240, 247, 255, 0); }
`,m=(0,u.ZP)(g.Z)`
  border-radius: 0.4rem;

  &.animated {
    animation: ${p} 0.5s ease-in-out infinite;
  }
`,b=(0,i.xh)()((({text:e,variant:t,id:n,sx:i,viewModel:s,children:o})=>{const r=(0,l.useRef)();return(0,l.useLayoutEffect)((()=>{s.addHeader(n,r.current);const e=new IntersectionObserver((e=>{s.toggleHeaderVisibility(n,e[0].intersectionRatio>0)}),{rootMargin:"-64px 0px 0px 0px"}),t=r.current;return e.observe(t),()=>e.unobserve(t)}),[n,s]),(0,d.jsx)(g.Z,Object.assign({sx:Object.assign({pt:1},i)},{children:(0,d.jsx)(m,Object.assign({sx:{padding:"4px 8px",ml:-1},ref:r},{children:(0,d.jsx)(x.Z,Object.assign({component:t,variant:t},{children:null!=e?e:o}))}))}))}));var f=n(5305),j=n(4384);const v=(0,i.xh)()((({text:e,id:t,viewModel:n})=>(0,d.jsx)(f.Z,Object.assign({color:n.firstVisibleHeader===t?"primary":"inherit",style:{backgroundColor:n.firstVisibleHeader===t?"#f0f7ff":void 0,fontWeight:n.firstVisibleHeader===t?"bold":void 0},sx:{transitionProperty:"font-weight, background-color",justifyContent:"flex-start",fontSize:{sm:13,md:14},textTransform:"none",textAlign:"initial",width:"100%"},onClick:()=>n.scrollToHeading(t)},{children:e})))),y=({text:e,id:t,children:n})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{text:e,id:t}),n&&(0,d.jsx)(g.Z,Object.assign({sx:{pl:2.5}},{children:n}))]}),O=({children:e})=>(0,d.jsxs)(g.Z,Object.assign({sx:{borderRight:"1px solid rgba(0, 0, 0, 0.12)",display:{xs:"none",sm:"block"},width:{sm:200,md:250},backgroundColor:"#fff",boxSizing:"border-box",maxHeight:"100vh",position:"sticky",flexShrink:0,top:0,mt:-8}},{children:[(0,d.jsx)(j.Z,{}),(0,d.jsx)(g.Z,Object.assign({sx:{p:1}},{children:e}))]})),Z=(0,u.ZP)("code")`
  border: 0.1rem solid rgba(0,0,0,.1);
  background-color: #f6f7f8;
  border-radius: 0.5rem;
  padding: 0 0.3rem;
`;var k=n(7469),w=n(703),H=n(130),C=n(9633),R=n(147),P=n(4424);const S=(0,u.ZP)(g.Z)`
  position: relative;
  
  &:hover .highlighter-copy-button {
    opacity: 1;
  }
`,T=({code:e,sx:t,style:n,forceShowCopy:i,language:s="tsx"})=>{const[o,r]=(0,l.useState)(!1);return(0,d.jsxs)(S,Object.assign({sx:t},{children:[(0,d.jsx)(k.Z,Object.assign({customStyle:Object.assign({borderRadius:"0.4rem",boxShadow:"0 1px 4px 0 rgba(0,0,0,0.1)"},n),language:s,style:w.Z},{children:e})),(i||e.includes("\n"))&&(0,d.jsx)(H.Z,Object.assign({sx:{position:"absolute",top:7,right:7,opacity:0,transitionProperty:"opacity"},className:"highlighter-copy-button",onClick:()=>{navigator.clipboard.writeText(e).then((()=>r(!0)))}},{children:(0,d.jsx)(P.Z,{sx:{fill:"#e0e0e0"}})})),(0,d.jsx)(C.Z,Object.assign({open:o,autoHideDuration:2e3,onClose:()=>r(!1)},{children:(0,d.jsx)(R.Z,Object.assign({onClose:()=>r(!1),severity:"info",sx:{width:"100%"}},{children:"The code was copied!"}))}))]}))};var V=n(3462),I=n(8046),_=n(3935);const E=()=>{const e=(0,l.useMemo)((()=>document.querySelector("#root")),[]),[t,n]=(0,l.useState)(!1),i=(0,l.useRef)();(0,l.useEffect)((()=>{const e=new IntersectionObserver((([e])=>{n(0===e.intersectionRatio)})),t=i.current;return e.observe(t),()=>e.unobserve(t)}),[]);const s=(0,_.createPortal)((0,d.jsx)(V.Z,Object.assign({title:t?"Scroll to top":""},{children:(0,d.jsx)(H.Z,Object.assign({onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{pointerEvents:t?void 0:"none"},sx:{transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",transform:"rotate(-90deg)",backgroundColor:"#c2e0ff",opacity:t?1:0,position:"fixed",bottom:20,right:20,"&:hover":{backgroundColor:"#99ccf3"}}},{children:(0,d.jsx)(I.Z,{})}))})),e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:i}),s]})}},1145:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),s=n(7294),o=n(8720),r=n(1647),a=n(1394),c=n(3182);var d=(0,s.memo)((()=>(0,i.jsx)(o.Z,Object.assign({sx:{display:"flex",justifyContent:"center"}},{children:(0,i.jsxs)(o.Z,Object.assign({sx:{width:"1200px",maxWidth:"100%",p:4}},{children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,Object.assign({component:"h4",variant:"h4"},{children:"Installation"})),(0,i.jsx)(r.Z,Object.assign({component:"p",sx:{mt:2}},{children:"Run one of the following commands to add React VVM and all needed libraries:"})),(0,i.jsx)(r.Z,Object.assign({component:"h5",variant:"h5",sx:{mt:4}},{children:"npm"})),(0,i.jsx)(c.oP,{code:"npm install @yoskutik/react-vvm mobx mobx-react reflect-metadata",language:"bash",sx:{mt:2},forceShowCopy:!0}),(0,i.jsx)(r.Z,Object.assign({component:"h5",variant:"h5",sx:{mt:2}},{children:"yarn"})),(0,i.jsx)(c.oP,{code:"yarn add @yoskutik/react-vvm mobx mobx-react reflect-metadata",language:"bash",sx:{mt:2},forceShowCopy:!0})]}),(0,i.jsxs)(o.Z,Object.assign({sx:{mt:8}},{children:[(0,i.jsx)(r.Z,Object.assign({component:"h4",variant:"h4"},{children:"Preparation"})),(0,i.jsxs)(r.Z,Object.assign({component:"p",sx:{mt:4}},{children:["You must import ",(0,i.jsx)(c.EK,{children:"reflect-metadata"})," in your main script file so that you can use the decorators. You can also configure this package, but this step is optional."]})),(0,i.jsx)(c.oP,{code:"import 'reflect-metadata';\nimport { configure } from '@yoskutik/react-vvm';\nimport { createRoot } from 'react-dom/client';\n\n// Optional step\nconfigure({\n  ...\n});\n\ncreateRoot(...).render(...);\n",sx:{mt:2}}),(0,i.jsxs)(r.Z,Object.assign({component:"p",sx:{mt:4}},{children:["You can use ",(0,i.jsx)(c.EK,{children:"mobx"})," with versions ",(0,i.jsx)("b",{children:"4, 5 or 6"}),". And it's recommended to use the 6",(0,i.jsx)("sup",{children:"th"})," one. In case you want to use versions 4 or 5 you should add the following code to your webpack configuration."]})),(0,i.jsx)(c.oP,{code:"module.exports = {\n  // ...\n  ignoreWarnings: [\n    {\n      module: /@yoskutik\\/react-vvm/,\n    },\n  ],\n  // ...\n};\n",sx:{mt:2}})]})),(0,i.jsxs)(o.Z,Object.assign({sx:{mt:8}},{children:[(0,i.jsx)(r.Z,Object.assign({component:"h4",variant:"h4"},{children:"Usage"})),(0,i.jsxs)(r.Z,Object.assign({component:"p",sx:{mt:2}},{children:["You can find examples of using this package in "," ",(0,i.jsx)(a.Z,Object.assign({href:"#/examples"},{children:"the examples section"})),"."]}))]}))]}))}))))}}]);
//# sourceMappingURL=1a6d9291c324f87213d5.chunk.js.map