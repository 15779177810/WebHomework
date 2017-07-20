/**
 * 打地鼠
 */
//事件 onload 表示页面加载完成时触发   onfocus 表示获取焦点时触发  onsubmit表示表单提交按钮被点击时触发 onclick 表示鼠标单击被触发
//匿名函数
    //floor

window.onload=function() {
    //定义 box的宽和高
    var box_width = 100;
    var box_height = 100;
    //定义当前box的行数和列数
    var box_row = 5;
    var box_col = 6;

    //获取当前要插入div的父节点对象 document.getElementById("id") 返回当前id属性值对应的第一个对象
    var divParent = document.getElementById("game_panel");

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            //创建div子节点 createElement
            var divnode = document.createElement("div");
            //div子节点 设置样式 class setAttribute(属性,属性值)
            divnode.setAttribute("class", "box");
            //  divnode.setAttribute(

         //   divnode.setAttribute("onclick", "clickPic(this)");
            divnode.setAttribute("id", i * box_col + j);
            //style设置
            divnode.setAttribute("style", "width:" + box_width + "px;height:" + box_height + "px;left:" + (0 + j * 100) + "px;top:" + (0 + i * 100) + "px;");
            //appendChild()添加子元素
            divParent.appendChild(divnode);

        }
    }
    //一次调用  用匿名方法
    //  window.setInterval("getElementById(a).setAttribute("class","diglettup")",1000);

    window.setInterval(function () {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 6; j++) {
                //
                var divnode = document.getElementById( i * box_col + j);
                //div子节点 设置样式 class setAttribute(属性,属性值)
                divnode.setAttribute("class", "box");
                //去除onclick监听
                divnode.setAttribute("onclick",null);
            }
        }
                var count = Math.floor(Math.random() * 3 + 1);
                for (var i = 0; i < count; i++) {
                    var a = Math.round(Math.random() * 29);
                    document.getElementById(a).setAttribute("class", "diglettup");
                    //
                    document.getElementById(a).setAttribute("onclick", "clickPic(this)");
                }
            }

    ,2000);

};
/*方法定义在外边*/
function clickPic(qwe) {

        qwe.setAttribute("class", "diglettpress");

    }
















