"use strict";(self["webpackChunkdoudou_nav"]=self["webpackChunkdoudou_nav"]||[]).push([[317],{317:function(e,l,t){t.r(l),t.d(l,{default:function(){return S}});var a=t(3396),i=t(2268),o=t(4870),u=t(6666),n=t(7178),s=t(6e3),d=t(7139),r=t(2049);const c=e=>((0,a.dD)("data-v-4ef25fda"),e=e(),(0,a.Cn)(),e),m={key:0,class:"website-left"},p=["onClick"],w=["onClick"],v={class:"website-left-add"},f=c((()=>(0,a._)("div",{style:{height:"40px"}},null,-1))),g={class:"website-right-box"},k=["id"],b={class:"website-right-title-box"},_={class:"box"},y={key:0,class:"jianjie"},W=["href"],h={class:"webUrl"},D=["src"],U={key:1,class:"bianji"},j={class:"el-dropdown-link"},x={key:0,class:"webBox"},C=c((()=>(0,a._)("div",{class:"jianjie"},"点击新增",-1))),V=["onClick"],H={class:"webBox"},q={key:0,class:"jianjie"},I={class:"webUrl"},B=["src"],z={class:"dialog-footer"};var E={__name:"WebsiteView",setup(e){const l=(0,d.oR)();l.dispatch("createData");const t=(0,a.Fl)((()=>l.state.webArry)),c=(0,o.iH)(null),E=(0,o.iH)(!1),T=(0,o.iH)(""),M=(0,o.iH)(!1),S=(0,o.iH)(!1),Y=(0,o.iH)(!1),K=(0,o.iH)(window.innerWidth);(0,a.m0)((()=>{K.value<500?Y.value=!1:Y.value=!0})),window.addEventListener("resize",(()=>{K.value=window.innerWidth}));const L=(0,o.qj)({});(0,a.m0)((()=>{L.selectData=t.value.map((e=>({title:e.title,value:e.key})))}));const N=(0,o.iH)(null),P=(e,l,t)=>{const a=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;""===l||a.test(l)?t():t(new Error("请输入正确的网址"))},R=(0,o.qj)({title:{required:!0,message:"请输入网站名称",trigger:"blur"},url:[{required:!0,message:"请输入网页地址",trigger:"blur"},{validator:P,trigger:"blur"}],imgUrl:[{validator:P,trigger:"blur"}]}),$=function(e,l,t){E.value=!0,T.value="edit",L.metaDataId=l.metaDataId,L.sort=e.key,L.title=l.webName,L.url=l.url,L.jianjie=l.jianjie,L.imgUrl=l.imgUrl},F=function(e){E.value=!0,T.value="add",L.sort=e.key,L.metaDataId=(new Date).getTime(),L.imgUrl=""};function O(e){(0,u.bM)({title:"提示",message:"该功能正在开发中,过几天再来看看吧",type:"warning"})}function Z(){Object.keys(L).forEach((e=>{"selectData"!=e&&delete L[e]}));const e=document.getElementById("dailogImg");e.onload=null,e.onerror=null}const A=function(){N.value.validate((e=>{e?("edit"==T.value?(l.commit("editData",L),(0,n.z8)({message:"修改成功",type:"success"})):(l.commit("addData",L),(0,n.z8)({message:"新增成功",type:"success"})),Q(),E.value=!1):console.log("未通过")}))},G=function(e,t,a){s.T.confirm(`你确定要删除 <span style="color:#ec4141">${e.title}</span> 分类下的 <span style="color:#ec4141">${t.webName}</span> 吗?`,"警告",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消",dangerouslyUseHTMLString:!0,confirmButtonClass:"deleteButton"}).then((()=>{const a={key:e.key,metaDataId:t.metaDataId};l.commit("delData",a),Q(),(0,n.z8)({message:"删除成功",type:"success"})})).catch((()=>{}))};function J(){const e=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;if(e.test(L.url)){const e=new URL(L.url);L.imgUrl!=e.origin+"/favicon.ico"&&0==M.value&&(M.value=!0),L.imgUrl=e.origin+"/favicon.ico";const l=document.getElementById("dailogImg");l.onload=function(){""!=L.imgUrl&&(0,u.bM)({title:"成功",message:"图标获取成功!",type:"success"}),M.value=!1},l.onerror=function(){(0,u.bM)({title:"错误",message:"图标获取失败!",type:"error"}),L.imgUrl="",M.value=!1}}else(0,n.z8)({message:"请输入正确的网址",type:"error"})}async function Q(){const e="DouDouDB",l="website",a=await r.ZP.openDB(e,l,1),i={id:1,data:JSON.stringify(t.value)};r.ZP.updateDB(a,l,i)}const X=(0,o.iH)(),ee=(0,o.iH)("freeMovies"),le=(0,o.iH)(!1),te=e=>{le.value=!0,ee.value=e;let l=document.querySelector(`#${e}`);X.value.scrollTo({top:l.offsetTop-40,behavior:"smooth"})},ae=(0,o.qj)([]);let ie=new IntersectionObserver((e=>{let l=e[0].target.id,a=e[0].isIntersecting;if(a){let e=ae.findIndex((e=>e==l));-1==e&&ae.push(l)}else{let e=ae.findIndex((e=>e==l));-1!==e&&ae.splice(e,1)}if(le.value)return;let i="";for(const o of t.value)if(-1!==ae.findIndex((e=>e===o.key))){i=o.key;break}ee.value=i}),{threshold:[0,.25,.5,1]});const oe=()=>{for(const e of t.value){let l=document.querySelector(`#${e.key}`);ae.push(e.key),ie.observe(l)}};return(0,a.bv)((()=>{let e=document.querySelector(".website-right-box");e.addEventListener("mousewheel",(()=>{le.value=!1})),setTimeout((()=>{oe()}),100)})),(e,l)=>{const o=(0,a.up)("EditPen"),u=(0,a.up)("el-icon"),n=(0,a.up)("Plus"),s=(0,a.up)("el-scrollbar"),d=(0,a.up)("el-aside"),r=(0,a.up)("More"),K=(0,a.up)("Edit"),P=(0,a.up)("el-dropdown-item"),Q=(0,a.up)("Delete"),le=(0,a.up)("el-dropdown-menu"),ae=(0,a.up)("el-dropdown"),ie=(0,a.up)("el-main"),oe=(0,a.up)("el-container"),ue=(0,a.up)("el-tooltip"),ne=(0,a.up)("el-divider"),se=(0,a.up)("el-option"),de=(0,a.up)("el-select"),re=(0,a.up)("el-form-item"),ce=(0,a.up)("el-input"),me=(0,a.up)("el-button"),pe=(0,a.up)("el-form"),we=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(oe,{class:"common-layout",ref_key:"divDom",ref:c},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[t.value.length?((0,a.wg)(),(0,a.iD)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"website-left-box",key:l},[(0,a._)("div",{class:(0,i.C_)({active:e.key==ee.value}),onClick:l=>te(e.key)},[(0,a.Uk)((0,i.zw)(e.title)+" ",1),S.value?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"website-left-box-edit",onClick:l=>O(e)},[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o)])),_:1})],8,w)):(0,a.kq)("",!0)],10,p)])))),128)),S.value?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"website-left-box",onClick:O},[(0,a._)("p",v,[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n)])),_:1})])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.Wm)(ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{ref_key:"scrollbarRef",ref:X},{default:(0,a.w5)((()=>[f,(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"website-right-title",key:l,id:e.key},[(0,a._)("div",b,[(0,a._)("h2",null,(0,i.zw)(e.title),1)]),(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.childers,((l,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"webBox",key:t},[l.jianjie?((0,a.wg)(),(0,a.iD)("div",y,(0,i.zw)(l.jianjie),1)):(0,a.kq)("",!0),(0,a._)("a",{href:l.url,target:"_blank"},[(0,a._)("div",h,[(0,a._)("img",{src:l.imgUrl?l.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,D),(0,a._)("div",null,(0,i.zw)(l.webName),1)])],8,W),Y.value?((0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(ae,{trigger:"click"},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P,{onClick:a=>$(e,l,t)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K)])),_:1}),(0,a.Uk)("编辑")])),_:2},1032,["onClick"]),(0,a.Wm)(P,{style:{color:"#F56C6C"},onClick:a=>G(e,l,t)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q)])),_:1}),(0,a.Uk)("删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a._)("span",j,[(0,a.Wm)(u,{class:"on-inline"},{default:(0,a.w5)((()=>[(0,a.Wm)(r)])),_:1})])])),_:2},1024)])):(0,a.kq)("",!0)])))),128)),S.value?((0,a.wg)(),(0,a.iD)("div",x,[C,(0,a._)("p",{onClick:l=>F(e)},[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n)])),_:1})],8,V)])):(0,a.kq)("",!0)])],8,k)))),128))])])),_:1},512)])),_:1})])),_:1},512),Y.value?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"editMode",onClick:l[0]||(l[0]=e=>S.value=!S.value)},[(0,a.Wm)(ue,{class:"box-item",effect:"dark",content:"编辑模式",placement:"top"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K)])),_:1})])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(we,{modelValue:E.value,"onUpdate:modelValue":l[7]||(l[7]=e=>E.value=e),title:"edit"==T.value?"修改":"新增",width:"500",class:"tanceng",style:{"border-radius":"5px"},onClose:Z},{footer:(0,a.w5)((()=>[(0,a._)("span",z,[(0,a.Wm)(me,{onClick:l[6]||(l[6]=e=>E.value=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(me,{type:"primary",onClick:A,disabled:M.value},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled"])])])),default:(0,a.w5)((()=>[(0,a._)("div",(0,a.dG)({class:"box"},L),[(0,a._)("div",H,[L.jianjie?((0,a.wg)(),(0,a.iD)("div",q,(0,i.zw)(L.jianjie),1)):(0,a.kq)("",!0),(0,a._)("a",null,[(0,a._)("div",I,[(0,a._)("img",{id:"dailogImg",src:L.imgUrl?L.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,B),(0,a._)("div",null,(0,i.zw)(L.title),1)])])])],16),(0,a.Wm)(ne,{style:{"margin-top":"10px"}}),(0,a.Wm)(pe,{"label-width":"100px",rules:R,ref_key:"ruleFormRef",ref:N,model:L,style:{"max-width":"460px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(re,{label:"分类"},{default:(0,a.w5)((()=>[(0,a.Wm)(de,{disabled:"edit"==T.value,modelValue:L.sort,"onUpdate:modelValue":l[1]||(l[1]=e=>L.sort=e),placeholder:"请选择一个分类"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(L.selectData,((e,l)=>((0,a.wg)(),(0,a.j4)(se,{key:l,label:e.title,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["disabled","modelValue"])])),_:1}),(0,a.Wm)(re,{label:"网站名称",prop:"title"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{modelValue:L.title,"onUpdate:modelValue":l[2]||(l[2]=e=>L.title=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(re,{label:"简介"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{modelValue:L.jianjie,"onUpdate:modelValue":l[3]||(l[3]=e=>L.jianjie=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(re,{label:"网页地址",prop:"url"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{modelValue:L.url,"onUpdate:modelValue":l[4]||(l[4]=e=>L.url=e)},{append:(0,a.w5)((()=>[(0,a.Wm)(me,{type:"primary",onClick:J},{default:(0,a.w5)((()=>[(0,a.Uk)("获取网页图标")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(re,{label:"网页图标地址",prop:"imgUrl"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{clearable:"",modelValue:L.imgUrl,"onUpdate:modelValue":l[5]||(l[5]=e=>L.imgUrl=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","title"])],64)}}},T=t(89);const M=(0,T.Z)(E,[["__scopeId","data-v-4ef25fda"]]);var S=M}}]);
//# sourceMappingURL=317.dbbbef38.js.map