"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2587],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=p,g=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67856:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),p=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"gRPC\u63d2\u4ef6",keywords:["gRPC"],description:"gRPC\u63d2\u4ef6"},o=void 0,u={unversionedId:"plugin-center/proxy/grpc-plugin",id:"plugin-center/proxy/grpc-plugin",isDocsHomePage:!1,title:"gRPC\u63d2\u4ef6",description:"gRPC\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/grpc-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/grpc-plugin",permalink:"/zh/docs/next/plugin-center/proxy/grpc-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/grpc-plugin.md",version:"current",frontMatter:{title:"gRPC\u63d2\u4ef6",keywords:["gRPC"],description:"gRPC\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Dubbo\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/dubbo-plugin"},next:{title:"Motan\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/motan-plugin"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u8bb2\u89e3",id:"\u63d2\u4ef6\u8bb2\u89e3",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u4e8e\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC\u534f\u8bae"),"\u8bf7\u6c42\u7684\u6838\u5fc3\u5904\u7406\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\uff0c\u5f00\u542f\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-grpc"},"gRPC\u5feb\u901f\u5f00\u59cb")," \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/grpc-proxy"},"gRPC\u670d\u52a1\u63a5\u5165")," \u3002"))),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u8bb2\u89e3"},"\u63d2\u4ef6\u8bb2\u89e3"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u63a5\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u540e\uff0c\u4f1a\u81ea\u52a8\u6ce8\u518c\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728\u63d2\u4ef6\u5217\u8868 ",(0,i.kt)("inlineCode",{parentName:"p"},"->")," rpc proxy ",(0,i.kt)("inlineCode",{parentName:"p"},"->")," grpc \u4e2d\u67e5\u770b\u3002 \u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,i.kt)("h4",{id:"\u9009\u62e9\u5668\u5904\u7406"},"\u9009\u62e9\u5668\u5904\u7406"),(0,i.kt)("img",{src:"/img/shenyu/plugin/grpc/selector_handle.png",width:"80%",height:"80%"}),(0,i.kt)("p",null,"\u9009\u62e9\u5668\u5904\u7406\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),"\u5b57\u6bb5\uff0c\u662f\u7f51\u5173\u5339\u914d\u5230\u6d41\u91cf\u4ee5\u540e\uff0c\u53ef\u8fdb\u884c\u7684\u5904\u7406\u64cd\u4f5c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u914d\u7f6e\u8be6\u89e3\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ip:port"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," \u4e0e\u7aef\u53e3\uff0c\u8fd9\u91cc\u586b\u5199\u4f60\u771f\u5b9e\u670d\u52a1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," + \u7aef\u53e3\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http")," \u534f\u8bae\uff0c\u4e00\u822c\u586b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," \uff0c\u4e0d\u586b\u5199\u9ed8\u8ba4\u4e3a:",(0,i.kt)("inlineCode",{parentName:"p"},"http://"),"\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1a\u670d\u52a1\u6743\u91cd\u3002\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"status"),"\uff1a\u5f00\u542f\u6216\u5173\u95ed\u3002"))),(0,i.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"grpc"),"\u63a5\u53e3\u65b9\u6cd5\uff0c\u90fd\u4f1a\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\uff0c\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u4f1a\u81ea\u52a8\u6ce8\u518c\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684\u57fa\u7840\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e")," \u5143\u6570\u636e\u7ba1\u7406\u4e2d\u67e5\u770b\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/grpc/metadata.png",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5e94\u7528\u540d\u79f0\uff1a\u8be5\u6761\u5143\u6570\u636e\u6240\u5c5e\u7684\u5e94\u7528\u540d\u79f0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u540d\u79f0\uff1a\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u540d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8def\u5f84\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http"),"\u8bf7\u8def\u5f84\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8def\u5f84\u63cf\u8ff0\uff1a\u5bf9\u8be5\u8def\u5f84\u7684\u8bf4\u660e\uff0c\u65b9\u4fbf\u67e5\u770b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53c2\u6570\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"grpc"),"\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u6309\u7167\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u987a\u5e8f\uff0c\u901a\u8fc7\u534a\u89d2\u9017\u53f7\u5206\u9694\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rpc\u6269\u5c55\u53c2\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"grpc"),"\u63a5\u53e3\u7684\u5176\u4ed6\u914d\u7f6e\uff0c\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"json"),"\u683c\u5f0f\uff0c\u5b57\u6bb5\u5982\u4e0b\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timeout": 5000,\n  "methodType": "BIDI_STREAMING"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u670d\u52a1\u63a5\u53e3\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"grpc"),"\u63a5\u53e3\u7684\u5168\u9650\u5b9a\u7c7b\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Rpc"),"\u7c7b\u578b\uff1a\u6b64\u5904\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc"),"\u3002"))))}d.isMDXComponent=!0}}]);