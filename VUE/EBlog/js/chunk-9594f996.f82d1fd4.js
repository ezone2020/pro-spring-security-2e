(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9594f996"],{"12de":function(t,e,n){"use strict";var a=n("9efd"),i="/api/admin/themes",o={listAll:function(){return Object(a["a"])({url:"".concat(i),method:"get"})},listFilesActivated:function(){return Object(a["a"])({url:"".concat(i,"/activation/files"),method:"get"})},listFiles:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/files"),method:"get"})},customSheetTpls:function(){return Object(a["a"])({url:"".concat(i,"/activation/template/custom/sheet"),method:"get"})},customPostTpls:function(){return Object(a["a"])({url:"".concat(i,"/activation/template/custom/post"),method:"get"})},active:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/activation"),method:"post"})},getActivatedTheme:function(){return Object(a["a"])({url:"".concat(i,"/activation"),method:"get"})},update:function(t){return Object(a["a"])({url:"".concat(i,"/fetching/").concat(t),timeout:6e4,method:"put"})},delete:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t),method:"delete"})},fetchConfiguration:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/configurations"),method:"get"})},fetchSettings:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/settings"),method:"get"})},saveSettings:function(t,e){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/settings"),data:e,method:"post"})},getProperty:function(t){return Object(a["a"])({url:"".concat(i,"/").concat(t),method:"get"})},upload:function(t,e,n){return Object(a["a"])({url:"".concat(i,"/upload"),timeout:864e5,data:t,onUploadProgress:e,cancelToken:n,method:"post"})},updateByUpload:function(t,e,n,o){return Object(a["a"])({url:"".concat(i,"/upload/").concat(o),timeout:864e5,data:t,onUploadProgress:e,cancelToken:n,method:"put"})},fetching:function(t){return Object(a["a"])({url:"".concat(i,"/fetching"),timeout:6e4,params:{uri:t},method:"post"})},fetchingBranches:function(t){return Object(a["a"])({url:"".concat(i,"/fetchingBranches"),timeout:6e4,params:{uri:t},method:"post"})},fetchingReleases:function(t){return Object(a["a"])({url:"".concat(i,"/fetchingReleases"),timeout:6e4,params:{uri:t},method:"post"})},fetchingBranch:function(t,e){return Object(a["a"])({url:"".concat(i,"/fetchBranch"),timeout:6e4,params:{uri:t,branch:e},method:"get"})},fetchingLatestRelease:function(t){return Object(a["a"])({url:"".concat(i,"/fetchLatestRelease"),timeout:6e4,params:{uri:t},method:"get"})},fetchingRelease:function(t,e){return Object(a["a"])({url:"".concat(i,"/fetchingRelease"),timeout:6e4,params:{uri:t,tag:e},method:"get"})},getContent:function(t){return Object(a["a"])({url:"".concat(i,"/files/content"),params:{path:t},method:"get"})}};o.getContent=function(t,e){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/files/content"),params:{path:e},method:"get"})},o.saveContent=function(t,e){return Object(a["a"])({url:"".concat(i,"/files/content"),data:{path:t,content:e},method:"put"})},o.saveContent=function(t,e,n){return Object(a["a"])({url:"".concat(i,"/").concat(t,"/files/content"),data:{path:e,content:n},method:"put"})},o.reload=function(){return Object(a["a"])({url:"".concat(i,"/reload"),method:"post"})},o.exists=function(t){return Object(a["a"])({url:"".concat(i,"/activation/template/exists"),method:"get",params:{template:t}})},e["a"]=o},"33c9":function(t,e,n){"use strict";n.r(e);var a,i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-row",{attrs:{gutter:12}},[n("a-col",{staticClass:"pb-3",attrs:{xl:6,lg:6,md:6,sm:24,xs:24}},[n("a-card",{attrs:{bodyStyle:{padding:"16px"}}},[n("template",{slot:"title"},[n("a-select",{staticClass:"w-full",attrs:{loading:t.themesLoading},on:{change:t.onSelectTheme},model:{value:t.selectedTheme.id,callback:function(e){t.$set(t.selectedTheme,"id",e)},expression:"selectedTheme.id"}},t._l(t.themes,(function(e,a){return n("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.name)+" "),e.activated?n("a-icon",{attrs:{type:"check"}}):t._e()],1)})),1)],1),n("a-spin",{attrs:{spinning:t.filesLoading}},[t.files?n("theme-file",{attrs:{files:t.files},on:{listenToSelect:t.handleSelectFile}}):t._e()],1)],2)],1),n("a-col",{staticClass:"pb-3",attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[n("a-card",{attrs:{bodyStyle:{padding:"16px"}}},[n("a-form",{attrs:{layout:"vertical"}},[n("a-form-item",[n("codemirror",{attrs:{options:t.codemirrorOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("a-form-item",[n("ReactiveButton",{attrs:{loading:t.saving,errored:t.saveErrored,disabled:t.buttonDisabled,text:"保存",loadedText:"保存成功",erroredText:"保存失败"},on:{click:t.handlerSaveContent,callback:function(e){t.saveErrored=!1}}})],1)],1)],1)],1)],1)],1)},c=[],s=(n("7f7f"),n("12de")),r={name:"ThemeFile",props:{files:{type:Array,required:!1,default:function(){return[]}}},methods:{handleSelectFile:function(t){this.$emit("listenToSelect",t)},renderNode:function(t,e){var n=this,a=this;return e.node&&e.node.length?t("a-tree-node",{props:{key:e.path,title:e.name,isLeaf:e.isFile}},e.node.map((function(e){return n.renderNode(t,e)}))):t("a-tree-node",{props:{key:e.path,title:e.name,isLeaf:e.isFile},nativeOn:{click:function(){a.handleSelectFile(e)}}})}},render:function(t){var e=this;return this.files.length?t("a-directory-tree",this.files.map((function(n){return e.renderNode(t,n)}))):t("p","没有文件")}},l=r,u=n("2877"),d=Object(u["a"])(l,a,i,!1,null,null,null),h=d.exports,f=n("c884"),m=(n("d69f"),{components:{codemirror:f["codemirror"],ThemeFile:h},data:function(){return{buttonDisabled:!0,codemirrorOptions:{tabSize:4,mode:"text/html",lineNumbers:!0,line:!0},files:[],filesLoading:!1,file:{},content:"",themes:[],themesLoading:!1,selectedTheme:{},saving:!1,saveErrored:!1}},created:function(){this.handleGetActivatedTheme(),this.handleListThemeFiles(),this.handleListThemes()},methods:{handleGetActivatedTheme:function(){var t=this;s["a"].getActivatedTheme().then((function(e){t.selectedTheme=e.data.data}))},handleListThemeFiles:function(){var t=this;this.filesLoading=!0,s["a"].listFilesActivated().then((function(e){t.files=e.data.data})).finally((function(){setTimeout((function(){t.filesLoading=!1}),200)}))},handleListThemes:function(){var t=this;this.themesLoading=!0,s["a"].listAll().then((function(e){t.themes=e.data.data})).finally((function(){setTimeout((function(){t.themesLoading=!1}),200)}))},onSelectTheme:function(t){var e=this;this.files=[],this.filesLoading=!0,s["a"].listFiles(t).then((function(t){e.files=t.data.data,e.content="",e.file={}})).finally((function(){setTimeout((function(){e.filesLoading=!1}),200)}))},handleSelectFile:function(t){var e=this,n=this;if(!t.editable)return this.$message.info("该文件不支持修改！"),this.content="",this.file={},void(this.buttonDisabled=!0);"settings.yaml"!==t.name&&"settings.yml"!==t.name&&"theme.yaml"!==t.name&&"theme.yml"!==t.name||this.$confirm({title:"警告：请谨慎修改该配置文件",content:"修改之后可能会产生不可预料的问题！",onCancel:function(){n.content="",n.file={},n.buttonDisabled=!0}}),s["a"].getContent(this.selectedTheme.id,t.path).then((function(n){e.content=n.data.data,e.file=t,e.buttonDisabled=!1}))},handlerSaveContent:function(){var t=this;this.saving=!0,s["a"].saveContent(this.selectedTheme.id,this.file.path,this.content).catch((function(){t.saveErrored=!0})).finally((function(){setTimeout((function(){t.saving=!1}),400)}))}}}),p=m,g=Object(u["a"])(p,o,c,!1,null,null,null);e["default"]=g.exports}}]);