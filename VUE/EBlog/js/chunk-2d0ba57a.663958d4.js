(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba57a"],{3799:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"pb-3",attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[a("a-card",{attrs:{title:t.title,bodyStyle:{padding:"16px"}}},[a("a-form-model",{ref:"linkForm",attrs:{model:t.form.model,rules:t.form.rules,layout:"horizontal"}},[a("a-form-model-item",{attrs:{label:"网站名称：",prop:"name"}},[a("a-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{label:"网站地址：",help:"* 需要加上 http://",prop:"url"}},[a("a-input",{model:{value:t.form.model.url,callback:function(e){t.$set(t.form.model,"url",e)},expression:"form.model.url"}})],1),a("a-form-model-item",{attrs:{label:"Logo：",prop:"logo"}},[a("a-input",{model:{value:t.form.model.logo,callback:function(e){t.$set(t.form.model,"logo",e)},expression:"form.model.logo"}})],1),a("a-form-model-item",{attrs:{label:"分组：",prop:"team"}},[a("a-auto-complete",{attrs:{dataSource:t.teams,allowClear:""},model:{value:t.form.model.team,callback:function(e){t.$set(t.form.model,"team",e)},expression:"form.model.team"}})],1),a("a-form-model-item",{attrs:{label:"排序编号：",prop:"priority"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:t.form.model.priority,callback:function(e){t.$set(t.form.model,"priority",e)},expression:"form.model.priority"}})],1),a("a-form-model-item",{attrs:{label:"描述：",prop:"description"}},[a("a-input",{attrs:{type:"textarea",autoSize:{minRows:5}},model:{value:t.form.model.description,callback:function(e){t.$set(t.form.model,"description",e)},expression:"form.model.description"}})],1),a("a-form-model-item",[t.isUpdateMode?a("a-button-group",[a("ReactiveButton",{attrs:{type:"primary",loading:t.form.saving,errored:t.form.errored,text:"更新",loadedText:"更新成功",erroredText:"更新失败"},on:{click:t.handleCreateOrUpdateLink,callback:t.handleSavedCallback}}),t.isUpdateMode?a("a-button",{attrs:{type:"dashed"},on:{click:function(e){t.form.model={}}}},[t._v("返回添加")]):t._e()],1):a("ReactiveButton",{attrs:{type:"primary",loading:t.form.saving,errored:t.form.errored,text:"保存",loadedText:"保存成功",erroredText:"保存失败"},on:{click:t.handleCreateOrUpdateLink,callback:t.handleSavedCallback}})],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[a("a-card",{attrs:{title:"所有友情链接",bodyStyle:{padding:"16px"}}},[t.isMobile()?a("a-list",{attrs:{itemLayout:"vertical",size:"large",dataSource:t.table.data,loading:t.table.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e,o){return a("a-list-item",{key:o},[a("template",{slot:"actions"},[a("a-dropdown",{attrs:{placement:"topLeft",trigger:["click"]}},[a("span",[a("a-icon",{attrs:{type:"bars"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){t.form.model=e}}},[t._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要删除【"+e.name+"】链接？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return t.handleDeleteLink(e.id)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)],1)],1)],1),a("template",{slot:"extra"},[a("span",[t._v(" "+t._s(e.team)+" ")])]),a("a-list-item-meta",[a("template",{slot:"description"},[t._v(" "+t._s(e.description)+" ")]),a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name)+" ")])],2),a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])],2)}}],null,!1,4130435788)}):a("a-table",{attrs:{columns:t.table.columns,dataSource:t.table.data,loading:t.table.loading,rowKey:function(t){return t.id},scrollToFirstRowOnChange:!0},scopedSlots:t._u([{key:"url",fn:function(e){return[a("a",{attrs:{target:"_blank",href:e}},[t._v(t._s(e))])]}},{key:"name",fn:function(e){return a("ellipsis",{attrs:{length:15,tooltip:""}},[t._v(t._s(e))])}},{key:"action",fn:function(e,o){return a("span",{},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.form.model=o}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"你确定要删除【"+o.name+"】链接？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleDeleteLink(o.id)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)}}])})],1)],1)],1),a("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[a("a-button",{attrs:{type:"primary",shape:"circle",icon:"setting",size:"large"},on:{click:function(e){t.optionsModal.visible=!0}}})],1),a("a-modal",{attrs:{title:"页面设置",afterClose:function(){return t.optionsModal.visible=!1}},model:{value:t.optionsModal.visible,callback:function(e){t.$set(t.optionsModal,"visible",e)},expression:"optionsModal.visible"}},[a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(e){return t.handleSaveOptions()}}},[t._v("保存")])],1),a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"页面标题：",help:"* 需要主题进行适配"}},[a("a-input",{model:{value:t.optionsModal.data.links_title,callback:function(e){t.$set(t.optionsModal.data,"links_title",e)},expression:"optionsModal.data.links_title"}})],1)],1)],2)],1)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62"),l=a("ac0d"),s=a("482b"),c=a("9efd"),d="/api/admin/links",m={listAll:function(){return Object(c["a"])({url:"".concat(d),method:"get"})},create:function(t){return Object(c["a"])({url:d,data:t,method:"post"})},get:function(t){return Object(c["a"])({url:"".concat(d,"/").concat(t),method:"get"})},getByParse:function(t){return Object(c["a"])({url:"".concat(d,"/parse"),params:{url:t},method:"get"})},update:function(t,e){return Object(c["a"])({url:"".concat(d,"/").concat(t),data:e,method:"put"})},delete:function(t){return Object(c["a"])({url:"".concat(d,"/").concat(t),method:"delete"})},listTeams:function(){return Object(c["a"])({url:"".concat(d,"/teams"),method:"get"})}},u=m;function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h=[{title:"名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"网址",dataIndex:"url",ellipsis:!0,scopedSlots:{customRender:"url"}},{title:"分组",ellipsis:!0,dataIndex:"team"},{title:"排序",dataIndex:"priority"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],g={mixins:[l["a"],l["b"]],data:function(){return{table:{columns:h,data:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 友情链接名称不能为空",trigger:["change"]},{max:255,message:"* 友情链接名称的字符长度不能超过 255",trigger:["change"]}],url:[{required:!0,message:"* 友情链接地址不能为空",trigger:["change"]},{max:1023,message:"* 友情链接地址的字符长度不能超过 1023",trigger:["change"]},{type:"url",message:"* 友情链接地址格式有误",trigger:["change"]}],logo:[{max:1023,message:"* 友情链接 Logo 的字符长度不能超过 1023",trigger:["change"]}],description:[{max:255,message:"* 友情链接描述的字符长度不能超过 255",trigger:["change"]}],team:[{max:255,message:"* 友情链接分组的字符长度 255",trigger:["change"]}]}},optionsModal:{visible:!1,data:[]},teams:[]}},computed:{title:function(){return this.isUpdateMode?"修改友情链接":"添加友情链接"},isUpdateMode:function(){return!!this.form.model.id}},created:function(){this.handleListLinks(),this.handleListLinkTeams(),this.handleListOptions()},methods:p(p({},Object(i["b"])(["refreshOptionsCache"])),{},{handleListLinks:function(){var t=this;this.table.loading=!0,u.listAll().then((function(e){t.table.data=e.data.data})).finally((function(){setTimeout((function(){t.table.loading=!1}),200)}))},handleListLinkTeams:function(){var t=this;u.listTeams().then((function(e){t.teams=e.data.data}))},handleListOptions:function(){var t=this;s["a"].listAll().then((function(e){t.optionsModal.data=e.data.data}))},handleDeleteLink:function(t){var e=this;u.delete(t).then((function(t){e.$message.success("删除成功！")})).finally((function(){e.handleListLinks(),e.handleListLinkTeams()}))},handleParseUrl:function(){var t=this;u.getByParse(this.form.model.url).then((function(e){t.form.model=e.data.data}))},handleCreateOrUpdateLink:function(){var t=this,e=this;e.$refs.linkForm.validate((function(a){a&&(e.form.saving=!0,e.isUpdateMode?u.update(e.form.model.id,e.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})):u.create(e.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})))}))},handleSavedCallback:function(){var t=this;t.form.errored?t.form.errored=!1:(t.form.model={},t.handleListLinks(),t.handleListLinkTeams())},handleSaveOptions:function(){var t=this;s["a"].save(this.optionsModal.data).then((function(e){t.$message.success("保存成功！"),t.optionsModal.visible=!1})).finally((function(){t.handleListOptions(),t.refreshOptionsCache()}))}})},b=g,v=a("2877"),k=Object(v["a"])(b,o,r,!1,null,null,null);e["default"]=k.exports}}]);