/**
 * Created by xiaojun on 15/7/23.
 */
$(function() {
    if( !localStorage.data ){
        localStorage.data = '{"note":[]}';
    }
    var data = JSON.parse(localStorage['data']);
    initeNum();

    for (var i = 0; i < data.note.length; i++) {
        $("#header ul").append("<li>" + data.note[i].noteName + "（<span>" + data.note[i].noteNum + "</span>）</li>");
    }
    var num = null;
    $("#header ul li").click(function () {
        var oli = $(this);
        num = oli.index();
        var length = data.note[num].noteTips.length;
        $(this).addClass("click").siblings().removeClass("click");
        var content = '';                                 //点击某一个li跳到相应地内容
        for (var i = 0; i < length; i++) {
            var contentData = data.note[num].noteTips[i].noteContent;
            //console.log(contentData);
            content = content + '<div id="head_content" class="head_content"><h4>' + data.note[num].noteTips[i].noteTip + '</h4><p>' + contentData.replace(/<[^>]+>/g,"").substring(0,50) + '</p></div>';
        }
        $("#note_content").html(content);
        $(".head_content").addClass("animated fadeIn");     //弹出动画
        detail();                                           //点击每一栏，在content里面显示细节
        return num;
    })
    $("#del i").click(function () {                       //删除文件
        var bln = window.confirm("确定要删除吗?");
        if(bln == false) return false;
        data.note.splice(num, 1);
        getDocument();
    })
    $("#header p i").click(function () {                   //添加文件夹名字
        addDocument();
        //getDocument();
    })
    $("#note").click(function(){                            //自动点击标题栏（功能为实现）
        addNote();
        $("#header").find("ul li:eq(num)").click();
    })
    function addDocument() {                             //添加文件夹名字
        var a = prompt("请输入文件夹名字");
        if (a == null) return false;
        initData(a);
        getDocument();
    }
    function initData(name) {                                //添加时初始化名字
        var addData = {};
        addData.noteName = name;
        addData.noteNum = 1;
        addData.noteTips = [];
        addData.noteTips[0]={};
        addData.noteTips[0].noteTip = "笔记标题";
        addData.noteTips[0].noteContent = "笔记内容";
        data.note = data.note.concat(addData);
    }
    function getDocument() {                             //获取localStorage
        var localStorage = window.localStorage;
        localStorage.data = JSON.stringify(data);
        location.reload();
    }
    function initeNum(){                                //计算每个笔记的条数
        var note = data.note;
        //console.log(note.length);
        for(var i = 0;i<note.length;i++){
            data.note[i].noteNum = note[i].noteTips.length;
        }
    }

    function addNote() {                                //添加笔记函数
        var a = prompt("请输入笔记标题");
        if (a == null) return false;
        var addTip = {};
        addTip.noteTip = a;
        addTip.noteContent = "从这里开始写内容";
        data.note[num].noteTips= data.note[num].noteTips.concat(addTip);
        $(".click").click();
        addNumPretend();
        //var note = {
        //    "note": [
        //        {
        //            "noteName": "前端", "noteNum": "10", "noteTips": [
        //            {
        //                "noteTip": "函数",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "继承",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "闭包",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            }
        //        ]
        //        },
        //        {
        //            "noteName": "后台", "noteNum": "20", "noteTips": [
        //            {
        //                "noteTip": "跨域",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "安全",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "验证",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            }
        //        ]
        //        },
        //        {
        //            "noteName": "安卓", "noteNum": "30", "noteTips": [
        //            {
        //                "noteTip": "适配",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "苹果",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            },
        //            {
        //                "noteTip": "三星",
        //                "noteContent": "为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。"
        //            }
        //        ]
        //        }
        //    ]
        //}
        localStorage.data = JSON.stringify(data);
    }
    var a = 0;
    function detail(){                              //显示笔记的详细信息
        $("#note_content div").click(function(){
             a = $(this).index();
            var head = data.note[num].noteTips[a].noteTip,
                content = data.note[num].noteTips[a].noteContent;
            $("#content h1").text(head);
            getValue(content);
            return a;
        })
    }
    function getValue(a){                               //显示笔记内容的详细信息的函数
        var win = document.getElementById('myframe');
        win.contentWindow.showData(a);
        win.onload = function(){
            win.contentWindow.showData(a);
        }
    }
    function update(){
        var detail = window.frames['myframe'].htmlData,
            head = $("#content h1").text();
        console.log(num);
        data.note[num].noteTips[a].noteTip = head;
        data.note[num].noteTips[a].noteContent = detail;
        localStorage.data = JSON.stringify(data);
        console.log(detail);
        console.log(head);
        //alert(num+","+a);
    }
    $("#storage").click(function(){                 //储存到localStorage里面
        if(num == null && a == null) return false;
        update();
    })
    $("#delete").click(function(){
        del();
        $(".click").click();
    });
    function addNumPretend(){
        var number = $(".click span").text();
        var b = parseInt(number) + 1;
        $(".click span").text(b);
    }
    function del(){
        //alert(a);
        data.note[num].noteTips.splice(a, 1);
        var number = $(".click span").text();
        var b = parseInt(number) - 1;
        $(".click span").text(b);
        localStorage.data = JSON.stringify(data);

    }
})
