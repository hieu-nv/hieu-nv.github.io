"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9953],{7942:(n,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>g});var o=e(959);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},c=Object.keys(n);for(o=0;o<c.length;o++)e=c[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)e=c[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var r=o.createContext({}),l=function(n){var t=o.useContext(r),e=t;return n&&(e="function"==typeof n?n(t):p(p({},t),n)),e},s=function(n){var t=l(n.components);return o.createElement(r.Provider,{value:t},n.children)},h="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(n,t){var e=n.components,a=n.mdxType,c=n.originalType,r=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),h=l(e),u=a,g=h["".concat(r,".").concat(u)]||h[u]||m[u]||c;return e?o.createElement(g,p(p({ref:t},s),{},{components:e})):o.createElement(g,p({ref:t},s))}));function g(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var c=e.length,p=new Array(c);p[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=n,i[h]="string"==typeof n?n:a,p[1]=i;for(var l=2;l<c;l++)p[l]=e[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},8199:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=e(2564),a=(e(959),e(7942));const c={slug:"2020/03/06/react-class-component-va-function-component-ban-chon-viet-theo-cach-nao",title:"Class Component v\xe0 Function Component, b\u1ea1n ch\u1ecdn vi\u1ebft theo c\xe1ch n\xe0o?",authors:"hieunv",tags:["react"]},p=void 0,i={permalink:"/blog/2020/03/06/react-class-component-va-function-component-ban-chon-viet-theo-cach-nao",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-03-06-react-class-component-va-function-component-ban-chon-viet-theo-cach-nao.md",source:"@site/blog/2020-03-06-react-class-component-va-function-component-ban-chon-viet-theo-cach-nao.md",title:"Class Component v\xe0 Function Component, b\u1ea1n ch\u1ecdn vi\u1ebft theo c\xe1ch n\xe0o?",description:"react",date:"2020-03-06T00:00:00.000Z",formattedDate:"March 6, 2020",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:4.19,hasTruncateMarker:!1,authors:[{name:"Hieu Nguyen",title:"Senior Software Engineer",url:"https://hieu-nv.github.io",imageURL:"https://github.com/hieu-nv.png",key:"hieunv"}],frontMatter:{slug:"2020/03/06/react-class-component-va-function-component-ban-chon-viet-theo-cach-nao",title:"Class Component v\xe0 Function Component, b\u1ea1n ch\u1ecdn vi\u1ebft theo c\xe1ch n\xe0o?",authors:"hieunv",tags:["react"]},prevItem:{title:"react-co-react-context-api-roi-ban-con-dung-redux-khong",permalink:"/blog/2020/03/09/react-co-react-context-api-roi-ban-con-dung-redux-khong"},nextItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},r={authorsImageUrls:[void 0]},l=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"Class Component",id:"class-component",level:3},{value:"Function Component",id:"function-component",level:3},{value:"Props",id:"props",level:2},{value:"Class Component",id:"class-component-1",level:3},{value:"Function Component",id:"function-component-1",level:3},{value:"State",id:"state",level:2},{value:"Class Component",id:"class-component-2",level:3},{value:"Function Component",id:"function-component-2",level:3},{value:"Component Lifecycle",id:"component-lifecycle",level:2}],s={toc:l},h="wrapper";function m(n){let{components:t,...e}=n;return(0,a.kt)(h,(0,o.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1581276879432-15e50529f34b",alt:"react"})),(0,a.kt)("p",null,"Trong th\u1ebf gi\u1edbi React th\xec ch\u1eafc h\u1eb3n ai c\u0169ng bi\u1ebft \u0111\u1ebfn Class Component v\xe0 Function Component. Tuy nhi\xean c\xf3 th\u1ec3 c\xf3 nh\u1eefng hi\u1ec3u nh\u1ea7m v\u1ec1 hai lo\u1ea1i component n\xe0y. Trong b\xe0i vi\u1ebft n\xe0y t\xf4i s\u1ebd th\u1eed so s\xe1nh hai c\xe1ch vi\u1ebft n\xe0y \u0111\u1ec3 gi\xfap b\u1ea1n c\xf3 th\u1ec3 l\u1ef1a ch\u1ecdn vi\u1ebft theo c\xe1ch n\xe0o. Ch\xfang ta c\xf9ng b\u1eaft \u0111\u1ea7u nh\xe9."),(0,a.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,a.kt)("p",null,"Kh\xe1c nhau \u0111\u1ea7u ti\xean gi\u1eefa ",(0,a.kt)("inlineCode",{parentName:"p"},"Class Component")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Component")," th\u1ec3 hi\u1ec7n ngay \u1edf c\xe1ch khai b\xe1o."),(0,a.kt)("h3",{id:"class-component"},"Class Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { Component } from "react";\n\nclass TestComponent extends Components {\n  // ph\u01b0\u01a1ng ph\xe1p n\xe0y b\u1eaft bu\u1ed9c ph\u1ea3i khai b\xe1o h\xe0m \u0111\u1ec3 k\u1ebft xu\u1ea5t m\xe3 HTML\n  render() {\n    return <div>TestComponent</div>;\n  }\n}\n')),(0,a.kt)("p",null,"C\xe1ch khai b\xe1o n\xe0y kh\xe1 quen thu\u1ed9c v\u1edbi c\xe1c b\u1ea1n c\xf3 n\u1ec1n t\u1ea3ng l\u1eadp tr\xecnh h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng (OOP). V\u1edbi nh\u1eefng b\u1ea1n m\u1edbi h\u1ecdc React ho\u1eb7c chuy\u1ec3n sang h\u1ecdc React th\xec ph\u01b0\u01a1ng ph\xe1p ti\u1ebfp c\u1eadn n\xe0y c\xf3 v\u1ebb ph\xf9 h\u1ee3p v\xe0 d\u1ec5 hi\u1ec3u."),(0,a.kt)("h3",{id:"function-component"},"Function Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nexport function TestComponent() {\n  // ph\u01b0\u01a1ng ph\xe1p xem k\u1ebft xu\u1ea5t m\xe3 HTML nh\u01b0 l\xe0 gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1 c\u1ee7a h\xe0m\n  return <div>TestComponent</div>;\n}\n')),(0,a.kt)("p",null,"Function component s\u1eed d\u1ee5ng c\xe1ch ti\u1ebfp c\u1eadn kh\xe1c \u0111\xf3 l\xe0 s\u1eed d\u1ee5ng pure function \u0111\u1ec3 khai b\xe1o component. Ban \u0111\u1ea7u function component \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 vi\u1ebft c\xe1c component ch\u1ec9 v\u1edbi m\u1ee5c \u0111\xedch k\u1ebft xu\u1ea5t HTML m\xe0 th\xf4i. V\u1edbi c\xe1c component v\u1edbi theo h\u01b0\u1edbng ti\u1ebfp c\u1eadn n\xe0y th\xec b\u1ea1n s\u1ebd kh\xf4ng can thi\u1ec7p \u0111\u01b0\u1ee3c v\xe0o lifecycle c\u1ee7a component. Do \u0111\xf3 n\xf3 th\u01b0\u1edbng \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn v\u1edbi t\xean g\u1ecdi Stateless Component."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"class-component-1"},"Class Component"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"props")," trong Class Component \u0111\u01b0\u1ee3c xem nh\u01b0 gi\xe1 tr\u1ecb truy\u1ec3n v\xe0o cho h\xe0m kh\u1edfi t\u1ea1o class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { Component } from "react";\n\nclass TestComponent extends Components {\n  constructor(props) {\n    super(props); // b\u1eaft bu\u1ed9c ph\u1ea3i c\xf3 d\xf2ng n\xe0y \u0111\u1ec3 g\u1ecdi h\xe0m kh\u1edfi t\u1ea1o c\u1ee7a class cha nh\xe9\n  }\n\n  render() {\n    return <div>TestComponent</div>;\n  }\n}\n')),(0,a.kt)("h3",{id:"function-component-1"},"Function Component"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"props")," trong Function Component th\xec \u0111\u01b0\u1ee3c xem nh\u01b0 l\xe0 gi\xe1 tr\u1ecb truy\u1ec1n v\xe0o h\xe0m pure function khi \u0111\u1ecbnh ngh\u0129a component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nexport function TestComponent(props) {\n  return <div>TestComponent</div>;\n}\n')),(0,a.kt)("p",null,"\u0110\u1ecbnh ngh\u0129a ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes")," th\xec kh\xf4ng c\xf3 s\u1ef1 kh\xe1c bi\u1ec7t gi\u1eefa Class Component v\xe0 Function Component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"TestComponent.defaultProps = {};\n\nTestComponent.propTypes = {};\n")),(0,a.kt)("h2",{id:"state"},"State"),(0,a.kt)("p",null,"Tr\u01b0\u1edbc khi React Hooks ra \u0111\u1eddi th\xec nh\u01b0 \u0111\xe3 n\xf3i \u1edf tr\xean Function Component con \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn v\u1edbi t\xean g\u1ecdi Stateless Component. Ngh\u0129a l\xe0 n\xf3 kh\xf4ng c\xf3 state. Khi React Hooks ra \u0111\u1eddi th\xec Function Component c\u0169ng c\xf3 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," c\u1ee7a ri\xeang n\xf3."),(0,a.kt)("h3",{id:"class-component-2"},"Class Component"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"state")," trong Class Component d\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a nh\u01b0 sau:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { Component } from "react";\n\nclass TestComponent extends Components {\n  constructor(props) {\n    super(props);\n    // kh\u1edfi t\u1ea1o gi\xe1 tr\u1ecb state\n    this.state = { isLoading: false };\n  }\n\n  render() {\n    return <div>TestComponent</div>;\n  }\n}\n')),(0,a.kt)("p",null,"Khi mu\u1ed1n thay \u0111\u1ed5i gi\xe1 tr\u1ecb ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," b\u1ea1n g\u1ecdi ph\u01b0\u01a1ng th\u1ee9c ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," c\u1ee7a component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.setState((state) => ({ isLoading: true }));\n")),(0,a.kt)("h3",{id:"function-component-2"},"Function Component"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"state")," trong Function Component \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a nh\u01b0 sau:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react";\n\nexport function TestComponent(props) {\n  // gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o state \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o trong useState hook\n  const [state, setState] = useState({ isLoading: false });\n\n  return <div>TestComponent</div>;\n}\n')),(0,a.kt)("p",null,"C\xe1c b\u1ea1n \u0111\u1ec3 \xfd h\xe0m ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb c\u1ee7a component ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," trong bi\u1ebfn ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," v\xe0 h\xe0m ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),". Khi mu\u1ed1n thay \u0111\u1ed5i gi\xe1 tr\u1ecb c\u1ee7a state th\xec b\u1ea1n c\xf3 th\u1ec3 g\u1ecdi h\xe0m ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"setState({ isLoading: true });\n")),(0,a.kt)("h2",{id:"component-lifecycle"},"Component Lifecycle"),(0,a.kt)("p",null,"V\u1edbi Class component c\xe1c b\u1ea1n s\u1ebd th\u1ea5y component lifecycle kh\xe1 r\xf5 r\xe0ng v\u1edbi c\xe1c h\xe0m nh\u01b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),". Function Component th\xec kh\xf4ng nh\u01b0 v\u1eady, to\xe0n b\u1ed9 vi\u1ec7c s\u1eed l\xfd lifecycle \u0111\u1ec1u th\xf4ng qua ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// componentDidMount\nuseEffect(() => {\n  return () => {}; // componentWillUnmount\n}, []);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// componentDidUpdate\nuseEffect(() => {\n  return () => {}; // componentWillUnmount\n}, [state]);\n")),(0,a.kt)("p",null,"Nh\u01b0 c\xe1c b\u1ea1n th\u1ea5y th\xec ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidMount")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," kh\xf4ng ch\u1ec9 \u0111\u1ecbnh r\xf5 khi n\xe0o th\xec h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi. Vi\u1ec7c g\u1ecdi h\xe0m th\xec t\u1ef1 ch\xfang ta hi\u1ec3u d\u1ef1a theo lifecycle c\u1ee7a React component th\xf4i. V\u1edbi Function Component v\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," th\xec kh\xe1c, b\u1ea1n c\xf3 th\u1ec3 th\u1ea5y ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"[state]")," ch\u1ecb \u0111\u1ecbnh r\xf5 r\xe0ng \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ee5 thu\u1ed9c m\xe0 khi ch\xfang thay \u0111\u1ed5i th\xec h\xe0m truy\u1ec3n v\xe0o ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. C\xf3 v\u1ebb nh\u01b0 n\xf3 l\u1ea1i t\u01b0\u1eddng m\xecnh h\u01a1n l\xe0 c\xe1c h\xe0m lifecycle trong class Component."),(0,a.kt)("p",null,"Sau s\u1ef1 c\xf3 m\u1eb7t c\u1ee7a TypeScript th\xec c\xf3 l\u1ebd Class Component v\xe0 React Hooks th\xec c\xf3 l\u1ebd b\u1ea1n Class Component chi\u1ebfm \u01b0u th\u1ebf tuy\u1ec7t \u0111\u1ed1i. Th\u1eddi \u0111i\u1ec3m \u0111\xf3 anh em thi nhau vi\u1ebft Class Component v\u1edbi TypeScript v\xe0 t\xf4i c\u0169ng th\u1ebf :). Ngay \u0111\u1ebfn c\u1ea3 facebook c\u0169ng support TypeScript v\u1edbi create-react-app n\u1eefa c\u01a1 m\xe0. Th\u1ebf nh\u01b0ng khi React Hooks xu\u1ea5t hi\u1ec7n th\xec c\xf3 v\u1ebb gi\xf3 \u0111\xe3 \u0111\u1ed5i chi\u1ec1u, vi\u1ec7c x\u1eed l\xfd state v\xe0 lifecycle v\u1edbi hook c\xf3 v\u1ebb \u0111\u01a1n gi\u1ea3n h\u01a1n r\u1ea5t nhi\u1ec1u. C\xe1c b\u1ea1n th\xec th\u1ea5y th\u1ebf n\xe0o. B\u1ea1n s\u1ebd ch\u1ecdn c\xe1ch n\xe0o v\u1edbi d\u1ef1 \xe1n c\u1ee7a m\xecnh?"))}m.isMDXComponent=!0}}]);