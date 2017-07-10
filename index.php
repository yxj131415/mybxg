<?php
  $pathname = 'index';
  $filename = 'index';
  if(isset($_SERVER['PATH_INFO'])){
      $str = substr($_SERVER['PATH_INFO'],1);//index/login
      $arr = explode('/',$str);
      if(count($arr) == 2){
        $pathname = $arr[0];
        $filename = $arr[1];
      }else{
         $filename = 'login';
      }
  }else{
     $filename = 'login';
  }
  include('./views/'.$pathname.'/'.$filename.'.html');
?>
