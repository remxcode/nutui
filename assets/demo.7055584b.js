import{c as e}from"./mobile.4dd8d282.js";import{a,r as l,o,c as t,f as n}from"./vendor.36ea9f7d.js";import"./index.d26ed273.js";const{createDemo:s}=e("textarea");var r=s({setup(){const e=a({val0:"",val1:"初始数据"});setTimeout((function(){e.val1="异步测试数据，2秒"}),2e3);return{state:e,change:e=>{console.log("change: ",e)}}}});const d={class:"demo full"},u=n("h2",null,"基础用法",-1),c=n("h2",null,"显示字数统计",-1),m=n("h2",null,"只读",-1);r.render=function(e,a,s,r,h,i){const g=l("nut-textarea");return o(),t("div",d,[u,n(g,{modelValue:e.state.val0,"onUpdate:modelValue":a[1]||(a[1]=a=>e.state.val0=a),onChange:e.change,rows:"10",placeholder:"高度可拉伸",autosize:!0,label:"留言："},null,8,["modelValue","onChange"]),c,n(g,{modelValue:e.state.val1,"onUpdate:modelValue":a[2]||(a[2]=a=>e.state.val1=a),onChange:e.change,rows:"5","limit-show":!0,"max-length":"20",placeholder:"设置输入五行",label:"留言："},null,8,["modelValue","onChange"]),m,n(g,{readonly:"true",rows:"5",placeholder:"只读",label:"留言："})])};export default r;