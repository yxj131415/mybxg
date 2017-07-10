require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery.min',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    cookie : 'jquery-cookie/jquery.cookie',
    common : '../js/common',
    login : '../js/login',
    teacher_list : '../js/teacher_list'
  },
  shim :{
    bootstrap : {
     deps : ['jquery']
    }
  }
});
