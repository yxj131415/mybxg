define(['jquery','template','util','bootstrap'],function($,template,util){
  
  util.setMenu(location.pathname);
  //请求教师数据
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType:'json',
        success:function(data){
            if(data.code == 200){
               //请求成功，渲染页面
               // console.log(data);
               var html = template('teacherTpl',{list:data.result});
               $('#teacherInfo').html(html);
               //讲师启用和注销功能
               $('#teacherInfo').find('.switchBtn').click(function(){
                    var tcId = $(this).parent().attr('data-id');
                    var tcStatus = $(this).parent().attr('data-status');
                    var that = this;
                    $.ajax({
                      type:'post',
                      url:'/api/teacher/handle',
                      data:{tc_id:tcId,tc_status:tcStatus},
                      dataType:'json',
                      success:function(data){
                         $(that).parent().attr('data-status',data.result.tc_status);
                           if(data.result.tc_status == 0){
                             $(that).text('注 销');
                           }else{
                             $(that).text('启 用');
                           }
                      }
                    })
               })

               $('#teacherInfo').find('.preview').click(function(){
                    var tcId = $(this).parent().attr('data-id');
                    //请求数据
                    $.ajax({
                      type:'get',
                      url:'/api/teacher/view',
                      data:{tc_id:tcId},
                      success:function(data){
                           var html = template('teacherModalTpl',data.result);
                            $('#teacherModalInfo').html(html);
                            //显示模态框
                            $('#teacherModal').modal();
                      }
                    })
               })
            }
        }
    })
})
