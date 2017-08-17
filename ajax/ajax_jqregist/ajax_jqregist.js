$(function(){
	// 给用户名的文本框绑定一个事件：
	$("#username").blur(function(){
		// 获得文本框的值:document.getELementById().value;
		var username = $(this).val();
		// 使用jquery的ajax的操作异步发送请求.
		$.post("/WEB15/ServletDemo3",{"username":username},function(data){
			if(data==1){
				// 用户名可以使用
				$("#s1").html("<font color='green'>用户名可以使用</font>");
				$("#regBut").prop("disabled",false);
			}else if(data==2){
				// 用户名已经存在
				$("#s1").html("<font color='red'>用户名已经被占用</font>");
				$("#regBut").prop("disabled",true);
			}
		});
	});
});