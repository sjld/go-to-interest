$(function(){
    //动态创建link引用header.js文件
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");

})
$.ajax({
    url:"http://localhost:3000/header.html",
    type:"get",
    success:function(res){
        $("#header").replaceWith(res);   
    }
})