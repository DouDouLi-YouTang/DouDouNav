"use strict";(self["webpackChunkdoudou_nav"]=self["webpackChunkdoudou_nav"]||[]).push([[112],{1112:function(e,l,i){i.r(l),i.d(l,{default:function(){return q}});var t=i(3396),a=i(4870),u=i(7139),o=i(65),n=i(7178);const r=e=>((0,t.dD)("data-v-7e044d0e"),e=e(),(0,t.Cn)(),e),d={class:"website-left"},s={class:"website-left-box",key:"index"},m=["onClick"],c=r((()=>(0,t._)("div",{style:{height:"40px"}},null,-1))),w={class:"website-right-box"},p=["id"],g={class:"box"},f={class:"webBox"},v={key:0,class:"jianjie"},_=["href"],b={class:"webUrl"},k=["src"],y={key:1,class:"bianji"},W={class:"el-dropdown-link"},h={class:"webBox"},j={key:0,class:"jianjie"},U={class:"webUrl"},V=["src"],x={class:"dialog-footer"};var D={__name:"WebsiteView",setup(e){const l=(0,o.oR)(),i=(0,a.qj)((0,t.Fl)((()=>l.state.webArry))).value,r=(0,a.iH)(null),D=(0,a.iH)(!1),C=(0,a.iH)(),H=(0,a.iH)("freeMovies"),q=(0,a.iH)(!1),z=(0,a.iH)(!1),I=e=>{q.value=!0,H.value=e;let l=document.querySelector(`#${e}`);C.value.scrollTo({top:l.offsetTop-40,behavior:"smooth"})},Y=(0,a.qj)([]);let S=new IntersectionObserver((e=>{let l=e[0].target.id,t=e[0].isIntersecting;if(t){let e=Y.findIndex((e=>e==l));-1==e&&Y.push(l)}else{let e=Y.findIndex((e=>e==l));-1!==e&&Y.splice(e,1)}if(q.value)return;let a="";for(const u of i)if(-1!==Y.findIndex((e=>e===u.key))){a=u.key;break}H.value=a}),{threshold:[0,.25,.5,1]});const E=()=>{(0,t.Y3)((()=>{for(const e of i){let l=document.querySelector(`#${e.key}`);Y.push(e.key),S.observe(l)}}))},K=(0,a.iH)(window.innerWidth);(0,t.m0)((()=>{K.value<500?D.value=!1:D.value=!0})),window.addEventListener("resize",(()=>{K.value=window.innerWidth})),(0,t.bv)((()=>{let e=document.querySelector(".website-right-box");e.addEventListener("mousewheel",(()=>{q.value=!1})),E()}));const F=(0,a.qj)({sort:"",title:"",url:"",imgUrl:"",jianjie:""}),R=(0,a.iH)(null),B=(e,l,i)=>{const t=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;""===l||t.test(l)?i():i(new Error("请输入正确的网址"))},L=(0,a.qj)({title:{required:!0,message:"请输入网站名称",trigger:"blur"},url:[{required:!0,message:"请输入网页地址",trigger:"blur"},{validator:B,trigger:"blur"}],imgUrl:[{validator:B,trigger:"blur"}]}),M=function(e,l,t){F.sort=e.title,F.selectData=i.map((e=>e.title)),z.value=!0,F.title=l.webName,F.url=l.url,F.jianjie=l.jianjie,F.imgUrl=l.imgUrl},N=function(e,l,i){(0,n.z8)({message:"该功能正在开发中,过几天再来看看吧",type:"warning"})},T=function(){R.value.validate((e=>{e?(console.log("通过"),z.value=!1,(0,n.z8)({message:"该功能正在开发中,过几天再来看看吧",type:"warning"})):console.log("未通过")}))};return(e,l)=>{const o=(0,t.up)("el-scrollbar"),n=(0,t.up)("el-aside"),q=(0,t.up)("More"),Y=(0,t.up)("el-icon"),S=(0,t.up)("Edit"),E=(0,t.up)("el-dropdown-item"),K=(0,t.up)("Delete"),B=(0,t.up)("el-dropdown-menu"),$=(0,t.up)("el-dropdown"),A=(0,t.up)("el-main"),G=(0,t.up)("el-container"),O=(0,t.up)("el-divider"),Z=(0,t.up)("el-option"),J=(0,t.up)("el-select"),P=(0,t.up)("el-form-item"),Q=(0,t.up)("el-input"),X=(0,t.up)("el-form"),ee=(0,t.up)("el-button"),le=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(G,{class:"common-layout",ref_key:"divDom",ref:r},{default:(0,t.w5)((()=>[(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t._)("div",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,a.SU)(i),((e,l)=>((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",{class:(0,u.C_)({active:e.key==H.value}),onClick:l=>I(e.key)},(0,u.zw)(e.title),11,m)])))),128))])])),_:1})])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{ref_key:"scrollbarRef",ref:C},{default:(0,t.w5)((()=>[c,(0,t._)("div",w,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,a.SU)(i),((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"website-right-title",key:l,id:e.key},[(0,t._)("h2",null,(0,u.zw)(e.title),1),(0,t._)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.childers,((l,i)=>((0,t.wg)(),(0,t.iD)("div",f,[l.jianjie?((0,t.wg)(),(0,t.iD)("div",v,(0,u.zw)(l.jianjie),1)):(0,t.kq)("",!0),((0,t.wg)(),(0,t.iD)("a",{href:l.url,target:"_blank",key:i},[(0,t._)("div",b,[(0,t._)("img",{src:l.imgUrl?l.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,k),(0,t._)("div",null,(0,u.zw)(l.webName),1)])],8,_)),D.value?((0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)($,{trigger:"click"},{dropdown:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(E,{onClick:t=>M(e,l,i)},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S)])),_:1}),(0,t.Uk)("编辑")])),_:2},1032,["onClick"]),(0,t.Wm)(E,{style:{color:"#F56C6C"},onClick:t=>N(e,l,i)},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K)])),_:1}),(0,t.Uk)("删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,t.w5)((()=>[(0,t._)("span",W,[(0,t.Wm)(Y,{class:"on-inline"},{default:(0,t.w5)((()=>[(0,t.Wm)(q)])),_:1})])])),_:2},1024)])):(0,t.kq)("",!0)])))),256))])],8,p)))),128))])])),_:1},512)])),_:1})])),_:1},512),(0,t.Wm)(le,{modelValue:z.value,"onUpdate:modelValue":l[6]||(l[6]=e=>z.value=e),title:"修改(开发中)",width:"500",class:"tanceng",style:{"border-radius":"5px"}},{footer:(0,t.w5)((()=>[(0,t._)("span",x,[(0,t.Wm)(ee,{onClick:l[5]||(l[5]=e=>z.value=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1}),(0,t.Wm)(ee,{type:"primary",onClick:T},{default:(0,t.w5)((()=>[(0,t.Uk)(" 确定 ")])),_:1})])])),default:(0,t.w5)((()=>[(0,t._)("div",(0,t.dG)({class:"box"},F),[(0,t._)("div",h,[F.jianjie?((0,t.wg)(),(0,t.iD)("div",j,(0,u.zw)(F.jianjie),1)):(0,t.kq)("",!0),(0,t._)("a",null,[(0,t._)("div",U,[(0,t._)("img",{src:F.imgUrl?F.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,V),(0,t._)("div",null,(0,u.zw)(F.title),1)])])])],16),(0,t.Wm)(O,{style:{"margin-top":"10px"}}),(0,t.Wm)(X,{"label-width":"100px",rules:L,ref_key:"ruleFormRef",ref:R,model:F,style:{"max-width":"460px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{label:"分类"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:F.sort,"onUpdate:modelValue":l[0]||(l[0]=e=>F.sort=e),placeholder:"请选择一个分类"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.selectData,((e,l)=>((0,t.wg)(),(0,t.j4)(Z,{key:l,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(P,{label:"网站名称",prop:"title"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:F.title,"onUpdate:modelValue":l[1]||(l[1]=e=>F.title=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(P,{label:"简介"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:F.jianjie,"onUpdate:modelValue":l[2]||(l[2]=e=>F.jianjie=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(P,{label:"网页地址",prop:"url"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:F.url,"onUpdate:modelValue":l[3]||(l[3]=e=>F.url=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(P,{label:"网页图标地址",prop:"imgUrl"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{clearable:"",modelValue:F.imgUrl,"onUpdate:modelValue":l[4]||(l[4]=e=>F.imgUrl=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue"])],64)}}},C=i(89);const H=(0,C.Z)(D,[["__scopeId","data-v-7e044d0e"]]);var q=H}}]);
//# sourceMappingURL=112.b0bc24d4.js.map