define(['jquery','template','cookie'],function($,template){
     // 控制左侧菜单的展开和折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    //请求数据
    //设置退出登录页面,基本上所有的页面都有退出登录部分，所以将
    //退出登录写在公共部分
    $('#logout').click(function(){
        $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    //退出成功后清除cookie中保存的数据
                    $.removeCookie('loginInfo',{path:'/'});
                    //请求成功跳转到登录页面
                    location.href = '/';
                }
            }
        });
    })
    var info = $.cookie('loginInfo');
    //渲染头像
    var tpl = '<div class="avatar img-circle">'
              +'<img src="{{tc_avatar}}">'
              +'</div>'
              +'<h4>{{tc_name}}</h4>';
    var html = template.render(tpl,info?JSON.parse(info):{});
    $('.aside .profile').html(html);
    //验证是否登录过
    if(!$.cookie('PHPSESSID')&& location.pathname !='/'&&location.href != '/index'){
        location.href = '/';
    }
})
	
