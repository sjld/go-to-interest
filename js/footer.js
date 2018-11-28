$(function(){
    //动态创建link引用header.js文件
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head")
})
$.ajax({
    url:"http://localhost:3000/footer.html",
    type:"get",
    success:function(res){
      
        $("#footer").replaceWith(res);
    }
})