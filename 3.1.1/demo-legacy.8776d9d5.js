System.register(["./mobile-legacy.f0f83c58.js","./vendor-legacy.e78d1288.js","./index-legacy.4f6c4642.js"],(function(t){"use strict";var e,i,l,a,c,n,o,u,d;return{setters:[function(t){e=t.c},function(t){i=t.a,l=t.x,a=t.r,c=t.o,n=t.c,o=t.f,u=t.i,d=t.j},function(){}],execute:function(){const{createDemo:r}=e("collapse");var s=t("default",r({setup(t,e){const a=i({active1:[1,"2"],active2:1,active3:1,active4:1,active5:1,title1:"标题1",title2:"标题2",title3:"标题3",subTitle:"副标题"});return{change:t=>{console.log(`点击了name是${t}的面板`)},...l(a)}}}));const v={class:"demo full"},f=o("h2",null,"基本用法",-1),m=d(" NutUI是一套拥有京东风格的轻量级的 Vue 组件库 "),p=d(" 在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！ "),_=o("h2",null,"无icon样式",-1),b=d(" 引入Vue3新特性 Composition API、Teleport、Emits 等 "),U=d(" 全面使用 TypeScipt "),g=o("h2",null,"手风琴",-1),h=d(" 基于京东设计语言体系，构建场景 "),w=d(" 提高界⾯的模块化通用程度 "),T=d(" 采用组合式 API Composition 语法重构，结构清晰，功能模块化 "),y=o("h2",null,"自定义折叠图标",-1),j=d(" NUTUI3.0重新思考其内在的一致性和可组合性 "),x=d(" 提⾼产研输出对接的效率，降低输出工作量 "),I=o("h2",null,"自定义标题图标",-1),A=d(" 组件 emits 事件单独提取，增强代码可读性 "),C=d(" 使用 Teleport 新特性重构挂载类组件 ");s.render=function(t,e,i,l,d,r){const s=a("nut-collapse-item"),N=a("nut-collapse");return c(),n("div",v,[f,o(N,{active:t.active1,"onUpdate:active":e[1]||(e[1]=e=>t.active1=e),icon:"down-arrow"},{default:u((()=>[o(s,{title:t.title1,name:1},{default:u((()=>[m])),_:1},8,["title"]),o(s,{title:t.title2,name:2},{default:u((()=>[p])),_:1},8,["title"]),o(s,{title:t.title3,name:3,disabled:""},null,8,["title"])])),_:1},8,["active"]),_,o(N,{active:t.active4,"onUpdate:active":e[2]||(e[2]=e=>t.active4=e),accordion:!0},{default:u((()=>[o(s,{title:t.title1,name:1},{default:u((()=>[b])),_:1},8,["title"]),o(s,{title:t.title2,name:2},{default:u((()=>[U])),_:1},8,["title"])])),_:1},8,["active"]),g,o(N,{active:t.active2,"onUpdate:active":e[3]||(e[3]=e=>t.active2=e),accordion:!0,icon:"down-arrow"},{default:u((()=>[o(s,{title:t.title1,name:1},{default:u((()=>[h])),_:1},8,["title"]),o(s,{title:t.title2,name:2,"sub-title":t.subTitle},{default:u((()=>[w])),_:1},8,["title","sub-title"]),o(s,{title:t.title3,name:3},{default:u((()=>[T])),_:1},8,["title"])])),_:1},8,["active"]),y,o(N,{active:t.active3,"onUpdate:active":e[4]||(e[4]=e=>t.active3=e),accordion:!0,icon:"arrow-right2",rotate:"90"},{default:u((()=>[o(s,{title:t.title1,name:1},{default:u((()=>[j])),_:1},8,["title"]),o(s,{title:t.title2,name:2,"sub-title":"文本内容"},{default:u((()=>[x])),_:1},8,["title"])])),_:1},8,["active"]),I,o(N,{active:t.active5,"onUpdate:active":e[5]||(e[5]=e=>t.active5=e),"title-icon":"issue","title-icon-color":"red","title-icon-size":"20px","title-icon-position":"left",icon:"down-arrow",accordion:!0},{default:u((()=>[o(s,{title:t.title1,name:1},{default:u((()=>[A])),_:1},8,["title"]),o(s,{title:t.title2,name:2,"sub-title":"文本内容"},{default:u((()=>[C])),_:1},8,["title"])])),_:1},8,["active"])])}}}}));