var arr=[],publishGoods={init:function(a,b){this.baseValidator(),this.countListen(),this.itemClick(),this.checkAll(),this.setPrice(),this.selectClass(a,b),this.deleteImg(),this.deleteColorImg()},baseValidator:function(){createEditor("umeditor",680,300),seajs.use(["validator"],function(a){var b=new a({element:".publishForm",failSilently:!0});b.set("autoSubmit",!1),a.addRule("pTitle",function(a){var b=a.element.val(),c=getCharLength(b);return 1>c||c>60?!1:!0},"标题必须在1-60个字符内"),b.addItem({element:"input[name=productTitle]",required:!0,rule:"pTitle",errormessageRequired:"标题必须在1-60个字符内"}).addItem({element:"input[name=costPrice]",required:!0,rule:'minlength{"min":0}'}).addItem({element:"input[name=marketPrice]",required:!0,rule:'minlength{"min":0}'}).addItem({element:"input[name=salePrice]",required:!0,rule:'minlength{"min":0}'}).addItem({element:"input[name=productNo]",required:!0,rule:'minlength{"min":0}'}).addItem({element:".select-category",required:!0,rule:'minlength{"min":0}'}).addItem({element:".select-class",required:!0,rule:'minlength{"min":0}'}).addItem({element:"input[name=brandsName]",required:!0,rule:'minlength{"min":0}'}).addItem({element:"input[name=productStore]",required:!0,rule:'minlength{"min":0}'}),b.on("formValidated",function(a,b,c){if(!a){var d=UM.getEditor("umeditor").getContent();0!==$(".choose_result  #show_img li").length?""!==d?$.ajax({type:"post",url:"/dealer/weshop/product/saveOrUpdate",dataType:"json",data:$(".publishForm").serialize(),success:function(a){121e3==a.code?remind("success","保存成功"):remind("error",a.message)}}):remind("error","请填写产品描述"):remind("error","请上传产品主图")}})})},countListen:function(){$(".publishTitle").on("keyup paste copy",function(){var a=60,b=getCharLength(this.value);b>a||$("#count").html(a-b)})},itemCheck:function(){$(".js-itemsCheck").each(function(){var a=$(this).parents(".item-classes-items");$(this).prop("checked")?a.addClass("edit"):a.removeClass("edit")})},itemClick:function(){var a=this;$("#color-other").on("click",".js-itemsCheck",function(){a.globleArr(),a.itemCheck(),a.initOtherData()})},checkAll:function(){var a=this;$("#color-other").on("click",".js-checkall",function(){var b=$(this).parents(".item-classes");b.find(".js-itemsCheck").prop("checked",this.checked),a.globleArr(),a.itemCheck(),a.initOtherData()})},initOtherData:function(){function initData(a){var b=[];return $(a).each(function(){var a=$(this).parents(".item-classes-items");if($(this).prop("checked")){var c={},d=a.find(".itemattr").text(),e=a.find(".refrenceId").val(),f=a.find(".colorarea").data("color"),g=a.find(".colorarea").data("price");(""==g||void 0==g)&&(g=0),c.v=d,c.vid=e,""==f||void 0==f?c.color=0:c.color=f,c.p=g,b.push(c)}}),b}var _data_color=initData("#colorClass .js-itemsCheck");if($("#otherClass").length>0){var _data_other=initData("#otherClass .js-itemsCheck"),_len_color=_data_color.length,_len_other=_data_other.length,_data="[";$.each(_data_color,function(a,b){_data+='{"v":"'+b.v+'","vid":"'+b.vid+'","val":[',$.each(_data_other,function(a,c){_data+='{"p":"'+c.p+'","v":"'+c.v+'","vid":"'+c.vid+'","cid":"'+b.vid+'"}',a!==_len_other-1&&(_data+=",")}),_data+="]}",a!==_len_color-1&&(_data+=",")}),_data+="]";var _data_mix=eval("("+_data+")");this.initItems(_data_color),this.initOtherItems(_data_mix)}else this.initAloneColor(_data_color);this.setArr(arr)},initItems:function(a){var b;$.each(a,function(a,c){b+="<tr>",b+="<td>",c.color.toString().length>6?(b+='<div class="inline-block colorarea" data-color="'+c.color+'">',b+='<img src="'+c.color+'" width="13" height="13">',b+="</div>"):c.color.toString().length<6||c.color.toString().length>1?b+='<div class="inline-block colorarea" style="background:#'+c.color+';" data-color="'+c.color+'"></div>':1==c.color.toString().length,b+="<span>"+c.v+"</span>",b+="</td><td>",b+='<div class="file_wrap inline-block">',b+='<a class="ui-button ui-button-lwhite">文件上传</a>',b+='<input type="file" value="文件上传" name="file" class="input_file" id="colorImg_'+c.vid+'" onchange="publishGoods.uploadImage(\'colorImg_'+c.vid+"');\">",b+="</div>",b+='<a href="javascript:;" class="link colorImg-delete" style="margin-left:10px;">删除</a>',b+="</td></tr>"}),$(".js-colortable tbody").empty().append(b),""==$(".js-colortable tbody").text()?$(".js-colortable").hide():$(".js-colortable").show()},initOtherItems:function(a){seajs.use(["template"],function(b){var c=b.render("othertable",a);$(".js-othertable").remove(),$(".js-classtip").before(c);var d=$("#otherClass .js-itemsCheck:checked").size();$(".js-colortable tbody").length>0?""==$(".js-colortable tbody").text()||0==d?($(".js-othertable").hide(),$(".js-classtip").show()):($(".js-othertable").show(),$(".js-classtip").hide()):0==$(".js-colortable tbody").length&&(""==$(".js-othertable tbody").text()||0==d?($(".js-othertable").hide(),$(".js-classtip").show()):($(".js-othertable").show(),$(".js-classtip").hide())),$(".js-number").isPrice(!1)})},initAloneColor:function(a){seajs.use(["template"],function(b){var c=b.render("coloralonetable",a),d=$("#colorClass .js-itemsCheck:checked").size();$(".js-othertable").remove(),$(".js-classtip").before(c),""==$(".js-othertable tbody").text()||0==d?($(".js-othertable").hide(),$(".js-classtip").show()):($(".js-othertable").show(),$(".js-classtip").hide())})},setPrice:function(){var a=this;$("#color-other").on("change",".priceinput",function(){a.globleArr()}),$("#color-other").on("click",".js-setprice",function(){var b=$(this).parents("tr"),c=b.find(".priceinput").val();$(".js-othertable .priceinput").val(c),a.globleArr()})},globleArr:function(){$(".js-othertable input[id^=priceIuput_]").each(function(){var a={},b=$(this).attr("id"),c=$(this).val();a.id=b,a.p=c,arr.push(a)})},setArr:function(a){var b=a;$.each(b,function(a,b){$("#"+b.id).val(b.p)})},selectClass:function(a,b){function c(a,b){$.each(a,function(a,c){var d='<option value="'+c.id+'">'+c.item+"</option>";$(d).appendTo(b)})}var d=this;c(a,".select-category"),$(".publishForm").on("change",".select-category",function(){var b=$(this).find("option:selected").index()-1;$(".select-class").html('<option value="">请选择</option>'),b>=0&&c(a[b].childs,".select-class")});var e=$("#selectCateNumber").text(),f=e.substring(0,3)+"000000";if(!isNaN(e)&&9==e.length){var g=$(".select-category option[value="+f+"]").attr("selected",!0).index()-1;c(a[g].childs,".select-class"),$(".select-class option[value="+e+"]").attr("selected",!0);var h=$('.publishForm input[name="refrenceId"]').val();$("#color-other").load("/dealer/weshop/product/attr",{dealNo:e,productId:h},function(){d.itemCheck(),d.initOtherData(),0==$("#otherClass").length?d.initAloneColor(b):d.initOtherItems(b)})}$(".publishForm").on("change",".select-class",function(){var a=$(this).val();$("#color-other").load("/dealer/weshop/product/attr",{dealNo:a})})},uploadImage:function(a){function b(a,b){var c='<li class="item"><img src="'+window.IMAGE_DOMIAN+a+'" style="width:100%;height:100%;" /><a class="close_btn iconfont" href="javascript:;">&#xe612;</a>';c+='<input type="hidden" name="images" value='+a+" />",c+='<input type="hidden" name="imagesName" value='+b+" /></li>";var d=$("#show_img"),e=$("#show_img li").length;6>e?d.append(c):remind("error","产品主图最多六张，请先删除再上传")}function c(a,b){var c=$("#"+a).parents("tr");if(b.toString().length>6){c.find(".colorarea").html('<img src="'+window.IMAGE_DOMIAN+b+'" width="13" height="13"/>');var d=a.split("_");$("input[value="+d[1]+"]").next().val(window.IMAGE_DOMIAN+b)}else c.find(".colorarea").css("background",b)}var d=this;seajs.use(["$","ajaxFileUpload"],function($){$.ajaxFileUpload({url:"/dealer/weshop/upload",secureuri:!1,fileElementId:a,dataType:"json",success:function(e){$(".publishForm").on("change","#"+a,function(){d.uploadImage(a)}),121e3!=e.code?console.log(e.code):"uploadProductImg"==a?b(e.rows[0].path,e.rows[0].origName):c(a,e.rows[0].path)}})})},deleteImg:function(){$("#show_img").on("click",".close_btn",function(){var a=$(this).parents(".item");a.find("img").attr("src",""),a.remove()})},deleteColorImg:function(){$("#color-other").on("click",".colorImg-delete",function(){var a=$(this).parents("tr");confirmDialog("确认要删除颜色吗？",function(){a.find(".colorarea img").remove();var b=a.find(".input_file").attr("id"),c=b.split("_");$("input[value="+c[1]+"]").next().val("")})})}};