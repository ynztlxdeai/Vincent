function loadData() {
	// 1.创建异步XMLHttpRequest对象
	var xhr = createXMLHttpRequest();
	// 2.设置状态改变触发一个函数
	xhr.onreadystatechange = function(){
		// 回调函数.
		if(xhr.readyState == 4){// 请求发送完成
			if(xhr.status == 200){// 响应也正确
				var data = xhr.responseText;
				document.getElementById("d1").innerHTML=data;
			}
		}
	}
	// 3.打开一个连接：
	xhr.open("GET","/WEB15/ServletDemo1?name=张三&password=123",true);

	// 4.发送请求
	xhr.send(null);
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