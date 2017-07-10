define(['jquery','template','bootstrap'],function($,template){
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
