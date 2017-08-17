<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${ pageContext.request.contextPath }/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="${ pageContext.request.contextPath }/ajax_jq/ajax_jq.js"></script>
</head>
<body>
<h1>JQuery的AJAX的load方法</h1>
<input id="bt1" type="button" value="异步使用JQ的load方法获取数据"/>
<div id="d1" style="width:200px;height:200px;border:1px solid blue"></div>

<h1>JQuery的AJAX的get方法</h1>
<input id="bt2" type="button" value="异步使用JQ的get方法获取数据"/>
<div id="d2" style="width:200px;height:200px;border:1px solid blue"></div>

<h1>JQuery的AJAX的post方法</h1>
<input id="bt3" type="button" value="异步使用JQ的post方法获取数据"/>
<div id="d3" style="width:200px;height:200px;border:1px solid blue"></div>

<h1>JQuery的AJAX的ajax方法</h1>
<input id="bt4" type="button" value="异步使用JQ的ajax方法获取数据"/>
<div id="d4" style="width:200px;height:200px;border:1px solid blue"></div>
</body>
</html>