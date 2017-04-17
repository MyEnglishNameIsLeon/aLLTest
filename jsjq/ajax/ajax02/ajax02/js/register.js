function checkName() {
	//	console.log(11)	
	var ginfo = document.getElementById("uname").value //获取val

	var rinfo = document.getElementById("username_memo"); //获取放置的id位置
	/*创建ajax*/
	var ajax = ajaxCreation();
	/*构造url*/
	var url = "register_do.php?uname=" + ginfo;
	/*打开连接，指定发送方式*/
	ajax.open("GET",url, true);
	/*发送数据*/
	ajax.send(null);
	/*接收服务返回结果
	通过判断是否为ajax结果是否为连接成功码：4？
	 * */
	ajax.onreadystatechange = function() {
			if (ajax.readyState == 4) {
				var res = ajax.responseText;
				console.log(res)
				if (res) {
					con = '<p style="color:red">用户存在</p>'
				} else {
					con = '<p style="color:green">用户不存在</p>'
				}
				//						console.log(rinfo)
				rinfo.innerHTML = con;
			}
		}
		//	ajax.close()
}