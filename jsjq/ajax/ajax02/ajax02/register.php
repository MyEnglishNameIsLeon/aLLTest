<html>
	<head>
		<title>
			表单验证
		</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="css/register.css"/>
		<script type="text/javascript" src="js/jquery-1.12.1.min.js">
		</script>
		<script type="text/javascript" src="js/ajax.js">
		</script>
		<script type="text/javascript" src="js/register_post.js">
		</script>
	</head>
	<body>
		<center>
			<h2>
				注册页面
			</h2>
		</center>
		<div class="form-out">
			<form action="" method="post">
				<table border="" cellspacing="" cellpadding="">
					<tr>
						<td align="right">
							请输入账号:
						</td>
						<td>
							<input type="text" name="username" id="uname" placeholder="请再次输入账号" onchange="javascript:checkName()"/>
						</td>
						<td id="username_memo">
						</td>
					</tr>
					<tr>
						<td align="right">
							请输入密码:
						</td>
						<td>
							<input type="password" name="userpass" id="upass"  placeholder="请输入密码"/>
						</td>
						<td id="userpass_memo">
						</td>
					</tr>
					<tr>
						<td>
							请再次输入密码:
						</td>
						<td>
							<input type="password" name="repass" id="reupass"  placeholder="请再次输入密码"/>
						</td>
						<td id="reuserpass_memo">
						</td>
					</tr>
					<tr>
						<td align="right">
							E-mail:
						</td>
						<td>
							<input type="text" name="usermail" id="umail" placeholder="请输入E-mail"/>
						</td>
						<td id="umail_memo">
						</td>
					</tr>
					<tr>
						<td colspan="3">
							<input type="checkbox" name="agree" id="agree" />
							同意用户使用协议
						</td>
					</tr>
					<tr>
						<td>
							<input type="submit" value="注册" />
						</td>
						<td colspan="2">
							<input type="reset" value="重置" />
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>