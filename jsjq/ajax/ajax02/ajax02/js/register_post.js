function checkName() {
	//	console.log(11)	
	var ginfo = document.getElementById("uname").value //获取val
	var rinfo = document.getElementById("username_memo"); //获取放置的id位置
	/*创建ajax*/
	var ajax = ajaxCreation();
	/*构造url*/
	var url = "register_do.php";
	var postStr= "uname="+ ginfo;
	/*打开连接，指定发送方式*/
	ajax.open("POST",url, true);
	/*定义传输的文件HTTP头信息
	 * */
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	/*发送数据*/
	ajax.send(postStr);
	/*传输返回结果*/
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4&&ajax.status==200){
			console.log(ajax.responseText)
			if(ajax.responseText==1){
				rinfo.innerHTML="用户已经存在"
			}else{
				rinfo.innerHTML="用户不存在"
			}
		}
	}
}