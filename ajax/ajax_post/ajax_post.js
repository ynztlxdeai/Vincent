function loadData(){
	// 1.创建异步对象
	var xhr = createXMLHttpRequest();
	// 2.设置状态改变触发的函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				document.getElementById("d1").innerHTML=xhr.responseText;
			}
		}
	}
	// 3.打开连接
	xhr.open("POST","/WEB15/ServletDemo2",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 4.发送数据
	xhr.send("name=李四&password=456");
}

function createXMLHttpRequest() {
	var xmlHttp;
	try { // Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		try {// Internet Explorer
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
			}
		}
	}

	return xmlHttp;
}