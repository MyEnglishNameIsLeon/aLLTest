<html>
<header>
<title>这是请求页面</title>
<meta charset="utf-8"/>
</header>
<body>
<form>
<p>用户名:<input type="text" id="userN"><input type="button" value="验证用户名" onclick="checkName()"></p>
<p>密码:<input type="text"></p>
<p>电邮:<input type="text"></p>
<p><input type="submit" value="用户注册"/></p>
---------------------------------------------------------------------

<p>用户名:<input type="text"><input type="button" value="验证用户名"></p>
<p>密码:<input type="text"></p>
电邮:<input type="text">
<p><input type="submit" value="用户注册"/></p>
</form>
</body>
<script type="text/javascript">
	var openAX=null; 
	//创建AJAX对象
	function getXmlHttps(){
	var xmlhttp=null;
		if(window.ActiveXObject){
			//ie
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}else
		{
			//hh,gg
			xmlhttp=new XMLHttpRequest();
		}
		return xmlhttp
	}

	//检测ajax创建成功不
	function checkName(){
		openAX=getXmlHttps();
		var url="requestPage.php?username="+$("userN").value;
		console.log(url)
		if(openAX){
			//通过openAX对象发送请求到服务器的某个页面
			//打开请求
			openAX.open("get",url,true);//get和post方式进行请求  true表示异步机制如果是false表示不使用异步机制  
			//先把处理结果放置好
			openAX.onreadystatechange=deal;
			//发送请求,如果是get请求则填入null,如果是post的请求就填写实际数据
			openAX.send(null);//第二个参数是指定url,对某个页面发出ajax请求（本质是http的请求）
		}else{
			console.log("对象创建失败")
		}
	}
	//回调函数(记载结果)
	function deal(){
	  //我要取出
	  if(openAX.readyState==4){
		//取出value 三种格式text,json,xml
		console.log("服务器返回的是:"+openAX.responseT ext);		
	  }
	}
	//获取对象
	function $(id){
		return document.getElementById(id);
	}
	/*
	方法
		01.open()  打开请求 
		02.send
		03.setRequestHeader
		
	属性
		01.onreadystatechange
		02.readyState
		03.responseText
		04.responseXML	返回dom和xml文档对象
		05.status		返回服务器的状态码
		06.statusText	返回服务器状态文本信息
	*/
	
	
	/*
	get的提交方式会存在缓存问题
		解决办法+当前的时间
		"requestPage.php?mytime="+new Date()+"username="+$("userN").value;
		禁用缓存
		header("Content-Type:text/xml;charset=utf-8");
		header("Cache-Control;no-cache");
	*/
</script>
</html>