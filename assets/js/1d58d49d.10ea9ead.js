"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2657],{7942:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),g=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=g(e.components);return a.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=g(t),p=o,h=s["".concat(u,".").concat(p)]||s[p]||d[p]||i;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[s]="string"==typeof e?e:o,r[1]=c;for(var g=2;g<i;g++)r[g]=t[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=t(2564),o=(t(959),t(7942));const i={},r=void 0,c={permalink:"/blog/2020/03/30/aws-remote-debugging-ung-dung-lambda-viet-bang-java-voi-visual-studio-code",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-03-30-aws-remote-debugging-ung-dung-lambda-viet-bang-java-voi-visual-studio-code.md",source:"@site/blog/2020-03-30-aws-remote-debugging-ung-dung-lambda-viet-bang-java-voi-visual-studio-code.md",title:"aws-remote-debugging-ung-dung-lambda-viet-bang-java-voi-visual-studio-code",description:"\x3c!-- ---",date:"2020-03-30T00:00:00.000Z",formattedDate:"March 30, 2020",tags:[],readingTime:3.265,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"},nextItem:{title:"aws-phat-trien-ung-dung-lambda-bang-java",permalink:"/blog/2020/03/22/aws-phat-trien-ung-dung-lambda-bang-java"}},u={authorsImageUrls:[]},g=[{value:"Remote Debugging",id:"remote-debugging",level:2},{value:"Kh\u1edfi \u0111\u1ed9ng \u1ee9ng d\u1ee5ng Lambda v\u1edbi ch\u1ebf \u0111\u1ed9 Remote Debugging",id:"kh\u1edfi-\u0111\u1ed9ng-\u1ee9ng-d\u1ee5ng-lambda-v\u1edbi-ch\u1ebf-\u0111\u1ed9-remote-debugging",level:2},{value:"C\u1ea5u h\xecnh Remote Debug trong Visual Studio Code",id:"c\u1ea5u-h\xecnh-remote-debug-trong-visual-studio-code",level:2},{value:"\u0110\u1eb7t break point",id:"\u0111\u1eb7t-break-point",level:2},{value:"Kh\u1edfi \u0111\u1ed9ng Visual Studio Code Debug b\u1eb1ng c\xe1c click v\xe0o nut Start",id:"kh\u1edfi-\u0111\u1ed9ng-visual-studio-code-debug-b\u1eb1ng-c\xe1c-click-v\xe0o-nut-start",level:2}],l={toc:g},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Debug c\u0169ng quan tr\u1ecdng gi\u1ed1ng nh\u01b0 l\xfac b\u1ea1n code v\u1eady. V\u1edbi nh\u1eefng b\u1ea1n l\xe0m quen v\u1edbi Lambda th\xec kh\xf4ng ph\u1ea3i ai c\u0169ng bi\u1ebft l\xe0m sao \u0111\u1ec3 c\xf3 th\u1ec3 debug \u0111\u01b0\u1ee3c. \u0110a ph\u1ea7n c\xe1c b\u1ea1n s\u1ebd ch\u1ecdn c\xe1ch in d\u1eef li\u1ec7u ra m\xe0n h\xecnh \u0111\u1ec3 debug. H\xf4m nay t\xf4i s\u1ebd h\u01b0\u1edbng d\u1eabn c\xe1c b\u1ea1n c\xe1ch debug \u1ee9ng d\u1ee5ng vi\u1ebft b\u1eb1ng Lamba nh\xe9."),(0,o.kt)("h2",{id:"remote-debugging"},"Remote Debugging"),(0,o.kt)("p",null,"Nh\u01b0 c\xe1c b\u1ea1n \u0111\u1ec1u bi\u1ebft th\xec \u0111\u1ec3 c\xf3 th\u1ec3 debug \u0111\u01b0\u1ee3c \u1ee9ng d\u1ee5ng Java th\xec b\u1ea1n c\u1ea7n ph\u1ea3i Remote t\u1edbi c\u1ed5ng Debug c\u1ee7a tr\xecnh th\u1ef1c thi Java. Qu\xe1 tr\xecnh n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 Remote Debugging. V\u1edbi \u1ee9ng d\u1ee5ng Java b\xecnh th\u01b0\u1eddng c\xe1c b\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng s\u1eed d\u1ee5ng c\xe1c IDE c\xf3 h\u1ed7 tr\u1ee3 Remote Debugging m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng. V\u1edbi c\xe1c \u1ee9ng d\u1ee5ng Lambda b\u1eb1ng Java th\xec sao?"),(0,o.kt)("h2",{id:"kh\u1edfi-\u0111\u1ed9ng-\u1ee9ng-d\u1ee5ng-lambda-v\u1edbi-ch\u1ebf-\u0111\u1ed9-remote-debugging"},"Kh\u1edfi \u0111\u1ed9ng \u1ee9ng d\u1ee5ng Lambda v\u1edbi ch\u1ebf \u0111\u1ed9 Remote Debugging"),(0,o.kt)("p",null,"Trong b\xe0i vi\u1ebft ",(0,o.kt)("a",{parentName:"p",href:"https://magz.techover.io/2020/03/22/aws-phat-trien-ung-dung-lambda-bang-java/"},"Ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng Lambda b\u1eb1ng Java"),", t\xf4i \u0111\xe3 h\u01b0\u1edbng d\u1eabn c\xe1c b\u1ea1n c\xe1ch s\u1eed d\u1ee5ng SAM \u0111\u1ec3 ch\u1ea1y c\xe1c \u1ee9ng d\u1ee5ng Lambda vi\u1ebft b\u1eb1ng ng\xf4n ng\u1eef Java. C\xe1c b\u1ea1n theo d\xf5i b\xe0i vi\u1ebft tr\xean s\u1ebd th\u1ea5y \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c ch\u1ea1y tr\xean m\u1ed9t m\xe1y \u1ea3o Java tr\xf4ng m\u1ed9t docker container. \u0110\u1ec3 kh\u1eddi \u0111\u1ed9ng ch\u1ebf \u0111\u1ec3 Remote Debugging th\xec c\xe1c b\u1ea1n g\xf5 l\u1ec7nh sau(c\xe1c b\u1ea1n nh\u1edb kh\u1edfi \u0111\u1ed9ng Docker tr\u01b0\u1edbc khi kh\u1edfi \u0111\u1ed9ng SAM nh\xe9):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hieunv@HieuNV sam-app % sam local start-api -d 5858\nMounting HelloWorldFunction at http://127.0.0.1:3000/hello [GET]\nYou can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions, changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template\n2020-03-30 20:10:33  * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)\n")),(0,o.kt)("p",null,"C\xe1c b\u1ea1n s\u1ebd th\u1ea5y SAM \u0111\u01b0\u1ee3c kh\u1edfi \u0111\u1ed9ng v\xe0 l\u1eafng nghe \u1edf c\u1ed5ng ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),". C\xf2n c\u1ed5ng ",(0,o.kt)("inlineCode",{parentName:"p"},"5858")," th\xec sao? T\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y n\xf3 ch\u01b0a \u0111\u01b0\u1ee3c kh\u1edfi \u0111\u1ed9ng. Khi b\u1ea1n access v\xe0o ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000/hello")," th\xec c\u1ed5ng Remote Debugging ",(0,o.kt)("inlineCode",{parentName:"p"},"5858")," m\u1edbi \u0111\u01b0\u1ee3c kh\u1edfi \u0111\u1ed9ng."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Invoking helloworld.App::handleRequest (java11)\n\nFetching lambci/lambda:java11 Docker container image......\nMounting /Users/hieunv/Projects/hieunv/sam-app/.aws-sam/build/HelloWorldFunction as /var/task:ro,delegated inside runtime container\nPicked up _JAVA_OPTIONS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,quiet=y,address=*:5858 -XX:MaxHeapSize=2834432k -XX:MaxMetaspaceSize=163840k -XX:ReservedCodeCacheSize=81920k -XX:+UseSerialGC -XX:-TieredCompilation -Djava.net.preferIPv4Stack=true\n")),(0,o.kt)("h2",{id:"c\u1ea5u-h\xecnh-remote-debug-trong-visual-studio-code"},"C\u1ea5u h\xecnh Remote Debug trong Visual Studio Code"),(0,o.kt)("p",null,"C\xe1c b\u1ea1n quay l\u1ea1i Visual Studio Code, v\xe0o Tab Debug sau \u0111\xf3 ch\u1ecdn create a launch.json file. T\u1ea1i m\u1ee5c ch\u1ecdn ki\u1ec3u Debug b\u1ea1n chon ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Configuration")," v\xe0 ch\u1ecdn"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3-ap-southeast-1.amazonaws.com/techover.storage/wp-content/uploads/2020/03/30202922/Screen-Shot-2020-03-30-at-8.28.42-PM.png",alt:"add configuration"})),(0,o.kt)("p",null,"Sau \u0111\xf3 c\xe1c b\u1ea1n chon ",(0,o.kt)("inlineCode",{parentName:"p"},"Attach To Remote Program")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3-ap-southeast-1.amazonaws.com/techover.storage/wp-content/uploads/2020/03/30203144/Screen-Shot-2020-03-30-at-8.31.15-PM.png",alt:"Attach To Remote Program"})),(0,o.kt)("p",null,"Ti\u1ebfp \u0111\xf3 c\xe1c b\u1ea1n s\u1eeda l\u1ea1i c\u1ea5u h\xecnh ",(0,o.kt)("inlineCode",{parentName:"p"},"hostName")," th\xe0nh ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," v\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," th\xe0nh ",(0,o.kt)("inlineCode",{parentName:"p"},"5858"),"(\u0111\u1ea5y l\xe0 c\u1ed5ng Remote Debug c\u1ee7a tr\xecnh th\u1ef1c thi Java)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "java",\n      "name": "Debug (Attach) - Remote",\n      "request": "attach",\n      "hostName": "localhost",\n      "port": 5858\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"\u0111\u1eb7t-break-point"},"\u0110\u1eb7t break point"),(0,o.kt)("p",null,"C\xe1c b\u1ea1n quay l\u1ea1i Visual Studio Code v\xe0 m\u1edf m\xe3 ngu\u1ed3n mu\u1ed1n debug sau \u0111\xf3 \u0111\u1eb7t break point"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3-ap-southeast-1.amazonaws.com/techover.storage/wp-content/uploads/2020/03/30203623/Screen-Shot-2020-03-30-at-8.35.58-PM.png",alt:"break point"})),(0,o.kt)("h2",{id:"kh\u1edfi-\u0111\u1ed9ng-visual-studio-code-debug-b\u1eb1ng-c\xe1c-click-v\xe0o-nut-start"},"Kh\u1edfi \u0111\u1ed9ng Visual Studio Code Debug b\u1eb1ng c\xe1c click v\xe0o nut Start"),(0,o.kt)("p",null,"Xem output log b\u1ea1n s\u1ebd th\u1ea5y th\xf4ng b\xe1o sau:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'START RequestId: 4f69214b-9a3a-19ef-0137-5081d7caccea Version: $LATEST\nEND RequestId: 4f69214b-9a3a-19ef-0137-5081d7caccea\nREPORT RequestId: 4f69214b-9a3a-19ef-0137-5081d7caccea  Init Duration: 58932.30 ms  Duration: 10421.29 ms   Billed Duration: 10500 ms   Memory Size: 512 MB Max Memory Used: 73 MB\n2020-03-30 20:39:18 127.0.0.1 - - [30/Mar/2020 20:39:18] "GET /hello HTTP/1.1" 500 -\n``\n')),(0,o.kt)("p",null,"Sau \u0111\xf3 b\u1ea1n access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000/hello")," b\u1eb1ng Postman v\xe0 quay l\u1ea1i Visual Studio Code"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3-ap-southeast-1.amazonaws.com/techover.storage/wp-content/uploads/2020/03/30204136/Screen-Shot-2020-03-30-at-8.40.51-PM.png",alt:"debug mode"})),(0,o.kt)("p",null,"Nh\u01b0 v\u1eady l\xe0 ch\xfang ta \u0111\xe3 debug th\xe0nh c\xf4ng v\xe0o h\xe0m Lambda r\u1ed3i."),(0,o.kt)("p",null,"C\xe1m \u01a1n c\xe1c b\u1ea1n \u0111\xe3 theo d\xf5i b\xe0i vi\u1ebft. Hy v\u1ecdng b\xe0i vi\u1ebft s\u1ebd gi\xfap \xedch v\u1edbi d\u1ef1 \xe1n c\u1ee7a c\xe1c b\u1ea1n. Ch\xfac c\xe1c b\u1ea1n th\xe0nh c\xf4ng."))}d.isMDXComponent=!0}}]);