require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery.min',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    validate : 'validate/jquery-validate.min',
    form : 'jquery-form/jquery.form',
    cookie : 'jquery-cookie/jquery.cookie',
    common : '../js/common',
    login : '../js/login',
    teacher_list : '../js/teacher_list',
    teacher_add : '../js/teacher_add',
    util : '../js/util',
    index : '../js/index',
    settings : '../js/settings',
    uploadify : 'uploadify/jquery.uploadify.min',
    region : 'jquery-region/jquery.region',
    editor : 'ckeditor/ckeditor'
  },
  shim :{
    bootstrap : {
      deps : ['jquery']
    },
    language : {
      deps : ['jquery','datepicker']
    },
    validate : {
       deps : ['jquery']
    },
    uploadify : {
       deps : ['jquery']
    },
    editor : {
       exports : 'CKEDITOR'
    }
  }
});
