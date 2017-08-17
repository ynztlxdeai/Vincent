<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${ pageContext.request.contextPath }/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="${ pageContext.request.contextPath }/ajax_jqregist/ajax_jqregist.js"></script>
</head>
<body>
<h1>用户注册页面</h1>
<form action="" method="post">
	<table border="1" width="600">
		<tr>
			<td>
				用户名
			</td>
			<td>
				<input type="text" id="username" name="username"/><span id="s1"></span>
			</td>
		</tr>
		<tr>	
			<td>
				密码
			</td>
			<td>
				<input type="password" name="password"/>
			</td>
		</tr>
		<tr>
			<td>
				邮箱
			</td>
			<td>
				<input type="text" name="email"/>
			</td>
		</tr>
		<tr>	
			<td>
				电话
			</td>
			<td>
				<input type="text" name="telephone"/>
			</td>
		</tr>
		<tr>	
			<td colspan="2">
				<input id="regBut" type="submit" value="注册"/>
			</td>
		</tr>

		
	</table>

</form>
</body>
</html>