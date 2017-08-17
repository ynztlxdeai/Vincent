// jquery的load方法
$(function(){
	// 给按钮1绑定一个click事件：
	$("#bt1").click(function(){
		$("#d1").load("/WEB15/ServletDemo4",{"name":"张三","password":"123"},function(data){
			if(data == 1){
				$(this).html("张三");
			}else{
				$(this).html("其他");
			}
		});
	});
});

// 使用jquery的get方法:
$(function(){
	$("#bt2").click(function(){
		$.get("/WEB15/ServletDemo4",{"name":"李四","password":"345"},function(data){
			$("#d2").html(data);
		});
	});
});

//使用jquery的post方法:
$(function(){
	$("#bt3").click(function(){
		$.post("/WEB15/ServletDemo4",{"name":"王五","password":"456"},function(data){
			$("#d3").html(data);
		});
	});
});

// 使用jquery的ajax方法:
$(function(){
	$("#bt4").click(function(){
		$.ajax({
			type:"post",
			url:"/WEB15/ServletDemo4",
			data:"name=aaa&password=123",
			success:function(data){
				$("#d4").html(data);
			}
			
		});
	});
});
