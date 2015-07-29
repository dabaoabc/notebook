/**
 * Created by xiaojun on 15/7/26.
 */
$(function(){
    var height = $(document).height(); //浏览器当前窗口可视区域高度
    var width = $(document).width();
    $("body").height(height).width(width);
    //$("#content").attr("display","none");
    $("#head_content").click(function(){
        $("#content").attr("display","block");
    })
    //alert($(document).height()); //浏览器当前窗口文档的高度
    //alert($(document.body).height());//浏览器当前窗口文档body的高度
    //alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
    //alert($(window).width()); //浏览器当前窗口可视区域宽度
    //alert($(document).width());//浏览器当前窗口文档对象宽度
    //alert($(document.body).width());//浏览器当前窗口文档body的高度
    //alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin
    var minHeight1 = parseInt(height - 200);
    //alert(minHeight1);
    $("#note_content").height(minHeight1);
})