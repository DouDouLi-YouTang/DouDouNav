"use strict";(self["webpackChunkdoudou_nav"]=self["webpackChunkdoudou_nav"]||[]).push([[438],{812:function(e,l){l.Z={logData:[{time:"07-16",logs:['网址导航页面新增分类自定义（编辑 <span style="color:#dcdfe6">|</span> 删除 <span style="color:#dcdfe6">|</span> 新增 <span style="color:#dcdfe6">|</span> 排序）按钮','网址导航页面新增分类自定义（删除 <span style="color:#dcdfe6">|</span> 编辑 <span style="color:#dcdfe6">|</span> 添加 <span style="color:#dcdfe6">|</span> 排序）功能',"网址导航页面网页模块样式调整","网址导航页面网页模块新增（排序）功能",'网址导航页面优化（删除 <span style="color:#dcdfe6">|</span> 编辑 <span style="color:#dcdfe6">|</span> 添加）提示信息',"网址导航页面新增编辑模式动画效果"]},{time:"07-10",logs:['网站图标更换,贡献者：<span style="color: #409eff;">小萧</span>',"网址导航页面,修复文字溢出问题"]},{time:"07-09",logs:["网址导航页面新增（编辑模式）按钮","网址导航页面新增网站自定义添加功能","新增AI工具分类（如果没看到请点击上方重置按钮）","网址导航页面样式调整","编辑弹窗新增自动获取网页图标功能","网站图标形状更改为圆形"]},{time:"07-08",logs:["网址导航页面,分类标题样式调整"]},{time:"07-07",logs:['网址导航页面,新增（编辑 <span style="color:#dcdfe6">|</span> 删除）功能 <span style="color:#409eff;">数据只保存在本地</span>',"修复某些网站失效问题","修复网页刷新后页面空白问题"]},{time:"06-27",logs:["优化移动端显示效果"]},{time:"06-25",logs:["新增更新日志页面","优化网站导航页编辑按钮位置"]},{time:"06-24",logs:["网址导航页面,网页模块样式调整",'网址导航页面,新增（编辑 <span style="color:#dcdfe6">|</span> 删除）按钮',"编辑功能已完成80%(已完成表单验证)","修复某些网站失效问题"]},{time:"06-22",logs:["网址导航页面,网页模块样式调整","网址导航新增 <b>Chat-Gpt</b> 分类"]},{time:"06-21",logs:['解决国内访问缓慢问题,并将网站网址更换为 <span style="color: #409eff;">https://doudounav.4everland.app</span>']},{time:"06-18",logs:["新增网站导航页",'完成网站导航页（样式 <span style="color:#dcdfe6">|</span> 动画）',"网站导航页新增多个分类","解决顶部导航栏着色问题","将全局字体更换为 <b>MiSans</b>","适配移动端"]},{time:"06-11",logs:["兜兜的导航项目正式启动","完成首页文字轮播",'完成首页（样式 <span style="color:#dcdfe6">|</span> 动画）','项目正式上线 <b>GitHub</b> 访问地址为: <span style="color: #409eff;">https://doudouli-youtang.github.io/DouDouNav</span>',"解决移动端点击图标无法跳转问题"]}]}},1438:function(e,l,t){t.r(l),t.d(l,{default:function(){return A}});var a=t(700),o=t(2188),i=t(7812),n=t(2850),s=t(1306),u=t(8187),d=t(6369),r=t(2877),c=t(5448),m=t(5583),p=t(5659),w=t(812);const f=e=>((0,a.dD)("data-v-78e3a2e3"),e=e(),(0,a.Cn)(),e),g={key:0,class:"website-left"},v=["onClick"],y={key:0,class:"website-left-box-edit"},k={class:"el-dropdown-link"},b={class:"website-left-add"},_=f((()=>(0,a._)("div",{style:{height:"40px"}},null,-1))),W={class:"website-right-box"},h=["id"],D={class:"website-right-title-box"},U={class:"box"},C={key:0,class:"jianjie"},x=["href"],j={class:"webUrl"},V=["src"],I={key:1,class:"bianji"},H={class:"el-dropdown-link"},S={class:"webBox"},T=f((()=>(0,a._)("div",{class:"jianjie"},"点击新增",-1))),q=["onClick"],B={class:"webBox"},z={key:0,class:"jianjie"},M={class:"webUrl"},L=["src"],E={class:"dialog-footer"},F=f((()=>(0,a._)("span",{class:"iconfont handle"},"",-1))),K={class:"log"},N={key:0},O=["innerHTML"],R=1689506611037;var Y={__name:"WebsiteView",setup(e){const l=(0,c.oR)(),t=(0,r.tv)();l.dispatch("createData");const f=w.Z.logData,Y=(0,n.iH)(!1);let Z=JSON.parse(localStorage.getItem("oldTime"));function $(){t.push("./updatalog"),localStorage.setItem("menuid",JSON.stringify("updatalog"))}(0,a.bv)((()=>{(!Z||R>Z)&&(Y.value=!0,Z=(new Date).getTime(),localStorage.setItem("oldTime",JSON.stringify(Z)))}));const A=(0,a.Fl)((()=>l.state.webArry));(0,a.m0)((()=>{1==A.value.length&&0==A.value[0].childers.length&&(0,s.bM)({title:"提示",message:'<span style="color:#F56C6C;">检测到当前分类子项为空，如需添加请点击右下方编辑按钮新增</span>',dangerouslyUseHTMLString:!0,duration:0})}));const J=(0,a.Fl)((()=>l.getters.getmessage)),P=(0,n.iH)(null),G=(0,n.iH)(!1),Q=(0,n.iH)(""),X=(0,n.iH)(!1),ee=(0,n.iH)(!1),le=(0,n.iH)(!1),te=(0,n.iH)(window.innerWidth),ae=(0,n.iH)(!1),oe=(0,n.iH)(!1);(0,a.m0)((()=>{te.value<500?le.value=!1:le.value=!0})),window.addEventListener("resize",(()=>{te.value=window.innerWidth}));const ie=(0,n.qj)({});(0,a.m0)((()=>{ie.selectData=A.value.map((e=>({title:e.title,value:e.key})))}));const ne=(0,n.iH)(null),se=(e,l,t)=>{const a=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;""===l||a.test(l)?t():t(new Error("请输入正确的网址"))},ue=(0,n.qj)({title:{required:!0,message:"请输入网站名称",trigger:"blur"},url:[{required:!0,message:"请输入网页地址",trigger:"blur"},{validator:se,trigger:"blur"}],imgUrl:[{validator:se,trigger:"blur"}]}),de=function(e,l,t){G.value=!0,Q.value="edit",ie.metaDataId=l.metaDataId,ie.sort=e.key,ie.title=l.webName,ie.url=l.url,ie.jianjie=l.jianjie,ie.imgUrl=l.imgUrl},re=function(e){G.value=!0,Q.value="add",ie.sort=e.key,ie.metaDataId=(new Date).getTime(),ie.imgUrl=""};function ce(){Object.keys(ie).forEach((e=>{"selectData"!=e&&delete ie[e]}));const e=document.getElementById("dailogImg");e.onload=null,e.onerror=null}const me=function(){ne.value.validate((e=>{e?("edit"==Q.value?l.commit("editData",ie):l.commit("addData",ie),(0,u.z8)({message:J.value.message,type:J.value.type}),"success"==J.value.type&&(G.value=!1,fe())):console.log("验证失败")}))},pe=function(e,t,a){d.T.confirm(`你确定要删除 <span style="color:#ec4141">${e.title}</span> 分类下的 <span style="color:#ec4141">${t.webName}</span> 吗?`,"警告",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消",dangerouslyUseHTMLString:!0,confirmButtonClass:"deleteButton"}).then((()=>{const a={key:e.key,metaDataId:t.metaDataId};l.commit("delData",a),(0,u.z8)({message:J.value.message,type:J.value.type}),"success"==J.value.type&&fe()})).catch((()=>{}))};function we(){const e=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;if(e.test(ie.url)){const e=new URL(ie.url);ie.imgUrl!=e.origin+"/favicon.ico"&&0==X.value&&(X.value=!0),ie.imgUrl=e.origin+"/favicon.ico";const l=document.getElementById("dailogImg");l.onload=function(){""!=ie.imgUrl&&(0,s.bM)({title:"成功",message:"图标获取成功!",type:"success"}),X.value=!1},l.onerror=function(){(0,s.bM)({title:"错误",message:"图标获取失败!",type:"error"}),ie.imgUrl="",X.value=!1}}else(0,u.z8)({message:"请输入正确的网址",type:"error"})}async function fe(){const e="DouDouDB",l="website",t=await m.ZP.openDB(e,l,1),a={id:1,data:JSON.stringify(A.value)};m.ZP.updateDB(t,l,a)}const ge=(0,n.qj)({}),ve=(0,n.iH)(null),ye=(0,n.qj)({title:{required:!0,message:"请输入标题名称",trigger:"blur"}});function ke(e,l){ge.type=e,"add"==ge.type?ge.key=(new Date).getTime():(ge.key=l.key,ge.title=l.title),oe.value=!0}function be(e){d.T.confirm(`你确定要删除 <span style="color:#ec4141">${e.title}</span> 这个分类吗?  </br>\n    警告：该操作会删除 <span style="color:#ec4141">${e.title}</span> 分类下的所有内容！\n    `,"警告",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消",dangerouslyUseHTMLString:!0,confirmButtonClass:"deleteButton"}).then((()=>{const t=e.key;l.commit("sortDel",t),(0,u.z8)({message:J.value.message,type:J.value.type}),"success"==J.value.type&&fe()})).catch((()=>{}))}function _e(){ve.value.validate((e=>{e&&("edit"==ge.type?l.commit("editSort",ge):l.commit("addSort",ge),(0,u.z8)({message:J.value.message,type:J.value.type}),"success"==J.value.type&&(oe.value=!1,fe()))}))}function We(){Object.keys(ge).forEach((e=>delete ge[e]))}let he,De={list:[],sortKey:"",type:""};function Ue(e,l){De.type=e,De.sortKey=l.key,De.list="web"==e?l.childers.map((e=>({name:e.webName,id:e.metaDataId}))):A.value.map((e=>({name:e.title,id:e.key}))),ae.value=!0}const Ce=()=>{if(!he){let e=document.querySelector(".el-table__body-wrapper tbody");he=p.ZP.create(e,{group:{name:"words",pull:!0,put:!0},handle:".handle",animation:150,onAdd(e){},onUpdate(e){},onRemove(e){},onStart:function(e){},onSort(e){},onEnd(e){if(e.oldIndex!==e.newIndex){let l,t,a=A.value.findIndex((e=>e.key==je.value));"web"==De.type?(l=A.value.findIndex((e=>e.key==De.sortKey)),-1!=l?(t=A.value[l].childers.splice(e.oldIndex,1)[0],A.value[l].childers.splice(e.newIndex,0,t),(0,u.z8)({message:"排序保存成功!",type:"success"}),fe()):(0,u.z8)({message:"获取分类名称索引值失败!",type:"error"})):(t=A.value.splice(e.oldIndex,1)[0],A.value.splice(e.newIndex,0,t),je.value=A.value[a].key,(0,u.z8)({message:"排序保存成功!",type:"success"}),fe())}}})}},xe=(0,n.iH)(null),je=(0,n.iH)(null),Ve=(0,n.iH)(!1),Ie=e=>{Ve.value=!0,je.value=e;let l=document.querySelector(`#${e}`);xe.value.scrollTo({top:l.offsetTop-40,behavior:"smooth"})},He=(0,n.qj)([]);let Se=new IntersectionObserver((e=>{let l=e[0].target.id,t=e[0].isIntersecting;if(t){let e=He.findIndex((e=>e==l));-1==e&&He.push(l)}else{let e=He.findIndex((e=>e==l));-1!==e&&He.splice(e,1)}if(Ve.value)return;let a="";for(const o of A.value)if(-1!==He.findIndex((e=>e===o.key))){a=o.key;break}je.value=a}),{threshold:[0,.25,.5,1]});const Te=()=>{for(const e of A.value){let l=document.querySelector(`#${e.key}`);He.push(e.key),Se.observe(l)}};return(0,a.bv)((()=>{let e=document.querySelector(".website-right-box");e.addEventListener("mousewheel",(()=>{Ve.value=!1})),setTimeout((()=>{"#/homeson/website"==window.location.hash&&Te()}),500)})),(0,a.Ah)((()=>{Se.disconnect()})),(e,l)=>{const t=(0,a.up)("More"),s=(0,a.up)("el-icon"),u=(0,a.up)("Edit"),d=(0,a.up)("el-dropdown-item"),r=(0,a.up)("Switch"),c=(0,a.up)("Delete"),m=(0,a.up)("el-dropdown-menu"),p=(0,a.up)("el-dropdown"),w=(0,a.up)("Plus"),R=(0,a.up)("el-scrollbar"),Z=(0,a.up)("el-aside"),J=(0,a.up)("el-main"),te=(0,a.up)("el-container"),se=(0,a.up)("el-tooltip"),fe=(0,a.up)("el-divider"),he=(0,a.up)("el-option"),Ve=(0,a.up)("el-select"),He=(0,a.up)("el-form-item"),Se=(0,a.up)("el-input"),Te=(0,a.up)("el-button"),qe=(0,a.up)("el-form"),Be=(0,a.up)("el-dialog"),ze=(0,a.up)("el-table-column"),Me=(0,a.up)("el-table");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(te,{class:"common-layout",ref_key:"divDom",ref:P},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[A.value.length?((0,a.wg)(),(0,a.iD)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(A.value,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"website-left-box",key:l},[(0,a._)("div",{class:(0,o.C_)({active:e.key==je.value}),onClick:l=>Ie(e.key),style:(0,o.j5)({paddingRight:ee.value?"20px":"0"})},[(0,a.Uk)((0,o.zw)(e.title)+" ",1),ee.value?((0,a.wg)(),(0,a.iD)("div",y,[(0,a.Wm)(p,{trigger:"click"},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onClick:l=>ke("edit",e)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),(0,a.Uk)("编辑")])),_:2},1032,["onClick"]),(0,a.Wm)(d,{onClick:l=>Ue("sort",e)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{style:{transform:"rotate(90deg)"}},{default:(0,a.w5)((()=>[(0,a.Wm)(r)])),_:1}),(0,a.Uk)("排序 ")])),_:2},1032,["onClick"]),(0,a.Wm)(d,{style:{color:"#F56C6C"},onClick:l=>be(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1}),(0,a.Uk)("删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a._)("span",k,[(0,a.Wm)(s,{class:"on-inline"},{default:(0,a.w5)((()=>[(0,a.Wm)(t)])),_:1})])])),_:2},1024)])):(0,a.kq)("",!0)],14,v)])))),128)),(0,a.Wm)(i.uT,{name:"bounce"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",{class:"website-left-box",onClick:l[0]||(l[0]=e=>ke("add"))},[(0,a._)("p",b,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w)])),_:1})])],512),[[i.F8,ee.value]])])),_:1})])):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{ref_key:"scrollbarRef",ref:xe},{default:(0,a.w5)((()=>[_,(0,a._)("div",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(A.value,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"website-right-title",key:l,id:e.key},[(0,a._)("div",D,[(0,a._)("h2",null,(0,o.zw)(e.title),1)]),(0,a._)("div",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.childers,((l,i)=>((0,a.wg)(),(0,a.iD)("div",{class:"webBox",key:i},[l.jianjie?((0,a.wg)(),(0,a.iD)("div",C,(0,o.zw)(l.jianjie),1)):(0,a.kq)("",!0),(0,a._)("a",{href:l.url,target:"_blank"},[(0,a._)("div",j,[(0,a._)("img",{src:l.imgUrl?l.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,V),(0,a._)("div",null,(0,o.zw)(l.webName),1)])],8,x),le.value?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(p,{trigger:"click"},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onClick:t=>de(e,l,i)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),(0,a.Uk)("编辑 ")])),_:2},1032,["onClick"]),(0,a.Wm)(d,{onClick:l=>Ue("web",e)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{style:{transform:"rotate(90deg)"}},{default:(0,a.w5)((()=>[(0,a.Wm)(r)])),_:1}),(0,a.Uk)("排序 ")])),_:2},1032,["onClick"]),(0,a.Wm)(d,{style:{color:"#F56C6C"},onClick:t=>pe(e,l,i)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1}),(0,a.Uk)("删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a._)("span",H,[(0,a.Wm)(s,{class:"on-inline"},{default:(0,a.w5)((()=>[(0,a.Wm)(t)])),_:1})])])),_:2},1024)])):(0,a.kq)("",!0)])))),128)),(0,a.Wm)(i.uT,{name:"bounce"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",S,[T,(0,a._)("p",{onClick:l=>re(e)},[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w)])),_:1})],8,q)],512),[[i.F8,ee.value]])])),_:2},1024)])],8,h)))),128))])])),_:1},512)])),_:1})])),_:1},512),le.value?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"editMode",onClick:l[1]||(l[1]=e=>ee.value=!ee.value)},[(0,a.Wm)(se,{class:"box-item",effect:"dark",content:"编辑模式",placement:"top"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1})])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(Be,{modelValue:G.value,"onUpdate:modelValue":l[8]||(l[8]=e=>G.value=e),title:"edit"==Q.value?"修改":"新增",width:"500",class:"tanceng",style:{"border-radius":"5px"},onClose:ce},{footer:(0,a.w5)((()=>[(0,a._)("span",E,[(0,a.Wm)(Te,{onClick:l[7]||(l[7]=e=>G.value=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(Te,{type:"primary",onClick:me,disabled:X.value},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled"])])])),default:(0,a.w5)((()=>[(0,a._)("div",(0,a.dG)({class:"box"},ie),[(0,a._)("div",B,[ie.jianjie?((0,a.wg)(),(0,a.iD)("div",z,(0,o.zw)(ie.jianjie),1)):(0,a.kq)("",!0),(0,a._)("a",null,[(0,a._)("div",M,[(0,a._)("img",{id:"dailogImg",src:ie.imgUrl?ie.imgUrl:"https://img.bidianer.com/image/icon/empty.svg"},null,8,L),(0,a._)("div",null,(0,o.zw)(ie.title),1)])])])],16),(0,a.Wm)(fe,{style:{"margin-top":"10px"}}),(0,a.Wm)(qe,{"label-width":"100px",rules:ue,ref_key:"ruleFormRef",ref:ne,model:ie,style:{"max-width":"460px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(He,{label:"分类"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ve,{disabled:"edit"==Q.value,modelValue:ie.sort,"onUpdate:modelValue":l[2]||(l[2]=e=>ie.sort=e),placeholder:"请选择一个分类"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(ie.selectData,((e,l)=>((0,a.wg)(),(0,a.j4)(he,{key:l,label:e.title,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["disabled","modelValue"])])),_:1}),(0,a.Wm)(He,{label:"网站名称",prop:"title"},{default:(0,a.w5)((()=>[(0,a.Wm)(Se,{modelValue:ie.title,"onUpdate:modelValue":l[3]||(l[3]=e=>ie.title=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(He,{label:"简介"},{default:(0,a.w5)((()=>[(0,a.Wm)(Se,{modelValue:ie.jianjie,"onUpdate:modelValue":l[4]||(l[4]=e=>ie.jianjie=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(He,{label:"网页地址",prop:"url"},{default:(0,a.w5)((()=>[(0,a.Wm)(Se,{modelValue:ie.url,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.url=e)},{append:(0,a.w5)((()=>[(0,a.Wm)(Te,{type:"primary",onClick:we},{default:(0,a.w5)((()=>[(0,a.Uk)("获取网页图标")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(He,{label:"网页图标地址",prop:"imgUrl"},{default:(0,a.w5)((()=>[(0,a.Wm)(Se,{clearable:"",modelValue:ie.imgUrl,"onUpdate:modelValue":l[6]||(l[6]=e=>ie.imgUrl=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","title"]),(0,a.Wm)(Be,{modelValue:ae.value,"onUpdate:modelValue":l[9]||(l[9]=e=>ae.value=e),title:"排序(拖动)",width:"300",class:"sortDialogs",onOpened:Ce},{default:(0,a.w5)((()=>[(0,a.Wm)(Me,{id:"table",data:(0,n.SU)(De).list,"row-key":"id",style:{width:"300px"},border:"",height:"300","show-overflow-tooltip":""},{default:(0,a.w5)((()=>[(0,a.Wm)(ze,{label:"排序",width:"60",align:"center"},{default:(0,a.w5)((e=>[F])),_:1}),(0,a.Wm)(ze,{prop:"name",label:"名称"})])),_:1},8,["data"])])),_:1},8,["modelValue"]),(0,a.Wm)(Be,{class:"sortDialog",modelValue:oe.value,"onUpdate:modelValue":l[12]||(l[12]=e=>oe.value=e),title:"edit"==ge.type?"修改分类名称":"新增分类",width:"500",onClose:We},{footer:(0,a.w5)((()=>[(0,a._)("span",null,[(0,a.Wm)(Te,{onClick:l[11]||(l[11]=e=>oe.value=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(Te,{type:"primary",onClick:_e},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1})])])),default:(0,a.w5)((()=>[(0,a.Wm)(qe,{model:ge,ref_key:"sortFormRule",ref:ve,rules:ye,"label-width":"120px"},{default:(0,a.w5)((()=>[(0,a.Wm)(He,{label:"分类名称",prop:"title"},{default:(0,a.w5)((()=>[(0,a.Wm)(Se,{clearable:"",modelValue:ge.title,"onUpdate:modelValue":l[10]||(l[10]=e=>ge.title=e),placeholder:"请输入分类名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),(0,a.Wm)(Be,{modelValue:Y.value,"onUpdate:modelValue":l[14]||(l[14]=e=>Y.value=e),title:"近期更新",class:"upDataLogDiaLog",width:"500","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:(0,a.w5)((()=>[(0,a._)("span",null,[(0,a.Wm)(Te,{type:"warning",onClick:l[13]||(l[13]=e=>Y.value=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("我知道啦")])),_:1}),(0,a.Wm)(Te,{type:"primary",onClick:$},{default:(0,a.w5)((()=>[(0,a.Uk)(" 查看更多更新日志 ")])),_:1})])])),default:(0,a.w5)((()=>[(0,a._)("div",K,[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(f),((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"log-box",key:l},[0==l?((0,a.wg)(),(0,a.iD)("ul",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.logs,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:l},[(0,a._)("span",{innerHTML:e},null,8,O)])))),128))])):(0,a.kq)("",!0)])))),128))])),_:1})])])),_:1},8,["modelValue"])],64)}}},Z=t(8484);const $=(0,Z.Z)(Y,[["__scopeId","data-v-78e3a2e3"]]);var A=$}}]);
//# sourceMappingURL=438.87204d15.js.map