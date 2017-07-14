define(['jquery','template','util','editor','uploadify','region','datepicker','language','validate','form'],function($,template,util,CKEDITOR){
    util.setMenu('/index/index');
    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType:'json',
        success:function(data){
          //用模板引擎渲染页面
           var html = template('settingTpl',data.result);
           $('#settingInfo').html(html);
           //上传图片
           $('#upfile').uploadify({
              width : 120,
              height : 120,
              fileObjName : 'tc_avatar',
              buttonText : '',
              swf : '/public/assets/uploadify/uploadify.swf',
              //上传图片地址
              uploader : '/api/uploader/avatar',
              //成功上传回调函数
              onUploadSuccess : function(a,b,c){
                  var obj = JSON.parse(b);
                  // console.log(b);b.result.path服务器地址
                  // 改变图片地址，将图片上传到服务器中
                  $('#settingInfo img').attr('src',obj.result.path);
              }
           });
           //省市三级联动设置
           $('#region').region({
              url : '/public/assets/jquery-region/region.json'
           });
           //处理富文本
           CKEDITOR.replace('editor',{
              toolbarGroups : [
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                { name: 'others', groups: [ 'others' ] },
                { name: 'about', groups: [ 'about' ] }
              ]
           });
           //数据提交
           $('#settingForm').validate({
              //阻止表单默认提交
               sendForm : false,
               valid : function(){
                  for(var instance in CKEDITOR.instances){
                      CKEDITOR.instances[instance].updateElement();
                  }
                 var p = $('#p option:selected').text();
                 var c = $('#c option:selected').text();
                 var d = $('#d option:selected').text();
                 var homedown = p + '|' + c + '|' + d;
                  $(this).ajaxSubmit({
                      type : 'post',
                      url : '/api/teacher/modify',
                      data : {tc_hometown : homedown},
                      dataType : 'json',
                      success : function(data){
                          if(data.code == 200){
                             location.reload();
                          }
                      }
                  })
               }
           })
        }
    })
})

