$(function(){
   var pno=0;
   function loadPage(no=0){
     pno=no;
    $.ajax({
      url:"http://localhost:3000/gonglue/page",
      type:"get",
      data:{pno},
      dataType:"json",
      success:function(output){
        var {products,pageCount}=output;  
        var html="";
          for(var r of products){
              html +=`<div class="bg-white  border-bottom">
              <div class="row  pt-5 pb-3">
                  <div class="col-lg-3 text-center">
                      <img src="${r.pic}" alt=""/>
                  </div>
                  <div class="col-lg-9 mt-3">
                      <p class="desc"><a href=""><span>${r.title}</span> | ${r.subtitle}}</a></p>
                      <p class="data small"> ${r.data}</p>
                  </div>
              </div>
              <p class="text-right mr-5"><a href="">阅读全文 →</a></p>
              </div>`
          $("#twoclass").html(html);
          } 
          var html="";
          for(var i=1;i<=pageCount;i++){
            html+=` <li class="text-muted small page-link ${i==pno+1?'active':''}">${i}</li>`
          }  
          $ul.children(":not(:first-child):not(:last-child)").remove()
          $ul.children().first().after(html)
          if(pno==0){
            $ul.children().first().addClass("disabled")
          }else{
            $ul.children().first().removeClass("disabled")
          }
          if(pno==pageCount-1){
            $ul.children().last().addClass("disabled")
          }else{
            $ul.children().last().removeClass("disabled")
          }
        }
    })}
    loadPage();
  var $ul=$("#page>ul")
  $ul.on("click","li",function(){
    var $li=$(this);
    //除了禁用和当前正在激活按钮之外才能点击
    if(!$li.is(".disabled,.active")){
      if($li.is(":first-child"))//上一页
        var no=pno-1;//新页号=当前页号-1
      else if($li.is(":last-child"))
        var no=pno+1;//新页号=当前页号+1
      else//1、2、3按钮
        var no=$li.html()-1;//新页号=按钮内容-1
      loadPage(no);//重新加载新页号的页面内容
    }
  })
})