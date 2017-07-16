define(['jquery','template','util','bootstrap','validate','form'],function($,template,util){
    util.setMenu('/course/add');
    var csId = util.qs('cs_id',location.search);
      $.ajax({
        type : 'post',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
            $('#addBtn').click(function(){
                var html = template('modalTpl',{operate:'课时添加'});
                $('#modalInfo').html(html);
                $('#chapterModal').modal();
                lessonSubmit('/api/course/chapter/add');
            })
            $('#lessonInfo .editBtn').click(function(){
                var ctId = $(this).attr("data-ctId");
                $.ajax({
                  type : 'get',
                  url : '/api/course/chapter/edit',
                  data : {ct_id : ctId},
                  dataType : 'json',
                  success : function(data){
                      var html = template('modalTpl',data.result);
                      $('#modalInfo').html(html);
                      $('#chapterModal').modal();
                      lessonSubmit('/api/course/chapter/modify');     
                  }
                })
            })
        }
      });
      //课程表单提交
    function lessonSubmit(url){
          $('#lessonForm').validate({
             sendForm : false,
             valid : function (){
                var isfree = $("#freeFlag:checked").length == 1 ? 1:0;
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    data : {ct_cs_id:csId,ct_is_free:isfree},
                    dataType : 'json',
                    success : function (data){
                        if(data.code == 200){
                           location.reload();
                        }
                    }
                })
             }
          })
      }
})

