"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4108],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,m=d["".concat(u,".").concat(y)]||d[y]||s[y]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},u=void 0,c={unversionedId:"deployment/deployment-docker",id:"version-2.4.1/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/docs/deployment/deployment-docker",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-docker.md",version:"2.4.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/deployment/deployment-package"},next:{title:"K8S Deployment",permalink:"/docs/deployment/deployment-k8s"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,a.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin\n> docker network create shenyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," to store data:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," to store data, copy ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql-connector.jar")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"/$(your_work_dir)/ext-lib"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin\n')),(0,a.kt)("p",null,"another way is to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf/ -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, execute the following statement\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin\n')),(0,a.kt)("p",null,"another way is to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin\n")),(0,a.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap\n> docker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap\n")))}d.isMDXComponent=!0}}]);