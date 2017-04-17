<?php
//返回数据是xml
 header("Content-Type:text/xml;charset=utf-8");
 //不要缓存
 header("Cache-Control:no-cache")
 //接收的数据类型post或者get
 $username=$_POST['userName'];
 $info="";
 if($username=="123"){
	 $info="<res><mes>用户名不可用</mes></res>";
 }else{
	 $info="<res><mes>用户名可用</mes></res>";
	 ////01对xml的处理
	//02先获取到xhtml然后进行xml的解析
			var msg=openAX.responseXML.getElementByName("msg")
 }
echo $info;
?>