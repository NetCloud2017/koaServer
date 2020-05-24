(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c49c9"],{"3c25":function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.menuList,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"},"expand-row-keys":e.expandKeys}},[t("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"path",label:"访问路径"}}),e._v(" "),t("el-table-column",{attrs:{prop:"component",label:"组件路径"}}),e._v(" "),t("el-table-column",{attrs:{prop:"permissionValue",label:"权限值"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[e.$hasBP("permission.add")?t("HintButton",{attrs:{disabled:4===i.row.level,type:"primary",icon:"el-icon-plus",size:"mini",title:e.getAddTitle(i.row)},on:{click:function(t){return e.handleClickAdd(i.row)}}}):e._e(),e._v(" "),4==i.row.level&&e.$hasBP("permission.update")?t("HintButton",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",title:"修改功能"},on:{click:function(t){return e.toUpdatePer(i.row)}}}):e._e(),e._v(" "),4!=i.row.level&&e.$hasBP("permission.update")?t("HintButton",{attrs:{disabled:1===i.row.level,type:"primary",icon:"el-icon-edit",size:"mini",title:"修改"},on:{click:function(t){return e.toUpdateMenu(i.row)}}}):e._e(),e._v(" "),e.$hasBP("permission.remove")?t("HintButton",{attrs:{disabled:1===i.row.level,type:"danger",icon:"el-icon-delete",size:"mini",title:"删除"},on:{click:function(t){return e.removeNode(i.row)}}}):e._e()]}}])})],1),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogFormVisible,title:e.menu.name?"修改菜单":"添加子菜单"},on:{"update:visible":function(i){e.dialogFormVisible=i}}},[t("el-form",{ref:"menu",attrs:{model:e.menu,rules:e.menuValidateRules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[t("el-input",{model:{value:e.menu.name,callback:function(i){e.$set(e.menu,"name",i)},expression:"menu.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"访问路径",prop:"path"}},[t("el-input",{model:{value:e.menu.path,callback:function(i){e.$set(e.menu,"path",i)},expression:"menu.path"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"组件路径",prop:"component"}},[t("el-input",{model:{value:e.menu.component,callback:function(i){e.$set(e.menu,"component",i)},expression:"menu.component"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"组件图标",prop:"icon"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.menu.icon,callback:function(i){e.$set(e.menu,"icon",i)},expression:"menu.icon"}},e._l(e.svgNames,(function(i){return t("el-option",{key:i,attrs:{label:i,value:i}},[t("svg-icon",{staticStyle:{float:"left"},attrs:{"icon-class":i}}),e._v(" "),t("span",{staticStyle:{float:"right"}},[e._v(e._s(i))])],1)})),1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.restData}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogPermissionVisible,title:"添加功能"},on:{"update:visible":function(i){e.dialogPermissionVisible=i}}},[t("el-form",{ref:"permission",attrs:{model:e.permission,rules:e.permissionValidateRules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"功能名称",prop:"name"}},[t("el-input",{model:{value:e.permission.name,callback:function(i){e.$set(e.permission,"name",i)},expression:"permission.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"访问路径"}},[t("el-input",{model:{value:e.permission.path,callback:function(i){e.$set(e.permission,"path",i)},expression:"permission.path"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"组件路径"}},[t("el-input",{model:{value:e.permission.component,callback:function(i){e.$set(e.permission,"component",i)},expression:"permission.component"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"功能权限值",prop:"permissionValue"}},[t("el-input",{model:{value:e.permission.permissionValue,callback:function(i){e.$set(e.permission,"permissionValue",i)},expression:"permission.permissionValue"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.restData}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.addOrUpdatePermission}},[e._v("确 定")])],1)],1)],1)},n=[],o=t("db72"),a=t("985d"),l={name:"",pid:0,path:"",component:"",type:"1"},r={permissionValue:"",type:"2",name:"",path:"",component:"",pid:0},m={name:"AuthMenus",data:function(){return this.svgNames=a["a"],console.log("---",a["a"]),{expandKeys:[],filterText:"",menuList:[],defaultProps:{children:"children",label:"name"},dialogFormVisible:!1,dialogPermissionVisible:!1,menu:l,permission:r,menuValidateRules:{name:[{required:!0,trigger:"blur",message:"菜单名必须输入"}],path:[{required:!0,trigger:"blur",message:"菜单路径必须输入"}],component:[{required:!0,trigger:"blur",message:"组件名称必须输入"}]},permissionValidateRules:{name:[{required:!0,trigger:"blur",message:"功能名称必须输入"}],permissionValue:[{required:!0,trigger:"blur",message:"功能权限值必须输入"}]}}},mounted:function(){this.fetchTreeList()},methods:{getAddTitle:function(e){return 1===e.level||2===e.level?"添加子菜单":3===e.level?"添加功能":void 0},handleClickAdd:function(e){1===e.level||2===e.level?(this.dialogFormVisible=!0,this.menu.pid=e.id):3===e.level&&(this.dialogPermissionVisible=!0,this.permission.pid=e.id)},fetchTreeList:function(){var e=this;this.$API.menu.getNestedTreeList().then((function(i){!0===i.success&&(e.menuList=i.data.children,e.expandKeys=[e.menuList[0].id])}))},removeNode:function(e){var i=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return i.$API.menu.removeById(e.id)})).then((function(){i.fetchTreeList(),i.$message({type:"success",message:"删除成功!"})})).catch((function(e){"cancel"===e?i.$message({type:"info",message:"已取消删除"}):i.$message({type:"error",message:"删除失败"})}))},addOrUpdatePermission:function(){var e=this;this.$refs.permission.validate((function(i){i&&(e.permission.id?e.update(e.permission):e.$API.menu.savePermission(e.permission).then((function(i){e.dialogPermissionVisible=!1,e.$message({type:"success",message:"添加功能成功"}),e.fetchTreeList(),e.menu=Object(o["a"])({},l),e.permission=Object(o["a"])({},r)})))}))},appendLevelOne:function(){var e=this;this.$API.menu.savePermission(this.menu).then((function(i){e.dialogFormVisible=!1,e.$message({type:"success",message:"添加一级菜单成功"}),e.fetchTreeList(),e.menu=Object(o["a"])({},l),e.permission=Object(o["a"])({},r)})).catch((function(i){e.dialogFormVisible=!1,e.$message({type:"error",message:"添加一级菜单失败"}),e.menu=Object(o["a"])({},l),e.permission=Object(o["a"])({},r)}))},appendLevelTwo:function(){var e=this;this.$API.menu.savePermission(this.menu).then((function(i){e.dialogFormVisible=!1,e.$message({type:"success",message:"添加二级分类成功"}),e.fetchTreeList(),e.menu=Object(o["a"])({},l),e.permission=Object(o["a"])({},r)})).catch((function(i){e.dialogFormVisible=!1,e.$message({type:"error",message:"添加二级分类失败"}),e.menu=Object(o["a"])({},l),e.permission=Object(o["a"])({},r)}))},append:function(){var e=this;this.$refs.menu.validate((function(i){i&&(e.menu.id?e.update(e.menu):0==e.menu.pid?e.appendLevelOne():e.appendLevelTwo())}))},update:function(e){var i=this;this.$API.menu.update(e).then((function(e){i.dialogFormVisible=!1,i.$message({type:"success",message:"修改成功"}),i.fetchTreeList(),i.restData()}))},toUpdateMenu:function(e){this.dialogFormVisible=!0,this.menu=e},toUpdatePer:function(e){this.dialogPermissionVisible=!0,this.permission=e},restData:function(){this.dialogPermissionVisible=!1,this.dialogFormVisible=!1,this.menu=Object(o["a"])({},l),this.permission=Object(o["a"])({},r)}}},u=m,c=t("2877"),p=Object(c["a"])(u,s,n,!1,null,null,null);i["default"]=p.exports}}]);