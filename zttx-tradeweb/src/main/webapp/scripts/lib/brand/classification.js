var pictureManagement1={init:function(){this.seajsuseData(),this.checkAll(),this.zlipCopy()},seajsuseData:function(){seajs.use(["calendar","calendar_style"],function(a){if(0!=$("#start-cal").length){$("#start-cal,#end-cal").addClass("hasDatepicker");new a({trigger:"#start-cal"}),new a({trigger:"#end-cal"})}})},checkAll:function(){$(document).on("click","input[name=allchecked]:checkbox",function(){$("input[name=piclist]:checkbox").prop("checked",this.checked)}),$("input[name=piclist]:checkbox").click(function(){var a=$("[name=piclist]:checkbox");$("input[name=allchecked]:checkbox").attr("checked",a.length==a.filter(":checked").length)})},zlipCopy:function(){var a=this;$(".checkallbox").on("mouseover",function(){a.getCopy()}),this.copyEvent(".copythislink"),this.copyEvent(".copythiscode"),$(".flash_copy").each(function(){a.copyEvent($(this))})},copyEvent:function(a,b){seajs.use(["zeroclipboard"],function(b){var c=new b($(a),{moviePath:window.SWF_ZeroClipboard_URL});c.on("load",function(a){c.addEventListener("complete",function(a,b){""==b.text?remind("error","请选择一张图片"):remind("success","复制成功")})})})},getCopy:function(){var a=[],b=[];$("[name=piclist]:checkbox:checked").each(function(){var c=$(this),d=c.parentsUntil(".contant").find(".imgbox"),e=d.find("a").attr("href"),f='<img src="'+d.find("img").attr("src")+'" />';a.push(e),b.push(f)}),$("#copy_links_hidden").val(a.join("\r\n")),$("#copy_codes_hidden").val(b.join("<br />"))}},pictureManagement2={init:function(){this.seajscllo(),this.ztreeToggle()},seajscllo:function(){seajs.use(["jscroll","$"],function(a,$){$("#test1").jscrollbar({width:8,color:"#ccc",opacity:.7,position:"inner",mouseScrollDirection:"horizontal"})})},ztreeToggle:function(){$(".ztreeP span.toggleH").click(function(){$(".zatree").toggle(),$(".zatree").is(":hidden")&&$("#flashButton").show(),$(".zatree").is(":visible")&&$("#flashButton").hide()})}},pictureManagement={init:function(){this.seajsuseData(),this.movEdit(),this.removePic(),this.checkAll(),this.seajscllo()},seajsuseData:function(){seajs.use(["calendar","calendar_style"],function(a){if(0!=$("#start-cal").length){$("#start-cal,#end-cal").addClass("hasDatepicker");new a({trigger:"#start-cal"}),new a({trigger:"#end-cal"})}})},seajscllo:function(){seajs.use(["jscroll","$"],function(a,$){$("#test1").jscrollbar({width:8,color:"#ccc",opacity:.7,position:"inner",mouseScrollDirection:"horizontal"})})},movEdit:function(){function a(){$(document).on("click",".newclass",function(){var a='<tbody><tr class="maintree"><input type="hidden" name="uuid" value=" "/><input type="hidden" name="parentId" value=" "/><input type="hidden" name="level" value="1"/><td class="td_0"><input type="checkbox"class="ui-checkbox newclasschk mainclasschk"></td><td class="td_1"><i id="trplus" class="main_iconskai"></i></td><td class="td_2"><input type="text" class="newclasstext" value="" name="cateName" /></td><td class="td_3"><span class="addsubclass">添加子分类</span></td><td class="td_4"><div class="movebox"><span class="moveup mainmoveup" title="上移"></span> <span class="movedown mainmovedown" title="下移"></span></div></td><td class="td_5"><span class="delete">删除</span></td></tr></tbody>';$(".table").find("tbody:last").after(a),c(),g()})}function b(){$(document).on("click",".addsubclass",function(){$(this).parents("tbody").find("tr:last").after('<tr class="subtree"><input type="hidden" name="uuid"/><input type="hidden" name="parentId" value=" "/><input type="hidden" name="level" value="2"/><td class="td_0"><input type="checkbox"class="ui-checkbox newclasschk"></td><td class="td_1"></td><td class="td_2"><div class="sub_zhe inline-block fl"></div><input type="text" class="newclasstext" name="cateName"/></td><td class="td_3"></td><td class="td_4"><div class="movebox"><span class="moveup submoveup" title="上移"></span> <span class="movedown submovedown" title="下移"></span></div></td><td class="td_5"><span class="delete">删除</span></td></tr>');var a=$(this).parents("tbody").find("tr.maintree input[type=hidden][name=uuid]").val();""!=a&&$(this).parents("tbody").find("tr.subtree input[type=hidden][name=parentId]").val(a),$(this).parents("tbody").find("tr").show(),$(this).parents("tbody").find("tr:last").find(".newclasstext").focus();var b=$(this).parent().parent().nextAll();$(b).is(":visible")?$(this).parent().parent().find("#trplus").addClass("main_iconsguan"):$(this).parent().parent().find("#trplus").removeClass().addClass("main_iconskai"),d(),g()})}function c(){1==$(".table tbody").children("tr.maintree").size()&&$(".table tbody").find("tr.maintree").removeClass("subnormal").removeClass("sublast").removeClass("subfirst").addClass("subonly"),2==$(".table tbody").children("tr.maintree").size()&&($(".table tbody tr.maintree:eq(0)").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table tbody tr.maintree:eq(1)").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast")),$(".table tbody").children("tr.maintree").size()>=3&&($(".table tbody tr.maintree:gt(0)").removeClass("subonly").removeClass("subfirst").removeClass("sublast").addClass("subnormal"),$(".table tbody tr.maintree:first").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table tbody tr.maintree:last").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast"))}function d(){$(".table").find("tbody").each(function(){1==$(this).children("tr.subtree").size()&&$(this).find("tr.subtree").removeClass("subnormal").removeClass("sublast").removeClass("subfirst").addClass("subonly"),2==$(this).children("tr.subtree").size()&&($(this).find("tr.subtree:eq(0)").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(this).find("tr.subtree:eq(1)").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast")),$(this).children("tr.subtree").size()>=3&&($(this).find("tr.subtree:gt(0)").removeClass("subonly").removeClass("subfirst").removeClass("sublast").addClass("subnormal"),$(this).find("tr.subtree:first").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(this).find("tr.subtree:last").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast"))})}function e(){$(document).on("click","span.mainmoveup",function(){var a=$(this).parent().parent().parent().parent(),b=$(this).parent().parent().parent().parent().prev();return $(this).parent().parent().parent().hasClass("subonly")||$(this).parent().parent().parent().hasClass("subfirst")?!1:($(b).before(a),void c())}),$(document).on("click","span.mainmovedown",function(){var a=$(this).parent().parent().parent().parent(),b=$(this).parent().parent().parent().parent().next();return $(this).parent().parent().parent().parent().hasClass("sublast")||$(this).parent().parent().parent().parent().hasClass("subonly")?!1:($(b).after(a),void c())})}function f(){$(document).on("click","span.submoveup",function(){var a=$(this).parent().parent().parent(),b=$(this).parent().parent().parent().prev();return a.hasClass("subonly")||a.hasClass("subfirst")?!1:($(b).before(a),void d())}),$(document).on("click","span.submovedown",function(){var a=$(this).parent().parent().parent(),b=$(this).parent().parent().parent().next();return a.hasClass("sublast")||a.hasClass("subonly")?!1:($(b).after(a),void d())})}function g(){$(".table tbody").keyup(function(){$("#saveclasses").addClass("saveclass")})}a(),b(),c(),d(),e(),f(),$("#trplus").each(function(){var a=$(this).parent().parent().nextAll();$(a).is(":visible")?$(this).addClass("main_iconsguan"):$(this).removeClass().addClass("main_iconskai")}),$(document).on("click","#trplus",function(){var a=$(this).parent().parent().nextAll();$(a).toggle(),$(a).is(":visible")?$(this).addClass("main_iconsguan"):$(this).removeClass().addClass("main_iconskai")}),$(document).on("click",".subtree td .delete",function(){$(this).parent().parent().remove(),$("#saveclasses").addClass("saveclass"),d()}),$(document).on("click",".maintree td .delete",function(){var a=$(this).parent().parent().parent();a.remove(),$("#saveclasses").addClass("saveclass")}),g(),$(document).on("click",".chkALL",function(){$("input[type=checkbox].newclasschk").prop("checked",this.checked)}),$(document).on("click",".mainclasschk",function(){$(this).parent().parent().parent().find("input[type=checkbox].newclasschk").prop("checked",this.checked)})},removePic:function(){$(".uploadtable").on("click",".removepic",function(){$(this).parent().parent().remove()})},checkAll:function(){$(document).on("click",".CheckBox",function(){$(this).hasClass("checked")?($("[name=piclist]").attr("checked","checked"),$(this).parent().parent().next().find(".CheckBox").addClass("checked")):($("[name=piclist]").attr("checked","false"),$(this).parent().parent().next().find(".CheckBox").removeClass("checked"))});$(".contant .js_chk").length}};