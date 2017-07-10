define(['jquery','cookie'],function($){
    //实现登录功能
    $('#btn').click(function(){
        //异步请求数据
         $.ajax({
          //根据文档填写相关数据
          type:'post',
          url:'/api/login',
          data:$('#loginForm').serialize(),
          dataType:'json',
          success:function(data){
             if(data.code == 200){
                //将数据保存到cookie中，方便别的页面使用
                //cookie只能保存字符串,如果想让其他的页面都能使用，将数据保存到根路径下
                $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
                //请求成功跳转到主页面
                location.href = '/index/index';
             }
          }
        });
         return false;
    })
})
