<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${ pageContext.request.contextPath }/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="${ pageContext.request.contextPath }/ajax_province_json/ajax_province_json.js"></script>
</head>
<body>
<h1>省市联动的案例</h1>
<select id="province">
	<option value="">--请选择--</option>
	<option value="黑龙江">黑龙江</option>
	<option value="吉林">吉林</option>
	<option value="辽宁">辽宁</option>
</select>
<select id="city">
	<option value="">--请选择--</option>
</select>
</body>
</html>