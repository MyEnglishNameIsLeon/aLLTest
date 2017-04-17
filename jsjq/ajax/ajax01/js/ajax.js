function btn_get_click() {
	var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	var user = document.getElementById("user").value;
	var pwd = document.getElementById("password").value;
	var textzoom = document.getElementsByTagName("textarea")[0].value;
	//	var boy = document.getElementById("boy").value;
	//	var girl = document.getElementById("boy").value;
	xmlHttp.open("get", "success.php?username=" + encodeURIComponent(user) + "&password=" + encodeURIComponent(pwd) + "&textzoom" + enableExternalCapture(textzoom));
	xmlHttp.onreadystatechange = function() {
		console.log(xmlHttp.readyState)
		if (xmlHttp.readyState == 4 && xmlHttp.readyState == 200) {
			document.getElementById("result").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.send(null);
}